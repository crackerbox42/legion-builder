import { Upgrade } from './upgrade.model';
import { EventEmitter } from '@angular/core';

export class UpgradeService {
    allUpgrades = [
        // Force
        new Upgrade('Anger', 5, 'Force', '', 'Imperial', 'assets\\images\\Cards\\Upgrades\\Anger.png', '2d'),
        new Upgrade('Battle Meditation', 10, 'Force', '', '', 'assets\\images\\Cards\\Upgrades\\Battle Meditation.png', '05'),
        new Upgrade('Force Choke', 5, 'Force', '', 'Imperial', 'assets\\images\\Cards\\Upgrades\\Force Choke.png', '08'),
        new Upgrade('Force Push', 10, 'Force', '', '', 'assets\\images\\Cards\\Upgrades\\Force Push.png', '09'),
        new Upgrade('Force Reflexes', 15, 'Force', '', '', 'assets\\images\\Cards\\Upgrades\\Force Reflexes.png', '0a'),
        new Upgrade('Jedi Mind Trick', 5, 'Force', '', 'Rebel', 'assets\\images\\Cards\\Upgrades\\Jedi Mind Trick.png', '20'),
        new Upgrade('Saber Throw', 10, 'Force', '', '', 'assets\\images\\Cards\\Upgrades\\Saber Throw.png', '0d'),
        // Personnel
        new Upgrade('2-1B Medical Droid', 18, 'Personnel', '', 'Rebel', 'assets\\images\\Cards\\Upgrades\\2-1B Medical Droid.png', '40'),
        new Upgrade('Fleet Trooper', 11, 'Personnel', 'Fleet Troopers', '', 'assets\\images\\Cards\\Upgrades\\Fleet Trooper.png', '23'),
        new Upgrade('FX-9 Medical Droid', 19, 'Personnel', '', 'Imperial', 'assets\\images\\Cards\\Upgrades\\FX-9 Medical Droid.png', '42'),
        new Upgrade('Imperial Comms Technician', 10, 'Personnel', '', 'Imperial',
            'assets\\images\\Cards\\Upgrades\\Imperial Comms Technician.png', '43'),
        new Upgrade('Imperial Officer', 20, 'Personnel', '', 'Imperial', 'assets\\images\\Cards\\Upgrades\\Imperial Officer.png', '32'),
        new Upgrade('R4 Astromech Droid', 9, 'Personnel', '', 'Imperial', 'assets\\images\\Cards\\Upgrades\\R4 Astromech Droid.png', '44'),
        new Upgrade('R5 Astromech Droid', 8, 'Personnel', '', 'Rebel', 'assets\\images\\Cards\\Upgrades\\R5 Astromech Droid.png', '3f'),
        new Upgrade('Rebel Comms Technician', 9, 'Personnel', '', 'Rebel',
            'assets\\images\\Cards\\Upgrades\\Rebel Comms Technician.png', '37'),
        new Upgrade('Rebel Officer', 19, 'Personnel', '', 'Rebel', 'assets\\images\\Cards\\Upgrades\\Rebel Officer.png', '31'),
        new Upgrade('Rebel Trooper', 10, 'Personnel', 'Rebel Troopers', '', 'assets\\images\\Cards\\Upgrades\\Rebel Trooper.png', '0c'),
        new Upgrade('Snowtrooper', 12, 'Personnel', 'Snowtroopers', '', 'assets\\images\\Cards\\Upgrades\\Snowtrooper.png', '22'),
        new Upgrade('Stormtrooper', 11, 'Personnel', 'Stormtroopers', '', 'assets\\images\\Cards\\Upgrades\\Stormtrooper.png', '0e'),
        // Gear
        new Upgrade('Emergency Stims', 8, 'Gear', '', '', 'assets\\images\\Cards\\Upgrades\\Emergency Stims.png', '2b'),
        new Upgrade('Environmental Gear', 3, 'Gear', '', '', 'assets\\images\\Cards\\Upgrades\\Environmental Gear.png', '25'),
        new Upgrade('Grappling Hooks', 3, 'Gear', '', '', 'assets\\images\\Cards\\Upgrades\\Grappling Hooks.png', '12'),
        new Upgrade('Recon Intel', 2, 'Gear', '', '', 'assets\\images\\Cards\\Upgrades\\Recon Intel.png', '3a'),
        new Upgrade('Targeting Scopes', 6, 'Gear', '', '', 'assets\\images\\Cards\\Upgrades\\Targeting Scopes.png', '0f'),
        // Grenades
        new Upgrade('Concussion Grenades', 5, 'Grenades', '', '', 'assets\\images\\Cards\\Upgrades\\Concussion Grenades.png', '06'),
        new Upgrade('Fragmentation Grenades', 5, 'Grenades', '', '', 'assets\\images\\Cards\\Upgrades\\Fragmentation Grenades.png', '39'),
        new Upgrade('Impact Grenades', 5, 'Grenades', '', '', 'assets\\images\\Cards\\Upgrades\\Impact Grenades.png', '1e'),
        // Comms
        new Upgrade('Comms Jammer', 15, 'Comms', '', '', 'assets\\images\\Cards\\Upgrades\\Comms Jammer.png', '01'),
        new Upgrade('Comms Relay', 5, 'Comms', '', '', 'assets\\images\\Cards\\Upgrades\\Comms Relay.png', '41'),
        new Upgrade('HQ Uplink', 10, 'Comms', '', '', 'assets\\images\\Cards\\Upgrades\\HQ Uplink.png', '29'),
        new Upgrade('Long-Range Comlink', 10, 'Comms', '', '', 'assets\\images\\Cards\\Upgrades\\Long-Range Comlink.png', '02'),
        // Command
        new Upgrade('Commanding Presence', 10, 'Command', '', '', 'assets\\images\\Cards\\Upgrades\\Commanding Presence.png', '11'),
        new Upgrade('Esteemed Leader', 5, 'Command', '', '', 'assets\\images\\Cards\\Upgrades\\Esteemed Leader.png', '1a'),
        new Upgrade('Improvised Orders', 10, 'Command', '', '', 'assets\\images\\Cards\\Upgrades\\Improvised Orders.png', '2c'),
        new Upgrade('Strict Orders', 5, 'Command', '', '', 'assets\\images\\Cards\\Upgrades\\Strict Orders.png', '3e'),
        // Training
        new Upgrade('Duck and Cover', 8, 'Training', '', '', 'assets\\images\\Cards\\Upgrades\\Duck and Cover.png', '21'),
        new Upgrade('Hunter', 6, 'Training', '', '', 'assets\\images\\Cards\\Upgrades\\Hunter.png', '26'),
        new Upgrade('Overwatch', 4, 'Training', '', '', 'assets\\images\\Cards\\Upgrades\\Overwatch.png', '48'),
        new Upgrade('Tenacity', 4, 'Training', '', '', 'assets\\images\\Cards\\Upgrades\\Tenacity.png', '36'),
        // Pilot
        new Upgrade('First Sergeant Arbmab', 5, 'Pilot', 'Ground Vehicle', 'Imperial',
            'assets\\images\\Cards\\Upgrades\\First Sergeant Arbmab.png', '57'),
        new Upgrade('General Weiss', 10, 'Pilot', 'Ground Vehicle', 'Imperial', 'assets\\images\\Cards\\Upgrades\\General Weiss.png', '19'),
        new Upgrade('Imperial Hammers Elite Armor Pilot', 10, 'Pilot', 'Ground Vehicle', 'Imperial',
            'assets\\images\\Cards\\Upgrades\\Imperial Hammers Elite Armor Pilot.png', '53'),
        new Upgrade('Outer Rim Speeder Jockey', 10, 'Pilot', 'Repulsor Vehicle', 'Rebel',
            'assets\\images\\Cards\\Upgrades\\Outer Rim Speeder Jockey.png', '53'),
        new Upgrade('Ryder Azadi', 5, 'Pilot', 'Repulsor Vehicle', 'Rebel', 'assets\\images\\Cards\\Upgrades\\Ryder Azadi', '53'),
        new Upgrade('Wedge Antilles', 5, 'Pilot', 'Repulsor Vehicle', 'Rebel', 'assets\\images\\Cards\\Upgrades\\Wedge Antilles.png', '1d'),
        // Generator
        new Upgrade('Barrage Generator', 10, 'Generator', '', '', 'assets\\images\\Cards\\Upgrades\\Barrage Generator.png', '28'),
        new Upgrade('Overcharged Generator', 10, 'Generator', '', '', 'assets\\images\\Cards\\Upgrades\\Overcharged Generator.png', '2a'),
        // Hardpoint
        new Upgrade('88 Twin Light Blaster Cannon', 20, 'Hardpoint', 'AT-ST', '',
            'assets\\images\\Cards\\Upgrades\\88 Twin Light Blaster Cannon.png', '16'),
        new Upgrade('AT-RT Laser Cannon', 35, 'Hardpoint', 'AT-RT', '', 'assets\\images\\Cards\\Upgrades\\AT-RT Laser Cannon.png', '03'),
        new Upgrade('AT-RT Rotary Blaster', 30, 'Hardpoint', 'AT-RT', '',
            'assets\\images\\Cards\\Upgrades\\AT-RT Rotary Blaster.png', '04'),
        new Upgrade('AT-RT Flamethrower', 25, 'Hardpoint', 'AT-RT', '', 'assets\\images\\Cards\\Upgrades\\AT-RT Flamethrower.png', '14'),
        new Upgrade('AT-ST Mortar Launcher', 10, 'Hardpoint', 'AT-ST', '',
            'assets\\images\\Cards\\Upgrades\\AT-ST Mortar Launcher.png', '17'),
        new Upgrade('Ax-108 "Ground Buzzer"', 20, 'Hardpoint', 'T-47 Airspeeder', '',
            'assets\\images\\Cards\\Upgrades\\Ax-108 Ground Buzzer.png', '1b'),
        new Upgrade('DLT-19 Rifle Pintle', 18, 'Hardpoint', 'TX-225 GAVw Occupier Combat Assault Tank', '',
            'assets\\images\\Cards\\Upgrades\\DLT-19 Rifle Pintle.png', '58'),
        new Upgrade('DW-3 Concussion Grenade Launcher', 15, 'Hardpoint', 'AT-ST', '',
            'assets\\images\\Cards\\Upgrades\\DW-3 Concussion Grenade Launcher.png', '18'),
        new Upgrade('M-45 Ion Blaster', 38, 'Hardpoint', 'X-34 Landspeeder', '', 'assets\\images\\Cards\\Upgrades\\M-45 Ion Blaster', '1c'),
        new Upgrade('Mark II Medium Blaster', 34, 'Hardpoint', 'X-34 Landspeeder', '',
            'assets\\images\\Cards\\Upgrades\\Mark II Medium Blaster.png', '1c'),
        new Upgrade('Mo/Dk Power Harpoon', 8, 'Hardpoint', 'T-47 Airspeeder', '',
            'assets\\images\\Cards\\Upgrades\\MoDk Power Harpoon.png', '1c'),
        new Upgrade('RT-97C Rifle Pintle', 14, 'Hardpoint', 'TX-225 GAVw Occupier Combat Assault Tank', '',
            'assets\\images\\Cards\\Upgrades\\RT-97C Rifle Pintle.png', '59'),
        // Heavy Weapon
        new Upgrade('Bowcaster Wookiee', 35, 'Heavy Weapon', 'Wookiee Warriors', '',
        'assets\\images\\Cards\\Upgrades\\Bowcaster Wookiee.png', '33'),
        new Upgrade('Bistan', 32, 'Heavy Weapon', 'Rebel Pathfinders', '', 'assets\\images\\Cards\\Upgrades\\Bistan.png', '4a'),
        new Upgrade('DH-447 Sniper', 28, 'Heavy Weapon', 'Rebel Commandos', '', 'assets\\images\\Cards\\Upgrades\\DH-447 Sniper.png', '2f'),
        new Upgrade('DLT-19 Stormtrooper', 24, 'Heavy Weapon', 'Stormtroopers', '',
            'assets\\images\\Cards\\Upgrades\\DLT-19 Stormtrooper.png', '07'),
        new Upgrade('DLT-19D Trooper', 34, 'Heavy Weapon', 'Imperial Death Troopers', '',
            'assets\\images\\Cards\\Upgrades\\DLT-19D Trooper.png', '54'),
        new Upgrade('DLT-19x Sniper', 28, 'Heavy Weapon', 'Scout Troopers', '',
            'assets\\images\\Cards\\Upgrades\\DLT-19x Sniper.png', '34'),
        new Upgrade('DT-F16', 22, 'Heavy Weapon', 'Imperial Death Troopers', '',
            'assets\\images\\Cards\\Upgrades\\DT-F16.png', '4d'),
        new Upgrade('Electrostaff Guard', 25, 'Heavy Weapon', 'Imperial Royal Guards', '',
            'assets\\images\\Cards\\Upgrades\\Electrostaff Guard.png', '2e'),
        new Upgrade('Flametrooper', 20, 'Heavy Weapon', 'Snowtroopers', '', 'assets\\images\\Cards\\Upgrades\\Flametrooper.png', '24'),
        new Upgrade('HH-12 Stormtrooper', 34, 'Heavy Weapon', 'Stormtroopers', '',
            'assets\\images\\Cards\\Upgrades\\HH-12 Stormtrooper.png', '13'),
        new Upgrade('MPL-57 Barrage Trooper', 33, 'Heavy Weapon', 'Fleet Troopers', '',
            'assets\\images\\Cards\\Upgrades\\MPL-57 Barrage Trooper.png', '27'),
        new Upgrade('MPL-57 Ion Trooper', 32, 'Heavy Weapon', 'Rebel Troopers', '',
            'assets\\images\\Cards\\Upgrades\\MPL-57 Ion Trooper.png', '0b'),
        new Upgrade('Pao', 22, 'Heavy Weapon', 'Rebel Pathfinders', '', 'assets\\images\\Cards\\Upgrades\\Pao.png', '4b'),
        new Upgrade('Proton Charge Saboteur', 26, 'Heavy Weapon', 'Rebel Commandos', '',
            'assets\\images\\Cards\\Upgrades\\Proton Charge Saboteur.png', '30'),
        new Upgrade('Scatter Gun Trooper', 23, 'Heavy Weapon', 'Fleet Troopers', '',
            'assets\\images\\Cards\\Upgrades\\Scatter Gun Trooper.png', '1f'),
        new Upgrade('Sonic Charge Saboteur', 26, 'Heavy Weapon', 'Scout Troopers', '',
            'assets\\images\\Cards\\Upgrades\\Sonic Charge Saboteur.png', '35'),
        new Upgrade('T-7 Ion Snowtrooper', 34, 'Heavy Weapon', 'Snowtroopers', '',
            'assets\\images\\Cards\\Upgrades\\T-7 Ion Snowtrooper.png', '15'),
        new Upgrade('Z-6 Trooper', 22, 'Heavy Weapon', 'Rebel Troopers', '', 'assets\\images\\Cards\\Upgrades\\Z-6 Trooper.png', '10'),
        // Armament
        new Upgrade('A-180 Pistol/Rifle', 0, 'Armament', 'Jyn Erso', '', 'assets\\images\\Cards\\Upgrades\\A-180 Pistol-Rifle.gif', '3b'),
        new Upgrade('A-300 Short/Long', 6, 'Armament', 'Rebel Pathfinders', '', 'assets\\images\\Cards\\Upgrades\\A-300.gif', '3c'),
        new Upgrade('E-11D Focused Fire/Grenade Launcher', 8, 'Armament', 'Imperial Death Troopers', '',
            'assets\\images\\Cards\\Upgrades\\E-11D.gif', '55'),
        // Crew
        new Upgrade('A-300 Rifle Gunner', 9, 'Crew', 'X-34 Landspeeder', '',
            'assets\\images\\Cards\\Upgrades\\A-300 Rifle Gunner.png', '55'),
        new Upgrade('RPS-6 Rocket Gunner', 36, 'Crew', 'X-34 Landspeeder', '',
            'assets\\images\\Cards\\Upgrades\\RPS-6 Rocket Gunner.png', '55')
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
