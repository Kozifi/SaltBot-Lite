# SaltBot Lite for Discord.js

This is a lighter collection of commands for my discord.js bot [SaltBot](https://bots.ondiscord.xyz/bots/539453930313351168). You could also just run the bot as it is.

 All scripts are originally written in JavaScript but now converted to TypeScript. If you are not comfortable working with TypeScript or don't have it set up, you can use the compiled JavaScript files instead, although it is not recommended.

#### Why is the full SaltBot closed source?

SaltBot contains a lot of personalized and hard-coded stuff written for my school, such as automatically updated lunch and schedule commands, namelists etc. Therefore the original source code will not be public. 

#### Invite SaltBot

If you want to add SaltBot to your server without hosting yourself, you can invite him [here](https://bots.ondiscord.xyz/bots/539453930313351168). Yes I call SaltBot "him".

# Setup

You're free to do whatever you want with the code. You can either run the bot as it is and modify it, or you can copy code and use in your existing bot. To run it as it is, download and setup the repo with these commands:

```
git clone https://github.com/LiterallyFabian/SaltBot-Lite
cd SaltBot-Lite
npm install
node index.js
```

The **[commands/config.json](commands/config.json)** file contains some information needed for the index.js file, but is not used by any of the commands.

For the commands above you need to install [NodeJS](https://nodejs.org/en/) and [Git](https://git-scm.com/).

# Commands 

###### \<required> [optional]

## Fun 🎪

**-fight <user\> [user]** Fight with someone, last one alive wins!

###### TypeScript: [fight.ts](commands/TypeScript/fight.ts), JavaScript: [fight.js](commands/JavaScript/fight.js)

![fight command](https://media.discordapp.net/attachments/501452852364050443/697571646935924736/unknown.png?width=430&height=677)

**-spinnerduel \<user>** Challenge someone to an epic fidget spinner battle in real-time!

###### TypeScript: [spinnerduel.ts](commands/TypeScript/spinnerduel.ts), JavaScript: [spinnerduel.js](commands/JavaScript/spinnerduel.js)

![spinnerduel](https://media.discordapp.net/attachments/501452852364050443/697572737954087002/unknown.png)

**-spinner** Spin your own fidget spinner. Why does everything have to be a battle?

###### TypeScript: [spinner.ts](commands/TypeScript/spinner.ts), JavaScript: [spinner.js](commands/JavaScript/spinner.js)

![spinner](https://cdn.discordapp.com/attachments/501452852364050443/697574022103171105/unknown.png)

![spinner](https://cdn.discordapp.com/attachments/501452852364050443/697574049467072572/unknown.png)

**-bottleflip** Try to hit an epic bottle flip. Yup.

###### TypeScript: [bottleflip.ts](commands/TypeScript/bottleflip.ts), JavaScript: [bottleflip.js](commands/JavaScript/bottleflip.js)

![Bottleflip](https://cdn.discordapp.com/attachments/501452852364050443/697574954224582676/unknown.png)



**-opinion [question]** Ask the bot a yes/no question, maybe he got some good insights?

###### TypeScript: [opinion.ts](commands/TypeScript/opinion.ts), JavaScript: [opinion.js](commands/JavaScript/opinion.js)

![opinion](https://i.imgur.com/JXCBpE5.png)

**-iam <user\> <text\>** Pretend to be someone else. Because why be yourself when you have the option not to? This is done through webhooks.

###### TypeScript: [iam.ts](commands/TypeScript/iam.ts), JavaScript: [iam.js](commands/JavaScript/iam.js)

![opinion](https://cdn.discordapp.com/attachments/520168552687206400/738809452827770973/unknown.png)

**-reverse** Sends a reverse card with a random color. 

###### TypeScript: [reverse.ts](commands/TypeScript/reverse.ts), JavaScript: [reverse.js](commands/JavaScript/reverse.js)

![reverse](https://i.imgur.com/5OuuKyz.png)

**-dm <user\> <text\>** Sends an anonymous message to someone

###### TypeScript: [dm.ts](commands/TypeScript/dm.ts), JavaScript: [dm.js](commands/JavaScript/dm.js)

![dm](https://i.imgur.com/MM1BaIx.png)

# Image editing 🖼

**-natsuki <goodimg\> <badimg\>** Natsuki approves your attempt

###### TypeScript: [natsuki.ts](commands/TypeScript/natsuki.ts), JavaScript: [natsuki.js](commands/JavaScript/natsuki.js)

<img src="https://media.discordapp.net/attachments/501452852364050443/697576695024320531/unknown.png" alt="sven" style="zoom: 67%;" />



**-dangofy <img\>** Make your own tasty dango!

###### TypeScript: [dangofy.ts](commands/TypeScript/dangofy.ts), JavaScript: [dangofy.js](commands/JavaScript/dangofy.js)

![dango](https://media.discordapp.net/attachments/501452852364050443/697577110918660126/unknown.png?width=609&height=676)

**-plottwist \<img>** Top 10 anime plottwists. The same command is possible with **death, betrayal & powerful**

###### TypeScript: [plottwist.ts](commands/TypeScript/plottwist.ts), JavaScript: [plottwist.js](commands/JavaScript/plottwist.js)

###### TypeScript: [death.ts](commands/TypeScript/death.ts), JavaScript: [death.js](commands/JavaScript/death.js)

###### TypeScript: [betrayal.ts](commands/TypeScript/betrayal.ts), JavaScript: [betrayal.js](commands/JavaScript/betrayal.js)

###### TypeScript: [powerful.ts](commands/TypeScript/powerful.ts), JavaScript: [powerful.js](commands/JavaScript/powerful.js)

<img src="https://cdn.discordapp.com/attachments/501452852364050443/697577996260868297/unknown.png" alt="pt" style="zoom:50%;" />

**-gone \<text>** 🦀 SOMETHING IS GONE 🦀

###### TypeScript: [gone.ts](commands/TypeScript/gone.ts), JavaScript: [gone.js](commands/JavaScript/gone.js)

![reverse](https://i.imgur.com/ajoQi7w.png)

# Utility 🔨

**-avatar [user]** Get someones avatar

###### TypeScript: [avatar.ts](commands/TypeScript/avatar.ts), JavaScript: [avatar.js](commands/JavaScript/avatar.js)

**-joindate [user]** Gets the date when you (or someone else) joined discord 

###### TypeScript: [joindate.ts](commands/TypeScript/joindate.ts), JavaScript: [joindate.js](commands/JavaScript/joindate.js)

**-uptime** Shows time since the last restart 

###### TypeScript: [uptime.ts](commands/TypeScript/uptime.ts), JavaScript: [uptime.js](commands/JavaScript/uptime.js)

**-ping** Pings the bot

###### TypeScript: [ping.ts](commands/TypeScript/ping.ts), JavaScript: [ping.js](commands/JavaScript/ping.js)

**-stats** Shows botstats 

###### TypeScript: [stats.ts](commands/TypeScript/stats.ts), JavaScript: [stats.js](commands/JavaScript/stats.js)

![stats](https://i.imgur.com/fQBwUZD.png)

**-coinflip** Flips a coin

###### TypeScript: [coinflip.ts](commands/TypeScript/coinflip.ts), JavaScript: [coinflip.js](commands/JavaScript/coinflip.js)

**-help** Shows... help

###### TypeScript: [help.ts](commands/TypeScript/help.ts), JavaScript: [help.js](commands/JavaScript/help.js)

![help](https://i.imgur.com/G8Lp04t.png)

