import { View, Text } from "react-native";
import axios from "axios";
import { useEffect, useState } from 'react';



export default function HomeScreen(){
    const [message, setMessage]= useState("Loading...");


    useEffect(()=>{
    //GET message from server using fetch api
    axios.get('http://192.168.1.18:5000/api/home')
    .then(res => setMessage(res.data))
    .catch(error => console.log(error));
    },[]);

    return(<>
    <Text>Home Screen Message</Text>
    <Text>
        {message}
    </Text>
        
    
    </>);
}