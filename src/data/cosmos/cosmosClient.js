import { CosmosClient } from "@azure/cosmos";

let client;

const getClient = () => {
    if (!client) {
        // Connection string for your Azure Cosmos DB account
        let dbUrl = process.env.COSMOS_DB_URL;
        let dbKey = process.env.COSMOS_DB_KEY;
        
        let connectionString = `AccountEndpoint=${dbUrl};AccountKey=${dbKey}`;
        client = new CosmosClient(connectionString);
    }
    return client;
}

export { getClient };