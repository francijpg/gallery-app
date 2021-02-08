import React, { FC, InputHTMLAttributes } from "react";
import { InputGroup, Label, InputStyle } from "./InputStyle";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: FC<InputProps> = ({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  multiple,
}) => {
  return (
    <InputGroup>
      <Label htmlFor={name}>{label}</Label>
      <InputStyle
        className="input"
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        id={name}
        onChange={onChange}
        autoComplete="off"
        required
        multiple={multiple}
      />
    </InputGroup>
  );
};

export default Input;
