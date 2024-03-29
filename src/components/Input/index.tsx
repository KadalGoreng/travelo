import type { InputProps } from "./interfaces";

import clsx from "clsx";
import { useState } from "react";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "./input.module.css";

const Input = ({
  name,
  type,
  label,
  placeholder,
  className,
  register,
  errors,
  required,
  pattern,
}: InputProps) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [inputType, setInputType] = useState(type);
  const isInputError = errors && errors[name];
  const inputErrorHint = `${name}-input-error-hint`;

  const handleEyeClick = () => {
    setHidePassword((prevState) => !prevState);

    if (type === "password" && hidePassword) {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };

  return (
    <label htmlFor={name} className={(clsx(styles.label), className)}>
      <div className="mb-3">{label}</div>

      <input
        {...register(name, { required, pattern })}
        formNoValidate
        type={inputType}
        id={name}
        placeholder={placeholder}
        className={styles.input}
        aria-describeby={inputErrorHint}
      />

      {type === "password" ? (
        <button
          type="button"
          className={clsx(styles.eye, isInputError && styles.eyeError)}
          onClick={handleEyeClick}
        >
          {hidePassword ? (
            <FaEye className="h-6 w-6 text-gray-100" />
          ) : (
            <FaEyeSlash className="h-6 w-6 text-gray-100" />
          )}
        </button>
      ) : null}

      {isInputError ? (
        <span id={inputErrorHint} className="text-xs text-red-100 mt-1 ml-3">
          {errors[name].message}
        </span>
      ) : null}
    </label>
  );
};

export default Input;
