interface ChildProps {
  color: string;
  onClick: () => void;
}

/* Different ways to consume props */

// 1st way
export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

// 2nd way (ideal appraoch)
export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
  return <div>{color}</div>;
};
