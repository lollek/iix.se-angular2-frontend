import {NgModule} from "@angular/core";

import {LoadingSpinnerComponent} from "./loading-spinner.component";
import {MarkdownComponent} from "./markdown.component";
import {HttpClient} from "./http-client.service";

@NgModule({
    declarations: [
        LoadingSpinnerComponent,
        MarkdownComponent
    ],
    providers: [
        HttpClient
    ],
    exports: [
        LoadingSpinnerComponent,
        MarkdownComponent
    ]
})
export class CommonModule { }
