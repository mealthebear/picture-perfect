import React from 'react';

const ClientList = (props) => (
    <div>
        {props.clients.map((client, i) => {
            return <div key={i}><h2>{client.id}{client.firstName}{client.lastName}</h2>
                <div><h3>{client.bill}</h3></div>
                <div><h4>{client.description}<button>Update</button></h4></div>
            </div>
        })}
    </div>
)

export default ClientList;