import * as React from "react";
import { styled } from "@mui/system";
import Tabs from "@mui/base/Tabs";
import TabsList from "@mui/base/TabsList";
import TabPanel from "@mui/base/TabPanel";
import { buttonClasses } from "@mui/base/Button";
import Tab, { tabClasses } from "@mui/base/Tab";
import WeddingProgram from "./WeddingProgram";
import ReceptionProgram from "./ReceptionProgram";
import EngagementProgram from "./EngagementProgram";
import { programs } from "../data";
import styles from "../css/program.module.css"

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#80BFFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  800: "#004C99",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const StyledTab = styled(Tab)`
  color:${grey[900]};
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  width: 100%;
  padding: 10px 12px;
  margin: 6px 6px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${grey[600]};
    color: #fff;
  }

  &:focus {
    color: #fff;
    outline: 3px solid ${grey[300]};
  }

  &.${tabClasses.selected} {
    background-color: ${grey[600]};
    color: ${grey[50]};
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const StyledTabPanel = styled(TabPanel)`  
    width: 100%;
`;


const StyledTabsList = styled(TabsList)(
  ({ theme }) => `
  min-width: 350px;
  background-color: ${grey[50]};
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 2px 10px ${
    theme.palette.mode === "light" ? grey[900] : grey[200]
  };
  `
);

const Programs = () => {
  return (
    <div id="programs" className={styles.programs}>
        <h2 className={styles.programsTitle}>Event Programs</h2>
      <Tabs defaultValue={0}>
        <StyledTabsList>
          {programs.map((program, i) => (
            <StyledTab key={program.id} value={i}>
              {program.id}
            </StyledTab>
          ))}
        </StyledTabsList>
        <StyledTabPanel value={0}>
          <EngagementProgram />
        </StyledTabPanel>
        <StyledTabPanel value={1}>
          <WeddingProgram />
        </StyledTabPanel>
        <StyledTabPanel value={2}>
          <ReceptionProgram />
        </StyledTabPanel>
      </Tabs>
    </div>
  );
};

export default Programs;
