import React, { useState } from 'react';
// 导入react-bootstrap组件，需要先安装@types/react-bootstrap类型声明
import { Card, Row, Col, Form, Button } from 'react-bootstrap';

interface DialogueRecord {
  id: number;
  topic: string;
  myVoice: string;
  innerVoice: string;
  insight: string;
}

const InnerDialogue: React.FC = () => {
  const [dialogueRecords, setDialogueRecords] = useState<DialogueRecord[]>([]);
  const [currentDialogue, setCurrentDialogue] = useState<DialogueRecord>({
    id: 0,
    topic: '',
    myVoice: '',
    innerVoice: '',
    insight: '',
  });
  const [editId, setEditId] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCurrentDialogue({ ...currentDialogue, [name]: value });
  };

  const handleSaveDialogue = () => {
    if (editId !== null) {
      // Edit existing record
      setDialogueRecords(dialogueRecords.map(record =>
        record.id === editId ? { ...currentDialogue, id: editId } : record
      ));
      setEditId(null);
    } else {
      // Add new record
      setDialogueRecords([
        ...dialogueRecords,
        { ...currentDialogue, id: dialogueRecords.length > 0 ? Math.max(...dialogueRecords.map(d => d.id)) + 1 : 1 },
      ]);
    }
    setCurrentDialogue({ id: 0, topic: '', myVoice: '', innerVoice: '', insight: '' }); // Clear form
  };

  const handleEdit = (id: number) => {
    const recordToEdit = dialogueRecords.find(record => record.id === id);
    if (recordToEdit) {
      setCurrentDialogue(recordToEdit);
      setEditId(id);
    }
  };

  const handleDelete = (id: number) => {
    setDialogueRecords(dialogueRecords.filter(record => record.id !== id));
  };
  return (
    <div className="inner-dialogue-section">
      <h2>内在对话练习</h2>
      <p className="lead">学习与内在部分建立对话，促进自我理解和整合</p>
      
      <Row>
        <Col md={8}>
          <Card className="mb-4">
            <Card.Body>
              <h4>内在对话指南</h4>
              <p>内在对话是一种与自己不同部分进行沟通的方法，特别是与"内在小孩"或其他内在部分。这种练习可以帮助你理解内在冲突，满足未被满足的需求，并促进自我整合。</p>
              
              <div className="dialogue-steps">
                <h5>基本步骤</h5>
                <ol>
                  <li>
                    <p><strong>准备环境</strong> - 找一个安静、不受打扰的地方，确保你感到舒适和安全。</p>
                  </li>
                  <li>
                    <p><strong>放松身心</strong> - 进行几次深呼吸，让身体放松下来。</p>
                  </li>
                  <li>
                    <p><strong>识别内在部分</strong> - 想象你想要对话的内在部分（如内在小孩、内在批判者等）。</p>
                  </li>
                  <li>
                    <p><strong>开始对话</strong> - 以开放、好奇和接纳的态度提问和倾听。</p>
                  </li>
                  <li>
                    <p><strong>记录对话</strong> - 写下对话内容，帮助你更好地理解和整合这些洞察。</p>
                  </li>
                </ol>
              </div>
              
              <div className="dialogue-tips mt-4">
                <h5>有效对话的提示</h5>
                <ul>
                  <li>保持开放和好奇的态度，不做评判</li>
                  <li>使用"我"陈述，表达感受和需求</li>
                  <li>给予内在部分充分的respect和理解</li>
                  <li>允许情绪自然流动，不压抑或回避</li>
                  <li>结束时表达感谢，并确认下一步行动</li>
                </ul>
              </div>
            </Card.Body>
          </Card>
          
          <Card>
            <Card.Body>
              <h4>对话记录</h4>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>对话主题</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="例如: 与内在小孩对话、探索内在批判者"
                    name="topic"
                    value={currentDialogue.topic}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>我的声音</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="作为成年自我，你想说什么..."
                        name="myVoice"
                        value={currentDialogue.myVoice}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>内在部分的声音</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="内在部分可能会如何回应..."
                        name="innerVoice"
                        value={currentDialogue.innerVoice}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                
                <Form.Group className="mb-3">
                  <Form.Label>洞察和反思</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="从这次对话中，你学到了什么？有什么新的理解？"
                    name="insight"
                    value={currentDialogue.insight}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                
                <Button variant="primary" onClick={handleSaveDialogue}>
                  {editId !== null ? '更新对话' : '保存对话'}
                </Button>
              </Form>
            </Card.Body>
          </Card>

          {dialogueRecords.length > 0 && (
            <Card className="mt-4">
              <Card.Body>
                <h4>已保存的对话记录</h4>
                {dialogueRecords.map((record) => (
                  <Card key={record.id} className="mb-3">
                    <Card.Body>
                      <h5>主题: {record.topic}</h5>
                      <p><strong>我的声音:</strong> {record.myVoice}</p>
                      <p><strong>内在部分的声音:</strong> {record.innerVoice}</p>
                      <p><strong>洞察和反思:</strong> {record.insight}</p>
                      <Button variant="info" size="sm" className="me-2" onClick={() => handleEdit(record.id)}>
                        编辑
                      </Button>
                      <Button variant="danger" size="sm" onClick={() => handleDelete(record.id)}>
                        删除
                      </Button>
                    </Card.Body>
                  </Card>
                ))}
              </Card.Body>
            </Card>
          )}
        </Col>
        
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <h4>对话示例</h4>
              <div className="dialogue-example p-3 bg-light rounded">
                <p><strong>主题:</strong> 与内在小孩对话</p>
                <p><strong>成年自我:</strong> 你好，小朋友。我注意到最近当我需要在公共场合发言时，你感到非常害怕。能告诉我这是为什么吗？</p>
                <p><strong>内在小孩:</strong> 我害怕别人会笑话我，就像小学时那样。记得那次我在班上回答问题出错，大家都笑了吗？那感觉太糟糕了。</p>
                <p><strong>成年自我:</strong> 我理解那种感觉。那次经历确实很伤人。但你知道吗，现在的情况已经不同了。我们已经学会了很多，也有更多的经验。</p>
                <p><strong>内在小孩:</strong> 但我还是害怕。如果我们再次出错怎么办？</p>
                <p><strong>成年自我:</strong> 出错是很正常的事情，每个人都会犯错。我会保护你，不让你受到伤害。我们可以一起练习，这样你会感到更自信。</p>
                <p><strong>洞察:</strong> 我意识到我的公众演讲恐惧与童年的羞辱经历有关。我需要安抚内在小孩的恐惧，同时建立新的、更积极的经验。</p>
              </div>
            </Card.Body>
          </Card>
          
          <Card>
            <Card.Body>
              <h4>常见内在部分</h4>
              <div className="inner-parts-list">
                <div className="inner-part-item p-3 bg-light rounded mb-2">
                  <h5>内在小孩</h5>
                  <p className="mb-0">代表你童年的情感和需求，可能包含喜悦、好奇，也可能有恐惧和伤痛。</p>
                </div>
                
                <div className="inner-part-item p-3 bg-light rounded mb-2">
                  <h5>内在批判者</h5>
                  <p className="mb-0">内化的批判声音，常常苛刻地评判你的行为和价值。</p>
                </div>
                
                <div className="inner-part-item p-3 bg-light rounded mb-2">
                  <h5>保护者</h5>
                  <p className="mb-0">试图保护你免受伤害的部分，可能通过回避、控制或完美主义等方式。</p>
                </div>
                
                <div className="inner-part-item p-3 bg-light rounded mb-2">
                  <h5>智者</h5>
                  <p className="mb-0">你内在的智慧和直觉，能提供更广阔的视角和深刻的洞察。</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}; 

export default InnerDialogue;