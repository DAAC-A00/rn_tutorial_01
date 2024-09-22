// src/styles.ts

import { StyleSheet, Dimensions } from 'react-native'; // StyleSheet 및 Dimensions 임포트

// 화면 크기를 가져옴
const { height } = Dimensions.get('window');

// 스타일 정의
const styles = StyleSheet.create({
  container: {
    flex: 1, // 전체 화면을 사용하도록 설정
    justifyContent: 'center', // 수직 중앙 정렬
    alignItems: 'center', // 수평 중앙 정렬
    padding: 20, // 여백 추가
  },
});

export default styles; // 스타일 객체를 외부로 내보냄
