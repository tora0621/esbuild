import Swiper, { Navigation, Pagination, Autoplay, Thumbs, EffectFade } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Thumbs, EffectFade]);

export const swiper = () => {
  const slider = document.querySelectorAll('.js-swiper');

  for (let i = 0; i < slider.length; i++) {
    const num = ('00' + (i + 1)).slice(-2);
    slider[i].className += num;

    const swiper = new Swiper('.js-swiper' + num, {
      spaceBetween: 30,
      effect: 'fade',
      speed: 2000,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop: true,
      autoplay: {
        delay: 5000,
      },
    });

    const observerEntry = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio >= 1) {
          swiper.autoplay.start();
        } else if (entry.intersectionRatio === 0) {
          swiper.autoplay.stop();
        }
      });
    };

    //IntersectionObserverオプション
    const Options = {
      threshold: [0, 1],
    };

    //オブザーバーを生成
    const observer = new IntersectionObserver(observerEntry, Options);

    observer.observe(slider[i]);
  }
};
