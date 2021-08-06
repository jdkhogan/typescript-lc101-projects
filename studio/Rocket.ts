import { Payload } from './Payload';
import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';

export class Rocket {
    name:string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    
    constructor(name:string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass( items: Payload[] ): number {
        // Returns the sum of all items using each item's massKg property
        let output: number = 0;
        for (let item of items) {
            output += item.massKg;
        }
        return output;
    }
    
    currentMassKg(): number {
        // Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
        let output: number = 0;
        for (let astronaut of this.astronauts) {
            output += astronaut.massKg;
        }
        for (let item of this.cargoItems) {
            output += item.massKg;
        }
        return output;
    }
    
    canAdd(item: Payload): boolean {
        // Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
        return (this.currentMassKg() + item.massKg <= this.totalCapacityKg);
    }

    addCargo(cargo: Cargo): boolean {
        // Uses this.canAdd() to see if another item can be added.
        // If true, adds cargo to this.cargoItems and returns true.
        // If false, returns false.
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        } 
        else { return false; }
        
    }
    addAstronaut(astronaut: Astronaut): boolean {
        // Uses this.canAdd() to see if another astronaut can be added.
        // If true, adds astronaut to this.astronauts and returns true.
        // If false, returns false.
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else { return false; }
    }

}