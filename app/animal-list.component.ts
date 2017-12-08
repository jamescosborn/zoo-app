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

  <ul>
    <li (click)="viewAnimal(currentAnimal)" *ngFor="let currentAnimal of childAnimalList">{{currentAnimal.description}}</li>
  </ul>
  <div class="animal-wrapper" *ngIf="selectedAnimal">
      <h3>Edit Animal</h3>
      <label>Edit Beer Name:</label>
      <input [(ngModel)]="selectedAnimal.description">
      <input [(ngModel)]="selectedAnimal.priority">
      <!--<button (click)="editKegAttribute(selectedBeer.name)">Edit Keg</button>--->
      <h4>{{selectedAnimal.description}}</h4>
      <h4>{{selectedAnimal.priority}}</h4>
    </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  filterByCompleteness: string = "incompleteAnimals";
  filterByPriority: number = 1;

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  isDone(clickedAnimal: Animal) {
    if(clickedAnimal.done === true) {
      alert("This animal is done!");
    } else {
      alert("This animal is not done. Better get to work!")
    }
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
    this.filterByCompleteness = optionFromMenu;
  }

  onSwap(optionFromMenu) {
    this.filterByPriority = optionFromMenu;
  }

  toggleDone(clickedAnimal: Animal, setCompleteness: boolean) {
    clickedAnimal.done = setCompleteness;
  }
}
