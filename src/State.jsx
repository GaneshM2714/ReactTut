import { useState } from "react";
function State(){

    let data1 = "Ganesh";
    let [data2,setData] = useState("Suyog");

    function updatedata(){
        data1="Suyog";
        if (data2=="Suyog") setData("Ganesh");
        else setData("Suyog");
    }
    console.warn("<-----------------------");

    return (<>
    <h1>State VS Variable</h1>

    <div><b>Why State?</b></div>
    <p>During <b>Dynamic</b> web page handling,sometimes we are required to make subtle changes in data of components. Hence,resulting in reloading of that specific component.But in React, we can't do it with variables. Hence, State is necessary.Alternative for state can be props which will be studied further.  </p>

    {/* State Demo VS Variable */}
    <h2>{data1}</h2>
    <h2>{data2}</h2>
    <button onClick={updatedata}>Click Me</button>
    <p>See how the use of varible doesn't allow us to dynamically update the components calue but with useState/State we can do it easily.</p>

    <p><b><a href="https://youtu.be/VLsccuwbJOQ?si=PxKh9m7sKEX2KLk9">State in Class</a></b> for more reference.</p>
    <hr />
    </>)
}

export default State