import React, { useState } from "react";
import { Link ,useNavigate } from "react-router-dom";

export default function Login() {
  const [Credntials, setCredntials] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate()

  const handlesubmit = async (e) => {
    // this is an synthatic event
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: Credntials.email,
        password: Credntials.password
      }),
    });

    const temp = await response.json();
    console.log(temp);

    if (!temp.success) {
      alert("Enter Valid Credentials");
    }
    
    if(temp.success){
      localStorage.setItem("authToken",temp.authToken)
      console.log(localStorage.getItem('authToken'))
      navigate("/");
    }
  };

  const onchange = (event) => {
    setCredntials({ ...Credntials, [event.target.name]: event.target.value });
  };
  return (
    <div>
<div className="container">
<form onSubmit={handlesubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' value={Credntials.email} onChange={onchange} aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' value={Credntials.password} onChange={onchange}/>
  </div>
  {/* <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div> */}
  <button type="submit" className="m-3 btn btn-success">Submit</button>
  <Link to="/CreateUser"className="btn btn-danger m-3">New User</Link>
</form>
</div>
    </div>
  )
}
