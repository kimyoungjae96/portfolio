import React, { useEffect, useState } from "react";
import { Project } from "../../../infra/types";
import ProjectView from "./ProjectView";
function ProjectPage() {
  const [oneClick, setOneClick] = useState(false);

  const createProject = (
    img: string,
    title: string,
    startDate: string,
    endDate: string,
    link: string,
    developParts: string[],
    useLanguages: string[]
  ) => {
    return { img, title, startDate, endDate, link, developParts, useLanguages };
  };

  const ProjectsContent: Project[] = [
    createProject(
      "./images/deerman.jpeg",
      "디어맨 앱 개발",
      "2020.06.27",
      "진행중",
      "#",
      [
        "프론트엔드",
        "디어맨 스태프 작업플로우 간략화",
        "마지막 이용자에게 문자 보내기 기능 추가",
        "미사용 디어 알림기능 추가",
      ],
      ["React Native", "Mobx", "TypeScript"]
    ),
    createProject(
      "./images/deer.jpeg",
      "디어 앱 개발",
      "2020.06.27",
      "진행중",
      "#",
      [
        "프론트엔드",
        "Google 지도 Naver 지도로 변경",
        "카카오페이 연동 (프론트엔드)",
      ],
      ["React Native", "Mobx", "TypeScript"]
    ),
    createProject(
      "./images/lotto.jpg",
      "로또어플",
      "2020.03.22",
      "2020.04.22",
      "https://github.com/kimyoungjae96/Lotto_App",
      ["백엔드", "프론트엔드"],
      ["React", "Node Js", "Mongo DB"]
    ),
    createProject(
      "./images/youtube.PNG",
      "유튜브클론",
      "2020.03.01",
      "2020.03.15",
      "https://github.com/kimyoungjae96/VideoHomepage",
      ["백엔드", "프론트엔드"],
      ["React", "Node Js", "Mongo DB"]
    ),
    createProject(
      "./images/hellobuyer.png",
      "헬로바이어",
      "2019.06.01",
      "2019.07.31",
      "https://www.hellobuyer.co.kr/",
      ["백엔드", "프론트엔드 (퍼블리싱 파일 받아 작업)"],
      ["PHP", "JavaScript", "MySql"]
    ),
    createProject(
      "./images/gaon.png",
      "가온장례",
      "2019.03.22",
      "2019.06.19",
      "http://www.gaonfuneral.com/",
      ["백엔드", "프론트엔드 (퍼블리싱 파일 받아 작업)"],
      ["PHP", "JavaScript", "MySql"]
    ),
    createProject(
      "./images/ulsan.png",
      "울산대창업지원단",
      "2018.06.20",
      "2018.08.19",
      "https://u2a.ulsan.ac.kr/_kor/",
      ["백엔드", "프론트엔드 (퍼블리싱 파일 받아 작업)"],
      ["PHP", "JavaScript", "MySql"]
    ),
    createProject(
      "./images/gaon.png",
      "아산시청",
      "2018.03.22",
      "2018.06.19",
      "https://asan.go.kr",
      ["백엔드", "프론트엔드 (퍼블리싱 파일 받아 작업)"],
      ["PHP", "JavaScript", "MySql"]
    ),
    createProject(
      "./images/asanfmc.png",
      "아산시설관리공단",
      "2018.01.22",
      "2018.03.22",
      "http://asanfmc.or.kr/",
      ["백엔드", "프론트엔드 (퍼블리싱 파일 받아 작업)"],
      ["PHP", "JavaScript", "MySql"]
    ),
  ];

  return (
    <div className="projectWrapper">
      {/* article 시작 */}
      {!oneClick ? (
        <>
          <span className="oneClickCheck" onClick={() => setOneClick(true)}>
            한눈에 보기
          </span>
          {ProjectsContent.map((project, index) => (
            <ProjectView project={project} key={"project" + index} />
          ))}
        </>
      ) : (
        <>
          <span className="oneClickCheck" onClick={() => setOneClick(false)}>
            원상태로 돌리기
          </span>
          <p>[CSS 작업중입니다]</p>
          <br />
          2020년도 프로젝트
          <br />
          <br />
          <ul>
            <li>로또어플</li>
            <li>유튜브 클론</li>
            <li>엘마 뉴스 어플 (작업중)</li>
            <li>Greego 어플 (작업중)</li>
            <li>디어 어플 유지보수</li>
          </ul>
          <br />
          2019년도 프로젝트
          <br />
          <br />
          <ul>
            <li>
              <a href="http://www.gaonfuneral.com/" target="_blank">
                가온장례
              </a>
            </li>
            <li>
              <a href="http://www.hellobuyer.co.kr/" target="_blank">
                헬로바이어
              </a>
            </li>
            <li>
              <a href="http://mathzone.cafe24.com/" target="_blank">
                MATHZONE
              </a>
            </li>
          </ul>
          <br />
          <ul>
            <h1>2017·2018년도 프로젝트</h1>
            <br />
            <li>
              <a href="https://www.asan.go.kr/main/" target="_blank">
                아산시청
              </a>
            </li>
            <li>
              <a href="https://www.asan.go.kr/naeil/" target="_blank">
                청년내일센터
              </a>
            </li>
            <li>
              <a href="http://www.moondesign.kr/_kor/" target="_blank">
                열린문디자인
              </a>
            </li>
            <li>
              <a href="https://www.asan.go.kr/audit/" target="_blank">
                시민감사관
              </a>
            </li>
            <li>
              <a href="http://ex.np-soft.com/m5/" target="_blank">
                한국도로공사(부여지사)
              </a>
            </li>
            <li>
              <a href="http://zumma.np-soft.com/" target="_blank">
                맵씨맘씨
              </a>
            </li>
            <li>
              <a href="https://www.asanfmc.or.kr/new/" target="_blank">
                아산시시설관리공단
              </a>
            </li>
            <li>
              <a href="https://u2a.ulsan.ac.kr/_kor/" target="_blank">
                울산대학교 창업지원단
              </a>
            </li>
            <li>
              <a href="http://www.asansports.org/sports/" target="_blank">
                아산시체육회
              </a>
            </li>
            <li>
              <a href="http://muhanenergy.cafe24.com/" target="_blank">
                무한에너지
              </a>
            </li>
            <li>
              <a href="https://www.asan.go.kr/design/" target="_blank">
                경관디자인
              </a>
            </li>
            <li>
              <a href="https://www.asan.go.kr/town/" target="_blank">
                읍면동
              </a>
            </li>
            <li>
              <a href="http://playmaker.np-soft.com" target="_blank">
                플레이메이커
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                네이버 클로바(Node.js 사용)-마음식당
              </a>
            </li>
            <li>
              <a href="https://www.asanfmc.or.kr/insect/" target="_blank">
                생태곤충원
              </a>
            </li>
            <li>
              <a href="https://www.asanfmc.or.kr/green" target="_blank">
                생활자원처리장
              </a>
            </li>
            <li>
              <a href="http://lifebaebang.com/" target="_blank">
                배방생활문화센터
              </a>
            </li>
            <li>
              <a href="http://bible.zroad.tv/" target="_blank">
                카카오 종교관련 서버 구축
              </a>
            </li>
            <li>
              <a href="http://eng.pixtrend.com/" target="_blank">
                픽스트랜드
              </a>
            </li>
            <li>
              <a href="http://eng.chprc.np-soft.com/" target="_blank">
                청호
              </a>
            </li>
          </ul>
        </>
      )}
    </div>
  );
}

export default ProjectPage;
