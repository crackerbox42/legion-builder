import { Component, OnInit } from '@angular/core';
import { ListService } from '../shared/list.service';
import { StorageService } from '../shared/storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from '../../../node_modules/rxjs';
import { Unit } from '../shared/unit.model';
import { CommandCard } from '../shared/command.model';
import { CommandService } from '../shared/command.service';

@Component({
  selector: 'app-saved-list',
  templateUrl: './saved-list.component.html',
  styleUrls: ['./saved-list.component.css']
})
export class SavedListComponent implements OnInit {
  id = this.route.snapshot.params['id'];
  unitList: Observable<Unit[]> = this.storageService.getSavedList(this.id);
  commandList: Observable<CommandCard[]> = this.storageService.getSavedCommands(this.id);

  unitAmounts;
  armySize;

  totalPoints;
  validPoints = true;
  pointsColor = 'black';

  constructor(private listService: ListService,
    private storageService: StorageService,
    private commandService: CommandService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    console.log(this.unitList);
    console.log(this.commandList);

    this.storageService.getSavedList(this.id)
      .map((list: Array<any>) => {
        const result: Array<Unit> = [];
        list.forEach(unit => {
          console.log(unit);
          result.push(new Unit(
            unit.name,
            unit.subtitle,
            unit.cost,
            unit.rank,
            unit.type,
            unit.faction,
            unit.availableUpgrades,
            unit.chosenUpgrades,
            unit.image,
            unit.released)
            );
        });
        return result; // <<<=== missing return
      })
      .subscribe(list => {
        this.listService.setList(list);
        this.totalPoints = this.listService.getPoints();
      });

      this.storageService.getSavedCommands(this.id)
      .map((list: Array<any>) => {
        const result: Array<CommandCard> = [];
        list.forEach(card => {
          result.push(new CommandCard(
            card.name,
            card.pips,
            card.unitRestriction,
            card.factionRestriction,
            card.image,
            card.toDisplay)
            );
        });
        return result; // <<<=== missing return
      })
      .subscribe(list => {
        this.commandService.setCommandList(list);
      });
  }
}
