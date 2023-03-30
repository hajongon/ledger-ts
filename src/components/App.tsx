import Container from "./Container";

const App = () => {
  console.log(process.env.NODE_ENV);

  return (
    <>
      <Container />
    </>
  );
};

export default App;
