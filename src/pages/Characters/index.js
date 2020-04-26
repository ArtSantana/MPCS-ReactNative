import React from 'react';
import { View } from 'react-native';
import CharacterSelector from '../../components/CharacterSelector';
import styles from './styles';

export default function Characters() {
  return (
    <View style={styles.container}>
      <CharacterSelector />
    </View>
  );
}
