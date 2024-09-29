import { Heart } from "lucide-react";
import Section from "./Section";
import List from "./List";
const Hobbies = () => {
  const hobbies = [
    "Photography",
    "Playing Vollyball",
    "Reading sci-fi Novels",
    "Hiking",
  ];
  return (
    <Section icon={<Heart />} sectionTitle={"Hobbies & Interests"}>
      <List items={hobbies} />
    </Section>
  );
};

export default Hobbies;
