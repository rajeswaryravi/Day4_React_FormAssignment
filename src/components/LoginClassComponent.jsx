import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/LoginClassComponent.css';
class LoginClassComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = { firstname: '',lastname:'',email:'', password: '',confirmpassword:''}
    }
    setEmpState = (e) => {
           const value = e.target.value;
           const field =  e.target.name;
           this.setState({[field]:value})
    }
    handleLogin = (e) => {
        e.preventDefault();
        console.log(" FirstName : "+ this.state.firstname);
        console.log(" LastName : "+ this.state.lastname);
        console.log(" Email : "+ this.state.email);
        console.log(" Password : "+ this.state.password);
        console.log(" Cofirm Password : "+ this.state.confirmpassword);
      
    }
    render() {
        return(<React.Fragment>
              <div className="container">
          <h3>REGISTER</h3>
            <form>
                <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                <div className="form-group">
                    <input style={{marginBottom:'7px', height:'40px'}} type="text" className="form-control" value={this.state.name} id="firstname" placeholder="First Name" name="firstname" onChange={this.setEmpState} />
                </div>
                <div className="form-group">
                   <input  style={{marginBottom:'7px', height:'40px', marginRight:"10px"}} type="text" className="form-control" value={this.state.name} id="lastname" placeholder="Last Name" name="lastname" onChange={this.setEmpState} />
                </div>
                </div>
                <div className="form-group">
                     <input  style={{marginBottom:'7px', height:'40px'}} type="email" className="form-control" value={this.state.name} id="email" placeholder="Email" name="email" onChange={this.setEmpState} />
                </div>
                <div className="form-group">
                   <input  style={{marginBottom:'7px', height:'40px'}} type="password" className="form-control" value={this.state.password} id="pwd" placeholder="Password" name="password" onChange={this.setEmpState} />
                </div>
                <div className="form-group">
                   <input  style={{marginBottom:'7px', height:'40px'}} type="confirmpassword" className="form-control" value={this.state.confirmpassword} id="pwd" placeholder="Confirm Password" name="confirmpassword" onChange={this.setEmpState} />
                </div>
               
               <button type="submit" className="btn btn-primary" onClick={this.handleLogin}>REGISTOR NOW</button>
           </form>
        
           </div>
        
        </React.Fragment>)
    }
}
export default LoginClassComponent;