import { Injectable, EventEmitter } from '@angular/core';
import { List } from './list.model';
import { Unit } from './unit.model';
import { CommandCard } from './command.model';
import { Upgrade } from './upgrade.model';

@Injectable({
  providedIn: 'root'
})
export class FullListService {
  list = new List('', '', [], 0, [], 800);
  listUpdated = new EventEmitter<any>();
  unitAmounts = {
    commander: {amount: 0, minimum: 1, maximum: 2, color: 'red'},
    operative: {amount: 0, minimum: 0, maximum: 2, color: 'black'},
    corps: {amount: 0, minimum: 3, maximum: 6, color: 'red'},
    specialForces: {amount: 0, minimum: 0, maximum: 3, color: 'black'},
    support: {amount: 0, minimum: 0, maximum: 3, color: 'black'},
    heavy: {amount: 0, minimum: 0, maximum: 2, color: 'black'}
  };

  constructor() { }

  addUnit(unit: Unit) {
    this.list.units.push(unit);
    this.list.points += unit.cost;
    this.listUpdated.emit(this.list);
  }

  removeUnit(index) {
    this.list.points -= this.list.units[index].cost;
    this.list.units.splice(index, 1);
    this.listUpdated.emit(this.list);
  }

  duplicateUnit(index) {
    const unit = JSON.parse(JSON.stringify(this.list.units[index]));
    this.list.units.push(unit);
    this.listUpdated.emit(this.list);
  }

  addCommand(command: CommandCard) {
    this.list.commandCards.push(command);
    this.listUpdated.emit(this.list);
  }

  removeCommand(index) {
    this.list.commandCards.splice(index, 1);
    this.listUpdated.emit(this.list);
  }

  setUpgrade(upgrade: Upgrade, upgradeIndex, unitIndex) {
    this.list.units[unitIndex].chosenUpgrades.splice(upgradeIndex, 1, upgrade);
    this.list.points += upgrade.cost;
    this.listUpdated.emit(this.list);
  }

  clearUpgrade(upgradeIndex, unitIndex) {
    this.list.points -= this.list.units[unitIndex].chosenUpgrades[upgradeIndex].cost;
    this.list.units[unitIndex].chosenUpgrades.splice(upgradeIndex, 1, '');
    this.listUpdated.emit(this.list);
  }

  getList() {
    return this.list;
  }

  setList(newList: List) {
    this.list = newList;
    this.listUpdated.emit(this.list);
  }

  resetList() {
    this.list = {
      name: '',
      faction: '',
      units: [],
      points: 0,
      commandCards: [],
      size: 800
    };
    this.listUpdated.emit(this.list);
  }

  getCommanders() {
    const commanders = [];
    for (let i = 0; i < this.list.units.length; i++) {
      if (this.list.units[i].rank === 'Commander' || this.list.units[i].rank === 'Operative') {
        commanders.push(this.list.units[i].name);
      }
    }
    return commanders.slice();
  }

  getPoints() {
    return this.list.points;
  }

  getUnitAmounts() {}
}
