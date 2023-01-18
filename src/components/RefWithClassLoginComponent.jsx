import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/RefWithClassLoginComponent.css';
class RefWithClassLoginComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {fname: '', lname:'',email:'', password: ''}
        this.fnameRef = React.createRef()
        this.lnameRef = React.createRef()
        this.emailRef = React.createRef()
        this.passwordRef = React.createRef()
    }
    handleLogin = (e) => {
        e.preventDefault();
        if(this.fnameRef.current.value==="" && this.lnameRef.current.value==="" && 
        this.emailRef.current.value==="" && this.passwordRef.current.value==="") {
            alert("Please enter mandetory details")
        }else if(this.fnameRef.current.value==="" && this.lnameRef.current.value===""){
            alert("Please enter first name and last name")
        }else if(this.emailRef.current.value===""){
            alert("Please enter email")
        }else if(this.passwordRef.current.value===""){
            alert("Please enter password")
        }else{
        alert("Welcome " + this.fnameRef.current.value+" "+this.lnameRef.current.value );
        }
    }
    render() {
        return(<React.Fragment>
             <div className="container_form">
          <h3>Registration Form With Ref Class</h3>
        <form>
          <div className="form-group">
            <label htmlFor="name"></label>
            <input
              type="text"
              id="fname"
              name="fname"
              ref={this.fnameRef}
              className="form-control"
              placeholder="First Name" />
          </div>
          <div className="form-group">
            <label htmlFor="name"></label>
            <input
              type="text"
              id="lname"
              name="lname"
              ref={this.lnameRef}
              className="form-control"
              placeholder="Last Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email"></label>
            <input
               type="email"
              id="mail"
              name="mail"
              ref={this.emailRef}
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password"></label>
            <input
              type="password"
              id="password"
              name="password"
              ref={this.passwordRef}
              className="form-control"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.handleLogin}>Login</button>
           </form>
      </div>
        </React.Fragment>)
    }
}
export default RefWithClassLoginComponent;