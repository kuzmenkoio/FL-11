class Fighter {
    constructor(playerObj) {
        let name = playerObj['name'];
        let damage = playerObj['damage'];
        let agility = playerObj['agility'];
        let health = playerObj['hp'];
        let wins = 0;
        let losses = 0;
        let totalHp = health;
        this.getName = () => name;
        this.getDamage = () => damage;
        this.getAgility = () => agility;
        this.getHealth = () => health;
        this.logCombatHistory = () =>
            console.log(`Name: ${this.getName()}, Wins: ${wins}, Losses: ${losses}`);
        this.heal = (value) => {
            health += value;
            if (health > totalHp) {
                health = totalHp;
            }
        }
        this.dealDamage = (value) => {
            health -= value;
            if (health < 0) {
                health = 0;
            }
        }
        this.addWin = () => wins++;
        this.addLoss = () => losses++;
    }
    attack(defender) {
        const MULTI = 100;
        let attackValue = Math.floor(Math.random() * MULTI + 1);
        if (attackValue > defender.getAgility()) {
            defender.dealDamage(this.getDamage());
            console.log(`${this.getName()} make ${this.getDamage()} damage to ${defender.getName()}`);
        } else {
            console.log(`${this.getName()} attack missed`);
        }
    }
}
function battle(fighter1, fighter2) {
    if (fighter1.getHealth() === 0) {        
        console.log(`${fighter1.getName()} is dead and can't fight.`);
    } else if (fighter2.getHealth() === 0) {
        console.log(`${fighter2.getName()} is dead and can't fight.`);
    } else {
        for (; ;) {
            fighter1.attack(fighter2);
            if (fighter2.getHealth() === 0) {
                fighter2.addLoss();
                fighter1.addWin();
                console.log(`${fighter1.getName()} has won`);
                break;
            }
            fighter2.attack(fighter1);
            if (fighter1.getHealth() === 0) {
                fighter1.addLoss();
                fighter2.addWin();
                console.log(`${fighter2.getName()} has won`);
                break;
            }
        }
    }
}
const fighter1 = new Fighter({ name: 'John', damage: 20, hp: 100, agility: 25 });
const fighter2 = new Fighter({ name: 'Jim', damage: 10, hp: 120, agility: 40 });
battle(fighter1, fighter2);
fighter1.logCombatHistory();
fighter2.logCombatHistory();
battle(fighter1, fighter2);