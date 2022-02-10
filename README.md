# NFT-Marketplace - Tailwind

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.3.

## Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code Scaffolding

Run `ng generate component specific-folder/component-name` to generate a new component.

## NFT-SCREENS

1. Generate all components related to NFT Marketplace Figma Design to `/src/nft-screens/` by running this command `ng g component nft-screens/component-name`.
2. After generate component, add path to `/src/app/app-routing.module.ts` like as follows:<br />
   `import { ComponentNameComponent } from './nft-screens/component-name/component-name.component';`
   <br />
   `const routes: Routes = [
      ...
      { path: 'component-name', component: ComponentNameComponent },
    ];`
3. The view will be visible to this url `APP_URL/{path}`. In above case it will be `APP_URL/component-name`.
