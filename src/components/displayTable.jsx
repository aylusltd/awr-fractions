import React from 'react';
import './displayTable.css';


function DisplayTable(props) {

  const myVal = props.mixed + (props.numerator/props.denominator);
  let MyTable = [];
  for(let i = 0; i < props.denominator; i++){
  	MyTable.push([]);
  	for(let j=0; j < Math.ceil(myVal); j++){
  		let realRow = props.denominator - i;
  		const represents = j + (realRow/props.denominator);
  		const fillVal = represents<=myVal?1:0;
  		MyTable[i].push(fillVal);
  	}
  }
  MyTable = MyTable.map((row, row_id) => {
  	const myRow = row.map((cell, cell_id) => {
  		return (<td className={cell===1?'full':'empty'} key={cell_id}/>);
  	});
  	return (<tr key={row_id}>{myRow}</tr>
  	);
  });

  return (<table className='DisplayTable'><tbody>{MyTable}</tbody></table>);
}

export default DisplayTable;