import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <div>
      <button> {props.children}</button>
    </div>
  );
};

export default Button;
