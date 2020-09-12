import React, { useEffect, useState } from "react";

function ProjectPage() {
  const [oneClick, setOneClick] = useState(false);

  return (
    <div className="projectWrapper">
      {/* article 시작 */}
      {!oneClick ? (
        <>
          <span className="oneClickCheck" onClick={() => setOneClick(true)}>
            한눈에 보기
          </span>
          <div className="article">
            <div className="projectImg">
              <img src="./images/lotto.jpg" />
            </div>
            <div className="projectContent">
              <div className="projectTitle">
                <span>로또어플</span>
                <span className="projectDate">(2020.03.22 ~ 2020.04.22)</span>
                <a
                  href="https://github.com/kimyoungjae96/Lotto_App"
                  target="_blank"
                >
                  <img src="./images/web.png" className="homepageLink" />
                </a>
              </div>

              <div className="projectSummary">
                <div className="projectDeploy">
                  <div className="subTitle">개발파트</div>
                  <ul>
                    <li> - 백엔드 (로또 랜덤 뽑기 부분 제외한 파트 개발)</li>
                    <li> - 프론트엔드</li>
                  </ul>
                </div>
                <div className="projectLanguage">
                  <div className="subTitle">프로젝트 사용언어</div>
                  <ul>
                    <li> - Node Js</li>
                    <li> - React Native</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* article 끝 */}
          {/* article 시작 */}
          <div className="article">
            <div className="projectImg">
              <img src="./images/youtube.PNG" />
            </div>
            <div className="projectContent">
              <div className="projectTitle">
                <span>유튜브클론</span>
                <span className="projectDate">(2020.03.01 ~ 2020.03.15)</span>
                <a
                  href="https://github.com/kimyoungjae96/VideoHomepage"
                  target="_blank"
                >
                  <img src="./images/web.png" className="homepageLink" />
                </a>
              </div>

              <div className="projectSummary">
                <div className="projectDeploy">
                  <div className="subTitle">개발파트</div>
                  <ul>
                    <li> - 백엔드</li>
                    <li> - 프론트엔드</li>
                  </ul>
                </div>
                <div className="projectLanguage">
                  <div className="subTitle">프로젝트 사용언어</div>
                  <ul>
                    <li> - React</li>
                    <li> - Node Js</li>
                    <li> - Mongo DB</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* article 끝 */}
          {/* article 시작 */}
          <div className="article">
            <div className="projectImg">
              <img src="./images/hellobuyer.png" />
            </div>
            <div className="projectContent">
              <div className="projectTitle">
                <span>헬로바이어</span>
                <span className="projectDate">(2019.06.01 ~ 2019.07.31)</span>
                <a href="https://www.hellobuyer.co.kr/" target="_blank">
                  <img src="./images/web.png" className="homepageLink" />
                </a>
              </div>

              <div className="projectSummary">
                <div className="projectDeploy">
                  <div className="subTitle">개발파트</div>
                  <ul>
                    <li> - 백엔드</li>
                    <li> - 프론트엔드 (퍼블리싱 파일 받아 작업)</li>
                  </ul>
                </div>
                <div className="projectLanguage">
                  <div className="subTitle">프로젝트 사용언어</div>
                  <ul>
                    <li> - PHP</li>
                    <li> - JavaScript</li>
                    <li> - MySql</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* article 끝 */}
          {/* article 시작 */}
          <div className="article">
            <div className="projectImg">
              <img src="./images/gaon.png" />
            </div>
            <div className="projectContent">
              <div className="projectTitle">
                <span>가온장례</span>
                <span className="projectDate">(2019.03.22 ~ 2019.06.19)</span>
                <a href="http://www.gaonfuneral.com/" target="_blank">
                  <img src="./images/web.png" className="homepageLink" />
                </a>
              </div>

              <div className="projectSummary">
                <div className="projectDeploy">
                  <div className="subTitle">개발파트</div>
                  <ul>
                    <li> - 백엔드</li>
                    <li> - 프론트엔드 (퍼블리싱 파일 받아 작업)</li>
                  </ul>
                </div>
                <div className="projectLanguage">
                  <div className="subTitle">프로젝트 사용언어</div>
                  <ul>
                    <li> - PHP</li>
                    <li> - JavaScript</li>
                    <li> - MySql</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* article 끝 */}
          {/* article 시작 */}
          <div className="article">
            <div className="projectImg">
              <img src="./images/asan.png" />
            </div>
            <div className="projectContent">
              <div className="projectTitle">
                <span>아산시청</span>
                <span className="projectDate">(2018.03.22 ~ 2018.06.19)</span>
                <a href="https://asan.go.kr" target="_blank">
                  <img src="./images/web.png" className="homepageLink" />
                </a>
              </div>

              <div className="projectSummary">
                <div className="projectDeploy">
                  <div className="subTitle">개발파트</div>
                  <ul>
                    <li> - 백엔드</li>
                    <li> - 프론트엔드 (퍼블리싱 파일 받아 작업)</li>
                  </ul>
                </div>
                <div className="projectLanguage">
                  <div className="subTitle">프로젝트 사용언어</div>
                  <ul>
                    <li> - PHP</li>
                    <li> - JavaScript</li>
                    <li> - MySql</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* article 끝 */}
          {/* article 시작 */}
          <div className="article">
            <div className="projectImg">
              <img src="./images/asanfmc.png" />
            </div>
            <div className="projectContent">
              <div className="projectTitle">
                <span>아산시설관리공단</span>
                <span className="projectDate">
                  <br />
                  (2018.03.22 ~ 2018.06.19)
                </span>
                <a href="http://asanfmc.or.kr/" target="_blank">
                  <img src="./images/web.png" className="homepageLink" />
                </a>
              </div>

              <div className="projectSummary">
                <div className="projectDeploy">
                  <div className="subTitle">개발파트</div>
                  <ul>
                    <li> - 백엔드</li>
                    <li> - 프론트엔드 (퍼블리싱 파일 받아 작업)</li>
                  </ul>
                </div>
                <div className="projectLanguage">
                  <div className="subTitle">프로젝트 사용언어</div>
                  <ul>
                    <li> - PHP</li>
                    <li> - JavaScript</li>
                    <li> - MySql</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* article 끝 */}
          {/* article 시작 */}
          <div className="article">
            <div className="projectImg">
              <img src="./images/ulsan.png" />
            </div>
            <div className="projectContent">
              <div className="projectTitle">
                <span>
                  울산대학교 창업지원단
                  <br />
                </span>
                <span className="projectDate">(2018.03.22 ~ 2018.06.19)</span>
                <a href="https://u2a.ulsan.ac.kr/_kor/" target="_blank">
                  <img src="./images/web.png" className="homepageLink" />
                </a>
              </div>

              <div className="projectSummary">
                <div className="projectDeploy">
                  <div className="subTitle">개발파트</div>
                  <ul>
                    <li> - 백엔드</li>
                    <li> - 프론트엔드 (퍼블리싱 파일 받아 작업)</li>
                  </ul>
                </div>
                <div className="projectLanguage">
                  <div className="subTitle">프로젝트 사용언어</div>
                  <ul>
                    <li> - PHP</li>
                    <li> - JavaScript</li>
                    <li> - MySql</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* article 끝 */}
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
