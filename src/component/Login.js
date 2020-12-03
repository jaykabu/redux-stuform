import React, {useEffect, useState} from "react";
import Axios from 'axios';
import {useFormik} from "formik";
import * as Yup from "yup";
import {useHistory} from 'react-router-dom';

const Login = () => {

    let history = useHistory();
    const [items, setItems] = useState([]);

    useEffect(() => {
        loadUsers();
    }, [])

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid Email Format")
                .required("Email Required"),
            password: Yup.string()
                .min(6, "minimum 6 characters")
                .required("password required")
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
            console.log('update values:--', values)
            pushToArray(items, values)

            function pushToArray(arr, obj) {
                const index = arr.findIndex((e) => e.email === obj.email);
                console.log("index", index)
                if (index !== -1) {
                    alert('user already exist')
                    console.log("user already exist")
                    history.push('/loginsucc')
                    if (arr[index].password === obj.password) {
                        alert('logging successfully')
                        console.log("logging successfully")
                    } else {
                        alert('logging failed')
                        console.log("logging failed")
                    }
                } else {
                    alert('New User Logging')
                    history.push({
                        pathname:'/add',
                        state:{email:values.email , password:values.password}
                    })
                    console.log("New User Logging")
                }
            }
        }
    })


    const loadUsers = async () => {
        const result = await Axios.get("http://localhost:3003/users");
        // console.log(result.data);
        setItems(result.data);
    }

    // const handleChange = (e) => {
    //     const {name, value} = e.target
    //
    //     setUser((oldData) => {
    //         return {
    //             ...oldData,
    //             [name]: value
    //         }
    //     })
    // }

    // const handleSubmit = () => {
    // const comList = {companyId: 5, name: "five", category: 'IT', start: 2006, end: 2010}
    // pushToArray(companyList, comList)
    //    function pushToArray(arr, obj) {
    //        const index = arr.findIndex((e) => e.companyId === obj.companyId);
    //        if (index === -1) {
    //            arr.push(obj);
    //        } else {
    //            arr[index] = obj;
    //        }
    //        console.log('update companyList:--', companyList)
    // }

    // }

    return (
        <>

            <div>
                <h1 className="text-center mb-4 mt-4">
                    User Login
                </h1>
                <hr/>
            </div>
            <div className={"container-fluid nav_bg"}>
                <div className={'row'}>
                    <div className={'col-10 mx-auto'}>

                        <form onSubmit={formik.handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp" autoComplete="off"
                                       name="email" value={formik.values.email} onChange={formik.handleChange}
                                />
                                {formik.errors.email && formik.touched.email && (
                                    <p className="err"> {formik.errors.email} </p>)}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"
                                       autoComplete="off"
                                       name="password" value={formik.values.password} onChange={formik.handleChange}
                                />
                                {formik.errors.password && formik.touched.password && (
                                    <p className="err"> {formik.errors.password} </p>)}
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
};

export default Login;