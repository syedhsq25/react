
import './App.css';
import axios from "axios"
import { useState, useEffect } from "react";
function App() {
  useEffect(() => {
    const getData = async () => {

      try {

        const res = await axios.get("https://jsonplaceholder.typicode.com/todos"
        );
        setData(res.data);
        setTotalData(res.data);

      }
      catch (error) {
        console.log(error);
      };
    }
    getData();
  }, [])

  const [completed, setCompleted] = useState(true);
  const [totalData, setTotalData] = useState([]);
  const [data, setData] = useState([]);
  const filterTodos = () => {
    if (completed) {
      const filteredData = totalData.filter(ele => ele.completed);
      setData(filteredData);

    } else {
      const filteredData = totalData.filter(ele => !ele.completed);
      setData(filteredData);

    }
    setCompleted(!completed);

  }


  return (

    <>
      <center>
        <button onClick={filterTodos}>Load Data</button>
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
                <td>{ele.completed ? "false" : "true "}</td>
              </tr>
            ))}
          </tbody>
        </table></center>
    </>
  )
}
export default App
