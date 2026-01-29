// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { app_routes } from './app/app-routing-module';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    // Add other providers here if needed
    provideRouter(app_routes),
    // provideAnimations()
  ]
}).catch(err => console.error(err));