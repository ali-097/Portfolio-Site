import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { routeFileMap } from "../data/fileTree";

const HOME_TAB = { path: "/", pinned: true };

export function useOpenTabs() {
  const location = useLocation();
  const navigate = useNavigate();

  const [tabs, setTabs] = useState(() => {
    if (location.pathname === "/") return [HOME_TAB];
    return [HOME_TAB, { path: location.pathname, pinned: false }];
  });

  useEffect(() => {
    setTabs((current) => {
      if (current.some((tab) => tab.path === location.pathname)) return current;
      return [...current, { path: location.pathname, pinned: false }];
    });
  }, [location.pathname]);

  const closeTab = useCallback(
    (path) => {
      setTabs((current) => {
        const closingIndex = current.findIndex((tab) => tab.path === path);
        if (closingIndex === -1) return current;

        const next = current.filter((tab) => tab.path !== path);

        if (location.pathname === path) {
          const neighbor = current[closingIndex - 1] ?? HOME_TAB;
          navigate(neighbor.path);
        }

        return next.length > 0 ? next : [HOME_TAB];
      });
    },
    [location.pathname, navigate]
  );

  return {
    tabs: tabs.map((tab) => ({
      ...tab,
      label: routeFileMap[tab.path]?.label ?? tab.path,
      active: tab.path === location.pathname,
    })),
    closeTab,
  };
}
