import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
} from "@heroicons/react/solid";
import React from "react";
import { ImageCarousel } from "../../components";

const carouselSlidesData = [
  {
    content:
      "Tomorrow, you will be released. If you are bored of brawling with thieves and want to achieve something there is a rare blue flower that grows on the eastern slopes. Pick one of these flowers. If you can carry it to the top of the mountain, you may find what you were looking for in the first place.",
    author: "Bane",
    source: "facebook",
  },
  {
    content:
      "You have learn to bury your guilt with anger. I will teach you to confront it and to face the truth.",
    author: "Ra's Al Ghul",
    source: "Snapchat",
  },
  {
    content:
      "Introduce a little anarchy, upset the established order and everything becomes chaos. I'm an agent of chaos. Oh, and you know the thing about chaos? It's fair.",
    author: "Joker",
    source: "facebook",
  },
  {
    content:
      "I can't do that as Bruce Wayne... as a man. I'm flesh and blood. I can be ignored, destroyed. But as a symbol, I can be incorruptible, I can be everlasting.",
    author: "Bruce Wayne",
    source: "facebook",
  },
  {
    content:
      "But it's not who you are underneath... it's what you do that defines you.",
    author: "Rachel Dawes",
    source: "twitter",
  },
  
  {
    content:
      "Master Wayne, you've been gone a long time. You look very fashionable. Apart from the mud.",
    author: "Alfred Pennyworth",
    source: "twitter",
  },
];

export function Home() {
  return (
    <>
      <ImageCarousel slides={carouselSlidesData} />
    </>
  );
}
