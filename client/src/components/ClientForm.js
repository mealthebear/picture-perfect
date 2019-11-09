import React from 'react';

const ClientForm = (props) => (
    <div>
        <form onSubmit={props.onSubmit}>
            <label>First Name</label>
            <input type="text" name="firstName" onChange={props.onChange}></input>
            <label>Last Name</label>
            <input type="text" name="lastName" onChange={props.onChange}></input>
            <label>Bill</label>
            <input type="text" name="bill" onChange={props.onChange}></input>
            <label>Description</label>
            <input type="text" name="description" onChange={props.onChange}></input>
            <input type="submit" value="Submit"></input>
        </form>
    </div>
)

export default ClientForm;