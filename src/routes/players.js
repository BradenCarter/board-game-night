import { player_controller_getPlayer, player_controller_addPlayer } from '../controllers/players.js';

import express from 'express';

var router = express.Router();

router.post('/:id', player_controller_addPlayer);
router.get('/:id', player_controller_getPlayer);

export { router }


