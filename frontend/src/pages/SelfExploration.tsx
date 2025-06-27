import React, { useState } from 'react';
import { Container, Row, Col, Nav, Tab, Card, Alert } from 'react-bootstrap';
import { selfAssessmentIntro, assessmentTips, attachmentAssessment, innerChildAssessment, defenseAssessment, personalityAssessment } from '../data/SelfExplorationData';
import ReflectionJournal from '../components/exploration/ReflectionJournal';
import SelfAssessment from '../components/exploration/SelfAssessment';
import InnerDialogue from '../components/exploration/InnerDialogue';



const SelfExploration: React.FC = () => {
  const [activeTab, setActiveTab] = useState('reflection-journal');

  return (
    <Container className="py-4">
      <div className="page-header mb-4">
        <h1>自我探索</h1>
        <p className="lead">通过结构化工具和方法，深入探索自我，发现内在需求和成长模式</p>
      </div>
      
      {/* 专业提示和免责声明 */}
      <Alert variant={selfAssessmentIntro.professionalTip.variant} className="mb-4">
        <strong>{selfAssessmentIntro.professionalTip.strong}</strong> {selfAssessmentIntro.professionalTip.text}
      </Alert>
      
      <Tab.Container activeKey={activeTab} onSelect={(k) => k && setActiveTab(k)}>
        <Row className="mb-4">
          <Col md={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="reflection-journal">梳理成长历程</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="inner-dialogue">内在对话练习</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="attachment">自我评估工具</Nav.Link>
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
              <Tab.Pane eventKey="reflection-journal">
                <ReflectionJournal />
              </Tab.Pane>
              <Tab.Pane eventKey="inner-dialogue">
                <InnerDialogue />
              </Tab.Pane>
              <Tab.Pane eventKey="attachment">
                {/* SelfAssessment only supports defaultActiveTab. If you want custom questions/handlers, use AssessmentTab instead. */}
                <SelfAssessment defaultActiveTab="attachment" />
              </Tab.Pane>
              
              <Tab.Pane eventKey="inner-child">
                <SelfAssessment defaultActiveTab="inner-child" />
              </Tab.Pane>
              
              <Tab.Pane eventKey="defense">
                <SelfAssessment defaultActiveTab="defense" />
              </Tab.Pane>
              
              <Tab.Pane eventKey="personality">
                <SelfAssessment defaultActiveTab="personality" />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      

    </Container>
  );
};

// 导出组件
export default SelfExploration;
