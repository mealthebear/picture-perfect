import React from 'react';

const ClientList = (props) => (
    <div>
        {props.clients.map((client, i) => {
            return <div key={i}>{client.id}{client.firstName}{client.lastName}
                <div>{client.bill}</div>
                <div>{client.description}</div>
            </div>
        })}
    </div>
)

export default ClientList;