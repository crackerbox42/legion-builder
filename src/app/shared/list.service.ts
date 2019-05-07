import { Unit } from './unit.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Upgrade } from './upgrade.model';
import { CommandCard } from './command.model';
import { List } from './list.model';

export class ListService {
    list: Unit[] = [];
    listUpdated = new EventEmitter<any>();
    unitAmounts = {
        commander: {amount: 0, minimum: 1, maximum: 2, color: 'red'},
        operative: {amount: 0, minimum: 0, maximum: 2, color: 'black'},
        corps: {amount: 0, minimum: 3, maximum: 6, color: 'red'},
        specialForces: {amount: 0, minimum: 0, maximum: 3, color: 'black'},
        support: {amount: 0, minimum: 0, maximum: 3, color: 'black'},
        heavy: {amount: 0, minimum: 0, maximum: 2, color: 'black'}
    };
    armyPoints = 800;

    constructor() {}

    addUnit(unit: Unit) {
        this.list.push(unit);
        this.list = this.sortList(this.list);
        this.listUpdated.emit(this.list.slice());
    }
    removeUnit(index) {
        this.list.splice(index, 1);
        this.list = this.sortList(this.list);
        this.listUpdated.emit(this.list.slice());
    }

    duplicateUnit(index) {
        const unit = JSON.parse(JSON.stringify(this.list[index]));
        this.list.push(unit);
        this.list = this.sortList(this.list);
        this.listUpdated.emit(this.list.slice());
    }

    setUpgrade(upgrade: Upgrade, upgradeIndex, unitIndex) {
        this.list[unitIndex].chosenUpgrades.splice(upgradeIndex, 1, upgrade);
        this.listUpdated.emit(this.list.slice());
    }

    clearUpgrade(upgradeIndex, unitIndex) {
        this.list[unitIndex].chosenUpgrades.splice(upgradeIndex, 1, '');
        this.listUpdated.emit(this.list.slice());
    }

    getList() {
        return this.list.slice();
    }

    setList(newList: Unit[]) {
        this.list = newList;
        this.listUpdated.emit(this.list.slice());
    }

