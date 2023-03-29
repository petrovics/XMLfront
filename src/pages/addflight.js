import Header from "@/components/Header"
import { Button, TextField} from "@mui/material"
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useState } from "react"
import { images } from "../../next.config"
import image from "./images/download.jpg";



const AddFlight = () => {

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

    return <div id='addflight'>
             <Header/>
        <div>
            <h1 className="headerFlights">Add new flight</h1>
        </div>
        
        <div className="container">
            <div className="form addflight-form">
                <TextField
                    label="Flight ID"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    onChange={(e) => handleChange('flightid', e.target.value)}

                />

               <Button className="confirmButton" onClick={() => handleSubmit()} variant="contained">Add</Button>
            </div>
        </div>

         </div>   
   

}

export default AddFlight