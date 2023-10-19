import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultipleChoiceQuestionComponent } from './pages/multiple-choice-question/multiple-choice-question.component';
import { SequenceSelectQuestionComponent } from './pages/sequence-select-question/sequence-select-question.component';
import { LocationSetupComponent } from './pages/location-setup/location-setup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from 'src/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { StartGameComponent } from './pages/start-game/start-game.component';
import { MoveGhostComponent } from './pages/move-ghost/move-ghost.component';
import { WebSocketService } from './services/web-socket.service';
import { ActionControlService } from './services/action-control.service';

@NgModule({
  declarations: [
    AppComponent,
    MultipleChoiceQuestionComponent,
    SequenceSelectQuestionComponent,
    LocationSetupComponent,
    StartGameComponent,
    MoveGhostComponent
    ],
  imports: [
    ReactiveFormsModule, // Import the ReactiveFormsModule here
    MatInputModule, // Import the necessary Angular Material modules here
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    MatInputModule,
  ],
  providers: [WebSocketService, ActionControlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
