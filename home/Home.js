
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

export default function Home() {

  const [employees, setEmployee] = useState([]);
  const [filterdata , setFilterdata] = useState ([]);
  const [query , setQuery] = useState('');

useEffect(() => {
init();
}, [])
const init = () => {
  EmployeeService.getAll()
  .then(response => {
  console.log('Printing the employee data',response.data);
  setEmployee(response.data);
  setFilterdata(response.data);
  })
  .catch(error => {
    console.log('Something went wrong', error);
  })
}
const handleDelete = id => {
  EmployeeService.remove(id)
  .then(response => {
    console.log('Employee deleted successfully',response.data);
 init();
  }).catch(error => {
    console.log('Someting went wrong' , error);
  });
}
  const handlesearch=(event)=>{
    const getSearch = event.target.value;
    setQuery(getSearch);
    // console.log(getSearch);
    if(getSearch.length > 0){
      const getSearch = event.target.value;
      const Searchdata = employees.filter((item)=> 
      item.firstName.toLowerCase().includes(getSearch));
      setEmployee(Searchdata);
    } else{
      setEmployee(filterdata);
    }
  }




  return (
    <div className="container">
    

  <h2>List Employe</h2>
  <Link className="btn btn-dark my-2 my-sm-0 "
   to="/addEmploye">Add Employe</Link>
   <div className=" col-md-3">
<div className=" col-md-3">
 <div className=" mb-3"> Search
  <input  type=" text" name ='firstName'  value={query}  
  onChange ={(e)=>handlesearch(e)}
   />
     </div>
</div>
</div>
       <div className="p-4"> 
      <table className="table border shadow ">
  <thead>
    <tr>
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
    employees.map(employee => (
<tr key={employee.id}>
    <td>{employee.firstName}</td>
    <td>{employee.lastName}</td>
    <td>{employee.emailid}</td> 
    <td>
    <Link className="btn btn-primary mx-2 "
     to={`/employee/edit/${employee.id}`}>Update</Link>
    <Link className="btn btn-outline-warning mx-2" to="view" >view</Link>
    <button className="btn btn-danger mx-2 " 
    onClick={() => {
      handleDelete(employee.id)}}
    >Delete</button>
        </td> 
    </tr>
        ))
         } 
  </tbody>
</table>
    </div>
      </div>
  )
}

