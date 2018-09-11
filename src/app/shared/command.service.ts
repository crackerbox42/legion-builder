import { EventEmitter, Injectable } from '@angular/core';
import { CommandCard } from './command.model';

export class CommandService {
    list: CommandCard[] = [];
    listUpdated = new EventEmitter<any>();

    constructor() {}

    addCard(card: CommandCard) {
        this.list.push(card);
        this.listUpdated.emit(this.list.slice());
    }
    removeCard(index) {
        this.list.splice(index, 1);
        this.listUpdated.emit(this.list.slice());
    }

    getCommandList() {
        return this.list.slice();
    }

    setCommandList(commands) {
        this.list = commands;
        this.listUpdated.emit(this.list.slice());
    }

    resetList() {
        this.list = [];
        this.listUpdated.emit(this.list.slice());
    }
}
