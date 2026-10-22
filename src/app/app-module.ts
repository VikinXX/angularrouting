import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { HomeComponent } from './components/home-component/home-component';
import { CineComponent } from './components/cine-component/cine-component';
import { MusicaComponent } from './components/musica-component/musica-component';
import { NotFoundComponent } from './components/not-found-component/not-found-component';
import { routing, appRoutingComponent } from './app.routing';
import { MenuComponent } from './components/menu-component/menu-component';
import { NumeroDoble } from './components/numero-doble/numero-doble';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    CineComponent,
    MusicaComponent,
    NotFoundComponent,
    MenuComponent,
    NumeroDoble,
  ],
  imports: [BrowserModule, routing],
  providers: [provideBrowserGlobalErrorListeners(), appRoutingComponent],
  bootstrap: [App],
})
export class AppModule {}
