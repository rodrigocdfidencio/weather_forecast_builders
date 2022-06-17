import React from "react"

export default function Button({handleRefreshButton}) {
    return (
        <button className='updateBtn' onClick={handleRefreshButton}>Atualizar</button>
    )
}
