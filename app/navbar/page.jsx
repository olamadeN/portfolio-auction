'use client'
import Image from 'next/image';
import styles from  './page.module.css'
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { ChevronDown, ShoppingCart } from 'lucide-react';


const Navbar = () => {
    const pathname = usePathname()
    const [isUser, setIsUser] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
    return ( 
        <div className={styles.navbar}>
            <div className="container">
                <div className={styles.navContainer}>
                    <img className={styles.logo} src="/images/logo.png" alt="logo" />
                    <ul className={styles.navLinks}>
                        <li className={ pathname==='/' ? `${styles.active}`: "" }><Link href="/" >Home</Link></li>
                        <li className={ pathname==='#aboutUs' ? `${styles.active}`: "" }><Link href="#aboutUs" >About</Link></li>
                        <li className={ pathname.startsWith('/pages/auctions') ? `${styles.active}`: "" }><Link href="/pages/auctions" >Auctions</Link></li>
                        <li className={ pathname.startsWith('/pages/gallery') ? `${styles.active}`: "" }><Link href="/pages/gallery" >Gallery</Link></li>
                        <li className={ pathname.startsWith('/pages/exhibition')  ? `${styles.active}`: "" }><Link href="/pages/exhibition" >Exhibitions</Link></li>
                        <li className={ pathname.startsWith('/pages/commissions')  ? `${styles.active}`: "" }><Link href="/pages/commissions" >Commissions</Link></li>
                        <li className={ pathname.startsWith('/pages/contact') ? `${styles.active}`: "" }><Link href='/pages/contact' >Contact</Link></li>
                    </ul>
                    {!isUser && <div onClick={() => !isOpen ? setIsOpen(true) : setIsOpen(false)} className={`btn ${styles.navBtn}`}>
                        My Account
                    </div>}
                    {isUser && <div onClick={() => !isOpen ? setIsOpen(true) : setIsOpen(false)} className={`btn ${styles.navBtnLoggedIn}`}>
                        <p className={styles.navBtnLoggedIn}><ShoppingCart size={21} /> 2</p> 
                        <div className={styles.navBtnLoggedIn}>
                            <img src="/images/contactUs.webp" alt="user" />
                            <p className={styles.navBtnLoggedIn}>Hi, Sharon <ChevronDown /> </p>
                        </div>
                    </div>}
                </div>
                <div className={isOpen&&!isUser ? `${styles.menu}` : `${styles.noMenu}`}>
                    <li className='btn'>Sign in to my account</li>
                    <li className='btn'>Create user account</li>
                    <li className='btn'>Sign in to my account</li>
                </div>
                <div className={isOpen&&isUser ? `${styles.menu}` : `${styles.noMenu}`}>
                    <li className='btn'>My Orders</li>
                    <li className='btn'>My Account</li>
                    <li className='btn' style={{color:"#FB0000"}}>Sign out</li>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;