import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>LETs GO!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="This is my first App" />
        <p className="description">
          And it acutally works. This WebApp is built with next.js
          Am i able to add another section?
             <code>pages/index.js</code>
        </p>

        
      </main>

      <Footer />
    </div>
  )
}
