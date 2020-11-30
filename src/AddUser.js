import Axios from "axios";
import React, { useState } from "react";
import {useHistory} from "react-router-dom";


const AddUser = () => {

    let history = useHistory();

    const[user , setUser] = useState({
        firstname:'',
        lastname:'',
        email:'',
        schoolname:"",
        enrollmentno:"",
        address:'',
        phone:''

    })

    const handleChange = (event)=>{
        const {name , value} = event.target;

        setUser((oldData)=>{
            return{
                ...oldData,
                [name]:value
            }
        })
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        await Axios.post("http://localhost:3003/users" , user)
        history.push('/studentform');
    }

  return (
    <>
      <div>
      <div>
          <h1 className="justify-content-center d-flex mt-3 ">
              Add User
          </h1>
      </div>
        <div className={"container-fluid nav_bg mt-5"}>
          <div className={"row"}>
            <div className={"col-10 mx-auto"}>
              <form onSubmit={e => handleSubmit(e)}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="FirstName"
                    name="firstname"
                    value={user.firstname}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="LastName"
                    name="lastname"
                    value={user.lastname}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="SchoolName"
                    name="schoolname"
                    value={user.schoolname}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enrollment No."
                    name="enrollmentno"
                    value={user.enrollmentno}
                    onChange={handleChange}
                  />
                </div>
            
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="Address"
                    placeholder="Address"
                    name="address"
                    value={user.address}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Phone No."
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUser;
