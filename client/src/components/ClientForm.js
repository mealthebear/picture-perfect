import React from 'react';

const ClientForm = (props) => (
    <div>
        <form className="client-form" onSubmit={props.onSubmit}>
            <div>
            <label>First Name</label>
            <input type="text" name="firstName" onChange={props.onChange}></input>
            </div>
            <div>
            <label>Last Name</label>
            <input type="text" name="lastName" onChange={props.onChange}></input>
            </div>
            <div>
            <label>Bill</label>
            <input type="text" name="bill" onChange={props.onChange}></input>
            </div>
            <div>
            <label>Description</label>
            <input type="text" name="description" onChange={props.onChange}></input>
            </div>
            <input type="submit" value="Submit"></input>
        </form>
    </div>
)

export default ClientForm;