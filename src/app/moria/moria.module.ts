import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {MoriaIndexComponent} from "./moria-index.component";
import {MoriaSpoilersComponent} from "./moria-spoilers.component";
import {MoriaGeneralComponent} from "./moria-general.component";
import {MoriaMageComponent} from "./moria-mage.component";
import {MoriaWocmComponent} from "./moria-wocm.component";

const routes: Routes = [
    { path: 'moria', component: MoriaIndexComponent },
    { path: 'moria/spoilers1.2', component: MoriaSpoilersComponent },
    { path: 'moria/general', component: MoriaGeneralComponent },
    { path: 'moria/winning_mage', component: MoriaMageComponent },
    { path: 'moria/wocm', component: MoriaWocmComponent },
];

@NgModule({
    declarations: [
        MoriaIndexComponent,
        MoriaSpoilersComponent,
        MoriaGeneralComponent,
        MoriaMageComponent,
        MoriaWocmComponent,
    ],
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class MoriaModule { }
