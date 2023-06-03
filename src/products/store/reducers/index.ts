import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';
import { Pizza } from "src/products/models/pizza.model";
import * as fromPizzas from './pizzas.reducer';

export interface ProductsState {
    pizzas: fromPizzas.PizzaState
}

export const reducers: ActionReducerMap<ProductsState> = {
    pizzas: fromPizzas.reducer,
};

export const getProductsState = createFeatureSelector<ProductsState>(
    'products'
);

const state = {
    products: {
        pizzas: {
            data: [] as Pizza[],
            loaded: false,
            loading: false
        }
    }
}

// pizzas state
export const getPizzaState = createSelector(
    getProductsState,
    (state: ProductsState) => state.pizzas
);

export const getAllPizzas = createSelector(getPizzaState, fromPizzas.getPizzas);
export const getPizzasLoaded = createSelector(getPizzaState, fromPizzas.getPizzasLoaded);
export const getPizzasLoading = createSelector(getPizzaState, fromPizzas.getPizzasLoading);
