import './businessInformation.scss';
import React from "react";

function BusinessInformation(props) {

   
    const handleSave = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        
        //console.log(name,email,phone);

        return props.onSaveData(name,email,phone);
    }

    return (
        <>

        <div className="wrapper_Info">

            <h4>Contact Person Information</h4>
            <form onSubmit={handleSave}>
            <div>
                <input className="fields" type="text" name="name" placeholder="Name" onChange={props.handleChange('name')}/>
            </div>
            <div>
                <input className="fields" type="email" name="email" placeholder="Email" onChange={props.handleChange('email')}/> 
            </div>
            <div>
                <input className="fields" type="text" name="phone" placeholder="Phone number" onChange={props.handleChange('phone')}/>
            </div>

            <div>
                <button className="save" type="submit" >save</button>
            </div>
            </form>
        </div>
        </>
    );
}

export default BusinessInformation;