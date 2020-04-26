import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default function CharacterSelector() {
  return (
    <View style={styles.container}>
      <View style={styles.topLine}>
        <Text style={styles.text}>Name: Obelisk</Text>
        <Text style={styles.text}>Level: 16</Text>
      </View>
      <View style={styles.bottomLine}>
        <Text style={styles.text}>Classe: Bárbaro</Text>
        <Text style={styles.text}>Raça: Humano</Text>
      </View>
    </View>
  );
}
