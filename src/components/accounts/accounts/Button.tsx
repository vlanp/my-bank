const Button = ({ children }: { children: string }) => {
  return (
    <div>
      <button name={children}>SEE MORE</button>
    </div>
  );
};

export default Button;
