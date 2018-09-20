import { Unit } from './unit.model';
import { CommandCard } from './command.model';

export class List {
    constructor(
        public name: String,
        public units: Unit[],
        public points: number,
        public commandCards: CommandCard[],
        public size: number
    ) {}
}
