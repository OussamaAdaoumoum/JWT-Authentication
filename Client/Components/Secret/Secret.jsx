import { View, Text, Button } from "react-native";
import axios from "axios";
import { useState,useEffect } from 'react';



export default function Secret({navigation}) {
    const [message, setMessage]= useState("Loading...");


    useEffect(() => {

    //GET message from server using fetch api
    axios.get('http://192.168.1.18:5000/api/Secret')
    .then(res => setMessage(res.data))
    .catch(error => console.log(error));
    },[]);
    return(<>
    <Text>Secret Screen Message</Text>
    <Text>
        {message}
    </Text>

    <Button title="Home" onPress={() =>
        navigation.navigate('Home')}>
        
    </Button>
        
    
    </>);
}
