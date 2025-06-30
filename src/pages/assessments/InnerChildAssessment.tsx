import React from 'react';
import { Card, Button, Alert } from 'react-bootstrap';

interface InnerChildAssessmentProps {
  updateProgress: (tab: string, progress: number) => void;
}

const InnerChildAssessment: React.FC<InnerChildAssessmentProps> = ({ updateProgress }) => {
  return (
    <Card>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4>内在小孩需求评估</h4>
          <span className="badge bg-info">8个问题</span>
        </div>

        <Alert variant="warning">
          <strong>免责声明：</strong> 此评估基于内在小孩理论，但结果仅供参考。
          童年创伤等深层问题需要专业心理治疗师协助处理。
        </Alert>

        {/* 评估内容占位符 */}
        <div className="assessment-content text-center p-5 bg-light rounded">
          <h5>内在小孩需求评估</h5>
          <p className="text-muted">此评估帮助你识别内在小孩未被满足的需求</p>
          <Button
            variant="outline-primary"
            onClick={() => updateProgress('inner-child', 50)}
          >
            开始评估
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default InnerChildAssessment;