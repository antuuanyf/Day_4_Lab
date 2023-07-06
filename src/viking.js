// Soldier
class Soldier {
    constructor(health,strength) {
        this.health = health
        this.strength = strength
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name,health,strength) {
        super(health,strength)
        this.name = name
    }

    receiveDamage(damage) {
        super.receiveDamage(damage)
        if (this.health <= 0) {
            return `${this.name} has died in act of combat`
        } else {
            return `${this.name} has received ${damage} points of damage`
        }
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health,strength) {
        super(health,strength)
    }

    receiveDamage(damage) {
        super.receiveDamage(damage)
        if (this.health <= 0) {
            return "A Saxon has died in combat"
        } else {
            return `A Saxon has received ${damage} points of damage`
        }
    }
}

// War
class War {
    vikingArmy = []
    saxonArmy = []
    addViking(viking) {
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }
    vikingAttack() {
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
        const randomSaxon = this.saxonArmy[randomSaxonIndex]
        const randomViking = this.vikingArmy[randomVikingIndex]
        
        const result = randomSaxon.receiveDamage(randomViking.strength)
        
        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxonIndex, 1)
        }
        
        return result
    }
    saxonAttack() {
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
        const randomSaxon = this.saxonArmy[randomSaxonIndex]
        const randomViking = this.vikingArmy[randomVikingIndex]
        
        const result = randomViking.receiveDamage(randomSaxon.strength)
        
        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomVikingIndex, 1)
        }
        
        return result
    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!'
        } else if (this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survived another day...'
        } else if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }
}