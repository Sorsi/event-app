import { Routes } from '@angular/router';
import {
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivatorService,
    EventsListResolverService,
    CreateSessionComponent,
} from '../events/index';
import { Error404Component } from '../errors/404.component';

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, resolve: {events: EventsListResolverService}},
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
    { path: '', redirectTo: '/events', pathMatch: 'full'},
    { path: '404', component: Error404Component},
    { path: 'user', loadChildren: './users/user.module#UserModule'},
    { path: 'events/session/new', component: CreateSessionComponent},
];
