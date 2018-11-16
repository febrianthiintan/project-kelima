import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  //property:class recipe
  private recipes:Recipe[]=[
    new Recipe(
    'Steak',
    'Steak adalah makanan berbahan dasar daging yang di bakar dengan saus berbagai macam rasa.' +
    'Steak berasal dari berbagai macam daging, bisa daging shirlloin, daging sapi.',
  '../src/app/img/daging.jpg',
  [
    new Ingredient('meal', 1),
    new Ingredient('tomato', 2),
  ]
),
  new Recipe(
  'Strawberry Cake',
  'Strawberry Cake merupakan dessert berbahan dasar roti dengan hiasan cream dan strawberry diatasnya' + 
  'Rasa potongan pertama dari Strawberry Cake ini sangat lembut dan nikmat',
  '../src/app/img/strawberry.jpg',
  [
    new Ingredient('egg', 1),
    new Ingredient('strawberry', 2),
    new Ingredient('whip cream', 1)
  ]
),
  ];

  getRecipes(){
    return this.recipes.slice();
  }

  //tambahkan method addIngredientShoppingList dengan parameter ingredient[]
  addIngredientsShoppingList(ingredients: Ingredient[]){
    this.slsService.addIngredients(ingredients);
  }

  getRecipe(index:number){
    return this.recipes[index];
  }

  //tambahkan parameter pada construktor
  constructor(private slsService: ShoppingListService){}

}
