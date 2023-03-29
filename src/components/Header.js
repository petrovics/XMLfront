import Link from "next/link"
import styles from '@/styles/Header.module.css'
import { width } from "@mui/system"


const Header = () => {

    return <div id={styles.header}>
        <div className="left">

        </div>

        <div className="center">
            <Link href={'/flights'}>View Flights</Link>
            <Link href={'/login'}>Login</Link>
            <Link href={'/registration'}>Registration</Link>
        </div>

        <div className="right">

        </div>
       
    </div>


}

export default Header