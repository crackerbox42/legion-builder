import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ListService } from '../shared/list.service';
import { Unit } from '../shared/unit.model';
import { StorageService } from '../shared/storage.service';
import { CommandService } from '../shared/command.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('listIDInput') listIDInputRef: ElementRef;

  list: Unit[];
  responseText;

  constructor(
    private router: Router,
    private listService: ListService,
    private storageService: StorageService,
    private commandService: CommandService
  ) { }

  ngOnInit() {
    this.list = this.listService.getList();

    this.listService.listUpdated.subscribe(
      (newList: Unit[]) => {
        this.list = newList;
      });
  }

  onLoadList() {
    const listID = this.listIDInputRef.nativeElement.value;
    this.router.navigate(['/list/' + listID]);
  }

  // onSaveList() {
  //   this.storageService.saveList(this.list).subscribe(
  //     (response) => {
  //       this.responseText = response.json();
  //       console.log(this.responseText.name);
  //       // tslint:disable-next-line:max-line-length
  //       alert('This list has been saved. You can access this list at http://legion.jodocast.com/list/' + this.responseText.name);
  //     },
  //     (error) => console.log(error)
  //   );
  // }

  onSaveList() {
    const fullList = {
      list: this.list,
      commands: this.commandService.getCommandList()
    };
    console.log(fullList);
    this.storageService.saveList(fullList).subscribe(
      (response) => {
        this.responseText = response.json();
        console.log(this.responseText.name);
        // tslint:disable-next-line:max-line-length
        alert('This list has been saved. You can access this list at http://legion.jodocast.com/list/' + this.responseText.name);
      },
      (error) => console.log(error)
    );
  }

  resetList() {
    if (confirm('Reset your list?')) {
      this.listService.resetList();
      this.commandService.resetList();
    }
  }
}
