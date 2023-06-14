import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [Credntials, setCredntials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: ""
  });

  const handlesubmit = async (e) => {
    // this is an synthatic event
    e.preventDefault();
    console.log(JSON.stringify({
      name: Credntials.name,
      email: Credntials.email,
      password: Credntials.password,
      location: Credntials.geolocation
    }))
    const response = await fetch("http://localhost:5000/api/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: Credntials.name,
        email: Credntials.email,
        password: Credntials.password,
        location: Credntials.geolocation
      }),
    });

    const temp = await response.json();
    console.log(temp);

    if (!temp.success) {
      alert("Enter Valid Credentials");
    }
  };

  const onchange = (event) => {
    setCredntials({ ...Credntials, [event.target.name]: event.target.value });
  };

  return (
    <>
      <form className="h-100 bg-dark" onSubmit={handlesubmit}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block p-md-5">
                    <img
                      src="https://source.unsplash.com/random/500x630/?paneer"
                      alt="food"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-white">
                      <h3 className="mb-5 text-uppercase">
                        Hunger registration
                      </h3>

                      <div className="row">
                        <div className="form-outline mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="form3Example1m"
                              className="form-control form-control-lg"
                              name="name"
                              value={Credntials.name}
                              onChange={onchange}
                            />
                            <label className="form-label" htmlFor="form3Example1m">
                              Name
                            </label>
                          </div>
                        </div>
                        {/* <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1n" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example1n">Last name</label>
                    </div>
                  </div> */}
                      </div>

                      {/* <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1m1" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example1m1">Mother's name</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1n1" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example1n1">Father's name</label>
                    </div>
                  </div>
                </div> */}

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example8"
                          className="form-control form-control-lg"
                          name="geolocation"
                          value={Credntials.geolocation}
                          onChange={onchange}
                        />
                        <label className="form-label" htmlFor="form3Example8">
                          Address
                        </label>
                      </div>

                      <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                        <h6 className="mb-0 me-4">Gender: </h6>

                        <div className="form-check form-check-inline mb-0 me-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="femaleGender"
                            value="option1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="femaleGender"
                          >
                            Female
                          </label>
                        </div>

                        <div className="form-check form-check-inline mb-0 me-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="maleGender"
                            value="option2"
                          />
                          <label className="form-check-label" htmlFor="maleGender">
                            Male
                          </label>
                        </div>

                        <div className="form-check form-check-inline mb-0">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="otherGender"
                            value="option3"
                          />
                          <label className="form-check-label" htmlFor="otherGender">
                            Other
                          </label>
                        </div>
                      </div>

                      {/* <div className="row">
                  <div className="col-md-6 mb-4">

                    <select className="select">
                      <option value="1">State</option>
                      <option value="2">Option 1</option>
                      <option value="3">Option 2</option>
                      <option value="4">Option 3</option>
                    </select>

                  </div>
                  <div className="col-md-6 mb-4">

                    <select className="select">
                      <option value="1">City</option>
                      <option value="2">Option 1</option>
                      <option value="3">Option 2</option>
                      <option value="4">Option 3</option>
                    </select>

                  </div>
                </div> */}

                      {/* <div className="form-outline mb-4">
                  <input type="text" id="form3Example9" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form3Example9">DOB</label>
                </div> */}

                      {/* <div className="form-outline mb-4">
                  <input type="text" id="form3Example90" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form3Example90">Pincode</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example99" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form3Example99">Course</label>
                </div> */}

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example97"
                          className="form-control form-control-lg"
                          name="email"
                          value={Credntials.email}
                          onChange={onchange}
                        />
                        <label className="form-label" htmlFor="form3Example97">
                          Email ID
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example9"
                          className="form-control form-control-lg"
                          name="password"
                          value={Credntials.password}
                          onChange={onchange}
                        />
                        <label className="form-label" htmlFor="form3Example97">
                          Password
                        </label>
                      </div>

                      <div className="d-flex justify-content-end pt-3">
                        {/* <button type="button" className="btn btn-light btn-lg">Reset all</button> */}
                        <button
                          type="submit"
                          className="btn btn-success btn-lg ms-2"
                        >
                          Submit
                        </button>
                        <Link
                          to="/login"
                          className="btn btn-warning btn-lg ms-2">
                          Already a User
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
