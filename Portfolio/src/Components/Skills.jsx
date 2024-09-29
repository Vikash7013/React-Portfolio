import { Code } from "lucide-react";
import Section from "./Section";
import Pills from "./Pills";

const Skills = () => {
  const skillTitles = [
    "HTML",
    "CSS",
    "Jvascript",
    "React",
    "Tailwind",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
    "Git",
  ];
  return (
    <Section icon={<Code />} sectionTitle="Skills">
      {skillTitles.map((title) => (
        // eslint-disable-next-line react/jsx-key
        <Pills title={title} />
      ))}
    </Section>
  );
};

export default Skills;
