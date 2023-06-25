import { ref, type Ref } from "vue";

export default function useState<T>(
  initialState: T
): [Ref<T>, (newState: T) => void] {
  const state = ref<T>(initialState) as Ref<T>;

  const setState = (newState: T): void => {
    state.value = newState;
  };

  return [state, setState];
}
