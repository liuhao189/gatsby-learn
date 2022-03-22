import React from 'react';

const WrapRoot: React.FC = ({ element }) => {
  return (
    <div>
      <h1>Root wrap {new Date().getTime()}</h1>
      {element}
    </div>
  )
}

export default WrapRoot;