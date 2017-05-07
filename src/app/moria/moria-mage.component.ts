import {Component} from "@angular/core";
@Component({
    selector: 'moria-mage',
    template: `
<div class="container" role="main">

<h1 id="moria-winning-with-a-mage">Moria Winning With a Mage</h1>

<p>This walkthrough is based on my attempt to win the game with an elven mage. Much
of this comes from <em>30 minutes of UMoria</em>, but it’s a very long show, and I
prefer text to video.</p>

<h3 id="character-generation">Character Generation</h3>
<p>A elven mage dumps STR and CON, which you need to be aware of.</p>

<div class="highlighter-rouge"><pre class="highlight"><code>      STR   INT   WIS   DEX   CON   CHA
Elf   -1  | +2  | +1  | +1  | -2  | +1
Mage  -5  | +3  | +0  | +1  | -2  | +1 

Total -6  | +5  | +1  | +2  | -4  | +2
</code></pre>
</div>

<p>My mage started out with 5 STR and &gt;18 INT, which turned out to be a bit
problematic because of weight issues.</p>

<ul>
  <li><strong>STR</strong> makes a massive difference for carrying (extra 13lbs per STR), so you would like
at least 6-7 to start with.</li>
  <li><strong>INT</strong> is even more important. If you don’t start with at least 18 in INT,
you will get very little mana. 8-17 give base mana, 18-18/49 gives 50% extra,
18/50-18/69 gives 100% mana, and so on.</li>
  <li>The rest of the stats can be dumped, but try to get at least 7-8 in them.</li>
  <li><a href="http://beej.us/moria/mmspoilers/character.html#attributes">More information and tables here</a></li>
</ul>

<h3 id="starting-out">Starting out</h3>
<ul>
  <li>Learn <em>magic missle</em> at the start of the game, and use it as your main weapon.</li>
  <li>Buy some AC items in the shop. It’s better to get many small bonuses than a
big large one. Stay away from heavy armors.</li>
  <li>Buy a shovel and use it for digging out gold in the dungeon. At level 9 you
should drop this and use stone-to-mud instead.</li>
  <li>Learn <em>phase door</em> and <em>teleport self</em> as quickly as possible. It’s too
late when you are surrounded by monsters.</li>
  <li>Never continue adventuring without full HP and mana.</li>
  <li>Save scrolls of <em>phase door</em> and <em>teleport</em>, since they have a 100% success
rate. Use these when you have less than half HP, or out of mana.</li>
  <li>Don’t learn spells such as healing and cure poison until you are dying and
need them. You probably won’t need to learn them at all.</li>
  <li>When possible, learn to create food magically. Carrying food is really heavy
for a mage.</li>
  <li>Use m-a-f every time the screen moves, so you don’t walk into traps.</li>
</ul>

<h3 id="mission-i-a-librarian-is-you">Mission I: A Librarian Is You</h3>
<p>Collect everything you can find on the first levels and sell it to shopkeepers. Use
this money to purchase all four mage books. If the book you want to buy is out of
stock, it will appear again later. Sometimes you will lose books (especiallt to
those nasty hobbits), which makes getting them back the highest priority. One of
each book is fine unless you have really high strength and is fine with carrying
doubles. A shovel will net you a lot of gold as well, so buy one ASAP. Note that
this is the hardest part of playing as a mage. If you are careful now, the rest
of the game will be easy.</p>

<h3 id="mission-ii-i-see-dead-people">Mission II: I See Dead People</h3>
<p>You need an item with permanent see-invisible. Until you do this
you should not go past 950ft, since 1000-1200ft seem to spawn lots of new
invisible monsters which can drain your experience and stats quickly. I did this by
clearing 900ft and 850ft and recalling afterwards to check the shop.
It is possible to dive to 50ft, wait 999 turns, then go up and check the
shop (which restocks every 1000 turns if you are not in town). This may
actually be better odds than normal adventuring, but it’s too boring to be
worth it. In a worst (best?) case scenario, a Zweihander(HA) is worth
~13k, and shopkeepers usually have a 200% starting price tag, so you may
want to have roughly 20k ready. It’s is easy to accidently insult the
shopkeeper enough to kick you out when buying these expensive items, so don’t
haggle too much.
A good way of getting items is <a href="/moria/wocm.html">farming with a wand of clone
monster</a>.
The following items should provide see-invisible</p>

<ul>
  <li>Ring of See Invisible</li>
  <li>Amulet of the Magi</li>
  <li>Melee weapon (DF)</li>
  <li>Melee weapon (SU)</li>
  <li>Melee weapon (HA)</li>
</ul>

<h3 id="mission-iii-heading-to-the-gym">Mission III: Heading to the Gym</h3>
<p>This is a good time to max your stats. This is done by drinking potions that
raise stat (potion of strength, potion of intelligence, etc).  As mentioned
in the beginning, STR and INT are basically the only abilities that you care
about, but since all stat-potions drop at the same rate, you will raise most
other stats as well.</p>

<p>You will want to max your strength and intelligence.
Go to 1250ft and clear it. Then either recall to town and back, so you can clear
it again, or drop down to 1300ft and keep repeating between those levels. 1300ft
have an only slightly worse chance of dropping the potions, but some new fun monsters
such as disenchanter bats can make your life miserable down there.</p>

<h3 id="mission-iv-need-for-speed">Mission IV: Need For Speed</h3>
<p><strong><em>Work In Progess</em></strong><br />
I already found my ring of speed +1 during Mission III, and it made my life much
easier. Ring of Speed drops on 2500ft, which is probably way too deep to go
without speed, so I wonder what the best way of getting one is? This mission
should maybe be <em>Get to Level X to Learn Spell Y</em>? I will update this when I’m
done with Mission III</p>


</div>
`
})

export class MoriaMageComponent { }
