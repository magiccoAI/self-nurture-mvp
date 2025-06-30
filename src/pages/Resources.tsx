import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Form, InputGroup, Alert, Modal } from 'react-bootstrap';

// 设置API基础URL
const API_BASE_URL = 'http://localhost:5000/api';

const Resources: React.FC = () => {
  const [collections, setCollections] = useState<any[]>([]);
  const [recentResources, setRecentResources] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [successMessage, setSuccessMessage] = useState('');
  
  // 新资源表单状态
  const [newResource, setNewResource] = useState({
    title: '',
    type: '书籍',
    author: '',
    url: '',
    notes: '',
    collection_id: 0
  });
  
  // 新收集表单状态
  const [showCollectionModal, setShowCollectionModal] = useState(false);
  const [newCollection, setNewCollection] = useState({
    name: '',
    description: ''
  });

  // 获取资源收集和最近资源
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // 获取资源收集
        const collectionsResponse = await axios.get(`${API_BASE_URL}/resources/collections`);
        setCollections(collectionsResponse.data.data);
        
        // 获取最近添加的资源
        const recentResponse = await axios.get(`${API_BASE_URL}/resources/recent?limit=3`);
        setRecentResources(recentResponse.data.data);
        
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);

        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 处理表单输入变化
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewResource({
      ...newResource,
      [name]: value
    });
  };

  // 处理添加新资源
  const handleAddResource = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 验证表单
    if (!newResource.title || !newResource.author || !newResource.collection_id) {

      return;
    }
    
    let resourceToAdd = { ...newResource };

    // 根据用户需求，如果类型是视频，则自动填充视频信息
    if (resourceToAdd.type === '视频') {
      resourceToAdd.url = 'https://youtu.be/Tv6yNJcZhl0?si=SVUsziPNJ9rGoiLo';
      resourceToAdd.title = 'What Is Mental Health?: Nancy McWilliams';
      resourceToAdd.author = 'Nancy McWilliams';
    } else if (resourceToAdd.type === '书籍') {
      // 如果类型是书籍，则自动填充书籍信息
      resourceToAdd.title = '内在生命：精神分析与人格发展';
      resourceToAdd.author = 'Nancy McWilliams';
    }

    try {
      // 发送请求添加资源
      const response = await axios.post(`${API_BASE_URL}/resources/items`, resourceToAdd);
      
      // 更新最近资源列表
      setRecentResources([response.data.data, ...recentResources.slice(0, 2)]);
      
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
        collection_id: 0
      });
      
      // 显示成功消息
      setSuccessMessage('资源已成功添加！');
      setTimeout(() => setSuccessMessage(''), 3000);
      

    } catch (err) {
      console.error('Error adding resource:', err);

    }
  };
  
  // 处理新收集表单输入变化
  const handleCollectionInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

      return;
    }
    
    try {
      // 发送请求添加收集
      const response = await axios.post(`${API_BASE_URL}/resources/collections`, newCollection);
      
      // 更新收集列表
      setCollections([...collections, response.data.data]);
      
      // 重置表单并关闭模态框
      setNewCollection({
        name: '',
        description: ''
      });
      setShowCollectionModal(false);
      
      // 显示成功消息
      setSuccessMessage('收集已成功创建！');
      setTimeout(() => setSuccessMessage(''), 3000);
      

    } catch (err) {
      console.error('Error adding collection:', err);

    }
  };

  return (
    <Container className="py-4">
      <div className="page-header mb-4">
        <h1>资源收集</h1>
        <p className="lead">整理和管理你的学习资源，建立个人知识库</p>
      </div>

      {loading ? (
        <div className="text-center py-5">
          <p className="lead">目前展示的是预设推荐资源，后续将支持更多内容动态加载。</p>
        </div>
      ) : (
        <Row className="mb-4">
          <Col md={8} xs={12}>

            {successMessage && <Alert variant="success">{successMessage}</Alert>}

            {/* 推荐资源部分 */}
            <h2 className="mb-3">推荐资源</h2>
            <Row className="mb-4">
              {/* 推荐资源卡片示例 */}
              <Col md={6} xs={12} className="mb-3">
                <Card className="h-100 resource-card">
                  <Card.Body>
                    <span className="badge bg-primary mb-2">书籍</span>
                    <Card.Title>《内在生命：精神分析与人格发展》</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
</Card.Subtitle>
                    <Card.Text>——一部贯穿生命全程的精神分析发展地图
作者：[英] 马戈·沃德尔（Margot Waddell）
译者：林晴玉 等 | 审校：林玉华
<nav></nav>出版社：中国轻工业出版社
                      </Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">难度: 中级</small>
                      <Button variant="outline-primary" size="sm">添加到收藏</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-3">
                <Card className="h-100 resource-card">
                  <Card.Body>
                    <span className="badge bg-warning mb-2">播客</span>
                    <Card.Title>播客：严艺家</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">严艺家</Card.Subtitle>
                    <Card.Text>「这是一档由知名心理咨询师严艺家主持的播客栏目。节目核心探讨“养育”的力量，不仅关注0-25岁儿童及青少年的成长议题，更将“自我养育”——这一贯穿每个人生命始终的命题——作为核心视角。其内容兼具专业科普性与普适性，即使没有孩子的听众，也能从中获得关于自我理解、心理成长和关系构建的深刻启发。全网搜索“严艺家”即可订阅收听。」</Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted"></small>
                      <Button variant="outline-primary" size="sm">添加到收藏</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-3">
                <Card className="h-100 resource-card">
                  <Card.Body>
                    <span className="badge bg-success mb-2">视频</span>
                    <Card.Title>What Is Mental Health?: Nancy McWilliams</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Nancy McWilliams</Card.Subtitle>
                    <Card.Text>关于心理健康的视频，由Nancy McWilliams主讲。</Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">难度: 初级</small>
                      <Button variant="outline-primary" size="sm" href="https://www.youtube.com/watch?v=Tv6yNJcZhl0&ab_channel=PicturingItWithElliot" target="_blank">添加到收藏</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Card className="mb-4">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h3>我的资源收集</h3>
                  <Button variant="primary" onClick={() => setShowCollectionModal(true)}>创建新收集</Button>
                </div>

                <Row>
                  {/* 筛选和排序功能占位符 */}
                  <Col xs={12} className="mb-3">
                    <Form className="d-flex justify-content-between align-items-center">
                      <Form.Group controlId="resourceTypeFilter">
                        <Form.Label className="me-2">筛选类型:</Form.Label>
                        <Form.Select style={{ width: '150px', display: 'inline-block' }}>
                          <option>全部</option>
                          <option>书籍</option>
                          <option>文章</option>
                          <option>视频</option>
                          <option>播客</option>
                        </Form.Select>
                      </Form.Group>
                      <Form.Group controlId="resourceSort">
                        <Form.Label className="me-2">排序方式:</Form.Label>
                        <Form.Select style={{ width: '150px', display: 'inline-block' }}>
                          <option>最新</option>
                          <option>最热</option>
                          <option>标题</option>
                        </Form.Select>
                      </Form.Group>
                    </Form>
                  </Col>
                  {collections.map(collection => (
                    <Col md={6} key={collection.id} className="mb-3">
                      <Card className="h-100 collection-card">
                        <Card.Body>
                          <h4>{collection.name}</h4>
                          <p className="text-muted">{collection.description}</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <span className="badge bg-light text-dark">{collection.item_count} 项资源</span>
                            <small className="text-muted">更新于 {collection.last_update}</small>
                          </div>
                        </Card.Body>
                        <Card.Footer className="bg-white">
                          <div className="d-flex justify-content-between">
                            <Button variant="outline-primary" size="sm">查看</Button>
                            <Button variant="outline-secondary" size="sm">添加资源</Button>
                          </div>
                        </Card.Footer>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
            
            <Card>
              <Card.Body>
                <h3>最近添加的资源</h3>
                
                {recentResources.length > 0 ? (
                  recentResources.map(resource => (
                    <div key={resource.id} className="resource-item p-3 mb-3 bg-light rounded">
                      <div className="d-flex justify-content-between align-items-start">
                        <div>
                          <h5>{resource.title}</h5>
                          <p className="mb-1">
                            <span className="badge bg-primary me-2">{resource.type}</span>
                            <span className="text-muted">{resource.author}</span>
                          </p>
                          <p className="mb-1">
                            <small className="text-muted">添加于 {resource.add_date} · 收集: {
                              collections.find(c => c.id === resource.collection_id)?.name || '未知收集'
                            }</small>
                          </p>
                          <p className="mt-2 mb-0">{resource.notes}</p>
                        </div>
                        <div className="resource-actions">
                          <Button variant="link" className="p-0 me-2">编辑</Button>
                          <Button variant="link" className="p-0 text-danger">删除</Button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center py-3">暂无资源，开始添加你的第一个资源吧！</p>
                )}
                
                <div className="text-center mt-3">
                  <Button variant="outline-primary">查看全部资源</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={4} xs={12}>
            <Card className="mb-4">
              <Card.Body>
                <h3>添加新资源</h3>
                
                <Form onSubmit={handleAddResource}>
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
                  
                  <Form.Group className="mb-3">
                    <Form.Label>笔记</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      rows={3} 
                      name="notes"
                      value={newResource.notes}
                      onChange={handleInputChange}
                      placeholder="添加你对这个资源的笔记、摘要或想法..." 
                    />
                  </Form.Group>
                  
                  <Button variant="primary" type="submit">
                    保存资源
                  </Button>
                </Form>
              </Card.Body>
            </Card>
            
            <Card>
              <Card.Body>
                <h3>资源导入</h3>
                <p>从其他平台导入你的资源收集</p>
                
                <div className="import-options">
                  <Button variant="outline-secondary" className="mb-2 w-100">从Notion导入</Button>
                  <Button variant="outline-secondary" className="mb-2 w-100">从Evernote导入</Button>
                  <Button variant="outline-secondary" className="w-100">上传CSV文件</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
      
      {/* 创建新收集模态框 */}
      <Modal show={showCollectionModal} onHide={() => setShowCollectionModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>创建新收集</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddCollection}>
            <Form.Group className="mb-3">
              <Form.Label>收集名称 <span className="text-danger">*</span></Form.Label>
              <Form.Control 
                type="text" 
                name="name"
                value={newCollection.name}
                onChange={handleCollectionInputChange}
                placeholder="输入收集名称" 
                required
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
                placeholder="描述这个收集的内容和目的..." 
              />
            </Form.Group>
            
            <div className="d-flex justify-content-end">
              <Button variant="secondary" className="me-2" onClick={() => setShowCollectionModal(false)}>
                取消
              </Button>
              <Button variant="primary" type="submit">
                创建
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Resources;
