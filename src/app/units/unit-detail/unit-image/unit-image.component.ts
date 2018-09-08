import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-unit-image',
  templateUrl: './unit-image.component.html',
  styleUrls: ['./unit-image.component.css']
})
export class UnitImageComponent implements OnInit {
  @Input() imageURL: string;

  constructor() { }

  ngOnInit() {
  }

}
