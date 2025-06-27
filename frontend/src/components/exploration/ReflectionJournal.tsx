import React, { useState } from 'react';
import { Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { lifeTimelineEvents, introGuide } from '../../data/SelfExplorationData';

const ReflectionJournal: React.FC = () => {
  const [journalEntries, setJournalEntries] = useState([
    {
      id: 1,
      date: '2025-05-25',
      title: '关于童年记忆的反思',
      content: '今天回想起小时候的一些记忆，特别是父亲工作忙碌时期的感受。我意识到那段时间的孤独感对我现在的关系模式有很大影响。我倾向于过度独立，很少寻求帮助，因为童年时我学会了"不要麻烦别人"。 ' ,
      tags: ['童年记忆', '关系模式', '独立性']
    },
    {
      id: 2,
      date: '2025-05-22',
      title: '情绪觉察练习',
      content: '今天尝试了情绪觉察练习，每小时停下来关注当下的情绪。我注意到工作压力下有很多焦虑，但之前并没有真正意识到。这些焦虑在身体中表现为肩膀紧张和浅呼吸。意识到这一点后，我尝试了几次深呼吸，感觉好多了。我想继续这个练习，提高对情绪的觉察能力。',
      tags: ['情绪觉察', '焦虑', '身体感受']
    }
  ]);

  const [newEntry, setNewEntry] = useState({
    title: '',
    content: '',
    tags: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewEntry({
      ...newEntry,
      [name]: value
    });
  };

  const handleAddEntry = (e: React.FormEvent) => {
    e.preventDefault();
    // 实际实现中应添加表单验证
    const newEntryWithId = {
      ...newEntry,
      id: journalEntries.length + 1,
      date: new Date().toISOString().split('T')[0],
      tags: newEntry.tags.split(',').map(tag => tag.trim())
    };

    setJournalEntries([newEntryWithId, ...journalEntries]);
    setNewEntry({
      title: '',
      content: '',
      tags: ''
    });
  };

  return (
    <div className="reflection-journal-section">
      <h2>梳理成长历程</h2>
      <p className="lead">通过回顾生命中的重要阶段，理解它们如何塑造了今天的你。</p>

      <Card className="mb-4">
        <Card.Body>
          <h4>{introGuide.title}</h4>
          {introGuide.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <ul>
            {introGuide.listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <Alert variant="info">
            <strong>提示：</strong> {introGuide.tip}
          </Alert>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <h4>生命历程事件</h4>
          {lifeTimelineEvents.map((event) => (
            <div key={event.id} className="mb-3 p-3 border rounded bg-light">
              <h5>{event.age}: {event.title}</h5>
              <p><strong>描述:</strong> {event.description}</p>
              <p><strong>影响:</strong> {event.impact}</p>
              <p><strong>情绪:</strong> {event.emotions.join(', ')}</p>
              <div className="d-flex justify-content-end">
                <Button variant="link" className="p-0 me-2">编辑</Button>
                <Button variant="link" className="p-0 text-danger">删除</Button>
              </div>
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
                  <Form.Control 
                    type="text" 
                    name="title" 
                    value={newEntry.title}
                    onChange={handleInputChange}
                    placeholder="给你的反思起个标题" 
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>内容</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={6} 
                    name="content" 
                    value={newEntry.content}
                    onChange={handleInputChange}
                    placeholder="写下你的反思、洞察或感受..." 
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>标签</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="tags" 
                    value={newEntry.tags}
                    onChange={handleInputChange}
                    placeholder="用逗号分隔多个标签, 例如: 情绪, 关系, 成长" 
                  />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                  保存日志
                </Button>
              </Form>
            </Card.Body>
          </Card>
          
          <div className="journal-entries">
            <h4>我的日志</h4>
            
            {journalEntries.map(entry => (
              <Card key={entry.id} className="mb-3">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h5>{entry.title}</h5>
                      <p className="text-muted mb-2">{entry.date}</p>
                      <p>{entry.content}</p>
                      <div>
                        {entry.tags.map((tag, i) => (
                          <span key={i} className="badge bg-light text-dark me-2 mb-2">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="journal-entry-actions">
                      <Button variant="link" className="p-0 me-2">编辑</Button>
                      <Button variant="link" className="p-0 text-danger">删除</Button>
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
              <p>当你不知道从何开始时，尝试以下提示：</p>
              
              <div className="reflection-prompts">
                <div className="prompt-item p-3 bg-light rounded mb-2">
                  <p className="mb-0">今天有什么情绪特别强烈？这些情绪可能反映了什么需求或价值观？</p>
                </div>
                
                <div className="prompt-item p-3 bg-light rounded mb-2">
                  <p className="mb-0">你注意到自己有什么重复出现的思维或行为模式吗？</p>
                </div>
                
                <div className="prompt-item p-3 bg-light rounded mb-2">
                  <p className="mb-0">如果你的内在小孩现在需要什么，那会是什么？</p>
                </div>
                
                <div className="prompt-item p-3 bg-light rounded mb-2">
                  <p className="mb-0">在最近的人际互动中，你学到了什么关于自己的事？</p>
                </div>
              </div>
            </Card.Body>
          </Card>
          
          <Card>
            <Card.Body>
              <h4>标签云</h4>
              <div className="tag-cloud p-3">
                <span className="badge bg-primary me-2 mb-2 p-2">情绪觉察</span>
                <span className="badge bg-secondary me-2 mb-2 p-2">关系</span>
                <span className="badge bg-success me-2 mb-2 p-2">成长</span>
                <span className="badge bg-danger me-2 mb-2 p-2">童年记忆</span>
                <span className="badge bg-warning text-dark me-2 mb-2 p-2">自我关怀</span>
                <span className="badge bg-info text-dark me-2 mb-2 p-2">内在对话</span>
                <span className="badge bg-light text-dark me-2 mb-2 p-2">边界</span>
                <span className="badge bg-dark me-2 mb-2 p-2">需求</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ReflectionJournal;