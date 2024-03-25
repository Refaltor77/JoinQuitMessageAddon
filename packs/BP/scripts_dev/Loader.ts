import Init from "./framework/Init";
import {EVENTS} from "./framework/events/EventList";
import {onQuit} from "./events/onQuit";
import {onJoin} from "./events/onJoin";

export default class Loader extends Init
{
    public onStart(): void
    {
        // function to register events and cmd
        this.registerEvent(EVENTS.playerQuitEvent, new onQuit());
        this.registerEvent(EVENTS.playerJoinEvent, new onJoin());
    }
}