import React from 'react';
import { Container } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer className="bg-light py-4 mt-5">
      <Container className="text-center">
        <p className="mb-0 text-muted">© {new Date().getFullYear()} 自我养育项目 | 关爱内在自我，培养健康人格</p>
      </Container>
    </footer>
  );
};

export default Footer;
