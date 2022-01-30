const Discord = require("discord.js-selfbot")
const client = new Discord.Client();

async function login(token) {
  client.login(token);
  client.on("ready", async () => {
    console.log(`login as ${client.user.tag}`)
  })
}

async function joinVoice(id) {
  client.on("ready", async () => {
    let channel = client.channels.cache.get(id)
    if (!channel) return console.error("You need to type voice channel id");
    channel.join();
    console.log(`join ${channel.name}`)
  })
}

async function setStatus(statu) {
  client.on("ready", async () => {
    if (!statu) return console.error("You need to type status between `online`,`idle`,`dnd`")
    if (statu !== "online" && statu !== "idle" && statu !== "dnd") return console.error("You need to type status between `online`,`idle`,`dnd`")
    client.user.setPresence({ status: statu })
    console.log(`status is ${statu}`)
  })
}

async function start(data) {
  const TOKEN = data.token,
    STATUS = data.status,
    CHANNEL_ID = data.channel_id,
    MUTE = data.mute,
    DEF = data.def;
  ////////////////////////////////////////////////////////////////////////////////
  const alex = new Discord.Client();
  if (!TOKEN) return console.error("You need to type token")
  alex.login(TOKEN);
  alex.on("ready", async () => {
    console.log(`login as ${alex.user.tag}`)
  })
  ////////////////////////////////////////////////////////////////////////////////
  alex.on("ready", async () => {
    if (STATUS === "false") return;
    if (!STATUS) return console.error("You need to type status between `online`,`idle`,`dnd`")
    if (STATUS !== "online" && STATUS !== "idle" && STATUS !== "dnd") return console.error("You need to type status between `online`,`idle`,`dnd`")
    alex.user.setPresence({ status: STATUS })
    console.log(`status is ${STATUS}`)
  })
  ////////////////////////////////////////////////////////////////////////////////
  alex.on("ready", async () => {
    if (CHANNEL_ID === "false") return;
    if (!CHANNEL_ID) return console.error("You need to type voice channel id")
    let channel = alex.channels.cache.get(CHANNEL_ID)
    if (!channel) return console.error("You need to type voice channel id");
    channel.join().then(connection => {
      ////////////////////
      if (DEF === "true") {
        connection.voice.setSelfDeaf(true);
      } else if (DEF === "false") {
        connection.voice.setSelfDeaf(false);
      }
      ////////////////////
      if (MUTE === "true") {
        connection.voice.setSelfMute(true);
      } else if (MUTE === "false") {
        connection.voice.setSelfMute(false);
      }
      console.log(`join ${channel.name}`);
    })
      .catch(e => {
        console.error(e);
      });
  })
}

module.exports.start = start
module.exports.login = login
module.exports.setStatus = setStatus
module.exports.joinVoice = joinVoice
