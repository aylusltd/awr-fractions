import React from 'react';
import DisplayTable from './displayTable.jsx';

import './answer.css';


class Answer extends React.Component{
	constructor(props) {
	  super(props);
	  this.bindState = function(e){
	  	// const updateLocal = props.bindState.bind(this);
	  	const v = e.target.value;
	  	// updateLocal(e,v);
	  	props.bindState(e,v);
	  	// // e.target.value = v;
	  };
	}
	render(){
	  return (
	    <div className="Answer">
	      <div>
	        <input
	        	type="number"
	        	value={this.props.mixed}
	        	onChange={this.bindState}
	        	className="mixed"
	        />
	      </div>
	      <div>
	      	<input 
		      	type="number"
		      	value={this.props.numerator}
		      	onChange={this.bindState}
		      	className="numerator"
		  	  />
		  	  <div className="bar" />
		  	  <input
		  	    type="number"
		      	value={this.props.denominator}
		  	    onChange={this.bindState}
		      	className="denominator"
		      />
	      </div>
	      <DisplayTable
	        numerator={this.props.numerator}
	        denominator={this.props.denominator}
	        mixed={this.props.mixed}
	      />
	    </div>
	  );
    }
}

export default Answer;
