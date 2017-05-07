import {Component} from "@angular/core";

@Component({
    selector: 'moria-general',
    template: `
<h1>Moria General Tips</h1>

<h3>Traps</h3>
<p>
    Disarming traps give exp. But only do this if you are fine with the trap possibly springing on you, since sooner or later it will.
</p>

<h3>Invisible monsters</h3>
<p>
    A good way to kill invisible monsters is moving into a corridor, waiting until it
    hits you, and then attacking the way you came from. If this doesn't work, it's one
    of the ghosts which can walk through walls. It's usually better to just leave than
    trying to kill those, since they don't chase much anyways.
</p>`
})

export class MoriaGeneralComponent { }
