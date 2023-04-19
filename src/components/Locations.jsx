import React, { useEffect, useState } from "react";
import styles from "../css/location.module.css";
import { scrollIntoTheView } from "../utils/scroll";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import Map from "./Map";
import { locations } from "../data";

const Locations = () => {
  useEffect(() => {
    window.addEventListener("scroll", scrollIntoTheView);

    return function () {
      window.removeEventListener("scroll", scrollIntoTheView);
    };
  }, []);

  const [expanded, setExpanded] = useState(false);

  const handleChange = (locationId) => (event, isExpanded) => {
    setExpanded(isExpanded ? locationId : false);
  };

  return (
    <section id="locations" className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.sectionTitle}>Information of Interest</h1>

        {locations.map(
          ({ id, title, date, time, address, link, image, info }) => (
            <Accordion
              key={id}
              expanded={expanded === id}
              onChange={handleChange(id)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${id}location-content`}
                id={`${id}location-header`}
              >
                <Typography variant="h5" sx={{ width: "33%", flexShrink: 0 }} className={styles.typography}>
                  <LocationOnOutlinedIcon fontSize="large" />
                  {title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h6" sx={{ color: "text.secondary" }}>
                  {`Date: ${date}`}
                </Typography>
                <Typography variant="h6" sx={{ color: "text.secondary" }}>
                  {` Time: ${time}`}
                </Typography>
                <Typography variant="h6" sx={{ color: "text.secondary" }}>
                  {`Address: ${address}`}
                </Typography>
                <a href={link} target="_blank" rel="noreferrer">
                  <Map image={image} />
                </a>
                <Typography sx={{ color: "text.secondary" }}>
                  Additional info:{" "}
                  <a
                    className={styles.locationLink}
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    {info}
                  </a>
                </Typography>
              </AccordionDetails>
            </Accordion>
          )
        )}
      </div>
    </section>
  );
};

export default Locations;
