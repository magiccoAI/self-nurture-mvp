import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Tab, Nav, Alert } from 'react-bootstrap';
import { selfAssessmentIntro, assessmentTips, defenseMechanisms, attachmentAssessment, innerChildAssessment, defenseAssessment, personalityAssessment } from '../../data/SelfExplorationData';

const SelfAssessment: React.FC<{ defaultActiveTab?: string }> = ({ defaultActiveTab }) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab || 'attachment');
  const [assessmentProgress, setAssessmentProgress] = useState({
    attachment: 0,
    'inner-child': 0,
    defense: 0,
    personality: 0
  });

  // 更新评估进度
  const updateProgress = (tab: string, progress: number) => {
    setAssessmentProgress({
      ...assessmentProgress,
      [tab]: progress
    });
  };

  // 防御机制常见类型
  const defenseMechanisms = [
    { id: 1, name: '否认', description: '拒绝接受现实或事实' },
    { id: 2, name: '投射', description: '将自己不接受的感受归因于他人' },
    { id: 3, name: '合理化', description: '为不可接受的行为找合理借口' },
    { id: 4, name: '退行', description: '面对压力时表现出不成熟的幼稚行为' },
    { id: 5, name: '升华', description: '将负面冲动转化为社会接受的行为' },
    { id: 6, name: '压抑', description: '将痛苦记忆推入无意识中' }
  ];

  return (
    <div className="self-assessment-section">
      <h2>{selfAssessmentIntro.title}</h2>
      <p className="lead">{selfAssessmentIntro.lead}</p>
      
      {/* 专业提示和免责声明 */}
      <Alert variant={selfAssessmentIntro.professionalTip.variant} className="mb-4">
        <strong>{selfAssessmentIntro.professionalTip.strong}</strong> {selfAssessmentIntro.professionalTip.text}
      </Alert>
      
      <Tab.Container activeKey={activeTab} onSelect={(k) => k && setActiveTab(k)}>
        <Row className="mb-4">
          <Col md={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item className="mb-2 position-relative">
                <Nav.Link eventKey="attachment">
                  依恋类型评估
                  {assessmentProgress.attachment > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                      {assessmentProgress.attachment}%
                      <span className="visually-hidden">完成进度</span>
                    </span>
                  )}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="mb-2 position-relative">
                <Nav.Link eventKey="inner-child">
                  内在小孩需求
                  {assessmentProgress['inner-child'] > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                      {assessmentProgress['inner-child']}%
                      <span className="visually-hidden">完成进度</span>
                    </span>
                  )}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="mb-2 position-relative">
                <Nav.Link eventKey="defense">
                  防御机制识别
                  {assessmentProgress.defense > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                      {assessmentProgress.defense}%
                      <span className="visually-hidden">完成进度</span>
                    </span>
                  )}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="mb-2 position-relative">
                <Nav.Link eventKey="personality">
                  人格特质分析
                  {assessmentProgress.personality > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                      {assessmentProgress.personality}%
                      <span className="visually-hidden">完成进度</span>
                    </span>
                  )}
                </Nav.Link>
              </Nav.Item>
            </Nav>
            
            <Card className="mt-4 bg-light border-0">
              <Card.Body>
                <h6>{assessmentTips.title}</h6>
                <ul className="small ps-3">
                  {assessmentTips.listItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={9}>
            <Tab.Content>
              <Tab.Pane eventKey="attachment">
                <Card>
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <h4>{attachmentAssessment.title}</h4>
                      <span className="badge bg-info">{attachmentAssessment.questionCount}</span>
                    </div>
                    
                    <Alert variant={attachmentAssessment.disclaimer.variant}>
                      <strong>{attachmentAssessment.disclaimer.strong}</strong> {attachmentAssessment.disclaimer.text}
                    </Alert>
                    
                    <p>{attachmentAssessment.description}</p>
                    
                    <div className="progress mb-4" style={{height: '8px'}}>
                      <div 
                        className="progress-bar bg-success" 
                        role="progressbar" 
                        style={{width: `${assessmentProgress.attachment}%`}}
                        aria-valuenow={assessmentProgress.attachment} 
                        aria-valuemin={0} 
                        aria-valuemax={100}
                      ></div>
                    </div>
                    
                    <div className="assessment-questions">
                      <p><strong>{attachmentAssessment.questionIntro}</strong></p>
                      
                      <Form>
                        {attachmentAssessment.questions.map((question, qIndex) => (
                          <div key={question.id} className="question-item mb-4 p-3 bg-light rounded">
                            <p className="fw-medium">{qIndex + 1}. {question.text}</p>
                            <div className="d-flex justify-content-between flex-wrap">
                              {[1,2,3,4,5].map(num => (
                                <Form.Check
                                  key={num}
                                  inline
                                  type="radio"
                                  name={`q${question.id}`}
                                  id={`q${question.id}-${num}`}
                                  label={num === 1 ? "强烈不同意" :
                                         num === 2 ? "不同意" :
                                         num === 3 ? "中立" :
                                         num === 4 ? "同意" : "强烈同意"}
                                  onChange={() => updateProgress('attachment', (qIndex + 1) * (100 / attachmentAssessment.questions.length))}
                                />
                              ))}
                            </div>
                          </div>
                        ))}
                        
                        <div className="mt-4 d-flex justify-content-between align-items-center">
                          <div className="text-muted small">
                            {attachmentAssessment.completionTip}
                          </div>
                          <Button variant="primary" disabled={assessmentProgress.attachment < 100}>
                            提交评估
                          </Button>
                        </div>
                      </Form>
                    </div>
                  </Card.Body>
                </Card>
              </Tab.Pane>
              
              {/* 其他评估标签页保持类似结构 */}
              <Tab.Pane eventKey="inner-child">
                <Card>
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <h4>{innerChildAssessment.title}</h4>
                      <span className="badge bg-info">{innerChildAssessment.questionCount}</span>
                    </div>
                    
                    <Alert variant={innerChildAssessment.disclaimer.variant}>
                      <strong>{innerChildAssessment.disclaimer.strong}</strong> {innerChildAssessment.disclaimer.text}
                    </Alert>
                    
                    {/* 评估内容占位符 */}
                    <div className="assessment-content text-center p-5 bg-light rounded">
                      <h5>{innerChildAssessment.contentTitle}</h5>
                      <p className="text-muted">{innerChildAssessment.contentDescription}</p>
                      <Button 
                        variant="outline-primary"
                        onClick={() => updateProgress('inner-child', 50)}
                      >
                        {innerChildAssessment.startButton}
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Tab.Pane>
              
              {/* 防御机制识别评估 - 优化后 */}
              <Tab.Pane eventKey="defense">
                <Card>
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <h4>{defenseAssessment.title}</h4>
                      <span className="badge bg-info">{defenseAssessment.questionCount}</span>
                    </div>
                    
                    <Alert variant={defenseAssessment.disclaimer.variant}>
                      <strong>{defenseAssessment.disclaimer.strong}</strong> {defenseAssessment.disclaimer.text}
                    </Alert>
                    
                    <p>{defenseAssessment.description}</p>
                    
                    <div className="progress mb-4" style={{height: '8px'}}>
                      <div 
                        className="progress-bar bg-success" 
                        role="progressbar" 
                        style={{width: `${assessmentProgress.defense}%`}}
                        aria-valuenow={assessmentProgress.defense} 
                        aria-valuemin={0} 
                        aria-valuemax={100}
                      ></div>
                    </div>
                    
                    <div className="defense-intro mb-4">
                      <h5>常见防御机制类型</h5>
                      <div className="row">
                        {defenseMechanisms.map(mechanism => (
                          <div key={mechanism.id} className="col-md-6 mb-3">
                            <div className="p-3 bg-light rounded h-100">
                              <h6 className="fw-bold">{mechanism.name}</h6>
                              <p className="mb-0 small">{mechanism.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="assessment-questions">
                      <p><strong>{defenseAssessment.questionIntro}</strong></p>
                      
                      <Form>
                        {defenseAssessment.questions.map((question, qIndex) => (
                          <div key={qIndex} className="question-item mb-4 p-3 bg-light rounded">
                            <p className="fw-medium">{qIndex + 1}. {question.text}</p>
                            <div className="d-flex justify-content-between flex-wrap">
                              {[1,2,3,4,5].map(num => (
                                <Form.Check
                                  key={num}
                                  inline
                                  type="radio"
                                  name={`d${question.id}`}
                                  id={`d${question.id}-${num}`}
                                  label={num === 1 ? "很少" :
                                         num === 2 ? "偶尔" :
                                         num === 3 ? "有时" :
                                         num === 4 ? "经常" : "总是"}
                                  onChange={() => updateProgress('defense', (qIndex + 1) * (100 / defenseAssessment.questions.length))}
                                />
                              ))}
                            </div>
                          </div>
                        ))}
                        
                        <div className="mt-4 d-flex justify-content-between align-items-center">
                          <div className="text-muted small">
                            * 完成所有问题可查看完整评估报告
                          </div>
                          <Button variant="primary" disabled={assessmentProgress.defense < 100}>
                            提交评估
                          </Button>
                        </div>
                      </Form>
                    </div>
                  </Card.Body>
                </Card>
              </Tab.Pane>
              
              {/* 人格特质分析评估 - 优化后 */}
              <Tab.Pane eventKey="personality">
                <Card>
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <h4>{personalityAssessment.title}</h4>
                      <span className="badge bg-info">{personalityAssessment.questionCount}</span>
                    </div>
                    
                    <Alert variant={personalityAssessment.disclaimer.variant}>
                      <strong>{personalityAssessment.disclaimer.strong}</strong> {personalityAssessment.disclaimer.text}
                    </Alert>
                    
                    <p>{personalityAssessment.contentDescription}</p>
                    
                    <div className="personality-dimensions mb-4">
                      <h5>主要人格维度</h5>
                      <div className="row">
                        <div className="col-md-4 mb-3">
                          <div className="p-3 bg-light rounded h-100">
                            <h6 className="fw-bold">开放性</h6>
                            <p className="small mb-0">对新经验的开放程度、想象力和好奇心</p>
                          </div>
                        </div>
                        <div className="col-md-4 mb-3">
                          <div className="p-3 bg-light rounded h-100">
                            <h6 className="fw-bold">尽责性</h6>
                            <p className="small mb-0">组织性、责任感和目标导向</p>
                          </div>
                        </div>
                        <div className="col-md-4 mb-3">
                          <div className="p-3 bg-light rounded h-100">
                            <h6 className="fw-bold">外向性</h6>
                            <p className="small mb-0">社交活跃度、热情和能量水平</p>
                          </div>
                        </div>
                        <div className="col-md-4 mb-3">
                          <div className="p-3 bg-light rounded h-100">
                            <h6 className="fw-bold">宜人性</h6>
                            <p className="small mb-0">合作性、同理心和信任倾向</p>
                          </div>
                        </div>
                        <div className="col-md-4 mb-3">
                          <div className="p-3 bg-light rounded h-100">
                            <h6 className="fw-bold">神经质</h6>
                            <p className="small mb-0">情绪稳定性和压力敏感性</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="progress mb-4" style={{height: '8px'}}>
                      <div 
                        className="progress-bar bg-success" 
                        role="progressbar" 
                        style={{width: `${assessmentProgress.personality}%`}}
                        aria-valuenow={assessmentProgress.personality} 
                        aria-valuemin={0} 
                        aria-valuemax={100}
                      ></div>
                    </div>
                    
                    <div className="assessment-questions">
                      <p><strong>{personalityAssessment.questionIntro}</strong></p>
                      
                      <Form>
                        {personalityAssessment.questions.map((question, qIndex) => (
                          <div key={question.id} className="question-item mb-4 p-3 bg-light rounded">
                            <p className="fw-medium">{qIndex + 1}. {question.text}</p>
                            <div className="d-flex flex-column">
                              {(question.options || [1, 2, 3, 4, 5]).map((option, oIndex) => (
                                <Form.Check
                                  key={oIndex}
                                  type="radio"
                                  name={`personality-q${question.id}`}
                                  id={`personality-q${question.id}-${oIndex + 1}`}
                                  label={option}
                                  onChange={() => updateProgress('personality', (qIndex + 1) * (100 / personalityAssessment.questions.length))}
                                />
                              ))}
                            </div>
                          </div>
                        ))}
                        
                        <div className="mt-4 d-flex justify-content-between align-items-center">
                          <div className="text-muted small">
                            * 完成所有问题可查看完整评估报告
                          </div>
                          <Button variant="primary" disabled={assessmentProgress.personality < 100}>
                            提交评估
                          </Button>
                        </div>
                      </Form>
                    </div>
                  </Card.Body>
                </Card>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      
      <Card className="mt-4">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4>我的评估历史</h4>
            <small className="text-muted">最近3次评估记录</small>
          </div>
          
          <p>查看你之前完成的评估结果，追踪随时间的变化。</p>
          
          <Alert variant="secondary" className="mb-3">
            <strong>重要提示：</strong> 所有评估结果均为AI生成的分析，仅供参考和自我觉察使用。
            如需专业心理评估或诊断，请咨询持证心理健康机构。
          </Alert>
          
          <div className="assessment-history">
            <div className="assessment-item p-3 bg-light rounded mb-3 position-relative">
              <div className="d-flex justify-content-between">
                <div>
                  <h5>依恋类型评估</h5>
                  <div className="d-flex align-items-center mb-2">
                    <div className="me-3">
                      <strong>结果:</strong> 焦虑型依恋（中度）
                    </div>
                    <div className="d-flex">
                      <span className="badge bg-info me-2">安全型 32%</span>
                      <span className="badge bg-warning me-2">焦虑型 58%</span>
                      <span className="badge bg-secondary">回避型 10%</span>
                    </div>
                  </div>
                  <p className="small mb-1">
                    你可能在亲密关系中表现出对伴侣回应的高度敏感，有时会过度解读关系信号
                  </p>
                </div>
                <small className="text-muted">2025-05-20</small>
              </div>
              <div className="mt-2">
                <Button variant="outline-primary" size="sm" className="me-2">
                  查看详情
                </Button>
                <Button variant="outline-secondary" size="sm">
                  重新评估
                </Button>
              </div>
              <div className="text-end mt-2">
                <small className="text-muted fst-italic">
                  AI生成分析，仅供参考
                </small>
              </div>
            </div>
            
            <div className="assessment-item p-3 bg-light rounded mb-3 position-relative">
              <div className="d-flex justify-content-between">
                <div>
                  <h5>内在小孩需求评估</h5>
                  <p className="mb-1"><strong>主要未满足需求:</strong> 情感验证、安全感</p>
                  <p className="small mb-1">
                    评估显示你可能在童年时期缺乏足够的情感支持，导致成年后过度寻求外部认可
                  </p>
                </div>
                <small className="text-muted">2025-05-15</small>
              </div>
              <div className="mt-2">
                <Button variant="outline-primary" size="sm" className="me-2">
                  查看详情
                </Button>
                <Button variant="outline-secondary" size="sm">
                  重新评估
                </Button>
              </div>
              <div className="text-end mt-2">
                <small className="text-muted fst-italic">
                  AI生成分析，仅供参考
                </small>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SelfAssessment;