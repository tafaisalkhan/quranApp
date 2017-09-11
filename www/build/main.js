webpackJsonp([0],{

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 190;

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_side_menu_side_menu__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__components_side_menu_side_menu__["a" /* SideMenuComponent */]);
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/fkhan/Desktop/quranApp_ios/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      \n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n \n</ion-content>\n'/*ion-inline-end:"/Users/fkhan/Desktop/quranApp_ios/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dua_list_dua_list__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__setting_setting__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__favorite_favorite__ = __webpack_require__(264);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SideMenuComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var SideMenuComponent = (function () {
    function SideMenuComponent(navCtrl) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__dua_list_dua_list__["a" /* DuaListComponent */];
        console.log('Hello SideMenuComponent Component');
        this.text = 'Hello World';
        //this.nav.setRoot(DuaListComponent);
    }
    SideMenuComponent.prototype.openPage = function (page) {
        if (page == 'duaList') {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__dua_list_dua_list__["a" /* DuaListComponent */]);
        }
        else if (page == 'setting') {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__setting_setting__["a" /* SettingComponent */]);
        }
        else if (page == 'about') {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__about_about__["a" /* AboutComponent */]);
        }
        else if (page == 'favorite') {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__favorite_favorite__["a" /* FavoriteComponent */]);
        }
    };
    return SideMenuComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
], SideMenuComponent.prototype, "nav", void 0);
SideMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'side-menu',template:/*ion-inline-start:"/Users/fkhan/Desktop/quranApp_ios/src/components/side-menu/side-menu.html"*/'\n\n\n<ion-menu [content]="content" side="left" id="site_menu" >\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu" ></ion-icon>\n    </button>\n    <ion-buttons end>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n  <ion-content>\n    <ion-list >\n          <button menuClose ion-item  (click)="openPage(\'duaList\')">\n              <div style="font-weight: bold;font-size:14px">\n                  Dua List\n              </div>\n            </button>\n            <button menuClose ion-item  (click)="openPage(\'favorite\')">\n                <div style="font-weight: bold;font-size:14px">\n                    Favorite\n                </div>\n              </button>\n            <button menuClose ion-item  (click)="openPage(\'setting\')">\n              <div style="font-weight: bold;font-size:14px">\n                  Setting\n              </div>\n            </button>\n            <button menuClose ion-item  (click)="openPage(\'about\')">\n                <div style="font-weight: bold;font-size:14px">\n                    About\n                </div>\n            </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/fkhan/Desktop/quranApp_ios/src/components/side-menu/side-menu.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], SideMenuComponent);

//# sourceMappingURL=side-menu.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DuaListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dua_detail_dua_detail__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dua_service_dua_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_dua_constant_dua_constant__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_admob_free__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the DuaListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var options = {
    //ios
    adId: 'ca-app-pub-6025676747290907/1413702722',
    //android
    //adId:'ca-app-pub-6025676747290907~9728949660',
    adSize: 'SMART_BANNER',
    isTesting: false
};
var DuaListComponent = (function () {
    function DuaListComponent(navCtrl, duaServiceProvider, storage, plt, duaConstantProvider, admobFree) {
        this.navCtrl = navCtrl;
        this.duaServiceProvider = duaServiceProvider;
        this.storage = storage;
        this.plt = plt;
        this.duaConstantProvider = duaConstantProvider;
        this.admobFree = admobFree;
        this.duaListArray = [];
        this.loadDua();
        //this.admobFree.banner.config(options);
    }
    DuaListComponent.prototype.duaList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dua_detail_dua_detail__["a" /* DuaDetailComponent */], {});
    };
    DuaListComponent.prototype.loadDua = function () {
        //check for local storage
        var _this = this;
        this.storage.get('anbiya').then(function (val) {
            if (val != null) {
                _this.duaListArray = val;
            }
            else {
                _this.duaServiceProvider.getDUAList()
                    .subscribe(function (data) {
                    _this.duaListArray = data['Dua'].anbiya;
                    _this.completeData = data;
                    _this.storage.set('anbiya', _this.duaListArray);
                    _this.storage.set('completeData', _this.completeData);
                    debugger;
                }, function (err) {
                    console.log(err);
                });
            }
            // this.admobFree.banner.prepare()
            // .then(() => {
            // this.admobFree.banner.show();
            // })
            // .catch(e => console.log(e));
            console.log(_this.duaListArray);
        });
        /*this.duaServiceProvider.getDUAList()
        .subscribe(data => {
            this.duaListArray = data['Dua'].anbiya;
            this.completeData = data;
            debugger;
        
            this.admobFree.banner.prepare()
            .then(() => {
              this.admobFree.banner.show();
            })
            .catch(e => console.log(e));
            console.log(this.duaListArray);
            
      
          },
         (err) => {console.log(err);
      
      
          }
          );*/
        if (this.plt.is('iphone')) {
            // This will only print when on iOS
            console.log('I am an mobile device!');
            this.duaConstantProvider.device = "small";
            this.platform = "small";
        }
        else if (this.plt.is('ipad')) {
            // This will only print when on iOS
            console.log('I am an ipad device!');
            this.duaConstantProvider.device = "large";
            this.platform = "large";
        }
        else if (this.plt.is('tablet')) {
            // This will only print when on iOS
            console.log('I am an tablet device!');
            this.duaConstantProvider.device = "large";
            this.platform = "large";
        }
        else if (this.plt.is('mobile')) {
            // This will only print when on iOS
            console.log('I am an mobile device!');
            this.duaConstantProvider.device = "small";
            this.platform = "small";
        }
        else {
            console.log('I am an browser device!');
        }
    };
    DuaListComponent.prototype.itemTapped = function (evnet, item) {
        //console.log(this.nativeStorage.getItem('item')
        //.then(
        //  data => console.log(data),
        //  error => console.error(error)
        // ));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dua_detail_dua_detail__["a" /* DuaDetailComponent */], {
            item: item
        });
    };
    return DuaListComponent;
}());
DuaListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'dua-list',template:/*ion-inline-start:"/Users/fkhan/Desktop/quranApp_ios/src/components/dua-list/dua-list.html"*/'\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu" ></ion-icon>\n    </button>\n    <ion-title>Dua Ul Anbiya (AS) </ion-title>\n\n    <ion-buttons end>\n\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content padding style="padding: 0px;  background-color: #B2DFDB;">\n\n          <div >\n\n              <ion-card  style="background-color: #64B5F6; text-align: center;" *ngIf="duaListArray.length == 0">\n                  \n                  <ion-spinner icon="spiral"></ion-spinner>\n                  \n              <ion-card-content   [ngClass]="platform==\'small\'? \'small-font\' : \'large-font\'">\n             \n               </ion-card-content>\n                  \n                      </ion-card>\n          <ion-card *ngFor="let item of  duaListArray; let i = index" (click)="itemTapped($event, item, i)" (tab)="itemTapped($event, item, i)" style="background-color: #64B5F6;">\n      \n          \n      \n         <!--     <ion-card-content  style="background-color: #64B5F6;font-size: larger; font-weight: 900;">\n                  <ion-item style="background-color: #64B5F6;font-size: larger; font-weight: 900;">\n                  -->\n                  <ion-card-content   [ngClass]="platform==\'small\'? \'small-font\' : \'large-font\'">\n                      <ion-item  [ngClass]="platform==\'small\'? \'small-font\' : \'large-font\'">\n                 \n                      {{item.name}} \n                     \n                    <div  clear item-end>   {{item.arabic_name}}</div>\n                  </ion-item>\n              \n                \n                <!-- Add card content here! -->\n                <!--<button ion-button color="secondary" round  (click)="duaList()">Light</button> -->\n              </ion-card-content>\n      \n          </ion-card>\n        </div> \n\n   \n</ion-content>\n\n\n'/*ion-inline-end:"/Users/fkhan/Desktop/quranApp_ios/src/components/dua-list/dua-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_dua_service_dua_service__["a" /* DuaServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__providers_dua_constant_dua_constant__["a" /* DuaConstantProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_admob_free__["a" /* AdMobFree */]])
], DuaListComponent);

