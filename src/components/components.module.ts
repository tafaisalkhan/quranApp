import { NgModule } from '@angular/core';
import { SideMenuComponent } from './side-menu/side-menu';
import { DuaListComponent } from './dua-list/dua-list';
import { DuaDetailComponent } from './dua-detail/dua-detail';
import { ContextMenuComponent } from './context-menu/context-menu';
import { SettingComponent } from './setting/setting';
import { AboutComponent } from './about/about';
import { FavoriteComponent } from './favorite/favorite';
@NgModule({
	declarations: [SideMenuComponent,
    DuaListComponent,
    DuaDetailComponent,
    ContextMenuComponent,
    SettingComponent,
    AboutComponent,
    FavoriteComponent],
	imports: [],
	exports: [SideMenuComponent,
    DuaListComponent,
    DuaDetailComponent,
    ContextMenuComponent,
    SettingComponent,
    AboutComponent,
    FavoriteComponent]
})
export class ComponentsModule {}
