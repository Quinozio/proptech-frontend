import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from '@proptech/app.config';
import { App } from '@proptech/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
