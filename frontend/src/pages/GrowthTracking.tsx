import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ProgressBar,
  Form
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
  lastUpdate: string;
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
  const [checkIns] = useState<CheckIn[]>([
    { area: '情绪觉察', date: '2025-06-26', note: '早上记录了自己的焦虑感' },
    { area: '自我关怀', date: '2025-06-25', note: '给自己写了一段鼓励的话' }
  ]);

  const growthAreas: GrowthArea[] = [
    {
      id: 1,
      name: '情绪觉察',
      goal: '建立每日情绪日记习惯',
      behavior: '每天记录1次情绪变化',
      progress: 65,
      keyword: '接纳',
      lastUpdate: '2025-06-24'
    },
    {
      id: 2,
      name: '自我关怀',
      goal: '学会在失败后安慰自己',
      behavior: '每周进行一次温柔自我书信',
      progress: 45,
      keyword: '温柔',
      lastUpdate: '2025-06-25'
    }
  ];

  const monthlyTheme: MonthlyTheme = {
    month: '2025-06',
    theme: '温柔的界限',
    prompt: '尝试在不解释的前提下说“不”，并记录你的感受。',
    icon: '🌿',
    color: '#D3E4CD'
  };

  const radarData = {
    labels: growthAreas.map(a => a.name),
    datasets: [
      {
        label: '当前成长状态',
        data: growthAreas.map(a => a.progress),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }
    ]
  };

  return (
    <Container className="py-5">
      <h1 className="mb-4">成长实践平台</h1>

      {/* 月度主题系统 */}
      <Card className="mb-4" style={{ backgroundColor: monthlyTheme.color }}>
        <Card.Body>
          <h4>{monthlyTheme.icon} 本月主题：{monthlyTheme.theme}</h4>
          <p>{monthlyTheme.prompt}</p>
        </Card.Body>
      </Card>

      <Row>
        <Col md={8}>
          {/* 成长卡片 + 打卡机制 */}
          <Card className="mb-4">
            <Card.Body>
              <h3>成长卡片 + 每日打卡</h3>
              {growthAreas.map(area => (
                <div key={area.id} className="mb-4 p-3 bg-light rounded">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5>{area.name}</h5>
                    <small className="text-muted">关键词：{area.keyword}</small>
                  </div>
                  <p><strong>目标：</strong>{area.goal}</p>
                  <p><strong>实践行为：</strong>{area.behavior}</p>
                  <ProgressBar now={area.progress} label={`${area.progress}%`} className="mb-2" />
                  <div className="d-flex justify-content-between">
                    <small>上次更新: {area.lastUpdate}</small>
                    <Button variant="outline-secondary" size="sm">打卡</Button>
                  </div>
                </div>
              ))}
              <div className="text-center mt-3">
                <Button variant="primary">➕ 添加新的成长卡片</Button>
              </div>
            </Card.Body>
          </Card>

          {/* 成长雷达图 */}
          <Card>
            <Card.Body>
              <h3>成长雷达图</h3>
              <Radar data={radarData} />
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          {/* 打卡记录展示 */}
          <Card className="mb-4">
            <Card.Body style={{ padding: '1rem' }}>
              <h4>🗓 打卡记录</h4>
              {checkIns.map((c, i) => (
                <div key={i} className="mb-2 bg-light p-2 rounded">
                  <small className="text-muted">{c.date} · {c.area}</small>
                  <p className="mb-0">{c.note}</p>
                </div>
              ))}
              <div className="text-center mt-2">
                <Button variant="outline-primary" size="sm">查看打卡日历</Button>
              </div>
            </Card.Body>
          </Card>

          {/* 模版反思记录 */}
          <Card>
            <Card.Body>
              <h4>🪞 模版反思</h4>
              <Form.Control as="textarea" placeholder="例如：今天我觉察到…… 我感受到……" rows={3} className="mb-2" />
              <div className="text-end">
                <Button variant="outline-secondary" size="sm">保存反思</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default GrowthTracking;
