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

        fetch('http://localhost:8082/api/user/registration', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(response => response.json())
        .then(data => console.log(data))
    }

    return <div id='registration'>
        <Header/>

        <div className="container">
            <div className="form registration-form">
                <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    onChange={(e) => handleChange('name', e.target.value)}

                />
                <TextField
                    label="Surname"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    onChange={(e) => handleChange('surname', e.target.value)}
                />
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
                <TextField
                    label="PhoneNumber"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    onChange={(e) => handleChange('phonenumber', e.target.value)}

                />
                <TextField
                    label="SSN"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    onChange={(e) => handleChange('ssn', e.target.value)}

                />



                <Button onClick={() => handleSubmit()} variant="contained" margin="normal" fullWidth>Confirm</Button>
            </div>
        </div>

        
    </div>

}

export default Login