import React from 'react'
import {render} from 'react-dom'
import {PDate} from "./components/PDate";
import './stylesheets/style.scss';


window.React = React

// render(
//     <SkiDayCount total={"test"} /> ,
//     document.getElementById("react-container")
// )

render(
    <div>
        <div>
            TimeStamp:
            <br/>
            <PDate type={"timestamp"} />
        </div>
        <div>
            Current:
            <br/>
            <PDate type={"current"} />
        </div>
        <div>
            Date:
            <br/>
            <PDate type={"date"} y={2019} m={9} d={27} />
        </div>
        <div>
            Date and Time:
            <br/>
            <PDate type={"date"} y={2020} m={3} d={20} h={14} i={30} s={22} />
        </div>
    </div>,
    document.getElementById("react-container")
);
