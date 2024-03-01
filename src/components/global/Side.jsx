import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
const Side = ({ courseOutline }) => {
  const handlePush = (key, value) => {
    let query = router.query;

    router.push({
      pathname: window.location.pathname,
      query: { ...query, [key]: value },
    });
  };
  return (
    <div>
      <h2>Course Outline</h2>

      {courseOutline.weeks.map((week) => (
        <SubMenu
          key={week.week_number}
          label={week.topic}
          title="Introduction to React Native and Environment Setup"
        >
          {week.chapters.map((chapter) => (
            <SubMenu
              key={chapter.chapter_number}
              label={"Chapter" + chapter.chapter_number + ":" + chapter.title}
            >
              {chapter.classes.map((classItem) => (
                <MenuItem
                  key={classItem.class_number}
                  onClick={() => handlePush("tab", "agileALM-register")}
                >
                  {classItem.title}
                </MenuItem>
              ))}
            </SubMenu>
          ))}
        </SubMenu>
      ))}
    </div>
  );
};

export default Side;
