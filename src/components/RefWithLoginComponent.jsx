import {useState, useRef} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './css/RefWithLoginComponent.css';
const RefWithLoginComponent = () => {
    const fnameRef = useRef('')
    const lnameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const [success,setSuccess] = useState('')
    const [error,setError]= useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        if(fnameRef.current.value===""||lnameRef.current.value===""||emailRef.current.value===""||passwordRef.current.value==="") {
            setError("Enter mandetory details")
            setSuccess("")
        }
        else {
            setSuccess("Login successful")
            setError("")
        }
    }
   
  return (
    <>
      <div className="container">
          <h3>Registration Form With Ref Function</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name"></label>
            <input
              type="text"
              id="fname"
              ref={fnameRef}
              className="form-control"
              placeholder="First Name"/>
          </div>
          <div className="form-group">
            <label htmlFor="name"></label>
            <input
              type="text"
              id="lname"
              ref={lnameRef}
              className="form-control"
              placeholder="Last Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email"></label>
            <input
               type="email"
              id="mail"
              ref={emailRef}
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd"></label>
            <input
              type="password"
              id="pwd"
              ref={passwordRef}
              className="form-control"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          {success?<div className="text-success">{success}</div>:null}
          {error?<div className="text-danger">{error}</div>:null}
        </form>
      </div>
    </>
  );
};
export default RefWithLoginComponent;