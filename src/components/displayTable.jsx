import React from 'react';
import './displayTable.css';


function DisplayTable(props) {
  const my_denominator = Math.max(props.denominator, 1)
  const myVal = props.mixed + (props.numerator/my_denominator);
  let MyTable = [];
  for(let i = 0; i < my_denominator; i++){
  	MyTable.push([]);
    const displayVal = Math.max(myVal,1);
    console.log(displayVal);
  	for(let j=0; j < Math.ceil(displayVal); j++){
      console.log()
  		const realRow = my_denominator - i;
  		const represents = j + (realRow/my_denominator);
  		const fillVal = represents<=myVal?1:0;
  		MyTable[i].push(fillVal);
  	}
  }
  console.log("MyTable");
  console.log(MyTable);

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