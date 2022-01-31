import Swiper from 'swiper';
import { store } from '../store/store';
import { commonGameSlice } from '../store/slices/commonGameSlice';
import { commonUserSlice } from '../store/slices/commomUserSlice';

export const initUI = () => {
  // play button
  const playButton = document.getElementById('play-button');
  playButton.addEventListener('click', () => {
    store.dispatch(commonGameSlice.actions.playGame());
  });

  // choose skin (slider)
  type ChooseSkinSliderElementType = HTMLElement & { swiper?: Swiper };
  const chooseSkinSliderElement = document.querySelector<ChooseSkinSliderElementType>('#choose-skin-slider');
  if (chooseSkinSliderElement?.swiper) {
    chooseSkinSliderElement.swiper.on('realIndexChange', (swiper) => {
      store.dispatch(commonUserSlice.actions.setCurrentSkin(swiper.realIndex));
    });
  }

  // mute button
};
