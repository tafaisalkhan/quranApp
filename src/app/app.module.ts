import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NativeAudio } from '@ionic-native/native-audio';
import { IonicStorageModule } from '@ionic/storage';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import { SocialSharing } from '@ionic-native/social-sharing';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule }    from '@angular/forms';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SideMenuComponent } from '../components/side-menu/side-menu'
import { DuaListComponent } from '../components/dua-list/dua-list'
import { DuaDetailComponent } from '../components/dua-detail/dua-detail'
import { ContextMenuComponent } from '../components/context-menu/context-menu'
import { SettingComponent } from '../components/setting/setting'
import { AboutComponent } from '../components/about/about'
import { FavoriteComponent } from '../components/favorite/favorite'
import { DuaConstantProvider } from '../providers/dua-constant/dua-constant';
import { DuaServiceProvider } from '../providers/dua-service/dua-service';
import { DuaDataProvider } from '../providers/dua-data/dua-data';
import { Media, MediaObject } from '@ionic-native/media';
import { DuaListDataProvider } from '../providers/dua-list-data/dua-list-data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SideMenuComponent,
    DuaListComponent,
    DuaDetailComponent,
    ContextMenuComponent,
    SettingComponent,
    AboutComponent,
    FavoriteComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
     HttpModule,
    JsonpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SideMenuComponent,
    DuaListComponent,
    DuaDetailComponent,
    ContextMenuComponent,
    SettingComponent,
    AboutComponent,
    FavoriteComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeAudio,
    Media,
    AdMobFree,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DuaConstantProvider,
    DuaServiceProvider,
    DuaDataProvider,
    DuaListDataProvider
  ]
})
export class AppModule {}
