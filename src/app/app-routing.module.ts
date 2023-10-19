import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationSetupComponent } from './pages/location-setup/location-setup.component';
import { SequenceSelectQuestionComponent } from './pages/sequence-select-question/sequence-select-question.component';
import { StartGameComponent } from './pages/start-game/start-game.component';
import { MoveGhostComponent } from './pages/move-ghost/move-ghost.component';
import { DefaultClientScreenComponent } from './pages/default-client-screen/default-client-screen.component';

const routes: Routes = [
  {
    path: '',
    component: LocationSetupComponent
  },
  {
    path: 'sequence-select-question',
    component: SequenceSelectQuestionComponent
  },
  {
    path: 'start-game',
    component: StartGameComponent
  },
  {
    path: 'move-ghost',
    component: MoveGhostComponent
  },
  {
    path: 'default-client-screen',
    component: DefaultClientScreenComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
