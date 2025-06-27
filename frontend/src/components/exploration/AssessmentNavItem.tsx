import React from 'react';
import { Nav } from 'react-bootstrap';
import ProgressBadge from './ProgressBadge';

interface AssessmentNavItemProps {
  eventKey: string;
  title: string;
  progress: number;
}

const AssessmentNavItem: React.FC<AssessmentNavItemProps> = ({ eventKey, title, progress }) => {
  return (
    <Nav.Item className="mb-2 position-relative">
      <Nav.Link eventKey={eventKey}>
        {title}
        <ProgressBadge progress={progress} />
      </Nav.Link>
    </Nav.Item>
  );
};

export default AssessmentNavItem;