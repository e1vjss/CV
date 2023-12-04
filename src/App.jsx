import {
  GeneralInfo,
  EducationalInfo,
  PracticalExperience,
} from "./general.jsx";
import "./App.css";
import { View } from "./View.jsx";
import { useState } from "react";

function App() {
  const [experience, setExperience] = useState({
    company: "Previous Company",
    position: "Previous Position",
    responsibility: "Previous Responsibility",
  });
  const [general, setGeneralInfo] = useState({
    name: "Name will be displayed here",
    email: "Email will be displayed here",
    phone: "Phone number will be displayed here",
  });
  const [education, setEducationInfo] = useState({
    school: "Your school will be displayed here",
    title: "The title of study will be displayed here",
    dateOfStudy: "The date of study will be here",
  });

  const handleGeneralInfoChange = (key, value) => {
    setGeneralInfo((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };
  const handleEducationalInfo = (key, value) => {
    setEducationInfo((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };
  const handleExperienceInfo = (key, value) => {
    setExperience((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <>
      <div className="container">
        <div className="InputContainer">
          <GeneralInfo
            onNameChange={(name) => handleGeneralInfoChange("name", name)}
            onEmailChange={(email) => handleGeneralInfoChange("email", email)}
            phoneChange={(phone) => handleGeneralInfoChange("phone", phone)}
          />
          <EducationalInfo
            onSchoolChange={(school) => handleEducationalInfo("school", school)}
            onTitleChange={(title) => handleEducationalInfo("title", title)}
            onDateChange={(dateOfStudy) =>
              handleEducationalInfo("dateOfStudy", dateOfStudy)
            }
          />

          <PracticalExperience
            onCompanyChange={(company) => handleExperienceInfo("company", company)}
            onPositionChange={(position) => handleExperienceInfo("position", position)}
            onMainChange={(responsibility) => handleExperienceInfo("reponsibility", responsibility)}
          />
        </div>
        <View
          userInfo={general}
          educationInfo={education}
          practicalExperience={experience}
        ></View>
      </div>
    </>
  );
}

export { App };
