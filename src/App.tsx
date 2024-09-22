// src/App.tsx

import React, { useState } from 'react'; // React 라이브러리와 useState 훅 임포트
import { View } from 'react-native'; // React Native의 기본 컴포넌트 임포트
import Counter from './components/Counter'; // Counter 컴포넌트 임포트
import ButtonGroup from './components/ButtonGroup'; // ButtonGroup 컴포넌트 임포트
import styles from './styles'; // 스타일 임포트

// App 컴포넌트 정의
const App: React.FC = () => {
  const [count, setCount] = useState<number>(0); // 카운터의 초기값을 0으로 설정

  // 카운터 조작 함수들 정의
  const reset = () => setCount(0); // 카운터 초기화 함수
  const increment = () => setCount(prevCount => prevCount + 1); // 카운터 증가 함수
  const square = () => setCount(prevCount => prevCount * prevCount); // 카운터 제곱 함수
  const decrement = () => setCount(prevCount => prevCount - 1); // 카운터 감소 함수

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

export default App; // App 컴포넌트를 외부로 내보냄
