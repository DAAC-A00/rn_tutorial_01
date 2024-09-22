// src/App.tsx

import React, { useState } from 'react';
import { View } from 'react-native';
import Counter from './components/Counter';
import ButtonGroup from './components/ButtonGroup';
import styles from './styles';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const reset = () => setCount(0);
  const increment = () => setCount(prevCount => prevCount + 1);
  const square = () => setCount(prevCount => prevCount * prevCount);
  const decrement = () => setCount(prevCount => prevCount - 1);

  return (
    <View style={styles.container}>
      <Counter count={count} />
      <ButtonGroup
        onIncrement={increment}
        onSquare={square}
        onDecrement={decrement}
        onReset={reset}
      />
    </View>
  );
};

export default App;
