import './App.css'
import {useState} from "react";
import ButtonState from "./components/ButtonState.jsx";
import ListExample from "./components/ListExample.jsx";
import StudentsComponent from "./components/StudentsComponent.jsx";

function App() {

    const  [text,setText] = useState("Merhaba ben değişmeyen bir textim.")

  return (
    <>

       {/* <input type="text"
               value={text}
               onChange={(e)=>setText(e.target.value)}/>
        <p>{text}</p>*/}

{/*        <ButtonState/>*/}

    {/*    <ListExample/>*/}
        <StudentsComponent/>
    </>
  )
}

export default App
