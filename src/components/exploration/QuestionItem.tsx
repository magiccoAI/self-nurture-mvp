import React from 'react';
import { Form } from 'react-bootstrap';

interface QuestionItemProps {
  questionId: string;
  questionIndex: number;
  questionText: string;
  type: 'likert5' | 'options';
  options?: string[];
  onAnswerChange: (value: number) => void;
}

const QuestionItem: React.FC<QuestionItemProps> = ({
  questionId,
  questionIndex,
  questionText,
  type,
  options,
  onAnswerChange
}) => {
  const renderLikert5Options = () => {
    const labels = [
      { value: 1, label: '强烈不同意' },
      { value: 2, label: '不同意' },
      { value: 3, label: '中立' },
      { value: 4, label: '同意' },
      { value: 5, label: '强烈同意' }
    ];

    return (
      <div className="d-flex justify-content-between flex-wrap">
        {labels.map(({ value, label }) => (
          <Form.Check
            key={value}
            inline
            type="radio"
            name={`q${questionId}`}
            id={`q${questionId}-${value}`}
            label={label}
            onChange={() => onAnswerChange(value)}
          />
        ))}
      </div>
    );
  };

  const renderOptions = () => {
    if (!options) return null;

    return (
      <div className="d-flex flex-column">
        {options.map((option, index) => (
          <Form.Check
            key={index}
            type="radio"
            name={`q${questionId}`}
            id={`q${questionId}-${index + 1}`}
            label={option}
            onChange={() => onAnswerChange(index + 1)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="question-item mb-4 p-3 bg-light rounded">
      <p className="fw-medium">{questionIndex + 1}. {questionText}</p>
      {type === 'likert5' ? renderLikert5Options() : renderOptions()}
    </div>
  );
};

export default QuestionItem;