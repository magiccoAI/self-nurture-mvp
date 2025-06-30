import React from 'react';
import { Container, Row, Col, Card, Button, Image, Tab, Tabs } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home: React.FC = () => {
  return (
    <Container fluid className="py-5 px-4" style={{ backgroundColor: '#fffdf9' }}>

      {/* 主视觉区 */}
      <Row className="mb-5 align-items-center">
        <Col md={6}>
          <h1 className="display-4 mb-3" style={{ color: '#FF7F50' }}>
            欢迎来到自我养育平台
          </h1>
          <p className="lead">
            一个帮助你进行自我成长、自我探索和自我管理的综合平台。<br />
            让我们一起重新靠近那个真实的自己。
          </p>
          <div className="d-flex gap-3 mt-4">
                              <Button as={Link} to="/knowledge" size="lg" style={{ backgroundColor: '#FFB347', border: 'none' }}>
              开始探索
            </Button>
            <Button as={Link} to="/resources" size="lg" variant="outline-primary">
              浏览资源
            </Button>
          </div>
        </Col>
        <Col md={6} className="text-center">
          <Image src={process.env.PUBLIC_URL + "/images/yezi.jpg"} roundedCircle fluid style={{ maxWidth: '70%' }} />
        </Col>
      </Row>

      {/* 理念口号区块 */}
      <Row className="my-5 py-5" style={{ backgroundColor: '#FFF4E0' }}>
        <Col md={12} className="text-center">
          <h2 className="fw-bold mb-4" style={{ color: '#444' }}>
            从理解开始，在关系中重建自己
          </h2>
          <p className="lead text-muted" style={{ maxWidth: '720px', margin: '0 auto' }}>
            自我养育不需要完美准备，只需要愿意靠近一点点。这里是你温柔地重新出发的地方。
          </p>
        </Col>
      </Row>

      {/* 引导路径模块 */}
      <Row className="mb-5">
        <Col md={12} className="text-center mb-4">
          <h2 className="fw-bold">如何开始你的自我养育旅程</h2>
          <p className="text-muted">我们为你设计了五个关键步骤，引导你系统成长</p>
        </Col>
        <Col md={12}>
          <Row className="g-4">
            {[
              ['浏览知识库', '了解基本概念，建立理论基础'],
              ['完成自我探索测评', '了解个人特质与成长路径'],
              ['设定成长目标', '记录你的目标与进展'],
              ['整理成长资源', '收集有效的学习内容'],
              ['应用实践指南', '将方法融入生活行动']
            ].map(([title, desc], idx) => (
              <Col md={4} key={idx}>
                <Card className="h-100 shadow-sm border-0">
                  <Card.Body>
                    <div className="mb-3 d-flex align-items-center">
                      <div className="me-3 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', backgroundColor: '#FFA07A', color: 'white' }}>{idx + 1}</div>
                      <Card.Title className="mb-0 fw-bold">{title}</Card.Title>
                    </div>
                    <Card.Text className="text-muted">{desc}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      {/* 核心模块区 */}
      <Row className="mb-5">
        <Col md={12} className="text-center mb-4">
          <h2 className="fw-bold">核心功能与资源</h2>
          <p className="text-muted">从探索到成长，我们为你提供完整工具链</p>
        </Col>
        <Tabs defaultActiveKey="features" className="mb-4 justify-content-center">
          <Tab eventKey="features" title="功能模块">
            <Row className="g-4">
              {[
                ['自我探索', '各类测评和练习，了解自我', '/exploration'],
                ['成长追踪', '目标记录与阶段性反馈', '/tracking'],
                ['加入社区', '共享成长经验与动力', '#']
              ].map(([title, desc, link], idx) => (
                <Col md={4} key={idx}>
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Body>
                      <Card.Title className="fw-bold" style={{ color: '#333' }}>{title}</Card.Title>
                      <Card.Text className="text-muted">{desc}</Card.Text>
                      {title === '加入社区' ? (
                        <span className="text-muted">即将推出</span>
                      ) : (
                        <Button as={Link} to={link} variant="link">了解更多 →</Button>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Tab>
          <Tab eventKey="resources" title="学习资源">
            <Row className="g-4 mt-3">
              {[
                ['知识库', '系统理论知识与方法论', '/knowledge'],
                ['资源收集', '分类整理书籍、播客与推荐', '/resources'],
                ['实践指南', '行动方法转化工具', '/practice-guides']
              ].map(([title, desc, link], idx) => (
                <Col md={4} key={idx}>
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Body>
                      <Card.Title className="fw-bold" style={{ color: '#333' }}>{title}</Card.Title>
                      <Card.Text className="text-muted">{desc}</Card.Text>
                      <Button as={Link} to={link} variant="link">了解更多 →</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Tab>
        </Tabs>
      </Row>

    </Container>
  );
};

export default Home;
