import '../styles/globals.css'
import { ChatAppProvider } from '../context/ChatContext';
import {NavBar} from '../Components/index'
import { ThirdwebProvider, ChainId } from '@thirdweb-dev/react';
//import { useNetwork } from '@thirdweb-dev/react';



const App =({ Component, pageProps })=> {
  return (
    <div><ThirdwebProvider desiredChainId={ChainId.Mumbai}
    sdkOptions={{gasless : { openzeppelin: { relayerUrl :
      'https://api.defender.openzeppelin.com/autotasks/a6b4a873-d6dd-4428-97d3-8439a611ca08/runs/webhook/106c6781-828e-4cdb-b52a-a701e67bc1b3/P65B1JiFmaawTzrPQteThi'
            
      ,},},}}
    >
    <ChatAppProvider>
      <NavBar/>
      <Component {...pageProps} />
    </ChatAppProvider>
    </ThirdwebProvider>
    </div>
  )
}
export default App
