import { Component, OnInit } from '@angular/core';
import { Unit } from '../shared/unit.model';
import { CommandCard } from '../shared/command.model';
import { ListService } from '../shared/list.service';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {
  units: Unit[] = [
    // Commanders
    //Empire
    new Unit('Darth Vader', '', 190, 'Commander', 'Trooper', 'Imperial', ['Force', 'Force', 'Force'], ['', '', ''],
      'assets\\images\\Cards\\Darth Vader.png', true, '03'),

    new Unit('Director Orson Krennic', '', 90, 'Commander', 'Trooper', 'Imperial', ['Command', 'Command', 'Gear'], ['', '', ''],
      'assets\\images\\Cards\\Director Orson Krennic.png', true, '1d'),

    new Unit('Emperor Palpatine', '', 210, 'Commander', 'Trooper', 'Imperial', ['Force', 'Force', 'Force', 'Command'], ['', '', '', ''],
      'assets\\images\\Cards\\Emperor Palpatine.png', true, '14'),

    new Unit('General Veers', '', 80, 'Commander', 'Trooper', 'Imperial', ['Command', 'Command', 'Gear'], ['', '', ''],
      'assets\\images\\Cards\\General Veers.png', true, '08'),

    new Unit('Iden Versio', '', 90, 'Commander', 'Trooper', 'Imperial', ['Training', 'Training', 'Gear', 'Armament', 'Counterpart'], ['', '', '', '', ''],
      'assets\\images\\Cards\\Iden Versio.png', true, '3a'),

    new Unit('Imperial Officer', '', 50, 'Commander', 'Trooper', 'Imperial', ['Command', 'Gear'], ['', ''],
      'assets\\images\\Cards\\Imperial Officer.png', true, '17'),

    //Rebel Alliance
    new Unit('Cassian Andor', '', 90, 'Commander', 'Trooper', 'Rebel', ['Command', 'Training', 'Gear', 'Armament'], ['', '', '', ''],
      'assets\\images\\Cards\\Cassian Andor.png', true, '39'),

    new Unit('Han Solo', '', 120, 'Commander', 'Trooper', 'Rebel', ['Command', 'Training', 'Gear'], ['', '', ''],
      'assets\\images\\Cards\\Han Solo.png', true, '0f'),

    new Unit('Jyn Erso', '', 110, 'Commander', 'Trooper', 'Rebel', ['Command', 'Training', 'Gear', 'Armament'], ['', '', '', ''],
      'assets\\images\\Cards\\Jyn Erso.png', true, '1b'),

    new Unit('Leia Organa', '', 90, 'Commander', 'Trooper', 'Rebel', ['Command', 'Command', 'Gear'], ['', '', ''],
      'assets\\images\\Cards\\Leia Organa.png', true, '0b'),

    new Unit('Luke Skywalker', '', 160, 'Commander', 'Trooper', 'Rebel', ['Force', 'Force', 'Gear'], ['', '', ''],
      'assets\\images\\Cards\\Luke Skywalker.png', true, '04'),

    new Unit('Rebel Officer', '', 50, 'Commander', 'Trooper', 'Rebel', ['Command', 'Gear'], ['', ''],
      'assets\\images\\Cards\\Rebel Officer.png', true, '16'),

    //Galactic Republic
    new Unit('Obi-Wan Kenobi', '', 175, 'Commander', 'Trooper', 'Galactic Republic', ['Force', 'Force', 'Command', 'Training'], ['', '', '', ''],
      'assets\\images\\Cards\\Obi-Wan Kenobi.png', true, '29'),

    new Unit('Anakin Skywalker', '', 160, 'Commander', 'Trooper', 'Galactic Republic', ['Force'], [''],
      '', true, '49'),

    new Unit('Clone Captain Rex', '', 90, 'Commander', 'Clone Trooper', 'Galactic Republic', ['Command', 'Training', 'Gear', 'Gear', 'Grenades'], ['', '', '', '', ''],
      'assets\\images\\Cards\\Clone Captain Rex.png', true, '32'),

    new Unit('Clone Commander', '', 55, 'Commander', 'Clone Trooper', 'Galactic Republic', ['Command'], [''],
      '', true, '4b'),

    // Operatives
    //Empire
    new Unit('Boba Fett', '', 140, 'Operative', 'Trooper', 'Imperial', ['Training', 'Training', 'Gear', 'Gear'], ['', '', '', ''],
      'assets\\images\\Cards\\Boba Fett.png', true, '10'),
    new Unit('Bossk', '', 115, 'Operative', 'Trooper', 'Imperial', ['Training', 'Training', 'Gear'], ['', '', ''],
      'assets\\images\\Cards\\Bossk.png', true, '22'),
    new Unit('Darth Vader', '', 170, 'Operative', 'Trooper', 'Imperial', ['Force', 'Force', 'Training'], ['', '', ''],
      'assets\\images\\Cards\\Darth Vader (Operative).png', true, '2f'),

    //Rebel Alliance
    new Unit('Chewbacca', '', 95, 'Operative', 'Trooper', 'Rebel', ['Training', 'Training', 'Gear'], ['', '', ''],
        'assets\\images\\Cards\\Chewbacca.png', true, '19'),

    new Unit('K2-SO', '', 90, 'Operative', 'Droid Trooper', 'Rebel', ['Comms', 'Armament'], ['', ''],
        'assets\\images\\Cards\\R2-D2.png', true, 'a5'),

    new Unit('Luke Skywalker', '', 200, 'Operative', 'Trooper', 'Rebel', ['Force', 'Force', 'Force', 'Training'], ['', '', '', ''],
        'assets\\images\\Cards\\Luke Skywalker (Operative).png', true, '2e'),
        
    new Unit('R2-D2', '', 35, 'Operative', 'Droid Trooper', 'Rebel', ['Training', 'Counterpart'], ['', ''],
        'assets\\images\\Cards\\R2-D2.png', true, 'a5'),

    new Unit('Sabine Wren', '', 125, 'Operative', 'Trooper', 'Rebel', ['Training', 'Gear', 'Gear', 'Armament'], ['', '', '', ''],
        'assets\\images\\Cards\\Sabine Wren.png', true, '21'),


    //Galactic Republic
    new Unit('Padme Amidala', '', 90, 'Operative', 'Trooper', 'Galactic Republic', ['Command', 'Training', 'Gear', 'Armament'], ['', '', '', ''],
        'assets\\images\\Cards\\Padme Amidala.png', true, '3c'),

    new Unit('R2-D2', '', 35, 'Operative', 'Droid Trooper', 'Galactic Republic', ['Training', 'Counterpart'], ['', ''],
        'assets\\images\\Cards\\R2-D2 (Republic).png', true, '99'),

    // Corps
    //Empire
    new Unit('Shoretroopers', '', 52, 'Corps', 'Trooper', 'Imperial', ['Heavy Weapon', 'Personnel', 'Training', 'Gear', 'Grenades'], ['', '', '', '', ''],
      'assets\\images\\Cards\\Shoretroopers.png', true, '27'),

    new Unit('Snowtroopers', '', 48, 'Corps', 'Trooper', 'Imperial', ['Heavy Weapon', 'Personnel', 'Gear', 'Grenades'], ['', '', '', ''],
      'assets\\images\\Cards\\Snowtroopers.png', true, '07'),

    new Unit('Stormtroopers', '', 44, 'Corps', 'Trooper', 'Imperial', ['Heavy Weapon', 'Personnel', 'Gear', 'Grenades'], ['', '', '', ''],
      'assets\\images\\Cards\\Stormtroopers.png', true, '05'),

    new Unit('DF-90 Mortar Trooper', '', 36, 'Corps', 'Emplacement Trooper', 'Imperial', ['Comms'], [''],
      'assets\\images\\Cards\\DF-90 Mortar Trooper.png', true, '30'),

    //Rebel Alliance
    new Unit('Fleet Troopers', '', 44, 'Corps', 'Trooper', 'Rebel', ['Heavy Weapon', 'Personnel', 'Gear', 'Grenades'], ['', '', '', ''],
      'assets\\images\\Cards\\Fleet Troopers.png', true, '0c'),

    new Unit('Rebel Troopers', '', 40, 'Corps', 'Trooper', 'Rebel', ['Heavy Weapon', 'Personnel', 'Gear', 'Grenades'], ['', '', '', ''],
      'assets\\images\\Cards\\Rebel Troopers.png', true, '06'),

    new Unit('Rebel Veterans', '', 48, 'Corps', 'Trooper', 'Rebel', ['Heavy Weapon', 'Personnel', 'Training', 'Gear', 'Grenades'], ['', '', '', '', ''],
      'assets\\images\\Cards\\Rebel Veterans.png', true, '24'),

    new Unit('Mark II Medium Blaster Trooper', '', 38, 'Corps', 'Emplacement Trooper', 'Rebel', ['Comms'], [''],
      'assets\\images\\Cards\\Mark II Medium Blaster Trooper.png', true, '2a'),

    // Special Forces
    //Empire
    new Unit('Imperial Death Troopers', '', 76, 'Special Forces', 'Trooper', 'Imperial',
      ['Heavy Weapon', 'Training', 'Comms', 'Gear', 'Armament', 'Grenades'], ['', '', '', '', '', ''],
      'assets\\images\\Cards\\Imperial Death Troopers.png', true, '1e'),

    new Unit('Imperial Royal Guards', '', 75, 'Special Forces', 'Trooper', 'Imperial',
      ['Heavy Weapon', 'Training', 'Training', 'Gear', 'Grenades'], ['', '', '', '', ''],
      'assets\\images\\Cards\\Imperial Royal Guards.png', true, '15'),
      
    new Unit('Imperial Special Forces', '', 68, 'Special Forces', 'Trooper', 'Imperial', ['Heavy Weapon', 'Training', 'Training', 'Comms', 'Gear', 'Grenades'],
      ['', '', '', '', '', ''], 'assets\\images\\Cards\\Imperial Special Forces.png', true, '4e'),

    new Unit('Imperial Special Forces', 'Inferno Squad', 34, 'Special Forces', 'Trooper', 'Imperial', ['Heavy Weapon', 'Heavy Weapon', 'Training', 'Training', 'Comms', 'Gear', 'Grenades'],
      ['', '', '', '', '', '', ''], 'assets\\images\\Cards\\Imperial Special Forces (Inferno Squad).png', true, '4f'),
    
    new Unit('Scout Troopers', '', 60, 'Special Forces', 'Trooper', 'Imperial', ['Heavy Weapon', 'Training', 'Comms', 'Gear', 'Grenades'],
      ['', '', '', '', ''], 'assets\\images\\Cards\\Scout Troopers.png', true, '11'),

    new Unit('Scout Troopers', 'Strike Team', 16, 'Special Forces', 'Trooper', 'Imperial',
      ['Heavy Weapon', 'Training', 'Comms', 'Gear', 'Grenades'], ['', '', '', '', ''],
      'assets\\images\\Cards\\Scout Troopers - Strike Team.png', true, '1a'),

    //Rebel Alliance
    new Unit('Mandalorian Resistance', '', 72, 'Special Forces', 'Trooper', 'Rebel', ['Heavy Weapon', 'Training', 'Comms', 'Gear', ,'Armament', 'Grenades'],
      ['', '', '', '', '', ''], 'assets\\images\\Cards\\Mandalorian Resistance.png', true, '47'),
    
    new Unit('Mandalorian Resistance', 'Clan Wren', 34, 'Special Forces', 'Trooper', 'Rebel', ['Heavy Weapon', 'Heavy Weapon', 'Training', 'Comms', 'Gear', 'Armament', 'Grenades'],
      ['', '', '', '', '', '', ''], 'assets\\images\\Cards\\Mandalorian Resistance (Clan Wren).png', true, '48'),
    
    new Unit('Rebel Commandos', '', 60, 'Special Forces', 'Trooper', 'Rebel', ['Heavy Weapon', 'Training', 'Comms', 'Gear', 'Grenades'],
      ['', '', '', '', ''], 'assets\\images\\Cards\\Rebel Commandos.png', true, '0d'),

    new Unit('Rebel Commandos', 'Strike Team', 20, 'Special Forces', 'Trooper', 'Rebel',
      ['Heavy Weapon', 'Training', 'Comms', 'Gear', 'Grenades'], ['', '', '', '', ''],
      'assets\\images\\Cards\\Rebel Commandos - Strike Team.png', true, '0e'),

    new Unit('Rebel Pathfinders', '', 68, 'Special Forces', 'Trooper', 'Rebel',
      ['Heavy Weapon', 'Training', 'Comms', 'Gear', 'Armament', 'Grenades'],
      ['', '', '', '', '', ''], 'assets\\images\\Cards\\Rebel Pathfinders.png', true, '1c'),

    new Unit('Wookiee Warriors', '', 75, 'Special Forces', 'Trooper', 'Rebel', ['Heavy Weapon', 'Training', 'Training', 'Gear', 'Grenades'],
      ['', '', '', '', ''], 'assets\\images\\Cards\\Wookiee Warriors.png', true, '18'),

    // Supports
    //Empire
    new Unit('Dewback Rider', '', 90, 'Support', 'Creature Trooper', 'Imperial', ['Training', 'Comms', 'Armament'], ['', '', ''],
      'assets\\images\\Cards\\Dewback Rider.png', true, '28'),

    new Unit('E-Web Heavy Blaster Team', '', 55, 'Support', 'Emplacement Trooper', 'Imperial', ['Comms', 'Generator'], ['', ''],
    'assets\\images\\Cards\\E-Web Heavy Blaster Team.png', true, '13'),
    
    new Unit('74-Z Speeder Bikes', '', 90, 'Support', 'Repulsor Vehicle', 'Imperial', ['Comms'], [''],
    'assets\\images\\Cards\\74-Z Speeder Bikes.png', true, '02'),

    //Rebel Alliance
    new Unit('AT-RT', '', 55, 'Support', 'Ground Vehicle', 'Rebel', ['Hardpoint', 'Comms'], ['', ''],
      'assets\\images\\Cards\\AT-RT.png', true, '01'),
      
    new Unit('1.4 FD Laser Cannon Team', '', 70, 'Support', 'Emplacement Trooper', 'Rebel', ['Comms', 'Generator'], ['', ''],
        'assets\\images\\Cards\\14 FD Laser Cannon Team.png', true, '12'),

    new Unit('Tauntaun Riders', '', 90, 'Support', 'Creature Trooper', 'Rebel', ['Training', 'Comms'], ['', ''],
      'assets\\images\\Cards\\Tauntaun Riders.png', true, '23'),


    // Heavies
    //Empire
    new Unit('AT-ST', '', 170, 'Heavy', 'Ground Vehicle', 'Imperial', ['Pilot', 'Hardpoint', 'Hardpoint', 'Hardpoint', 'Comms'],
      ['', '', '', '', ''], 'assets\\images\\Cards\\AT-ST.png', true, '09'),

    new Unit('TX-225 GAVw Occupier Combat Assault Tank', '', 155, 'Heavy', 'Ground Vehicle', 'Imperial',
        ['Pilot', 'Hardpoint', 'Comms'], ['', '', ''], 'assets\\images\\Cards\\TX-225 GAVw Occupier Combat Assault Tank.png', true, '1f'),

    //Rebel Alliance
    new Unit('T-47 Airspeeder', '', 140, 'Heavy', 'Repulsor Vehicle', 'Rebel', ['Pilot', 'Hardpoint', 'Comms'], ['', '', ''],
    'assets\\images\\Cards\\T-47 Airspeeder.png', true, '0a'),
    
    new Unit('X-34 Landspeeder', '', 75, 'Heavy', 'Repulsor Vehicle', 'Rebel', ['Pilot', 'Crew', 'Crew', 'Hardpoint', 'Comms'],
    ['', '', '', '', ''], 'assets\\images\\Cards\\X-34 Landspeeder.png', true, '1f')
  ];
  
  commandCards = [
  //Generic 1 Pip
    new CommandCard('Ambush', 1, '', '', 'assets\\images\\Cards\\Command Cards\\Ambush.png', true),
    
    //Imperial 1 Pip
    new CommandCard('Covert Observation', 1, '', 'Imperial', 'assets\\images\\Cards\\Command Cards\\Covert Observation.png', true),
    new CommandCard('Implacable', 1, 'Darth Vader', '', 'assets\\images\\Cards\\Command Cards\\Implacable.png', true),
    new CommandCard('Maximum Firepower', 1, 'General Veers', '', 'assets\\images\\Cards\\Command Cards\\Maximum Firepower.png', true),
    new CommandCard('And Now...You Will Die', 1, 'Emperor Palpatine', '',
    'assets\\images\\Cards\\Command Cards\\And Now You Will Die.png', true),
    new CommandCard('Voracious Ambition', 1, 'Director Orson Krennic', '',
    'assets\\images\\Cards\\Command Cards\\Voracious Ambition.png', true),
    new CommandCard('Whipcord Launcher', 1, 'Boba Fett', '', 'assets\\images\\Cards\\Command Cards\\Whipcord Launcher.png', true),
    
    //Rebel Alliance 1 Pip
    new CommandCard('Sabotaged Communications', 1, '', 'Rebel',
    'assets\\images\\Cards\\Command Cards\\Sabotaged Communications.png', true),
    new CommandCard('Son of Skywalker', 1, 'Luke Skywalker', '', 'assets\\images\\Cards\\Command Cards\\Son of Skywalker.png', true),
    new CommandCard('Coordinated Bombardment', 1, 'Leia Organa', '',
    'assets\\images\\Cards\\Command Cards\\Coordinated Bombardment.png', true),
    new CommandCard('Rebellious', 1, 'Jyn Erso', '', 'assets\\images\\Cards\\Command Cards\\Rebellious.png', true),
    new CommandCard('Sorry About the Mess', 1, 'Han Solo', '', 'assets\\images\\Cards\\Command Cards\\Sorry About the Mess.png', true),
    new CommandCard('Common Cause', 1, 'Chewbacca', '', 'assets\\images\\Cards\\Command Cards\\Common Cause.png', true),
    new CommandCard('Blast Off!', 1, 'R2-D2', '', 'assets\\images\\Cards\\Command Cards\\Blast Off!.png', true),
    
    // Galactic Republic 1 Pip
    new CommandCard('Synchronized Offensive', 1, '', 'Galactic Republic', 'assets\\images\\Cards\\Command Cards\\Synchronized Offensive.png', true),
    new CommandCard('Call Me Captain', 1, 'Clone Captain Rex', '', 'assets\\images\\Cards\\Command Cards\\Call Me Captain.png', true),
    new CommandCard('Hello There!', 1, 'Obi-Wan Kenobi', '', 'assets\\images\\Cards\\Command Cards\\Hello There!.png', true),
    new CommandCard('Our Fate is in Your Hands', 1, 'Padme Amidala', '', 'assets\\images\\Cards\\Command Cards\\Our Fate is in Your Hands.png', true),
    
  //Generic 2 Pip
    new CommandCard('Push', 2, '', '', 'assets\\images\\Cards\\Command Cards\\Push.png', true),

    //Imperial 2 Pip
    new CommandCard('Pinned Down', 2, '', 'Imperial', 'assets\\images\\Cards\\Command Cards\\Pinned Down.png', true),
    new CommandCard('New Ways to Motivate Them', 2, 'Darth Vader', '',
    'assets\\images\\Cards\\Command Cards\\New Ways to Motivate Them.png', true),
    new CommandCard('Evasive Maneuvers', 2, 'General Veers', '',
    'assets\\images\\Cards\\Command Cards\\Evasive Maneuvers.png', true),
    new CommandCard('Give in to Your Anger', 2, 'Emperor Palpatine', '',
    'assets\\images\\Cards\\Command Cards\\Give in to Your Anger.png', true),
    new CommandCard('Deploy the Garrison', 2, 'Director Orson Krennic', '',
    'assets\\images\\Cards\\Command Cards\\Deploy the Garrison.png', true),
    new CommandCard('ZX Flame Projector', 2, 'Boba Fett', '', 'assets\\images\\Cards\\Command Cards\\ZX Flame Projector.png', true),
    
    //Rebel Alliance 2 Pip
    new CommandCard('Turning the Tide', 2, '', 'Rebel', 'assets\\images\\Cards\\Command Cards\\Turning the Tide.png', true),
    new CommandCard('My Ally Is the Force', 2, 'Luke Skywalker', '',
    'assets\\images\\Cards\\Command Cards\\My Ally Is the Force.png', true),
    new CommandCard('No Time for Sorrows', 2, 'Leia Organa', '', 'assets\\images\\Cards\\Command Cards\\No Time for Sorrows.png', true),
    new CommandCard('Somebody Has to Save Our Skins', 3, 'Leia Organa', '',
    new CommandCard('Trust Goes Both Ways', 2, 'Jyn Erso', '', 'assets\\images\\Cards\\Command Cards\\Trust Goes Both Ways.png', true),
    'assets\\images\\Cards\\Command Cards\\Somebody Has to Save Our Skins.png', true),
    new CommandCard('Reckless Diversion', 2, 'Han Solo', '', 'assets\\images\\Cards\\Command Cards\\Reckless Diversion.png', true),
    new CommandCard('Brains and Brawn', 2, 'Chewbacca', '', 'assets\\images\\Cards\\Command Cards\\Brains and Brawn.png', true),
    new CommandCard('Impromptu Immolation', 2, 'R2-D2', '', 'assets\\images\\Cards\\Command Cards\\Impromptu Immolation.png', true),
    
    // Galactic Republic 2 Pip
    new CommandCard('Take That, Clankers!', 2, 'Clone Captain Rex', '', 'assets\\images\\Cards\\Command Cards\\Take That, Clankers!.png', true),
    new CommandCard('Aggessive Negotiations', 2, 'Padme Amidala', '', 'assets\\images\\Cards\\Command Cards\\Aggessive Negotiations.png', true),
    new CommandCard('Knowledge and Defense', 2, 'Obi-Wan Kenobi', '', 'assets\\images\\Cards\\Command Cards\\Knowledge and Defense.png', true),
    
  //Generic 3 Pip
    new CommandCard('Assault', 3, '', '', 'assets\\images\\Cards\\Command Cards\\Assault.png', true),

    //Imperial 3 Pip
    new CommandCard('Coordinated Fire', 3, '', 'Imperial', 'assets\\images\\Cards\\Command Cards\\Coordinated Fire.png', true),
    new CommandCard('Master of Evil', 3, 'Darth Vader', '', 'assets\\images\\Cards\\Command Cards\\Master of Evil.png', true),
    new CommandCard('Imperial Discipline', 3, 'General Veers', '', 'assets\\images\\Cards\\Command Cards\\Imperial Discipline.png', true),
    new CommandCard('An Entire Legion', 3, 'Emperor Palpatine', '', 'assets\\images\\Cards\\Command Cards\\An Entire Legion.png', true),
    new CommandCard('Annihilation Looms', 3, 'Director Orson Krennic', '',
    'assets\\images\\Cards\\Command Cards\\Annihilation Looms.png', true),
    new CommandCard('Z-6 Jetpack Rocket', 3, 'Boba Fett', '', 'assets\\images\\Cards\\Command Cards\\Z-6 Jetpack Rocket.png', true),
    
    //Rebel Alliance 3 Pip
    new CommandCard('Covering Fire', 3, '', 'Rebel', 'assets\\images\\Cards\\Command Cards\\Covering Fire.png', true),    
    new CommandCard('Return of the Jedi', 3, 'Luke Skywalker', '', 'assets\\images\\Cards\\Command Cards\\Return of the Jedi.png', true),    
    new CommandCard('Complete the Mission', 3, 'Jyn Erso', '', 'assets\\images\\Cards\\Command Cards\\Complete the Mission.png', true),
    new CommandCard('Change of Plans', 3, 'Han Solo', '', 'assets\\images\\Cards\\Command Cards\\Change of Plans.png', true),
    new CommandCard('Notorious Scoundrels', 3, 'Chewbacca', '', 'assets\\images\\Cards\\Command Cards\\Notorious Scoundrels.png', true),
    new CommandCard('Smoke Screen', 3, 'R2-D2', '', 'assets\\images\\Cards\\Command Cards\\Smoke Screen.png', true),
    
    // Galactic Republic 3 Pip
    new CommandCard('Were Not Programmed', 3, 'Clone Captain Rex', '', 'assets\\images\\Cards\\Command Cards\\Were Not Programmed.png', true),    
    new CommandCard('Diplomatic Cover', 3, 'Padme Amidala', '', 'assets\\images\\Cards\\Command Cards\\Diplomatic Cover.png', true),   
    new CommandCard('General Kenobi', 3, 'Obi-Wan Kenobi', '', 'assets\\images\\Cards\\Command Cards\\General Kenobi.png', true),

  //Generic 4 Pip
    new CommandCard('Standing Orders', 4, '', '', 'assets\\images\\Cards\\Command Cards\\Standing Orders.png', true)
  ];

  
  currentFaction = 'Imperial';
  showUnreleased = false;
  selectedCommanders: string[];
  
  constructor(private listService: ListService) { }
  
  ngOnInit() {
    this.selectedCommanders = this.listService.getCommanders();
    
    this.listService.listUpdated.subscribe(
      (newList: Unit[]) => {
        this.updateCommandCards();
      }
    );
  }

  displayFaction(faction) {
    this.currentFaction = faction;
  }

  toggleUnreleased(toggle) {
    this.showUnreleased = toggle;
  }

  updateCommandCards() {
    this.selectedCommanders = this.listService.getCommanders();
    for (let i = 0; i < this.commandCards.length; i++) {
      if (this.commandCards[i].unitRestriction === '') {
        this.commandCards[i].toDisplay = true;
      } else {
        let isPresent = false;
        for (let j = 0; j < this.selectedCommanders.length; j++) {
          if (this.selectedCommanders[j] === this.commandCards[i].unitRestriction) {
            isPresent = true;
          }
        }
        this.commandCards[i].toDisplay = isPresent;
      }
    }
  }

}
