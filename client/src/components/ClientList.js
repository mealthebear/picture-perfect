import React from 'react';

const ClientList = (props) => (
    <div>
        {props.clients.map((client, i) => {
            return <div key={i}><h2>{client.firstName}{client.lastName}</h2>
                <div><h3>{client.bill}</h3></div>
                <div><h4>{client.description}<button>Update</button></h4></div>
                <div data-identifier={client.id} onClick={props.deleteClient}>Delete Entry</div>
            </div>
        })}
        {/* <form>
            <input type="text" name="updateInfo"></input>
            <input type="submit" name="1" value="Submit"></input>
        </form> */}
    </div>
)

export default ClientList;