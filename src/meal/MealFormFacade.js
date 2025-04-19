import FormfacadeEmbed from "@formfacade/embed-react";

const formFacadeURL =
  "https://formfacade.com/include/116293906798789005400/form/1FAIpQLSccXzWU1LRq8fN-Pt0w1ErbTVVevllB0GbNwO08QoBP1DPnzQ/classic.js/?div=ff-compose";


  const MealFormFacade = () => {
  const onSubmitForm = () => {
    console.log("----FORM SUBMITTED----");
  };

  return (
    <div id="meal">
      <FormfacadeEmbed
        formFacadeURL={formFacadeURL}
        onSubmitForm={onSubmitForm}
        fullScreen={true}
        headerTitle="Google Form Integration"
      />
    </div>
  );
};

export default MealFormFacade;
