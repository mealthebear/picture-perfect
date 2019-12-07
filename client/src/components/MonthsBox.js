import React from 'react';

const MonthsBox = (props) => (
    <div className="date-container">
        <p name="month" onClick={props.changeMonth}>January</p>
        <p name="month" onClick={props.changeMonth}>February</p>
        <p name="month" onClick={props.changeMonth}>March</p>
        <p name="month" onClick={props.changeMonth}>April</p>
        <p name="month" onClick={props.changeMonth}>May</p>
        <p name="month" onClick={props.changeMonth}>June</p>
        <p name="month" onClick={props.changeMonth}>July</p>
        <p name="month" onClick={props.changeMonth}>August</p>
        <p name="month" onClick={props.changeMonth}>September</p>
        <p name="month" onClick={props.changeMonth}>October</p>
        <p name="month" onClick={props.changeMonth}>November</p>
        <p name="month" onClick={props.changeMonth}>December</p>
    </div>
)

export default MonthsBox;