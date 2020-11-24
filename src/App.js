import BusinessType from './components/step1/BusinessType';
import { Modal } from 'react-bootstrap';
import Categories from './components/step2/Categories';
import React, { Component } from "react";
import BusinessInformation from './components/step3/BusinessInformation';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      step: 1,
      name: null,
      email: null,
      phone: null,
      btn_radio: null,
      check: [],
      signupSuccess: false  
    }
  }

  // process to next step
  next = () => {
    // update state.step by adding to previous state
    this.setState(prevState => {
      return {step: prevState.step + 1
    }})
  }
  update(values) {
    //this.state.btn_radio= values
    this.setState({btn_radio: values});
    this.next();
    console.log(this.state);
    //this.setState((state) => ({name : state.name}));
  }
  

  //handle form submit
  handleSubmit = (e) =>{
    e.preventDefault();
    //connect to the database, depending on the returned state, 
    //will change the state.signupSuccess to be true
    //and then render success component
    this.setState({
      signupSuccess: true
    });
    console.log("success");
  }

  //handle all the field changes
  handleChange = input => e => {
        e.preventDefault();
        this.setState({ [input]: e.target.value });
        console.log(this.state);
  }

  handleStatut = (prop) => {
    this.setState({
      check: prop
    });
    console.log(this.state.check);
  }

  render(){
    const { step } = this.state;
    switch (step) {
      case 1: return  <BusinessType name="type" 
      options={ [
        { texte: 'Grocery', value:'Grocery' },
        { texte: 'Restaurants', value:'Restaurants' },
        { texte: 'Café', value:'Café' },
        { texte: 'Hotel', value:'Hotel' },
        { texte: 'Hall', value:'Hall' },
        { texte: 'School', value:'School' },
        { texte: 'Office', value:'Office' }
      ]}
      onSaveData={(values) => this.update(values)}
      />;
      case 2 : return <Categories name="category" 
      options={ [
        { texte: 'Home Care', value:'Home Care' },
        { texte: 'stationery', value:'stationery' },
        { texte: 'Personal Care', value:'Personal Care' },
        { texte: 'Paper Products', value:'Paper Products' },
        { texte: 'Coffee', value:'Coffee' },
        { texte: 'Plastic Products', value:'Plastic Products' },
        { texte: 'Food', value:'Food' },
        { texte: 'Health Care', value:'Health Care' }
      ]}
      onSaveData={(values) => {this.handleStatut(values);this.next();}}/>;
      case 3 : return <BusinessInformation handleChange = {this.handleChange} onSaveData={
        
        (name,email,phone) => {this.setState({name : name, email : email, phone: phone,signupSuccess: true});this.next();}}/> ; 
      case 4:
              return <>{this.state.signupSuccess && 
              

                <Modal show={this.state.signupSuccess} scrollable animation={false}>
                <div className="container">
                  <Modal.Header closeButton>
                    <Modal.Title>titre</Modal.Title>
                  </Modal.Header>
                  
                  <Modal.Body >
                  
                      <span>Name : {this.state.name}</span><br/>
                      <span>Email : {this.state.email}</span><br/>
                      <span>Phone :{this.state.phone}</span><br/>
                      <span>Business Type :{this.state.btn_radio}</span><br/>
                      <span>Categories :{this.state.check.map((c,index)=><span key={index}>{c}</span>)}</span><br/>
         
                   
                    </Modal.Body>

                  </div>
                </Modal>
              
              
              }</>;   
      default:
              return <></>;
}

}
}

