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

                <label className="labels" for="FlightID" >FlightID:</label>

                <TextField
                    id="FlightID"
                    label="Flight ID"
                    variant="outlined"
                    fullWidth
                    onChange={(e) => handleChange('flightid', e.target.value)}

                />

                <label className="labels" for="departureA">Departure Airport: </label>
                <div></div>
                <select 
                    id="departureA"
                    label="Please choose an option."
                    variant="outlined"
                    fullWidth
                
                >
                    <option value="BEL">Nikola Tesla, BEL</option>
                </select>

                <div></div>

                <label className="labels" for="destinationA">Destination Airport: </label>
                <div></div>
                <select 
                    id="destinationA"
                    label="Please choose an option."
                    variant="outlined"
                    fullWidth
                
                >
                    <option value="BEL">Nikola Tesla, BEL</option>
                </select>

                <div></div>

                <label className="labels" for="departure" >Departure Date and Time:</label>

                <TextField 
                    id="departure"
                    variant="outlined"
                    fullWidth
                    type="datetime-local"
                />

                <label className="labels" for="arrival" >Arrival Date and Time:</label>

                <TextField 
                    id="arrival"
                    variant="outlined"
                    fullWidth
                    type="datetime-local"
                />

                <label className="labels" for="duration">Duration:</label>

                <TextField
                    id="duration"
                    label="Duration"
                    variant="outlined"
                    fullWidth
                    onChange={(e) => handleChange('flightid', e.target.value)}
                />

                <label className="labels" for="ticketPrice">TicketPrice:</label>

                <TextField
                    id="ticketPrice"
                    label="Ticket Price"
                    variant="outlined"
                    fullWidth
                    onChange={(e) => handleChange('flightid', e.target.value)}
                />

                <label className="labels" for="capacity">Capacity:</label>

                <TextField
                    id="capacity"
                    label="Capacity"
                    variant="outlined"
                    fullWidth
                    onChange={(e) => handleChange('flightid', e.target.value)}
                />


               <Button className="confirmButton" onClick={() => handleSubmit()} variant="contained">Add</Button>
            </div>
        </div>

         </div>   
   

}

export default AddFlight