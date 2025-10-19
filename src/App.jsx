import './App.css'
import Counter from './Counter';

function App() {

  function handleClick() {
    alert("I am Clicked");
  }
  const handleClick2 = () => {
    alert("I am Clicked 2");
  }

  const add5 = (num) => {
    const newNum = num + 5;
    alert(`Your Number is ${newNum}`);
  }

  return (
    <> 
      <h1>Vite + React</h1>
      <Counter></Counter>
      {/* <button onClick="handleClick()">Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me</button>
      {/* <button onClick={() => alert("I am Clicked 3")}>Click Me</button>
      <button onClick={function handleClick4(){ alert("I am Clicked 4")}}>Click Me</button> */}

      {/* wrap by using arrow function */}
      <button onClick={() => add5(13)}>Add 5</button>
    </>
  )
}

export default App
