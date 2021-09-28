import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {changeName} from '../../store/modules/user/actions'
import { Div, Title } from './styles'
export default function UserCard() {
    const dispatch = useDispatch()
    const[newName, setNewName] = useState('')
    const name = useSelector(state=>state.user.name)
    const handleClick = () =>{
        dispatch(changeName(newName))
    }
    return (
        <>
            <Title>UserName: {name}</Title>
            <Div>
                <TextField size="small" type="text" variant="outlined" onChange={(e=>setNewName(e.target.value))}/>
                <Button size="medium" variant="contained" onClick={handleClick} id="btn">Change</Button>
            </Div>
        </>
    )
}
