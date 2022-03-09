import styles from '../../styles/Home.module.css'
import overlays from '../../styles/Overlays.module.css'
import boxWhite from '../../assets/images/svg/box-white.svg'
import Image from 'next/image'
import Link from 'next/link'
import brandIcon from '../../assets/images/home/images/brandIcon2.svg'
import brandIconSmall from '../../assets/images/home/images/brandIcon.svg'
import YellowBack from '../YellowBack'

const Logistics = () => {
    const handleAccordion =(itemNumber)=>{
        const headings =  document.querySelectorAll("."+styles.accordionHeading)
        
        headings.forEach((heading,index)=>{
            if(index===itemNumber){
                heading.parentElement.classList.add(styles.active)
            }else{
                 
                heading.parentElement.classList.remove(styles.active)
            }
        })
    }

  return (
        <YellowBack>
            
        <span className={`absolute -bottom-20 `}>
            <Image src={brandIcon}/>
        </span>
        <span className={`${styles.accordionBrandIcon}`}>
            <Image src={brandIconSmall}/>
        </span>
         <div className='flex flex-col items-center gap-y-2 '>
                <Image src={boxWhite} alt='cube'/>
                <span className="relative text-3xl text-grey uppercase medium-font">Customize Your Business Logistics</span>
         </div>
         <div className={`flex gap-y-8 text-white relative overflow-hidden flex-col bg-blue ${styles.accordion}`}>
             <span className={overlays.accordionOverlay}>
            </span>
             <span className={overlays.accordionOverlay2}>
             </span>
            <div className={` flex flex-col gap-y-2  ${styles.accordionItem} ${styles.active}`}>
                <span className={`text-2xl  medium-font relative cursor-pointer z-10  ${styles.accordionHeading}`} onClick={()=>handleAccordion(0)}>Freight Services</span>
                <span className=" light-font relative z-10  w-1/3">From seamless, “account-less” simple shipping to friction-free COD services, Zajil is committed to making shipping and logistics easy.  </span>
                <Link href="#">
                    <a className='text-sm relative tracking-wide  z-10 mt-2 medium-font underline '>
                        Learn More
                    </a>
                </Link>
                <span className={`relative w-1/3 z-10 ${styles.accordionDivider}`}></span>
            </div>
            <div className={` flex flex-col gap-y-2  ${styles.accordionItem}`}>
                <span className={`text-2xl relative  medium-font cursor-pointer z-10  ${styles.accordionHeading}`} onClick={()=>handleAccordion(1)}>eCommerce</span>
                <span className=" light-font relative z-10  w-1/3 ">From seamless, “account-less” simple shipping to friction-free COD services, Zajil is committed to making shipping and logistics easy.  </span>
                <Link href="#">
                    <a className='text-sm relative tracking-wide  z-10  mt-4 medium-font underline '>
                        Learn More
                    </a>
                </Link>
                <span className={`relative w-1/3 z-10 ${styles.accordionDivider}`}></span>
            </div>
            <div className={` flex flex-col gap-y-2  ${styles.accordionItem}`}>
                <span className={`text-2xl  relative medium-font cursor-pointer z-10  ${styles.accordionHeading}`} onClick={()=>handleAccordion(2)}>Fulfilment</span>
                <span className=" light-font relative z-10  w-1/3 ">From seamless, “account-less” simple shipping to friction-free COD services, Zajil is committed to making shipping and logistics easy.  </span>
                <Link href="#">
                    <a className='text-sm relative tracking-wide  z-10  mt-4 medium-font underline '>
                        Learn More
                    </a>
                </Link>
                <span className={`relative w-1/3 z-10 ${styles.accordionDivider}`}></span>
            </div>
            <div className={` flex flex-col gap-y-2  ${styles.accordionItem}`}>
                <span  className={`text-2xl  relative medium-font cursor-pointer z-10  ${styles.accordionHeading}`} onClick={()=>handleAccordion(3)}>Domestic Distribution</span>
                <span className=" light-font relative  z-10 w-1/3 ">From seamless, “account-less” simple shipping to friction-free COD services, Zajil is committed to making shipping and logistics easy.  </span>
                <Link href="#">
                    <a className='text-sm relative tracking-wide   z-10 mt-4 medium-font underline '>
                        Learn More
                    </a>
                </Link>
                <span className={`relative w-1/3 z-10 ${styles.accordionDivider}`}></span>
            </div>
             

        </div> 
        
        </YellowBack>
  )
}

export default Logistics