import { lazy } from "react";

export function importByMarket(path: string): any {
    const market = window.localStorage.getItem("market") || "";
    const overridePath = `/${market}/${path}`
  
    return lazy(() => import(`../markets${overridePath}`).catch(() => import(`../components/${path}`)));
}