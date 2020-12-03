import React from "react";
import Axios from "axios";
import {useHistory} from "react-router-dom";
import {useFormik} from "formik";
import * as yup from "yup";

const AddUser = (props) => {
    let history = useHistory();
    // console.log(props)
    // const [user, setUser] = useState({
    //     firstname: '',
    //     lastname: '',
    //     email: '',
    //     schoolname: "",
    //     enrollmentno: "",
    //     address: '',
    //     phone: ''
    // });

    const formik = useFormik({
        initialValues: {
            id:props.history.location.state.id ? props.history.location.state.id : '',
            firstname: '',
            lastname: '',
            email: props.history.location.state.email  ? props.history.location.state.email : '',
            schoolname: "",
            enrollmentno: "",
            address: '',
            phone: '',
            password:props.history.location.state.password ? props.history.location.state.password : "",
        },
        validationSchema: yup.object({
            firstname: yup.string()
                .min(2, "Minimum 4 character")
                .max(50, "Maximum 50 character")
                .required("firstName required!"),
            lastname: yup.string()
                .min(2, "Minimum 4 character")
                .max(50, "Maximum 50 character")
                .required("lastName required!"),
            email: yup.string()
                .email("Invalid email format")
                .required("email required!"),
            schoolname: yup.string()
                .min(2, "Minimum 4 character")
                .max(50, "Maximum 50 character")
                .required("school name required!"),
            enrollmentno: yup.string()
                .min(4, "Minimum 4 characters")
                .max(8 , "Maximum 8 characters")
                .required("enrollment number required!"),
            address: yup.string()
                .min(2, "Minimum 4 character")
                .max(200, "Maximum 200 character")
                .required("address required!"),
            phone: yup.string()
                .min(10)
                .required('a phone number is required'),
            password: yup.string()
                .required("Please provide a valid password"),
        }),
        onSubmit: async (values) => {
            await Axios.post("http://localhost:3003/users", formik.values)
            history.push('/studentform');
            alert(JSON.stringify(values, null, 2))
        }
    });

    // const handleChange = (event) => {
    //     const {name, value} = event.target;
    //
    //     formik.values((oldData) => {
    //         return {
    //             ...oldData,
    //             [name]: value
    //         }
    //     })
    // }
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     await Axios.post("http://localhost:3003/users", formik.values)
    //     history.push('/studentform');
    // }
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
                            <form onSubmit={(e) => formik.handleSubmit(e)}>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="FirstName"
                                        name="firstname"
                                        value={formik.values.firstname}
                                        onChange={formik.handleChange}
                                        autoComplete="off"
                                    />
                                    {formik.errors.firstname && formik.touched.firstname &&
                                    (<p className="err">{formik.errors.firstname}</p>)}
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="LastName"
                                        name="lastname"
                                        value={formik.values.lastname}
                                        onChange={formik.handleChange}
                                        autoComplete="off"
                                    />
                                    {formik.errors.lastname && formik.touched.lastname &&
                                    (<p className="err">{formik.errors.lastname}</p>)}
                                </div>

                                <div className="mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Email"
                                        name="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        autoComplete="off"
                                    />
                                    {formik.errors.email && formik.touched.email && (
                                        <p className="err">{formik.errors.email}</p>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="SchoolName"
                                        name="schoolname"
                                        value={formik.values.schoolname}
                                        onChange={formik.handleChange}
                                        autoComplete="off"
                                    />
                                    {formik.errors.schoolname && formik.touched.schoolname && (
                                        <p className="err"> {formik.errors.schoolname}</p>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Enrollment No."
                                        name="enrollmentno"
                                        value={formik.values.enrollmentno}
                                        onChange={formik.handleChange}
                                        autoComplete="off"
                                    />
                                    {formik.errors.enrollmentno && formik.touched.enrollmentno && (
                                        <p className="err">{formik.errors.enrollmentno}</p>
                                    )}
                                </div>

                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Address"
                                        name="address"
                                        value={formik.values.address}
                                        onChange={formik.handleChange}
                                        autoComplete="off"
                                    />
                                    {formik.errors.address && formik.touched.address && (
                                        <p className="err"> {formik.errors.address}</p>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Phone No."
                                        name="phone"
                                        value={formik.values.phone}
                                        onChange={formik.handleChange}
                                        autoComplete="off"
                                    />
                                    {formik.errors.phone && formik.touched.phone && (
                                        <p className="err"> {formik.errors.phone}</p>
                                    )}
                                </div>

                                <div className="mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Password"
                                        name="password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        autoComplete="off"
                                    />
                                    {formik.errors.password && formik.touched.password &&
                                    (<p className="err">{formik.errors.password}</p>)}
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
    )
};

export default AddUser;
