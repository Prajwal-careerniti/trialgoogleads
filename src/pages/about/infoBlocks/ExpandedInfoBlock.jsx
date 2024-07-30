import React from 'react';
import './ExpandedInfoBlock.css';

const ExpandedInfoBlock = ({ title, content }) => {
  return (
    <div className="expanded-info-block">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default ExpandedInfoBlock;
