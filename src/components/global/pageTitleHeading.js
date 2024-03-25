import React from "react";

export const PageTitleH1 = ({ title }) => {
  const pageTitle = title ? title : "No title set";
  document.title = pageTitle + " : weestoater";

  return (
    <>
      <h1>{pageTitle}</h1>
    </>
  );
};
