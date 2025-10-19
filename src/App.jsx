import { Suspense } from 'react';
import './App.css'
import Batsman from './Batsman';
import Counter from './Counter';
import Users from './Users';
import Frnds from './Frnds';
import Posts from './Posts';

// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users") 
//   .then(res => res.json())

// const fetchFrnds = fetch("https://jsonplaceholder.typicode.com/users")
//   .then(res => res.json())

// const fetchFrnds = async() => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts")
//   return res.json()
// }

const fetchPosts = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  return res.json()
}

function App() {

  // const frndsPromise = fetchFrnds();
  const postsPromise = fetchPosts();

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

      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers = {fetchUsers}></Users>
      </Suspense>

      <Suspense fallback={<h3>Dhoirjo Dhor...</h3>}>
        <Frnds fetchFrnds = {fetchFrnds}></Frnds>
      {/* </Suspense> */}
        {/* <Frnds frndsPromise = {frndsPromise}></Frnds> */}

      <Suspense fallback={<h3>Loading...</h3>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense>

      <Counter></Counter>
      <Batsman></Batsman>



<br /><br />
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
