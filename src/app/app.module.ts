import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SequenceSelectQuestionComponent } from './pages/sequence-select-question/sequence-select-question.component';
import { LocationSetupComponent } from './pages/location-setup/location-setup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from 'src/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { StartGameComponent } from './pages/start-game/start-game.component';
import { MoveGhostComponent } from './pages/move-ghost/move-ghost.component';
import { WebSocketService } from './services/web-socket.service';
import { ActionControlService } from './services/action-control.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DefaultClientScreenComponent } from './pages/default-client-screen/default-client-screen.component';
import { IntroComponent } from './pages/intro/intro.component';
import { ChapterOneStartComponent } from './pages/chapter-one-start/chapter-one-start.component';
import { CamPageComponent } from './pages/cam-page/cam-page.component';
import { SelectSymbolsPageComponent } from './pages/select-symbols-page/select-symbols-page.component';
import { SymbolsDisplayPageComponent } from './pages/symbols-display-page/symbols-display-page.component';
import { EndGameComponent } from './pages/end-game/end-game.component';
import { TeamViewComponent } from './pages/team-view/team-view.component';
import { FindPortalComponent } from './pages/find-portal/find-portal.component';
import { ScanTokenComponent } from './pages/scan-token/scan-token.component';
import { FindDeviceComponent } from './pages/find-device/find-device.component';

@NgModule({
  declarations: [
    AppComponent,
    SequenceSelectQuestionComponent,
    LocationSetupComponent,
    StartGameComponent,
    MoveGhostComponent,
    DefaultClientScreenComponent,
    IntroComponent,
    ChapterOneStartComponent,
    CamPageComponent,
    SelectSymbolsPageComponent,
    SymbolsDisplayPageComponent,
    EndGameComponent,
    TeamViewComponent,
    FindPortalComponent,
    ScanTokenComponent,
    FindDeviceComponent,
    ],
  imports: [
    ReactiveFormsModule, // Import the ReactiveFormsModule here
    MatInputModule, // Import the necessary Angular Material modules here
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    MatInputModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WebSocketService, ActionControlService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
