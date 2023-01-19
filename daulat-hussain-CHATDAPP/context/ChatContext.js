import React, {useState , useEffect  } from 'react';
import { useRouter } from 'next/router';

import { CheckIfWalletConnected } from '../Utils/apiFeatures';
import { connectWallet } from '../Utils/apiFeatures';
import { connectingWithContract } from '../Utils/apiFeatures';
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

    const [currentUserName, setCurrentUserName] = useState("");
    const [currentUserAddress , setCurrentUserAddress] = useState("");
    const router = useRouter();


    const fetchData =async() =>{
        try {
            const contract = await connectingWithContract();
            const connectAccount = await connectWallet();
            setAccount(connectAccount);
           const userName =await contract.getUsername(connectAccount); 
            setUserName(userName);
            const friendLists= await contract.getMyFriendList();
            setFriendLists(friendLists);
            const userList = await contract.getAllAppUsers();
            setUserLists(userList);
        } catch (error) {
            setError("You Need to Create Account First");
        }
    };

    useEffect(()=> {
        fetchData();
    },[]);

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

    const sendMessage = async({msg , address })=> {
        try {
            if(msg || address) return setError("Message Cannot be Empty, Type Atleast one Character")
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

    return(
        <ChatContext.Provider value={{readMessage , createAccount , addFriend , sendMessage , readUser,CheckIfWalletConnected,setUserName,
            account,userName,friendLists,friendMsg,userLists,loading,error,currentUserName ,currentUserAddress, connectWallet,
        }}>
            {children}
        </ChatContext.Provider >
    )
};