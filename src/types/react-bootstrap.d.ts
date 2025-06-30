import { ComponentType } from 'react';
import { ButtonProps } from 'react-bootstrap';

declare module 'react-bootstrap' {
  interface ButtonProps {
    as?: any;
  }
}