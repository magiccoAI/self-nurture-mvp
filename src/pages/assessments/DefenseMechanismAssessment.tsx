import React from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';

interface DefenseMechanismAssessmentProps {
  updateProgress: (tab: string, progress: number) => void;
  assessmentProgress: { [key: string]: number };
  defenseMechanisms: { id: number; name: string; description: string }[];
}

const DefenseMechanismAssessment: React.FC<DefenseMechanismAssessmentProps> = ({
  updateProgress,
  assessmentProgress,
  defenseMechanisms,
}) => {
  return (
    <Card>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4>防御机制识别</h4>
          <span className="badge bg-info">12个问题</span>
        </div>

        <Alert variant="warning">
          <strong>免责声明：</strong> 防御机制是普遍的心理现象，此评估基于心理学理论，
          但结果仅供参考，不能作为专业诊断。如需临床评估，请咨询心理健康专业人士。
        </Alert>

        <p>这个评估帮助你识别自己常用的心理防御机制，了解它们如何影响你的思维和行为。</p>

        <div className="progress mb-4" style={{ height: '8px' }}>
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: `${assessmentProgress.defense}%` }}
            aria-valuenow={assessmentProgress.defense}
            aria-valuemin={0}
            aria-valuemax={100}
          ></div>
        </div>

        <div className="defense-intro mb-4">
          <h5>常见防御机制</h5>
          <div className="row">
            {defenseMechanisms.map((mechanism) => (
              <div key={mechanism.id} className="col-md-6 mb-3">
                <div className="p-3 bg-light rounded h-100">
                  <h6 className="fw-bold">{mechanism.name}</h6>
                  <p className="mb-0 small">{mechanism.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="assessment-questions">
          <p><strong>请根据你的真实情况回答以下问题:</strong></p>

          <Form>
            {/* 问题1 */}
            <div className="question-item mb-4 p-3 bg-light rounded">
              <p className="fw-medium">1. 当面对批评时，我通常会立刻反驳或指出对方的错误。</p>
              <div className="d-flex justify-content-between flex-wrap">
                {[1, 2, 3, 4, 5].map((num) => (
                  <Form.Check
                    key={num}
                    inline
                    type="radio"
                    name="defense-q1"
                    id={`defense-q1-${num}`}
                    label={num === 1 ? "从不" :
                                   num === 2 ? "很少" :
                                   num === 3 ? "有时" :
                                   num === 4 ? "经常" : "总是"}
                    onChange={() => updateProgress('defense', Math.min(100, assessmentProgress.defense + 8.33))}
                  />
                ))}
              </div>
            </div>

            {/* 问题2 */}
            <div className="question-item mb-4 p-3 bg-light rounded">
              <p className="fw-medium">2. 面对痛苦的事情，我会尽量不去想它，转移注意力到其他事情上。</p>
              <div className="d-flex justify-content-between flex-wrap">
                {[1, 2, 3, 4, 5].map((num) => (
                  <Form.Check
                    key={num}
                    inline
                    type="radio"
                    name="defense-q2"
                    id={`defense-q2-${num}`}
                    label={num === 1 ? "从不" :
                                   num === 2 ? "很少" :
                                   num === 3 ? "有时" :
                                   num === 4 ? "经常" : "总是"}
                    onChange={() => updateProgress('defense', Math.min(100, assessmentProgress.defense + 8.33))}
                  />
                ))}
              </div>
            </div>

            {/* 问题3 */}
            <div className="question-item mb-4 p-3 bg-light rounded">
              <p className="fw-medium">3. 我倾向于为自己的行为找合理的解释，即使这些行为可能伤害了他人。</p>
              <div className="d-flex justify-content-between flex-wrap">
                {[1, 2, 3, 4, 5].map((num) => (
                  <Form.Check
                    key={num}
                    inline
                    type="radio"
                    name="defense-q3"
                    id={`defense-q3-${num}`}
                    label={num === 1 ? "从不" :
                                   num === 2 ? "很少" :
                                   num === 3 ? "有时" :
                                   num === 4 ? "经常" : "总是"}
                    onChange={() => updateProgress('defense', Math.min(100, assessmentProgress.defense + 8.33))}
                  />
                ))}
              </div>
            </div>

            <div className="mt-4 d-flex justify-content-between align-items-center">
              <div className="text-muted small">
                * 完成所有问题可查看完整评估报告
              </div>
              <Button variant="primary" disabled={assessmentProgress.defense < 100}>
                提交评估
              </Button>
            </div>
          </Form>
        </div>
      </Card.Body>
    </Card>
  );
};

export default DefenseMechanismAssessment;