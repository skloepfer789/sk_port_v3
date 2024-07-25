import { cssBundleHref } from "@remix-run/css-bundle";
import styles from './styles/global.styles.css';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import AnimatedCursor from "react-animated-cursor";
import { isMobile } from "react-device-detect";

export const links = () => [
  {rel: "stylesheet", href: styles},
  {rel: 'manifest', href: '/site.webmanifest'},
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
 
];

export default function App() {

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
      </head>
      <body>
      {
        !isMobile ? (
          <AnimatedCursor   
            color='255,255,255'
            innerSize={5}
            outerSize={50}
            innerScale={1}
            outerScale={3}
            outerAlpha={1}
            outerStyle={{
              mixBlendMode: 'exclusion'
            }}
            trailingSpeed={15}
          />
        ) : (<></>)
      }
             
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
