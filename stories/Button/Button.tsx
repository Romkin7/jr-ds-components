import React, { ReactNode, FC } from "react";
import styles from "./Button.module.scss";
import clsx from "clsx";

/**
 * Primary UI component for user interaction
 */
export type ButtonType = "button" | "submit" | "reset";
export type ButtonVariant = "default" | "success" | "danger" | "warning";
export type ButtonSize = "M" | "S";
export type BorderRadius = "s" | "m" | "l" | "circle";
export interface IButton {
  /**
   * Sets Button type:
   * ButtonType = "button" | "submit" | "reset";
   */
  type: ButtonType;
  /**
   * Sets Button variant:
   * ButtonVariant = "default" | "success" | "danger" | "warning";
   */
  variant: ButtonVariant;
  /**
   * Sets Button size:
   * ButtonSize = "M" | "S";
   */
  size: ButtonSize;
  /**
   * Sets Button border radius:
   * BorderRadius = "s" | "m" | "l" | "circle";
   */
  borderRadius: BorderRadius;
  /**
   * Sets Button to disabled
   */
  disabled?: boolean;
  /**
   * Sets children content to the button.
   */
  children: ReactNode | null;
}
const Button: FC<IButton> = ({
  variant,
  type,
  size,
  borderRadius,
  disabled = false,
  children,
  ...props
}) => {
  const buttonStyles = clsx({
    [styles["button--disabled"]]: disabled,
    [styles.button]: true,
    [styles[`button--${variant}`]]: true,
    [styles[`button--${size}`]]: true,
    [styles[`button--borderRadius__${borderRadius}`]]: true,
  });
  return (
    <button type={type} disabled={disabled} className={buttonStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;
