import { Component, OnInit, Input } from '@angular/core';
import { CommandCard } from '../../shared/command.model';
import { CommandService } from '../../shared/command.service';

@Component({
  selector: 'app-command-list',
  templateUrl: './command-list.component.html',
  styleUrls: ['./command-list.component.css']
})
export class CommandListComponent implements OnInit {
  @Input() card: CommandCard;
  imageClass = 'thumb';

  constructor(private commandService: CommandService) { }

  ngOnInit() {
  }

  onAddCommand() {
    console.log('onAddCommand fired');
    const card = JSON.parse(JSON.stringify(this.card));
    this.commandService.addCard(card);
  }

  imageToggle() {
    if (this.imageClass === 'thumb') {
      this.imageClass = 'full';
    } else {
      this.imageClass = 'thumb';
    }
  }

}
