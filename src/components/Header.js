import Link from "next/link"
import styles from '@/styles/Header.module.css'

const Header = () => {

    return <div id={styles.header}>
        <div className="left">

        </div>
        <div className="right">
            <Link href={'/login'}>Login</Link>
            <Link href={'/registration'}>Registration</Link>
        </div>
       
    </div>


}

export default Header