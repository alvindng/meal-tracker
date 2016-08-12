import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent} from './meal-list.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class='container'>
      <div class='jumbotron'>
        <h1>Meal Tracker</h1>
        <h5>Keep track of all the meals you eat today!</h5>
      </div>
      <meal-list
        [mealList]='meals'
        (onMealSelect)='mealWasSelected($event)'>
      </meal-list>
    </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
    new Meal("Hamburger", "Didn't get a soda or cheese on my burger!", 354, 0),
    new Meal("Cheese Fries", "I only ate half of them.", 600, 1)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
  }
}
