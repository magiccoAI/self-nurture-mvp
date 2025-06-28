import React from 'react';

interface ProgressBadgeProps {
  progress: number;
}

const ProgressBadge: React.FC<ProgressBadgeProps> = ({ progress }) => {
  if (progress <= 0) return null;

  return (
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success progress-badge">
      {progress}%.
      <span className="visually-hidden">完成进度</span>
    </span>
  );
};

export default ProgressBadge;