//# sourceMappingURL=dua-list.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DuaDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_audio__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_media__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_dua_service_dua_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_dua_constant_dua_constant__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the DuaDetailComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var DuaDetailComponent = (function () {
    function DuaDetailComponent(duaServiceProvider, nativeAudio, media, navParams, actionSheetCtrl, storage, socialSharing, duaConstantProvider) {
        this.duaServiceProvider = duaServiceProvider;
        this.nativeAudio = nativeAudio;
        this.media = media;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.storage = storage;
        this.socialSharing = socialSharing;
        this.duaConstantProvider = duaConstantProvider;
        this.isPlay = false;
        this.sizeStore = "normal";
        this.translationStore = "english";
        this.currentIndex = 0;
        this.favoriteArray = [];
        this.favoriteArrayStore = [];
        this.favoriteDUAArray = [];
        this.duaIndex = 0;
        this.item = this.navParams.get('item');
        console.log(this.item);
        this.duaData = this.item.dua;
        debugger;
    }
    DuaDetailComponent.prototype.goToSlide = function () {
        //this.slides.slideTo(2, 500);
        console.log(this.duas);
    };
    DuaDetailComponent.prototype.slideChanged = function () {
        this.isFavorite = false;
        this.currentIndex = this.slides.getActiveIndex();
        console.log('Current index is', this.currentIndex);
        this.loadData(this.currentIndex);
        this.isPlay = false;
        //this.file.pause();
        //this.file.release()
    };
    DuaDetailComponent.prototype.ngOnInit = function () {
        this.loadData(0);
    };
    DuaDetailComponent.prototype.loadData = function (index) {
        var _this = this;
        try {
            this.platform = this.duaConstantProvider.device;
            this.storage.get('favoriteArrayStore').then(function (val) {
                if (val != null) {
                    _this.favoriteArray = val;
                }
            });
            this.storage.get('sizeStore').then(function (val) {
                if (val != null) {
                    _this.sizeStore = val;
                }
            });
            this.storage.get('translationStore').then(function (val) {
                try {
                    var temp = _this.favoriteArray.filter(function (dua) { return dua == _this.duaIndex; });
                    if (temp.length == 0) {
                        _this.isFavorite = false;
                    }
                    else {
                        _this.isFavorite = true;
                    }
                    if (val != null) {
                        _this.translationStore = val;
                        if (_this.translationStore == "english") {
                            _this.translation = _this.duaData[index].aya[0].english;
                        }
                        else if (_this.translationStore == "arabic") {
                            _this.translation = _this.duaData[index].aya[0].arabic;
                        }
                        else if (_this.translationStore == "spanish") {
                            _this.translation = _this.duaData[index].aya[0].spanish;
                        }
                        else if (_this.translationStore == "chainses") {
                            _this.translation = _this.duaData[index].aya[0].chinses;
                        }
                        else if (_this.translationStore == "japanses") {
                            _this.translation = _this.duaData[index].aya[0].japanses;
                        }
                        else if (_this.translationStore == "turkish") {
                            _this.translation = _this.duaData[index].aya[0].turkish;
                        }
                        else if (_this.translationStore == "urdu") {
                            _this.translation = _this.duaData[index].aya[0].urdu;
                        }
                    }
                }
                catch (e) {
                }
            });
            if (this.translation == undefined || this.translation == null) {
                this.translation = this.duaData[index].aya[0].english;
            }
            this.ayah_no = this.duaData[index].aya[0].aya_no;
            this.name = this.item.name;
            this.arabicName = this.item.arabic_name;
            this.chapterName = this.duaData[index].chapter_name;
            this.chapterNo = this.duaData[index].chapter_no;
            this.ayah = this.duaData[index].aya[0].arabic;
            this.duaIndex = this.duaData[index].aya[0].index;
            this.bismillAllah = this.duaData[index].aya[0].bismial;
            this.filename = this.duaData[index].aya[0].mp3_file_path;
            //let temp = this.favoriteArray.filter(dua => dua == this.duaIndex);
            // if(temp.length == 0){
            //  this.isFavorite = false;  
            //}
            // else{
            //  this.isFavorite = true; 
            // }
        }
        catch (e) {
        }
    };
    DuaDetailComponent.prototype.unFavorite = function () {
        debugger;
        this.isFavorite = false;
        //this.favoriteArray.slice(this.duaIndex);
        var i = this.favoriteArray.indexOf(this.duaIndex);
        //this.favoriteArray = this.favoriteArray.splice(this.duaIndex, 1)
        if (i != -1) {
            this.favoriteArray.splice(i, 1);
        }
        this.storage.set('favoriteArrayStore', this.favoriteArray);
    };
    DuaDetailComponent.prototype.favorite = function () {
        debugger;
        ;
        this.favoriteArray.push(this.duaIndex);
        this.storage.set('favoriteArrayStore', this.favoriteArray);
        this.isFavorite = true;
    };
    DuaDetailComponent.prototype.shareDUA = function () {
        this.socialSharing.share(this.ayah + "  " + this.translation, "Dua Ul Anbiya " + this.name + " " + this.arabicName, null);
    };
    DuaDetailComponent.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Dua Action',
            buttons: [
                {
                    text: 'Play',
                    role: 'play',
                    handler: function () {
                        _this.playDua();
                    }
                }, {
                    text: 'Share',
                    role: 'share',
                    handler: function () {
                        console.log('Archive clicked');
                    }
                }, {
                    text: 'Favorite',
                    role: 'favorite',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    DuaDetailComponent.prototype.playDua = function () {
        var _this = this;
        if (this.isPlay) {
            this.file.pause();
            this.file.release();
        }
        else {
            this.file = this.media.create('assets/mp3/' + this.filename);
            // to listen to plugin events:
            this.file.onStatusUpdate.subscribe(function (status) { return console.log(status); }); // fires when file status changes
            this.file.onSuccess.subscribe(function () { console.log('Action is successful'); _this.isPlay = false; });
            this.file.onError.subscribe(function (error) { console.log('Error!', error); _this.isPlay = false; });
            // play the file
            this.file.play();
        }
        this.isPlay = !this.isPlay;
        //this.isPlay = !this.isPlay;
        // pause the file
        //file.pause();
        // get current playback position
        //file.getCurrentPosition().then((position) => {
        //  console.log(position);
        //});
        // get file duration
        //let duration = file.getDuration();//
        //console.log(duration);
        // skip to 10 seconds (expects int value in ms)
        //file.seekTo(10000);
        // stop playing the file
        //file.stop();
        // release the native audio resource
        // Platform Quirks:
        // iOS simply create a new instance and the old one will be overwritten
        // Android you must call release() to destroy instances of media when you are done
        //file.release();
    };
    DuaDetailComponent.prototype.stopDua = function (fileName) {
        this.isPlay = false;
        //this.file = this.media.create('assets/mp3/'+fileName);
        // to listen to plugin events:
        //this.file.onStatusUpdate.subscribe(status => console.log(status)); // fires when file status changes
        //this.file.onSuccess.subscribe(() => console.log('Action is successful'));
        //this.file.onError.subscribe(error => console.log('Error!', error));
        // play the file
        //this.file.play();
        // pause the file
        try {
            this.file.pause();
        }
        catch (e) {
        }
        // get current playback position
        //file.getCurrentPosition().then((position) => {
        //  console.log(position);
        //});
        // get file duration
        //let duration = file.getDuration();//
        //console.log(duration);
        // skip to 10 seconds (expects int value in ms)
        //file.seekTo(10000);
        // stop playing the file
        //file.stop();
        // release the native audio resource
        // Platform Quirks:
        // iOS simply create a new instance and the old one will be overwritten
        // Android you must call release() to destroy instances of media when you are done
        //file.release();
    };
    DuaDetailComponent.prototype.onSuccess = function (data) {
        console.log(data);
        this.isPlay = !this.isPlay;
    };
    DuaDetailComponent.prototype.onError = function (data) {
        console.log(data);
        this.isPlay = !this.isPlay;
    };
    return DuaDetailComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
], DuaDetailComponent.prototype, "slides", void 0);
DuaDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'dua-detail',template:/*ion-inline-start:"/Users/fkhan/Desktop/quranApp_ios/src/components/dua-detail/dua-detail.html"*/'\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu" ></ion-icon>\n    </button>\n    <ion-title>Dua Ul Anbiya (AS)</ion-title>\n\n    <ion-buttons end>\n\n\n    </ion-buttons>\n\n  </ion-navbar>\n  <ion-toolbar  >\n      <ion-buttons start  (tap)="shareDUA()">\n          <button ion-button icon-only >\n              <ion-icon name="share"></ion-icon>\n            \n          </button>\n        </ion-buttons>  \n      <ion-title>{{name}} </ion-title>\n      <ion-buttons end (tap)="playDua()" *ngIf="!isPlay">\n        <button ion-button icon-only >\n          <ion-icon name="play"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-buttons end (tap)="stopDua()" *ngIf="isPlay">\n          <button ion-button icon-only >\n            <ion-icon name="pause"></ion-icon>\n          </button>\n        </ion-buttons>\n      \n        <ion-buttons end *ngIf="isFavorite" (tap)="unFavorite()" >\n            <button ion-button icon-only >\n               \n                <ion-icon name="star" *ngIf="isFavorite" (click)="favorite()"></ion-icon>\n            </button>\n          </ion-buttons> \n          <ion-buttons end *ngIf="!isFavorite" (tap)="favorite()">\n              <button ion-button icon-only >\n                  <ion-icon name="star-outline"></ion-icon>\n                \n              </button>\n            </ion-buttons>  \n    </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding style="padding: 0px; background-color: #B2DFDB;">\n\n<ion-card>\n\n \n   <!-- <button ion-button color="secondary" round  (click)="playDua()">Light</button> -->\n \n\n <!-- <ion-card-content style="font-size: larger; font-weight: 900;">\n     \n          <ion-item style="font-size: larger; font-weight: 900;">\n          -->\n          <ion-card-content [ngClass]="platform==\'small\'? \'small-font\' : \'large-font\'">\n              \n                   <ion-item [ngClass]="platform==\'small\'? \'small-font\' : \'large-font\'">\n          \n              {{name}}\n             \n            <div  clear item-end> {{arabicName}}</div>\n          </ion-item>\n       \n     \n  </ion-card-content>\n\n</ion-card>\n  <ion-slides  (ionSlideDidChange)="slideChanged()" pager>\n    <ion-slide *ngFor="let item of  duaData; let i = index">\n\n      <div style="height:100%;overflow: scroll ">\n        <ion-card>\n            <!--<ion-item style="font-size: larger; font-weight: 900;">\n            -->\n            <ion-item [ngClass]="platform==\'small\'? \'detail-small-font\' : \'detail-large-font\'">\n            \n                Chapter {{chapterName}} ({{chapterNo}}) \n               \n              <div  clear item-end>   Verse no:  {{ayah_no}}</div>\n            </ion-item>\n          \n          <ion-card-content>\n           <p [style.font-size]="sizeStore"> \n          <!--  <p style= "font-size: xx-large"> -->\n                {{bismillAllah}}\n                <br/>\n                <br/>\n                {{ayah}}\n            <br/>\n            <br/>\n            <br/>\n                {{translation}}\n            </p>\n          </ion-card-content>\n\n\n\n          </ion-card>\n        </div>\n\n\n\n\n    </ion-slide>\n   \n  </ion-slides>\n</ion-content>\n\n<!--\n<ion-footer>\n  <ion-toolbar>\n\n\n<ion-title  >\n  <button ion-button >\n  <ion-icon name="play" (click)="playDua()" *ngIf="!isPlay" ></ion-icon>\n  <ion-icon name="pause" (click)="stopDua()" *ngIf="isPlay"></ion-icon>\n</button>\n</ion-title>\n\n  </ion-toolbar>\n</ion-footer>\n-->'/*ion-inline-end:"/Users/fkhan/Desktop/quranApp_ios/src/components/dua-detail/dua-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_dua_service_dua_service__["a" /* DuaServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_media__["a" /* Media */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_7__providers_dua_constant_dua_constant__["a" /* DuaConstantProvider */]])
], DuaDetailComponent);

