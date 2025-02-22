/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'

    
const Signup = ({ onFormSubmit }) => {

    const [formData, setformData] = useState({
        Username: "",
        email: "",
        password: "",
    });

    const formChange = (e) => {
        setformData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!formData.email || !formData.password) {
            alert("please fill all the details");
            return;
        }
        alert("done");
        onFormSubmit(formData);

    };
  return (
     <div>
                <div className="signup-container">
                    <h2>Sign Up</h2>    
                    <form  onFormSubmit = {handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" name="Username" onChange={formChange} id="name" placeholder="Enter your name" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" onChange={formChange} id="email" placeholder="Enter your email" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" onChange={formChange} id="password" placeholder="Enter your password" required />
                        </div>
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
      
    </div>
  )
}

export default Signup;



