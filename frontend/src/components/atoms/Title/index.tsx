import React from 'react';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const H1: React.FC<IProps> = ({ children, className }) => {
  return (
    <div className={className}>
      <h1>{children}</h1>
    </div>
  );
};

const H2: React.FC<IProps> = ({ children, className }) => {
  return (
    <div className={className}>
      <h2>{children}</h2>
    </div>
  );
};

const H3: React.FC<IProps> = ({ children, className }) => {
  return (
    <div className={className}>
      <h3>{children}</h3>
    </div>
  );
};

const H4: React.FC<IProps> = ({ children, className }) => {
  return (
    <div className={className}>
      <h4>{children}</h4>
    </div>
  );
};

export default {
  H1,
  H2,
  H3,
  H4,
};
