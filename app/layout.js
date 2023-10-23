import Footer from './(component)/footer/footer'
import AOS from 'aos'
import './globals.css'



export default function RootLayout({ children }) {
  return (
    <>
    <html >
      <head>
        {/* aso css link */}
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        {/* <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/> */}

      </head>
      <body >
        {children}      
      <Footer/>
{/* aos link script */}
<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
{/* <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script> */}

  <script>
    AOS.init();
  </script>
        </body>
  

    </html>
    </>
  )
}
