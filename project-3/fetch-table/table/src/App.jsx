
import { useEffect, useState } from 'react'
import Table from "./components/Table.jsx"
import './App.css'

function App() {

  const [info, setInfo] = useState([]);
  const [text, setText] = useState("");

  const handleInput = (e) => {
    const value = e.target.value;
    setText(value);
    console.log(value);
  }  

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const data = await fetch(url);
    const jsondata = await data.json();
    setInfo(jsondata);
  }

  const filteredData = info.filter((details) => (
    details.name.toLowerCase().includes(text.toLowerCase()) || details.username.toLowerCase().includes(text.toLowerCase()) || details.email.toLowerCase().includes(text.toLowerCase())
   )
  ) 
  
  return (
    <div>
      <label htmlFor='name'>Search: </label>
      <input type="text" id="name" name="name" onChange={handleInput}/>
      { info.length > 0 ? <Table recData = {filteredData}/> : "No result found"}
    </div>
  )
}


export default App
