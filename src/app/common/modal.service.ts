import {Injectable} from "@angular/core";

declare const $: any;

@Injectable()
export class ModalService {

    error(text: string) {
        const title: string = 'An error occurred';
        document.getElementById('modalTitle').innerText = title;
        document.getElementById('modalText').innerText = text;
        this.open();
    }

    private open(): void {
        $('#modal').modal();
    }
}
