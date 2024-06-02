
import './App.css'
import Create from './Create.jsx'
import Components from './Components.jsx'
import JSX from './JSX.jsx'
import ClickEvent from './ClickEvent.jsx'
import State from './State.jsx'
import Props from './Props.jsx'
function App() {

  return (
    <>
      <h1>Hello Again</h1>
      <h2>Let's restart our Journey with React!</h2>
      <div><h1>Revise whatever we Learn!</h1>
      <p>Thats the Key</p>
      </div>

      {/* From Here we will add components of whatever we gonna learn about. */}
      <Create></Create>
      <Components></Components>
      <JSX></JSX>
      <ClickEvent></ClickEvent>
      <State></State>
      <Props name={"Ganesh"} roll={21429}></Props>
      <Props name={"Om"} roll={21427}></Props>
    </>
  )
}

export default App
