

const Table = (props) => {
  const {recData} = props;
  console.log(recData);
  return (
    <div>
      <table>
        
        <thead>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
        </thead>

        <tbody>
          {recData.map((details) => (
            <tr key = {details.id}>
              <td>{details.name}</td>
              <td>{details.username}</td>
              <td>{details.email}</td>
            </tr>   
          ))} 
        </tbody>

      </table>
      
    </div>
  )
}

export default Table