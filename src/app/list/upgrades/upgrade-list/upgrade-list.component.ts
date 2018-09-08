import { Component, OnInit, Input } from '@angular/core';
import { Upgrade } from '../../../shared/upgrade.model';
import { UpgradeService } from '../../../shared/upgrades.service';
import { ListService } from '../../../shared/list.service';

@Component({
  selector: 'app-upgrade-list',
  templateUrl: './upgrade-list.component.html',
  styleUrls: ['./upgrade-list.component.css']
})
export class UpgradeListComponent implements OnInit {
  @Input() upgrade: Upgrade;
  @Input() indexValue: number;

  constructor(private listService: ListService) { }

  ngOnInit() {
  }

  onUpgradeSelected() {
  }

}
