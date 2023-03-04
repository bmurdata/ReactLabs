import React from "react";

const Upgrade=(props) => {
    return (
    <div className='upgrade'>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <button onClick={props.action}><b>Cost </b>{props.cost}</button>
    </div>)
}

export default Upgrade;