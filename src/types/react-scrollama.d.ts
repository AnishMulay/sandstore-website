declare module 'react-scrollama' {
  import * as React from 'react';

  export interface ScrollamaProps {
    onStepEnter?: (response: { data: any; direction: 'up' | 'down'; element: Element }) => void;
    onStepExit?: (response: { data: any; direction: 'up' | 'down'; element: Element }) => void;
    onStepProgress?: (response: { data: any; progress: number; element: Element }) => void;
    progress?: boolean;
    offset?: number;
    threshold?: number;
    children?: React.ReactNode;
  }
  export class Scrollama extends React.Component<ScrollamaProps> {}

  export interface StepProps {
    data?: any;
    children?: React.ReactNode;
  }
  export class Step extends React.Component<StepProps> {}
}