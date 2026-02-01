import { FieldDescription } from "@/components/ui/field";
import { getFieldError, IInputErrorState } from "./formError";

interface InputFieldErrorProps {
  field: string;
  state: IInputErrorState;
}

const InputFieldError = ({ field, state }: InputFieldErrorProps) => {
  if (getFieldError(field, state)) {
    return (
      <FieldDescription className="text-red-600">
        {getFieldError(field, state)}
      </FieldDescription>
    )
  }
}

export default InputFieldError