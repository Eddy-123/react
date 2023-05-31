import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState([
    {
      name: "Eddy",
      role: "Developper",
      img: "https://picsum.photos/200/300"
    },{
      name: "Abby",
      role: "Developper",
      img: "https://picsum.photos/200/300"
    },{
      name: "Adam",
      role: "Developper",
      img: "https://picsum.photos/200/300"
    },{
      name: "Caleb",
      role: "Developper",
      img: "https://picsum.photos/200/300"
    },{
      name: "Olivia",
      role: "Developper",
      img: "https://picsum.photos/200/300"
    },{
      name: "Eden",
      role: "Developper",
      img: "https://picsum.photos/200/300"
    },
  ]);
  const showEmployees = true;
  return (
    <div className="App">
    { showEmployees ? (
      <>
        <input type="text" onChange={(e) => {
          setRole(e.target.value);
        }} />
        <div className='flex flex-wrap justify-center'>
          {employees.map((employee) => {
            return (
              <Employee key={uuidv4()} name={employee.name} role={employee.role} img={employee.img} />
            );
          })}
        </div>
      </>
      ) : (
        <p>You cannot see employees</p>
      ) }
    </div>
  );
}

export default App;
