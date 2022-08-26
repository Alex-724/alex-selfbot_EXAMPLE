const Alex = require("alex-selfbot");
// Code Demo
// First account
const alex = new Alex();
alex.login(token); // You must type account token here
alex.status("idle"); // you have to choose statues between [dnd, idle, online]
alex.joinChannel("channelId", {
  mute: true, // you can add self mute
  def: true, // you can add self def
});

// Second account
const alex2 = new Alex();
alex2.login(token); // You must type account token here
alex2.status("idle"); // you have to choose statues between [dnd, idle, online]
alex2.joinChannel("channelId", {
  mute: true, // you can add self mute
  def: true, // you can add self def
});
