import '../styles/globals.css'
import { ChatAppProvider } from '../context/ChatContext';
import {NavBar} from '../Components/index'

const App =({ Component, pageProps })=> {
  return (
    <div>
    <ChatAppProvider>
      <NavBar/>
      <Component {...pageProps} />
    </ChatAppProvider>
    </div>
  );
}
export default App
