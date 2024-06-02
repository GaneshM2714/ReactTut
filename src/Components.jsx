function Components(){
    return (
        <>
            <h1>Components in React JS</h1>
            <h2>This are specific lines of code saved in a specific files</h2>

            <div>
                <h3>Types: </h3>
                <ol>
                    <li>Functional(Important and thoroughly used.) Components</li>
                    <li>Class Components</li>
                </ol>
                <h3>
                    Advantages: 
                    <br />
                </h3>
                <ol>
                    <li><b>Reusable Components: </b>
                    <div>Means that you can use them in multiple places in your application. This can save you a lot of time and effort, as you don't have to rewrite the same code over and over again.</div>
                    </li>
                    <li><b>Virtual DOM: </b>
                    <div>
                    React uses a virtual DOM, which is a lightweight representation of the real DOM. This makes it much faster to update the UI, as React only has to update the virtual DOM and then diff it with the real DOM to determine the minimal set of changes that need to be made.</div></li>
                    <li>One way data binding</li>
                    <li>Easy to learn</li>
                </ol>
            </div>
            <hr />
        </>
    )
}

export default Components

