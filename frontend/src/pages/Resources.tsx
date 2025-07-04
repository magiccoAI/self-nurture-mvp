import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Form, InputGroup, Alert, Modal, Badge, ProgressBar, Tab, Tabs, Dropdown, DropdownButton } from 'react-bootstrap';
import {
  FaPlus, FaHeart,
  FaRegLightbulb, FaRegStar, FaMagnifyingGlass, FaStar,
  FaFileExport, FaTags, FaPenToSquare
} from 'react-icons/fa6';
import { 
  FaBook, FaPodcast, FaYoutube, FaSeedling, FaRegBookmark, FaRegClock,
  FaClockRotateLeft, FaRegCommentDots, FaBookOpen, FaChartLine
} from 'react-icons/fa6';


// ... 其余代码保持不变 ...

// 设置API基础URL
const API_BASE_URL = 'http://localhost:5000/api';

const Resources: React.FC = () => {
  const [activeTab, setActiveTab] = useState('my-space');
  const [collections, setCollections] = useState<any[]>([]);
  const [recentResources, setRecentResources] = useState<any[]>([]);
  const [editingResource, setEditingResource] = useState<any | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddResourceModal, setShowAddResourceModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  
  // 新资源表单状态
  const [newResource, setNewResource] = useState({
    title: '',
    type: '书籍',
    author: '',
    url: '',
    notes: '',
    collection_id: 0,
    themes: '',
    difficulty: 'medium',
    personalNotes: '',
    rating: 0
  });
  
  // 新收集表单状态
  const [showCollectionModal, setShowCollectionModal] = useState(false);
  const [newCollection, setNewCollection] = useState({
    name: '',
    description: '',
    theme: 'self-awareness',
    coverColor: '#a8edea'
  });

  // 主题分类
  const themes = [
    { id: 'self-awareness', name: '自我觉察', icon: FaRegLightbulb },
    { id: 'inner-child', name: '内在小孩', icon: FaHeart },
    { id: 'emotional-regulation', name: '情绪调节', icon: FaRegStar },
    { id: 'boundaries', name: '建立边界', icon: FaSeedling }
  ];

  // 推荐资源数据
  const recommendedResources = [
    {
      id: 101,
      title: '内在生命：精神分析与人格发展',
      author: 'Margot Waddell',
      type: '书籍',
      description: '一部贯穿生命全程的精神分析发展地图，帮助理解人格形成与发展过程',
      difficulty: 'medium',
      themes: ['inner-child', 'self-awareness'],
      coverColor: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      whyRecommend: '帮助你理解童年经历如何塑造成人人格'
    },
    {
      id: 102,
      title: '播客：严艺家',
      author: '严艺家',
      type: '播客',
      description: '探讨"养育"的力量，关注0-25岁儿童及青少年的成长议题，兼顾专业科普性与普适性',
      difficulty: 'easy',
      themes: ['emotional-regulation', 'boundaries'],
      coverColor: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
      whyRecommend: '日常陪伴式内容，适合碎片时间学习自我养育'
    },
    {
      id: 103,
      title: 'What Is Mental Health?',
      author: 'Nancy McWilliams',
      type: '视频',
      description: '关于心理健康的核心概念，由著名精神分析学家Nancy McWilliams主讲',
      difficulty: 'easy',
      themes: ['self-awareness', 'emotional-regulation'],
      coverColor: 'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)',
      whyRecommend: '建立心理健康的基础认知框架'
    }
  ];

  // 处理导出功能
  const handleExport = async (format: 'pdf' | 'markdown') => {
    try {
      const response = await axios.get(`${API_BASE_URL}/resources/export/${format}`, {
        responseType: 'blob', // 接收二进制数据
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `我的养育笔记.${format}`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
      setSuccessMessage(`成功导出为${format.toUpperCase()}文件！`);
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err) {
      console.error(`Error exporting to ${format}:`, err);
      setError(`导出${format.toUpperCase()}文件失败，请稍后再试。`);
      setTimeout(() => setError(''), 3000);
    }
  };

  // 获取资源收集和最近资源
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // 获取资源收集 - 模拟数据
        const mockCollections = [
          {
            id: 1,
            name: '内在小孩疗愈',
            description: '重新连接并疗愈你的内在小孩',
            item_count: 12,
            last_update: '2023-11-15',
            theme: 'inner-child',
            coverColor: '#fed6e3',
            progress: 65,
            lastAccessed: '2023-11-20'
          },
          {
            id: 2,
            name: '情绪管理指南',
            description: '理解和调节情绪的实用工具',
            item_count: 8,
            last_update: '2023-11-10',
            theme: 'emotional-regulation',
            coverColor: '#fda085',
            progress: 40,
            lastAccessed: '2023-11-18'
          },
          {
            id: 3,
            name: '自我觉察日记',
            description: '提升自我觉察的练习与反思',
            item_count: 5,
            last_update: '2023-11-05',
            theme: 'self-awareness',
            coverColor: '#96e6a1',
            progress: 85,
            lastAccessed: '2023-11-22'
          }
        ];
        setCollections(mockCollections);
        
        // 获取最近添加的资源 - 模拟数据
        const mockRecentResources = [
          {
            id: 201,
            title: '自我养育的七个练习',
            author: 'Dr. Sarah Johnson',
            type: '文章',
            add_date: '2023-11-18',
            collection_id: 1,
            notes: '每日练习帮助建立自我关爱习惯',
            themes: 'inner-child, self-care',
            difficulty: 'easy',
            personalNotes: '今天尝试了练习三，感受到内心平静',
            lastAccessed: '2023-11-20',
            rating: 4,
            accessCount: 3
          },
          {
            id: 202,
            title: '情绪日记写作指南',
            author: 'Michael Chen',
            type: '文章',
            add_date: '2023-11-16',
            collection_id: 2,
            notes: '通过写作理解和处理复杂情绪',
            themes: 'emotional-regulation, journaling',
            difficulty: 'medium',
            personalNotes: '写作帮助我理清了今天的焦虑来源',
            lastAccessed: '2023-11-18',
            rating: 5,
            accessCount: 5
          },
          {
            id: 203,
            title: '建立健康边界',
            author: 'Dr. Emma Wilson',
            type: '书籍',
            add_date: '2023-11-12',
            collection_id: 3,
            notes: '学会说"不"的艺术，保护自己的能量',
            themes: 'boundaries, self-care',
            difficulty: 'medium',
            personalNotes: '第三章关于家庭边界的部分特别有启发',
            lastAccessed: '2023-11-22',
            rating: 4,
            accessCount: 7
          }
        ];
        setRecentResources(mockRecentResources);
        
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('获取数据失败，请稍后再试');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 渲染星级评分
  const renderRating = (rating: number) => {
    return (
      <div className="d-flex">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={i < rating ? "text-warning" : "text-muted"}
            style={{ fontSize: '0.9rem' }} />
          
        ))}
      </div>
    );
  };

  // 处理表单输入变化
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewResource({
      ...newResource,
      [name]: value
    });
  };

  // 处理编辑资源点击
  const handleEditClick = (resource: any) => {
    setEditingResource(resource);
    setShowEditModal(true);
  };

  // 处理编辑表单输入变化
  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditingResource({
      ...editingResource,
      [name]: value
    });
  };

  // 处理编辑资源提交
  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingResource) return;

    try {
      // 模拟API调用
      const updatedResource = {...editingResource};
      
      setRecentResources(recentResources.map(res => 
        res.id === editingResource.id ? updatedResource : res
      ));
      
      setCollections(collections.map(col => {
        if (col.id === editingResource.collection_id) {
          return { ...col, last_update: new Date().toISOString().split('T')[0] };
        }
        return col;
      }));
      
      setSuccessMessage('资源已成功更新！');
      setTimeout(() => setSuccessMessage(''), 3000);
      setError('');
      setShowEditModal(false);
      setEditingResource(null);
    } catch (err) {
      console.error('Error updating resource:', err);
      setError('更新资源失败，请稍后再试');
    }
  };

  // 处理删除资源
  const handleDeleteResource = async (resourceId: number) => {
    if (window.confirm('确定要删除此资源吗？')) {
      try {
        // 模拟API调用
        setRecentResources(recentResources.filter(res => res.id !== resourceId));
        setSuccessMessage('资源已成功删除！');
        setTimeout(() => setSuccessMessage(''), 3000);
        setError('');
      } catch (err) {
        console.error('Error deleting resource:', err);
        setError('删除资源失败，请稍后再试');
      }
    }
  };

  // 处理添加新资源
  const handleAddResource = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 验证表单
    if (!newResource.title || !newResource.author || !newResource.collection_id) {
      setError('请填写所有必填字段');
      return;
    }

    try {
      // 模拟API调用
      const newResourceWithId = {
        ...newResource,
        id: Math.floor(Math.random() * 1000) + 300,
        add_date: new Date().toISOString().split('T')[0],
        lastAccessed: new Date().toISOString().split('T')[0],
        accessCount: 1
      };
      
      // 更新最近资源列表
      setRecentResources([newResourceWithId, ...recentResources.slice(0, 2)]);
      
      // 更新收集计数
      setCollections(collections.map(collection => 
        collection.id === newResource.collection_id 
          ? { ...collection, item_count: collection.item_count + 1, last_update: new Date().toISOString().split('T')[0] } 
          : collection
      ));
      
      // 重置表单
      setNewResource({
        title: '',
        type: '书籍',
        author: '',
        url: '',
        notes: '',
        collection_id: 0,
        themes: '',
        difficulty: 'medium',
        personalNotes: '',
        rating: 0
      });
      
      // 关闭模态框
      setShowAddResourceModal(false);
      
      // 显示成功消息
      setSuccessMessage('资源已成功添加！');
      setTimeout(() => setSuccessMessage(''), 3000);
      
      setError('');
    } catch (err) {
      console.error('Error adding resource:', err);
      setError('添加资源失败，请稍后再试');
    }
  };
  
  // 处理新收集表单输入变化
  const handleCollectionInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewCollection({
      ...newCollection,
      [name]: value
    });
  };
  
  // 处理添加新收集
  const handleAddCollection = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 验证表单
    if (!newCollection.name) {
      setError('请填写收集名称');
      return;
    }
    
    try {
      // 模拟API调用
      const newCollectionWithId = {
        ...newCollection,
        id: collections.length + 1,
        item_count: 0,
        last_update: new Date().toISOString().split('T')[0],
        progress: 0,
        lastAccessed: new Date().toISOString().split('T')[0]
      };
      
      // 更新收集列表
      setCollections([...collections, newCollectionWithId]);
      
      // 重置表单并关闭模态框
      setNewCollection({
        name: '',
        description: '',
        theme: 'self-awareness',
        coverColor: '#a8edea'
      });
      setShowCollectionModal(false);
      
      // 显示成功消息
      setSuccessMessage('收集已成功创建！');
      setTimeout(() => setSuccessMessage(''), 3000);
      
      setError('');
    } catch (err) {
      console.error('Error adding collection:', err);
      setError('创建收集失败，请稍后再试');
    }
  };

  // 获取主题图标
  const getThemeIcon = (themeId: string) => {
    const theme = themes.find(t => t.id === themeId);
    return theme ? <theme.icon className="text-success" /> : <FaSeedling className="text-success me-3" />;
  };

  // 获取主题名称
  const getThemeName = (themeId: string) => {
    const theme = themes.find(t => t.id === themeId);
    return theme ? theme.name : '自我养育';
  };

  return (
    <Container className="py-4">
      {/* 顶部：我的养育空间 */}
      <div className="my-nurturing-space mb-5 p-4 rounded-3" 
           style={{ 
             background: 'linear-gradient(135deg, #e0f7fa 0%, #f3e5f5 100%)',
             borderLeft: '5px solid #4db6ac'
           }}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h1 className="d-flex align-items-center mb-0">
              <FaSeedling className="text-success me-3" /> 
              我的自我养育空间
            </h1>
            <p className="lead mb-0 mt-2 fst-italic" style={{ color: '#5d4037' }}>
              记录那些启发你、支持你、陪伴你成长的书籍、声音与影像。它们是你生命经验的地图。 
              <p className="mb-0">"养育，不只是修复过去，也是给未来投下一束光。"</p>
            </p>
          </div>
          <div className="d-flex">
            <Button 
              variant="success" 
              className="me-2 d-flex align-items-center"
              onClick={() => setShowAddResourceModal(true)}
            >
              <FaPlus className="me-1" /> 添加资源
            </Button>
            <Button 
              variant="outline-success" 
              className="d-flex align-items-center"
              onClick={() => setShowCollectionModal(true)}
            >
              <FaRegBookmark className="me-1" /> 创建收集
            </Button>
          </div>
        </div>
        
        <div className="d-flex justify-content-between mt-4">
          <div className="d-flex">
            <div className="me-4">
              <h5 className="d-flex align-items-center">
                <FaRegClock className="me-2 text-secondary" />
                最近访问
              </h5>
              <p className="mb-0">{recentResources[0]?.title || '暂无最近访问'}</p>
            </div>
            <div>
              <h5 className="d-flex align-items-center">
                <FaClockRotateLeft className="me-2 text-secondary" />
                我的进度
              </h5>
              <p className="mb-0">{collections.length} 个收集，{recentResources.length} 个资源</p>
            </div>
          </div>
          
          <div className="text-end">
            <Button variant="link" className="text-success p-0">
              查看完整空间报告 <FaChartLine className="ms-1" />
            </Button>
          </div>
        </div>
      </div>

      <Tabs
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k || 'my-space')}
        className="mb-4"
        id="resources-tabs"
      >
        <Tab eventKey="my-space" title={
          <span className="d-flex align-items-center">
            <FaSeedling className="me-1" /> 我的空间
          </span>
        }>
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">加载中...</span>
              </div>
              <p className="mt-2">加载资源数据中...</p>
            </div>
          ) : (
            <Row>
              <Col lg={8}>
                {error && <Alert variant="danger">{error}</Alert>}
                {successMessage && <Alert variant="success">{successMessage}</Alert>}

                {/* 最近在看的资源 */}
                <Card className="mb-4 border-0 shadow-sm">
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <h3 className="d-flex align-items-center mb-0">
                        <FaRegClock className="text-success me-2" />
                        我的养育历程
                      </h3>
                      <Button variant="outline-success" size="sm">
                        查看全部
                      </Button>
                    </div>
                    
                    <p className="text-muted mb-4">
                      记录你最近探索的自我养育资源，留下你的感悟和思考
                    </p>
                    
                    {recentResources.length > 0 ? (
                      recentResources.map((resource, index) => (
                        <div key={resource.id} className="resource-journey-item p-3 mb-3 rounded" 
                             style={{ 
                               background: index % 2 === 0 ? '#f8f9fa' : '#ffffff',
                               borderLeft: `3px solid ${index % 2 === 0 ? '#4db6ac' : '#81c784'}`
                             }}>
                          <div className="d-flex justify-content-between align-items-start">
                            <div style={{ flex: 1 }}>
                              <div className="d-flex align-items-center mb-2">
                                <h5 className="mb-0 me-2">{resource.title}</h5>
                                <Badge bg="light" text="dark" className="d-flex align-items-center">
                                  {resource.type === '书籍' && <FaBook className="me-1" />}
                                  {resource.type}
                                </Badge>
                              </div>
                              <p className="mb-1">
                                <span className="text-muted">{resource.author}</span>
                              </p>
                              <p className="mb-2">
                                <small className="text-muted">
                                  最近访问: {resource.lastAccessed} · 访问次数: {resource.accessCount}
                                </small>
                              </p>
                              
                              {resource.rating > 0 && (
                                <div className="d-flex align-items-center mb-2">
                                  <span className="me-2">我的评分:</span>
                                  {renderRating(resource.rating)}
                                </div>
                              )}
                            </div>
                            
                            <div className="d-flex">
                              <Button 
                                variant="outline-success" 
                                size="sm"
                                className="me-2"
                                onClick={() => handleEditClick(resource)}
                              >
                                <FaPenToSquare />
                              </Button>
                            </div>
                          </div>
                          
                          {resource.personalNotes && (
                            <div className="mt-3 p-3 rounded bg-light">
                              <div className="d-flex align-items-center mb-2">
                                <FaRegCommentDots className="text-success me-2" />
                                <strong>我的感悟</strong>
                              </div>
                              <p className="mb-0">{resource.personalNotes}</p>
                            </div>
                          )}
                          
                          <div className="mt-3">
                            <Button variant="outline-success" size="sm" className="me-2">
                              添加感悟
                            </Button>
                            <Button variant="outline-secondary" size="sm" className="me-2">
                              标记进度
                            </Button>
                            <Button variant="outline-secondary" size="sm">
                              分享思考
                            </Button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-5 bg-light rounded">
                        <FaBookOpen className="text-muted mb-3" size={48} />
                        <h5>你还没有开始记录养育历程</h5>
                        <p className="text-muted">添加资源并记录你的感悟，开始自我养育之旅</p>
                        <Button 
                          variant="success"
                          onClick={() => setShowAddResourceModal(true)}
                        >
                          添加第一个资源
                        </Button>
                      </div>
                    )}
                  </Card.Body>
                </Card>
                
                {/* 我的资源收集集 */}
                <Card className="border-0 shadow-sm">
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <h3 className="d-flex align-items-center mb-0">
                        <FaRegBookmark className="text-success me-2" />
                        我的养育主题
                      </h3>
                      <Button variant="outline-success" size="sm">
                        管理主题
                      </Button>
                    </div>
                    
                    <p className="text-muted mb-4">
                      这些是你创建的自我养育主题收集，点击进入查看详情
                    </p>
                    
                    {collections.length === 0 ? (
                      <div className="text-center py-5 bg-light rounded">
                        <FaSeedling className="text-muted mb-3" size={48} />
                        <h5>您还没有创建任何养育主题</h5>
                        <p className="text-muted">开始创建您的第一个自我养育主题收集吧</p>
                        <Button variant="success" onClick={() => setShowCollectionModal(true)}>
                          创建新主题
                        </Button>
                      </div>
                    ) : (
                      <Row>
                        {collections.map(collection => {
                          const theme = themes.find(t => t.id === collection.theme) || themes[0];
                          return (
                            <Col md={6} key={collection.id} className="mb-3">
                              <Card className="h-100 collection-card border-0 shadow-sm">
                                <Card.Body>
                                  <div className="d-flex align-items-start mb-3">
                                    <div className="me-3" style={{ fontSize: '24px' }}>
                                      <theme.icon />
                                    </div>
                                    <div>
                                      <h4>{collection.name}</h4>
                                      <p className="text-muted">{collection.description}</p>
                                    </div>
                                  </div>
                                  
                                  <div className="mb-3">
                                    <div className="d-flex justify-content-between mb-1">
                                      <small>学习进度</small>
                                      <small>{collection.progress}%</small>
                                    </div>
                                    <ProgressBar 
                                      now={collection.progress} 
                                      variant="success" 
                                      style={{ height: '6px' }}
                                    />
                                  </div>
                                  
                                  <div className="d-flex justify-content-between align-items-center">
                                    <span className="badge bg-light text-dark">
                                      {collection.item_count} 项资源
                                    </span>
                                    <small className="text-muted">
                                      最近访问: {collection.lastAccessed}
                                    </small>
                                  </div>
                                </Card.Body>
                                <Card.Footer className="bg-white border-0 pt-0">
                                  <div className="d-flex justify-content-between">
                                    <Button variant="outline-success" size="sm">
                                      查看主题
                                    </Button>
                                    <Button 
                                      variant="success" 
                                      size="sm"
                                      onClick={() => {
                                        setNewResource({
                                          ...newResource,
                                          collection_id: collection.id
                                        });
                                        setShowAddResourceModal(true);
                                      }}
                                    >
                                      添加资源
                                    </Button>
                                  </div>
                                </Card.Footer>
                              </Card>
                            </Col>
                          );
                        })}
                      </Row>
                    )}
                  </Card.Body>
                </Card>
              </Col>
              
              <Col lg={4}>
                {/* 推荐引导模块 */}
                <Card className="mb-4 border-0 shadow-sm">
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <h3 className="d-flex align-items-center mb-0">
                        <FaRegStar className="text-warning me-2" />
                        精选推荐
                      </h3>
                      <Badge bg="warning">今日更新</Badge>
                    </div>
                    
                    <p className="text-muted mb-4">
                      为你精心挑选的自我养育资源，助力你的成长之旅
                    </p>
                    
                    <div className="recommended-container" style={{ maxHeight: '600px', overflowY: 'auto' }}>
                      {recommendedResources.map((resource, index) => (
                        <div key={index} className="mb-4 p-3 rounded" 
                             style={{ 
                               background: '#f8f9fa',
                               borderLeft: '3px solid #ffd54f'
                             }}>
                          <div className="d-flex align-items-start mb-3">
                            <div className="flex-shrink-0 me-3">
                              {resource.type === '书籍' && <FaBook size={24} className="text-primary" />}
                              {resource.type === '播客' && <FaPodcast size={24} className="text-info" />}
                              {resource.type === '视频' && <FaYoutube size={24} className="text-danger" />}
                            </div>
                            <div>
                              <h5 className="mb-1">{resource.title}</h5>
                              <p className="text-muted small mb-2">{resource.author}</p>
                              <div className="d-flex flex-wrap mb-2">
                                {resource.themes.map((themeId: string, i: number) => (
                                  <Badge key={i} bg="light" text="dark" className="me-1 mb-1">
                                    {getThemeIcon(themeId)} {getThemeName(themeId)}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          <p className="mb-3">{resource.description}</p>
                          
                          <div className="bg-light p-2 rounded mb-3">
                            <div className="d-flex align-items-start">
                              <FaRegLightbulb className="text-warning mt-1 me-2" />
                              <small>
                                <strong>推荐理由：</strong> {resource.whyRecommend}
                              </small>
                            </div>
                          </div>
                          
                          <div className="d-flex justify-content-between">
                            <Button 
                              variant="outline-success" 
                              size="sm"
                              onClick={() => {
                                setNewResource({
                                  ...newResource,
                                  title: resource.title,
                                  author: resource.author,
                                  type: resource.type,
                                  url: resource.type === '视频' ? 'https://youtu.be/Tv6yNJcZhl0?si=SVUsziPNJ9rGoiLo' : '',
                                  notes: resource.description,
                                  themes: resource.themes.join(', ')
                                });
                                setShowAddResourceModal(true);
                              }}
                            >
                              <FaPlus className="me-1" /> 加入我的收集
                            </Button>
                            
                            <Button variant="outline-secondary" size="sm">
                              <FaRegCommentDots className="me-1" /> 添加感想
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
                
                {/* 主题分类 */}
                <Card className="border-0 shadow-sm">
                  <Card.Body>
                    <h3 className="d-flex align-items-center mb-4">
                      <FaTags className="text-success me-2" />
                      探索主题
                    </h3>
                    
                    <div className="d-flex flex-wrap gap-2">
                      {themes.map(theme => (
                        <Button 
                          key={theme.id}
                          variant="outline-success"
                          className="d-flex align-items-center"
                        >
                          {React.createElement(theme.icon, {
                            className: {
                              'self-awareness': 'text-warning',
                              'inner-child': 'text-danger',
                              'emotional-regulation': 'text-info',
                              'boundaries': 'text-success'
                            }[theme.id]
                          })} {theme.name}
                        </Button>
                      ))}
                    </div>
                    
                    <div className="mt-4">
                      <DropdownButton
                        id="dropdown-export-button"
                        title={
                          <>
                            <FaFileExport className="me-2" /> 导出我的养育笔记
                          </>
                        }
                        variant="success"
                        className="w-100"
                      >
                        <Dropdown.Item onClick={() => handleExport('pdf')}>导出为PDF</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleExport('markdown')}>导出为Markdown</Dropdown.Item>
                      </DropdownButton>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          )}
        </Tab>
        
        <Tab eventKey="discover" title={
          <span className="d-flex align-items-center">
            <FaMagnifyingGlass className="me-1" /> 探索资源
          </span>
        }>
          <div className="text-center py-5">
            <h3 className="d-flex align-items-center justify-content-center">
              <FaMagnifyingGlass className="me-2 text-muted" />
              探索自我养育资源
            </h3>
            <p className="text-muted">探索更多自我养育资源（功能开发中）</p>
          </div>
        </Tab>
      </Tabs>

      {/* 添加资源模态框 */}
      <Modal show={showAddResourceModal} onHide={() => setShowAddResourceModal(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="d-flex align-items-center">
            <FaPlus className="text-success me-2" />
            添加新资源
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddResource}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>资源标题 <span className="text-danger">*</span></Form.Label>
                  <Form.Control 
                    type="text" 
                    name="title"
                    value={newResource.title}
                    onChange={handleInputChange}
                    placeholder="输入资源标题" 
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>资源类型</Form.Label>
                  <Form.Select 
                    name="type"
                    value={newResource.type}
                    onChange={handleInputChange}
                  >
                    <option>书籍</option>
                    <option>文章</option>
                    <option>视频</option>
                    <option>音频</option>
                    <option>播客</option>
                    <option>网站</option>
                    <option>其他</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            
            <Form.Group className="mb-3">
              <Form.Label>作者/创作者 <span className="text-danger">*</span></Form.Label>
              <Form.Control 
                type="text" 
                name="author"
                value={newResource.author}
                onChange={handleInputChange}
                placeholder="输入作者或创作者" 
                required
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>资源链接 (可选)</Form.Label>
              <InputGroup>
                <InputGroup.Text>URL</InputGroup.Text>
                <Form.Control 
                  type="url" 
                  name="url"
                  value={newResource.url}
                  onChange={handleInputChange}
                  placeholder="https://example.com" 
                />
              </InputGroup>
            </Form.Group>
            
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>添加到收集 <span className="text-danger">*</span></Form.Label>
                  <Form.Select 
                    name="collection_id"
                    value={newResource.collection_id}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">选择收集...</option>
                    {collections.map(collection => (
                      <option key={collection.id} value={collection.id}>{collection.name}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>难度级别</Form.Label>
                  <Form.Select 
                    name="difficulty"
                    value={newResource.difficulty}
                    onChange={handleInputChange}
                  >
                    <option value="easy">初级</option>
                    <option value="medium">中级</option>
                    <option value="hard">高级</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            
            <Form.Group className="mb-3">
              <Form.Label>主题标签</Form.Label>
              <Form.Control 
                type="text" 
                name="themes"
                value={newResource.themes}
                onChange={handleInputChange}
                placeholder="输入相关主题，用逗号分隔" 
              />
              <Form.Text className="text-muted">
                例如：内在小孩, 自我觉察, 情绪调节
              </Form.Text>
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>资源简介</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={2} 
                name="notes"
                value={newResource.notes}
                onChange={handleInputChange}
                placeholder="添加资源简介..." 
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label className="d-flex align-items-center">
                <FaRegCommentDots className="me-2 text-success" />
                我的初步感想
              </Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3} 
                name="personalNotes"
                value={newResource.personalNotes}
                onChange={handleInputChange}
                placeholder="记录你看到这个资源时的第一感受、为什么想保存它..." 
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>我的评分</Form.Label>
              <div className="d-flex align-items-center">
                <span className="me-2">评分:</span>
                {renderRating(newResource.rating)}
                <div className="ms-auto">
                  <Form.Range 
                    name="rating"
                    value={newResource.rating}
                    onChange={handleInputChange}
                    min={0}
                    max={5}
                    step={1}
                  />
                </div>
              </div>
            </Form.Group>
            
            <Button variant="success" type="submit" className="w-100">
              保存资源
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      
      {/* 创建收集模态框 */}
      <Modal show={showCollectionModal} onHide={() => setShowCollectionModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title className="d-flex align-items-center">
            <FaRegBookmark className="text-success me-2" />
            创建新收集
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddCollection}>
            <Form.Group className="mb-3">
              <Form.Label>收集名称</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={newCollection.name}
                onChange={handleCollectionInputChange}
                required
                placeholder="例如：内在小孩疗愈资源"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>描述</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={newCollection.description}
                onChange={handleCollectionInputChange}
                placeholder="描述这个收集的主要内容..."
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>主题分类</Form.Label>
              <Form.Select
                name="theme"
                value={newCollection.theme}
                onChange={handleCollectionInputChange}
                required
              >
                {themes.map(theme => (
                  <option key={theme.id} value={theme.id}>
                    {theme.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>封面颜色</Form.Label>
              <Form.Control
                type="color"
                name="coverColor"
                value={newCollection.coverColor}
                onChange={handleCollectionInputChange}
                style={{ height: '40px' }}
              />
            </Form.Group>
            <Button variant="success" type="submit" className="w-100">
              创建收集
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* 编辑资源模态框 */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>编辑资源</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editingResource && (
            <Form onSubmit={handleEditSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>标题</Form.Label>
                    <Form.Control
                      type="text"
                      name="title"
                      value={editingResource.title}
                      onChange={handleEditChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>类型</Form.Label>
                    <Form.Select
                      name="type"
                      value={editingResource.type}
                      onChange={handleEditChange}
                      required
                    >
                      <option value="书籍">书籍</option>
                      <option value="音频">音频</option>
                      <option value="视频">视频</option>
                      <option value="文章">文章</option>
                      <option value="播客">播客</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              
              <Form.Group className="mb-3">
                <Form.Label>作者/来源</Form.Label>
                <Form.Control
                  type="text"
                  name="author"
                  value={editingResource.author}
                  onChange={handleEditChange}
                  required
                />
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label>URL (可选)</Form.Label>
                <Form.Control
                  type="url"
                  name="url"
                  value={editingResource.url}
                  onChange={handleEditChange}
                />
              </Form.Group>
              
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>主题标签</Form.Label>
                    <Form.Control
                      type="text"
                      name="themes"
                      value={editingResource.themes}
                      onChange={handleEditChange}
                      placeholder="输入相关主题，用逗号分隔"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>难度级别</Form.Label>
                    <Form.Select
                      name="difficulty"
                      value={editingResource.difficulty}
                      onChange={handleEditChange}
                    >
                      <option value="easy">初级</option>
                      <option value="medium">中级</option>
                      <option value="hard">高级</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              
              <Form.Group className="mb-3">
                <Form.Label>资源简介</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  name="notes"
                  value={editingResource.notes}
                  onChange={handleEditChange}
                />
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label className="d-flex align-items-center">
                  <FaRegCommentDots className="me-2 text-success" />
                  我的感想
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="personalNotes"
                  value={editingResource.personalNotes}
                  onChange={handleEditChange}
                  placeholder="记录你关于这个资源的思考、感悟和应用..."
                />
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label>我的评分</Form.Label>
                <div className="d-flex align-items-center">
                  <span className="me-2">评分:</span>
                  {renderRating(editingResource.rating || 0)}
                  <div className="ms-auto">
                    <Form.Range 
                      name="rating"
                      value={editingResource.rating || 0}
                      onChange={handleEditChange}
                      min={0}
                      max={5}
                      step={1}
                    />
                  </div>
                </div>
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label>收集</Form.Label>
                <Form.Select
                  name="collection_id"
                  value={editingResource.collection_id}
                  onChange={handleEditChange}
                  required
                >
                  <option value="">选择一个收集</option>
                  {collections.map(collection => (
                    <option key={collection.id} value={collection.id}>
                      {collection.name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              
              <Button variant="success" type="submit" className="w-100">
                保存更改
              </Button>
            </Form>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Resources;