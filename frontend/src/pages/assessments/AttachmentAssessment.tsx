import React, { useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';

interface AttachmentAssessmentProps {
  updateProgress: (tab: string, progress: number) => void;
  assessmentProgress: { [key: string]: number };
}

const AttachmentAssessment: React.FC<AttachmentAssessmentProps> = ({ updateProgress, assessmentProgress }) => {
  return (
    <Card>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4>依恋类型评估</h4>
          <span className="badge bg-info">10个问题</span>
        </div>

        <Alert variant="warning">
          <strong>免责声明：</strong> 此评估基于成人依恋理论，但AI生成的评估结果仅供参考，
          不能作为临床诊断依据。如需专业评估，请咨询心理治疗师。
        </Alert>

        <p>依恋类型影响我们如何看待自己和他人，以及如何在关系中行动。
           了解你的依恋类型可以帮助你理解自己的关系模式。</p>

        <div className="progress mb-4" style={{height: '8px'}}>
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{width: `${assessmentProgress.attachment}%`}}
            aria-valuenow={assessmentProgress.attachment}
            aria-valuemin={0}
            aria-valuemax={100}
          ></div>
        </div>

        <div className="assessment-questions">
          <p><strong>请根据你的真实感受回答以下问题:</strong></p>

          <Form>
            {/* 问题1 */}
            <div className="question-item mb-4 p-3 bg-light rounded">
              <p className="fw-medium">1. 我担心亲密关系中的伴侣不像我关心他们那样关心我。</p>
              <div className="d-flex justify-content-between flex-wrap">
                {[1,2,3,4,5].map(num => (
                  <Form.Check
                    key={num}
                    inline
                    type="radio"
                    name="q1"
                    id={`q1-${num}`}
                    label={num === 1 ? "强烈不同意" :
                                   num === 2 ? "不同意" :
                                   num === 3 ? "中立" :
                                   num === 4 ? "同意" : "强烈同意"}
                    onChange={() => updateProgress('attachment', 10)}
                  />
                ))}
              </div>
            </div>

            {/* 问题2 */}
            <div className="question-item mb-4 p-3 bg-light rounded">
              <p className="fw-medium">2. 我发现很难完全依赖他人。</p>
              <div className="d-flex justify-content-between flex-wrap">
                {[1,2,3,4,5].map(num => (
                  <Form.Check
                    key={num}
                    inline
                    type="radio"
                    name="q2"
                    id={`q2-${num}`}
                    label={num === 1 ? "强烈不同意" :
                                   num === 2 ? "不同意" :
                                   num === 3 ? "中立" :
                                   num === 4 ? "同意" : "强烈同意"}
                    onChange={() => updateProgress('attachment', 20)}
                  />
                ))}
              </div>
            </div>

            {/* 问题3 - 简化显示，实际应有10个问题 */}
            <div className="question-item mb-4 p-3 bg-light rounded">
              <p className="fw-medium">3. 我感到舒适与他人建立亲密关系。</p>
              <div className="d-flex justify-content-between flex-wrap">
                {[1,2,3,4,5].map(num => (
                  <Form.Check
                    key={num}
                    inline
                    type="radio"
                    name="q3"
                    id={`q3-${num}`}
                    label={num === 1 ? "强烈不同意" :
                                   num === 2 ? "不同意" :
                                   num === 3 ? "中立" :
                                   num === 4 ? "同意" : "强烈同意"}
                    onChange={() => updateProgress('attachment', 30)}
                  />
                ))}
              </div>
            </div>

            {/* 添加更多问题... */}

            <div className="mt-4 d-flex justify-content-between align-items-center">
              <div className="text-muted small">
                * 完成所有问题可查看完整评估报告
              </div>
              <Button variant="primary" disabled={assessmentProgress.attachment < 100}>
                提交评估
              </Button>
            </div>
          </Form>
        </div>
      </Card.Body>
    </Card>
  );
};

export default AttachmentAssessment;