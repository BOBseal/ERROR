
import React, {useEffect, useState, useContext, useRef} from "react";
import { ChatContext } from '../context/ChatContext';
import { create } from "ipfs-http-client";
import { ethers } from "ethers";
import { DriveAddress,DriveAbi } from "../context/constants";
import { connectToDrive } from "../Utils/apiFeatures";


const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
const projectSecret = process.env.NEXT_PUBLIC_PROJECT_SECRET;

const auth =
  "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");

const client = create({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  apiPath: "/api/v0",
  headers: {
    authorization: auth,
  },
});


const cloudx2 = () => {
  const {account,provider} = useContext(ChatContext);
  const [imageSrc, setImageSrc] = useState(null);
  const [loading,setLoading] = useState(false);
  const [IpfsHash,setIpfsHash] = useState([]);
  const [hash,HashString] = useState();
  const [ups,Nups] = useState(false);
  const [contr,conContra] = useState();
  //const [isImage, setIsImage] = useState(false);

  const catchFile = (event) => {
    setImageSrc(event.target.files[0]);
  };
  const CONtract = async()=>{
    if (account && !contr){
      const driveContract =()=> new ethers.Contract(DriveAddress, DriveAbi, signer);
      try {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = driveContract(signer);
        conContra(contract);
        alert("Connected to Polygon & IPFS");
      } catch (error) {
        console.log(error);
        alert("Connection to StorageBackend failed");
      }
    }
  }

  
  const uploadFil = async () => {
    try {
      if (!imageSrc) {
        return alert("Please select a file to upload");
      }
      const cc = CONtract();
      cc.wait();
      const reader = new FileReader();
      reader.readAsArrayBuffer(imageSrc);
      reader.onloadend = async () => {
        const buffer = Buffer.from(reader.result);
        const file = await client.add(buffer, { 
          wrapWithDirectory: true 
        });
        console.log(file);
        setIpfsHash(file);
        Nups(true);
        const ipfsUri = `${file.cid.toString()}`;
        HashString(ipfsUri);
        return cc
      };
    } catch (error) {
      console.error(error);
      alert("IPFS INTERACTION FAILED")
    }
  };

  const publishAndHandleUpload=async()=>{
    if (ups && hash && account && contr) {
    try {
      const tx = await contr.add(account, hash);
      await tx.wait();
      alert("File published to the smart contract successfully");
    } catch (error) {
      console.log(error);
      alert("uploaded but publish failed")
    }
  }
  }
 

  return (
    <div>
        <h1>IPFS IMAGE UPLOADER</h1>
          <h1>IMPORTANT</h1>
          <p>THE BACKEND OF THIS PAGE IS FACING PROBLEMS, DEV WILL SOLVE IT SOON!!!  </p>
          <p>Files Uploaded will be out of Direct Access by User As for now Only Admin has that Right</p>
          <p>Upload with caution for now as data base is not Segmented for Seperate User Storage, and Dev will not Take any Responsibilty of Lost/Misused/Leaked/Compromised User Data</p>
          <p>Malicious Actors can also Possibly get/Intercept User Uploads and Details as The data is Stored in Temporarily on the Client Side in Unsafe State Variables for now</p>

    <div>
      <form>
        <input type='file' onChange={(event)=> catchFile(event)}/> 
      </form>
      
      <button onClick={()=> (publishAndHandleUpload() && uploadFil())}>SUBMIT</button>
    </div>

    <div>
    {ups && (
      <div>
        <p>IPFS CID: {}</p>
      </div>
    )}</div>
      <div>
        <h2>Share File Access with Friends</h2>
      </div>
      
      <div>
        <h2>See Who Has Access</h2>
      </div>
    </div>
  )
}

export default cloudx2