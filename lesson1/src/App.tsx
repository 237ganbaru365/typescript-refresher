import Heading from "./components/Heading";
import List from "./components/List";
import Section from "./components/Section";

function App() {
  return (
    <>
      <Heading title={"Hello, world!"} />
      <Section>I'm Fumina</Section>
      <List
        items={["🍺Beer", "☕️Cofee", "🍰Sweets"]}
        render={(item: string) => <li>{item}</li>}
      />
    </>
  );
}

export default App;
