import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
    <div class='meal-form' col-sm-6>
    <h4>Edit Meal: {{meal.name }}</h4>
    <input [(ngModel)]="meal.name" class='input-lg'/>
    <h5>Edit Details: {{meal.details }}</h5>
    <input [(ngModel)]="meal.details" class='input-lg'/>
    <h5>Edit Calorie Count: {{meal.calories }}</h5>
    <input [(ngModel)]="meal.calories" class='input-lg'/>
    </div>
  `
})

export class EditMealDetailsComponent{
  public meal: Meal;
}
