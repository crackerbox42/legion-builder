import { Component, OnInit, Input } from '@angular/core';
import { Unit } from '../../shared/unit.model';
import { ListService } from '../../shared/list.service';

@Component({
  selector: 'app-unit-detail',
  templateUrl: './unit-detail.component.html',
  styleUrls: ['./unit-detail.component.css']
})
export class UnitDetailComponent implements OnInit {
  @Input() unit: Unit;
  imageClass = 'thumb';

  constructor(private listService: ListService) { }

  ngOnInit() {
  }

  onAddUnit() {
    console.log('onAddUnit fired');
    const unit = JSON.parse(JSON.stringify(this.unit));
    this.listService.addUnit(unit);
  }

  imageToggle() {
    if (this.imageClass === 'thumb') {
      this.imageClass = 'full';
    } else {
      this.imageClass = 'thumb';
    }
  }
}
