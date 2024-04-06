import React from "react";
import {
  Card,
  GridLayout,
  GridItem,
  FlexLayout,
  FlexItem,
} from "@salt-ds/core";
import { Tabs, TabPanel } from "@salt-ds/lab";
import { Calendar, SoccerBall } from "@phosphor-icons/react";

import { PageTitleH1 } from "../components/global/pageTitleHeading";
import { MatchDetails } from "../components/football/matchDetails";
import { GoalScorerDetails } from "../components/football/goalScorerDetails";

import mfcLogo from "../assets/img/mfclogo.png";
import mfcGoals from "../data/mfc-goals.json";
import mfcMatches from "../data/mfc-matches.json";

export const FootballPage = () => {
  const seasons = ["2023-2024", "2022-2023", "2021-2022", "2020-2021"];

  return (
    <>
      <PageTitleH1 title="Football" />
      <FlexLayout columns={{ xs: 2, sm: 2, md: 2, lg: 2, xl: 2 }}>
        <FlexItem>
          <div className="left w10">
            <img src={mfcLogo} className="fluid" alt="Motherwell F.C. logo" />
          </div>
        </FlexItem>
        <FlexItem>
          <Card className="mb-2">
            <div className="card-content">
              <p>
                I'm a Motherwell F.C. supporter and have been since I met my
                beautiful wife and went along to my first game with my
                father-in-law and sister-in-law.
              </p>
              <p>
                Sadly, for many different reasons, I don't get along to as many
                matches as I would like, the main one being that any game I{" "}
                <strong>do</strong> get to is usually an absolute howler.
              </p>
              <p>
                I've seen some great games, like the <strong>6-6</strong> draw
                with Hibs and some scunners I'd much rather forget, like driving
                all the way to Stranraer, only to get knocked out on penalties -{" "}
                <strong>sore one!</strong>
              </p>
              <p>
                But for my sins - and not my sanity - I try to keep up-to-date
                with what they are doing and I sometimes note down the results.
              </p>
              <hr />
              <p>
                <small>
                  <strong>N.B.</strong>: This is not a comprehensive or complete
                  list, only what I've managed to note down and put into my
                  little 'system'.
                </small>
              </p>
            </div>
          </Card>
        </FlexItem>
      </FlexLayout>

      <Tabs>
        {seasons.map((item, key) => {
          return (
            <TabPanel label={item} key={key} className="tab-panels">
              <>
                <GridLayout columns={{ xs: 1, sm: 2, md: 2, lg: 2, xl: 2 }}>
                  <GridItem>
                    <h2>
                      <Calendar size={24} />
                      &nbsp;
                      {mfcMatches[key].season} Matches
                    </h2>
                    <MatchDetails details={mfcMatches[key].details} />
                  </GridItem>
                  <GridItem>
                    <h2>
                      <SoccerBall size={24} /> {mfcGoals[key].season} Goals
                    </h2>
                    <GoalScorerDetails details={mfcGoals[key].details} />
                  </GridItem>
                </GridLayout>
              </>
            </TabPanel>
          );
        })}
      </Tabs>
    </>
  );
};
