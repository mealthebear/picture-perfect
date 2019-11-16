import React from 'react';

const ClientForm = (props) => (
    <div className="client-form-box">
        <form className="client-form" onSubmit={props.onSubmit}>
            <div className="client-labels">
                <label>First Name</label>
                <label>Last Name</label>
                <label>Bill</label>
                <label>Description</label>
            </div>
            <div className="client-inputs">
                <input type="text" name="firstName" onChange={props.onChange}></input>
                <input type="text" name="lastName" onChange={props.onChange}></input>
                <input type="text" name="bill" onChange={props.onChange}></input>
                <input type="text" name="description" onChange={props.onChange}></input>
            </div>
            <input type="submit" value="Submit"></input>
        </form>
    </div>
)

export default ClientForm;