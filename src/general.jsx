


function GeneralInfo({onNameChange, onEmailChange, phoneChange}) {

  return (
    <>
    
      <div className="General">
      <h2>General</h2>
        <input type="text" placeholder="Name" onChange={(e) => onNameChange(e.target.value)}
/>
        <input type="text" placeholder="Email" onChange={(e)=>onEmailChange(e.target.value)} />
        <input type="text" placeholder="Phone Number" onChange={(e)=> phoneChange(e.target.value)} />
        <button type="submit">Update</button>
      </div>
    </>
  );
}

function EducationalInfo({onSchoolChange, onTitleChange, onDateChange}) {
  return (
    <>
    
      <div className="Education">
      <h2>Education</h2>
        <input type="text" placeholder="School Name" onChange={(e)=> onSchoolChange(e.target.value)} />
        <input type="text" placeholder="Title Of Study" onChange={(e)=>onTitleChange(e.target.value)}/>
        <input type="text" placeholder="Date Of Study" onChange={(e)=>onDateChange(e.target.value)}/>
        <button type="submit">Update</button>
      </div>
    </>
  );
}
function PracticalExperience({onCompanyChange, OnPositionChange, onMainChange} ) {
  return (
    <>
      <div className="Experience">
        <h2>Experience</h2>
        <input type="text" placeholder="Company Name" onChange={(e)=> onCompanyChange(e.target.value)} />
        <input type="text" placeholder="Position Title" onChange={(e)=>onPositionChange(e.target.value)}/>
        <input type="text" placeholder="Main Resposibility" onChange={(e)=> onMainChange(e.target.value)}/>
        <input type="text" placeholder="Date From Until"/>
        <button type="submit">Update</button>
      </div>
    </>
  );
}

export { GeneralInfo, EducationalInfo, PracticalExperience };
