import React, { useEffect, useState } from "react";
import styles from "../css/location.module.css";
import { scrollIntoTheView } from "../utils/scroll";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import Map from "./Map";
import { locations } from "../data";
import { Link } from "react-router-dom";

const Locations = () => {
  useEffect(() => {
    window.addEventListener("scroll", scrollIntoTheView);

    return function () {
      window.removeEventListener("scroll", scrollIntoTheView);
    };
  }, []);

  const [expanded, setExpanded] = useState("reception");

  const handleChange = (locationId) => (event, isExpanded) => {
    setExpanded(isExpanded ? locationId : "false");
  };

  return (
    <section id="locations" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.locationsTitle}>Event Locations</h2>
        <p className={styles.locationsText}>
          We really appreciate your presence at our engagement and wedding
          ceremonies. Below are the locations and times of each event. Please be
          sure to select the right event.
        </p>
        <p className={styles.locationsText}>
          If you want to follow along with the proceedings the
          <Link to="/programs" className={styles.locationsLink}>
            {" "}
            Online Programs{" "}
          </Link>
          are here.
        </p>

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
                <Typography
                  variant="h5"
                  sx={{ width: "33%", flexShrink: 0 }}
                  className={styles.typography}
                  fontWeight="bold"
                >
                  <LocationOnOutlinedIcon fontSize="large" />
                  {title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={styles.bodyHeader} variant="h5">
                  Date:
                </Typography>
                <Typography className={styles.bodyText} variant="h5">
                  {date}
                </Typography>
                <Typography className={styles.bodyHeader} variant="h5">
                  {" "}
                  Time:
                </Typography>
                <Typography className={styles.bodyText} variant="h5">
                  {time}
                </Typography>
                <Typography className={styles.bodyHeader} variant="h5">
                  Address:
                </Typography>
                <Typography className={styles.bodyText} variant="h5">
                  {address}
                </Typography>
                <Map image={image} link={link} />
                <Typography>
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
