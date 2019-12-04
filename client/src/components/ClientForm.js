import React from 'react';

const ClientForm = (props) => (
    <div className="client-form-box">
        <form className="client-form" onSubmit={props.onSubmit}>
                <label className="client-label">First Name</label>
                <input className="client-input" type="text" name="firstName" onChange={props.onChange} maxLength="15"></input>
                <label className="client-label">Last Name</label>
                <input className="client-input" type="text" name="lastName" onChange={props.onChange} maxLength="13"></input>
                <label className="client-label">Bill</label>
                <input className="client-input" type="text" name="bill" onChange={props.onChange}></input>
                <label className="client-label">Description</label>
                <input className="client-input" type="text" name="description" onChange={props.onChange} maxLength="125"></input>
                <label className="client-label">Date</label>
                <div>
                    {/* TODO: Implement Pop-up Box with Months, Days, & Year */}
                     <div className="client-date">Month</div>
                     <div className="client-date">Day</div>
                     <div className="client-date">Year</div>
                </div>
                <input className="client-submit" type="submit" value="Submit"></input>
        </form>
    </div>
)

export default ClientForm;