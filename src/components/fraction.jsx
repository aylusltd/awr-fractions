import React from 'react';
import './fraction.css';
import DisplayTable from './displayTable.jsx';

function Fraction(props) {
  return (
    <div className="Fraction">
      <div>{props.numerator}</div>
      <div className="bar"/>
      <div>{props.denominator}</div>
      <DisplayTable
        numerator={props.numerator}
        denominator={props.denominator}
        mixed={0}
      />
    </div>

  );
}

export default Fraction;
