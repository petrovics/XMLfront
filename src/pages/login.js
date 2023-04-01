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

        fetch('http://localhost:8082/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(response => response.json())
        .then(data => console.log(data))
    }


    return <div id='login'>
        <Header/>

        <div className="container">
            <div className="form login-form">

                <label className="labels" for="Email" >Email:</label>

                <TextField className="loginfields"
                    id="Email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    onChange={(e) => handleChange('email', e.target.value)}

                />

                <label className="labels" for="Password" >Password:</label>

                <TextField className="loginfields"
                    type="password"
                    id="Password"
                    label="Password"
                    variant="outlined"
                    fullWidth
                    onChange={(e) => handleChange('password', e.target.value)}

                />
                <Button className="button" onClick={() => handleSubmit()} variant="contained" margin="normal" >Login</Button>
            </div>
        </div>

        
    </div>
}

export default Login