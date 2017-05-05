import {Component} from "@angular/core";

@Component({
    selector: 'loading-spinner',
    template: `
<h3>Loading
  <span class="fa fa-refresh spinning"></span>
</h3>`
})

export class LoadingSpinnerComponent { }
