import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div *ngIf="childSelectedAnimal">
      <h3>Edit Animal</h3>
      <label>Edit Age:</label>
      <input [(ngModel)]="selectedAnimal.age">
      <label>Edit Number of Care Takers:</label>
      <input [(ngModel)]="selectedAnimal.noc">
      <button (click)="doneButtonClicked()">Done</button>
   </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
