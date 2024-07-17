import { useEffect, useState } from "react";


const Table = (props) => {
  const {recData} = props;

  const [refreshedData, setRefreshedData] = useState(recData);

  useEffect(() => {
    setRefreshedData(recData);
  }, [recData])

  console.log(refreshedData);

  const handleClick = (id) => {
    const withdeletedData = refreshedData.filter((data) => (data.id !== id));

    setRefreshedData(withdeletedData);
  }

  return (
    <div>
      <table>
        
        <thead>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
        </thead>

        <tbody>
          {refreshedData.map((details) => (
            <tr key = {details.id}>
              <td>{details.name}</td>
              <td>{details.username}</td>
              <td>{details.email}</td>
              <td>
                <button onClick={() => handleClick(details.id)}>
                  Delete
                </button>
              </td>
            </tr>   
          ))} 
        </tbody>

      </table>
      
    </div>
  )
}

export default Table