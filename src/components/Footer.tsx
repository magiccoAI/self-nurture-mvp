import React from 'react';
import { Container } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer className="bg-light py-4 mt-5">
      <Container className="text-center">
        <p className="mb-0 text-muted">© {new Date().getFullYear()} 自我养育项目 | 关爱内在自我，培养健康人格</p>
        <a href="/self-nurture-mvp/about-us" className="text-decoration-none" style={{ color: 'var(--text-dark)' }}>关于我们</a>
      </Container>
    </footer>
  );
};

export default Footer;
