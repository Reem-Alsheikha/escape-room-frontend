import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

// Konfiguration für die Anwendung
export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule, RouterModule.forRoot(appRoutes)), // Routing ist hier
  ],
};

// Bootstrap der Anwendung
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
