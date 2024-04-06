import React from "react";
import { NavLink } from "react-router-dom";
import { FlexLayout, FlexItem } from "@salt-ds/core";

import { PageTitleH1 } from "../../components/global/pageTitleHeading";

import { AgilePractices } from "../../content/agile/agilepractices";

export const AgilePage = () => {
  return (
    <>
      <PageTitleH1 title="Agile" />

      <FlexLayout>
        <FlexItem>
          <AgilePractices />
        </FlexItem>
        <FlexItem>
          <ul className="agile-nav">
            <li>
              <NavLink to="/agile">Agile Practices</NavLink>
            </li>
            <li>
              <NavLink to="/mobrules">Mob Rules</NavLink>
            </li>
            <li>
              <NavLink to="/lessonslearned">Lessons Learned</NavLink>
            </li>
          </ul>
        </FlexItem>
      </FlexLayout>
    </>
  );
};
