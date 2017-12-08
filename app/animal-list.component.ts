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
    <li (click)="viewAnimal(currentAnimal)" *ngFor="let currentAnimal of childAnimalList">{{currentAnimal.name}}</li>
  </ul>
  <div class="animal-wrapper" *ngIf="selectedAnimal">
      <h3>Edit Animal</h3>
      <label>Edit Animal Name:</label>
      <input [(ngModel)]="selectedAnimal.age">
      <input [(ngModel)]="selectedAnimal.noc">
      <!--<button (click)="editKegAttribute(selectedBeer.name)">Edit Keg</button>--->
      <h4>{{selectedAnimal.name}}</h4>
      <h4>{{selectedAnimal.species}}</h4>
      <h4>{{selectedAnimal.age}}</h4>
      <h4>{{selectedAnimal.diet}}</h4>
      <h4>{{selectedAnimal.zooloc}}</h4>
      <h4>{{selectedAnimal.sex}}</h4>
      <h4>{{selectedAnimal.noc}}</h4>
      <h4>{{selectedAnimal.likes}}</h4>
      <h4>{{selectedAnimal.dislikes}}</h4>
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

}
