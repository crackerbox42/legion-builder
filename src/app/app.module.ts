import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';
import { SatPopoverModule } from '@ncstate/sat-popover';
import { PopoverModule } from 'ngx-bootstrap/popover';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FactionSelectorComponent } from './units/faction-selector/faction-selector.component';
import { UnitsComponent } from './units/units.component';
import { ListComponent } from './list/list.component';
import { UnitDetailComponent } from './units/unit-detail/unit-detail.component';
import { ListService } from './shared/list.service';
import { UpgradesComponent } from './list/upgrades/upgrades.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { UpgradeListComponent } from './list/upgrades/upgrade-list/upgrade-list.component';
import { UpgradeService } from './shared/upgrades.service';
import { UnitImageComponent } from './units/unit-detail/unit-image/unit-image.component';
import { PrintableListComponent } from './printable-list/printable-list.component';
import { ContainerComponent } from './container/container.component';
import { CommandCardsComponent } from './list/command-cards/command-cards.component';
import { CommandService } from './shared/command.service';
import { CommandListComponent } from './units/command-list/command-list.component';
import { StorageService } from './shared/storage.service';
import { HttpModule } from '@angular/http';
import { SavedListComponent } from './saved-list/saved-list.component';
import { FormsModule } from '@angular/forms';
import { FullListService } from './shared/full-list.service';


const appRoutes: Routes = [
  { path: '', component: ContainerComponent },
  { path: 'print', component: PrintableListComponent },
  { path: 'list/:id', component: SavedListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FactionSelectorComponent,
    UnitsComponent,
    ListComponent,
    UnitDetailComponent,
    UpgradesComponent,
    DropdownDirective,
    UpgradeListComponent,
    UnitImageComponent,
    PrintableListComponent,
    ContainerComponent,
    CommandCardsComponent,
    CommandListComponent,
    SavedListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    SatPopoverModule,
    HttpModule,
    FormsModule,
    PopoverModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ListService, UpgradeService, CommandService, StorageService, FullListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
