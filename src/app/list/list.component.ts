import { Component, OnInit } from '@angular/core';
import { ListService } from '../shared/list.service';
import { Unit } from '../shared/unit.model';
import { UpgradeService } from '../shared/upgrades.service';
import { CommandCard } from '../shared/command.model';
import { CommandService } from '../shared/command.service';
import { StorageService } from '../shared/storage.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list: Unit[];
  responseText;

  unitAmounts;
  armySize;

  totalPoints;
  validPoints = true;
  pointsColor = 'black';

  constructor(
    private listService: ListService,
    private upgradeService: UpgradeService,
    private commandService: CommandService,
    private storageService: StorageService) { }

  ngOnInit() {
    this.list = this.listService.getList();
    this.totalPoints = this.listService.getPoints();
    this.armySize = this.listService.armyPoints;
    this.unitAmounts = this.listService.unitAmounts;

    this.listService.listUpdated.subscribe(
      (newList: Unit[]) => {
        this.list = newList;
        this.totalPoints = this.listService.getPoints();
        this.unitAmounts = this.listService.getUnitAmounts(this.armySize);

        if (this.totalPoints > this.armySize) {
          this.validPoints = false;
        } else {
          this.validPoints = true;
        }
        this.togglePointsColor();
      }
    );
  }

  onRemoveUnit(index) {
    this.listService.removeUnit(index);
  }

  onDuplicateUnit(index) {
    this.listService.duplicateUnit(index);
  }

  onArmySize(size) {
    this.armySize = size;
    this.unitAmounts = this.listService.getUnitAmounts(size);
  }

  onSaveList() {
    const fullList = {
      list: this.list,
      commands: this.commandService.getCommandList()
    };
    console.log(fullList);
    this.storageService.saveList(fullList).subscribe(
      (response) => {
        this.responseText = response.json();
        console.log(this.responseText.name);
        // tslint:disable-next-line:max-line-length
        alert('This list has been saved. You can access this list by using the following ID when loading a list: ' + this.responseText.name);
      },
      (error) => console.log(error)
    );
  }

  togglePointsColor() {
    if (this.validPoints) {
      this.pointsColor = 'black';
    } else {
      this.pointsColor = 'red';
    }
  }

  resetList() {
    if (confirm('Reset your list?')) {
      this.listService.resetList();
      this.commandService.resetList();
    }
  }
}
