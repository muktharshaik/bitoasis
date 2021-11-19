import styles from './navbar.module.css'
import { HomeOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'


const NavBar = (props) => {
    const router = useRouter();
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <h2>BITOASIS</h2>
            </div>
            <div className={styles.home}>
                <HomeOutlined onClick={() => router.push('/')}/>
            </div>
        </div>
    )
}

export default NavBar