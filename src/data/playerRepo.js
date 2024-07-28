
import { players } from "./cosmos/playersDb.js";

async function getPlayer(playerId) {
    console.log(`Requesting player with ID:${playerId}`);
    const query = `SELECT * FROM c WHERE c.id = "${playerId}"`;
    const { resources: player } = await players.items.query(query).fetchAll();
    console.log(`Found player: ${JSON.stringify(player)}`);
    if(player.length <= 0) {
        return null;
    }
    return player;
}

async function addPlayer(player) {
    let result = await getPlayer(player.id);
    if (result) {
        throw new Error(`Player with ID ${player.id} already exists`);
    } else {
        await players.items.create(player);
        console.log(`Player added: ${JSON.stringify(player)}`);
    }
}

export { getPlayer, addPlayer };