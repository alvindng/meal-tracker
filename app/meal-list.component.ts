import { Component, EventEmitter} from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { EditMealDetailsComponent} from './edit-meal-details.component';
import { NewMealComponent } from './new-meal.component';
import { CaloriesPipe } from './calories.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [CaloriesPipe],
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
  template: `
    <select (change)="onChange($event.target.value)" class='filter'>
    <option value='all'>Show All Meals</option>
    <option value='sub500'>Show Meals Under 500 Calories</option>
    <option value='above500'>Show Meals Above 500 Calories</option>
    </select>
    <meal-display
    *ngFor="#currentMeal of mealList |
    calories:selectedCalories"
    (click)="mealClicked(currentMeal)"
    [class.selected]='currentMeal === selectedMeal'
    [meal]="currentMeal">
    </meal-display>
    <edit-meal-details *ngIf='selectedMeal' [meal]='selectedMeal'>
    </edit-meal-details>
    <new-meal (onSubmitNewMeal)='createMeal($event.name, $event.details, $event.calories)'></new-meal>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public selectedCalories: string = "all";
  constructor(){
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(name: string, details: string, calories: number): void {
    this.mealList.push(
      new Meal(name, details, calories, this.mealList.length)
    );
  }
  onChange(optionFromMenu){
    this.selectedCalories = optionFromMenu;
  }
}
