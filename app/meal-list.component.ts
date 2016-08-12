import { Component, EventEmitter} from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `

  `
})

export class MealListComponent {
  public mealList: Meal[];

}
