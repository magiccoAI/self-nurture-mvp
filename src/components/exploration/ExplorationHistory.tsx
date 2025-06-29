import React from 'react';
import { Card, Alert, Button } from 'react-bootstrap';

interface AssessmentResult {
  type: string;
  title: string;
  result: string;
  badges?: {
    label: string;
    value: string;
    variant: string;
  }[];
  description: string;
  date: string;
}

interface ExplorationHistoryProps {
  results: AssessmentResult[];
}

const ExplorationHistory: React.FC<ExplorationHistoryProps> = ({ results }) => {
  return (
    <div className="assessment-history">
      {/* 评估历史模块已移除 */}
    </div>
  );
};

export default ExplorationHistory;