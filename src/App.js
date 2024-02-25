
import './App.css';
import axios from "axios"
import { useState } from "react";

function App() {
  const getData = async () => {

    try {

      const res = await axios.get("https://jsonplaceholder.typicode.com/todos"
      );
      setData(res.data)

    }
    catch (error) {
      console.log(console.error());
    };
  }


  const [data, setData] = useState([]);

  return (

    <>
      <center>
        <button onClick={getData}>Load Data</button>
        <table><thead>
          <tr>
            <th >id</th>
            <th>user id</th>
            <th>title</th>
            <th>task status</th></tr>
        </thead>
          <tbody>
            {data.map(ele => (

              <tr key={ele.id}>

                <td>{ele.id}</td>
                <td>{ele.userId}</td>
                <td>{ele.title}</td>
                <td>{ele.completed ? "true" : "false"}</td>
              </tr>
            ))}
          </tbody>
        </table></center>
    </>
  )
}
export default App
