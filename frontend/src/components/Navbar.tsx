
import { Container, Nav, Navbar as BootstrapNavbar, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  // 检查当前路径是否激活
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <BootstrapNavbar 
      bg="primary" 
      expand="lg" 
      className="py-3 shadow-sm"
    >
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" className="fw-bold" style={{ color: 'var(--bg-light)' }}>
          <span style={{ color: 'var(--bg-light)' }}>自我</span>
          <span style={{ color: 'var(--bg-light)' }}>养育</span>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={`mx-1 ${isActive('/') ? 'active fw-bold' : ''}`}
            >
              首页
            </Nav.Link>
            <Nav.Link
                as={Link} 
                to="/knowledge" 
                className={`mx-1 ${isActive('/knowledge') ? 'active fw-bold' : ''}`}
              >
                知识库
              </Nav.Link>
            <Nav.Link
                as={Link} 
                to="/exploration" 
                className={`mx-1 ${isActive('/exploration') ? 'active fw-bold' : ''}`}
              >
                自我探索
              </Nav.Link>
            <Nav.Link
                as={Link} 
                to="/tracking" 
                className={`mx-1 ${isActive('/tracking') ? 'active fw-bold' : ''}`}
              >
                成长追踪
              </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/resources" 
              className={`mx-1 ${isActive('/resources') ? 'active fw-bold' : ''}`}
            >
              资源收集
            </Nav.Link>
            <Nav.Link
                as={Link} 
                to="/practice-guides" 
                className={`mx-1 ${isActive('/practice-guides') ? 'active fw-bold' : ''}`}
              >
                实践指南
              </Nav.Link>
            <Button 
              variant="outline-light" 
              size="sm" 
              className="ms-2 rounded-pill px-3"
              as={Link}
              to="/"
            >
              登录
            </Button>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
      
      {/* 自定义样式 */}
      <style type="text/css">
        {`
        .navbar .nav-link {
          position: relative;
          padding: 0.5rem 0.8rem;
          color: #FFFFFF;
          transition: color 0.3s ease;
        }
        
        .navbar .nav-link:hover {
          color: #CCCCCC;
        }
        
        .navbar .nav-link.active {
          color: #FFFFFF;
        }
        
        .navbar .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0.8rem;
          right: 0.8rem;
          height: 3px;
          background-color: #FFFFFF;
          border-radius: 3px 3px 0 0;
        }
        `}
      </style>
    </BootstrapNavbar>
  );
};

export default Navbar;
