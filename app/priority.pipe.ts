import {Pipe, PipeTransform} from '@angular/core';
import {Task} from './task.model';

@Pipe({
  name: "priority",
  pure: false
})


export class PriorityPipe implements PipeTransform {
  transform(input: Task[], desiredPriority) {
    var output: Task[] = [];
    if(desiredPriority === "priorityOne") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].priority === 1) {
        output.push(input[i])
      }
    }
    return output;
  } else if (desiredPriority === "priorityTwo") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].priority === 2) {
        output.push(input[i]);
      }
    }
    return output;
  } else if (desiredPriority === "threatLevelMidnight") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].priority === 3) {
        output.push(input[i]);
      }
    }
    return output;
  } else {
    return input;
  }
}
}
