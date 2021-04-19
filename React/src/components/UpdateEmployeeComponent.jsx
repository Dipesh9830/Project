import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
    constructor(props){
        super(props)
        this.state = {  
            id: this.props.match.params.id,                        //this properties help to get data and data will be available during form submission
            firstname: '',
            lastname:  '',
            emailId:   ''
    }
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);   //binding the eventhandler into constructor
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.updateEmployee = this.updateEmployee.bind(this);
}
componentDidMount(){
    EmployeeService.getEmployeeById(this.state.id).then((res) => {
        let employee = res.data;
        this.setState({firstname: employee.firstname,
            lastname: employee.lastname,
            emailId: employee.emailId
        });
    });
}
updateEmployee = (e) => {
    e.preventDefault();
    let employee = {firstname: this.state.firstname, lastname: this.state.lastname, emailId: this.state.emailId};
    console.log('employee => ' + JSON.stringify(employee));
    EmployeeService.updateEmployee(employee, this.state.id).then(res => {
        this.props.history.push('/employees');
    });

 
}

cancel(){
    this.props.history.push('/employees');
}
changeFirstNameHandler = (event) => {                           //capturing the event
    this.setState({firstname: event.target.value});             //here we get the value which will be assigned to firstname
} 

changeLastNameHandler = (event) => {                           //capturing the event
    this.setState({lastname: event.target.value});             //here we get the value which will be assigned to firstname
} 

changeEmailHandler = (event) => {                           
    this.setState({emailId: event.target.value});             
} 
render() {
    return (
        <div>
            <div className = "container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Update Employee</h3>
                        <div className="card-body">
                            <form>
                                <div className = "form-group">
                                    <label>
                                        FirstName:
                                    </label>
                                    <input placeholder="FirstName" name="firstname" className="form-control"
                                    value={this.state.firstname} onChange={this.changeFirstNameHandler} />
                                </div>
                                <div className = "form-group">
                                    <label>
                                        LastName:
                                    </label>
                                    <input placeholder="LastName" name="lastname" className="form-control"
                                    value={this.state.lastname} onChange={this.changeLastNameHandler} />
                                </div>
                                <div className = "form-group">
                                    <label>
                                        Email Id:
                                    </label>
                                    <input placeholder="Email Address" name="Email Address" className="form-control"
                                    value={this.state.emailId} onChange={this.changeEmailHandler} />
                                </div>

                                <button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
}

export default UpdateEmployeeComponent;