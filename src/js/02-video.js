import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const LS_KEY = 'videoplayer-current-time';

const time = function (currentTime) {
  let savedTime = 0;
  let { seconds } = currentTime;
  savedTime = localStorage.setItem(LS_KEY, seconds);
};

player.on('timeupdate', throttle(time, 1000));
let savedCurrentTime = JSON.parse(localStorage.getItem(LS_KEY));
// console.log(typeof savedCurrentTime);
if (!savedCurrentTime) {
  savedCurrentTime = 0;
}
player.setCurrentTime(savedCurrentTime);

// import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';

// const STORAGE_KEY = 'videoplayer-current-time';

// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);

// const savedTime = JSON.parse(localStorage.getItem(STORAGE_KEY));

// if (savedTime) {
//   player.setCurrentTime(savedTime.seconds);
// }

// player.on('timeupdate', throttle(onPlayerStart, 1000));

// function onPlayerStart(e) {
//   localStorage.setItem(
//     STORAGE_KEY,
//     JSON.stringify({
//       seconds: e.seconds,
//     })
//   );
// }
