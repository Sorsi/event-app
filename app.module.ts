import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  CreateEventComponent,
  CreateSessionComponent,
  EventDetailsComponent,
  EventThumbnailComponent,
  EventService,
  EventsListComponent,
  EventRouteActivatorService,
  EventsListResolverService,
} from './events/index';

import { appRoutes } from './nav/routes';
import { Error404Component } from './errors/404.component';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import { AuthService } from './users/auth.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    CreateEventComponent,
    CreateSessionComponent,
    Error404Component,
    EventDetailsComponent,
    EventThumbnailComponent,
    EventsAppComponent,
    EventsListComponent,
    NavBarComponent,
  ],
  providers: [
    AuthService,
    EventsListResolverService,
    EventRouteActivatorService,
    EventService,
    ToastrService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState,
    },
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm(`You haven't saved this event, do you really want to cancel?`);
  } else {
    return true;
  }
}
