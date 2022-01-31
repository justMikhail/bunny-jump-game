import Swiper from 'swiper';
import { store } from '../store/store';
import { commonGameSlice } from '../store/slices/commonGameSlice';

export const initUI = () => {
  const playButton = document.getElementById('play-button');
  playButton.addEventListener('click', () => {
    store.dispatch(commonGameSlice.actions.playGame());
  });

  type ChooseSkinSliderElementType = HTMLElement & { swiper?: Swiper };

  const chooseSkinSliderElement = document.querySelector<ChooseSkinSliderElementType>('#choose-skin-slider');
  if (chooseSkinSliderElement?.swiper) {
    chooseSkinSliderElement.swiper.on('realIndexChange', (swiper) => {
      // console.log(swiper.activeIndex);
      // console.log(swiper.clickedIndex);
      console.log(swiper.realIndex);
    });
  }
};
