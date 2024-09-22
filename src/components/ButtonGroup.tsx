// src/components/ButtonGroup.tsx

import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

interface ButtonGroupProps {
  onIncrement: () => void;
  onSquare: () => void;
  onDecrement: () => void;
  onReset: () => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ onIncrement, onSquare, onDecrement, onReset }) => {
  return (
    <View style={styles.buttonContainer}>
      <Button title="더하기" onPress={onIncrement} />
      <Button title="제곱하기" onPress={onSquare} />
      <Button title="빼기" onPress={onDecrement} />
      <Button title="초기화하기" onPress={onReset} style={styles.resetButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
});

export default ButtonGroup;