//# sourceMappingURL=dua-detail.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SettingComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var SettingComponent = (function () {
    function SettingComponent(storage) {
        var _this = this;
        this.storage = storage;
        this.translationSelected = "urdu";
        this.sizeSelected = "normal";
        console.log('Hello SettingComponent Component');
        this.text = 'Hello World';
        storage.get('sizeStore').then(function (val) {
            if (val != null) {
                _this.sizeSelected = val;
            }
        });
        storage.get('translationStore').then(function (val) {
            if (val != null) {
                _this.translationSelected = val;
            }
        });
    }
    SettingComponent.prototype.selectTranlationOption = function () {
        this.storage.set('translationStore', this.translationSelected);
        console.log(this.translationSelected);
    };
    SettingComponent.prototype.selectSizeOption = function () {
        this.storage.set('sizeStore', this.sizeSelected);
        console.log(this.sizeSelected);
    };
    return SettingComponent;
}());
SettingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'setting',template:/*ion-inline-start:"/Users/fkhan/Desktop/quranApp_ios/src/components/setting/setting.html"*/'\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu" ></ion-icon>\n    </button>\n    <ion-title>Setting </ion-title>\n\n    <ion-buttons end>\n\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content padding style="padding: 0px;  background-color: #B2DFDB;">\n\n  <ion-list radio-group [(ngModel)]="sizeSelected">\n      <ion-list-header>\n          Font Size\n        </ion-list-header>\n        <ion-item>\n            <ion-label>Normal</ion-label>\n            <ion-radio checked="true" value="normal" (click)="selectSizeOption()"></ion-radio>\n          </ion-item>\n        \n          <ion-item>\n            <ion-label>Large</ion-label>\n            <ion-radio value="large" (click)="selectSizeOption()"></ion-radio>\n          </ion-item>\n        \n          <ion-item>\n            <ion-label>XX-Large</ion-label>\n            <ion-radio value="xx-large" (click)="selectSizeOption()"></ion-radio>\n          </ion-item>\n  </ion-list>\n\n  <br/>\n  <br/>\n\n  <ion-list radio-group [(ngModel)]="translationSelected">\n      <ion-list-header>\n          Transaltion\n        </ion-list-header>\n  <ion-item>\n      <ion-label>English</ion-label>\n      <ion-radio checked="true" value="english" (click)="selectTranlationOption()"></ion-radio>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>Urdu</ion-label>\n      <ion-radio value="urdu" (click)="selectTranlationOption()"></ion-radio>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>Spanish</ion-label>\n      <ion-radio value="spanish" (click)="selectTranlationOption()"></ion-radio>\n    </ion-item>\n  \n    <ion-item>\n        <ion-label>Turkish</ion-label>\n        <ion-radio value="turkish" (click)="selectTranlationOption()" ></ion-radio>\n      </ion-item>  \n\n    <ion-item>\n        <ion-label>Japanese</ion-label>\n        <ion-radio value="japanses" (click)="selectTranlationOption()" ></ion-radio>\n    </ion-item>  \n\n\n    <ion-item>\n        <ion-label>Chianese</ion-label>\n        <ion-radio value="chianses" (click)="selectTranlationOption()"></ion-radio>\n    </ion-item>\n  </ion-list>\n\n   \n</ion-content>'/*ion-inline-end:"/Users/fkhan/Desktop/quranApp_ios/src/components/setting/setting.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
], SettingComponent);

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the AboutComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var AboutComponent = (function () {
    function AboutComponent() {
        console.log('Hello AboutComponent Component');
        this.text = 'Hello World';
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'about',template:/*ion-inline-start:"/Users/fkhan/Desktop/quranApp_ios/src/components/about/about.html"*/'\n<ion-header>\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu" ></ion-icon>\n      </button>\n      <ion-title>Setting </ion-title>\n  \n      <ion-buttons end>\n  \n  \n      </ion-buttons>\n  \n    </ion-navbar>\n  \n  \n  </ion-header>\n  \n\n\n  <ion-content padding style="padding: 0px;  background-color: #B2DFDB;">\n      \n      <ion-card>\n         \n        \n        <ion-card-content>\n          <p style="font-size: large;">\n              Contant From: Quran.com\n              <br/>\n              Voice: Saad Al-Ghamadi\n\n              \n          </p>\n        </ion-card-content>\n\n\n\n        </ion-card>\n      </ion-content>'/*ion-inline-end:"/Users/fkhan/Desktop/quranApp_ios/src/components/about/about.html"*/
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_audio__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_media__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_dua_service_dua_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_dua_constant_dua_constant__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the FavoriteComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var FavoriteComponent = (function () {
    function FavoriteComponent(duaServiceProvider, nativeAudio, media, navParams, actionSheetCtrl, storage, socialSharing, duaConstantProvider) {
        this.duaServiceProvider = duaServiceProvider;
        this.nativeAudio = nativeAudio;
        this.media = media;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.storage = storage;
        this.socialSharing = socialSharing;
        this.duaConstantProvider = duaConstantProvider;
        this.name = "No Favorite Duas";
        this.isPlay = false;
        this.duaListArray = [];
        this.tmpDuaListArray = [];
        this.favoriteArray = [];
        this.favoriteCardShow = false;
        this.index = 0;
        this.item = this.navParams.get('item');
        console.log(this.item);
    }
    FavoriteComponent.prototype.goToSlide = function () {
        //this.slides.slideTo(2, 500);
        console.log(this.duas);
    };
    FavoriteComponent.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        console.log('Current index is', currentIndex);
        this.loadDataSlideData(currentIndex);
        this.isPlay = false;
        //this.file.pause();
        //this.file.release()
    };
    FavoriteComponent.prototype.ngOnInit = function () {
        this.loadDataFromFile();
    };
    FavoriteComponent.prototype.loadDataFromFile = function () {
        var _this = this;
        try {
            this.platform = this.duaConstantProvider.device;
            this.storage.get('favoriteArrayStore').then(function (val) {
                if (val != null) {
                    _this.favoriteArray = val;
                    _this.loadData();
                }
            });
            this.storage.get('sizeStore').then(function (val) {
                if (val != null) {
                    _this.sizeStore = val;
                }
            });
            this.storage.get('translationStore').then(function (val) {
                try {
                    if (val != null) {
                        _this.translationStore = val;
                    }
                }
                catch (e) {
                }
            });
            /*   this.duaServiceProvider.getDUAList()
                .subscribe(data => {
                    //this.duaListArray = data['Dua'];
                    for(let item of data['Dua'].anbiya){
                        for(let dua of item.dua){
                          for(let aya in dua.aya){
                            //let temp = this.favoriteArray.filter(favId => favId == dua.aya[aya].index);
                            //if(temp.lenght > 0){
                              this.tmpDuaListArray.push(dua.aya[aya]);
                            //}
                            
                        }
                      }
                    }
                    this.loadData();
                     },
                 (err) => {console.log(err);
              
              
                  }
                  );*/
            this.storage.get('anbiya').then(function (val) {
                if (val != null) {
                    for (var _i = 0, val_1 = val; _i < val_1.length; _i++) {
                        var item = val_1[_i];
                        for (var _a = 0, _b = item.dua; _a < _b.length; _a++) {
                            var dua = _b[_a];
                            for (var aya in dua.aya) {
                                //let temp = this.favoriteArray.filter(favId => favId == dua.aya[aya].index);
                                //if(temp.lenght > 0){
                                _this.tmpDuaListArray.push(dua.aya[aya]);
                                //}
                            }
                        }
                    }
                }
                _this.loadData();
            });
        }
        catch (e) {
        }
    };
    FavoriteComponent.prototype.loadData = function () {
        try {
            this.duaListArray = [];
            var _loop_1 = function (item) {
                var temp = this_1.favoriteArray.filter(function (favId) { return favId == item.index; });
                if (temp.length > 0) {
                    this_1.duaListArray.push(item);
                    console.log(this_1.duaListArray);
                }
            };
            var this_1 = this;
            for (var _i = 0, _a = this.tmpDuaListArray; _i < _a.length; _i++) {
                var item = _a[_i];
                _loop_1(item);
            }
            if (this.duaListArray.length > 0) {
                this.loadDataSlideData(0);
            }
            else {
                this.favoriteCardShow = true;
            }
        }
        catch (e) {
        }
    };
    FavoriteComponent.prototype.unFavorite = function () {
        debugger;
        this.isFavorite = false;
        //this.favoriteArray.slice(this.duaIndex);
        var i = this.favoriteArray.indexOf(this.index);
        //this.favoriteArray = this.favoriteArray.splice(this.duaIndex, 1)
        if (i != -1) {
            this.favoriteArray.splice(i, 1);
        }
        this.storage.set('favoriteArrayStore', this.favoriteArray);
    };
    FavoriteComponent.prototype.favorite = function () {
        debugger;
        ;
        this.favoriteArray.push(this.index);
        this.storage.set('favoriteArrayStore', this.favoriteArray);
        this.isFavorite = true;
    };
    FavoriteComponent.prototype.shareDUA = function () {
        this.socialSharing.share(this.ayah + "  " + this.translation, "Dua Ul Anbiya " + this.name + " " + this.arabicName, null);
    };
    FavoriteComponent.prototype.loadDataSlideData = function (index) {
        var _this = this;
        try {
            this.storage.get('translationStore').then(function (val) {
                try {
                    if (val != null) {
                        _this.translationStore = val;
                    }
                    _this.index = _this.duaListArray[index].index;
                    var temp = _this.favoriteArray.filter(function (dua) { return dua == _this.index; });
                    if (temp.length == 0) {
                        _this.isFavorite = false;
                    }
                    else {
                        _this.isFavorite = true;
                    }
                    if (_this.translationStore == "english") {
                        _this.translation = _this.duaListArray[index].english;
                    }
                    else if (_this.translationStore == "arabic") {
                        _this.translation = _this.duaListArray[index].arabic;
                    }
                    else if (_this.translationStore == "spanish") {
                        _this.translation = _this.duaListArray[index].spanish;
                    }
                    else if (_this.translationStore == "chainses") {
                        _this.translation = _this.duaListArray[index].chinses;
                    }
                    else if (_this.translationStore == "japanses") {
                        _this.translation = _this.duaListArray[index].japanses;
                    }
                    else if (_this.translationStore == "turkish") {
                        _this.translation = _this.duaListArray[index].turkish;
                    }
                    else if (_this.translationStore == "urdu") {
                        _this.translation = _this.duaListArray[index].urdu;
                    }
                }
                catch (e) {
                }
            });
            if (this.translation == undefined || this.translation == null) {
                this.translation = this.duaListArray[index].english;
            }
            this.ayah_no = this.duaListArray[index].aya_no;
            this.name = this.duaListArray[index].name;
            this.arabicName = this.duaListArray[index].arabic_name;
            this.chapterName = this.duaListArray[index].chapter_name;
            this.chapterNo = this.duaListArray[index].chapter_no;
            this.ayah = this.duaListArray[index].arabic;
            //this.duaIndex = duaListArray this.duaData[index].aya[0].index;
            this.bismillAllah = this.duaListArray[index].bismial;
            this.filename = this.duaListArray[index].mp3_file_path;
        }
        catch (e) {
        }
    };
    FavoriteComponent.prototype.playDua = function () {
        var _this = this;
        if (this.isPlay) {
            this.file.pause();
            this.file.release();
        }
        else {
            this.file = this.media.create('assets/mp3/' + this.filename);
            // to listen to plugin events:
            this.file.onStatusUpdate.subscribe(function (status) { return console.log(status); }); // fires when file status changes
            this.file.onSuccess.subscribe(function () { console.log('Action is successful'); _this.isPlay = false; });
            this.file.onError.subscribe(function (error) { console.log('Error!', error); _this.isPlay = false; });
            // play the file
            this.file.play();
        }
        this.isPlay = !this.isPlay;
        //this.isPlay = !this.isPlay;
        // pause the file
        //file.pause();
        // get current playback position
        //file.getCurrentPosition().then((position) => {
        //  console.log(position);
        //});
        // get file duration
        //let duration = file.getDuration();//
        //console.log(duration);
        // skip to 10 seconds (expects int value in ms)
        //file.seekTo(10000);
        // stop playing the file
        //file.stop();
        // release the native audio resource
        // Platform Quirks:
        // iOS simply create a new instance and the old one will be overwritten
        // Android you must call release() to destroy instances of media when you are done
        //file.release();
    };
    FavoriteComponent.prototype.stopDua = function (fileName) {
        this.isPlay = false;
        //this.file = this.media.create('assets/mp3/'+fileName);
        // to listen to plugin events:
        //this.file.onStatusUpdate.subscribe(status => console.log(status)); // fires when file status changes
        //this.file.onSuccess.subscribe(() => console.log('Action is successful'));
        //this.file.onError.subscribe(error => console.log('Error!', error));
        // play the file
        //this.file.play();
        // pause the file
        try {
            this.file.pause();
        }
        catch (e) {
        }
        // get current playback position
        //file.getCurrentPosition().then((position) => {
        //  console.log(position);
        //});
        // get file duration
        //let duration = file.getDuration();//
        //console.log(duration);
        // skip to 10 seconds (expects int value in ms)
        //file.seekTo(10000);
        // stop playing the file
        //file.stop();
        // release the native audio resource
        // Platform Quirks:
        // iOS simply create a new instance and the old one will be overwritten
        // Android you must call release() to destroy instances of media when you are done
        //file.release();
    };
    FavoriteComponent.prototype.onSuccess = function (data) {
        console.log(data);
        this.isPlay = !this.isPlay;
    };
    FavoriteComponent.prototype.onError = function (data) {
        console.log(data);
        this.isPlay = !this.isPlay;
    };
    return FavoriteComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
], FavoriteComponent.prototype, "slides", void 0);
FavoriteComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'favorite',template:/*ion-inline-start:"/Users/fkhan/Desktop/quranApp_ios/src/components/favorite/favorite.html"*/'\n<ion-header >\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu" ></ion-icon>\n      </button>\n      <ion-title> Favorite Dua </ion-title>\n  \n      <ion-buttons end>\n  \n  \n      </ion-buttons>\n  \n    </ion-navbar>\n    <ion-toolbar >\n        <ion-buttons start  (tap)="shareDUA()" *ngIf="name!=\'No Favorite Duas\'">\n            <button ion-button icon-only >\n                <ion-icon name="share"></ion-icon>\n              \n            </button>\n          </ion-buttons>  \n        <ion-title >{{name}} </ion-title>\n        <ion-buttons end (tap)="playDua()" *ngIf="name!=\'No Favorite Duas\' && !isPlay">\n          <button ion-button icon-only >\n            <ion-icon name="play"></ion-icon>\n          </button>\n        </ion-buttons>\n       <ion-buttons end (tap)="stopDua()" *ngIf="isPlay">\n            <button ion-button icon-only >\n              <ion-icon name="pause"></ion-icon>\n            </button>\n          </ion-buttons>\n        \n          <ion-buttons end *ngIf="isFavorite" (tap)="unFavorite()" >\n            <button ion-button icon-only >\n               \n                <ion-icon name="star" *ngIf="isFavorite"></ion-icon>\n            </button>\n          </ion-buttons> \n          <ion-buttons end *ngIf="name!=\'No Favorite Duas\' && !isFavorite" (tap)="favorite()">\n              <button ion-button icon-only >\n                  <ion-icon name="star-outline"></ion-icon>\n                \n              </button>\n            </ion-buttons>  \n      </ion-toolbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding style="padding: 0px; background-color: #B2DFDB;">\n\n  \n  \n  <ion-card *ngIf="favoriteCardShow">\n  \n   \n     <!-- <button ion-button color="secondary" round  (click)="playDua()">Light</button> -->\n   \n  \n  <!--  <ion-card-content style="font-size: larger; font-weight: 900;">\n       \n            <ion-item style="font-size: larger; font-weight: 900;">\n            -->\n            <ion-card-content [ngClass]="platform==\'small\'? \'small-font\' : \'large-font\'">\n                \n                     <ion-item [ngClass]="platform==\'small\'? \'small-font\' : \'large-font\'">\n\n            \n                {{name}}\n               \n              <div  clear item-end> {{arabicName}}</div>\n            </ion-item>\n         \n       \n    </ion-card-content>\n  \n  </ion-card>\n  <ion-slides pager  (ionSlideDidChange)="slideChanged()">\n      \n      <ion-slide *ngFor="let item of  duaListArray; let i = index">\n          <div style="height:100%;overflow: scroll ">\n               \n                  <ion-card >\n                     <!-- <ion-item style="font-size: larger; font-weight: 900;">-->\n                          <ion-item [ngClass]="platform==\'small\'? \'detail-small-font\' : \'detail-large-font\'">\n                          \n                          Chapter {{chapterName}} ({{chapterNo}}) \n                         \n                        <div  clear item-end>   Verse no:  {{ayah_no}}</div>\n                      </ion-item>\n                    \n                    <ion-card-content>\n                     <p [style.font-size]="sizeStore"> \n                    <!--  <p style= "font-size: xx-large"> -->\n                          {{bismillAllah}}\n                          <br/>\n                          <br/>\n                          {{ayah}}\n                      <br/>\n                      <br/>\n                      <br/>\n                          {{translation}}\n                      </p>\n                    </ion-card-content>\n          \n          \n          \n                    </ion-card>\n                  \n                  </div>\n          \n          \n          \n              </ion-slide>\n      \n      </ion-slides>\n  </ion-content>\n  \n  <!--\n  <ion-footer>\n    <ion-toolbar>\n  \n  \n  <ion-title  >\n    <button ion-button >\n    <ion-icon name="play" (click)="playDua()" *ngIf="!isPlay" ></ion-icon>\n    <ion-icon name="pause" (click)="stopDua()" *ngIf="isPlay"></ion-icon>\n  </button>\n  </ion-title>\n  \n    </ion-toolbar>\n  </ion-footer>\n  -->'/*ion-inline-end:"/Users/fkhan/Desktop/quranApp_ios/src/components/favorite/favorite.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_dua_service_dua_service__["a" /* DuaServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_media__["a" /* Media */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_7__providers_dua_constant_dua_constant__["a" /* DuaConstantProvider */]])
], FavoriteComponent);

