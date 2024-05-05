import { renderHook, act } from '@testing-library/react';
import useToggleHook from '../hooks/useToggleHook';

test('useToggleHook toggles state correctly', () => {
  
  const initialState = false;
  const { result } = renderHook(() => useToggleHook(initialState));

  act(() => {
    result.current[1]();
  });

  expect(result.current[0]).toEqual(true); 

  act(() => {
    result.current[1](); 
  });

  expect(result.current[0]).toEqual(false); 
});
