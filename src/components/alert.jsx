import React from 'react';

import './alert.css';


class Alert extends React.Component{
	render(){
	  return (
	    <div 
	      className="Alert-modal" 
	      style={{display : this.props.active?'block':'none'}}
	    >
	      <div 
	        className="Alert-main" 
	      	style={{backgroundColor: this.props.backgroundColor}}
	      >
	      	<p className="Alert-title">{this.props.title}</p>
	      	<p className="Alert-message">{this.props.message}</p>
	        <button 
	        	className="Alert-cancel"
	        	onClick={this.props.cancelFunc}
	        	style={{display:this.props.showCancel?'inline-block':'none'}}
        	/>
	        <button 
	        	className="Alert-ok"
	        	onClick={this.props.okFunc}
	        	style={{display:this.props.showOk?'inline-block':'none'}}
        	/>
          </div>
	    </div>
	  );
    }
}

export default Alert;
