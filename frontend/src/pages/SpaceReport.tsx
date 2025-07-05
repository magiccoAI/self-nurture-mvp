import React, { useState, useEffect } from 'react';
import { Button, ProgressBar } from 'react-bootstrap';
// 需要先安装 react-icons 依赖
// npm install react-icons --save
// 或
// yarn add react-icons
import { FaFileExport, FaRegLightbulb, FaRegStar } from 'react-icons/fa';

const SpaceReport: React.FC = () => {
  const [reportData, setReportData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReportData = async () => {
      try {
        // 模拟API调用获取报告数据
        const mockData = {
          summary: {
            totalResources: 28,
            collections: 4,
            resourcesByType: [
              { type: '书籍', count: 12 },
              { type: '文章', count: 8 },
              { type: '视频', count: 5 },
              { type: '播客', count: 3 }
            ],
            resourcesByTheme: [
              { theme: '内在小孩', count: 10 },
              { theme: '情绪调节', count: 8 },
              { theme: '自我觉察', count: 6 },
              { theme: '建立边界', count: 4 }
            ]
          },
          behavior: {
            last30DaysActivity: 18,
            favoriteResource: '自我养育的七个练习',
            activeHours: [
              { hour: '8-10', activity: 15 },
              { hour: '12-14', activity: 22 },
              { hour: '18-20', activity: 42 },
              { hour: '21-23', activity: 35 }
            ]
          },
          sentiment: {
            averageRating: 4.2,
            commonEmotions: ['觉察', '接纳', '成长', '平静'],
            noteKeywords: ['自我关怀', '情绪觉察', '内在对话', '边界设置']
          },
          insights: [
            '您对情绪调节主题投入最多，占全部资源的35%',
            '周三晚上是您最活跃的学习时间，平均每周三20:00-21:00有学习记录',
            '您对书籍类资源评价最高，平均评分4.5星'
          ],
          recommendations: [
            { 
              title: '内在小孩疗愈冥想', 
              reason: '基于您对内在小孩主题的兴趣',
              type: '音频'
            },
            { 
              title: '情绪日记进阶指南', 
              reason: '与您常用的情绪调节资源相关',
              type: '文章'
            }
          ]
        };
        setReportData(mockData);
        setLoading(false);
      } catch (error) {
        console.error('获取报告数据失败:', error);
        setLoading(false);
      }
    };
    fetchReportData();
  }, []);

  const exportToPDF = () => {
    // PDF导出实现逻辑
    alert('PDF报告导出功能将在下一版本上线！');
  };

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">加载中...</span>
        </div>
        <p className="mt-3">正在生成您的自我养育空间报告...</p>
      </div>
    );
  }

  return (
    <div className="space-report">
      <div className="report-header bg-light py-4 mb-4 rounded">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h1 className="mb-1">我的自我养育空间报告</h1>
              <p className="lead mb-0">2023年11月总结 · {new Date().toLocaleDateString()}更新</p>
            </div>
            <Button variant="success" onClick={exportToPDF}>
              <FaFileExport className="me-2" /> 导出PDF报告
            </Button>
          </div>
        </div>
      </div>
      <div className="container">
        {/* 关键指标概览 */}
        <div className="row mb-5">
          <div className="col-md-3 mb-3">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <div className="display-4 text-success">{reportData.summary.totalResources}</div>
                <div className="text-muted">资源总量</div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <div className="display-4 text-success">{reportData.summary.collections}</div>
                <div className="text-muted">主题收集</div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <div className="display-4 text-success">{reportData.behavior.last30DaysActivity}</div>
                <div className="text-muted">本月活跃天数</div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <div className="display-4 text-success">{reportData.sentiment.averageRating}</div>
                <div className="text-muted">平均评分</div>
              </div>
            </div>
          </div>
        </div>
        {/* 资源分布 */}
        <div className="row mb-5">
          <div className="col-md-6 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-header bg-white">
                <h5 className="mb-0">资源类型分布</h5>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-center">
                  <div style={{ width: '100%', maxWidth: '300px' }}>
                    {/* 这里实际应使用饼图组件 */}
                    <div className="text-center py-4">
                      <div className="d-flex flex-wrap justify-content-center">
                        {reportData.summary.resourcesByType.map((item: any, index: number) => (
                          <div key={index} className="mx-2 mb-2">
                            <div className="d-flex align-items-center">
                              <div className="color-dot me-2" style={{ backgroundColor: ['#4db6ac', '#81c784', '#aed581', '#fff176'][index] }}></div>
                              <span>{item.type}: {item.count}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-header bg-white">
                <h5 className="mb-0">主题分布</h5>
              </div>
              <div className="card-body">
                {reportData.summary.resourcesByTheme.map((theme: any, index: number) => (
                  <div key={index} className="mb-3">
                    <div className="d-flex justify-content-between mb-1">
                      <span>{theme.theme}</span>
                      <span>{theme.count} 项 ({Math.round((theme.count / reportData.summary.totalResources) * 100)}%)</span>
                    </div>
                    <ProgressBar 
                      now={(theme.count / reportData.summary.totalResources) * 100} 
                      variant={['success', 'info', 'warning', 'danger'][index]}
                      style={{ height: '10px' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* 行为分析 */}
        <div className="row mb-5">
          <div className="col-md-6 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-header bg-white">
                <h5 className="mb-0">活跃时段分析</h5>
              </div>
              <div className="card-body">
                {reportData.behavior.activeHours.map((hour: any, index: number) => (
                  <div key={index} className="mb-3">
                    <div className="d-flex justify-content-between mb-1">
                      <span>{hour.hour}点</span>
                      <span>{hour.activity} 次活动</span>
                    </div>
                    <ProgressBar 
                      now={(hour.activity / Math.max(...reportData.behavior.activeHours.map((h: any) => h.activity))) * 100} 
                      variant="success"
                      style={{ height: '10px' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-header bg-white">
                <h5 className="mb-0">情感关键词</h5>
              </div>
              <div className="card-body">
                <div className="d-flex flex-wrap">
                  {reportData.sentiment.noteKeywords.map((word: string, index: number) => (
                    <span key={index} className="badge bg-light text-dark me-2 mb-2 p-2">
                      {word}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <h6>常见情绪</h6>
                  <div className="d-flex flex-wrap">
                    {reportData.sentiment.commonEmotions.map((emotion: string, index: number) => (
                      <span key={index} className="badge bg-info me-2 mb-2 p-2">
                        {emotion}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 个性化洞察 */}
        <div className="card border-0 shadow-sm mb-5">
          <div className="card-header bg-white">
            <h5 className="mb-0 d-flex align-items-center">
              <FaRegLightbulb className="text-warning me-2" />
              个性化洞察
            </h5>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              {reportData.insights.map((insight: string, index: number) => (
                <li key={index} className="list-group-item">
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <FaRegStar className="text-success mt-1" />
                    </div>
                    <div className="flex-grow-1">
                      {insight}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* 推荐资源 */}
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-white">
            <h5 className="mb-0 d-flex align-items-center">
              <FaRegStar className="text-warning me-2" />
              为您推荐
            </h5>
          </div>
          <div className="card-body">
            <div className="row">
              {reportData.recommendations.map((rec: any, index: number) => (
                <div key={index} className="col-md-6 mb-3">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-start">
                        <div>
                          <h5>{rec.title}</h5>
                          <div className="d-flex align-items-center mb-2">
                            <span className="badge bg-light text-dark me-2">{rec.type}</span>
                            <span className="text-muted small">推荐理由: {rec.reason}</span>
                          </div>
                        </div>
                        <Button variant="outline-success" size="sm">
                          查看
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default SpaceReport;
