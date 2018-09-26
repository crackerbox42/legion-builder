import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ListService } from '../../shared/list.service';
import { CommandService } from '../../shared/command.service';

@Component({
  selector: 'app-faction-selector',
  templateUrl: './faction-selector.component.html',
  styleUrls: ['./faction-selector.component.css']
})
export class FactionSelectorComponent implements OnInit {
  @Output() factionSelected = new EventEmitter<string>();
  @Output() unreleasedToggled = new EventEmitter<boolean>();
  currentFaction = 'Imperial';
  showUnreleased = false;

  constructor(private listService: ListService, private commandService: CommandService) { }

  ngOnInit() {
  }

  setFaction(faction) {
    if (this.currentFaction !== faction) {
      if (this.listService.list.length > 0) {
        if (confirm('Do you want to change factions and clear your list?')) {
          this.listService.resetList();
          this.commandService.resetList();
          this.factionSelected.emit(faction);
          this.currentFaction = faction;
        }
      } else {
        this.listService.resetList();
        this.commandService.resetList();
        this.factionSelected.emit(faction);
        this.currentFaction = faction;
      }
    }
  }

  toggleUnreleased() {
    this.showUnreleased = !this.showUnreleased;
    this.unreleasedToggled.emit(this.showUnreleased);
  }

}
