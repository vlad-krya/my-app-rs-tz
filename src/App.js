import ListSection from "./components/ListSection";
import TimeSection from "./components/TimeSection";

const App = () => {
  const getTime = () => {
    const date = new Date();

    const hours =
      date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    const minutes =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    const seconds =
      date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

    return { hours, minutes, seconds };
  };
  return (
    <>
      <ListSection getTime={getTime} />
      <TimeSection getTime={getTime} />
    </>
  );
};

export default App;
