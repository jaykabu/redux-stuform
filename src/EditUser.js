import Axios from "axios";
import React, { useState , useEffect } from "react";
import { useHistory , useParams } from "react-router-dom";


const EditUser = () => {

    let history = useHistory();

    const {id} = useParams();
    // alert(id)

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
        // console.log(e);
        const {name , value} = event.target;

        setUser((oldData)=>{
            return{
                ...oldData,
                [name]:value
            }
        })
    }

    useEffect(()=>{
        loadUser()
    }, []);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        await Axios.put(`http://localhost:3003/users/${id}` , user)
        history.push('/studentform');
    }

    const loadUser = async () =>{
        const result = await Axios.get(`http://localhost:3003/users/${id}`);
       setUser(result.data);
    }

  return (
    <>
    
      <hr/>
      <div>
          <h1 className="justify-content-center d-flex mt-3 ">
              Edit A User
          </h1>
      </div>
      <hr/>
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
                <button type="submit" className="btn btn-warning btn-block">
                  Update User
                </button>
              </form>
            </div>
          </div>
        </div>
    
    </>
  );
};

export default EditUser;
