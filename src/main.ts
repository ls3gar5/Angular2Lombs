// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    // Add other providers here if needed
    // provideRouter([/* your routes */]),
    // provideAnimations()
  ]
}).catch(err => console.error(err));