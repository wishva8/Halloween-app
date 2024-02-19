import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationSetupComponent } from './pages/location-setup/location-setup.component';
import { SequenceSelectQuestionComponent } from './pages/sequence-select-question/sequence-select-question.component';
import { StartGameComponent } from './pages/start-game/start-game.component';
import { MoveGhostComponent } from './pages/move-ghost/move-ghost.component';
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

const routes: Routes = [
  {
    path: '',
    component: LocationSetupComponent,
  },
  {
    path: 'sequence-select-question',
    component: SequenceSelectQuestionComponent,
  },
  {
    path: 'start-game',
    component: StartGameComponent,
  },
  {
    path: 'move-ghost',
    component: MoveGhostComponent,
  },
  {
    path: 'default-client-screen',
    component: DefaultClientScreenComponent,
  },
  {
    path: 'intro',
    component: IntroComponent,
  },
  {
    path: 'chapter-one-start',
    component: ChapterOneStartComponent,
  },
  {
    path: 'cam-page',
    component: CamPageComponent,
  },
  {
    path: 'select-symbols-page',
    component: SelectSymbolsPageComponent,
  },
  {
    path: 'symbols-display-page',
    component: SymbolsDisplayPageComponent,
  },
  {
    path: 'cam-page',
    component: CamPageComponent,
  },
  {
    path: 'end-game',
    component: EndGameComponent,
  },
  {
    path: 'team-view',
    component: TeamViewComponent,
  },
  {
    path: 'find-portal',
    component: FindPortalComponent,
  },
  {
    path: 'scan-token',
    component: ScanTokenComponent,
  },
  {
    path: 'find-device',
    component: FindDeviceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
