import React, { useEffect, useState } from 'react'

const TextH2 = () => {

    const [text, setText] = useState("")

    const hanbleText = (event) => {
        setText(event.target.value)
    }

    useEffect(() => {
        console.log("montado componenete")
        
        return () => {
            console.log("componente desmontado");
        }
    }, []);

    useEffect(() => {
        console.log("modificando el texto")
        console.log(text)
     }, [text]);

    return (
        <div>
            <input type="text" onChange={hanbleText} />
            <p>{text}</p>
        </div>
    )
}

export default TextH2
