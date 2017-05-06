import {NgModule} from "@angular/core";

import {LoadingSpinnerComponent} from "./loading-spinner.component";
import {MarkdownComponent} from "./markdown.component";

@NgModule({
    declarations: [
        LoadingSpinnerComponent,
        MarkdownComponent
    ],
    exports: [
        LoadingSpinnerComponent,
        MarkdownComponent
    ]
})
export class CommonModule { }
