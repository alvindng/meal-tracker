import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <div>
      <h4> Name: {{meal.name}}</h4>
      <h5> Details: {{meal.details}}</h5>
      <h5> Calories: {{meal.calories}}</h5>
    </div>
  `
})

export class MealComponent {
  public meal: Meal;
}
