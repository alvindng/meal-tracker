import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
    <div class='meal-form'>
    <h4>Edit Meal: {{meal.name }}</h4>
    <input [(ngModel)]="meal.name"/>
    <h5>Edit Details: {{meal.details }}</h5>
    <input [(ngModel)]="meal.details"/>
    </div>
  `
})

export class EditMealDetailsComponent{
  public meal: Meal;
}
