import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';

interface Note {
  id: string;
  content: string;
}

const NotesPage: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNoteContent, setNewNoteContent] = useState<string>('');
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [editingNoteContent, setEditingNoteContent] = useState<string>('');

  useEffect(() => {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = () => {
    if (newNoteContent.trim() === '') return;
    const newNote: Note = {
      id: Date.now().toString(),
      content: newNoteContent.trim(),
    };
    setNotes([...notes, newNote]);
    setNewNoteContent('');
  };

  const handleDeleteNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const handleEditNote = (note: Note) => {
    setEditingNoteId(note.id);
    setEditingNoteContent(note.content);
  };

  const handleSaveEdit = () => {
    setNotes(notes.map(note =>
      note.id === editingNoteId ? { ...note, content: editingNoteContent.trim() } : note
    ));
    setEditingNoteId(null);
    setEditingNoteContent('');
  };

  const handleCancelEdit = () => {
    setEditingNoteId(null);
    setEditingNoteContent('');
  };

  return (
    <Container className="mt-4">
      <h2>我的笔记</h2>
      <Form className="mb-4">
        <Form.Group className="mb-3" controlId="newNoteContent">
          <Form.Label>添加新笔记</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={newNoteContent}
            onChange={(e) => setNewNoteContent(e.target.value)}
            placeholder="在这里输入您的笔记内容..."
            className="w-100"
          />
        </Form.Group>
        <Button variant="primary" onClick={handleAddNote}>
          添加笔记
        </Button>
      </Form>

      <Row>
        {notes.length === 0 ? (
          <Col><p>还没有笔记，快来添加第一条吧！</p></Col>
        ) : (
          notes.map((note) => (
            <Col key={note.id} xs={12} md={6} lg={4} className="mb-4">
              <Card>
                <Card.Body>
                  {editingNoteId === note.id ? (
                    <>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        value={editingNoteContent}
                        onChange={(e) => setEditingNoteContent(e.target.value)}
                        className="w-100"
                      />
                      <div className="mt-2">
                        <Button variant="success" size="sm" onClick={handleSaveEdit} className="me-2">
                          保存
                        </Button>
                        <Button variant="secondary" size="sm" onClick={handleCancelEdit}>
                          取消
                        </Button>
                      </div>
                    </>
                  ) : (
                    <>
                      <Card.Text>{note.content}</Card.Text>
                      <Button variant="info" size="sm" onClick={() => handleEditNote(note)} className="me-2">
                        编辑
                      </Button>
                      <Button variant="danger" size="sm" onClick={() => handleDeleteNote(note.id)}>
                        删除
                      </Button>
                    </>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default NotesPage;