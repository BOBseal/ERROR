
import { useState , useEffect , useAmp } from "react"
import { InjectedConnector } from 'wagmi/connectors/injected';
import { signIn } from 'next-auth/react';
import { useAccount, useConnect, useSignMessage, useDisconnect } from 'wagmi';
import { useRouter } from 'next/router';
import { useAuthRequestChallengeEvm } from '@moralisweb3/next';
import axios from "axios";

 export const styl ={ 
  pgbg:`bg-[#EBDFFD] h-screen w-screen flex items-center align-center justify-center flex-col`,
  loginbox :`h-32 w-80 bg-[#54E0FF] rounded-full flex items-center justify-center align-center font-bold text-3xl lg:w-1/3 border-8 border-[#9d9ce3] drop-shadow-lg hover:scale-105 ease-in-out duration-300 lg:text-4xl cursor-pointer hover:text-gray-200 text-red-800 animate-pulse`,                    
}

function AuthPAGE () {
  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { requestChallengeAsync } = useAuthRequestChallengeEvm();
  const { push } = useRouter();
  const handleAuth = async () => {
    if (isConnected) {
        await disconnectAsync();
    }

    const { account, chain } = await connectAsync({ connector: new InjectedConnector() });

   const userData = { address: account, chainId: chain.id , network: 'evm' };
   const {data}= await axios.post('/api/auth/request-message', userData ,{
     headers:{
       'content-type': 'application/json',
     },
   }) ;
    const message = data.message;
    const signature = await signMessageAsync({ message });
    const { url } = await signIn('credentials', { message, signature, redirect: false, callbackUrl: '/' });
    push(url);
};
    const [] = useState();
  return (<div className={styl.pgbg}>
           <div className={styl.loginbox} onClick={()=>handleAuth()}>
          ENTER       WORLD 
           </div>
  </div>
  )
}

export default AuthPAGE 