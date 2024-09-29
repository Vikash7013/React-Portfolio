// eslint-disable-next-line react/prop-types
const Section = ({ icon, children, sectionTitle }) => {
  return (
    <div className="mb-12 mx-5 ">
      <div className="flex my-3 items-center mb-6">
        {icon}
        <h1 className="font-bold text-2xl m-2">{sectionTitle}</h1>
      </div>
      {children}
    </div>
  );
};

export default Section;
