import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link';
import Image from 'next/image';

const YourComponent = () => (
  <Image
    src="/images/profile.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  />
);

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>LETs GO!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <h1 className="title">
  Welcome to <a href="https://nextjs.org">Next.js!</a>
</h1>
        <Header title="This is my first App" />
        <p className="description">
          And it acutally works. This WebApp is built with next.js
          Am i able to add another section? 

          Where does this go? 

          Is this better to test
        </p>

        
      </main>

      <Footer />
    </div>
  )
}
