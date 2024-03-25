import React from "react";
import { PageTitleH1 } from "../components/global/pageTitleHeading";
import { GridItem, GridLayout } from "@salt-ds/core";

import { WhatIsWeestoater } from "../content/about/WhatIsWeestoater";
import { WhoIsWeestoater } from "../content/about/WhoIsWeestoater";

export const AboutPage = () => {
  return (
    <>
      <PageTitleH1 title="About" />
      <GridLayout columns={{ xs: 1, sm: 2, md: 2, lg: 2, xl: 4 }}>
        <GridItem>
          <WhatIsWeestoater />
        </GridItem>
        <GridItem>
          <WhoIsWeestoater />
        </GridItem>
      </GridLayout>
    </>
  );
};
