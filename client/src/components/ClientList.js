import React from 'react';

const ClientList = (props) => (
    <div>
        {props.clients.map((client, i) => {
            return <div className="client-list-box" key={i}><h2 className="client-name">{client.firstName} {client.lastName}</h2>
                <div><h3 className="client-bill">{props.numberToString(client.bill)}</h3></div>
                <div className="client-description-box"><h4 className="client-description">{client.description}</h4></div>
                <div data-identifier={client.id} className="client-delete" onClick={props.deleteClient}>Delete Entry</div>
            </div>
        })}
        {/* <form>
            <input type="text" name="updateInfo"></input>
            <input type="submit" name="1" value="Submit"></input>
        </form> */}
    </div>
)

export default ClientList;