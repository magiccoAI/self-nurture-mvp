import React from 'react';
import { Card, Button, ProgressBar } from 'react-bootstrap';
import QuestionItem from './QuestionItem';

interface Question {
  id: string;
  text: string;
  type: 'likert5' | 'options';
  options?: string[];
}

interface AssessmentTabProps {
  title: string;
  description: string;
  questions: Question[];
  progress: number;
  onAnswerChange: (questionId: string, value: number) => void;
  onSubmit: () => void;
}

const AssessmentTab: React.FC<AssessmentTabProps> = ({
  title,
  description,
  questions,
  progress,
  onAnswerChange,
  onSubmit
}) => {
  return (
    <Card className="border-0 shadow-sm">
      <Card.Header className="bg-primary text-white">
        <h5 className="mb-0">{title}</h5>
      </Card.Header>
      <Card.Body>
        <Card.Text className="mb-4">{description}</Card.Text>
        
        <ProgressBar 
          now={progress} 
          label={`${progress}%`} 
          className="mb-4" 
          variant="success" 
        />

        <form>
          {questions.map((question, index) => (
            <QuestionItem
              key={question.id}
              questionId={question.id}
              questionIndex={index}
              questionText={question.text}
              type={question.type}
              options={question.options}
              onAnswerChange={(value) => onAnswerChange(question.id, value)}
            />
          ))}

          <div className="d-flex justify-content-end">
            <Button 
              variant="primary" 
              onClick={onSubmit}
              disabled={progress < 100}
            >
              提交评估
            </Button>
          </div>
        </form>
      </Card.Body>
    </Card>
  );
};

export default AssessmentTab;