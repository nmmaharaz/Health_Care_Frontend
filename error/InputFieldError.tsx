import { getFieldError, IInputErrorState } from "./formError";

interface InputFieldErrorProps {
  field: string;
  state: IInputErrorState;
}

const InputFieldError = ({ field, state }: InputFieldErrorProps) => {
  if (getFieldError(field, state)) {
    return (
      <label className="text-red-600">
        {getFieldError(field, state)}
      </label>
    )
  }
}

export default InputFieldError