import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

// API-URL Konstante
export const API_URL = 'http://localhost:5000/api';

// Konfiguration für die Anwendung
export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule, RouterModule.forRoot(appRoutes)), // Routing ist hier
    provideHttpClient(withFetch()) // Hier wird `HttpClientModule` hinzugefügt
  ],
};

// Bootstrap der Anwendung
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

