import React from "react";
import DemoFooter from "components/Footers/DemoFooter";
import ShortPageHeader from "components/Headers/ShortPageHeader.js";
import PricingPageContent from "components/PricingPageContent.js";
import IndexNavbar from "components/Navbars/IndexNavbar";
import {Container} from "reactstrap";
import PageTitle from "components/PageTitle";


function PricingPage(props) {

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });

  return (
    <div>
      <IndexNavbar/>
      <ShortPageHeader path="https://ik.imagekit.io/ostlerfilmandphoto/Kimber_Jonny1_Cy1dBU1aP?ik-sdk-version=javascript-1.4.3&updatedAt=1649700479709"/>
      <div className="section profile-content">
        <Container style={{
                      transform: "translate(0,-8em)",
                  }}>
          <PageTitle title="Pricing"/>
          <PricingPageContent type={props.match.params?.type}/>
        </Container>
      </div>
      <DemoFooter/>
    </div>
  );
}

export default PricingPage;