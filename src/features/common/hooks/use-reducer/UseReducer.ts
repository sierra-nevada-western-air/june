import type { Ref } from "vue";
import useState from "../use-state/UseState";

export default function useReducer<T, K>(
  reducer: (currentState: T, action: K) => T,
  defaultState: T
): [Ref<T>, (action: K) => void] {
  const [state, setState] = useState<T>(defaultState);

  const dispatcher = (action: K): void => {
    setState(reducer(state.value, action));
  };

  return [state, dispatcher];
}
