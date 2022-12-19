import React, {  useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

export default function AddEmploye() {
    const [firstName , setFirstName]= useState('');
    const [lastName , setLastName]= useState('');
    const [emailid , setEmail_id]= useState('');
const navigate =useNavigate();
const {id} = useParams();


const saveEmployee = () => {
    // e.preventDefault();
const employee = {firstName ,lastName,emailid, id};
if (id) {
EmployeeService.update(employee)
.then(response => {
    console.log('Employee succesfully' , response.data);
    navigate("/", { replace: true });
    // navigate("/");
}).catch(error => {
    console.log('Something went',error); 
});
}else {
    EmployeeService.create(employee)
.then(response => {
console.log('Employee data' , response.data);
navigate("/", { replace: true });
// navigate("/");
}).catch(error => {
    console.log('Something went',error);
});
}
}
useEffect(() => {
if (id) {
    EmployeeService.get(id)
    .then(employee => {
setFirstName(employee.data.firstName);
setLastName(employee.data.lastName);
setEmail_id(employee.data.emailid);
    })
    .catch(error => {
        console.log('Somehting' , error);

    })
}
}, [])

  return (
    <div>
    <div className="container">
<div className="row">
<div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
<h2  className="text-center m-4">Register User</h2>


<form>   
<div className="form-group">
<input   type="text" 
                        className="form-control"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Enter name"
                        
/> 
</div>
<div className="form-group">
<input type="text"
  className="form-control"
  name="lasttName"
  value={lastName}
  onChange={(e) => setLastName(e.target.value)}
  placeholder="Enter LastName" required
/> 
</div>
<div className="form-group">
<input type="text"
className="form-control"
placeholder="Enter your UserName"
name="emailid" 
value={emailid} 
onChange={(e) => setEmail_id(e.target.value)}
/> 
</div>

<div >
                    <Link onClick={(e) => saveEmployee(e)} className="btn btn-primary">Save</Link>
                    <Link  to="/" className="btn btn-success ml-2">Cancel</Link>
                </div>
</form>  
</div>  </div>
</div> </div>
  )
}
