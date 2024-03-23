
import './App.css';
import axios, { getAdapter } from "axios"
import { useState, useEffect, createElement } from "react";
function App() {
  var x = new Date();
  console.log(x)

  const [splate, getSplate] = useState(() => {
    console.log("hello")
  })
  useEffect(() => {

    const getData = async () => {


      try {

        const res = await axios.get("https://jsonplaceholder.typicode.com/todos"
        );
        setData(res.data)

      }
      catch (error) {
        console.log(error);
      };
    }
    getData();
  }, [])




  const [data, setData] = useState([]);
  return (

    <><center>
      <button >filter todos</button>
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
              <td>{ele.completed ? "false" : " "}</td>
            </tr>
          ))}
        </tbody>
      </table></center>
    </>
  )
}
export default App
