import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ProgressBar,
  Form,
  Modal
} from 'react-bootstrap';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadarController,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  RadialLinearScale,
  LineElement,
  LineController,
} from 'chart.js';

ChartJS.register(
  RadarController,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  RadialLinearScale,
  LineElement,
  LineController
);

interface GrowthArea {
  id: number;
  name: string;
  goal: string;
  behavior: string;
  progress: number;
  keyword: string;
  category: string;
  lastUpdate: string;
  createdAt: string;
}

interface CheckIn {
  area: string;
  date: string;
  note: string;
}

interface MonthlyTheme {
  month: string;
  theme: string;
  prompt: string;
  icon: string;
  color: string;
}

const GrowthTracking: React.FC = () => {
  // 从本地存储加载数据
  const loadFromLocalStorage = <T,>(key: string, defaultValue: T): T => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : defaultValue;
  };

  const saveToLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const categories = ['情绪觉察', '自我关怀', '人际关系', '职业发展', '身体健康', '心智成长', '财务管理', '休闲娱乐'];

  // 状态管理
  const [newCard, setNewCard] = useState<Omit<GrowthArea, 'id' | 'progress' | 'lastUpdate' | 'createdAt'>>({
    name: '',
    goal: '',
    behavior: '',
    keyword: '',
    category: ''
  });

  const [showAddCardModal, setShowAddCardModal] = useState(false);
  const [showCheckInModal, setShowCheckInModal] = useState(false);
  const [currentCheckInArea, setCurrentCheckInArea] = useState('');
  const [checkInNote, setCheckInNote] = useState('');
  const [reflectionText, setReflectionText] = useState('');
  const [savedReflections, setSavedReflections] = useState<string[]>([]);

  const [growthAreas, setGrowthAreas] = useState<GrowthArea[]>(() => 
    loadFromLocalStorage('growthAreas', [
      {
        id: 1,
        name: '情绪觉察',
        goal: '建立每日情绪日记习惯',
        behavior: '每天记录1次情绪变化',
        progress: 65,
        keyword: '接纳',
        category: '情绪觉察',
        lastUpdate: '2025-06-24',
        createdAt: '2025-06-24'
      },
      {
        id: 2,
        name: '自我关怀',
        goal: '学会在失败后安慰自己',
        behavior: '每周进行一次温柔自我书信',
        progress: 45,
        keyword: '温柔',
        category: '自我关怀',
        lastUpdate: '2025-06-25',
        createdAt: '2025-06-25'
      }
    ])
  );

  const [checkIns, setCheckIns] = useState<CheckIn[]>(() => 
    loadFromLocalStorage('checkIns', [
      { area: '情绪觉察', date: '2025-06-26', note: '早上记录了自己的焦虑感' },
      { area: '自我关怀', date: '2025-06-25', note: '给自己写了一段鼓励的话' }
    ])
  );

  // 保存数据到本地存储
  useEffect(() => {
    saveToLocalStorage('growthAreas', growthAreas);
  }, [growthAreas]);

  useEffect(() => {
    saveToLocalStorage('checkIns', checkIns);
  }, [checkIns]);

  const monthlyTheme: MonthlyTheme = {
    month: '2025-06',
    theme: '温柔的界限',
    prompt: '尝试在不解释的前提下说"不"，并记录你的感受。',
    icon: '🌿',
    color: '#D3E4CD'
  };

  // 处理输入变化
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setNewCard(prev => ({
      ...prev,
      [id.replace('formCard', '').toLowerCase()]: value
    }));
  };

  // 保存新卡片
  const handleSaveNewCard = () => {
    const newId = growthAreas.length > 0 ? Math.max(...growthAreas.map(a => a.id)) + 1 : 1;
    const today = new Date().toISOString().slice(0, 10);
    const cardToAdd: GrowthArea = {
      ...newCard,
      id: newId,
      progress: 0,
      lastUpdate: today,
      createdAt: today
    };
    setGrowthAreas(prev => [...prev, cardToAdd]);
    setNewCard({
      name: '',
      goal: '',
      behavior: '',
      keyword: '',
      category: ''
    });
    handleCloseAddCardModal();
  };

  // 打卡功能
  const handleOpenCheckInModal = (area: string) => {
    setCurrentCheckInArea(area);
    setCheckInNote('');
    setShowCheckInModal(true);
  };

  const handleSaveCheckIn = () => {
    const today = new Date().toISOString().slice(0, 10);
    const newCheckIn: CheckIn = {
      area: currentCheckInArea,
      date: today,
      note: checkInNote
    };
    setCheckIns(prev => [newCheckIn, ...prev]);
    
    // 更新进度
    setGrowthAreas(prev => 
      prev.map(area => 
        area.name === currentCheckInArea 
          ? { 
              ...area, 
              progress: Math.min(area.progress + 5, 100),
              lastUpdate: today
            } 
          : area
      )
    );
    
    setShowCheckInModal(false);
  };

  // 保存反思
  const handleSaveReflection = () => {
    if (reflectionText.trim()) {
      setSavedReflections(prev => [reflectionText, ...prev]);
      setReflectionText('');
    }
  };

  // 模态框控制
  const handleCloseAddCardModal = () => setShowAddCardModal(false);
  const handleShowAddCardModal = () => setShowAddCardModal(true);
  const handleCloseCheckInModal = () => setShowCheckInModal(false);

  // 准备雷达图数据
  const categoryProgress = categories.map(category => {
    const categoryAreas = growthAreas.filter(area => area.category === category);
    const totalProgress = categoryAreas.reduce((sum, area) => sum + area.progress, 0);
    return categoryAreas.length > 0 ? Math.round(totalProgress / categoryAreas.length) : 0;
  });

  const radarData = {
    labels: categories,
    datasets: [
      {
        label: '成长进度',
        data: categoryProgress,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
      }
    ]
  };

  return (
    <Container className="py-5">
      <h1 className="mb-4">成长实践平台</h1>

      {/* 月度主题系统 */}
      <Card className="mb-4 shadow-sm" style={{ backgroundColor: monthlyTheme.color }}>
        <Card.Body>
          <h4>{monthlyTheme.icon} 本月主题：{monthlyTheme.theme}</h4>
          <p className="lead">{monthlyTheme.prompt}</p>
        </Card.Body>
      </Card>

      <Row>
        <Col xs={12} md={8}>
          {/* 成长卡片 + 打卡机制 */}
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h3>成长卡片</h3>
                <Button variant="outline-primary" onClick={handleShowAddCardModal}>
                  ➕ 添加成长卡片
                </Button>
              </div>
              
              {growthAreas.map(area => (
                <Card key={area.id} className="mb-3 border-0 shadow-sm">
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="mb-0">{area.name}</h5>
                      <span className="badge bg-info">{area.keyword}</span>
                    </div>
                    <p className="text-muted mt-2 mb-1"><strong>目标：</strong>{area.goal}</p>
                    <p className="text-muted mb-3"><strong>实践行为：</strong>{area.behavior}</p>
                    
                    <div className="d-flex align-items-center mb-2">
                      <ProgressBar 
                        now={area.progress} 
                        label={`${area.progress}%`} 
                        className="flex-grow-1 me-2" 
                        variant={area.progress > 75 ? "success" : area.progress > 50 ? "info" : "warning"}
                      />
                      <small className="text-muted">上次更新: {area.lastUpdate}</small>
                    </div>
                    
                    <Button 
                      variant={area.progress === 100 ? "success" : "outline-primary"} 
                      size="sm"
                      onClick={() => handleOpenCheckInModal(area.name)}
                    >
                      {area.progress === 100 ? "🎯 已完成" : "打卡"}
                    </Button>
                  </Card.Body>
                </Card>
              ))}
            </Card.Body>
          </Card>

          {/* 成长雷达图 */}
          <Card className="shadow-sm">
            <Card.Body>
              <h3>成长雷达图</h3>
              <div className="mt-4" style={{ height: '300px', width: '100%' }}>
                <Radar 
                  data={radarData} 
                  options={{ 
                    scales: { 
                      r: { 
                        min: 0,
                        max: 100,
                        ticks: { stepSize: 20 }
                      } 
                    },
                    maintainAspectRatio: false
                  }} 
                />
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4}>
          {/* 打卡记录展示 */}
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4>🗓 打卡记录</h4>
                <span className="badge bg-primary">{checkIns.length}次</span>
              </div>
              
              <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                {checkIns.map((c, i) => (
                  <div key={i} className="mb-2 bg-light p-3 rounded">
                    <div className="d-flex justify-content-between">
                      <small className="text-muted">{c.date}</small>
                      <small className="text-primary fw-bold">{c.area}</small>
                    </div>
                    <p className="mb-0 mt-1">{c.note}</p>
                  </div>
                ))}
              </div>
              
              {checkIns.length === 0 && (
                <div className="text-center py-4 text-muted">
                  暂无打卡记录，开始你的成长之旅吧！
                </div>
              )}
            </Card.Body>
          </Card>

          {/* 模版反思记录 */}
          <Card className="shadow-sm">
            <Card.Body>
              <h4 className="mb-3">🪞 反思记录</h4>
              
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control 
                    as="textarea" 
                    placeholder="例如：今天我觉察到…… 我感受到……" 
                    rows={3} 
                    value={reflectionText}
                    onChange={(e) => setReflectionText(e.target.value)}
                  />
                </Form.Group>
                
                <div className="d-flex justify-content-between">
                  <Button 
                    variant="outline-secondary" 
                    size="sm"
                    onClick={handleSaveReflection}
                    disabled={!reflectionText.trim()}
                  >
                    保存反思
                  </Button>
                  
                  {savedReflections.length > 0 && (
                    <small className="text-muted">
                      已保存 {savedReflections.length} 条反思
                    </small>
                  )}
                </div>
              </Form>
              
              {savedReflections.length > 0 && (
                <div className="mt-3 border-top pt-3">
                  <h6>最近的反思：</h6>
                  <p className="text-muted">{savedReflections[0]}</p>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* 添加成长卡片模态框 */}
      <Modal show={showAddCardModal} onHide={handleCloseAddCardModal}>
        <Modal.Header closeButton>
          <Modal.Title>添加新的成长卡片</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formCardName">
              <Form.Label>卡片名称</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="例如：情绪觉察" 
                value={newCard.name} 
                onChange={handleInputChange} 
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formCardGoal">
              <Form.Label>目标</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="例如：建立每日情绪日记习惯" 
                value={newCard.goal} 
                onChange={handleInputChange} 
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formCardBehavior">
              <Form.Label>实践行为</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="例如：每天记录1次情绪变化" 
                value={newCard.behavior} 
                onChange={handleInputChange} 
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formCardKeyword">
              <Form.Label>关键词</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="例如：接纳" 
                value={newCard.keyword} 
                onChange={handleInputChange} 
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formCardCategory">
              <Form.Label>分类</Form.Label>
              <Form.Select 
                value={newCard.category} 
                onChange={handleInputChange}
              >
                <option value="">选择分类</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddCardModal}>
            关闭
          </Button>
          <Button 
            variant="primary" 
            onClick={handleSaveNewCard}
            disabled={!newCard.name || !newCard.category}
          >
            保存
          </Button>
        </Modal.Footer>
      </Modal>

      {/* 打卡模态框 */}
      <Modal show={showCheckInModal} onHide={handleCloseCheckInModal}>
        <Modal.Header closeButton>
          <Modal.Title>今日打卡 - {currentCheckInArea}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>记录你的实践和感受</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3} 
                value={checkInNote}
                onChange={(e) => setCheckInNote(e.target.value)}
                placeholder="例如：今天我完成了... 我的感受是..."
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCheckInModal}>
            取消
          </Button>
          <Button 
            variant="primary" 
            onClick={handleSaveCheckIn}
            disabled={!checkInNote.trim()}
          >
            保存打卡
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default GrowthTracking;