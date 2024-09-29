import { BookOpen } from "lucide-react";
import Section from "./Section";
const Education = () => {
  return (
    <Section icon={<BookOpen />} sectionTitle={"Educations"}>
      <div className="m-4">
        <h1 className="font-bold text-lg">Diploma in Computer science</h1>
        <p>Board of Utter Pradesh Technical Education 2022 - 2025</p>
      </div>
      <div className="m-4">
        <h1 className="font-bold text-lg">
          Bachelor of Science in Computer science
        </h1>
        <p>Abdul Kalam Technical university 2025 - 2028</p>
      </div>
    </Section>
  );
};

export default Education;
