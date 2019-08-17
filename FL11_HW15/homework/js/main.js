'use strict'

class Hamburger {
    constructor(type, calories, isSecretIngredient = false) {
        this.type = type;
        this.cheese = false;
        this.tomatoCount = 0;
        this.bitCount = 0;
        this.addedIngredients = [];
        this.isSecretIngredient = isSecretIngredient;
        this.bit = false;
        if (this.isSecretIngredient === true) {
            this._calories = calories + 100;
            this.addedIngredients.push('secret')
        } else {
            this._calories = calories;
        }
    };

    getCalories() {
        return this._calories;
    };

    setCalories(calories) {
        this._calories = calories;
    }

    addCheese() {
        if (this.bit === true) {
            alert('Sorry, you cannot add cheese');
        } else if (this.cheese === false) {
            this._calories += 120;
            this.cheese = true;
            this.addedIngredients.push('cheese');
        }
        
        else {
            alert('Sorry, you can add cheese only once')
        }
    }

    addTomato() {
        if (this.bit === true) {
            alert('Sorry, you cannot add tomato');
        } else if (this.tomatoCount < 2) {
            this._calories += 20;
            this.tomatoCount += 1;
            this.addedIngredients.push('tomato');
        } else {
           alert('Sorry, you can add tomato only twice')
        }
    }

    addSecretIngredient() {
        if (this.bit === true) {
            alert('Sorry, you cannot add secret ingredient');
        } else if (this.isSecretIngredient === true) {
            alert('Sorry, you can add secret ingredient only once')
        } else if (this.bit = true) {
            alert('Sorry, you can add secret ingredient');
        }

        else if (this.addedIngredients.length === 0) {
            this._calories += 100;
            this.isSecretIngredient = true;
        } else {
            alert('Sorry, you can add secret ingredient only before another ingredient');
        } 
    }

    bite() {
        this.bit = true;
        this.bitCount += 1;
    }

    info() {
        this.type = this.type.charAt(0).toUpperCase() + this.type.slice(1);

        return `${this.type} hamburger: ${this.isSecretIngredient === true ? `with secret ingredient,` : `without secret ingredient,`} ${this.cheese === true ? `with cheese,` : `without cheese,`} ${this.tomatoCount > 0 ? `with ${this.tomatoCount} tomato,` : `without tomato,`} is bit ${this.bitCount} times. Total calories: ${this._calories}.`
    }
}
