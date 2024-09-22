// src/App.tsx

import React, { useReducer } from 'react'; // React 라이브러리와 useReducer 훅 임포트
import { View } from 'react-native'; // React Native의 기본 컴포넌트 임포트
import Counter from './components/Counter'; // Counter 컴포넌트 임포트
import ButtonGroup from './components/ButtonGroup'; // ButtonGroup 컴포넌트 임포트
import styles from './styles'; // 스타일 임포트

// 카운터의 상태와 액션 타입 정의
type State = {
  count1: number; // 첫 번째 카운트
  count2: number; // 두 번째 카운트
  selectedCount: 'count1' | 'count2'; // 선택된 카운트
};

type Action =
  | { type: 'INCREMENT' } // 증가 액션
  | { type: 'DECREMENT' } // 감소 액션
  | { type: 'SQUARE' } // 제곱 액션
  | { type: 'RESET' } // 초기화 액션
  | { type: 'TOGGLE_COUNT'; payload: 'count1' | 'count2' }; // 선택된 카운트 변경

// 리듀서 함수 정의
const countReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        [state.selectedCount]: state[state.selectedCount] + 1, // 선택된 카운트 증가
      };
    case 'DECREMENT':
      return {
        ...state,
        [state.selectedCount]: state[state.selectedCount] - 1, // 선택된 카운트 감소
      };
    case 'SQUARE':
      return {
        ...state,
        [state.selectedCount]: state[state.selectedCount] * state[state.selectedCount], // 선택된 카운트 제곱
      };
    case 'RESET':
      return {
        count1: 0,
        count2: 0,
        selectedCount: state.selectedCount, // 선택된 카운트 유지
      }; // 두 카운트 초기화
    case 'TOGGLE_COUNT':
      return {
        ...state,
        selectedCount: action.payload, // 선택된 카운트 변경
      };
    default:
      return state; // 기본 상태 반환
  }
};

// App 컴포넌트 정의
const App: React.FC = () => {
  const [state, dispatch] = useReducer(countReducer, {
    count1: 0,
    count2: 0,
    selectedCount: 'count1', // 기본적으로 count1 선택
  });

  return (
    <View style={styles.container}>
      <Counter count1={state.count1} count2={state.count2} selectedCount={state.selectedCount} />
      <ButtonGroup
        onIncrement={() => dispatch({ type: 'INCREMENT' })} // 증가 액션 디스패치
        onSquare={() => dispatch({ type: 'SQUARE' })} // 제곱 액션 디스패치
        onDecrement={() => dispatch({ type: 'DECREMENT' })} // 감소 액션 디스패치
        onReset={() => dispatch({ type: 'RESET' })} // 초기화 액션 디스패치
        onToggleCount={(count) => dispatch({ type: 'TOGGLE_COUNT', payload: count })} // 선택된 카운트 변경
      />
    </View>
  );
};

export default App; // App 컴포넌트를 외부로 내보냄
