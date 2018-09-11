import { Unit } from './unit.model';
import { CommandCard } from './command.model';

export class List {
    constructor(
        public units: Unit[],
        public commandCards: CommandCard[],
        public size: number
    ) {}
}
