import Header from "@/components/Header"
import { Button, TextField } from "@mui/material"
import { useState } from "react"
import { images } from "../../next.config"
import image from "./images/download.jpg";



const Flights = () => {

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

    return <div id='flights' style={{ backgroundImage: `url('${image}')` }}>

        <Header/>
        <div>
            <h1 className="headerFlights">FLIGHTS</h1>
        </div>

        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
        </LocalizationProvider>;


        
   <div>
            <table class="styled-table">
                <tbody>
                    
                    <tr>
                        <th>Flight ID</th>
                        <th>Departure airport</th>
                        <th>Departure date and time</th>
                        <th>Destination airport</th>
                        <th>Arrival date and time</th>
                        <th>Ticket price</th>
                    </tr>

                </tbody>
            </table>
            
            <Button className="button" onClick={() => handleSubmit()} variant="contained" margin="normal">Delete</Button>
            <Button className="button" Link href={'/addflight'} variant="contained" margin="normal" >Add Flight</Button>
            </div>

         </div>   
   

}

export default Flights

