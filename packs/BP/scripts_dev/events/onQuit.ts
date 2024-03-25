import Listener from "../framework/events/Listener";
import Loader from "../Loader";
import {Player} from "@minecraft/server";
import PlayerQuitEvent from "../framework/events/types/player/PlayerQuitEvent";

export class onQuit extends Listener
{
    onEvent(event: PlayerQuitEvent, loader: Loader): void
    {
        const player: Player = event.getPlayer();

        loader.getWorld().broadcastMessage(
            "§6{player} §fhas leave world !".replace("{player}", player.name),
            "§6[§fQuit§6]"
        );
    }
}