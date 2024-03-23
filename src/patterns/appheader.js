import React, { useState } from "react";
import {
  Button,
  Drawer,
  DrawerCloseButton,
  FlexItem,
  NavigationItem,
  StackLayout,
  Text,
  useResponsiveProp,
} from "@salt-ds/core";

import { MenuIcon, NotificationIcon, UserBadgeIcon } from "@salt-ds/icons";

import wsIcon from "../assets/img/weestoater-icon.png";

export const Header = () => {
  const [openPrimary, setOpenPrimary] = useState(false);
  const isMobile = useResponsiveProp(
    {
      xs: true,
      sm: false,
    },
    false
  );

  const items = ["Home", "About", "A11y", "Agile", "Blog", "Football", "React"];
  const [active, setActive] = useState(items[0]);

  return (
    <header>
      <StackLayout direction="row">
        {isMobile ? (
          <FlexItem className="header-menu-icon">
            {openPrimary ? (
              <></>
            ) : (
              <Button
                variant="secondary"
                onClick={() => setOpenPrimary(true)}
                className="header-menu-btn"
              >
                <MenuIcon />
              </Button>
            )}
          </FlexItem>
        ) : (
          <FlexItem className="header-menu-icon"></FlexItem>
        )}
        <FlexItem className="header-app-logo">
          <img src={wsIcon} alt="weestoater logo" />
          <Text>weestoater</Text>
        </FlexItem>
      </StackLayout>
      {/* <div className="brand">
        <div className="app">weestoater</div>
      </div>
      <nav>
        <StackLayout as="ul" direction="row" gap={2} className="header-nav">
          {items.map((item) => (
            <li key={item}>
              <NavigationItem
                active={active === item}
                href={`#/${item.toLowerCase()}`}
                onClick={() => {
                  setActive(item);
                }}
              >
                {item}
              </NavigationItem>
            </li>
          ))}
        </StackLayout>
      </nav>
      <div className="utils">utils</div> */}
    </header>
  );
};
