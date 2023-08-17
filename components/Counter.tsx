import * as React from 'react';

// Fix me!!

export const Counter = () => {
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCounter(1);
    }, 1000);
  }, []);

  return <div>Counter: {counter}</div>;
};
