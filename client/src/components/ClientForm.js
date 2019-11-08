import React from 'react';

const ClientForm = (props) => (
    <div>
        <form>
            <label>First Name</label>
            <input type="text"></input>
            <label>Last Name</label>
            <input type="text"></input>
            <label>Bill</label>
            <input type="text"></input>
            <label>Description</label>
            <input type="text"></input>
            <input type="submit" value="Submit"></input>
        </form>
    </div>
)

export default ClientForm;