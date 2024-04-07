import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

//--  patterns
import { Header } from "./patterns/appheader";

//--  pages
import { HomePage } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { A11yPage } from "./pages/A11y";
import { AgilePage } from "./pages/agile/Agile";
import { MobRules } from "./pages/agile/MobRules";
import { LessonsLearned } from "./pages/agile/LessonsLearned";
import { FootballPage } from "./pages/Football";
import { ReactPage } from "./pages/React";

export const App = () => {
  return (
    <HashRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/a11y" element={<A11yPage />} />
          <Route path="/agile" element={<AgilePage />} />
          <Route path="/lessonslearned" element={<LessonsLearned />} />
          <Route path="/mobrules" element={<MobRules />} />
          <Route path="/football" element={<FootballPage />} />
          <Route path="/react" element={<ReactPage />} />
        </Routes>
      </main>
    </HashRouter>
  );
};
