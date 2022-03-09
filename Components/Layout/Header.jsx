import Image from 'next/image'
import Link from 'next/link'
import logo from '../../assets/images/png files/logo.png'
import arrow from '../../assets/images/svg/arrow.svg'
import styles from '../../styles/Layout.module.css'

const Header = ({noShipment}) => {
  return (
    <header className=' z-10 container flex items-center  text-lg  text-white absolute   left-1/2 transform -translate-x-1/2  top-4 '>
        <div>
            <Link href='/'>
                 <a>
                    <Image src={logo}/>
                </a>
            </Link>
        </div>
        <nav>
            <ul className='flex ml-20 gap-x-10'>
                <li className={`cursor-pointer relative ${styles.dropdownBtn}`}>
                    <span className='relative'>Ship   <span className='relative -top-0.5 -right-0.3'><Image   src={arrow}/></span></span>
                    <ul className={`absolute top-8 -left-6 p-4 pl-6 flex  flex-col gap-y-3 bg-white text-black text-base ${styles.dropdownMenu}`}>
                        <li className={styles.dropdownMenuItem}>
                            <Link href="#">
                                <a>
                                    Create Shipment
                                </a>
                            </Link>
                        </li>
                        <li className={styles.dropdownMenuItem}>
                            <Link href="#">
                                <a>
                                    Manage Shipments
                                </a>
                            </Link>
                        </li>
                        <li className={styles.dropdownMenuItem}>
                            <Link href="#">
                                <a>
                                    Get Price Estimate
                                </a>
                            </Link>
                        </li>
                        <li className={styles.dropdownMenuItem}>
                            <Link href="#">
                                <a>
                                    Find Nearest Branch
                                </a>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className={`cursor-pointer relative ${styles.dropdownBtn}`}>
                    <span className='relative'>Solutions  <span className='relative -top-0.5 -right-0.3'><Image   src={arrow}/></span></span>
                    <ul className={`absolute top-8 -left-6 p-4 pl-6 flex  flex-col gap-y-3 bg-white text-black text-base ${styles.dropdownMenu}`}>
                        <li className={styles.dropdownMenuItem}>
                            <Link href="#">
                                <a>
                                    E-commerce
                                </a>
                            </Link>
                        </li>
                        <li className={styles.dropdownMenuItem}>
                            <Link href="#">
                                <a>
                                    Freight
                                </a>
                            </Link>
                        </li>
                        <li className={styles.dropdownMenuItem}>
                            <Link href="#">
                                <a>
                                    Fulfilment
                                </a>
                            </Link>
                        </li>
                        <li className={styles.dropdownMenuItem}>
                            <Link href="#">
                                <a>
                                    Domestic Distribution
                                </a>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className={`cursor-pointer relative ${styles.dropdownBtn}`}>
                    <span className='relative'>Help & Support  <span className='relative -top-0.5 -right-0.3'><Image   src={arrow}/></span></span>
                    <ul className={`absolute top-8 -left-6 p-4 pl-6 flex  flex-col gap-y-3 bg-white text-black text-base ${styles.dropdownMenu}`}>
                        <li className={styles.dropdownMenuItem}>
                            <Link href="#">
                                <a>
                                    FAQs
                                </a>
                            </Link>
                        </li>
                        <li className={styles.dropdownMenuItem}>
                            <Link href="#">
                                <a>
                                    Contact Us
                                </a>
                            </Link>
                        </li>
                    </ul> 
                </li>
             {noShipment  ||   <li className={`cursor-pointer relative`}>
                    <Link href='#'>
                         <a className='relative'>Track You Shipment  </a>
                    </Link>
                 
                </li>}
            </ul>
        </nav>
        <ul className='ml-auto flex items-center'>
            <li className='mr-12'>
                <Link href="#">
                    <a >
                    العربية    
                    </a>
                </Link>
            </li>
            <li className={styles.btn}>
                <Link href="#">
                    <a>
                        Manage Shipment
                    </a>
                </Link>
            </li>
        </ul>
    </header>
  )
}

export default Header