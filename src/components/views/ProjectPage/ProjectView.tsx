import { Project } from "../../../infra/types";
import React from "react";

const ProjectView = ({ project }: { project: Project }) => {
  return (
    <>
      <div className="article">
        <div className="projectImg">
          <img src={project.img} />
        </div>
        <div className="projectContent">
          <div className="projectTitle">
            <span>{project.title}</span>
            <span className="projectDate">
              ({`${project.startDate} ~ ${project.endDate}`})
            </span>
            <a href={project.link} target="_blank">
              <img src="./images/web.png" className="homepageLink" />
            </a>
          </div>

          <div className="projectSummary">
            <div className="projectDeploy">
              <div className="subTitle">개발파트</div>
              <ul>
                {project.developParts.map((developPart, index) => (
                  <>
                    <li key={"developPart" + index}> - {developPart}</li>
                  </>
                ))}
              </ul>
            </div>
            <div className="projectLanguage">
              <div className="subTitle">프로젝트 사용언어</div>
              <ul>
                {project.useLanguages.map((useLanguage, index) => (
                  <>
                    <li key={"useLanguage" + index}> - {useLanguage}</li>
                  </>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectView;
