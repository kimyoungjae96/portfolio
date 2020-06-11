import React from "react";

function ActivityPage() {
  return (
    <div className="projectWrapper">
      {/* article 시작 */}
      <div className="article">
        <div className="projectContent">
          <div className="projectTitle">
            <span>알프스 동아리(알고리즘 동아리)</span>
            <span className="projectDate">(2019.04.22 ~ 진행중)</span>
          </div>
          <div className="projectSummary">
            알고리즘 공부는 혼자 충분히 할 수 있지만, 알고리즘뿐만 아니라 컴퓨터
            분야는 혼자 하는 것보다 많은 사람과 같이 하는 게 효율성이 더 높다고
            생각하여 해당 동아리 회원이 되었습니다. 해당 동아리는 일주일에 세
            문제씩 문제를 꾸준히 풀고 해당 문제에 대해 각자 어떤 방식으로
            접근했는지 토의를 합니다. 그 과정에서 조원들이 어떻게 해야 내 코드를
            좀 더 이해를 잘할 수 있을까 고민을 하다가 그림도 그려보고 변수명과
            함수명만 봐도 어떤 역할을 하는지 알 수 있게 만들려고 노력하였습니다.
          </div>
        </div>
      </div>
      {/* article 끝 */}
      {/* article 시작 */}
      <div className="article">
        <div className="projectContent">
          <div className="projectTitle">
            <span>플루마 동아리(건국민턴 동아리)</span>
            <span className="projectDate">(2019.04.22 ~ 진행중)</span>
          </div>
          <div className="projectSummary">
            배드민턴을 좋아하여 학교 동아리에 가입하여 꾸준하게 활동을
            하였습니다.
          </div>
        </div>
      </div>
      {/* article 끝 */}
      {/* article 시작 */}
      <div className="article">
        <div className="projectContent">
          <div className="projectTitle">
            <span>홍성배드민턴클럽 (동호회)</span>
            <span className="projectDate">(2017.06.22 ~ 2019.02.01)</span>
          </div>
          <div className="projectSummary">
            어렸을때부터 운동을 좋아하여 직장을 다니면서 운동을 하고 싶어서
            배드민턴을 치고 있는 체육관에가서 어떻게 가입을 해야하는지 물어봐서
            가입을 하였습니다. 아는분이 한명도 없었지만 운동을 그만큼 좋아해서
            용기가 생겼던것같습니다.
          </div>
        </div>
      </div>
      {/* article 끝 */}
    </div>
  );
}

export default ActivityPage;
