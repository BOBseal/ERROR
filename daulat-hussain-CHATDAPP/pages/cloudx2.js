
import React, {useEffect, useState, useContext, useRef} from "react";
import { ChatContext } from '../context/ChatContext';
import { create } from "ipfs-http-client";



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
  const {account ,driveContract, provider} = useContext(ChatContext);
  const [imageSrc, setImageSrc] = useState(null);
  const [IpfsHash,setIpfsHash] = useState("");
  const [ups,Nups] = useState(false);
  //const [isImage, setIsImage] = useState(false);

  const catchFile = (event) => {
    setImageSrc(event.target.files[0]);
  };

  const uploadFil = async () => {
    try {
      if (!imageSrc) {
        return alert("Please select a file to upload");
      }

      const reader = new FileReader();
      reader.readAsArrayBuffer(imageSrc);
      reader.onloadend = async () => {
        const buffer = Buffer.from(reader.result);
        const file = await client.add(buffer, { 
          wrapWithDirectory: true 
        });
       // const ImgHash = `ipfs://${file.data.IpfsHash}`;
        console.log(file.path);
       // setIpfsHash(ImgHash);
        Nups(true);
        alert("file uploaded to IPFS successfully");
      };
    } catch (error) {
      console.error(error);
    }
  };

  const publishAndHandleUpload=async()=>{
    try {
      uploadFil();
    //  uploadFile(IpfsHash));
     // alert("file published to blockchain");
    } catch (error) {
      console.log(error);
      alert("uploaded but publish failed")
    }
  }

  return (
    <div>
        <h1>IPFS IMAGE UPLOADER</h1>

    <div>
      <form>
        <input type='file' onChange={(event)=> catchFile(event)}/> 
      </form>
      
      <button onClick={()=> publishAndHandleUpload()}>SUBMIT</button>
    </div>

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