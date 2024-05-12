import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { VotingComponent } from './components/voting/voting.component';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), VotingComponent, EquipmentComponent]
};
