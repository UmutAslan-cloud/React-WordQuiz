import React, {useState} from 'react'
import "./score.css"


export default function Score(props) {

    return (
        <div className="valid-part">
            <p id="correct">True:{
                props.plus
            }</p>
            <p id="falsch">False:{
                props.minus
            }</p>
        </div>
    )
}
