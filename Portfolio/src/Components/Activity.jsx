import { Award } from "lucide-react";
import Section from "./Section";
import List from "./List";

const Activity = () => {
  const activity = [
    "Volunteer at local coding bootcamp for underprivileged youth",
    "Organizer of city-wide hackthon event ",
    "Member of The University Chess Clube",
  ];
  return (
    <Section icon={<Award />} sectionTitle={"Extracarricular & Activities"}>
      <List items={activity} />
    </Section>
  );
};

export default Activity;
