import '../styles/globals.css'
import { ChatAppProvider } from '../context/ChatContext';
import {NavBar} from '../Components/index'

//import { useNetwork } from '@thirdweb-dev/react';



const App =({ Component, pageProps })=> {
  return (
    <div>
    <ChatAppProvider>
     
      <NavBar/>
      <Component {...pageProps} />
    
    </ChatAppProvider>
    </div>
  )
}
export default App
