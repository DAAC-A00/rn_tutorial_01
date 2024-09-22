// src/components/ButtonGroup.tsx
import React from 'react'; // React 라이브러리 임포트
import { View, Button, StyleSheet } from 'react-native'; // React Native의 컴포넌트 임포트

// ButtonGroupProps 인터페이스 정의 - 버튼 클릭 시 호출되는 함수들
interface ButtonGroupProps {
  onIncrement: () => void; // 더하기 버튼 클릭 시 호출되는 함수
  onSquare: () => void; // 제곱하기 버튼 클릭 시 호출되는 함수
  onDecrement: () => void; // 빼기 버튼 클릭 시 호출되는 함수
  onReset: () => void; // 초기화 버튼 클릭 시 호출되는 함수
  onToggleCount: (targetCount: 'count1' | 'count2') => void; // 선택된 카운트 변경 함수
}

// ButtonGroup 컴포넌트 정의
const ButtonGroup: React.FC<ButtonGroupProps> = ({
  onIncrement,
  onSquare,
  onDecrement,
  onReset,
  onToggleCount,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topButtons}>
        <Button title="더하기" onPress={onIncrement} />
        <Button title="제곱하기" onPress={onSquare} />
        <Button title="빼기" onPress={onDecrement} />
      </View>
      <View style={styles.middleButtons}>
        <Button title="카운트 1 선택" onPress={() => onToggleCount('count1')} />
        <Button title="카운트 2 선택" onPress={() => onToggleCount('count2')} />
      </View>
      <View style={styles.bottomButton}>
        <Button title="모두 초기화" onPress={onReset} />
      </View>
    </View>
  );
};

// 스타일 정의
const styles = StyleSheet.create({
  container: {
    flex: 1, // 전체 공간을 사용
    justifyContent: 'space-between', // 버튼 그룹 사이에 공간을 균등하게 배치
    width: '100%',
  },
  topButtons: {
    flexDirection: 'row', // 버튼들을 가로 방향으로 배치
    justifyContent: 'space-around', // 버튼 간의 간격을 균등하게 배치
    marginBottom: 20, // 아래쪽 여백 설정
  },
  middleButtons: {
    flexDirection: 'row', // 버튼들을 가로 방향으로 배치
    justifyContent: 'space-around', // 버튼 간의 간격을 균등하게 배치
    marginVertical: 20, // 위아래 여백 설정
  },
  bottomButton: {
    marginTop: 20, // 위쪽 여백 설정
  },
});

export default ButtonGroup; // ButtonGroup 컴포넌트를 외부로 내보냄
