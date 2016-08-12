import { Component, EventEmitter} from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  template: `
    <h3 *ngFor="#meal of meals" (click)="mealWasSelected(meal)"></h3>
  `
})

export class MealListComponent {
  public mealList: Meal[];

}
