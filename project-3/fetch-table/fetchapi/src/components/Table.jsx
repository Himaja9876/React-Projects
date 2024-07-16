import { useState } from "react";

const Table = (props) => {
  const {recData} = props;
  console.log(recData);

  const [refresheddata, setRefresheddata] = useState(recData);

  const handleDelete = () => {
    const dataDelete= refresheddata.filter((deleteddata) => (
      deleteddata.name === "" && deleteddata.username === "" && deleteddata.email === ""  ));
  
    setRefresheddata(dataDelete);  
  }
  
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
                        <button onClick={handleDelete}>Delete</button>
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