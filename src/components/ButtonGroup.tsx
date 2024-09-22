// src/components/ButtonGroup.tsx

import React from 'react'; // React 라이브러리 임포트
import { View, Button, StyleSheet } from 'react-native'; // React Native의 컴포넌트 임포트

// ButtonGroupProps 인터페이스 정의 - 버튼 클릭 시 호출되는 함수들
interface ButtonGroupProps {
  onIncrement: () => void; // 더하기 버튼 클릭 시 호출되는 함수
  onSquare: () => void; // 제곱하기 버튼 클릭 시 호출되는 함수
  onDecrement: () => void; // 빼기 버튼 클릭 시 호출되는 함수
  onReset: () => void; // 초기화 버튼 클릭 시 호출되는 함수
  onMultiply: () => void; // 곱하기 버튼 클릭 시 호출되는 함수 (추가)
}

// ButtonGroup 컴포넌트 정의
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

// 스타일 정의
const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row', // 버튼들을 가로 방향으로 배치
    justifyContent: 'space-around', // 버튼 간의 간격을 균등하게 배치
    width: '100%', // 컨테이너 너비를 100%로 설정
    marginBottom: 20, // 아래쪽 여백 설정
  },
});

export default ButtonGroup; // ButtonGroup 컴포넌트를 외부로 내보냄
