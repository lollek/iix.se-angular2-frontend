import {Component} from "@angular/core";

@Component({
    selector: 'moria-index',
    template: `
<h1>Guide to Moria Adventuring (or How to Slay Your Balrog)</h1>

<p>
    The information on this page comes from Beej's moria page, 30 minutes of UMoria,
    investigating the source code, and simply playing the game.
</p>

<p>
    If there's something you want to know that I don't mention, it's likely
    mentioned in one of the links.
</p>

<h2>Links</h2>
<ul>
    <li><a href="http://beej.us/moria/">Beej's Moria Page</a></li>
    <li><a href="https://www.youtube.com/user/30minutesofUMoria/videos?sort=da&view=0&flow=grid">30 minutes of UMoria (walkthrough)</a></li>
    <li><a href="https://packages.debian.org/stable/moria">Debian moria package</a></li>
</ul>

<h2>Table of Contents</h2>
<ul>
    <li><a routerLink="/moria/spoilers1.2">The Moria Spoilers 1.2 (Wall of Text)</a></li>
    <li><a routerLink="/moria/general">General Tips</a></li>
    <li><a routerLink="/moria/wocm">Farming with a wand of clone monster</a></li>
    <li><a routerLink="/moria/winning_mage">Winning Moria with a Mage</a></li>
</ul>`
})
export class MoriaIndexComponent { }
