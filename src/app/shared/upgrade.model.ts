export class Upgrade {
    constructor(
        public name: string,
        public cost: number,
        public type: string,
        public unitRestriction: string,
        public factionRestriction: string,
        public cardImage) {}
}
