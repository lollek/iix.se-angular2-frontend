import {Component} from "@angular/core";

@Component({
    selector: 'moria-wocm',
    template: `
<div class="container" role="main">

<h1 id="moria-farming-with-wand-of-clone-monster">Moria Farming with Wand of Clone Monster</h1>

<h2 id="requirements">Requirements</h2>

<p>To farm with a wand of clone monster, you need</p>

<ol>
  <li>A wand of clone monster</li>
  <li>A monster with good drops</li>
  <li>(optional) A way to refresh your wand</li>
</ol>

<p>As always in moria, things can go wrong. It would be stupid to not carry an
escape mechanism like a scroll of teleportation.</p>

<h3 id="wand-of-clone-monster">Wand of Clone Monster</h3>
<p>The wand begins dropping on 750ft, and is therefore best aquired there. It’s not
that rare though, so you will probably find a few every once in a while.</p>

<h3 id="a-monster-with-good-drops">A monster with good drops</h3>
<ul>
  <li><strong>Gelatinous Cube</strong>
    <ul>
      <li>Starts spawning at 800ft</li>
      <li>Drops 2-6 items</li>
      <li>Moves erratically at half speed (basically not dangerous)</li>
      <li>Ruins your armor on hit</li>
      <li>Destroys items it steps on</li>
      <li>Can merge with other cubes, which wastes your wand charges</li>
    </ul>
  </li>
  <li><strong>Guardian Naga</strong>
    <ul>
      <li>Starts spawning at 750ft</li>
      <li>Drops 1-3 items</li>
      <li>Moves semi-erratically at normal speed (not dangerous if you are careful)</li>
      <li>Destroys items it steps on</li>
    </ul>
  </li>
</ul>

<h3 id="a-way-to-refresh-your-wand">A way to refresh your wand</h3>
<p>Mages (and classes with mage spells) can recharge wands through spells. It’s
also possible to buy scrolls or recharging from the shop.</p>

<hr />

<h2 id="farming-with-a-wand-of-clone-monster">Farming with a wand of clone monster</h2>
<p>The safest way to farm is by using pillars. Either find a appropriate pillar or
create one with stone-to-mud. A good example is something like this</p>

<div class="highlighter-rouge"><pre class="highlight"><code>#............#
#.....@......#
#.##########.#
#............#
............##
</code></pre>
</div>

<p>It is preferable to have it at least 4-5 tiles long, so you can move a little
bit without baiting monsters. You will want to get a monster to the edge of the
pillar, clone it, then move to the middle. This will cause one monster to follow
you, and another to become stuck on the opposite side of the wall. Example:</p>

<div class="highlighter-rouge"><pre class="highlight"><code>Position monster  Clone it          Bait it
#............#    #............#    #............#
#............#    #n...........#    #....n.......#
#n##########.# -&gt; #n##########.# -&gt; #.##########.#
#.@..........#    #.@..........#    #....n@......#
............##    ............##    ............##
</code></pre>
</div>

<p>Then you kill the monster and repeat. Don’t forget to recharge wands, rest and eat.</p>
</div>`
})

export class MoriaWocmComponent { }

