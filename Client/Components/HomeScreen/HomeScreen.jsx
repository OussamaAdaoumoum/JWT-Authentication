import { View, Text, Button } from "react-native";
import axios from "axios";
import { useEffect, useState } from 'react';
import Secret from "../Secret/Secret";


export default function HomeScreen({navigation}){
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
    
    <Button title="Secret" onPress={() =>
        navigation.navigate('Secret')}>
        
    </Button>
    <Button title="Login" onPress={() =>
        navigation.navigate('Login')}>
        
    </Button>
    

        
    
    </>);
}