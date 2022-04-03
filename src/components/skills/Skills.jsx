import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const educationContent = [
  {
    passingYear: "April 2022",
    degree: "Bootcamp Architecture Nodejs Developer",
    instituteName: "CodeDev",
  },
  {
    passingYear: "Ene 2022",
    degree: "Data Anaysis using Python",
    instituteName: "Escalab",
  },
  {
    passingYear: "Nov 2021",
    degree: "IBM Certificate Data Anaysis using Python ",
    instituteName: "IBM",
  },
  {
    passingYear: "Oct 2021",
    degree: "NodeJS Certificate",
    instituteName: "Hackerrank",
  },
  {
    passingYear: "sept 2021",
    degree: "Cloud Native Twelve-Factor Applications",
    instituteName: "Linkedin",
  },
  {
    passingYear: "ago 2021",
    degree: "Rest API Certificate",
    instituteName: "Hackerrank",
  },
];

const skillsContent = [
  {
    name: "Python",
    skillPercent: "82",
  },
  {
    name: "Django",
    skillPercent: "78",
  },
  {
    name: "Docker",
    skillPercent: "70",
  },
  {
    name: "Kubernetes",
    skillPercent: "65",
  },
  {
    name: "CI/CD",
    skillPercent: "60",
  },
  {
    name: "Node",
    skillPercent: "90",
  },
  {
    name: "Golang",
    skillPercent: "30",
  },
  {
    name: "Javascript",
    skillPercent: "91",
  },
  {
    name: "Angular",
    skillPercent: "70",
  },
  {
    name: "React",
    skillPercent: "70",
  },
  {
    name: "Dart/ Flutter",
    skillPercent: "58",
  },
];

const awardContent = [
  {
    awardYear: "2021",
    degree: "Artificial Intelligence",
    instituteName: "Hackerran",
  }
];
const experienceContent = [
  {
    designation: "Backend Engineer",
    jobType: "Full Time | Remote",
    year: "2021 - Present",
    compnayName: "Cornershop by Uber",
    descriptions:
      "Design and program solutions and codes for divisions of clients, buyers, stores and brands, in addition to other areas of the company, as well as other developments technology in which it requires your contribution. ",
  },
  {
    designation: "FullStack Developer",
    jobType: "Full Time | Remote",
    year: "2020 - 2021",
    compnayName: "4Agile Walmart",
    descriptions:
      "Currently working in 4A consultant for Walmart Chile, in high demand applications. First project, was wholesales central as FullStack (Backend python with Django) and (frontend Angular). I am currently working on the project for the store of the future, a project related to future solutions for Walmart Chile in different formats (Lider, Lider Express, wholesales central) in Chile",
  },
  {
    designation: "Senior Developer",
    jobType: "Full Time",
    year: "2019 - 2020",
    compnayName: "Lagash.",
    descriptions:
      "Currently, my position is a .net technologies engineer, where I mainly work with C # developing WPF applications, the connection of MVVM user applications to WebLogic middleware and the Oracle PL / SQL database. We work under the SCRUM methodology agile currently in a digital response in which the client withdraws and wishes to implement DEVOPS. for your projects in the cloud.",
  },
  {
    designation: "SOLUTION ANALYST",
    jobType: "Full Time",
    year: "2018 - 2019",
    compnayName: "Everis Movistar.",
    descriptions:
      "Development of functionalities in Angular 6 for WebView that will be included in views of Ionic application Movistar Chile, work in cell agile under SCRUM methodology, this was a new technological technology architecture in migration project from AngularJS to Angular X Version 6 with Typescript continuous integration.",
  },
  {
    designation: "FullStack Developer",
    jobType: "Full Time",
    year: "2015 - 2018",
    compnayName: "Directic.",
    descriptions:
      "Developer of websites and mobile technologies applied at the time with JavaScript, jQuery and backend .net, highly critical applications for the mining industry.",
  },
  {
    designation: "System Analyst",
    jobType: "Full Time",
    year: "2006 - 2014",
    compnayName: "Directic.",
    descriptions:
      "Analysis and development of applications for portable devices, communication of equipment RS232, TCP / IP, queries and stored procedures SQL 2000 2005. Programming in C and C ++ language. Currently programming self-service machines with cash payment and bank credit cards..",
  },
];

const Skills = () => {
  return (
    <>
      <div className="beny_tm_resume">
        <div className="main_title">
          <h3>My Experience</h3>
        </div>
        <Tabs>
          <TabList className="tab_list">
            <Tab> Education & Skills</Tab>
            <Tab>Experience</Tab>
          </TabList>
          <TabPanel>
            <div className="resume_inner">
              <div className="row">
                <div className="col-4">
                  <div className="education ">
                    <div className="edu_list">
                      <h4>
                        <label>Education</label>
                      </h4>
                      <ul>
                        {educationContent.map((val, i) => (
                          <li key={i}>
                            <span className="year">{val.passingYear}</span>
                            <p>
                              <span>{val.degree}</span> - {val.instituteName}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End .col-4 */}

                <div className="col-4">
                  <div className="skills ">
                    <h4>
                      <label>Skills</label>
                    </h4>
                    <div className="beny_progress">
                      {skillsContent.map((val, i) => (
                        <div className="progress_inner" key={i}>
                          <span>
                            <span className="label">{val.name}</span>
                            <span className="number">{val.skillPercent}%</span>
                          </span>
                          <div className="background">
                            <div className="bar open">
                              <div
                                className="bar_in"
                                style={{ width: val.skillPercent + "%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* End .col-5 */}

                <div className="col-4">
                  <div className="education ">
                    <div className="edu_list">
                      <h4>
                        <label>Awards</label>
                      </h4>
                      <ul>
                        {awardContent.map((val, i) => (
                          <li key={i}>
                            <span className="year">{val.awardYear}</span>
                            <p>
                              <span>{val.degree}</span> - {val.instituteName}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End .col-4 */}
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="row">
              {experienceContent.map((val, i) => (
                <div className="col-6" key={i}>
                  <div className="resume-box-01">
                    <h5>{val.designation}</h5>
                    <h6>{val.jobType}</h6>
                    <span>{val.year}</span>
                    <div className="hr"></div>
                    <h4>
                      <label>{val.compnayName}</label>
                    </h4>
                    <p>{val.descriptions}</p>
                  </div>
                </div>
                //  End .col
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default Skills;
