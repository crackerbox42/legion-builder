import { Component, OnInit, Input } from '@angular/core';
import { ListService } from '../../shared/list.service';
import { UpgradeService } from '../../shared/upgrades.service';
import { Unit } from '../../shared/unit.model';

@Component({
  selector: 'app-upgrades',
  templateUrl: './upgrades.component.html',
  styleUrls: ['./upgrades.component.css']
})
export class UpgradesComponent implements OnInit {

  @Input() upgradeType;
  @Input() unitFaction;
  @Input() unitName;
  @Input() unitType;
  @Input() unit: Unit;
  @Input() upgradeIndex: number;
  @Input() unitIndex: number;
  @Input() chosenUpgradeTitle;
  @Input() chosenUpgradeCost;
  availableUpgrades = [];
  title = 'Upgrade';

  constructor(private upgradeService: UpgradeService, private listService: ListService) { }

  ngOnInit() {
    if (!this.chosenUpgradeTitle) {
      this.title = this.upgradeType;
    } else {
      this.title = this.chosenUpgradeTitle + ' (' + this.chosenUpgradeCost + ')';
    }

    switch (this.upgradeType) {
      case 'Force':
        this.availableUpgrades = this.upgradeService.getUpgrades('Force', this.unit.name, this.unit.faction, this.unit.type);
        break;
      case 'Heavy Weapon':
        this.availableUpgrades = this.upgradeService.getUpgrades('Heavy Weapon', this.unit.name, this.unit.faction, this.unit.type);
        break;
      case 'Personnel':
        this.availableUpgrades = this.upgradeService.getUpgrades('Personnel', this.unit.name, this.unit.faction, this.unit.type);
        break;
      case 'Gear':
        this.availableUpgrades = this.upgradeService.getUpgrades('Gear', this.unit.name, this.unit.faction, this.unit.type);
        break;
      case 'Grenades':
        this.availableUpgrades = this.upgradeService.getUpgrades('Grenades', this.unit.name, this.unit.faction, this.unit.type);
        break;
      case 'Hardpoint':
        this.availableUpgrades = this.upgradeService.getUpgrades('Hardpoint', this.unit.name, this.unit.faction, this.unit.type);
        break;
      case 'Pilot':
        this.availableUpgrades = this.upgradeService.getUpgrades('Pilot', this.unit.name, this.unit.faction, this.unit.type);
        break;
      case 'Comms':
        this.availableUpgrades = this.upgradeService.getUpgrades('Comms', this.unit.name, this.unit.faction, this.unit.type);
        break;
      case 'Command':
        this.availableUpgrades = this.upgradeService.getUpgrades('Command', this.unit.name, this.unit.faction, this.unit.type);
        break;
      case 'Training':
        this.availableUpgrades = this.upgradeService.getUpgrades('Training', this.unit.name, this.unit.faction, this.unit.type);
        break;
    }
  }

  onUpgradeSelected(upgrade) {
    if (upgrade === 'none') {
      this.listService.clearUpgrade(this.upgradeIndex, this.unitIndex);
      this.title = this.upgradeType;
    } else {
      this.listService.setUpgrade(upgrade, this.upgradeIndex, this.unitIndex);
      this.title = upgrade.name + ' (' + upgrade.cost + ')';
    }
  }
}
