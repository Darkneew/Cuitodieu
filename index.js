const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
bot.login("insert token");
bot.on('ready', () => {
    console.log("Alleluia it is working")
    bot.user.setActivity("des cuitochettes", {type: 3});
});
const prefix = "!";

bot.on('message',(message)=> {
    if (!message.content.startsWith(prefix)) return;
    let cmd = message.content.split(" ")[0].split(prefix).join("");
    let msg = message.content.split(" ").splice(1).join(" ");
    if (cmd == "decide") {
        message.channel.send("https://tenor.com/view/fanta-pas-toi-qui-d%c3%a9cide-serious-selfie-gif-13900956");
    }
    else if (cmd == "ping") {
        message.channel.send(`Mon ping est de 1 cuitochette`)
    }
    else if (cmd == "lovecalc") {
        let user1, user2;
        let mentions = message.mentions.users.array();
        if (mentions.length == 0) return message.channel.send("Mentionne qqun a aimer espece de tractopelle");
        else if (mentions.length == 1) {
            user1 = message.author;
            user2 = mentions[0];
        }
        else {
            user1 = mentions[0];
            user2 = mentions[1];
        }
        let users = JSON.parse(fs.readFileSync("./users.json", "utf8"));
        let abool = false;
        if (!users[user1.id]) {users[user1.id] = {}; abool = true};
        if (!users[user1.id][user2.id]) {users[user1.id][user2.id] = Math.floor(Math.random()*40)+30; abool = true};
        message.channel.send(`:heart: **${user1.username}** est amoureux à ${users[user1.id][user2.id]}% de **${user2.username}** :heart:`)
        if (abool) fs.writeFile("./users.json", JSON.stringify(users), (x) => {
            if (x) console.error(x)
        });
    }
    else if (cmd == "help") {
        message.channel.send("```css\nVoici les commandes disponibles:\n\n[lovecalc] : Calcule votre amour pour une personne. Si vous mentionnez deux personnes, calcule l'amour de la première personne pour la deuxième.\n[decide] : MAI C PA TWA KI DECIDEUH\n[kiss] : embrasse quelqu'un\nhug : caline quelqu'un\n[cuddle] : Reconforte quelqu'un\n[slap] : donne une claque a quelqu'un\n[punch] : frappe quelq'un\n[bang] : tire sur quelqu'un\n[cuitogone] : se bat avec quelqu'un\n[pat] : caresse quelqu'un```")
    }
    else if (cmd == "kiss") {
        let mention = message.mentions.users.first();
        if (!mention) return message.channel.send(`Euuuh... ${message.author.username} se fait des bisous tout(e) seul(e)`);
        message.channel.send(`${message.author.username} fait un bisus tout baveux à ${mention.username}`);
        let users = JSON.parse(fs.readFileSync("./users.json", "utf8"));
        if (!users[message.author.id]) {users[message.author.id] = {}};
        if (!users[message.author.id][mention.id]) {users[message.author.id][mention.id] = Math.floor(Math.random()*40)+30};
        users[message.author.id][mention.id] += 5;
        if (users[message.author.id][mention.id] > 100) users[message.author.id][mention.id] = 100;
        fs.writeFile("./users.json", JSON.stringify(users), (x) => {
            if (x) console.error(x)
        });
    }
    else if (cmd == "bang") {
        let mention = message.mentions.users.first();
        if (!mention) return message.channel.send(`Euuuh... ${message.author.username} se tire tout(e) seul(e)`);
        message.channel.send(`${message.author.username} snipe de loin ${mention.username}`);
        let users = JSON.parse(fs.readFileSync("./users.json", "utf8"));
        if (!users[message.author.id]) {users[message.author.id] = {}};
        if (!users[message.author.id][mention.id]) {users[message.author.id][mention.id] = Math.floor(Math.random()*40)+30};
        users[message.author.id][mention.id] -= 5;
        if (users[message.author.id][mention.id] < 1) users[message.author.id][mention.id] = 1;
        fs.writeFile("./users.json", JSON.stringify(users), (x) => {
            if (x) console.error(x)
        });
    }
    else if (cmd == "cuddle") {
        let mention = message.mentions.users.first();
        if (!mention) return message.channel.send(`Euuuh... ${message.author.username} se reconforte tout(e) seul(e)`);
        message.channel.send(`${message.author.username} reconforte ${mention.username}`);
        let users = JSON.parse(fs.readFileSync("./users.json", "utf8"));
        if (!users[message.author.id]) {users[message.author.id] = {}};
        if (!users[message.author.id][mention.id]) {users[message.author.id][mention.id] = Math.floor(Math.random()*40)+30};
        if (!users[mention.id]) {users[mention.id] = {}};
        if (!users[mention.id][message.author.id]) {users[mention.id][message.author.id] = Math.floor(Math.random()*40)+30};
        let num = Math.floor(users[mention.id][message.author.id] / 10)
        users[message.author.id][mention.id] += num;
        if (users[message.author.id][mention.id] > 1) users[message.author.id][mention.id] = 100;
        fs.writeFile("./users.json", JSON.stringify(users), (x) => {
            if (x) console.error(x)
        });
    }
    else if (cmd == "punch") {
        let mention = message.mentions.users.first();
        if (!mention) return message.channel.send(`Euuuh... ${message.author.username} se tape tout(e) seul(e)`);
        message.channel.send(`${message.author.username} tape très violemment ${mention.username}`);
        let users = JSON.parse(fs.readFileSync("./users.json", "utf8"));
        if (!users[message.author.id]) {users[message.author.id] = {}};
        if (!users[message.author.id][mention.id]) {users[message.author.id][mention.id] = Math.floor(Math.random()*40)+30};
        if (!users[mention.id]) {users[mention.id] = {}};
        if (!users[mention.id][message.author.id]) {users[mention.id][message.author.id] = Math.floor(Math.random()*40)+30};
        let num = Math.floor((100 - users[mention.id][message.author.id]) / 10)
        users[message.author.id][mention.id] -= num;
        if (users[message.author.id][mention.id] < 1) users[message.author.id][mention.id] = 1;
        fs.writeFile("./users.json", JSON.stringify(users), (x) => {
            if (x) console.error(x)
        });
    }
    else if (cmd == "slap") {
        let mention = message.mentions.users.first();
        if (!mention) return message.channel.send(`Euuuh... ${message.author.username} se claque tout(e) seul(e)`);
        message.channel.send(`${message.author.username} claque ${mention.username}. J'aurais pas aimé`);
        let users = JSON.parse(fs.readFileSync("./users.json", "utf8"));
        if (!users[message.author.id]) {users[message.author.id] = {}};
        if (!users[message.author.id][mention.id]) {users[message.author.id][mention.id] = Math.floor(Math.random()*40)+30};
        if (!users[mention.id]) {users[mention.id] = {}};
        if (!users[mention.id][message.author.id]) {users[mention.id][message.author.id] = Math.floor(Math.random()*40)+30};
        let num = Math.floor([message.author.id][mention.id] / 10);
        users[message.author.id][mention.id] -= num;
        if (users[message.author.id][mention.id] < 1) users[message.author.id][mention.id] = 1;
        fs.writeFile("./users.json", JSON.stringify(users), (x) => {
            if (x) console.error(x)
        });
    }
    else if (cmd == "cuitogone") {
        let mention = message.mentions.users.first();
        if (!mention) return message.channel.send(`Euuuh... ${message.author.username} se vénère tout(e) seul(e)`);
        message.channel.send(`${message.author.username} défie ${mention.username}. Vasy jte cuitoplante quand jveux sale fils de tractopelle`);
        let users = JSON.parse(fs.readFileSync("./users.json", "utf8"));
        if (!users[message.author.id]) {users[message.author.id] = {}};
        if (!users[message.author.id][mention.id]) {users[message.author.id][mention.id] = Math.floor(Math.random()*40)+30};
        if (!users[mention.id]) {users[mention.id] = {}};
        if (!users[mention.id][message.author.id]) {users[mention.id][message.author.id] = Math.floor(Math.random()*40)+30};
        users[mention.id][message.author.id] -= 1;
        users[message.author.id][mention.id] -= 1;
        if (users[message.author.id][mention.id] < 1) users[message.author.id][mention.id] = 1;
        if (users[mention.id][message.author.id] < 1) users[mention.id][message.author.id] = 1;
        fs.writeFile("./users.json", JSON.stringify(users), (x) => {
            if (x) console.error(x)
        });
    }
    else if (cmd == "pat") {
        let mention = message.mentions.users.first();
        if (!mention) return message.channel.send(`Euuuh... ${message.author.username} se caresse tout(e) seul(e).. C'est extremement génant à annoncer pour mwa`);
        message.channel.send(`${message.author.username} caresse ${mention.username}. Kesk'ils sont meugnons à deux`);
        let users = JSON.parse(fs.readFileSync("./users.json", "utf8"));
        if (!users[message.author.id]) {users[message.author.id] = {}};
        if (!users[message.author.id][mention.id]) {users[message.author.id][mention.id] = Math.floor(Math.random()*40)+30};
        if (!users[mention.id]) {users[mention.id] = {}};
        if (!users[mention.id][message.author.id]) {users[mention.id][message.author.id] = Math.floor(Math.random()*40)+30};
        users[mention.id][message.author.id] += 1;
        users[message.author.id][mention.id] += 1;
        if (users[message.author.id][mention.id] > 100) users[message.author.id][mention.id] = 100;
        if (users[mention.id][message.author.id] > 100) users[mention.id][message.author.id] = 100;
        fs.writeFile("./users.json", JSON.stringify(users), (x) => {
            if (x) console.error(x)
        });
    }
    else if (cmd == "hug") {
        let mention = message.mentions.users.first();
        if (!mention) return message.channel.send(`Euuuh... ${message.author.username} se caline tout(e) seul(e)`);
        message.channel.send(`${message.author.username} caline ${mention.username}. Awww`);
        let users = JSON.parse(fs.readFileSync("./users.json", "utf8"));
        if (!users[message.author.id]) {users[message.author.id] = {}};
        if (!users[message.author.id][mention.id]) {users[message.author.id][mention.id] = Math.floor(Math.random()*40)+30};
        if (!users[mention.id]) {users[mention.id] = {}};
        if (!users[mention.id][message.author.id]) {users[mention.id][message.author.id] = Math.floor(Math.random()*40)+30};
        let num = Math.floor([message.author.id][mention.id] / 10);
        users[message.author.id][mention.id] += num;
        if (users[message.author.id][mention.id] > 100) users[message.author.id][mention.id] = 100;
        fs.writeFile("./users.json", JSON.stringify(users), (x) => {
            if (x) console.error(x)
        });
    }
    else {
        message.channel.send("si tu sais pas ecrire correctemennt une commande et bien cuitopars!")
    }
})