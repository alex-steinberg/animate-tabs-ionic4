# Add animation to root nav transitions in Ionic, using `ion-tabs`

There are no transitions between root pages in Ionic tabbed layout. In the platform equivalents, it seems
a very subtle fade is applied to give the transitions a layer of polish that is not present in Ionic apps.

This is something I've been wanting to look into for a while and I am not the [only one](https://stackoverflow.com/posts/59660876).

My first attempt was to hook into the `ion-tabs` lifecycle events. This does not work because the animation
will always run after the transition (which seems obvious in hindsight).

My next attempt will use Angular's route guards to delay the transition long enough for the animation to apply.

Watch this space...

# Usage

Install [Node >10.9](https://github.com/nvm-sh/nvm)

Clone this repository

Run `npm install`

Run `ionic serve`

## Base app

This app was created using the Tabs starter app. 

`ionic info`:
```
Ionic:

   Ionic CLI                     : 5.4.13 (/Users/alexandrsteinberg/.nvm/versions/node/v10.16.0/lib/node_modules/ionic)
   Ionic Framework               : @ionic/angular 4.11.7
   @angular-devkit/build-angular : 0.801.3
   @angular-devkit/schematics    : 8.1.3
   @angular/cli                  : 8.1.3
   @ionic/angular-toolkit        : 2.1.1

Utility:

   cordova-res : 0.8.1
   native-run  : 0.3.0

System:

   NodeJS : v10.16.0 (/Users/alexandrsteinberg/.nvm/versions/node/v10.16.0/bin/node)
   npm    : 6.9.0
   OS     : macOS Mojave
```
