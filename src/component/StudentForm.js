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
        setUsers(result.data.reverse());
    }

    const deleteUser = async (id)=>{
        await axios.delete(`http://localhost:3003/users/${id}`)
        loadUsers();
    } 

    return(
        <>
        <hr/>
        <div>
            <h1 className =" justify-content-center d-flex mt-3 ">StudentFrom</h1>
        </div>
        <hr/>
        <table class="table border shadow mt-4">
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
      <th scope="col">Action</th>

    </tr>
  </thead>
  <tbody>
    {
        users.map((user , index)=>(
            <tr>
            <th scope="row"> {index + 1} </th>
            <th> {user.firstname} </th>
            <th> {user.lastname} </th>
            <th> {user.email} </th>
            <th> {user.schoolname} </th>
            <th> {user.enrollmentno} </th>
            <th> {user.address} </th>
            <th> {user.phone} </th>
            <td>
                <Link className="btn btn-primary mr-2" to={`user/${user.id}`}>View</Link>
                <Link className="btn btn-outline-primary mr-2" to={`edit/${user.id}`}>Edit</Link>
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