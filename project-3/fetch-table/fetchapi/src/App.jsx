import { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table';

function App() {

  const [data, setData] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    try {
      const data = await fetch(url);
      if (!data.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await data.json();
      setData(json);
    } catch (error) {
      console.error('There has been a problem with the fetch operation:', error);
    }
  }

  const handleInput = (e) => {
    const value = e.target.value;
    console.log(value);
    setText(value);
  }

  const filteredData = data.filter((info) => (
    info.name.toLowerCase().includes(text.toLowerCase()) || 
    info.username.toLowerCase().includes(text.toLowerCase()) || 
    info.email.toLowerCase().includes(text.toLowerCase())
  ));

  
  return (
    <div>
      <label htmlFor="name">Search: </label>
      <input type='text' id="name" value = {text} onChange={handleInput}/>
      {console.log(filteredData)}
      {
        filteredData.length > 0 ? <Table recData = {filteredData} /> : <p>No results found</p>
      }

    </div>
  )
}

export default App
