import {getPlayer, addPlayer} from '../data/playerRepo.js';

const player_controller_getPlayer = async (req, res) =>
{
    res.send(await getPlayer("001"));
}

const player_controller_addPlayer = async (req, res) =>
{
    try
    {
        await addPlayer(req.body);
        res.status(200).send(`Added Player: players/${req.body.id}`);
    }
    catch (error){
        if(error.message.includes("already exists")) {
            res.status(400).send({"errorCode": "AP-400", "message":"Unable to fulfill request"});
        }
        else
        {
            res.status(500).send("Internal Server Error");
        }
    }
}

export {player_controller_getPlayer, player_controller_addPlayer}