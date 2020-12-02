import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    schoolname: "",
    enrollmentno: "",
    address: "",
    phone: "",
    password:""
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };

  return (
    <>
      <div className="container">
        <Link className="btn btn-primary mt-3" to={"/studentform"}>
          back to studentform
        </Link>
        <h1 className="display-4"> User Id:{id} </h1>
        <hr />
        <ul className="list-group w-50">
          <li className="list-group-item"> Firstname : {user.firstname} </li>
          <li className="list-group-item"> Lastname : {user.lastname} </li>
          <li className="list-group-item"> Email : {user.email} </li>
          <li className="list-group-item"> Schoolname : {user.schoolname} </li>
          <li className="list-group-item"> Enrollment no : {user.enrollmentno} </li>
          <li className="list-group-item"> Address: {user.address} </li>
          <li className="list-group-item"> Phone no : {user.phone} </li>
          <li className="list-group-item"> Password : {user.password} </li>
        </ul>
      </div>
    </>
  );
};

export default User;
