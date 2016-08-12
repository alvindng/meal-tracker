import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <div class='meal-form col-sm-6 well'>
    <h3>Add Meal:</h3>
    <input placeholder="Name" class="input-lg" #newName>
    <input placeholder="Details" class="input-lg" #newDetails>
    <input placeholder="Calories" class="input-lg" #newCalories>
    <button (click)='addMeal(newName, newDetails, newCalories)' class='btn-lg add-button btn-success'>Add</button>
    </div>
  `
})
export class NewMealComponent{
  public onSubmitNewMeal: EventEmitter<Object>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userName: HTMLInputElement, userDetails: HTMLInputElement, userCalories: HTMLInputElement){
    this.onSubmitNewMeal.emit({
      name: userName.value,
      details: userDetails.value,
      calories: parseInt(userCalories.value)
    });
    userName.value="";
  }
}
