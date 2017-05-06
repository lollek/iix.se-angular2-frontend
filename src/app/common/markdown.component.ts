import {Component, Input, OnInit, OnChanges} from "@angular/core";

import marked from 'marked';


@Component({
    selector: 'markdown',
    template: `
<div [innerHTML]="parsedData"></div>`
})

export class MarkdownComponent implements OnInit, OnChanges {
    @Input('data')
    data: string;

    parsedData: string;

    ngOnInit(): void {
        this.doMarkdown();
    }

    ngOnChanges() {
        this.doMarkdown();
    }

    doMarkdown(): void {
        if (this.data) {
            this.parsedData = marked.setOptions({}).parse(this.data);
        }
    }

}
