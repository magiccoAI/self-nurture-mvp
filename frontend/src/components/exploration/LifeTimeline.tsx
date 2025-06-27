import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { lifeTimelineEvents, introGuide } from '../../data/SelfExplorationData';

const LifeTimeline: React.FC = () => {
  const [timelineEvents, setTimelineEvents] = useState(lifeTimelineEvents);

  const [newEntry, setNewEntry] = useState({
    age: '',
    title: '',
    description: '',
    impact: '',
    emotions: ''
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewEntry({
      ...newEntry,
      [name]: value
    });
  };

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    const newEventWithId = {
      ...newEntry,
      id: timelineEvents.length + 1,
      emotions: newEntry.emotions.split(',').map(e => e.trim())
    };
    setTimelineEvents([...timelineEvents, newEventWithId]);
    setNewEntry({
      age: '',
      title: '',
      description: '',
      impact: '',
      emotions: ''
    });
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div className="life-timeline-section">
      <div className="intro-guide mb-4 p-4 bg-light rounded">
        <h3 className="text-primary mb-3">{introGuide.title}</h3>
        {introGuide.paragraphs.map((p, index) => (
          <p key={index}>{p}</p>
        ))}
        <ul>
          {introGuide.listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="alert alert-info mt-3">
          💡 提示：{introGuide.tip}
        </div>
      </div>

      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          事件已成功添加！
        </Alert>
      )}

      <div className="visual-timeline mb-5">
        <h2 className="text-center mb-4">我的成长时间线</h2>
        <div className="position-relative">
          {/* 时间轴线 */}
          <div className="timeline-line position-absolute start-50 translate-middle-x" 
               style={{width: '2px', backgroundColor: '#dee2e6', height: '100%'}}></div>
          
          {/* 时间线事件 */}
          {(timelineEvents?.length ? timelineEvents : []).map((event, index) => (
            <div key={event.id} 
                 className={`timeline-event d-flex ${index % 2 === 0 ? 'justify-content-start' : 'justify-content-end'} mb-5`}>
              <Card className={`position-relative ${index % 2 === 0 ? 'me-auto' : 'ms-auto'}`} 
                    style={{width: '85%', maxWidth: '600px'}}>
                <div className="timeline-marker position-absolute top-50 translate-middle-y" 
                     style={{
                       left: index % 2 === 0 ? '-20px' : 'auto', 
                       right: index % 2 === 0 ? 'auto' : '-20px',
                       width: '16px', 
                       height: '16px', 
                       borderRadius: '50%', 
                       backgroundColor: '#0d6efd',
                       border: '3px solid white',
                       boxShadow: '0 0 0 2px #0d6efd'
                     }}></div>
                
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <div className="d-flex align-items-center mb-2">
                        <span className="age-badge bg-primary text-white rounded-pill px-3 py-1 me-2">
                          {event.age}
                        </span>
                        <h5 className="mb-0">{event.title}</h5>
                      </div>
                      <p className="text-muted">{event.description}</p>
                      <div className="impact-section bg-light p-3 rounded mb-3">
                        <p className="mb-0"><strong>影响与意义: </strong>{event.impact}</p>
                      </div>
                      <div>
                        <span className="d-block text-muted small mb-2">相关情绪:</span>
                        <div className="d-flex flex-wrap">
                          {event.emotions.map((emotion, i) => (
                            <span key={i} className="emotion-tag bg-light text-dark rounded-pill px-3 py-1 me-2 mb-2">
                              {emotion}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="timeline-event-actions">
                      <Button variant="link" className="p-0 me-2">编辑</Button>
                      <Button variant="link" className="p-0 text-danger">删除</Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
      
      {/* 添加新事件表单 - 保持不变 */}
      <Card>
        {/* ...原有表单代码保持不变... */}
      </Card>
    </div>
  );
};

export default LifeTimeline;