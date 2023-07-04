import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import axios from 'axios';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleSubmit = () => {
    axios
      .post('http://192.168.1.18:5000/api/authenticate', {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          alert('Status 200 - Login successful');
          // navigation.navigate('Home'); // Uncomment if you want to navigate to the Home screen
        } else {
          throw new Error(res.error);
        }
      })
      .catch((err) => {
        console.error(err);
        alert('Error logging in. Please try again.');
      });
  };

  return (
    <View>
      <Text> Demo Form </Text>
      <View>
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={handleEmailChange}
          required
        />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          value={password}
          onChangeText={handlePasswordChange}
        />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
}
