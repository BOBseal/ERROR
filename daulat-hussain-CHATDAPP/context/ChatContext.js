import React, {useState , useEffect  } from 'react';
import { useRouter } from 'next/router';
import { CheckIfWalletConnected } from '../Utils/apiFeatures';
import { connectWallet } from '../Utils/apiFeatures';
import { connectingWithContract,connectToDrive} from '../Utils/apiFeatures';
import { ethers } from 'ethers';
import { ThirdwebProvider, ChainId } from '@thirdweb-dev/react';
//import { convertTime } from '../Utils/apiFeatures';


export const ChatContext = React.createContext();
export const ChatAppProvider = ({children}) =>{
   // const title = "Decentrachat";                   //Title??
    const [account , setAccount] = useState("");
    const [userName , setUserName] = useState("");
    const [friendLists , setFriendLists] = useState([]);
    const [friendMsg , setFriendMsg] = useState([]);
    const [loading , setLoading] =useState(false);
    const[userLists , setUserLists] = useState([]);
    const [error, setError] = useState("");
    const [blogs,xx] = useState([]);
    const [currentUserName, setCurrentUserName] = useState("");
    const [currentUserAddress , setCurrentUserAddress] = useState("");
    const router = useRouter();
    const [transactionCount, settransactionCount] = useState("");
    const [getAllTransactions, setTransactions] = useState([]);
    const [Balance, setBalance] = useState('');
    const [usernetId,ns] = useState("");
    //const ChainID = 137;

    const fetchData =async() =>{
        try {
            const contract = await connectingWithContract();
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            const connectAccount = await connectWallet();
            setAccount(connectAccount);
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const getBal= await provider.getBalance(accounts[0]);
            const ball = ethers.utils.formatEther(getBal);
            setBalance(ball);
            //window.location.reload();
           const userName =await contract.getUsername(connectAccount); 
            setUserName(userName);
            const friendLists= await contract.getMyFriendList();
            setFriendLists(friendLists);
            const userList = await contract.getAllAppUsers();
            setUserLists(userList);
            const network = await provider.getNetwork();
            ns(network)
            const r = await contract.readBlogs();
            xx(r);
        } catch (error) {
            setError("You Need to Create Account First");
        }
        
    };


    useEffect(() => {
      fetchData();
    }, [])



    {/*const rdp = async()=>{
        try {
            const c = await connectingWithContract();
            const r = await c.readBlogs();
            setLoading(true);
            await r.wait();
            setLoading(false);
            xx(r);
        } catch (error) {
            console.log("reload")
        }
    }*/}
    const readMessage = async(friendAddress) => {
        try {
            const contract = await connectingWithContract();
            const read = await contract.readMessage( friendAddress );
            setFriendMsg(read);
        } catch (error) {
            setError("No Messages to Show!")
        }
    }

    const createAccount = async ({name }) =>{
        try {
            if (!name) return setError("Name Cannot be Empty")
            const contract = await connectingWithContract(); 
            const getCreatedUser = await contract.createAccount(name);
            //const userName =await contract.getUsername(connectAccount); 
            //setUserName(userName);
            setLoading(true);
            await getCreatedUser.wait();
            setLoading(false);
            window.location.reload();
        } catch (error) {
            setError("Error Encountered Please Reload Browser and Retry!");
        }
    }

    const addFriend = async({ accountAddress , name})=>{
        try {
            if( !name||!accountAddress ) return setError("Incorrect Data Provided!")
            const contract = await connectingWithContract();
            const addFrend = await contract.addFriend(accountAddress,name);
            setLoading(true);
            await addFrend.wait();
            setLoading(false);
            router.push('/');
            window.location.reload();
        } catch (error) {
            setError("OOPS Something Went Wrong While Adding the User");
        }
    }

    const sendMessage = async({address , msg })=> {
        try {
            if(!address || !msg) return setError("Message Cannot be Empty, Type Atleast one Character")
            const contract = await connectingWithContract();
            const msgCont = await contract.sendMessage(address , msg);
            setLoading(true);
            await msgCont.wait();
            setLoading(false);
            window.location.reload();
        } catch (error) {
            setError ("REVERTED : Error While Sending Message!! , Reload and Send Again!")
        }
    }

    const readUser =async(useraddress) =>{
        const contract = await connectingWithContract();
        const userName = await contract.getUsername(useraddress);
        setCurrentUserName(userName);
        setCurrentUserAddress(useraddress);

    } 

    const sendMatic = async(address, ether , message , keyword)=>{
        try {
            if (account){
            const contract = await connectingWithContract();
          //  const send = await contract.sendMatic(address,ether,message,keyword)
            const unFormatedPrice = ethers.utils.parseEther(ether);
            
            await ethereum.request({
                method: 'eth_sendTransaction',
                params: [
                   { from : account,
                    to: address,
                    gas: '400000',
                    value: unFormatedPrice._hex}
                ]
            })
            const send = await contract.sendMatic(address,unFormatedPrice,message,keyword);
            setLoading(true);
            await send.wait();
            setLoading(false);
            const transactionCount = await contract.getTransactionCount();
            settransactionCount(transactionCount.toNumber());
            window.location.reload();
        }  
        } catch (error) {
            setError("Tranasction Failed, Please Retry");
        }
    }

    const allTransactions =async()=>{
        try {
            if (account){
            const contract = await connectingWithContract();
            const userTransactions =await contract.getAllTransactions();
            const readTrans= userTransactions.map((transaction)=>( {
                addressTo: transaction.reciever,
                addressFrom: transaction.sender,
                timestamp: new Date(transaction.timestamp.toNumber()*1000).toLocaleString(),
                message: transaction.ping,
                amount:parseInt(transaction.amount._hex)/10 **18,
                tag: transaction.keyword
            }));
            setTransactions(readTrans);
            }else{
                console.log("Reload Window");
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    const PostToBlackBoard= async(author , title , postcontent)=>{
        try {
            const c  = await connectingWithContract();
            const post = await c.writeBlog(author, title ,postcontent);
            setLoading(true);
            await post.wait();
            setLoading(false);
            window.location.reload();
            return post;
        } catch (error) {
            setError("Writing to the Blackboard failed");
        }        
    }
    const sendLike = async(index)=>{
        //const index = 0;
        try {
            const co = await connectingWithContract();
           const a = await co.sendLike(index, {value: ethers.utils.parseEther('0.5')});
           setLoading(true);
           await a.wait();
           setLoading(false);
           window.location.reload();
        } catch (error) {
            setError("Like Function Reverted");
        }
    }

    return(<ThirdwebProvider desiredChainId={ChainId.Mumbai}
        >
        <ChatContext.Provider value={{readMessage ,sendMatic, createAccount , addFriend , sendMessage , readUser,CheckIfWalletConnected,setUserName,
            account,userName,friendLists,friendMsg,userLists,loading,error,currentUserName ,currentUserAddress, connectWallet,Balance,transactionCount,getAllTransactions,
            allTransactions,usernetId,PostToBlackBoard,blogs,sendLike
        }}>
            {children}
        </ChatContext.Provider >
        </ThirdwebProvider>
    )
};