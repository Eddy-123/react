import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddEmployee from "./components/AddEmployee";

function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Eddy",
      role: "Developper",
      img: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      name: "Abby",
      role: "Developper",
      img: "https://picsum.photos/200/300",
    },
    {
      id: 3,
      name: "Adam",
      role: "Developper",
      img: "https://picsum.photos/200/300",
    },
    {
      id: 4,
      name: "Caleb",
      role: "Developper",
      img: "https://picsum.photos/200/300",
    },
    {
      id: 5,
      name: "Olivia",
      role: "Developper",
      img: "https://picsum.photos/200/300",
    },
    {
      id: 6,
      name: "Eden",
      role: "Developper",
      img: "https://picsum.photos/200/300",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id) {
        employee.name = newName;
        employee.role = newRole;
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function addEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  }

  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  updateEmployee={updateEmployee}
                />
              );
            })}
          </div>
          <AddEmployee addEmployee={addEmployee} />
        </>
      ) : (
        <p>You cannot see employees</p>
      )}
    </div>
  );
}

export default App;
