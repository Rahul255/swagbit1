import React, {useContext} from 'react'
import {AppContext} from '../AppContext'

function Two() {
    const {data} = useContext(AppContext)
    return (
        <div style={{backgroundColor:"red",width:"200px"}}>
            <h2>Indian Coffe house {data} </h2>
        </div>
    )
}

export default Two

