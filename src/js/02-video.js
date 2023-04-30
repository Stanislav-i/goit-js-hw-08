import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const player = new Player('vimeo-player');

const STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(currentPlayerPostion) {
  let time = currentPlayerPostion.seconds;
  save(STORAGE_KEY, time);
}

window.addEventListener('load', setPlayerTimer);

function setPlayerTimer() {
  let savedPlayTime = load(STORAGE_KEY);

  player
    .setCurrentTime(savedPlayTime)
    .then(function (seconds) {
      // seconds = the actual time that the player seeked to
    })
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          // the time was less than 0 or greater than the video’s duration
          break;

        default:
          // some other error occurred
          break;
      }
    });
}
