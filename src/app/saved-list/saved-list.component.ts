import { Component, OnInit } from '@angular/core';
import { ListService } from '../shared/list.service';
import { StorageService } from '../shared/storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from '../../../node_modules/rxjs';
import { List } from '../shared/list.model';
import { Unit } from '../shared/unit.model';
import { CommandCard } from '../shared/command.model';

@Component({
  selector: 'app-saved-list',
  templateUrl: './saved-list.component.html',
  styleUrls: ['./saved-list.component.css']
})
export class SavedListComponent implements OnInit {
  id = this.route.snapshot.params['id'];
  fullList = this.storageService.getSavedList(this.id);
  unitList: Observable<Unit[]> = this.storageService.getSavedList(this.id);
  commandList: Observable<CommandCard[]> = this.storageService.getSavedCommands(this.id);

  unitAmounts;
  armySize;

  totalPoints;
  validPoints = true;
  pointsColor = 'black';

  constructor(private listService: ListService,
    private storageService: StorageService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    console.log(this.unitList);
    console.log(this.commandList);
    this.totalPoints = this.listService.getPoints();
    // this.listService.setList(this.list);
  }

}
