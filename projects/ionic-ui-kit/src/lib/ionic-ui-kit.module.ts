import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonicUiButtonModule } from './components/ionic-ui-button/ionic-ui-button.module';
import { IonicUiListModule } from './components/ionic-ui-list/ionic-ui-list.module';

@NgModule({
  declarations: [],
  imports: [IonicModule.forRoot()],
  exports: [IonicUiButtonModule, IonicUiListModule],
})
export class IonicUiKitModule {}
