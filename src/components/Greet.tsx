const Greet = ({ name }: { name?: string }) => {
  if (name) return <h1>Hello {name}</h1>;

  return <button>Login</button>;
};

export default Greet;
    //  expect(button).toHaveTextContext(/Login/i)
    //  const button=screen.getByRole('button')
