import Page from "components/utility/Page";
import Hero from "@/components/support/Hero";
import Testimonials from "@/components/support/Testimonials";

function support() {
  return (
    <Page
      currentPage="Support"
      meta={{
        title: "Support",
        desc: "I love drinking coffee when writing code.",
      }}
    >
      <Hero />
      <Testimonials />
    </Page>
  );
}

export default support;
