function ClickEvent(){
    function apple(){
        alert("Hello");
    }
    return (
        <>
        <h1>Click Events and Function</h1>
        {/* <button onClick={apple()}>"Click me</button> */}
        <button onClick={apple}>Click me</button>
        {/* Note: Apple is a function. But to call it only  use its name not paranthesis.
        */}

        {/* <button onClick={alert("Inline alert but can only be written with arrow function.")}>Click me</button> */}
        <button onClick={()=>alert("Inline alert but can only be written with arrow function.")}>Click me</button>

        {/* What if we do normally?
        It automatically will call those functions without the click event to take place. */}
        
        <hr />
        </>
    )
}

export default ClickEvent