module.exports = {
  Admins: ["582206666431266816", "UserID"], //Admins of the bot
  ExpressServer: true, //If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ">", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/nhentai", //Support Server Link
  Token: process.env.Token || "MTA4MTg5NTAxMzA1Njc4MjM1Nw.G3Gtns.aO3hezgx_4wZ59arrhvb2e5vCONa3Ar03muc-s", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "1081895013056782357", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "MudnV_tT4afup6w0r0JDrZwBSiULVvCp", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  ServerDeafen: true, //If you want bot to stay deafened
  DefaultVolume: 100, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205281600, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku
  
  Presence: {
    status: "online", // You can show online, idle, and dnd
    name: "Music", // The message shown
    type: "LISTENING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

  //Lavalink
  Lavalink: {
    id: "Main",
    host: "lavalink.devamop.in",
    port: 443, // The port that lavalink is listening to. This must be a number!
    pass: "DevamOP",
    secure: true, // Set this to true if the lavalink uses SSL or you're hosting lavalink on repl.it
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "203d9fcd5ac94bd39f2cd0369d8c8092", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "1f83afbaec924094a71cbebcb6497b53", //Spotify Client Secret
  },
};
