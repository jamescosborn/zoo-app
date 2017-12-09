import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "youngness",
  pure: false
})


export class YoungnessPipe implements PipeTransform {


  transform(input: Animal[], desiredYoungness) {
    var output: Animal[] = [];
    if(desiredYoungness === "youngAnimals") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].age <= 2) {
        output.push(input[i]);
      }
    }
    return output;
  } else if (desiredYoungness === "olderAnimals") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].age > 2) {
        output.push(input[i]);
      }
    }
    return output;
  } else {
    return input;
  }
}
}
