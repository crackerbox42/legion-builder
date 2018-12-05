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
    new Unit('Darth Vader', '', 200, 'Commander', 'Trooper', 'Imperial', ['Force', 'Force', 'Force'], ['', '', ''],
      'assets\\images\\Cards\\Darth Vader.png', true),
    new Unit('Emperor Palpatine', '', 210, 'Commander', 'Trooper', 'Imperial', ['Force', 'Force', 'Force', 'Command'], ['', '', '', ''],
      'assets\\images\\Cards\\Emperor Palpatine.png', true),
    new Unit('General Veers', '', 80, 'Commander', 'Trooper', 'Imperial', ['Command', 'Command', 'Gear'], ['', '', ''],
      'assets\\images\\Cards\\General Veers.png', true),
    new Unit('Han Solo', '', 120, 'Commander', 'Trooper', 'Rebel', ['Command', 'Training', 'Gear'], ['', '', ''],
      'assets\\images\\Cards\\Han Solo.png', true),
    new Unit('Leia Organa', '', 90, 'Commander', 'Trooper', 'Rebel', ['Command', 'Command', 'Gear'], ['', '', ''],
      'assets\\images\\Cards\\Leia Organa.png', true),
    new Unit('Luke Skywalker', '', 160, 'Commander', 'Trooper', 'Rebel', ['Force', 'Force', 'Gear'], ['', '', ''],
      'assets\\images\\Cards\\Luke Skywalker.png', true),
    // Operatives
    new Unit('Boba Fett', '', 140, 'Operative', 'Trooper', 'Imperial', ['Training', 'Training', 'Gear', 'Gear'], ['', '', '', ''],
      'assets\\images\\Cards\\Boba Fett.png', true),
    new Unit('Chewbacca', '', 110, 'Operative', 'Trooper', 'Rebel', ['Training', 'Training', 'Gear'], ['', '', ''],
        'assets\\images\\Cards\\Chewbacca.png', true),
    // Corps
    new Unit('Fleet Troopers', '', 44, 'Corps', 'Trooper', 'Rebel', ['Heavy Weapon', 'Personnel', 'Gear', 'Grenades'], ['', '', '', ''],
      'assets\\images\\Cards\\Fleet Troopers.png', true),
    new Unit('Rebel Troopers', '', 40, 'Corps', 'Trooper', 'Rebel', ['Heavy Weapon', 'Personnel', 'Gear', 'Grenades'], ['', '', '', ''],
      'assets\\images\\Cards\\Rebel Troopers.png', true),
    new Unit('Snowtroopers', '', 48, 'Corps', 'Trooper', 'Imperial', ['Heavy Weapon', 'Personnel', 'Gear', 'Grenades'], ['', '', '', ''],
      'assets\\images\\Cards\\Snowtroopers.png', true),
    new Unit('Stormtroopers', '', 44, 'Corps', 'Trooper', 'Imperial', ['Heavy Weapon', 'Personnel', 'Gear', 'Grenades'], ['', '', '', ''],
      'assets\\images\\Cards\\Stormtroopers.png', true),
    // Special Forces
    new Unit('Imperial Royal Guards', '', 75, 'Special Forces', 'Trooper', 'Imperial',
      ['Heavy Weapon', 'Training', 'Training', 'Gear', 'Grenades'], ['', '', '', '', ''],
      'assets\\images\\Cards\\Imperial Royal Guards.png', true),
    new Unit('Rebel Commandos', '', 60, 'Special Forces', 'Trooper', 'Rebel', ['Heavy Weapon', 'Training', 'Comms', 'Gear', 'Grenades'],
      ['', '', '', '', ''], 'assets\\images\\Cards\\Rebel Commandos.png', true),
    new Unit('Rebel Commandos', 'Strike Team', 16, 'Special Forces', 'Trooper', 'Rebel',
      ['Heavy Weapon', 'Training', 'Comms', 'Gear', 'Grenades'], ['', '', '', '', ''],
      'assets\\images\\Cards\\Rebel Commandos - Strike Team.png', true),
    new Unit('Scout Troopers', '', 60, 'Special Forces', 'Trooper', 'Imperial', ['Heavy Weapon', 'Training', 'Comms', 'Gear', 'Grenades'],
      ['', '', '', '', ''], 'assets\\images\\Cards\\Scout Troopers.png', true),
    new Unit('Scout Troopers', 'Strike Team', 16, 'Special Forces', 'Trooper', 'Imperial',
      ['Heavy Weapon', 'Training', 'Comms', 'Gear', 'Grenades'], ['', '', '', '', ''],
      'assets\\images\\Cards\\Scout Troopers - Strike Team.png', true),
    new Unit('Wookiee Warriors', '', 75, 'Special Forces', 'Trooper', 'Rebel', ['Heavy Weapon', 'Training', 'Training', 'Gear', 'Grenades'],
      ['', '', '', '', ''], 'assets\\images\\Cards\\Wookiee Warriors.png', false),
    // Supports
    new Unit('1.4 FD Laser Cannon Team', '', 70, 'Support', 'Emplacement Trooper', 'Rebel', ['Comms', 'Generator'], ['', ''],
      'assets\\images\\Cards\\14 FD Laser Cannon Team.png', true),
    new Unit('74-Z Speeder Bikes', '', 90, 'Support', 'Repulsor Vehicle', 'Imperial', ['Comms'], [''],
      'assets\\images\\Cards\\74-Z Speeder Bikes.png', true),
    new Unit('AT-RT', '', 55, 'Support', 'Ground Vehicle', 'Rebel', ['Hardpoint', 'Comms'], ['', ''],
      'assets\\images\\Cards\\AT-RT.png', true),
    new Unit('E-Web Heavy Blaster Team', '', 55, 'Support', 'Emplacement Trooper', 'Imperial', ['Comms', 'Generator'], ['', ''],
      'assets\\images\\Cards\\E-Web Heavy Blaster Team.png', true),
    // Heavies
    new Unit('AT-ST', '', 195, 'Heavy', 'Ground Vehicle', 'Imperial', ['Pilot', 'Hardpoint', 'Hardpoint', 'Hardpoint', 'Comms'],
      ['', '', '', '', ''], 'assets\\images\\Cards\\AT-ST.png', true),
    new Unit('T-47 Airspeeder', '', 175, 'Heavy', 'Repulsor Vehicle', 'Rebel', ['Pilot', 'Hardpoint', 'Comms'], ['', '', ''],
      'assets\\images\\Cards\\T-47 Airspeeder.png', true)
  ];

  commandCards = [
    new CommandCard('Ambush', 1, '', 'assets\\images\\Cards\\Command Cards\\Ambush.png', true),
    new CommandCard('Son of Skywalker', 1, 'Luke Skywalker', 'assets\\images\\Cards\\Command Cards\\Son of Skywalker.png', false),
    new CommandCard('Coordinated Bombardment', 1, 'Leia Organa',
      'assets\\images\\Cards\\Command Cards\\Coordinated Bombardment.png', false),
    new CommandCard('Implacable', 1, 'Darth Vader', 'assets\\images\\Cards\\Command Cards\\Implacable.png', false),
    new CommandCard('Maximum Firepower', 1, 'General Veers', 'assets\\images\\Cards\\Command Cards\\Maximum Firepower.png', false),
    new CommandCard('Sorry About the Mess', 1, 'Han Solo', 'assets\\images\\Cards\\Command Cards\\Sorry About the Mess.png', false),
    new CommandCard('Whipcord Launcher', 1, 'Boba Fett', 'assets\\images\\Cards\\Command Cards\\Whipcord Launcher.png', false),
    new CommandCard('And Now...You Will Die', 1, 'Emperor Palpatine',
      'assets\\images\\Cards\\Command Cards\\And Now You Will Die.png', false),
    new CommandCard('Push', 2, '', 'assets\\images\\Cards\\Command Cards\\Push.png', true),
    new CommandCard('My Ally Is the Force', 2, 'Luke Skywalker', 'assets\\images\\Cards\\Command Cards\\My Ally Is the Force.png', false),
    new CommandCard('No Time for Sorrows', 2, 'Leia Organa', 'assets\\images\\Cards\\Command Cards\\No Time for Sorrows.png', false),
    new CommandCard('New Ways to Motivate Them', 2, 'Darth Vader',
      'assets\\images\\Cards\\Command Cards\\New Ways to Motivate Them.png', false),
    new CommandCard('Evasive Maneuvers', 2, 'General Veers',
      'assets\\images\\Cards\\Command Cards\\Evasive Maneuvers.png', false),
    new CommandCard('Reckless Diversion', 2, 'Han Solo', 'assets\\images\\Cards\\Command Cards\\Reckless Diversion.png', false),
    new CommandCard('ZX Flame Projector', 2, 'Boba Fett', 'assets\\images\\Cards\\Command Cards\\ZX Flame Projector.png', false),
    new CommandCard('Give in to Your Anger', 2, 'Emperor Palpatine',
      'assets\\images\\Cards\\Command Cards\\Give in to Your Anger.png', false),
    new CommandCard('Assault', 3, '', 'assets\\images\\Cards\\Command Cards\\Assault.png', true),
    new CommandCard('Return of the Jedi', 3, 'Luke Skywalker', 'assets\\images\\Cards\\Command Cards\\Return of the Jedi.png', false),
    new CommandCard('Somebody Has to Save Our Skins', 3, 'Leia Organa',
      'assets\\images\\Cards\\Command Cards\\Somebody Has to Save Our Skins.png', false),
    new CommandCard('Master of Evil', 3, 'Darth Vader', 'assets\\images\\Cards\\Command Cards\\Master of Evil.png', false),
    new CommandCard('Imperial Discipline', 3, 'General Veers', 'assets\\images\\Cards\\Command Cards\\Imperial Discipline.png', false),
    new CommandCard('Change of Plans', 3, 'Han Solo', 'assets\\images\\Cards\\Command Cards\\Change of Plans.png', false),
    new CommandCard('Z-6 Jetpack Rocket', 3, 'Boba Fett', 'assets\\images\\Cards\\Command Cards\\Z-6 Jetpack Rocket.png', false),
    new CommandCard('Notorious Scoundrels', 3, 'Chewbacca', 'assets\\images\\Cards\\Command Cards\\Notorious Scoundrels.png', false),
    new CommandCard('An Entire Legion', 3, 'Emperor Palpatine', 'assets\\images\\Cards\\Command Cards\\An Entire Legion.png', false),
    new CommandCard('Standing Orders', 4, '', 'assets\\images\\Cards\\Command Cards\\Standing Orders.png', true)
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
