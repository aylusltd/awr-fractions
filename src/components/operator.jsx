import React from 'react';
import './operator.css';


function Operator(props) {
	let str = '';

	switch(props.type){
		case 'plus':
			str='+';
			break;
		case 'minus':
			str='-';
			break;
		case 'equals':
			str='=';
			break;
		default:
			console.log(props.operator);
			str='';
	}
	
  return (
    <div className="Operator">
      {str}
    </div>
  );
}

export default Operator;
