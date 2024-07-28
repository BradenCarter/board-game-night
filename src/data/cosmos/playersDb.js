import {getClient} from "./cosmosClient.js";

// Name of your database and container
const databaseName = "BoardGameNight";
const containerName = "Players";

const players = getClient().database(databaseName).container(containerName);

export {players};