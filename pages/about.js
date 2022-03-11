import Head from 'next/head' 
import Counter from '../Components/About/Counter'
import Hero from '../Components/About/Hero'
import History from '../Components/About/History'
import RightImage from '../Components/About/RightImage'
import Vision from '../Components/About/Vision'
import Blue from '../Components/Blue'
import Layout from '../Components/Layout/Layout'
import styles from '../styles/About.module.css'

const about = () => {
  return (
      <>
    <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
    </Head> 
    <Layout>
        <Hero/>
        <Blue boxShadowNone={styles.boxShadowNone}>
            <RightImage/>
            <Counter/>
        </Blue>
        <Vision/>
        <Blue about2>
            <History/> 

        </Blue>
    </Layout>
      </>
  )
}

export default about