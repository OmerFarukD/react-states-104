import React, {useState} from 'react';

function ButtonState(props) {

    const [result,setResult] = useState(0)
    const [count,setCount] = useState(1);

    return (
        <div>
            <p> Sayı : <strong>{result}</strong></p>
            <p> Değer : <strong>{count}</strong></p>
            <hr/>

            <button onClick={()=> setCount(1)}>1</button>
            <button onClick={()=> setCount(3)}>3</button>
            <button onClick={()=> setCount(5)}>5</button>

            <hr/>
            <button
                onClick={()=> setResult(result+count)}
                style={{backgroundColor:"navy" , color:"yellow"}}>Arttır</button>
            <button
                onClick={()=> setResult(result-count)}
                style={{backgroundColor:"darkred", color:"blue"}}>Azalt</button>
        </div>
    );
}

export default ButtonState;