//# sourceMappingURL=favorite.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(270);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_audio__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_admob_free__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_side_menu_side_menu__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_dua_list_dua_list__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_dua_detail_dua_detail__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_context_menu_context_menu__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_setting_setting__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_about_about__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_favorite_favorite__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_dua_constant_dua_constant__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_dua_service_dua_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_dua_data_dua_data__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_media__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_dua_list_data_dua_list_data__ = __webpack_require__(584);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_13__components_side_menu_side_menu__["a" /* SideMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_dua_list_dua_list__["a" /* DuaListComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_dua_detail_dua_detail__["a" /* DuaDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_context_menu_context_menu__["a" /* ContextMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_setting_setting__["a" /* SettingComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_about_about__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_favorite_favorite__["a" /* FavoriteComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_13__components_side_menu_side_menu__["a" /* SideMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_dua_list_dua_list__["a" /* DuaListComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_dua_detail_dua_detail__["a" /* DuaDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_context_menu_context_menu__["a" /* ContextMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_setting_setting__["a" /* SettingComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_about_about__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_favorite_favorite__["a" /* FavoriteComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_audio__["a" /* NativeAudio */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_media__["a" /* Media */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_admob_free__["a" /* AdMobFree */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__["a" /* SocialSharing */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_20__providers_dua_constant_dua_constant__["a" /* DuaConstantProvider */],
            __WEBPACK_IMPORTED_MODULE_21__providers_dua_service_dua_service__["a" /* DuaServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_22__providers_dua_data_dua_data__["a" /* DuaDataProvider */],
            __WEBPACK_IMPORTED_MODULE_24__providers_dua_list_data_dua_list_data__["a" /* DuaListDataProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(235);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/fkhan/Desktop/quranApp_ios/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/fkhan/Desktop/quranApp_ios/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContextMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the ContextMenuComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var ContextMenuComponent = (function () {
    function ContextMenuComponent() {
        console.log('Hello ContextMenuComponent Component');
        this.text = 'Hello World';
    }
    return ContextMenuComponent;
}());
ContextMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'context-menu',template:/*ion-inline-start:"/Users/fkhan/Desktop/quranApp_ios/src/components/context-menu/context-menu.html"*/'<!-- Generated template for the ContextMenuComponent component -->\n<div>\n  {{text}}\n</div>\n'/*ion-inline-end:"/Users/fkhan/Desktop/quranApp_ios/src/components/context-menu/context-menu.html"*/
    }),
    __metadata("design:paramtypes", [])
], ContextMenuComponent);

