import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ProjectPage from "../ProjectPage/ProjectPage";
import ActivityPage from "../ActivityPage/ActivityPage";
import EtcPage from "../EtcPage/EtcPage";
import ProfilePage from "../ProfilePage/ProfilePage";
function ContentPage() {
  return (
    <div className="main-content">
      <Tabs>
        <div className="left-menu">
          <TabList>
            <Tab>Project</Tab>
            <Tab>Activity</Tab>
            <Tab>Etc</Tab>
            <Tab>Profile</Tab>
          </TabList>
        </div>
        <div className="right-menu">
          <TabPanel>
            <ProjectPage />
          </TabPanel>

          <TabPanel>
            <ActivityPage />
          </TabPanel>

          <TabPanel>
            <EtcPage />
          </TabPanel>

          <TabPanel>
            <ProfilePage />
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
}

export default ContentPage;
