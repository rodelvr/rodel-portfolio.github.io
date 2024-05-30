// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_joke from "./routes/api/joke.ts";
import * as $api_themes_index from "./routes/api/themes/index.ts";
import * as $index from "./routes/index.tsx";
import * as $AppBar from "./islands/AppBar.tsx";
import * as $Blogs from "./islands/Blogs.tsx";
import * as $Experience from "./islands/Experience.tsx";
import * as $Hero from "./islands/Hero.tsx";
import * as $SpinningModel from "./islands/SpinningModel.tsx";
import * as $Strengths from "./islands/Strengths.tsx";
import * as $Technologies from "./islands/Technologies.tsx";
import * as $TypingAnimation from "./islands/TypingAnimation.tsx";
import * as $Videos from "./islands/Videos.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/joke.ts": $api_joke,
    "./routes/api/themes/index.ts": $api_themes_index,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/AppBar.tsx": $AppBar,
    "./islands/Blogs.tsx": $Blogs,
    "./islands/Experience.tsx": $Experience,
    "./islands/Hero.tsx": $Hero,
    "./islands/SpinningModel.tsx": $SpinningModel,
    "./islands/Strengths.tsx": $Strengths,
    "./islands/Technologies.tsx": $Technologies,
    "./islands/TypingAnimation.tsx": $TypingAnimation,
    "./islands/Videos.tsx": $Videos,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
