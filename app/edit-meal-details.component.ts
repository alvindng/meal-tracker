import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
    <h3>Edit Meal: {{meal.name }}</h3>
  `
})

export class EditMealDetailsComponent{
  public meal: Meal;
}
