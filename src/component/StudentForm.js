import React, { useState , useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const StudentForm = ()=>{

    const[users , setUsers] = useState([]);

    useEffect(() => {
       loadUsers();
    }, [])


    const loadUsers = async ()=>{
        const result = await axios.get("http://localhost:3003/users");
        setUsers(result.data);
    }

    const deleteUser = async (id)=>{
        await axios.delete(`http://localhost:3003/users/${id}`)
        loadUsers();
    } 
// console.log("usersdjs",users)
    return(
        <>
        <hr/>
        <div>
            <h1 className =" justify-content-center d-flex mt-3 ">StudentFrom</h1>
        </div>
        <hr/>
        <table className="table border shadow mt-4 table-primary">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>
      <th scope="col">Email</th>
      <th scope="col">SchoolName</th>
      <th scope="col">EnrollmentNo</th>
      <th scope="col">Address</th>
      <th scope="col">MobileNo</th>
      <th scope="col">Password</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  <tbody className="table-secondary">
    {
        users.map((user , index)=>(
            <tr key={index}>
            <th scope="row"> {user.id} </th>
            <th> {user.firstname} </th>
            <th> {user.lastname} </th>
            <th> {user.email} </th>
            <th> {user.schoolname} </th>
            <th> {user.enrollmentno} </th>
            <th> {user.address} </th>
            <th> {user.phone} </th>
            <th> {user.password} </th>
            <td>
                <Link className="btn btn-primary mr-2" to={`user/${user.id}`}> View </Link>
                <Link className="btn btn-outline-primary mr-2" to={`edit/${user.id}`}> Edit </Link>
                <Link className="btn btn-outline-danger" onClick={()=>deleteUser(user.id)}> Delete </Link>
            </td>
            </tr>
        ))
    }
  </tbody>
</table>
        </>
    )
};

export default StudentForm;