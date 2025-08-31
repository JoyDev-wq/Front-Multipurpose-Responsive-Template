import React from "react";
import "./Documentation.css";
import documentation from "../../assets/documentation.svg";
import snippet from "../../assets/Snippet.svg";

const Documentation = () => {
  return (
    <div className="documentation">
      <div className="doc-content">
        <div className="doc-text">
          <p className="heading">Documentation</p>
          <p className="para">
            Get started with Front - Multipurpose Responsive Template for
            building responsive, mobile-first sites, with Bootstrap and a
            template starter page.
          </p>
          <p className="button"><a href="">Browse Documentation</a></p>
        </div>
        <div className="doc-img">
          <img src={documentation} alt="" />
        </div>
      </div>
      <div className="snippet-content">
        <div className="snippet-text">
          <p className="heading">Snippets</p>
          <p className="para">
            Mix and match content and features from different demos. Copy-paste components that suit you the best. Combine features from different demos!
          </p>
          <p className="button"><a href="">Browse Snippets</a></p>
        </div>
        <div className="snippet-img">
          <img src={snippet} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Documentation;
