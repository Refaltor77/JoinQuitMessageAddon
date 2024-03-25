import Listener from "../framework/events/Listener";
import PlayerJoinEvent from "../framework/events/types/player/PlayerJoinEvent";
import Loader from "../Loader";
import {Player} from "@minecraft/server";

export class onJoin extends Listener
{
    onEvent(event: PlayerJoinEvent, loader: Loader): void
    {
        const player: Player = event.getPlayer();

        loader.getWorld().broadcastMessage(
            "§fWelcome to the world, §6{player} !".replace("{player}", player.name),
            "§6[§fJoin§6]"
        );
    }
}