
import './App.css';
import axios from "axios"
import { useState, useEffect } from "react";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
        setData(data);

      } catch (error) {
        console.log(error)
      }
    }
    getData();
  }, []);
  const extractAddress = (obj) => {
    let arr = Object.values(obj);
    let elems = [];
    for (let i = 0; i < arr.length - 1; i++) {
      elems.push(<p key={i}>{arr[i]}</p>);
    }
    return elems;
  }
  return (

    <><center>

      <table><thead>
        <tr>
          <th rowSpan={2}>id</th>
          <th rowSpan={2}>Name</th>
          <th rowSpan={2}>Username</th>
          <th rowSpan={2}>Email</th>
          <th rowSpan={2}>Address</th>
          <th colSpan={2}>Geo</th>
          <th rowSpan={2}>Phone</th>
          <th rowSpan={2}>Website</th>
          <th rowSpan={2}>Company</th>
        </tr>
        <tr>
          <th>Lat</th>
          <th>Lon</th>

        </tr>
      </thead>
        <tbody>
          {data.map((ele, index) =>
          (
            <tr key={index}>
              <td>{ele.id}</td>
              <td>{ele.name}</td>
              <td>{ele.username}</td>
              <td>{ele.email}</td>
              <td>{extractAddress(ele.address)}</td>
              <td>{ele.address.geo.lat}</td>
              <td>{ele.address.geo.lng}</td>
              <td>{ele.phone}</td>
              <td><a href={ele.website}>{ele.website}</a></td>
              <td>{Object.values(ele.company).map((ele, i) => (<p key={i}> {ele} </p>))}</td>
            </tr>

          ))}
        </tbody>

      </table>

    </center >
    </>
  )
}
export default App;
