// App.tsx

// 필요한 라이브러리와 컴포넌트를 임포트합니다.
import React, { useState } from 'react'; // React와 useState 훅을 임포트합니다.
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native'; // React Native의 컴포넌트를 임포트합니다.

// 화면 크기를 가져옵니다.
const { width, height } = Dimensions.get('window');

const App: React.FC = () => { // App 컴포넌트를 정의합니다.
  const [count, setCount] = useState<number>(0); // 카운터의 초기값을 0으로 설정합니다.

  // 초기화 버튼을 눌렀을 때 호출되는 함수입니다.
  const reset = () => {
    setCount(0); // 카운터의 초기값인 0으로 설정합니다.
  };

  // 더하기 버튼을 눌렀을 때 호출되는 함수입니다.
  const increment = () => {
    setCount(count + 1); // 현재 카운터 값에 1을 더합니다.
  };

  // 제곱하기 버튼을 눌렀을 때 호출되는 함수입니다.
  const square = () => {
    setCount(count * count); // 현재 카운터 값을 제곱합니다.
  };

  // 빼기 버튼을 눌렀을 때 호출되는 함수입니다.
  const decrement = () => {
    setCount(count - 1); // 현재 카운터 값에서 1을 뺍니다.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>카운터: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="더하기" onPress={increment} />
        <Button title="제곱하기" onPress={square} />
        <Button title="빼기" onPress={decrement} />
      </View>
      <View style={styles.resetButtonContainer}>
        <Button title="초기화하기" onPress={reset} />
      </View>
    </View>
  );
};

// 스타일을 정의하는 객체입니다.
const styles = StyleSheet.create({
  container: { // 전체 컨테이너 스타일
    flex: 1, // 전체 화면을 사용하도록 설정
    justifyContent: 'center', // 수직 중앙 정렬
    alignItems: 'center', // 수평 중앙 정렬
    padding: 20, // 여백 추가
  },
  counter: { // 카운터 텍스트 스타일
    fontSize: height * 0.05, // 화면 높이에 비례하여 글자 크기 조정
    marginBottom: height * 0.03, // 아래쪽 여백을 화면 높이에 비례하여 조정
  },
  buttonContainer: { // 버튼 컨테이너 스타일
    flexDirection: 'row', // 버튼들을 가로 방향으로 배치
    justifyContent: 'space-around', // 버튼들 사이의 간격을 고르게 배치
    width: '100%', // 컨테이너 너비를 100%로 설정
    marginBottom: height * 0.03, // 아래쪽 여백을 화면 높이에 비례하여 조정
  },
  resetButtonContainer: { // 초기화 버튼을 위한 스타일
    width: '100%', // 초기화 버튼 너비를 100%로 설정
  },
});

export default App; // App 컴포넌트를 외부로 내보냅니다.
