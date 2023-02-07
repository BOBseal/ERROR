import React, { useState, useContext,useEffect } from 'react'
import axios from "axios";
import { ethers } from "ethers";
import {useStorageUpload} from '@thirdweb-dev/react';
import { DriveAbi, DriveAddress} from '../context/constants';
import { ChatContext } from '../context/ChatContext'
 const todo =()=> {
  const { account,connectToDrive } = useContext(ChatContext);
  const [file, setFile] = useState(null);
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [fileName, setFileName] = useState("No Image Selected");
  const [onOff , offOn] = useState(false);
  const [onOffs , soffOn] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const loadProvider = async () => {
      if (provider) {
        await provider.send("eth_requestAccounts", []);
        const contract = await connectToDrive();
        //console.log(contract);
        setContract(contract);
        setProvider(provider);
      } else {
        console.error("Metamask is not installed");
      }
    };
    const accessList = async () => {
      const addressList = await contract.shareAccess();
      let select = document.querySelector("#selectNumber");
      const options = addressList;

      for (let i = 0; i < options.length; i++) {
        let opt = options[i];
        let e1 = document.createElement("option");
        e1.textContent = opt;
        e1.value = opt;
        select.appendChild(e1);
      }
    };
    provider && loadProvider() && contract && accessList() && getdata();
  }, [contract]);
 
 
  const sharing = async () => {
    const address = document.querySelector(".address").value;
    await contract.allow(address);
    setModalOpen(false);
  };
 

  const getdata = async () => {
    let dataArray;
    const Otheraddress = document.querySelector(".address").value;
    try {
      if (Otheraddress) {
        dataArray = await contract.display(Otheraddress);
        console.log(dataArray);
      } else {
        dataArray = await contract.display(account);
      }
    } catch (e) {
      alert("You don't have access");
    }
    const isEmpty = Object.keys(dataArray).length === 0;

    if (!isEmpty) {
      const str = dataArray.toString();
      const str_array = str.split(",");
      // console.log(str);
      // console.log(str_array);
      const images = str_array.map((item, i) => {
        return (
          <a href={item} key={i} target="_blank">
            <img
              key={i}
              src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`}
              alt="new"
              className="image-list"
            ></img>
          </a>
        );
      });
      setData(images);
    } else {
      alert("No image to display");
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: `
            b9364848f1f19c741cf5`,
            pinata_secret_api_key: `
            9ea2e90f1154187652fd176649cc551606975d60e4723a86931640fe9f4466ae`,
            "Content-Type": "multipart/form-data",
          },
        });
        const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
        //const signer = contract.connect(provider.getSigner());
        const signer = contract.connect(provider.getSigner());
        signer.add(account, ImgHash);
      } catch (e) {
        alert("Unable to upload image to Pinata");
      }
    }
    alert("Successfully Image Uploaded");
    setFileName("No image selected");
    setFile(null);
  };
  const retrieveFile = (e) => {
    const data = e.target.files[0]; //files array of files object
    // console.log(data);
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFile(e.target.files[0]);
    };
    setFileName(e.target.files[0].name);
    e.preventDefault();
  };
  return (
    <div>
      <div>
      <button onClick={()=> offOn(true)}>UPLOAD</button>
        { onOff == true ? <div>    
          <form className="form" onSubmit={handleSubmit}>
        <input
              disabled={!account}
              type="file"
              id="file-upload"
              name="data"
              onChange={retrieveFile}
            />
            <button type="submit" className="upload" disabled={!file}>
              Upload File
            </button>
            </form>
            <button onClick={()=> offOn(false)}>Cancel</button>
        </div> :"" }
        </div>

          <div>
          <button onClick={()=> soffOn(true)}>Share Files</button>

          {onOffs==true?<div>
        <div >
          <div>Share with</div>
          <div >
            <input
              type="text"
              className="address"
              placeholder="Enter Address"
            ></input>
          </div>
          <form id="myForm">
            <select id="selectNumber">
              <option>People With Access</option>
            </select>
          </form>
          <div>
            <button
              onClick={() => {
                soffOn(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            <button onClick={() => sharing()}>Share</button>
          </div>
        </div>
      </div>: ""}
          </div>

          <div>
          <div >{data}</div>
      <input
        type="text"
        placeholder="Enter Address"
        className="address"
      ></input>
      <button className="center button" onClick={getdata}>
        Get Data
      </button>
          </div>
    </div>
  )
}
export default todo