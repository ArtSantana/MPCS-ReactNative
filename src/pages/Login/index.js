import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AuthButton from '../../components/AuthButton';
import styles from './styles';

export default function Login() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [eye, setEye] = useState('md-eye-off');

  function handleEye() {
    setHidePassword(!hidePassword);
    hidePassword ? setEye('md-eye') : setEye('md-eye-off');
  }

  function navigateTo(page) {
    navigation.navigate(page);
  }

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
            onChangeText={text => setUsername(text)}
          />
        </View>

        <View style={styles.textInputView}>
          <Icon name="md-key" size={24} color="white"/>
          <TextInput 
            placeholder="Password"
            placeholderTextColor="white"
            secureTextEntry={hidePassword}
            style={styles.textInputPassword}
            onChangeText={text => setPassword(text)}
          />
          <Icon name={eye} size={20} color="white" onPress={handleEye}/>
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