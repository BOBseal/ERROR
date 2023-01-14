import '../styles/globals.css'
import { ChatAppProvider } from '../context/ChatContext';
import {NavBar} from '../Components/index'
import { ThirdwebProvider, ChainId } from '@thirdweb-dev/react';



const App =({ Component, pageProps })=> {
  return (
    <div><ThirdwebProvider desiredChainId={ChainId.Mumbai}>
    <ChatAppProvider>
      <NavBar/>
      <Component {...pageProps} />
    </ChatAppProvider>
    </ThirdwebProvider>
    </div>
  )
}
export default App
