import Heading from "components/designs/Heading";
import More from "components/designs/More";
import Page from "components/utility/Page";
import Projects from "components/designs/Designs";
import React from "react";

function certificates() {
  return (
    <Page
      currentPage="Certificates"
      meta={{
        desc: "I'm an avid self-taught designer too! I publish all my web and creative designs on Dribbble also.",
      }}
    >
      <Heading />
      <Projects />
      <More />
    </Page>
  );
}

export default certificates;
