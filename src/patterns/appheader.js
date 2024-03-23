import React, { useState } from "react";
import { NavigationItem, StackLayout } from "@salt-ds/core";

const items = ["Home", "About", "A11y", "Agile", "Football", "React"];

export const Header = () => {
  const [active, setActive] = useState();

  return (
    <header>
      <div className="brand">weestoater</div>
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
      <div className="utils">utils</div>
    </header>
  );
};
