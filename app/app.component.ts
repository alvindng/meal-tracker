import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
    <div class='container'>
      <h1>Skeleton Angular2 App!</h1>
      
    </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
    new Meal("Hamburger", "Didn't get a soda or cheese on my burger!", 354, 0),
    new Meal("Fries", "I only ate half of them.", 365, 1)
  ];
  }
}
