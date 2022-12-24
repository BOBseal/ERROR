import { getSession } from 'next-auth/react';
import Head from 'next/head'
import Image from 'next/image'
import AuthPAGE from './login'


const styl ={ 
  pgbg:`bg-[#EBDFFD] h-screen w-screen flex items-center align-center justify-center flex-col`,
  loginbox :`h-32 w-80 bg-[#54E0FF] rounded-full flex items-center justify-center align-center font-bold text-3xl lg:w-1/3 border-8 border-[#9d9ce3] drop-shadow-lg hover:scale-105 ease-in-out duration-300 lg:text-4xl cursor-pointer hover:text-gray-200 text-red-800`,                    
}

export default function Home() {
const isAuthed = false;

  return (
    <div className=' bg-cyan-200/70 relative h-screen'>
      <Head>
        <title>BOB CHAT</title>
        <meta name="description" content="A CHAT APP" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex items-center justify-center'>
        ALLAHUAKBAR
      </main>
    </div>
  )
}

export async function getServerSideProps (context){
  const session = await getSession(context);
  if (!session) {
    return{
      redirect : {
        destination: './login',
        permanent: false,
      },
    };
  }
  return {
    props : { user: session.user}
  }
}
