import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div>
            <header style={{headSty}}>
                <h1  >Todolist</h1>
                <Link to='/'style={linkStyle} >Home</Link> | <Link to='/about' >About </Link>
                
            </header>
        </div>
    )
}

const headSty = {
    background:'#333',
    color:'#fff',
    textAlign:'center',
    padding:'10px'
}

const linkStyle={
    color:'#fffaf',
    textDecoration:'none'
}
export default Header;