import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <div class='meal-form'>
    <h3>Add Meal:</h3>
    <input placeholder="Description" class="input-lg" #newName>
    <button (click)='addMeal(newName)' class='btn-lg add-button btn-success'>Add</button>
    </div>
  `
})
export class NewMealComponent{
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userName: HTMLInputElement){
    this.onSubmitNewMeal.emit(userName.value);
    userName.value="";
  }
}
