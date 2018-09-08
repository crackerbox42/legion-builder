import { Component, OnInit } from '@angular/core';
import { ListService } from '../shared/list.service';
import { Unit } from '../shared/unit.model';
import { CommandService } from '../shared/command.service';
import { CommandCard } from '../shared/command.model';

@Component({
  selector: 'app-printable-list',
  templateUrl: './printable-list.component.html',
  styleUrls: ['./printable-list.component.css']
})
export class PrintableListComponent implements OnInit {
  list: Unit[];
  commandList: CommandCard[];
  points;

  constructor(private listService: ListService, private commandService: CommandService) { }

  ngOnInit() {
    this.list = this.listService.getList();
    this.commandList = this.commandService.getCommandList();
    this.points = this.listService.getPoints();
  }

}
