import { useState } from 'react';
import './App.css';

function MyButton(){

  const [count , setCount]= useState(0);
  function ClickButton()
  {
    setCount(count + 1);
  }
  return <button onClick={ClickButton}>You click me {count}</button>;

}





function App() {
  
return <MyButton/>
  
}

export default App;
