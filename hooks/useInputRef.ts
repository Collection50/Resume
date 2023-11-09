import { useRef, ChangeEvent, MutableRefObject } from 'react';

export type Input = {
  id?: string;
  password?: string;
};

export type KeyOf<T> = keyof T;

export function useInputRef(initialValues: Input) {
  const inputRef: MutableRefObject<Input> = useRef<Input>({ ...initialValues });

  const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, value: KeyOf<Input>) => {
    inputRef.current[value] = e.target.value;
  };
  return { inputRef, changeHandler };
}
