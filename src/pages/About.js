import React from "react";
import { PageTitleH1 } from "../components/global/pageTitleHeading";
import { Card, GridItem, GridLayout } from "@salt-ds/core";

import vsCodeScreenShot from "../assets/img/vs-code.png";
import burtIcon from "../assets/img/burt.png";
import busterPic from "../assets/img/buster.jpg";

export const AboutPage = () => {
  return (
    <>
      <PageTitleH1 title="About" />
      <GridLayout columns={{ xs: 1, sm: 2, md: 2, lg: 4, xl: 4 }}>
        <GridItem>
          <Card>
            <h2>what is weestoater</h2>
            <img
              src={vsCodeScreenShot}
              alt="code example in VS Code"
              className="fluid"
            />
            <div className="card-content">
              <p>
                <strong>weestoater</strong> is the nickname I've used for my
                personal 'playgrounds' online since 1999, when I first cut my
                teeth in <code>html</code> &amp; <code>design</code>. Since then
                I've gone through a number of different efforts.
              </p>

              <ul>
                <li> A hand rolled CMS on php</li>
                <li> Numerous versions of WordPress</li>
                <li> An umbraco site - didn't last long</li>
                <li> A few Angular / AngularJS versions</li>
                <li> A couple of React sites</li>
              </ul>

              <p>
                This current itteration is ReactJS and Salt-DS. It is a site for
                me to play with and learn more about ReactJS and Salt-DS, as I
                use both technologies in my day job, as well as Angular; Node;
                Cypress, Playwright and multiple CSS frameworks.
              </p>

              <p>
                I also want to use it to trial different experiments and
                implement the fabulous React Testing Library based on the
                amazing{" "}
                <a
                  href="http://www.testingjavascript.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  testing javascript
                </a>{" "}
                course from the amazing <strong>Kent C. Dodds</strong>. I work
                very heavily in Accessibility and I would like to flex some
                testing muscles too.
              </p>
            </div>
          </Card>
        </GridItem>
        <GridItem>
          <Card>
            <h2>who is weestoater</h2>

            <div className="card-content">
              <img
                src={burtIcon}
                alt="avatar of weestoater"
                className="right avatar"
              />
              <p>
                I am Ian Burrett, a Scottish Lead UI Engineer / Web Developer,
                working in Glasgow, UK and living just outside the fine city.
              </p>

              <p>
                I'm a father of two amazing kids and a husband to my very long
                suffering wife. We have an adorable dog called Buster and he is
                the absolutely best boy ever - spoilt and loved to bits.
              </p>
              <img
                src={busterPic}
                alt="Our golden lab Buster aka Brock Goldie"
                className="fluid"
              />
              <p>
                When not working or ferrying my kids to one of their many clubs,
                I like to tinker with code / websites; listen to 'rubbish'
                music; watch weird and wonderful stuff on various streaming
                services.
              </p>
              <p>
                I occassionaly make it along to see Motherwell FC too and have
                been know to strum a tune on the guitar once in a blue moon.
              </p>
            </div>
          </Card>
        </GridItem>
      </GridLayout>
    </>
  );
};
