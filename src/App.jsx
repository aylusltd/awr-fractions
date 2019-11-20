import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Fraction from './components/fraction.jsx';
import Answer from './components/answer.jsx';
import Submit from './components/submit.jsx';
import Operator from './components/operator.jsx';
import Alert from './components/alert.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    const f1 = Math.floor(Math.random()*10) + 1;
    const f2 = Math.floor(Math.random()*10) + 1;
    const d1 = Math.max(Math.floor(Math.random()*5),2);
    const d2 = Math.max(Math.floor(Math.random()*5),1);
    const operator = Math.random()>0.5?'plus':'minus';

    if(f1/d1 < f2/d2 && operator === 'minus'){
      this.state = {
        f1: f2,
        f2: f1,
        d1: d2,
        d2: d1,
        operator: operator
      };
    } else {
      this.state = {
        f1: f1,
        f2: f2,
        d1: d1,
        d2: d2,
        operator: operator
      };
    }
    this.state.numerator=0;
    this.state.numerator_display='';
    this.state.denominator=1;
    this.state.denominator_display='';
    this.state.mixed=0;
    this.state.mixed_display='';
    this.state.alertActive = false;
    this.state.alertColor = "#FF0000";
    this.state.alertMessage = "Hello World";
    this.handleInput = this.handleInput.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
  }
  componentDidMount(){
    
  }
  handleInput(e, v){
    const list = Array.from(e.target.classList);
    if(list.includes('numerator')){
      this.setState({numerator: +v});
      this.setState({numerator_display: v});
    } else if (list.includes('denominator')){
      this.setState({denominator: +v});
      this.setState({denominator_display: v});
    } else if (list.includes('mixed')){
      this.setState({mixed_display: v});
      this.setState({mixed: +v});
    } else {
      console.log('missed');
      console.log(e);
    }
  }
  checkAnswer(e){
    const a = this.state.f1/this.state.d1;
    const b = this.state.f2/this.state.d2;
    let target = 0;
    switch(this.state.operator){
      case "plus":
        target = a + b;
        break;
      case "minus":
        target = a - b;
        break;
      default:
        console.error('invalid operator', this.state.operator);
    }
    const eta = 0.01;
    const val = +this.state.mixed + (this.state.numerator/this.state.denominator);
    function reset(){
      const f1 = Math.floor(Math.random()*12);
      const f2 = Math.floor(Math.random()*12);
      const d1 = Math.max(Math.floor(Math.random()*12),1);
      const d2 = Math.max(Math.floor(Math.random()*12),1);
      const operator = Math.random()>0.5?'plus':'minus';
      this.setState({
        numerator:0,
        numerator_display:'',
        denominator:1,
        denominator_display:'',
        mixed:0,
        mixed_display:'',
        alertActive: false
      })
      if(f1/d1 < f2/d2 && operator === 'minus'){
        this.setState({
          f1: f2,
          f2: f1,
          d1: d2,
          d2: d1,
          operator: operator
        });
      } else {
        this.setState({
          f1: f1,
          f2: f2,
          d1: d1,
          d2: d2,
          operator: operator
        });
      }
    }
    const boundReset = reset.bind(this);
    function clearAlert(){
      this.setState({alertActive: false});
    }
    const boundClear = clearAlert.bind(this);
    if(Math.abs(val - target) < eta){
      console.log('Acceptable');
      this.setState({
        alertTitle: "Correct!",
        alertMessage: "Click Ok to continue, or Cancel to see your answer",
        alertColor: "#2d9082",
        alertActive: true,
        alertShowOk: true,
        alertOkFunction: boundReset,
        alertCancelFunction: boundClear
      })
      
    } else {
      console.log('Unacceptable');
      console.log('Received:', val, "expected:", target);
      this.setState({
        alertTitle: "Try Again!",
        alertMessage: "Click Cancel to edit your answer and try again",
        alertColor: "#bd4242",
        alertActive: true,
        alertShowOk: false,
        alertOkFunction: boundClear,
        alertCancelFunction: boundClear
      })
    }
  }

  render() {
    return (
      <div className="App">
          <div className="App-header">
            Welcome to Fractions!
          </div>
          <Fraction 
            numerator={this.state.f1}
            denominator={this.state.d1}
          />
          <Operator 
            type={this.state.operator}
          />
          <Fraction 
            numerator={this.state.f2}
            denominator={this.state.d2}
          />
          <Operator 
            type="equals"
          />
          <Answer 
            bindState={this.handleInput}
            mixed={this.state.mixed_display}
            numerator={this.state.numerator_display}
            denominator={this.state.denominator_display}
          />
          <Submit
            clickFunc={this.checkAnswer}
          />
          <Alert
            active={this.state.alertActive}
            backgroundColor={this.state.alertColor}
            message={this.state.alertMessage}
            title={this.state.alertTitle}
            showOk={this.state.alertShowOk}
            showCancel={true}
            okFunc={this.state.alertOkFunction}
            cancelFunc={this.state.alertCancelFunction}
          />
      </div>
    );
  }
}

export default App;
