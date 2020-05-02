import React from "react";

function ActivityPage() {
  return (
    <div className="projectWrapper">
      {/* article 시작 */}
      <div className="article">
        <div className="projectContent">
          <div className="projectTitle">
            <span>알프스 동아리(알고리즘 동아리)</span>
            <span className="projectDate">(2020.03.22 ~ 2018.04.22)</span>
          </div>
          <div className="projectSummary">내용쓸곳</div>
        </div>
      </div>
      {/* article 끝 */}
      {/* article 시작 */}
      <div className="article">
        <div className="projectContent">
          <div className="projectTitle">
            <span>플루마 동아리(건국민턴 동아리)</span>
            <span className="projectDate">(2020.03.22 ~ 2018.04.22)</span>
          </div>
          <div className="projectSummary">내용쓸곳</div>
        </div>
      </div>
      {/* article 끝 */}
      {/* article 시작 */}
      <div className="article">
        <div className="projectContent">
          <div className="projectTitle">
            <span>홍성배드민턴클럽 (동호회)</span>
            <span className="projectDate">(2020.03.22 ~ 2018.04.22)</span>
          </div>
          <div className="projectSummary">내용쓸곳</div>
        </div>
      </div>
      {/* article 끝 */}
    </div>
  );
}

export default ActivityPage;
