// src/components/Counter.tsx

import React from 'react'; // React 라이브러리 임포트
import { Text, StyleSheet, Dimensions } from 'react-native'; // React Native의 컴포넌트 임포트

// 화면 크기를 가져옴
const { height } = Dimensions.get('window');

// CounterProps 인터페이스 정의 - 카운터 값
interface CounterProps {
  count1: number; // 첫 번째 카운터 값
  count2: number; // 두 번째 카운터 값
  selectedCount: 'count1' | 'count2'; // 선택된 카운터
}

// Counter 컴포넌트 정의
const Counter: React.FC<CounterProps> = ({ count1, count2, selectedCount }) => {
  return (
    <>
      <Text style={selectedCount === 'count1' ? styles.boldCounter : styles.counter}>
        카운터 1: {count1}
      </Text>
      <Text style={selectedCount === 'count2' ? styles.boldCounter : styles.counter}>
        카운터 2: {count2}
      </Text>
    </>
  );
};

// 스타일 정의
const styles = StyleSheet.create({
  counter: {
    fontSize: height * 0.05, // 화면 높이에 비례하여 글자 크기 설정
    marginBottom: height * 0.03, // 아래쪽 여백 설정
  },
  boldCounter: {
    fontSize: height * 0.05, // 화면 높이에 비례하여 글자 크기 설정
    marginBottom: height * 0.03, // 아래쪽 여백 설정
    fontWeight: 'bold', // 볼드체로 설정
  },
});

export default Counter; // Counter 컴포넌트를 외부로 내보냄
