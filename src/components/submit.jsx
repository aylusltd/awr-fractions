import React from 'react';
import './submit.css';

function Submit(props) {
  return (
    <div className="SubmitButton">
      <button onClick={props.clickFunc}> Check </button>
    </div>
  );
}

export default Submit;
