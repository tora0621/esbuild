import $ from "jquery";
import { isSumaho } from "./common/isSumaho";
//tailwind
import "tailwindcss/components";
import "tailwindcss/utilities";
import "../css/style.css";

const switchLink = () => {
  const target = $(".js-switchlink");
  if (!target.length) return;

  // console.log('リンクあり');

  target.each((i, e) => {
    const splink = $(e).data("splink");
    if (isSumaho()) {
      console.log(splink);
    } else {
      console.log("pc");
      console.log(`<div class="test mb-4">スタイルテスト</div>`);
    }
    $(e).attr("href", `${splink}`);
  });
};
switchLink();

import { test } from "./modules/switchLink";
import { setSwiper } from "./modules/swiper/setSwiper";
test();
setSwiper();
