import React from "react";
import {
  Button,
  Card,
  Tooltip,
  GridLayout,
  FlowLayout,
  StackLayout,
} from "@salt-ds/core";
import {
  GithubIcon,
  LayersIcon,
  SaltShakerIcon,
  StorageIcon,
} from "@salt-ds/icons";
import SaltDSImg from "../../assets/img/salt-ds.png";

export const SaltPost = () => {
  return (
    <Card>
      <h2>
        <StorageIcon size="2" /> Needs a little Salt
      </h2>
      <div className="card-content">
        <img
          src={SaltDSImg}
          className="fluid"
          alt="Salt Design System homepage screenshot"
        />
        <div className="right">
          <SaltShakerIcon size="5" />
        </div>
        <p>
          In a recent change of plan I've decided to ditch my AWS hosting for
          weestoater &amp; other side projects, in order to focus on getting to
          know the <strong>Salt Design System</strong>. This is an open-source
          offering from J.P. Morgan which I am trying to get to grips with,
          after years of using <code>Bootstrap</code> based design systems.
        </p>

        <p>
          It only offers support for <strong>React</strong>, so in keeping with
          that I'm parking my experimentations with NextJS for a while - wasn't
          finding a lot of time on it to be honest.
        </p>

        <p>
          Instead, I'm concentrating on refactoring out the{" "}
          <em>Twitter Bootstrap</em> layout of weestoater, for a{" "}
          <strong>@salt-ds</strong> one instead.
        </p>

        <p>
          Like all learning curves there have been some frustrations -
          <Tooltip content="Problem in chair not in computer">
            <Button variant="secondary">picnic</Button>
          </Tooltip>{" "}
          - but that is where I am finding my biggest reward. getting into the
          challenge of any refactor is interesting, adding a different design
          system into the mix has made it all the more enjoyable for me.
        </p>

        <div className="right">
          <LayersIcon size="5" />
        </div>

        <p>
          getting to grips with GridLayout, FlexLayout, FlowLayout and
          StackLayout has really made me appreciate the potential of the design
          system and made me rethink the way I look at content layouts after
          years of <code>css:grid</code> offerings.
        </p>

        <p>
          I've also taken the opportunity to introduce{" "}
          <Tooltip content="Test Driven Development">
            <Button variant="secondary">TDD</Button>
          </Tooltip>{" "}
          to the process and added <GithubIcon /> Github actions as part of the
          deployment process, having ditched AWS and it's Amplify offering. I
          like the benefits of <code>push</code> and forget deployments of AWS,
          but why pay for the privilege when I already have hosting for my
          domain...
        </p>
      </div>
    </Card>
  );
};
