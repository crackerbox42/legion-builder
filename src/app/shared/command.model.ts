export class CommandCard {
    constructor(
        public name: string,
        public pips: number,
        public unitRestriction: string,
        public factionRestriction: string,
        public image,
        public toDisplay: boolean) {}
}
