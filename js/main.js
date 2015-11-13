import angular from 'angular';
import 'angular-ui-router';

import config from './config';

import AboutController from './controllers/about.controller';
import WriteController from './controllers/write.controller';
import LibraryController from './controllers/library.controller';
import ReadController from './controllers/read.controller';
import ReviseController from './controllers/revise.controller';
import ContactController from './controllers/contact.controller';

import PromptLyService from './services/promptly.service';

angular
  .module('app', ['ui.router'])
  .constant('PARSE', {
    URL: 'https://api.parse.com/1/',
    CONFIG: {
      headers: {
        'X-Parse-Application-Id': 'CTh499jofEuc0HJuOH1fdKlsgF5iQPqWhnJgJ15x',
        'X-Parse-REST-API-Key': '5wt5hoiNtJjsREnfYv3ZNf1kwuIUICmnc8GhK6U9'
      }
    }
  })
  .config(config)
  .controller('AboutController', AboutController)
  .controller('WriteController', WriteController)
  .controller('LibraryController', LibraryController)
  .controller('ReadController', ReadController)
  .controller('ReviseController', ReviseController)
  .controller('ContactController', ContactController)
  .service('PromptLyService', PromptLyService)

;