import React from "react";
import { Card } from "@salt-ds/core";
import { AccessibleIcon, UniversalAccessIcon } from "@salt-ds/icons";

export const A11yMe = () => {
  return (
    <Card>
      <h2>
        <AccessibleIcon size="2" /> A11y &amp; me
      </h2>
      <div className="card-content">
        <div className="right">
          <UniversalAccessIcon size="5" />
        </div>

        <p>
          I <strong>really care</strong> about Accessibility (a11y) online and
          have done for over 20 years now.
        </p>

        <p>
          With a move to a UX team in Sep '21, I've switched direction as a
          developer, instead of being a delivery focused engineer, I'm now
          working with teams as a <strong>SME</strong> (subject matter expert)
          on UI development and more importantly Web Standards &amp; a11y.
        </p>

        <p>
          I'm now working alongside a team of designers servicing their needs
          for developer input / advice but also educating and supporting the
          products the designers work to.
        </p>
      </div>
    </Card>
  );
};
