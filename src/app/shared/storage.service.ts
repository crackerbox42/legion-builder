import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { List } from './list.model';
import { Unit } from './unit.model';
import { CommandCard } from './command.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  // list: Observable<Unit[]>;

  constructor(private http: Http) { }

  saveList(list) {
    return this.http.post('https://legion-builder.firebaseio.com/data.json', list);
  }

  getSavedList(listId) {
    return this.http.get('https://legion-builder.firebaseio.com/data/' + listId + '/list.json').map(
      (response: Response) => {
        return <Unit[]>response.json();
      }
    )
    .catch(
      (error: Response) => {
        return Observable.throw('Something went wrong');
      }
    );
  }

  getSavedCommands(listId) {
    return this.http.get('https://legion-builder.firebaseio.com/data/' + listId + '/commands.json').map(
      (response: Response) => {
        return <CommandCard[]>response.json();
      }
    )
    .catch(
      (error: Response) => {
        return Observable.throw('Something went wrong');
      }
    );
  }
}
