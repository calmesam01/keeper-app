import React from 'react';

function Note (props) {
    return <div className = "note">
        <h1> {props.myTitle} </h1>
        <p> {props.myContent} </p>
    </div>
}

export default Note