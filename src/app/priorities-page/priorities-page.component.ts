import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PriorityComponent } from "../priority/priority.component";
import { ModalComponent } from "../modal/modal.component";

@Component({
    selector: 'app-priorities-page',
    standalone: true,
    templateUrl: './priorities-page.component.html',
    styleUrl: './priorities-page.component.scss',
    imports: [CommonModule, PriorityComponent, ModalComponent]
})
export class PrioritiesPageComponent {
  priorities = [
    { task: "Get food", urgency: 1 },
    { task: "Clean", urgency: 2 },
    { task: "Study", urgency: 3 },
    { task: "Exercise", urgency: 4 },
    { task: "Read", urgency: 5 },
    { task: "Workout", urgency: 6 },
    { task: "Write", urgency: 7 },
    { task: "Call", urgency: 8 }
  ];
}
