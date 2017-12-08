import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <h1>New Animal</h1>
      <label>Enter Animal Description:</label>
      <input #newDescription>
      <label>Animal Priority:</label>
      <select #newPriority>
        <option [value]="1"> Low Priority </option>
        <option [value]="2"> Medium Priority </option>
        <option [value]="3"> High Priority </option>
      </select>
      <button (click)="submitForm(newDescription.value, newPriority.value); newDescription.value='';">Add</button>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(name: string, species: string, age: number, diet: string, zooloc: string, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(name, species, age, diet, zooloc, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
