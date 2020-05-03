import React from "react";

function ProfilePage() {
  return (
    <div className="profileWrapper">
      {/* article 시작 */}
      <div className="profileHeader">
        <img src="./images/myprofile.png" className="profileImg" />
      </div>
      <div className="profileContent">
        <ul>
          <li>이름 : 김영재</li>
          <li>나이 : 25세</li>
          <li>학교 : 건국대학교 (2021년 2월 졸업예정)</li>
          <li>전화번호 : 010-5427-8851</li>
          <li>이메일 : sskim5421@gmail.com</li>
        </ul>
      </div>
      {/* article 끝 */}
    </div>
  );
}

export default ProfilePage;
