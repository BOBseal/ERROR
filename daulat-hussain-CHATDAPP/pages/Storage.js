import {useEffect, useState, useContext} from "react";
import { ChatContext } from '../context/ChatContext';

import React from 'react'

const Storage = () => {
    const {account} = useContext(ChatContext); 

  return (
    <div>Storage</div>
  )
}

export default Storage