// src/components/Counter.tsx

import React from 'react';
import { Text, StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

interface CounterProps {
  count: number;
}

const Counter: React.FC<CounterProps> = ({ count }) => {
  return (
    <Text style={styles.counter}>카운터: {count}</Text>
  );
};

const styles = StyleSheet.create({
  counter: {
    fontSize: height * 0.05,
    marginBottom: height * 0.03,
  },
});

export default Counter;
