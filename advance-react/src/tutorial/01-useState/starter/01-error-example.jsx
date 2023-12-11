const ErrorExample = () => {
  let count = 0;
  const handleCount = () => {
    console.log(count);
    count = count + 1;
  };

  return (
    <>
      <h2>{count}</h2>
      <button onClick={handleCount}>Increase</button>
    </>
  );
};

export default ErrorExample;
