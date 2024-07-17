import { useEffect, useState } from "react";

const Table = (props) => {
  const {recData} = props;
  console.log(recData);

  const [refresheddata, setRefresheddata] = useState(recData);

  useEffect(() => {
    setRefresheddata(recData);
  }, [recData])

  const handleDelete = (id) => {
    const dataAfterDelete = refresheddata.filter((data) => data.id !== id);
    setRefresheddata(dataAfterDelete);
  };
  
  return (
    <div>
            <table className='user_table'>
              <thead>
               <tr>
                <th>Name</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Delete Entry</th>
               </tr> 
              </thead>
              {
                refresheddata.map((details) => (
                  <tbody key = {details.id}>
                    <tr>
                      <td>{details.name}</td>
                      <td>{details.username}</td>
                      <td>{details.email}</td>
                      <td>
                        <button onClick={() => handleDelete(details.id)}>Delete</button>
                      </td>       
                    </tr>
                  </tbody>
                  ))
              }            
            </table>
          </div>
  )
}

export default Table