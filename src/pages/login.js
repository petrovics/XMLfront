import Header from "@/components/Header"
import { Button, TextField } from "@mui/material"
import { useState } from "react"

const Login = () => {

    const [data, setData] = useState({})

    const handleChange = (name, value) => {
        setData({
            ...data,
            [name]: value
        })
    }

    const handleSubmit = () => {
        console.log(data)
    }


    return <div id='login'>
        <Header/>

        <div className="container">
            <div className="form login-form">
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    onChange={(e) => handleChange('email', e.target.value)}

                />
                <TextField
                    type='password'
                    label="Password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    onChange={(e) => handleChange('password', e.target.value)}
                />
                <Button onClick={() => handleSubmit()} variant="contained" margin="normal" fullWidth>Login</Button>
            </div>
        </div>

        
    </div>
}

export default Login