import React, { Component, useState } from 'react';
import Validation from './Validation/Validation';
import Char from './Char/Char';
const App = (props) => {
 
    const [valueInput, setValueInput] = useState('');

    const handleValueInput = (e) => {
      setValueInput(e.target.value);
    };
    
  
    const deleteChar = (index) => {
      const valueInputArr = valueInput.split('');
      
      
       valueInputArr.splice(index,1);
       
       
       const updateText = valueInputArr.join('');
       
       setValueInput(updateText);
       console.log(valueInput);
      
    }

    const charList = valueInput.split('').map((value, index) => {
      return <Char valueInput={value} key={index} id={index} click={deleteChar}/>
   });

   
    return (
      <div>
         <input onChange={handleValueInput} />
         <h1>{valueInput}</h1>
         <Validation valueInputLength={valueInput.length}/>
         {charList}
      </div>
     
    );
 
}

export default App;
