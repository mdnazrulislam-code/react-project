import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user) return <div>Please Login</div>
    console.log({user});
    return <div> Welcome {user} </div>
    
}

export default Profile