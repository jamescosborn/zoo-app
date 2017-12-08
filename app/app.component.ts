import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1 class="jumbotron">PDX Zoo Animal Tracker</h1>
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
    new Animal("Marty", "Renegade Walrus", 12, "Fish, Sweet Tarts, Cinnabons", "Grizzly Grotto", "Male", 3, "Barking", "Flash photography"),
    new Animal("Henrietta", "Seal", 1, "Fish", "Grizzly Grotto", "Female", 3, "Doing tricks", "Walruses/Walrie"),
    new Animal("Shadowfax", "Mini-horse", 1, "Carrots", "Enchanted Stables", "Male", 3, "Nose Scratches", "Leprechauns"),
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
