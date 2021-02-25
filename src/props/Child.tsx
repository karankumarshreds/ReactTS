interface ChildProps {
  color: string;
}

/* Different ways to consume props */

// 1st way
export const Child = ({ color }: ChildProps) => {
  return <div>{color}</div>;
};

// 2nd way (ideal appraoch)
export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
  return <div>{color}</div>;
};
