import { User } from "lucide-react";
import Section from "./Section";
const AboutMe = () => {
  return (
    <div className="mt-6">
      <Section icon={<User />} sectionTitle={"About Me"}>
        <p>
          I am a passionate full stack developer with 2 year of experience in
          building web application. I Love creating efficient, scalable, and
          user-friendly solutions to complex problems.
        </p>
      </Section>
    </div>
  );
};

export default AboutMe;
