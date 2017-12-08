import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>PDX Zoo Animal Tracker</h1>
      <h1>{{currentFocus}}</h1>
      <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
      <hr>
      <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
      <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
    </div>
  `
})

export class AppComponent {
  currentFocus: string = "Animal List"
  selectedAnimal = null;

  masterAnimalList: Animal[] = [
    new Animal("Marty", "Walrus", 12, "Fish", "Grizzly Grotto", "Male", "Barking", "Rude people"),
    new Animal("Henrietta", "Seel", 1, "Fish", "Grizzly Grotto", "Female", "Doing tricks", "Walruses/Walrie"),
    new Animal("Shadowfax", "Mini-horse", 1, "Carrots", "Enchanted Stables", "Male", "Nose Scratches", "Mice"),
  ];

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }
}
