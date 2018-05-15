'use strict';

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

url = url.replace('//', '://');
url = url.replace('bots', 'odds');

console.log(url);
