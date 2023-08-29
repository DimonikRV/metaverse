export const Button = ({ children, ...props }) => {
  console.log(props);
  return <button {...props}>{children}</button>;
};