    getCommanders() {
        const commanders = [];
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].rank === 'Commander' || this.list[i].rank === 'Operative') {
                commanders.push(this.list[i].name);
            }
        }
        return commanders.slice();
    }

    getPoints() {
        let totalPoints = 0;
        this.list.forEach(element => {
            totalPoints += element.cost;
            element.chosenUpgrades.forEach(upgradeElement => {
                if (upgradeElement.cost) {
                    totalPoints += upgradeElement.cost;
                }
            });
        });

        return totalPoints;
    }

    getUnitAmounts(armySize) {
        let unitAmounts = {
            commander: {amount: 0, minimum: 1, maximum: 2, color: 'red'},
            operative: {amount: 0, minimum: 0, maximum: 2, color: 'black'},
            corps: {amount: 0, minimum: 3, maximum: 6, color: 'red'},
            specialForces: {amount: 0, minimum: 0, maximum: 3, color: 'black'},
            support: {amount: 0, minimum: 0, maximum: 3, color: 'black'},
            heavy: {amount: 0, minimum: 0, maximum: 2, color: 'black'}
        };
        this.armyPoints = armySize;

        switch (armySize) {
            case  350:
                unitAmounts = {
                    commander: {amount: 0, minimum: 1, maximum: 1, color: 'red'},
                    operative: {amount: 0, minimum: 0, maximum: 0, color: 'black'},
                    corps: {amount: 0, minimum: 2, maximum: 4, color: 'red'},
                    specialForces: {amount: 0, minimum: 0, maximum: 1, color: 'black'},
                    support: {amount: 0, minimum: 0, maximum: 1, color: 'black'},
                    heavy: {amount: 0, minimum: 0, maximum: 0, color: 'black'}
                };
                break;
            case  400:
                unitAmounts = {
                    commander: {amount: 0, minimum: 1, maximum: 1, color: 'red'},
                    operative: {amount: 0, minimum: 0, maximum: 0, color: 'black'},
                    corps: {amount: 0, minimum: 2, maximum: 4, color: 'red'},
                    specialForces: {amount: 0, minimum: 0, maximum: 2, color: 'black'},
                    support: {amount: 0, minimum: 0, maximum: 2, color: 'black'},
                    heavy: {amount: 0, minimum: 0, maximum: 1, color: 'black'}
                };
                break;
            case  500:
                unitAmounts = {
                    commander: {amount: 0, minimum: 1, maximum: 1, color: 'red'},
                    operative: {amount: 0, minimum: 0, maximum: 1, color: 'black'},
                    corps: {amount: 0, minimum: 2, maximum: 4, color: 'red'},
                    specialForces: {amount: 0, minimum: 0, maximum: 2, color: 'black'},
                    support: {amount: 0, minimum: 0, maximum: 2, color: 'black'},
                    heavy: {amount: 0, minimum: 0, maximum: 1, color: 'black'}
                };
                break;
            case  600:
                unitAmounts = {
                    commander: {amount: 0, minimum: 1, maximum: 1, color: 'red'},
                    operative: {amount: 0, minimum: 0, maximum: 1, color: 'black'},
                    corps: {amount: 0, minimum: 2, maximum: 5, color: 'red'},
                    specialForces: {amount: 0, minimum: 0, maximum: 3, color: 'black'},
                    support: {amount: 0, minimum: 0, maximum: 2, color: 'black'},
                    heavy: {amount: 0, minimum: 0, maximum: 1, color: 'black'}
                };
                break;
            case  650:
                unitAmounts = {
                    commander: {amount: 0, minimum: 1, maximum: 2, color: 'red'},
                    operative: {amount: 0, minimum: 0, maximum: 2, color: 'black'},
                    corps: {amount: 0, minimum: 3, maximum: 6, color: 'red'},
                    specialForces: {amount: 0, minimum: 0, maximum: 2, color: 'black'},
                    support: {amount: 0, minimum: 0, maximum: 2, color: 'black'},
                    heavy: {amount: 0, minimum: 0, maximum: 1, color: 'black'}
                };
                break;
            case  800:
                unitAmounts = {
                    commander: {amount: 0, minimum: 1, maximum: 2, color: 'red'},
                    operative: {amount: 0, minimum: 0, maximum: 2, color: 'black'},
                    corps: {amount: 0, minimum: 3, maximum: 6, color: 'red'},
                    specialForces: {amount: 0, minimum: 0, maximum: 3, color: 'black'},
                    support: {amount: 0, minimum: 0, maximum: 3, color: 'black'},
                    heavy: {amount: 0, minimum: 0, maximum: 2, color: 'black'}
                };
                break;
            case  1000:
                unitAmounts = {
                    commander: {amount: 0, minimum: 1, maximum: 3, color: 'red'},
                    operative: {amount: 0, minimum: 0, maximum: 2, color: 'black'},
                    corps: {amount: 0, minimum: 4, maximum: 6, color: 'red'},
                    specialForces: {amount: 0, minimum: 0, maximum: 3, color: 'black'},
                    support: {amount: 0, minimum: 0, maximum: 3, color: 'black'},
                    heavy: {amount: 0, minimum: 0, maximum: 3, color: 'black'}
                };
                break;
            case  1600:
                unitAmounts = {
                    commander: {amount: 0, minimum: 1, maximum: 4, color: 'red'},
                    operative: {amount: 0, minimum: 0, maximum: 4, color: 'black'},
                    corps: {amount: 0, minimum: 6, maximum: 10, color: 'red'},
                    specialForces: {amount: 0, minimum: 0, maximum: 5, color: 'black'},
                    support: {amount: 0, minimum: 0, maximum: 5, color: 'black'},
                    heavy: {amount: 0, minimum: 0, maximum: 4, color: 'black'}
                };
                break;
        }
        this.unitAmounts = unitAmounts;

        this.list.forEach(element => {
            switch (element.rank) {
                case 'Commander':
                    unitAmounts.commander.amount++;
                    if (unitAmounts.commander.amount > unitAmounts.commander.maximum ||
                        unitAmounts.commander.amount < unitAmounts.commander.minimum) {
                        unitAmounts.commander.color = 'red';
                    } else {
                        unitAmounts.commander.color = 'black';
                    }
                    break;
                case 'Operative':
                    unitAmounts.operative.amount++;
                    if (unitAmounts.operative.amount > unitAmounts.operative.maximum) {
                        unitAmounts.operative.color = 'red';
                    }
                    break;
                case 'Corps':
                    unitAmounts.corps.amount++;
                    if (unitAmounts.corps.amount > unitAmounts.corps.maximum ||
                        unitAmounts.corps.amount < unitAmounts.corps.minimum) {
                        unitAmounts.corps.color = 'red';
                    } else {
                        unitAmounts.corps.color = 'black';
                    }
                    break;
                case 'Special Forces':
                    unitAmounts.specialForces.amount++;
                    if (unitAmounts.specialForces.amount > unitAmounts.specialForces.maximum) {
                        unitAmounts.specialForces.color = 'red';
                    }
                    break;
                case 'Support':
                    unitAmounts.support.amount++;
                    if (unitAmounts.support.amount > unitAmounts.support.maximum) {
                        unitAmounts.support.color = 'red';
                    }
                    break;
                case 'Heavy':
                    unitAmounts.heavy.amount++;
                    if (unitAmounts.heavy.amount > unitAmounts.heavy.maximum) {
                        unitAmounts.heavy.color = 'red';
                    }
                    break;
            }
        });

        return unitAmounts;
    }

    resetList() {
        this.list = [];
        this.listUpdated.emit(this.list.slice());
    }

    sortList(unsortedUnits: Unit[]) {
        const commanders = [];
        const corps = [];
        const operatives = [];
        const specialForces = [];
        const supports = [];
        const heavies = [];
        const sortedUnits = [];

        unsortedUnits.forEach(unit => {
            switch (unit.rank) {
                case 'Commander':
                    commanders.push(unit);
                    break;
                case 'Corps':
                    corps.push(unit);
                    break;
                case 'Operative':
                    operatives.push(unit);
                    break;
                case 'Special Forces':
                    specialForces.push(unit);
                    break;
                case 'Support':
                    supports.push(unit);
                    break;
                case 'Heavy':
                    heavies.push(unit);
                    break;
            }
        });

        commanders.sort((a, b) => a.name.localeCompare(b.name));
        corps.sort((a, b) => a.name.localeCompare(b.name));
        operatives.sort((a, b) => a.name.localeCompare(b.name));
        specialForces.sort((a, b) => a.name.localeCompare(b.name));
        supports.sort((a, b) => a.name.localeCompare(b.name));
        heavies.sort((a, b) => a.name.localeCompare(b.name));

        return sortedUnits.concat(commanders, corps, operatives, specialForces, supports, heavies);
    }

    generateURL() {
        let url = 'https://tabletopadmiral.com/legion/';

        const faction = this.list[1].faction;
        url = url.concat(faction.toLowerCase(), '/');

        this.list.forEach(unit => {
            url = url.concat('p', unit.ID);
            unit.chosenUpgrades.forEach(upgrade => {
                if (upgrade === '') {
                    url = url.concat('uEM');
                } else {
                    url = url.concat('u', upgrade.ID);
                }
            });
        });

        return url;
    }
}
