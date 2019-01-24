/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

// function GameObject(attributes) {
//     this.createdAt = attributes.createdAt;
//     this.dimensions = attributes.dimensions;
//   }
  
//   GameObject.prototype.destroy = function() {
//     return `${this.name} was removed from the game.`
//   }
  
  /*
    === CharacterStats ===
    * healthPoints
    * name
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  
  // function CharacterStats(charAttributes) {
  //   GameObject.call(this, charAttributes);
  //   this.healthPoints = charAttributes.healthPoints;
  //   this.name = charAttributes.name;
  // }
  
  // CharacterStats.prototype = Object.create(GameObject.prototype);
  
  // CharacterStats.prototype.takeDamage = function() {
  //   return `${this.name} took damage.`
  // }
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
  
  // function Humanoid(humanAttributes) {
  //   CharacterStats.call(this, humanAttributes);
  //   this.team = humanAttributes.team;
  //   this.weapons = humanAttributes.weapons;
  //   this.language = humanAttributes.language;
  
  // }
  
  // Humanoid.prototype = Object.create(CharacterStats.prototype);
  
  // Humanoid.prototype.greet = function() {
  //   return `${this.name} offers a greeting in ${this.language}`
  // }
  
  // Villain will inherit from Humanoid
  
  // function Villain(villainAttributes) {
  //   Humanoid.call(this, villainAttributes);
  //   this.spell = villainAttributes.spell;
  // }
  
  // Villain.prototype = Object.create(Humanoid.prototype);
  
  // Villain.prototype.attackHero = function(object) {
  //   console.log(object.name + " has taken 5 damage from " + this.spell + ". " + object.name + " has " + (object.healthPoints -= 5) + " healthpoints left!");
  //   if (object.healthPoints <= 0) {
  //     return `${object.name} Says: I'm dying, someone pls REZ MEEEEEE`;
  //   }
  // }
  
  // Hero will inherit from Humanoid
  
  // function Hero(heroAttributes) {
  //   Humanoid.call(this, heroAttributes);
  //   this.spell = heroAttributes.spell;
  // }
  
  // Hero.prototype = Object.create(Humanoid.prototype);
  
  // Hero.prototype.attackVillain = function(object) {
  //   console.log(object.name + " has taken 5 damage from " + this.spell + ". " + object.name + " has " + (object.healthPoints -= 5) + " healthpoints left!");
  //   if (object.healthPoints <= 0) {
  //     return `${object.name} Says: My minons will take vengenace!!!!`;
  //   }
  // }
   
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
    // const mage = new Humanoid({
    //   createdAt: new Date(),
    //   dimensions: {
    //     length: 2,
    //     width: 1,
    //     height: 1,
    //   },
    //   healthPoints: 5,
    //   name: 'Bruce',
    //   team: 'Mage Guild',
    //   weapons: [
    //     'Staff of Shamalama',
    //   ],
    //   language: 'Common Tongue',
    // });
  
    // const swordsman = new Humanoid({
    //   createdAt: new Date(),
    //   dimensions: {
    //     length: 2,
    //     width: 2,
    //     height: 2,
    //   },
    //   healthPoints: 15,
    //   name: 'Sir Mustachio',
    //   team: 'The Round Table',
    //   weapons: [
    //     'Giant Sword',
    //     'Shield',
    //   ],
    //   language: 'Common Tongue',
    // });
  
    // const archer = new Humanoid({
    //   createdAt: new Date(),
    //   dimensions: {
    //     length: 1,
    //     width: 2,
    //     height: 4,
    //   },
    //   healthPoints: 10,
    //   name: 'Lilith',
    //   team: 'Forest Kingdom',
    //   weapons: [
    //     'Bow',
    //     'Dagger',
    //   ],
    //   language: 'Elvish',
    // });
  
    // const villainEvilGuy = new Villain({
    //   createdAt: new Date(),
    //   dimensions: {
    //     length: 2,
    //     width: 2,
    //     height: 2,
    //   },
    //   healthPoints: 15,
    //   name: 'Evil Guy',
    //   team: 'Villain Bad Guy Guild',
    //   weapons: [
    //     'Necromancer Staff',
    //     'Reflector Shield',
    //   ],
    //   language: 'Common Tongue',
    //   spell: 'Life Drain'
    // })
  
    // const heroGoodGuy = new Hero({
    //   createdAt: new Date(),
    //   dimensions: {
    //     length: 2,
    //     width: 2,
    //     height: 2,
    //   },
    //   healthPoints: 15,
    //   name: 'Good Guy',
    //   team: 'Hero Good Guy Guild',
    //   weapons: [
    //     'Sword of Light',
    //     'Diamond Shield',
    //   ],
    //   language: 'Common Tongue',
    //   spell: 'Sword Blessing'
    // })
  
  
  
    // console.log(mage.createdAt); // Today's date
    // console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    // console.log(swordsman.healthPoints); // 15
    // console.log(mage.name); // Bruce
    // console.log(swordsman.team); // The Round Table
    // console.log(mage.weapons); // Staff of Shamalama
    // console.log(archer.language); // Elvish
    // console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    // console.log(mage.takeDamage()); // Bruce took damage.
    // console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// 2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

class GameObject {
	constructor(attributes) {
		this.createdAt = attributes.createdAt;
    this.dimensions = attributes.dimensions;
	}

	destroy() {
		return `${this.name} was removed from the game.`;
	}
}

class CharacterStats extends GameObject {
	constructor(charAttributes) {
		super(charAttributes);
		this.healthPoints = charAttributes.healthPoints;
    this.name = charAttributes.name;
	}

	takeDamage() {
		return `${this.name} took damage.`;
	}
}

class Humanoid extends CharacterStats {
	constructor(humanAttributes) {
		super(humanAttributes);
		this.team = humanAttributes.team;
    this.weapons = humanAttributes.weapons;
    this.language = humanAttributes.language;
	}

	greet() {
		return `${this.name} offers a greeting in ${this.language}`;
	}
}

class Villain extends Humanoid {
	constructor(villainAttributes) {
		super(villainAttributes);
		this.spell = villainAttributes.spell;
	}

	attackHero(object) {
		console.log(object.name + " has taken 5 damage from " + this.spell + ". " + object.name + " has " + (object.healthPoints -= 5) + " healthpoints left!");
    if (object.healthPoints <= 0) {
      return `${object.name} Says: I'm dying, someone pls REZ MEEEEEE`;
    }
	}
}

class Hero extends Humanoid {
	constructor(heroAttributes) {
		super(heroAttributes);
		this.spell = heroAttributes.spell;
	}

	attackVillain(object) {
		console.log(object.name + " has taken 5 damage from " + this.spell + ". " + object.name + " has " + (object.healthPoints -= 5) + " healthpoints left!");
    if (object.healthPoints <= 0) {
			return `${object.name} Says: My minons will take vengenace!!!!`;
    }
	}
}

const mage = new Humanoid({
	createdAt: new Date(),
	dimensions: {
		length: 2,
		width: 1,
		height: 1,
	},
	healthPoints: 5,
	name: 'Bruce',
	team: 'Mage Guild',
	weapons: [
		'Staff of Shamalama',
	],
	language: 'Common Tongue',
});

const swordsman = new Humanoid({
	createdAt: new Date(),
	dimensions: {
		length: 2,
		width: 2,
		height: 2,
	},
	healthPoints: 15,
	name: 'Sir Mustachio',
	team: 'The Round Table',
	weapons: [
		'Giant Sword',
		'Shield',
	],
	language: 'Common Tongue',
});

const archer = new Humanoid({
	createdAt: new Date(),
	dimensions: {
		length: 1,
		width: 2,
		height: 4,
	},
	healthPoints: 10,
	name: 'Lilith',
	team: 'Forest Kingdom',
	weapons: [
		'Bow',
		'Dagger',
	],
	language: 'Elvish',
});

const villainEvilGuy = new Villain({
	createdAt: new Date(),
	dimensions: {
		length: 2,
		width: 2,
		height: 2,
	},
	healthPoints: 15,
	name: 'Evil Guy',
	team: 'Villain Bad Guy Guild',
	weapons: [
		'Necromancer Staff',
		'Reflector Shield',
	],
	language: 'Common Tongue',
	spell: 'Life Drain'
})

const heroGoodGuy = new Hero({
	createdAt: new Date(),
	dimensions: {
		length: 2,
		width: 2,
		height: 2,
	},
	healthPoints: 15,
	name: 'Good Guy',
	team: 'Hero Good Guy Guild',
	weapons: [
		'Sword of Light',
		'Diamond Shield',
	],
	language: 'Common Tongue',
	spell: 'Sword Blessing'
})

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.