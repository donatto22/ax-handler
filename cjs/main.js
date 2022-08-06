'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fs = require('fs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);

/**
 * @param { string } folderc The path of the folder you need to handler
 * @param { boolean } subfolders Set true If the folder has other folders inside
 */

const slashhandler = (folderc, collection, subfolders = false) => {
    if (subfolders) {
        const slashcommands = fs__default["default"].readdirSync(folderc); // ./slashcmd

        for (const folders of slashcommands) {
            const folder = fs__default["default"].readFileSync(`${folderc}/${folders}`);

            for (const file of folder) {
                const command = require(`${folderc}/${folders}/${file}`);
                collection.set(command.data.name, cmd);
            }
        }
    } else {
        const slashcommands = fs__default["default"].readdirSync(folderc); // ./slashcmd

        for (const file of slashcommands) {
            const command = require(`${folderc}/${file}`);
            collection.set(command.data.name, cmd);
        }
    }
};

/**
 * @param { Client } client Discord client
 * @param { string } folderc The path  of the folder you need to handler
 */

const eventhandler = (client, folderc) => {
    const events = fs__default["default"].readdirSync(folderc);

    for (const file of events) {
        const event = require(`${folderc}/${file}`);
        client.on(event.name, (...args) => event.run(client, ...args));
    }
};

exports.eventhandler = eventhandler;
exports.slashhandler = slashhandler;
