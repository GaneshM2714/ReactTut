function Props(details){
    console.log(details.name);
    console.log(details.roll);
        return (
        <>
        <h1>Props in React</h1>
        <div><p>Props stand for <b>Properties.</b>
        These are passed to Components that have specific data to be included inside that Component.</p>
        </div>
        <div>
            Consider a Component known as Student.It will have specific details about a Student like name,address,phone no,roll no,etc. Hence, to create different components for every student we will pass that data for individual through props.
        </div>

        {/* Demo for it: */}
        
        <h3> Student details: </h3>
        <div><b>Name: </b>{details.name} <br />
        <b>Roll No: </b>{details.roll}</div>
        <hr />
        </>

        
    )
}

export default Props