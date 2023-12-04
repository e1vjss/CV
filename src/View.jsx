function View({ userInfo, educationInfo, practicalExperience }) {
  return (
    <div className="CV">
      <div className="profilePic">hello</div>
      <div className="General">
        <h2>Name</h2>
        <p className="name">{userInfo.name}</p>
        <h2>Email</h2>
        <p className="email">{userInfo.email}</p>
        <h2>Phone Number</h2>
        <p className="phoneNumber">{userInfo.phone}</p>
      </div>
      <div className="Education">
        <h2>School Name</h2>

        <p className="school">{educationInfo.school}</p>
        <h2>Title of Study</h2>
        <p className="titleOfStudy">{educationInfo.title}</p>
        <h2>Date of Study</h2>
        <p className="dateOfStudy">{educationInfo.dateOfStudy}</p>
      </div>
      <div className="Experience">
        <h2>Company Name</h2>
        <p className="companyName">{practicalExperience.company}</p>
        <h2>Position Title</h2>
        <p className="positionTitle">{practicalExperience.position}</p>
        <h2>Main Responsibility</h2>
        <p className="mainResponsibility">{practicalExperience.responsibility}</p>
        <h2>Date from Until</h2>
        <p className="dateFrom">{}</p>
      </div>
    </div>
  );
}
export { View };
