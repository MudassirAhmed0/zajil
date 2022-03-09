import Head from 'next/head' 
import Layout from '../Components/Layout/Layout'
import ShipmentDetails from '../Components/Shipment/ShipmentDetails'


const shipment = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout  >
          <ShipmentDetails/>
    
      </Layout>
    
    </div>
  )
}

export default shipment