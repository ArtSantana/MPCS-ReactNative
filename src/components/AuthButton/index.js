import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function AuthButton(props) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.color,
        alignSelf: 'center',
        width: '90%',
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        height: 48
      }}
      onPress={props.onPress}
    >
      <Text>{props.text}</Text>
    </TouchableOpacity>
  );
}
