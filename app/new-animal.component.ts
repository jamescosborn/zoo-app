import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <h1>New Animal</h1>
      <label for="animalName">Name: </label>
      <input type="text" #animalName><br>
      <label for="animalSpecies">Species: </label>
      <input type="text" #animalSpecies><br>
      <label for="animalAge">Age: </label>
      <input type="text" #animalAge><br>
      <label for="animalDiet">Diet: </label>
      <input type="text" #animalDiet><br>
      <label for="animalZooloc">Zoo location: </label>
      <input type="text" #animalZooloc><br>
      <label for="animalSex">Sex: </label>
      <input type="text" #animalSex><br>
      <label for="animalLikes">Likes: </label>
      <input type="text" #animalLikes><br>
      <label for="animalDislikes">Dislikes: </label>
      <input type="text" #animalDislikes><br>
      <button (click)="submitForm(animalName.value, animalSpecies.value, animalAge.value, animalDiet.value, animalZooloc.value, animalSex.value, animalLikes.value, animalDislikes.value)">Add</button>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(name: string, species: string, age: number, diet: string, zooloc: string, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(name, species, age, diet, zooloc, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
