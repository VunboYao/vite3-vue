import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { EventTrack } from './EventTrack';
createApp(App).mount('#app')

window.onerror = function (msg, source, lineno, a, b) {
  console.log('onerror => ', msg, source, lineno, a, b);
}

window.addEventListener('error', error => {
  console.log('addEventListener :>> ', error);
})

window.addEventListener('unhandledrejection', e => {
  console.log('getPromiseError', e);
})
new EventTrack()
