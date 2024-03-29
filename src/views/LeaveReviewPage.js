import React from "react";
import DemoFooter from "components/Footers/DemoFooter";
import IndexNavbarNoHeroImg from "components/Navbars/IndexNavbarNoHeroImg";

function LeaveReviewPage() {

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });

  return (
    <div>
      <IndexNavbarNoHeroImg/> 
      <div className="section mt-4">
            <iframe title="leave-review" className="leave-review-container" src="https://docs.google.com/forms/d/e/1FAIpQLSewGaip4z-o01vLAD3soZw24NnlTA6X24iAcrxVvgQqmzcNnQ/viewform?embedded=true" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
        </div>
      <DemoFooter/>
    </div>
  );
}

export default LeaveReviewPage;