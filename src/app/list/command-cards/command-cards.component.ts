import { Component, OnInit } from '@angular/core';
import { CommandService } from '../../shared/command.service';
import { CommandCard } from '../../shared/command.model';

@Component({
  selector: 'app-command-cards',
  templateUrl: './command-cards.component.html',
  styleUrls: ['./command-cards.component.css']
})
export class CommandCardsComponent implements OnInit {

  list: CommandCard[] = [];

  constructor(private commandService: CommandService) { }

  ngOnInit() {
    this.list = this.commandService.getCommandList();

    this.commandService.listUpdated.subscribe(
      (newList: CommandCard[]) => {
        this.list = newList;
      }
    );
  }

  onRemoveCard(index) {
    this.commandService.removeCard(index);
  }

}
