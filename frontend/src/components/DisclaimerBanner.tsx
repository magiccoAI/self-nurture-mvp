import React from 'react';
import { Alert } from 'react-bootstrap';

const DisclaimerBanner: React.FC = () => {
  return (
    <Alert className="text-center mb-0 rounded-0" style={{
      position: 'sticky',
      top: '0',
      zIndex: 1031, /* Higher than Navbar's z-index */
      backgroundColor: '#e3f2fd', /* 浅绿色 */
      color: 'var(--text-dark)',
      padding: '6px 0',
      fontSize: '0.85rem',
      fontWeight: '500',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      重要提示：本网站大部分内容由AI生成。 我们旨在提供一个自我养育的参考框架，请理性参考，并在专业人士指导下实践。
    </Alert>
  );
};

export default DisclaimerBanner;