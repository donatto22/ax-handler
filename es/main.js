import fs from 'fs';

/**
 * @param { string } folder The name of the folder you need to handler
 * @param { boolean } subfolders Set true If the folder has other folders inside
 */

const slashhandler = (foldername, collection, subfolders = false) => {
    if (subfolders) {
        const slashcommands = fs.readdirSync(foldername); // ./slashcmd

        for (const folders of slashcommands) {
            const folder = fs.readdirSync(`${foldername}/${folders}`);

            for (const file of folder) {
                const command = require(`${foldername}/${folders}/${file}`);
                collection.set(command.data.name, command);
            }
        }
    } else {
        const slashcommands = fs.readdirSync(folder); // ./slashcmd

        for (const file of slashcommands) {
            const command = require(`${folder}/${file}`);
            collection.set(command.data.name, command);
        }
    }
};

/**
 * @param { Client } client Discord client
 * @param { string } folderc The path  of the folder you need to handler
 */

const eventhandler = (client, folderc) => {
    const events = fs.readdirSync(folderc);

    for (const file of events) {
        const event = require(`${folderc}/${file}`);
        client.on(event.name, (...args) => event.run(client, ...args));
    }
};

export { eventhandler, slashhandler };
