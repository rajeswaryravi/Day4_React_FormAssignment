import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/LoginComponent.css';
class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstname: '', username: '', email: '', password: '', confirmpassword: '' }
  }
  setEmpState = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    this.setState({ [field]: value })
  }
  handleLogin = (e) => {
    e.preventDefault();
    console.log(" First Name : " + this.state.firstname);
    console.log(" Email : " + this.state.email);
    console.log(" User Name : " + this.state.username);
    console.log(" Password : " + this.state.password);
    console.log(" Cofirm Password : " + this.state.confirmpassword);

  }
  render() {
    return (<React.Fragment>
      <div className="container" style={{backgroundColor:"orange",color:"#fff",height:"500px"}}>
        <h3>Create Your account</h3>
        <form>

          <label>Enter Name</label>
          <input style={{ marginBottom: '7px', height: '40px' }} type="text" className="form-control" value={this.state.name} id="firstname" placeholder="Enter name here" name="firstname" onChange={this.setEmpState} />


          <label>Enter Email ID</label>
          <input style={{ marginBottom: '7px', height: '40px' }} type="email" className="form-control" value={this.state.name} id="email" placeholder="Enetr Email here" name="email" onChange={this.setEmpState} />


          <label>Enter User Name</label>
          <input style={{ marginBottom: '7px', height: '40px', marginRight: "10px" }} type="text" className="form-control" value={this.state.name} id="username" placeholder="Enter Username here" name="username" onChange={this.setEmpState} />


          <label>Enter Password</label>
          <input style={{ marginBottom: '7px', height: '40px' }} type="password" className="form-control" value={this.state.password} id="pwd" placeholder="Enter Password here" name="password" onChange={this.setEmpState} />


          <label>Enter Confirm Password</label>
          <input style={{ marginBottom: '7px', height: '40px' }} type="confirmpassword" className="form-control" value={this.state.confirmpassword} id="cpwd" placeholder="Enter Confirm Password here" name="confirmpassword" onChange={this.setEmpState} />


          <button type="submit" className="btn btn-primary button" style={{backgroundColor:"#fff",color:"orange",border:"none"}}
          onClick={this.handleLogin}>Create Account</button>
        </form>

      </div>

    </React.Fragment>)
  }
}
export default LoginComponent;