//# sourceMappingURL=context-menu.js.map

/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DuaDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/*
  Generated class for the DuaDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var DuaDataProvider = (function () {
    function DuaDataProvider() {
    }
    return DuaDataProvider;
}());
DuaDataProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], DuaDataProvider);

//# sourceMappingURL=dua-data.js.map

/***/ }),

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DuaListDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the DuaListDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var DuaListDataProvider = (function () {
    function DuaListDataProvider(http) {
        this.http = http;
        console.log('Hello DuaistDataProvider Provider');
    }
    return DuaListDataProvider;
}());
DuaListDataProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], DuaListDataProvider);

//# sourceMappingURL=dua-list-data.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DuaServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* * * ./app/comments/components/comment.service.ts * * */
// Imports



// Import RxJs required methods


/*
  Generated class for the DuaServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var DuaServiceProvider = (function () {
    // Resolve HTTP using the constructor
    function DuaServiceProvider(http) {
        this.http = http;
        // private instance variable to hold base url
        // private commentsUrl = 'http://localhost:3000/api/comments';
        this.duaUrl = '/assets/json/adam1.txt';
    }
    //private duaUrl = '[{"id": 1,"name": "A green door","price": 12.50,"tags": ["home", "green"]}]';
    // Fetch all existing comments
    DuaServiceProvider.prototype.getDUA = function (jsonfile) {
        // ...using get request
        //  return this.http.get("http://ergast.com/api/f1/2004/1/results.json")
        //                 // ...and calling .json() on the response to return data
        //                  .map((res:Response) => res.json())
        //                  //...errors if any
        //                  .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        return this.http.get("assets/json/" + jsonfile + ".json")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    DuaServiceProvider.prototype.getDUAList = function () {
        // ...using get request
        //  return this.http.get("http://ergast.com/api/f1/2004/1/results.json")
        //                 // ...and calling .json() on the response to return data
        //                  .map((res:Response) => res.json())
        //                  //...errors if any
        //                  .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        // https://firebasestorage.googleapis.com/v0/b/duaapplication-a2d7f.appspot.com/o/duaList.json?alt=media&token=692ca14e-8287-4740-b2d8-b3747f4145cc
        return this.http.get("assets/json/duaList.json")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    DuaServiceProvider.prototype.helloo = function () {
        return this.http.get("http://ergast.com/api/f1/2004/1/results.json").map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
        ;
    };
    return DuaServiceProvider;
}());
DuaServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], DuaServiceProvider);

//# sourceMappingURL=dua-service.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DuaConstantProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/*
  Generated class for the DuaConstantProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var DuaConstantProvider = (function () {
    function DuaConstantProvider() {
    }
    return DuaConstantProvider;
}());
DuaConstantProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], DuaConstantProvider);

//# sourceMappingURL=dua-constant.js.map

/***/ })

},[265]);
//# sourceMappingURL=main.js.map