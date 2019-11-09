import React from 'react';

const ClientForm = (props) => (
    <div>
        <form>
            <label>First Name</label>
            <input type="text" onChange={props.onChange}></input>
            <label>Last Name</label>
            <input type="text" onChange={props.onChange}></input>
            <label>Bill</label>
            <input type="text" onChange={props.onChange}></input>
            <label>Description</label>
            <input type="text" onChange={props.onChange}></input>
            <input type="submit" value="Submit"></input>
        </form>
    </div>
)

export default ClientForm;