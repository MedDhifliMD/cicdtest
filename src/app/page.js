import Head from 'next/head'

export default function Home() {
  return (
       <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:"0px"}}>
        <h2 style={{fontFamily:"sans-serif",fontSize:"50px",fontWeight:"600"}}>Work Automation in Software Engineering</h2>
        </div>
      </main>
    </>
  )
}
