import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AuthButton from '../../components/AuthButton';
import styles from './styles';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.textSignIn}>Sign In</Text>

        <View style={styles.textInputView}>
          <Icon name="md-person" size={24} color="white"/>
          <TextInput 
            placeholder="User"
            placeholderTextColor="white"
            style={styles.textInputUser}
          />
        </View>

        <View style={styles.textInputView}>
          <Icon name="md-key" size={24} color="white"/>
          <TextInput 
            placeholder="Password"
            placeholderTextColor="white"
            secureTextEntry={true}
            style={styles.textInputPassword}
          />
          <Icon name="md-eye" size={20} color="white"/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password</Text>
        </TouchableOpacity>

        <View style={{marginTop: 32,}}>
          <AuthButton 
            color="white"
            text="Sign In"
          />
          </View>

        <TouchableOpacity style={styles.footer}>
          <Text style={{color: 'white'}}>New to app?</Text>
          <Text style={{color: '#64d2ff', fontWeight: 'bold'}}>  Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
