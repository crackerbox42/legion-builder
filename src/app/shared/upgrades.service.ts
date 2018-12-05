import { Upgrade } from './upgrade.model';
import { EventEmitter } from '@angular/core';

export class UpgradeService {
    allUpgrades = [
        // Force
        new Upgrade('Anger', 5, 'Force', '', 'Imperial', 'assets\\images\\Cards\\Upgrades\\Anger.png'),
        new Upgrade('Battle Meditation', 10, 'Force', '', '', 'assets\\images\\Cards\\Upgrades\\Battle Meditation.png'),
        new Upgrade('Force Choke', 5, 'Force', '', 'Imperial', 'assets\\images\\Cards\\Upgrades\\Force Choke.png'),
        new Upgrade('Force Push', 10, 'Force', '', '', 'assets\\images\\Cards\\Upgrades\\Force Push.png'),
        new Upgrade('Force Reflexes', 15, 'Force', '', '', 'assets\\images\\Cards\\Upgrades\\Force Reflexes.png'),
        new Upgrade('Jedi Mind Trick', 5, 'Force', '', 'Rebel', 'assets\\images\\Cards\\Upgrades\\Jedi Mind Trick.png'),
        new Upgrade('Saber Throw', 10, 'Force', '', '', 'assets\\images\\Cards\\Upgrades\\Saber Throw.png'),
        // Personnel
        new Upgrade('Fleet Trooper', 11, 'Personnel', 'Fleet Troopers', '', 'assets\\images\\Cards\\Upgrades\\Fleet Trooper.png'),
        new Upgrade('Rebel Comms Technician', 9, 'Personnel', '', 'Rebel',
            'assets\\images\\Cards\\Upgrades\\Rebel Comms Technician.png'),
        new Upgrade('Rebel Trooper', 10, 'Personnel', 'Rebel Troopers', '', 'assets\\images\\Cards\\Upgrades\\Rebel Trooper.png'),
        new Upgrade('Snowtrooper', 12, 'Personnel', 'Snowtroopers', '', 'assets\\images\\Cards\\Upgrades\\Snowtrooper.png'),
        new Upgrade('Stormtrooper', 11, 'Personnel', 'Stormtroopers', '', 'assets\\images\\Cards\\Upgrades\\Stormtrooper.png'),
        // Gear
        new Upgrade('Emergency Stims', 8, 'Gear', '', '', 'assets\\images\\Cards\\Upgrades\\Emergency Stims.png'),
        new Upgrade('Environmental Gear', 3, 'Gear', '', '', 'assets\\images\\Cards\\Upgrades\\Environmental Gear.png'),
        new Upgrade('Grappling Hooks', 3, 'Gear', '', '', 'assets\\images\\Cards\\Upgrades\\Grappling Hooks.png'),
        new Upgrade('Recon Intel', 2, 'Gear', '', '', 'assets\\images\\Cards\\Upgrades\\Recon Intel.png'),
        new Upgrade('Targeting Scopes', 6, 'Gear', '', '', 'assets\\images\\Cards\\Upgrades\\Targeting Scopes.png'),
        // Grenades
        new Upgrade('Concussion Grenades', 5, 'Grenades', '', '', 'assets\\images\\Cards\\Upgrades\\Concussion Grenades.png'),
        new Upgrade('Fragmentation Grenades', 5, 'Grenades', '', '', 'assets\\images\\Cards\\Upgrades\\Fragmentation Grenades.png'),
        new Upgrade('Impact Grenades', 5, 'Grenades', '', '', 'assets\\images\\Cards\\Upgrades\\Impact Grenades.png'),
        // Comms
        new Upgrade('Comms Jammer', 15, 'Comms', '', '', 'assets\\images\\Cards\\Upgrades\\Comms Jammer.png'),
        new Upgrade('HQ Uplink', 10, 'Comms', '', '', 'assets\\images\\Cards\\Upgrades\\HQ Uplink.png'),
        new Upgrade('Long-Range Comlink', 10, 'Comms', '', '', 'assets\\images\\Cards\\Upgrades\\Long-Range Comlink.png'),
        // Command
        new Upgrade('Commanding Presence', 10, 'Command', '', '', 'assets\\images\\Cards\\Upgrades\\Commanding Presence.png'),
        new Upgrade('Esteemed Leader', 5, 'Command', '', '', 'assets\\images\\Cards\\Upgrades\\Esteemed Leader.png'),
        new Upgrade('Improvised Orders', 10, 'Command', '', '', 'assets\\images\\Cards\\Upgrades\\Improvised Orders.png'),
        // Training
        new Upgrade('Duck and Cover', 8, 'Training', '', '', 'assets\\images\\Cards\\Upgrades\\Duck and Cover.png'),
        new Upgrade('Hunter', 6, 'Training', '', '', 'assets\\images\\Cards\\Upgrades\\Hunter.png'),
        new Upgrade('Tenacity', 4, 'Training', '', '', 'assets\\images\\Cards\\Upgrades\\Tenacity.png'),
        // Pilot
        new Upgrade('General Weiss', 10, 'Pilot', 'Ground Vehicle', 'Imperial', 'assets\\images\\Cards\\Upgrades\\General Weiss.png'),
        new Upgrade('Wedge Antilles', 5, 'Pilot', 'Repulsor Vehicle', 'Rebel', 'assets\\images\\Cards\\Upgrades\\Wedge Antilles.png'),
        // Generator
        new Upgrade('Barrage Generator', 10, 'Generator', '', '', 'assets\\images\\Cards\\Upgrades\\Barrage Generator.png'),
        new Upgrade('Overcharged Generator', 10, 'Generator', '', '', 'assets\\images\\Cards\\Upgrades\\Overcharged Generator.png'),
        // Hardpoint
        new Upgrade('88 Twin Light Blaster Cannon', 20, 'Hardpoint', 'AT-ST', '',
            'assets\\images\\Cards\\Upgrades\\88 Twin Light Blaster Cannon.png'),
        new Upgrade('AT-RT Laser Cannon', 35, 'Hardpoint', 'AT-RT', '', 'assets\\images\\Cards\\Upgrades\\AT-RT Laser Cannon.png'),
        new Upgrade('AT-RT Rotary Blaster', 30, 'Hardpoint', 'AT-RT', '', 'assets\\images\\Cards\\Upgrades\\AT-RT Rotary Blaster.png'),
        new Upgrade('AT-RT Flamethrower', 25, 'Hardpoint', 'AT-RT', '', 'assets\\images\\Cards\\Upgrades\\AT-RT Flamethrower.png'),
        new Upgrade('AT-ST Mortar Launcher', 10, 'Hardpoint', 'AT-ST', '', 'assets\\images\\Cards\\Upgrades\\AT-ST Mortar Launcher.png'),
        new Upgrade('Ax-108 "Ground Buzzer"', 20, 'Hardpoint', 'T-47 Airspeeder', '',
            'assets\\images\\Cards\\Upgrades\\Ax-108 Ground Buzzer.png'),
        new Upgrade('DW-3 Concussion Grenade Launcher', 15, 'Hardpoint', 'AT-ST', '',
            'assets\\images\\Cards\\Upgrades\\DW-3 Concussion Grenade Launcher.png'),
        new Upgrade('Mo/Dk Power Harpoon', 8, 'Hardpoint', 'T-47 Airspeeder', '',
            'assets\\images\\Cards\\Upgrades\\MoDk Power Harpoon.png'),
        // Heavy Weapon
        new Upgrade('DH-447 Sniper', 28, 'Heavy Weapon', 'Rebel Commandos', '', 'assets\\images\\Cards\\Upgrades\\DH-447 Sniper.png'),
        new Upgrade('DLT-19 Stormtrooper', 24, 'Heavy Weapon', 'Stormtroopers', '',
            'assets\\images\\Cards\\Upgrades\\DLT-19 Stormtrooper.png'),
        new Upgrade('DLT-19x Sniper', 28, 'Heavy Weapon', 'Scout Troopers', '', 'assets\\images\\Cards\\Upgrades\\DLT-19x Sniper.png'),
        new Upgrade('Electrostaff Guard', 25, 'Heavy Weapon', 'Imperial Royal Guards', '',
            'assets\\images\\Cards\\Upgrades\\Electrostaff Guard.png'),
        new Upgrade('Flametrooper', 20, 'Heavy Weapon', 'Snowtroopers', '', 'assets\\images\\Cards\\Upgrades\\Flametrooper.png'),
        new Upgrade('HH-12 Stormtrooper', 34, 'Heavy Weapon', 'Stormtroopers', '',
            'assets\\images\\Cards\\Upgrades\\HH-12 Stormtrooper.png'),
        new Upgrade('MPL-57 Barrage Trooper', 33, 'Heavy Weapon', 'Fleet Troopers', '',
            'assets\\images\\Cards\\Upgrades\\MPL-57 Barrage Trooper.png'),
        new Upgrade('MPL-57 Ion Trooper', 32, 'Heavy Weapon', 'Rebel Troopers', '',
            'assets\\images\\Cards\\Upgrades\\MPL-57 Ion Trooper.png'),
        new Upgrade('Proton Charge Saboteur', 26, 'Heavy Weapon', 'Rebel Commandos', '',
            'assets\\images\\Cards\\Upgrades\\Proton Charge Saboteur.png'),
        new Upgrade('Scatter Gun Trooper', 23, 'Heavy Weapon', 'Fleet Troopers', '',
            'assets\\images\\Cards\\Upgrades\\Scatter Gun Trooper.png'),
        new Upgrade('Sonic Charge Saboteur', 26, 'Heavy Weapon', 'Scout Troopers', '',
            'assets\\images\\Cards\\Upgrades\\Sonic Charge Saboteur.png'),
        new Upgrade('T-7 Ion Snowtrooper', 34, 'Heavy Weapon', 'Snowtroopers', '',
            'assets\\images\\Cards\\Upgrades\\T-7 Ion Snowtrooper.png'),
        new Upgrade('Z-6 Trooper', 22, 'Heavy Weapon', 'Rebel Troopers', '', 'assets\\images\\Cards\\Upgrades\\Z-6 Trooper.png')
    ];
    upgradeSelected = new EventEmitter<any>();
    dark = 'Dark';
    light = 'Light';

    getUpgrades(type, name, faction, unitType) {
        const upgrades = [];

        this.allUpgrades.forEach(
            upgrade => {
                if (upgrade.unitRestriction !== '') {
                    if ((upgrade.unitRestriction === name || upgrade.unitRestriction === unitType) && upgrade.type === type) {
                        upgrades.push(upgrade);
                    }
                } else if (upgrade.factionRestriction !== '') {
                    if (upgrade.factionRestriction === faction && upgrade.type === type) {
                        upgrades.push(upgrade);
                    }
                } else if (upgrade.type === type) {
                    upgrades.push(upgrade);
                }
            }
        );
        return(upgrades.slice());
    }
}
