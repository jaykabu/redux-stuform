import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import StudentForm from "./component/StudentForm";
import Navbar from "./component/Navbar";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import User from "./User";
import Login from "./component/Login";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/studentform"} component={StudentForm} />
        <Route exact path={"/add"} component={AddUser} />
        <Route exact path={"/edit/:id"} component={EditUser} />
        <Route exact path={'/user/:id'} component={User} />
        <Route exact path={'/login'} component={Login} />
      </Switch>
    </>
  );
}

export default App;
