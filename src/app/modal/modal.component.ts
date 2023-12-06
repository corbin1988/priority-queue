import { Component } from '@angular/core';
import { ModalSidebarComponent } from "../modal-sidebar/modal-sidebar.component";

@Component({
    selector: 'app-modal',
    standalone: true,
    templateUrl: './modal.component.html',
    styleUrl: './modal.component.scss',
    imports: [ModalSidebarComponent]
})
export class ModalComponent {

}
