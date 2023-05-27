import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import type { job } from "../types";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  isMobile?: boolean;
}


function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
export function TabPanel(props: TabPanelProps) {
  const { children, value, index, isMobile } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      className="animate__animated animate__fadeIn animate__slow"
    >
      {value === index && (
        <Box
          sx={{
            pl: `${isMobile ? "10px" : "50px"}`,
            mt: `${isMobile ? "40px" : "0px"}`,
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}


export function VerticalTabs({ works }: { works: job[] }) {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "transparent",
        fontSize: "24px",
        display: `${isMobile ? "" : "flex"}`,
        mt: `${isMobile ? "" : "40px"}`,
      }}
    >
      <Tabs
        orientation={isMobile ? "horizontal" : "vertical"}
        value={value}
        onChange={handleChange}
        variant={isMobile ? "fullWidth" : "standard"}
        aria-label='Vertical tabs example'
        sx={{ borderRight: 1, borderColor: "divider", minWidth: "160px" }}
      >
        {works.map((item, index) => (
          <Tab
            key={item.title}
            label={item.title}
            sx={{ color: "#f3f3f3" }}
            {...a11yProps(index)}
          />
        ))}
      </Tabs>
      {works.map((item, index) => (
        <TabPanel
          key={item.title}
          value={value}
          index={index}
          isMobile={isMobile}
        >
          <div>
            <h2>{item.role}</h2>
            <h4>
              {item.start} - {item.end}
            </h4>
            <ul>
              {item.description.map((task) => (
                <li key={task}>{task}</li>
              ))}
            </ul>
          </div>
        </TabPanel>
      ))}
    </Box>
  );
}
