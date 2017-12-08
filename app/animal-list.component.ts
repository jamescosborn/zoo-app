import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

// <select (change)="onChange($event.target.value)">
//   <option value="allAnimals">All Animals</option>
//   <option value="completedAnimals">Completed Animals</option>
//   <option value="incompleteAnimals" selected="selected">Incomplete Animals</option>
// </select>

@Component({
  selector: 'animal-list',
  template: `

  <select (change)="onChange($event.target.value)">
    <option value="allAnimals" selected="selected">All Animals</option>
    <option value="youngAnimals">Young Animals</option>
  </select>
  <ul>
    <h3 (click)="viewAnimal(currentAnimal)" *ngFor="let currentAnimal of childAnimalList | youngness:filterByYoungness">{{currentAnimal.name}}</h3>
  </ul>
    <div class="well" *ngIf="selectedAnimal">
      <h4>Name: {{selectedAnimal.name}}</h4>
      <h4>Species: {{selectedAnimal.species}}</h4>
      <h4>Age: {{selectedAnimal.age}}</h4>
      <h4>Diet: {{selectedAnimal.diet}}</h4>
      <h4>Zoo Location: {{selectedAnimal.zooloc}}</h4>
      <h4>Sex: {{selectedAnimal.sex}}</h4>
      <h4>Number of Caretakers: {{selectedAnimal.noc}}</h4>
      <h4>Likes: {{selectedAnimal.likes}}</h4>
      <h4>Dislikes: {{selectedAnimal.dislikes}}</h4>
      <h3>Edit Animal</h3>
      <label>Edit Age:</label>
      <input [(ngModel)]="selectedAnimal.age">
      <label>Edit Number of Care Takers:</label>
      <input [(ngModel)]="selectedAnimal.noc">
      <button (click)="doneButtonClicked()">Done</button>
    </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  filterByYoungness: string = "allAnimals";

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }


  // priorityColor(currentAnimal) {
  //   if (currentAnimal.priority === 3) {
  //     return "bg-danger";
  //   } else if (currentAnimal.priority === 2) {
  //     return "bg-warning";
  //   } else {
  //     return "bg-info";
  //   }
  // }

  viewAnimal(clickedAnimal){
  this.selectedAnimal = clickedAnimal;
  }
  selectedAnimal = null;

  onChange(optionFromMenu) {
    this.filterByYoungness = optionFromMenu;
  }


}
