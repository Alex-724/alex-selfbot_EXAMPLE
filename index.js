const client = require('alex-selfbot');
// you can online more than 100 account in one host
client.start({
    token: "false", // You must type account token here
    status: "idle", // You need to type account statues here if you don't need type "false"
    channel_id: "12345678", // You need to type voice channel id here if you don't need type "false"
    mute: "true", // you can add self mute if you don't need type "false"
    def: "true" // you can add self defend if you don't need type "false"
});

client.start({
    token: "false", // You must type account token here
    status: "dnd", // You need to type account statues here if you don't need type "false"
    channel_id: "12345678", // You need to type voice channel id here if you don't need type "false"
    mute: "true", // you can add self mute if you don't need type "false"
    def: "false" // you can add self defend if you don't need type "false"
});