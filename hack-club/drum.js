const sounds = ['SD0025', 'SD0010', 'SD0000', 'RS', 'OH25', 'MA', 'CY0010', 'CH', 'CB', 'BD0010', 'BD0000', 'CP'];
const base = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518"
const getURL = (i) => `${base}/${sounds[i]}.mp3`;
window.getURL = getURL
