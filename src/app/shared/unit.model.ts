export class Unit {
    constructor(
        public name: string,
        public subtitle: string,
        public cost: number,
        public rank: string,
        public type: string,
        public faction: string,
        public availableUpgrades,
        public chosenUpgrades,
        public image: string
    ) {}
}
