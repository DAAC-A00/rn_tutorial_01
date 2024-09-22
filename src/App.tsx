// src/App.tsx

import React, { useReducer } from 'react'; // React 라이브러리와 useReducer 훅 임포트
import { View } from 'react-native'; // React Native의 기본 컴포넌트 임포트
import Counter from './components/Counter'; // Counter 컴포넌트 임포트
import ButtonGroup from './components/ButtonGroup'; // ButtonGroup 컴포넌트 임포트
import styles from './styles'; // 스타일 임포트

// 카운터의 상태와 액션 타입 정의
type State = { count: number }; // 상태 타입 정의
type Action =
  | { type: 'INCREMENT' } // 증가 액션
  | { type: 'DECREMENT' } // 감소 액션
  | { type: 'SQUARE' } // 제곱 액션
  | { type: 'RESET' }; // 초기화 액션

// 리듀서 함수 정의
const countReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }; // 카운터 증가
    case 'DECREMENT':
      return { count: state.count - 1 }; // 카운터 감소
    case 'SQUARE':
      return { count: state.count * state.count }; // 카운터 제곱
    case 'RESET':
      return { count: 0 }; // 카운터 초기화
    default:
      return state; // 기본 상태 반환
  }
};

// App 컴포넌트 정의
const App: React.FC = () => {
  const [state, dispatch] = useReducer(countReducer, { count: 0 }); // useReducer 훅 사용

  return (
    <View style={styles.container}>
      <Counter countNum={state.count} />
      <ButtonGroup
        onIncrement={() => dispatch({ type: 'INCREMENT' })} // 증가 액션 디스패치
        onSquare={() => dispatch({ type: 'SQUARE' })} // 제곱 액션 디스패치
        onDecrement={() => dispatch({ type: 'DECREMENT' })} // 감소 액션 디스패치
        onReset={() => dispatch({ type: 'RESET' })} // 초기화 액션 디스패치
      />
    </View>
  );
};

export default App; // App 컴포넌트를 외부로 내보냄
