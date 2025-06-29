import React from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';

interface PersonalityTraitAssessmentProps {
  updateProgress: (tab: string, progress: number) => void;
  assessmentProgress: { [key: string]: number };
}

const PersonalityTraitAssessment: React.FC<PersonalityTraitAssessmentProps> = ({
  updateProgress,
  assessmentProgress,
}) => {
  return (
    <Card>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4>人格特质分析</h4>
          <span className="badge bg-info">15个问题</span>
        </div>

        <Alert variant="warning">
          <strong>免责声明：</strong> 人格特质分析基于心理学模型，但此评估为简化版，
          不能替代专业人格测评。正式人格测评需使用标准化工具并由专业人士解释。
        </Alert>

        <p>这个评估帮助你了解自己的核心人格特质，以及它们如何影响你的思维、情感和行为模式。</p>

        <div className="personality-dimensions mb-4">
          <h5>主要人格维度</h5>
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="p-3 bg-light rounded h-100">
                <h6 className="fw-bold">开放性</h6>
                <p className="small mb-0">对新经验的开放程度、想象力和好奇心</p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="p-3 bg-light rounded h-100">
                <h6 className="fw-bold">尽责性</h6>
                <p className="small mb-0">组织性、责任感和目标导向</p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="p-3 bg-light rounded h-100">
                <h6 className="fw-bold">外向性</h6>
                <p className="small mb-0">社交活跃度、热情和能量水平</p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="p-3 bg-light rounded h-100">
                <h6 className="fw-bold">宜人性</h6>
                <p className="small mb-0">合作性、同理心和信任倾向</p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="p-3 bg-light rounded h-100">
                <h6 className="fw-bold">神经质</h6>
                <p className="small mb-0">情绪稳定性和压力敏感性</p>
              </div>
            </div>
          </div>
        </div>

        <div className="progress mb-4" style={{ height: '8px' }}>
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: `${assessmentProgress.personality}%` }}
            aria-valuenow={assessmentProgress.personality}
            aria-valuemin={0}
            aria-valuemax={100}
          ></div>
        </div>

        <div className="assessment-questions">
          <p><strong>请根据你的性格特点回答以下问题:</strong></p>

          <Form>
            <div className="question-item mb-4 p-3 bg-light rounded">
              <p className="fw-medium">1. 在社交聚会中，你通常：</p>
              <div className="d-flex flex-column">
                <Form.Check
                  type="radio"
                  name="personality-q1"
                  id="personality-q1-1"
                  label="主动与陌生人交谈"
                  onChange={() => updateProgress('personality', Math.min(100, assessmentProgress.personality + 6.67))}
                />
                <Form.Check
                  type="radio"
                  name="personality-q1"
                  id="personality-q1-2"
                  label="只和认识的人交谈"
                  onChange={() => updateProgress('personality', Math.min(100, assessmentProgress.personality + 6.67))}
                />
                <Form.Check
                  type="radio"
                  name="personality-q1"
                  id="personality-q1-3"
                  label="尽量避免交谈"
                  onChange={() => updateProgress('personality', Math.min(100, assessmentProgress.personality + 6.67))}
                />
              </div>
            </div>

            {/* 问题2 */}
            <div className="question-item mb-4 p-3 bg-light rounded">
              <p className="fw-medium">2. 你更倾向于：</p>
              <div className="d-flex flex-column">
                <Form.Check
                  type="radio"
                  name="personality-q2"
                  id="personality-q2-1"
                  label="按计划行事"
                  onChange={() => updateProgress('personality', Math.min(100, assessmentProgress.personality + 6.67))}
                />
                <Form.Check
                  type="radio"
                  name="personality-q2"
                  id="personality-q2-2"
                  label="灵活处理事情"
                  onChange={() => updateProgress('personality', Math.min(100, assessmentProgress.personality + 6.67))}
                />
              </div>
            </div>

            {/* 问题3 */}
            <div className="question-item mb-4 p-3 bg-light rounded">
              <p className="fw-medium">3. 当事情出错时，你通常会：</p>
              <div className="d-flex flex-column">
                <Form.Check
                  type="radio"
                  name="personality-q3"
                  id="personality-q3-1"
                  label="保持冷静，寻找解决方案"
                  onChange={() => updateProgress('personality', Math.min(100, assessmentProgress.personality + 6.67))}
                />
                <Form.Check
                  type="radio"
                  name="personality-q3"
                  id="personality-q3-2"
                  label="感到焦虑，担心后果"
                  onChange={() => updateProgress('personality', Math.min(100, assessmentProgress.personality + 6.67))}
                />
                <Form.Check
                  type="radio"
                  name="personality-q3"
                  id="personality-q3-3"
                  label="责怪自己或他人"
                  onChange={() => updateProgress('personality', Math.min(100, assessmentProgress.personality + 6.67))}
                />
              </div>
            </div>

            <div className="mt-4 d-flex justify-content-between align-items-center">
              <div className="text-muted small">
                * 完成所有问题可查看完整评估报告
              </div>
              <Button variant="primary" disabled={assessmentProgress.personality < 100}>
                提交评估
              </Button>
            </div>
          </Form>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PersonalityTraitAssessment;