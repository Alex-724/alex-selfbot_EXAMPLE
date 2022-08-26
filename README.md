## Note
```txt
The next update well be added after 10 star
```

## Installation
```txt
npm i alex-selfbot
```

## Delcaration
```js
const Alex = require('alex-selfbot');
```

## Fast Demo
```js
const Alex = require("alex-selfbot");
const alex = new Alex();
alex.login(token); // You must type account token here
alex.status("idle"); // you have to choose statues between [dnd, idle, online]
alex.joinChannel("channelId", {
  mute: true, // you can add self mute
  def: true, // you can add self def
});
```
