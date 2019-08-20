function Pokemon(type, specie, abilityToFly = false, pokemonType) {
    this.type = type;
    this.specie = specie;
    this.abilityToFly = abilityToFly;
    this.pokemonType = pokemonType;
}

Pokemon.prototype.getType = function () {
    return this.type;
};

Pokemon.prototype.getSpecie = function () {
    return this.specie;
};

Pokemon.prototype.canFly = function () {
    return this.abilityToFly;
};

Pokemon.prototype.getPokemonType = function () {
    return this.pokemonType;
};

// Pokemon.prototype.evolve = function () {
    
// }; not implemented

function Charmander () {
    Pokemon.apply(this, ['Fire', 'Lizard Pokémon', 'false', 'Charmander']);
}

Charmander.prototype = Object.create(Pokemon.prototype);
Charmander.prototype.constructor = Charmander;

function Charmeleon () {
    Pokemon.apply(this, ['Fire', 'Flame Pokémon', 'false', 'Charmeleon']);
}

Charmeleon.prototype = Object.create(Pokemon.prototype);
Charmeleon.prototype.constructor = Charmeleon;

function Charizard () {
    Pokemon.apply(this, ['Fire', 'Flame Pokémon', 'true', 'Charizard']);
}

Charizard.prototype = Object.create(Pokemon.prototype);
Charizard.prototype.constructor = Charizard;


function Pichu () {
    Pokemon.apply(this, ['Electric', 'Mouse Pokémon', 'false', 'Pichu']);
}

Pichu.prototype = Object.create(Pokemon.prototype);
Pichu.prototype.constructor = Pichu;

function Pikachu() {
    Pokemon.apply(this, ['Electric', 'Mouse Pokémon', 'false', 'Pikachu']);
}

Pikachu.prototype = Object.create(Pokemon.prototype);
Pikachu.prototype.constructor = Pikachu;

function Raichu () {
    Pokemon.apply(this, ['Electric', 'Mouse Pokémon', 'false', 'Raichu']);
}

Raichu.prototype = Object.create(Pokemon.prototype);
Raichu.prototype.constructor = Raichu;


const charmander = new Charmander();
const charmeleon = new Charmeleon();
const charizard = new Charizard();

charmander.getType(); // -> “Fire”
charmander.getType() === charmeleon.getType(); // -> true
charmeleon.getType() === charizard.getType(); // -> true

charmander.getSpecie(); // -> “Lizard Pokémon”
charmeleon.getSpecie(); // -> “Flame Pokémon”
charizard.getSpecie() === charmeleon.getSpecie(); // -> true

charmander.canFly(); // -> false
charmander.canFly() === charmeleon.canFly(); // -> true
charizard.canFly(); // -> true

const pichu = new Pichu();
pichu.getPokemonType(); // => Pichu

const pikachu = new Pikachu();
pikachu.getPokemonType(); // => Pikachu

const raichu = new Raichu();
raichu.getPokemonType(); // => Raichu