import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service'

@Directive({
    selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
    private element: HTMLElement;
    @Input('modal-trigger') modalId: string; 

    constructor(elementRef: ElementRef, @Inject(JQ_TOKEN) private $: any) {
        this.element = elementRef.nativeElement;
    }

    ngOnInit() {
        this.element.addEventListener('click', e => {
            this.$(`#${this.modalId}`).modal({});
            //this.$('#simple-modal').modal({});
        });
    }
}