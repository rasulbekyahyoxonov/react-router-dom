import React, { useState } from "react"

function About() {
    const [state, setState] = useState(true)

    let test = () => {
        setState(!state)
    }


    return (
        <><h1>{state ? "SALOM": "HAyir"}</h1> <button onClick={test}>submit</button></>
    )
}

export default About