import { ethers } from "ethers";
import Web3Modal from "web3modal";
import {ChatAppAddress , ChatAppAbi ,DriveAbi ,DriveAddress} from '../context/constants';

const ChainID = 137;

export const CheckIfWalletConnected = async()=> {
   // const [bal, setBal]
    try {
        if(!window.ethereum) return console.log("INSTALL METAMASK OR WEB3-Wallet");
        const accounts = await window.ethereum.request({
            method: "eth_accounts",
        });
        const firstAccount = accounts[0];
       // const provider = new ethers.providers.Web3Provider(window.ethereum);
       // const getBal= await provider.getBalance(accounts[0]);
      //  const ball = ethers.utils.formatEther(getBal);
        return firstAccount; 
    } catch (error) {
        console.log(error);
    }
  //  window.location.reload()
};

export const connectWallet = async()=> {
    try {
        if(!window.ethereum) return console.log("INSTALL METAMASK OR WEB3-Wallet");
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        const firstAccount = accounts[0];
       // window.location.reload()
       return firstAccount;
    } catch (error) {
        console.log(error);
    }
   
}

const fetchContract = (signerOrProvider)=>
  new ethers.Contract(ChatAppAddress , ChatAppAbi , signerOrProvider);


export const connectingWithContract = async()=>{
    try {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);
        return contract;
    } catch (error) {
        console.log(error);
    }
}  


const fetchDrive = (signerOrProvider)=>new ethers.Contract(DriveAddress,DriveAbi,signerOrProvider);


export const connectToDrive= async()=>{
    try {
        const Modal = new web3modal();
        const cssd = await web3modal.connect();
        const prod =  new ethers.providers.Web3Provider(cssd);
        const sig = prod.getSigner();
        const ct = fetchDrive(signer);
        return ct;
    } catch (error) {
       console.log(error); 
    }
}
export const convertTime = (time) => {
    const newTime = new Date(time *1000);

    const realTime = newTime.toLocaleString();

    return realTime;
}