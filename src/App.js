
import './App.css';

function App() {

  const data = [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    }]
  return (

    <>
      <center>
        <button>Task Status</button>
        <table><thead>
          <th>users</th>
          <th>id</th>
          <th>title</th>
          <th>completed</th></thead>
          <tbody>
            {data.map(ele => (

              <tr>
                <td>{ele.userId}</td>
                <td>{ele.id}</td>
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
