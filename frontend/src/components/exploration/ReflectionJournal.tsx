import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { lifeTimelineEvents, introGuide } from '../../data/SelfExplorationData';

interface JournalEntry {
  id: number;
  date: string;
  title: string;
  content: string;
  tags: string[];
}

interface NewEntry {
  title: string;
  content: string;
  tags: string;
}

const ReflectionJournal: React.FC = (): JSX.Element => {
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([]);
  const [editingEntry, setEditingEntry] = useState<JournalEntry | null>(null);
  const [newEntry, setNewEntry] = useState<NewEntry>({
    title: '',
    content: '',
    tags: ''
  });

  useEffect(() => {
    const saved = localStorage.getItem('journalEntries');
    if (saved) {
      setJournalEntries(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('journalEntries', JSON.stringify(journalEntries));
  }, [journalEntries]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewEntry(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCancelEdit = () => {
    setEditingEntry(null);
    setNewEntry({ title: '', content: '', tags: '' });
  };

  const handleEditEntry = (entry: JournalEntry) => {
    setEditingEntry(entry);
    setNewEntry({
      title: entry.title,
      content: entry.content,
      tags: entry.tags.join(', ')
    });
  };

  const handleDeleteEntry = (id: number) => {
    setJournalEntries(journalEntries.filter(entry => entry.id !== id));
  };

  const handleAddEntry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEntry.title.trim() || !newEntry.content.trim()) return;

    if (editingEntry) {
      setJournalEntries(journalEntries.map(entry => 
        entry.id === editingEntry.id
          ? {
              ...entry,
              title: newEntry.title,
              content: newEntry.content,
              tags: newEntry.tags.split(',').map(tag => tag.trim())
            }
          : entry
      ));
      setEditingEntry(null);
    } else {
      const newEntryWithId: JournalEntry = {
        ...newEntry,
        id: Date.now(),
        date: new Date().toISOString().split('T')[0],
        tags: newEntry.tags.split(',').map(tag => tag.trim())
      };
      setJournalEntries([newEntryWithId, ...journalEntries]);
    }
    setNewEntry({ title: '', content: '', tags: '' });
  };

  const reflectionPrompts = [
    '今天有什么情绪特别强烈？这些情绪可能反映了什么需求或价值观？',
    '你注意到自己有什么重复出现的思维或行为模式吗？',
    '如果你的内在小孩现在需要什么，那会是什么？',
    '在最近的人际互动中，你学到了什么关于自己的事？'
  ];

  return (
    <div className="reflection-journal-section">
      <h2>梳理成长历程</h2>
      <p className="lead">通过回顾生命中的重要阶段，理解它们如何塑造了今天的你。</p>

      <Card className="mb-4">
        <Card.Body>
          <h4>{introGuide.title}</h4>
          {introGuide.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          <ul>
            {introGuide.listItems.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
          <Alert variant="info"><strong>提示：</strong>{introGuide.tip}</Alert>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <h4>生命历程事件</h4>
          {lifeTimelineEvents.map(event => (
            <div key={event.id} className="mb-3 p-3 border rounded bg-light">
              <h5>{event.age}: {event.title}</h5>
              <p><strong>描述:</strong> {event.description}</p>
              <p><strong>影响:</strong> {event.impact}</p>
              <p><strong>情绪:</strong> {event.emotions.join(', ')}</p>
            </div>
          ))}
        </Card.Body>
      </Card>

      <h2>反思日志</h2>
      <p className="lead">记录你的思考、洞察和成长</p>

      <Row>
        <Col md={8}>
          <Card className="mb-4">
            <Card.Body>
              <h4>新日志条目</h4>
              <Form onSubmit={handleAddEntry}>
                <Form.Group className="mb-3">
                  <Form.Label>标题</Form.Label>
                  <Form.Control name="title" value={newEntry.title} onChange={handleInputChange} placeholder="给你的反思起个标题" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>内容</Form.Label>
                  <Form.Control as="textarea" rows={5} name="content" value={newEntry.content} onChange={handleInputChange} placeholder="写下你的反思..." />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>标签</Form.Label>
                  <Form.Control name="tags" value={newEntry.tags} onChange={handleInputChange} placeholder="用逗号分隔多个标签" />
                </Form.Group>
                <Button type="submit" variant="primary">{editingEntry ? '更新日志' : '保存日志'}</Button>
                {editingEntry && <Button variant="secondary" className="ms-2" onClick={handleCancelEdit}>取消编辑</Button>}
              </Form>
            </Card.Body>
          </Card>

          <div className="journal-entries">
            <h4>我的日志</h4>
            {journalEntries.length === 0 ? <p className="text-muted">你还没有添加任何反思日志。</p> :
              journalEntries.map(entry => (
                <Card key={entry.id} className="mb-3">
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <h5>{entry.title}</h5>
                        <p className="text-muted mb-2">{entry.date}</p>
                        <p>{entry.content}</p>
                        <div>{entry.tags.map((tag, i) => <span key={i} className="badge bg-light text-dark me-2 mb-2">{tag}</span>)}</div>
                      </div>
                      <div>
                        <Button variant="link" className="p-0 me-2" onClick={() => handleEditEntry(entry)}>编辑</Button>
                        <Button variant="link" className="p-0 text-danger" onClick={() => handleDeleteEntry(entry.id)}>删除</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              ))}
          </div>
        </Col>

        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <h4>反思提示</h4>
              <p>尝试点击以下提示，激发你的反思内容：</p>
              {reflectionPrompts.map((prompt, i) => (
                <div key={i} className="prompt-item p-3 bg-light rounded mb-2 d-flex justify-content-between align-items-start">
                  <p className="mb-0">{prompt}</p>
                  <Button size="sm" onClick={() => setNewEntry(prev => ({ ...prev, content: prev.content + '\n' + prompt }))}>插入</Button>
                </div>
              ))}
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h4>标签云</h4>
              <div className="tag-cloud p-3">
                {["情绪觉察","关系","成长","童年记忆","自我关怀","内在对话","边界","需求"].map((tag, i) => (
                  <span key={i} className="badge bg-secondary me-2 mb-2 p-2" role="button" onClick={() => setNewEntry(prev => ({ ...prev, tags: prev.tags ? prev.tags + ', ' + tag : tag }))}>{tag}</span>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ReflectionJournal;
