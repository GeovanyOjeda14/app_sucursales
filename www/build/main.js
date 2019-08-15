webpackJsonp([1],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Global; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Global = /** @class */ (function () {
    function Global() {
        this.login = false;
        this.admin = false;
        // public apiUrl ='http://192.168.2.102:3000';
        this.apiUrl = 'http://cdn.prevenirexpress.com:3000';
        // API MAC
        // public apiUrl = 'http://192.168.2.105:3000';
        this.infoPerfil = {};
        this.medico = false;
        // public nombres; 
    }
    Global = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], Global);
    return Global;
}());

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CitasProvedorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_cita_modal_cita__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_global__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sacar_cita_sacar_cita__ = __webpack_require__(64);
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
 * Generated class for the CitasProvedorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CitasProvedorPage = /** @class */ (function () {
    function CitasProvedorPage(navCtrl, navParams, api, modalCtrl, alertCtrl, global, toastCtrl, platform, app, ap) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.global = global;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.app = app;
        this.ap = ap;
        this.hr = false;
        this.currentEvents = [];
        this.id_servicios = this.navParams.get('id_servicios');
        this.nombre = this.navParams.get('nombre');
        this.id_categoria = this.navParams.get('id_categoria');
        this.medico = this.navParams.get('medico');
        console.log(this.medico);
        // console.log(this.id_servicios + " " + this.nombre + " " +this.id_categoria);
        this.today = __WEBPACK_IMPORTED_MODULE_2_moment__(new Date().toISOString()).format('YYYY-M-DD');
    }
    CitasProvedorPage.prototype.sacarCita = function (hora) {
        var fecha = this.f + " " + hora;
        var f = __WEBPACK_IMPORTED_MODULE_2_moment__(fecha).format('YYYY-MM-DD HH:mm:ss ');
        var today = __WEBPACK_IMPORTED_MODULE_2_moment__(new Date().toISOString()).format('YYYY-M-DD HH:mm:ss');
        var today2 = __WEBPACK_IMPORTED_MODULE_2_moment__(today);
        var st = __WEBPACK_IMPORTED_MODULE_2_moment__(f);
        var hours = st.diff(today2, 'hours');
        // console.log(hours);
        if (hours < 0) {
            this.presentToast("No se puede sacar la cita en un horario que ya paso. Por favor escoge otro horario");
        }
        else {
            var info = { start: hora, fecha: this.f, id_servicios: this.id_servicios, id_categoria: this.id_categoria };
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__sacar_cita_sacar_cita__["a" /* SacarCitaPage */], { info: info });
        }
    };
    CitasProvedorPage.prototype.ionViewCanLeave = function () {
        var activeModal = this.app._modalPortal.getActive();
        if (activeModal) {
            activeModal.dismiss();
        }
    };
    CitasProvedorPage.prototype.ionViewDidEnter = function () {
        this.horarios();
        this.obtenerEventos();
    };
    CitasProvedorPage.prototype.onMonthSelect = function (ev) {
        var _this = this;
        var mes = ev.month + 1;
        this.api.getEventos(mes, ev.year, this.id_servicios, this.id_categoria).subscribe(function (res) {
            _this.eve = res;
            _this.currentEvents = _this.eve;
        }, function (err) {
            console.log(err);
        });
    };
    CitasProvedorPage.prototype.obtenerEventos = function () {
        var _this = this;
        this.load = true;
        var anio = __WEBPACK_IMPORTED_MODULE_2_moment__(this.today).format('YYYY');
        var mes = __WEBPACK_IMPORTED_MODULE_2_moment__(this.today).format('M');
        console.log(mes, anio, this.id_servicios);
        this.api.getEventos(mes, anio, this.id_servicios, this.id_categoria).subscribe(function (res) {
            _this.eve = res;
            _this.currentEvents = _this.eve;
            console.log(_this.currentEvents);
            //   for(let i = 0; i < this.eve.length; i++)
            // {
            //      let year = this.eve[i].year;
            //      let month = this.eve[i].month;
            //      let date = this.eve[i].date;
            //      this.currentEvents.push({year:year, month:month ,date:date});
            //   }
            _this.load = false;
        }, function (err) {
            _this.load = false;
            console.log(err);
        });
        // let anio = moment(this.today).format('YYYY');
        // let mes =  moment(this.today).format('M')
        // // console.log(mes,anio,this.id_servicios);
        // this.api.getEventos(mes,anio,this.id_servicios).subscribe((res)=>{
        //   this.eve =res;
        //   for(let i = 0; i < this.eve.length; i++)
        // {
        //      let year = this.eve[i].year;
        //      let month = this.eve[i].month;
        //      let date = this.eve[i].date;
        //      this.currentEvents.push({year:year, month:month ,date:date});
        //   }
        // },(err)=>{
        //   console.log(err);
        // });
        // return this.currentEvents;
    };
    CitasProvedorPage.prototype.toggleSection = function (i) {
        this.maniana[i].open = !this.maniana[i].open;
    };
    CitasProvedorPage.prototype.toggleSection2 = function (i) {
        this.tarde[i].open = !this.tarde[i].open;
    };
    CitasProvedorPage.prototype.toggleItem = function (i, j) {
        this.maniana[i].children[j].open = !this.maniana[i].children[j].open;
    };
    CitasProvedorPage.prototype.onDaySelect = function (ev) {
        var numero = parseInt(ev.month) + 1;
        this.fecha = ev.year + "-" + numero + "-" + ev.date;
        // console.log("on day selet")
        // console.log(this.fecha);
        var today = new Date(this.today).getTime();
        var fecha = new Date(this.fecha).getTime();
        if (fecha >= today) {
            this.hr = false;
        }
        else {
            this.hr = true;
        }
        this.horarios();
    };
    CitasProvedorPage.prototype.horarios = function () {
        var _this = this;
        this.load = true;
        if (!this.fecha) {
            this.f = this.today;
            this.api.getCitasMedico(this.f, this.id_servicios, this.id_categoria).subscribe(function (data) {
                console.log(data);
                _this.information = data;
                console.log(_this.information);
                var ma = _this.information[0];
                ma = ma.maniana;
                _this.maniana = ma;
                var ta = _this.information[1];
                ta = ta.tardes;
                _this.tarde = ta;
                _this.load = false;
            }, function (err) {
                _this.load = false;
                _this.presentToast("Error en la conexión, intentalo más tarde.");
                // console.log(err);
            });
        }
        else {
            this.f = this.fecha;
            this.api.getCitasMedico(this.f, this.id_servicios, this.id_categoria).subscribe(function (data) {
                console.log(data);
                _this.information = data;
                console.log(_this.information);
                var ma = _this.information[0];
                ma = ma.maniana;
                _this.maniana = ma;
                var ta = _this.information[1];
                ta = ta.tardes;
                _this.tarde = ta;
                _this.load = false;
            }, function (err) {
                _this.load = false;
                _this.presentToast("Error en la conexión, intentalo más tarde.");
                // console.log(err);
            });
        }
    };
    CitasProvedorPage.prototype.verCita = function (info) {
        // console.log(info);
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__modal_cita_modal_cita__["a" /* ModalCitaPage */], { info: info, categoria: this.id_categoria });
        modal.present();
        modal.onDidDismiss(function (data) {
            _this.horarios();
            _this.obtenerEventos();
        });
    };
    CitasProvedorPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 4000
        });
        toast.present();
    };
    CitasProvedorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-citas-provedor',template:/*ion-inline-start:"E:\ionic\appMovil\src\pages\citas-provedor\citas-provedor.html"*/'<!--\n\n  Generated template for the CitasProvedorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{nombre}}</ion-title>\n\n\n\n    <ion-buttons end>\n\n        <button ion-button (click)="calendar.today()" icon-left>\n\n          <ion-icon name="calendar"></ion-icon> Hoy\n\n          </button>\n\n    </ion-buttons>\n\n    \n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <div>\n\n      <ion-calendar #calendar lang="es"\n\n      [events]="currentEvents"\n\n       (onDaySelect)="onDaySelect($event)" \n\n      (onMonthSelect)="onMonthSelect($event)"\n\n      ></ion-calendar>\n\n    </div>\n\n    <br *ngIf="hr">\n\n    <h1 *ngIf="hr" class="h1">No disponible</h1>\n\n    <div *ngIf="!hr">\n\n      <div class="medio">\n\n        <h2>Mañana</h2>\n\n    \n\n      <ion-list class="accordion-list">\n\n        <ion-list-header *ngFor="let item of maniana; let i = index" no-lines no-padding>\n\n          \n\n            <button ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n\n                <ion-icon item-left name="arrow-forward" *ngIf="!item.open"></ion-icon>\n\n                <ion-icon item-left name="arrow-down" *ngIf="item.open"></ion-icon>\n\n                <ion-row>\n\n                  <ion-col col-8>{{ item.hora }}</ion-col>\n\n                  <ion-col> Citas :{{ item.echas }}</ion-col>\n\n                </ion-row>\n\n                    \n\n              </button>\n\n              <ion-list *ngIf="item.citas && item.open" no-lines>\n\n                  <!-- Second Level -->\n\n                    \n\n                  <ion-list-header *ngFor="let child of item.citas; let j = index" no-padding>\n\n                      <ion-item *ngIf="!child.citas" ion-item detail-none class="child-item" text-wrap>\n\n                          <h2>{{ child.nombres }}</h2>\n\n          \n\n                          <!-- <button ion-button outline item-end color="danger" (click)="eliminar(child.id_eventos)">Eliminar</button> -->\n\n                          <button ion-button outline item-end (click)="verCita(child)">Ver</button>\n\n                        </ion-item>\n\n    \n\n            </ion-list-header>\n\n\n\n            <ion-item id="sacarCita">\n\n                <button *ngIf="!medico" ion-button icon-left outline="true" color="secondary" [disabled]="item.disponible === false" (click)="sacarCita(item.hora)">\n\n                  <ion-icon name="medkit"></ion-icon>\n\n                  Sacar cita\n\n                </button>\n\n            </ion-item>\n\n\n\n          </ion-list>\n\n            \n\n        </ion-list-header>\n\n      </ion-list>\n\n    </div>\n\n    \n\n    <div>\n\n      <h2>Tarde</h2>\n\n      <ion-list class="accordion-list">\n\n          <ion-list-header *ngFor="let item of tarde; let i = index" no-lines no-padding>\n\n            \n\n              <button ion-item (click)="toggleSection2(i)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n\n                  <ion-icon item-left name="arrow-forward" *ngIf="!item.open"></ion-icon>\n\n                  <ion-icon item-left name="arrow-down" *ngIf="item.open"></ion-icon>\n\n                  <ion-row>\n\n                      <ion-col col-8>{{ item.hora }}</ion-col>\n\n                      <ion-col> Citas :{{ item.echas }}</ion-col>\n\n                    </ion-row>\n\n                </button>\n\n                <ion-list *ngIf="item.citas && item.open" no-lines>\n\n                    <!-- Second Level -->\n\n                   \n\n                \n\n                    <ion-list-header *ngFor="let child of item.citas; let j = index" no-padding>\n\n                      \n\n                        <ion-item *ngIf="!child.citas" ion-item detail-none class="child-item" text-wrap>\n\n                            <h2>{{ child.nombres }}</h2>\n\n                 \n\n                            <!-- <button ion-button outline item-end color="danger" (click)="eliminar(child.id_eventos)">Eliminar</button> -->\n\n                            <button ion-button outline item-end (click)="verCita(child)">Ver</button>\n\n                          </ion-item>\n\n      \n\n              </ion-list-header>\n\n              <ion-item id="sacarCita">\n\n                  <button *ngIf="!medico" ion-button icon-left outline="true" color="secondary" (click)="sacarCita(item.hora)">\n\n                    <ion-icon name="medkit"></ion-icon>\n\n                    Sacar cita\n\n                  </button>\n\n\n\n                  \n\n              </ion-item>\n\n            </ion-list>\n\n              \n\n          </ion-list-header>\n\n        </ion-list>\n\n    </div>\n\n    </div>\n\n\n\n   \n\n</ion-content>\n\n\n\n<div class="loading" *ngIf="load">\n\n  <img src="/assets/imgs/pulso.gif" alt="">\n\n</div> \n\n'/*ion-inline-end:"E:\ionic\appMovil\src\pages\citas-provedor\citas-provedor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__app_global__["a" /* Global */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicApp */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], CitasProvedorPage);
    return CitasProvedorPage;
}());

//# sourceMappingURL=citas-provedor.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalCitaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_global__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_photo_viewer__ = __webpack_require__(37);
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
 * Generated class for the ModalCitaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalCitaPage = /** @class */ (function () {
    function ModalCitaPage(navCtrl, navParams, viewCtrl, global, api, alertCtrl, toastCtrl, photoViewer, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.global = global;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.photoViewer = photoViewer;
        this.loadingCtrl = loadingCtrl;
        this.verMascota = false;
        this.info = this.navParams.get('info');
        this.categoria = this.navParams.get('categoria');
        this.usuarios_id = this.info.usuarios_id;
        // console.log(this.info);
        //  [i]
        if (this.categoria == 20) {
            this.verMascota = true;
            this.mascota();
        }
        else {
            this.paciente();
        }
    }
    ModalCitaPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad InfoCitaPage');
    };
    ModalCitaPage.prototype.mascota = function () {
        var _this = this;
        // this.loading = this.loadingCtrl.create({
        //   spinner: 'hide',
        //   content: "Espera un momento<br>estamos cargando la información... ",
        // });
        // this.loading.present();
        this.load = true;
        this.api.getMascotaInfo(this.usuarios_id).subscribe(function (data) {
            // console.log(data[0]);
            _this.avatar = data[0].avatar;
            _this.nombre = data[0].nombre;
            _this.raza = data[0].raza;
            _this.color = data[0].color;
            _this.especie = data[0].especie;
            _this.sexo = data[0].sexo;
            _this.esterilizado = data[0].esterilizado;
            _this.fechaNacimiento = data[0].fecha_nacimineto;
            _this.fechaNacimiento = __WEBPACK_IMPORTED_MODULE_2_moment__(_this.fechaNacimiento).format('DD-MM-YYYY');
            _this.nombreDueno = data[0].dueño;
            _this.contacto = data[0].telefono;
            // this.loading.dismiss();
            _this.load = false;
        }, function (err) {
            // this.loading.dismiss();
            _this.load = false;
            _this.presentToast("Error en la conexion, intentalo mas tarde");
        });
    };
    ModalCitaPage.prototype.paciente = function () {
        var _this = this;
        // this.loading = this.loadingCtrl.create({
        //   spinner: 'hide',
        //   content: "Espera un momento<br>estamos cargando la información... ",
        // });
        // this.loading.present();
        this.load = true;
        this.api.getUser(this.usuarios_id).subscribe(function (data) {
            // console.log(data);
            _this.user = data[0];
            _this.nombre = data[0].nombre;
            _this.apellido = data[0].apellidos;
            _this.fechaNacimiento = data[0].fecha_nacimiento;
            _this.fechaNacimiento = __WEBPACK_IMPORTED_MODULE_2_moment__(_this.fechaNacimiento).format('DD-MM-YYYY');
            _this.contacto = data[0].telefono;
            _this.correo = data[0].correo;
            _this.avatar = data[0].avatar;
            _this.cedula = data[0].cedula;
            // this.loading.dismiss();
            _this.load = false;
        }, function (err) {
            // this.loading.dismiss();
            _this.load = false;
            _this.presentToast("Error en la conexion, intentalo mas tarde");
            // console.log(err)
        });
    };
    ModalCitaPage.prototype.verImg = function (foto) {
        this.photoViewer.show(foto, '', { share: false });
    };
    ModalCitaPage.prototype.eliminar = function (bol) {
        // console.log(this.info.id_eventos);
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmación',
            message: '¿Estas seguro que deseas eliminar esta cita?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Confirmar',
                    handler: function () {
                        // this.loading = this.loadingCtrl.create({
                        //   spinner : 'hide',
                        //   content : "Espera un momento<br>estamos procesando la solicitud... ",
                        // });
                        // this.loading.present();
                        _this.load = true;
                        if (bol === false) {
                            _this.api.dltCitaProvedor(_this.info.id_eventos, _this.global.id_usuario, 0).then(function (data) {
                                // console.log(data);
                                var a = data;
                                a = a[0].borrado;
                                // console.log(a);
                                if (a === true) {
                                    _this.presentToast("Su cita fue eliminada con exito");
                                    // this.loading.dismiss();
                                    _this.load = false;
                                    _this.viewCtrl.dismiss({ borrado: true });
                                }
                            }, function (err) {
                                // this.loading.dismiss();
                                _this.load = false;
                                _this.presentToast("Error en la conexion, intentalo mas tarde");
                                // console.log(err);
                            });
                        }
                        else {
                            _this.api.dltCitaProvedor(_this.info.id_eventos, _this.global.id_usuario, 20).then(function (data) {
                                // console.log(data);
                                var a = data;
                                a = a[0].borrado;
                                // console.log(a);
                                if (a === true) {
                                    _this.presentToast("Su cita fue eliminada con exito");
                                    // this.loading.dismiss();
                                    _this.load = false;
                                    _this.viewCtrl.dismiss({ borrado: true });
                                }
                            }, function (err) {
                                // this.loading.dismiss();
                                _this.load = false;
                                _this.presentToast("Error en la conexion, intentalo mas tarde");
                                // console.log(err);
                            });
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    ModalCitaPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ModalCitaPage.prototype.save = function () {
        this.viewCtrl.dismiss();
    };
    ModalCitaPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    ModalCitaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-modal-cita',template:/*ion-inline-start:"E:\ionic\appMovil\src\pages\modal-cita\modal-cita.html"*/'<!--\n\n  Generated template for the InfoCitaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-buttons start>\n\n      <button ion-button icon-only (click)="close()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Información</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n \n\n\n\n<ion-content padding>\n\n\n\n  <div *ngIf="!verMascota">\n\n\n\n   <div class="img">\n\n      <img id="userImg" [src]="avatar" alt="nd" (click)="verImg(avatar)">\n\n    </div>\n\n  \n\n    <h1 class="h1">Información paciente</h1>\n\n<div class="card">\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <h3><strong>Nombre : </strong>{{nombre}}</h3>\n\n        <h3><strong>Apellido : </strong>{{apellido}} </h3>\n\n        <h3><strong>No. Cedula : </strong>{{cedula}}</h3>\n\n        <h3><strong>Fecha de nacimiento : </strong>{{fechaNacimiento}}</h3>\n\n        <h3><strong>No. Contacto : </strong>{{contacto}}</h3>\n\n        <!-- <h3>Correo : {{correo}}</h3> -->\n\n      </ion-card-content>\n\n    </ion-card>\n\n</div>\n\n\n\n<button class="hc" ion-button  round block disabled icon-left>\n\n  <ion-icon name="medkit"></ion-icon>\n\n  Historia clinica</button>\n\n<button class="hc" ion-button round block color="danger" icon-left (click)="eliminar(false)">\n\n  <ion-icon name="trash"></ion-icon>\n\n  Eliminar cita</button>\n\n<button ion-button color="energized" icon-left round block (click)="close()">\n\n    <ion-icon name="arrow-round-back" ></ion-icon>\n\n  Volver</button>\n\n</div>\n\n\n\n<div *ngIf="verMascota">\n\n\n\n    <div class="img">\n\n        <img id="userImg" [src]="avatar" alt="nd" (click)="verImg(avatar)">\n\n      </div>\n\n    \n\n      <h1 class="h1">Información Mascota</h1>\n\n  <div class="card">\n\n      <ion-card>\n\n        <ion-card-content>\n\n          <h3><strong>Nombre : </strong>{{nombre}}</h3>\n\n          <h3><strong>Raza : </strong>{{raza}} </h3>\n\n          <h3><strong>Color: </strong>{{color}}</h3>\n\n          <h3><strong>Especie: </strong>{{especie}}</h3>\n\n          <h3><strong>Sexo: </strong>{{sexo}}</h3>\n\n          <h3><strong>Esterilizado: </strong>{{esterilizado}}</h3>\n\n          <h3><strong>Fecha de nacimiento : </strong>{{fechaNacimiento}}</h3>\n\n          <h3><strong>Nombre dueño : </strong>{{nombreDueno}}</h3>\n\n          <h3><strong>No. Contacto : </strong>{{contacto}}</h3>\n\n          <!-- <h3>Correo : {{correo}}</h3> -->\n\n        </ion-card-content>\n\n      </ion-card>\n\n  </div>\n\n  \n\n  <button class="hc" ion-button  round block disabled icon-left>\n\n    <ion-icon name="medkit"></ion-icon>\n\n    Historia clinica</button>\n\n  <button class="hc" ion-button round block color="danger" icon-left (click)="eliminar(true)">\n\n    <ion-icon name="trash"></ion-icon>\n\n    Eliminar cita</button>\n\n  <button ion-button color="energized" icon-left round block (click)="close()">\n\n      <ion-icon name="arrow-round-back" ></ion-icon>\n\n    Volver</button>\n\n\n\n</div>\n\n</ion-content>\n\n\n\n<div class="loading" *ngIf="load">\n\n  <img src="/assets/imgs/pulso.gif" alt="">\n\n</div> \n\n\n\n'/*ion-inline-end:"E:\ionic\appMovil\src\pages\modal-cita\modal-cita.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__app_global__["a" /* Global */], __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_photo_viewer__["a" /* PhotoViewer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], ModalCitaPage);
    return ModalCitaPage;
}());

//# sourceMappingURL=modal-cita.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalificacionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_global__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(9);
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
 * Generated class for the CalificacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CalificacionPage = /** @class */ (function () {
    function CalificacionPage(navCtrl, navParams, toastCtrl, formBuilder, global, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.global = global;
        this.api = api;
        this.cal1 = true;
        this.cal2 = false;
        this.cal3 = false;
        this.comentario = false;
        this.coment = "";
        this.info = this.navParams.get('info');
        // console.log(this.info);
        this.mascota = this.navParams.get('mascota');
        // console.log(this.mascota);
        this.todo = this.formBuilder.group({
            comentario: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(140)]],
        });
    }
    CalificacionPage.prototype.ionViewDidLoad = function () {
    };
    CalificacionPage.prototype.siguiente = function () {
        var siguiente = true;
        switch (siguiente === true) {
            case (this.cal1 === true):
                if (!this.estrellas1) {
                    this.presentToast("Por favor elige una calificación");
                }
                else {
                    this.cal2 = true;
                    this.cal1 = false;
                }
                break;
            case (this.cal2 === true):
                if (!this.estrellas2) {
                    this.presentToast("Por favor elige una calificación");
                }
                else {
                    this.cal3 = true;
                    this.cal2 = false;
                }
                break;
            case (this.cal3 = true):
                if (!this.estrellas3) {
                    // this.presentToast("Por favor elige una calificación");
                }
                else {
                    this.comentario = true;
                    this.cal3 = false;
                }
                break;
        }
    };
    CalificacionPage.prototype.atras = function () {
        var atras = true;
        switch (atras === true) {
            case (this.cal2 === true):
                this.cal1 = true;
                this.cal2 = false;
                this.estrellas1 = undefined;
                break;
            case (this.cal3 === true):
                this.cal2 = true;
                this.cal3 = false;
                this.estrellas2 = undefined;
                break;
            case (this.comentario === true):
                this.cal3 = true;
                this.comentario = false;
                this.estrellas3 = undefined;
                break;
        }
    };
    CalificacionPage.prototype.valor = function (num) {
        var estrellas = true;
        switch (estrellas === true) {
            case (this.cal1 === true):
                this.estrellas1 = num;
                break;
            case (this.cal2 === true):
                this.estrellas2 = num;
                break;
            case (this.cal3 === true):
                this.estrellas3 = num;
                break;
        }
    };
    CalificacionPage.prototype.enviar = function () {
        var _this = this;
        this.load = true;
        // console.log(this.estrellas1);
        // console.log(this.estrellas2);
        // console.log(this.estrellas3); 
        // console.log(this.todo.value.comentario);
        var promedio = (this.estrellas1 + this.estrellas2 + this.estrellas3) / 3;
        promedio = Math.round(promedio);
        var info = { coment: this.todo.value.comentario, califica: promedio, ids: this.info.id_servicio,
            idU: this.global.id_usuario, idh: this.info.id_historial, masc: this.mascota };
        //        
        console.log(info);
        this.api.postCalificacion(info).then(function (res) {
            _this.load = false;
            // console.log(res);
            if (res === true) {
                _this.presentToast("Gracias por calificarnos.");
                _this.navCtrl.pop();
            }
        }, function (err) {
            _this.load = false;
            _this.presentToast("Error en la conexion, intentalo mas tarde o revisa tu conexion");
        });
    };
    CalificacionPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    CalificacionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-calificacion',template:/*ion-inline-start:"E:\ionic\appMovil\src\pages\calificacion\calificacion.html"*/'<!--\n\n  Generated template for the CalificacionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Califica tu cita</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header> -->\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <div class="logo">\n\n        <img src="/assets/imgs/logo-grande-negro.png" alt="">\n\n      </div>\n\n    \n\n\n\n<div  class="h1"><h1>Califica tu cita</h1></div>\n\n    \n\n<div class="p">\n\n    <p>Califica el servicio de acuerdo a la pregunta, puedes calificarla de 1 a 5 estrellas. Siendo 1 la menor calificacion y 5 la mayor calificacion. </p>\n\n    <br>\n\n</div>\n\n   \n\n  \n\n    <p *ngIf="cal1">¿Del 1 al 5, por favor califica la atención que recibiste por parte del profecional de la salud?</p>\n\n    <p *ngIf="cal2">¿Del 1 al 5, por favor califica la puntualidad del profecional de la salud?</p>\n\n    <p *ngIf="cal3">¿Del 1 al 5, recomendarias este servicio?</p>\n\n  \n\n    <ion-item>\n\n  \n\n    <div class="dv1" *ngIf="cal1">\n\n      <p class="clasificacion">\n\n        <input id="radio1" type="radio" name="estrellas" value="5">\n\n        <label for="radio1" (click)="valor(5)" >★</label>\n\n        <input id="radio2" type="radio" name="estrellas" value="4">\n\n        <label for="radio2" (click)="valor(4)" >★</label>\n\n        <input id="radio3" type="radio" name="estrellas" value="3">\n\n        \n\n        <label for="radio3" (click)="valor(3)" >★</label>\n\n        <input id="radio4" type="radio" name="estrellas" value="2">\n\n        <label for="radio4" (click)="valor(2)" >★</label>\n\n        <input id="radio5" type="radio" name="estrellas" value="1">\n\n        <label for="radio5" (click)="valor(1)" >★</label>\n\n      </p>\n\n    </div>\n\n  \n\n   \n\n  \n\n    <div class="dv1" *ngIf="cal2">\n\n        <p class="clasificacion">\n\n            <input id="radio1" type="radio" name="estrellas" value="5">\n\n            <label for="radio1" (click)="valor(5)" >★</label>\n\n            <input id="radio2" type="radio" name="estrellas" value="4">\n\n            <label for="radio2" (click)="valor(4)" >★</label>\n\n            <input id="radio3" type="radio" name="estrellas" value="3">\n\n            <label for="radio3" (click)="valor(3)" >★</label>\n\n            <input id="radio4" type="radio" name="estrellas" value="2">\n\n            <label for="radio4" (click)="valor(2)" >★</label>\n\n            <input id="radio5" type="radio" name="estrellas" value="1">\n\n            <label for="radio5" (click)="valor(1)" >★</label>\n\n          </p>\n\n      </div>\n\n  \n\n      \n\n      <div class="dv1" *ngIf="cal3">\n\n          <p class="clasificacion">\n\n              <input id="radio1" type="radio" name="estrellas" value="5">\n\n              <label for="radio1" (click)="valor(5)" >★</label>\n\n              <input id="radio2" type="radio" name="estrellas" value="4">\n\n              <label for="radio2" (click)="valor(4)" >★</label>\n\n              <input id="radio3" type="radio" name="estrellas" value="3">\n\n              <label for="radio3" (click)="valor(3)" >★</label>\n\n              <input id="radio4" type="radio" name="estrellas" value="2">\n\n              <label for="radio4" (click)="valor(2)" >★</label>\n\n              <input id="radio5" type="radio" name="estrellas" value="1">\n\n              <label for="radio5" (click)="valor(1)" >★</label>\n\n            </p>\n\n        </div>\n\n  \n\n        <div *ngIf="comentario">\n\n         <p>Dejanos tu comentario :</p>\n\n         <form [formGroup]="todo" (ngSubmit)="enviar()" nonvalidate>   \n\n            <ion-item> \n\n                <ion-label floating>* Escribe tu comentario.</ion-label>\n\n                <ion-textarea class="txt_area" formControlName="comentario"></ion-textarea>\n\n              </ion-item>     \n\n          </form>\n\n          <ion-item *ngIf="todo.get(\'comentario\').errors && todo.get(\'comentario\').dirty">\n\n              <p color="danger" ion-text *ngIf="todo.get(\'comentario\').hasError(\'maxlength\')">Cantidad maxima de caracteres (140)</p>\n\n          </ion-item>\n\n        \n\n        </div>\n\n  \n\n      \n\n  </ion-item>\n\n  \n\n  <div class="btn">\n\n      <button *ngIf="!cal1" class="btn" ion-button color="energized" (click)="atras()">Atras</button> \n\n      <button  *ngIf="!comentario"class="btn" ion-button color="prevenir" (click)="siguiente()">Siguiente</button> \n\n      <button  *ngIf="comentario"class="btn" ion-button color="prevenir" (click)="enviar()" [disabled]="!todo.valid">Enviar</button>   \n\n  </div>\n\n\n\n  \n\n  </ion-content>\n\n\n\n  <div class="loading" *ngIf="load">\n\n    <img src="/assets/imgs/pulso.gif" alt="">\n\n  </div> '/*ion-inline-end:"E:\ionic\appMovil\src\pages\calificacion\calificacion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__app_global__["a" /* Global */], __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */]])
    ], CalificacionPage);
    return CalificacionPage;
}());

//# sourceMappingURL=calificacion.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgregarMedicoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_crypto_js__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_crypto_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_global__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(19);
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
 * Generated class for the AgregarMedicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AgregarMedicoPage = /** @class */ (function () {
    function AgregarMedicoPage(navCtrl, navParams, formBuilder, api, loadingCtrl, toastCtrl, global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.api = api;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.global = global;
        this.read = false;
        this.datos = this.formBuilder.group({
            buscar: [''],
            nombres: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(50)]],
            apellidos: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(50)]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
            pssw: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,]],
            cedula: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[0-9]*')]],
            tarjetaProfecional: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[0-9]*')]],
            especialidad: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(50)]],
        });
    }
    AgregarMedicoPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad AgregarMedicoPage');
    };
    AgregarMedicoPage.prototype.buscarCedula = function () {
        var _this = this;
        this.load = true;
        this.cedula = this.datos.value.buscar;
        this.api.getMedico(this.cedula).subscribe(function (data) {
            console.log(data);
            if (data === false) {
                _this.load = false;
                _this.read = true;
                _this.form = true;
                _this.formularioNuevoMedico();
            }
            else {
                _this.load = false;
                _this.infoMedico = data[0];
                _this.read = true;
                _this.formularioMedicoExiste();
                _this.form2 = true;
            }
        }, function (err) {
            _this.load = false;
            console.log(err);
        });
    };
    AgregarMedicoPage.prototype.borrar = function () {
        if (this.form === true) {
            this.read = false;
            this.form = false;
            this.datos.reset();
        }
        if (this.form2 === true) {
            this.read = false;
            this.form2 = false;
            this.datos.reset();
        }
    };
    AgregarMedicoPage.prototype.agregarMedico = function (bol) {
        var _this = this;
        if (bol === true) {
            var info = { cedula: this.infoMedico.medico_id, provedores_id: this.global.id_usuario, existe: bol };
            console.log(info);
            // this.loading = this.loadingCtrl.create({
            //   spinner: 'hide',
            //   content: "Espera un momento<br>estamos verificando tu información... ",
            //   });
            //   this.loading.present();
            this.load = true;
            this.api.postAgregarMedicos(info).then(function (res) {
                // this.loading.dismiss();
                _this.load = false;
                console.log(res);
                _this.res = res;
                if (res === true) {
                    _this.presentToast("Medico agregado con exito.");
                    _this.navCtrl.pop();
                }
                if (res === false) {
                    _this.presentToast("Error al agregar el medico, intentalo más tarde o revisa tu conexion");
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
                }
                if (_this.res.existe === true) {
                    _this.presentToast("No se puede agregar. El medico actualmente ya se encuentra registrado en el servicio.");
                }
            }, function (err) {
                // this.loading.dismiss();
                _this.load = false;
                _this.presentToast("Error al agregar el medico, intentalo más tarde o revisa tu conexion");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
                console.log(err);
            });
        }
        else {
            // this.loading = this.loadingCtrl.create({
            // spinner: 'hide',
            // content: "Espera un momento<br>estamos verificando tu información... ",
            // });
            // this.loading.present();
            this.load = true;
            var hashed = __WEBPACK_IMPORTED_MODULE_4_crypto_js___default.a.SHA512(this.datos.value.pssw).toString(__WEBPACK_IMPORTED_MODULE_4_crypto_js___default.a.enc.Hex);
            var info = { nombre: this.datos.value.nombres, apellidos: this.datos.value.apellidos, tarj_profecional: this.datos.value.tarjetaProfecional,
                email: this.datos.value.email, pssw: hashed, pssw2: this.datos.value.pssw, cedula: this.datos.value.cedula, titulo: this.datos.value.especialidad, provedores_id: this.global.id_usuario, existe: bol };
            console.log(info);
            this.api.postAgregarMedicos(info).then(function (res) {
                // this.loading.dismiss();
                _this.load = false;
                console.log(res);
                _this.res = res;
                if (_this.res === true) {
                    _this.presentToast("Medico agregado con exito.");
                    _this.navCtrl.pop();
                }
                else if (_this.res === false) {
                    _this.presentToast("Error al agregar el medico, intentalo más tarde o revisa tu conexion");
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
                }
                // if(this.res.campo = "email"){
                //   this.presentToast("El correo ya se encuentra registrado");
                // } else 
                if (_this.res.campo == "profecional") {
                    _this.presentToast("La tarjeta profecional ya se encuentra registrada");
                }
                if (_this.res.campo == "email") {
                    _this.presentToast("El correo ya se encuentra registrado");
                }
            }, function (err) {
                // this.loading.dismiss();
                _this.load = false;
                _this.presentToast("Error al agregar el medico, intentalo más tarde o revisa tu conexion");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
                console.log(err);
            });
        }
    };
    AgregarMedicoPage.prototype.formularioNuevoMedico = function () {
        this.datos = this.formBuilder.group({
            buscar: [this.cedula],
            nombres: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(50)]],
            apellidos: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(50)]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
            pssw: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,]],
            cedula: [this.cedula, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[0-9]*')]],
            tarjetaProfecional: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[0-9]*')]],
            especialidad: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(50)]],
        });
    };
    AgregarMedicoPage.prototype.formularioMedicoExiste = function () {
        console.log(this.infoMedico);
        this.datos = this.formBuilder.group({
            buscar: [this.cedula],
            nombres: [this.infoMedico.nombres, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(50)]],
            apellidos: [this.infoMedico.apellidos, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(50)]],
            // email: [this.infoMedico.email, [Validators.required,Validators.email,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
            // pssw: [this.infoMedico.pssw,[Validators.required,]],
            cedula: [this.cedula, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[0-9]*')]],
            tarjetaProfecional: [this.infoMedico.tarj_profecional, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[0-9]*')]],
            especialidad: [this.infoMedico.titulo, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(50)]],
        });
    };
    AgregarMedicoPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    AgregarMedicoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-agregar-medico',template:/*ion-inline-start:"E:\ionic\appMovil\src\pages\agregar-medico\agregar-medico.html"*/'<!--\n\n  Generated template for the AgregarMedicoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Agregar Medico</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <form [formGroup]="datos" (ngSubmit)="buscarCedula()"  novalidate>\n\n        <ion-item>\n\n          <ion-label>\n\n            <ion-icon name="card"></ion-icon>\n\n          </ion-label>\n\n          <ion-input type="number" placeholder="No. de Cedula" formControlName="buscar" readonly={{read}}></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="datos.get(\'buscar\').errors && datos.get(\'buscar\').dirty">\n\n            <p color="danger" ion-text *ngIf="datos.get(\'buscar\').hasError(\'required\')">* El campo es requerido</p>\n\n            <p color="danger" ion-text *ngIf="datos.get(\'buscar\').hasError(\'pattern\')">* El campo solo acepta numeros</p>\n\n        </ion-item>\n\n          </form>\n\n\n\n    <div class="btns">\n\n        <button ion-button (click)="buscarCedula()">Buscar</button>\n\n        <button ion-button color="danger" (click)="borrar()">Borrar</button>\n\n        </div>\n\n\n\n        <div *ngIf="form">\n\n\n\n    <form [formGroup]="datos" (ngSubmit)="agregarMedico(false)"  novalidate>\n\n        <ion-item>\n\n          <ion-label>\n\n            <ion-icon name="person"></ion-icon>\n\n          </ion-label>\n\n          <ion-input type="text" placeholder="Nombres medico" formControlName="nombres"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="datos.get(\'nombres\').errors && datos.get(\'nombres\').dirty">\n\n          <p color="danger" ion-text *ngIf="datos.get(\'nombres\').hasError(\'required\')">* El campo es requerido</p>\n\n          <p color="danger" ion-text *ngIf="datos.get(\'nombres\').hasError(\'minlength\')">Cantidad minima de caracteres (2)</p>\n\n      </ion-item>\n\n        <ion-item>\n\n        <ion-label>\n\n          <ion-icon name="person"></ion-icon>\n\n        </ion-label>\n\n        <ion-input type="text" placeholder="Apellidos medico" formControlName="apellidos"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="datos.get(\'apellidos\').errors && datos.get(\'apellidos\').dirty">\n\n        <p color="danger" ion-text *ngIf="datos.get(\'apellidos\').hasError(\'required\')">* El campo es requerido</p>\n\n        <p color="danger" ion-text *ngIf="datos.get(\'apellidos\').hasError(\'minlength\')">Cantidad minima de caracteres (3)</p>\n\n    </ion-item>\n\n   \n\n    <ion-item>\n\n      <ion-label> \n\n        <ion-icon name="mail"></ion-icon>\n\n      </ion-label>\n\n        <ion-input type="email" formControlName="email" placeholder="email" ></ion-input>\n\n    </ion-item>\n\n    <ion-item *ngIf="datos.get(\'email\').errors && datos.get(\'email\').dirty">\n\n        <p color="danger" ion-text *ngIf="datos.get(\'email\').hasError(\'required\')">* El campo es requerido</p>\n\n        <p color="danger" ion-text *ngIf="datos.get(\'email\').hasError(\'email\')">Tipo de email no valido (ejemplo@mail.com)</p>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>\n\n          <ion-icon name="key"></ion-icon>\n\n        </ion-label>\n\n        <ion-input type="password" placeholder="Contraseña" formControlName="pssw"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="datos.get(\'pssw\').errors && datos.get(\'pssw\').dirty">\n\n        <p color="danger" ion-text *ngIf="datos.get(\'pssw\').hasError(\'required\')">* El campo es requerido</p>\n\n        <p color="danger" ion-text *ngIf="datos.get(\'pssw\').hasError(\'pattern\')">* El campo solo acepta numeros</p>\n\n    </ion-item>\n\n      <ion-item>\n\n        <ion-label>\n\n          <ion-icon name="card"></ion-icon>\n\n        </ion-label>\n\n        <ion-input type="number" placeholder="No. de identificación" formControlName="cedula" readonly={{read}}></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="datos.get(\'cedula\').errors && datos.get(\'cedula\').dirty">\n\n        <p color="danger" ion-text *ngIf="datos.get(\'cedula\').hasError(\'required\')">* El campo es requerido</p>\n\n        <p color="danger" ion-text *ngIf="datos.get(\'cedula\').hasError(\'pattern\')">* El campo solo acepta numeros</p>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label>\n\n          <ion-icon name="card"></ion-icon>\n\n        </ion-label>\n\n        <ion-input type="number" placeholder="Tarjeta Profecional" formControlName="tarjetaProfecional"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="datos.get(\'tarjetaProfecional\').errors && datos.get(\'tarjetaProfecional\').dirty">\n\n        <p color="danger" ion-text *ngIf="datos.get(\'tarjetaProfecional\').hasError(\'required\')">* El campo es requerido</p>\n\n        <p color="danger" ion-text *ngIf="datos.get(\'tarjetaProfecional\').hasError(\'pattern\')">* El campo solo acepta numeros</p>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label>\n\n          <ion-icon name="person"></ion-icon>\n\n        </ion-label>\n\n        <ion-input type="text" placeholder="Especialidad medica" formControlName="especialidad"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="datos.get(\'especialidad\').errors && datos.get(\'especialidad\').dirty">\n\n        <p color="danger" ion-text *ngIf="datos.get(\'especialidad\').hasError(\'required\')">* El campo es requerido</p>\n\n        <p color="danger" ion-text *ngIf="datos.get(\'especialidad\').hasError(\'minlength\')">Cantidad minima de caracteres (2)</p>\n\n    </ion-item>\n\n     \n\n      <button ion-button block round [disabled]="!this.datos.valid">\n\n        <ion-icon name="person-add"></ion-icon>\n\n        Agregar\n\n      </button>\n\n    </form>\n\n\n\n  </div>\n\n\n\n  <div *ngIf="form2">\n\n\n\n      <form [formGroup]="datos" (ngSubmit)="agregarMedico(true)"  novalidate>\n\n          <ion-item>\n\n            <ion-label>\n\n              <ion-icon name="person"></ion-icon>\n\n            </ion-label>\n\n            <ion-input type="text" placeholder="Nombres medico" formControlName="nombres" readonly={{read}}></ion-input>\n\n          </ion-item>\n\n          <ion-item *ngIf="datos.get(\'nombres\').errors && datos.get(\'nombres\').dirty">\n\n            <p color="danger" ion-text *ngIf="datos.get(\'nombres\').hasError(\'required\')">* El campo es requerido</p>\n\n            <p color="danger" ion-text *ngIf="datos.get(\'nombres\').hasError(\'minlength\')">Cantidad minima de caracteres (2)</p>\n\n        </ion-item>\n\n          <ion-item>\n\n          <ion-label>\n\n            <ion-icon name="person"></ion-icon>\n\n          </ion-label>\n\n          <ion-input type="text" placeholder="Apellidos medico" formControlName="apellidos" readonly={{read}}></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="datos.get(\'apellidos\').errors && datos.get(\'apellidos\').dirty">\n\n          <p color="danger" ion-text *ngIf="datos.get(\'apellidos\').hasError(\'required\')">* El campo es requerido</p>\n\n          <p color="danger" ion-text *ngIf="datos.get(\'apellidos\').hasError(\'minlength\')">Cantidad minima de caracteres (3)</p>\n\n      </ion-item>\n\n     \n\n        <ion-item>\n\n          <ion-label>\n\n            <ion-icon name="card"></ion-icon>\n\n          </ion-label>\n\n          <ion-input type="number" placeholder="No. de identificación" formControlName="cedula" readonly={{read}}></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="datos.get(\'cedula\').errors && datos.get(\'cedula\').dirty">\n\n          <p color="danger" ion-text *ngIf="datos.get(\'cedula\').hasError(\'required\')">* El campo es requerido</p>\n\n          <p color="danger" ion-text *ngIf="datos.get(\'cedula\').hasError(\'pattern\')">* El campo solo acepta numeros</p>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n          <ion-label>\n\n            <ion-icon name="card"></ion-icon>\n\n          </ion-label>\n\n          <ion-input type="number" placeholder="Tarjeta Profecional" formControlName="tarjetaProfecional" readonly={{read}}></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="datos.get(\'tarjetaProfecional\').errors && datos.get(\'tarjetaProfecional\').dirty">\n\n          <p color="danger" ion-text *ngIf="datos.get(\'tarjetaProfecional\').hasError(\'required\')">* El campo es requerido</p>\n\n          <p color="danger" ion-text *ngIf="datos.get(\'tarjetaProfecional\').hasError(\'pattern\')">* El campo solo acepta numeros</p>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n          <ion-label>\n\n            <ion-icon name="person"></ion-icon>\n\n          </ion-label>\n\n          <ion-input type="text" placeholder="Especialidad medica" formControlName="especialidad" readonly={{read}}></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="datos.get(\'especialidad\').errors && datos.get(\'especialidad\').dirty">\n\n          <p color="danger" ion-text *ngIf="datos.get(\'especialidad\').hasError(\'required\')">* El campo es requerido</p>\n\n          <p color="danger" ion-text *ngIf="datos.get(\'especialidad\').hasError(\'minlength\')">Cantidad minima de caracteres (2)</p>\n\n      </ion-item>\n\n       \n\n        <button ion-button block round [disabled]="!this.datos.valid">\n\n          <ion-icon name="person-add"></ion-icon>\n\n          Agregar\n\n        </button>\n\n      </form>\n\n  \n\n    </div>\n\n\n\n</ion-content>\n\n\n\n<div class="loading" *ngIf="load">\n\n  <img src="/assets/imgs/pulso.gif" alt="">\n\n</div> \n\n'/*ion-inline-end:"E:\ionic\appMovil\src\pages\agregar-medico\agregar-medico.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__app_global__["a" /* Global */]])
    ], AgregarMedicoPage);
    return AgregarMedicoPage;
}());

//# sourceMappingURL=agregar-medico.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalMedicoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_global__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(19);
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
 * Generated class for the ModalMedicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalMedicoPage = /** @class */ (function () {
    function ModalMedicoPage(navCtrl, navParams, viewCtrl, toastCtrl, loadingCtrl, api, global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.api = api;
        this.global = global;
        this.info = this.navParams.get('info');
        // console.log(this.info);
    }
    ModalMedicoPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad ModalMedicoPage');
    };
    ModalMedicoPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ModalMedicoPage.prototype.eliminarMedico = function () {
        var _this = this;
        // this.loading = this.loadingCtrl.create({
        //   spinner: 'hide',
        //   content: "Espera un momento<br>estamos procesando la solicitud... ",
        // });
        // this.loading.present();
        this.load = true;
        this.api.dltMedicoPorProvedor(this.info.medico_id, this.global.id_usuario).then(function (res) {
            _this.load = false;
            if (res === true) {
                _this.presentToast("Medico eliminado con exito");
                _this.viewCtrl.dismiss();
            }
            else {
                _this.presentToast("El medico no se puede eliminar por que tiene un servicio asociado, elimina primero el servicio.");
            }
        }, function (err) {
            _this.load = false;
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            _this.presentToast("Error en la conexión, intentalo más tarde o revisa tu conexión.");
        });
    };
    ModalMedicoPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    ModalMedicoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-modal-medico',template:/*ion-inline-start:"E:\ionic\appMovil\src\pages\modal-medico\modal-medico.html"*/'<!--\n\n  Generated template for the ModalMedicoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <ion-buttons start>\n\n          <button ion-button icon-only (click)="close()">\n\n            <ion-icon name="close"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n\n\n    <ion-title >{{info.nombre}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <div class="img">\n\n        <img id="userImg" [src]="info.avatar" alt="nd" (click)="verImg(info.avatar)">\n\n    </div>\n\n\n\n    <h1 class="h1">{{info.nombre}}</h1>\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <h3><strong> Nombres :</strong> {{info.nombres}}</h3>\n\n        <h3><strong> Apellidos :</strong> {{info.apellidos}} </h3>\n\n        <h3><strong> Titulo : </strong> {{info.titulo}}</h3>\n\n        <h3><strong> Cedula : </strong>{{info.cedula}}</h3>\n\n        <h3><strong> Tarjeta Profecional : </strong>{{info.tarj_profecional}}</h3>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <button ion-button round block color="danger" (click)="eliminarMedico()">Eliminar Medico</button>\n\n\n\n</ion-content>\n\n\n\n<div class="loading" *ngIf="load">\n\n  <img src="/assets/imgs/pulso.gif" alt="">\n\n</div> \n\n'/*ion-inline-end:"E:\ionic\appMovil\src\pages\modal-medico\modal-medico.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_3__app_global__["a" /* Global */]])
    ], ModalMedicoPage);
    return ModalMedicoPage;
}());

//# sourceMappingURL=modal-medico.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicarServicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_global__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_crop__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_base64__ = __webpack_require__(74);
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
 * Generated class for the PublicarServicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PublicarServicioPage = /** @class */ (function () {
    function PublicarServicioPage(navCtrl, navParams, formBuilder, api, toastCtrl, camera, global, alertCtrl, loadingCtrl, crop, base64, platform, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.camera = camera;
        this.global = global;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.crop = crop;
        this.base64 = base64;
        this.platform = platform;
        this.app = app;
        this.maxCitasCofirm = false;
        this.cambio = false;
        this.dis = true;
        this.f2 = false;
        this.f3 = false;
        this.ds = [];
        this.f1d = false;
        this.f2d = false;
        this.h1 = false;
        this.h2 = false;
        this.h3 = false;
        this.eliminar = false;
        this.dsEdit = [];
        this.mCitas = [];
        this.departamentos();
        this.categorias();
        this.days();
        this.editar = this.navParams.get('info');
        this.infMedicos = this.navParams.get('medicos');
        // console.log(this.editar);
        if (this.editar) {
            this.validacionEditar();
            this.obtenerImgs();
            this.numCitas();
            // console.log(this.departamentoSelect);
            // this.obtenerHorarios();
        }
        else {
            this.validacionAgregar();
        }
        // this.ruta = global.apiUrl+this.rutasImg.ruta;
        // this.imgsEdit=[];
        // this.imgsEdit.push({ruta:global.apiUrl+this.rutasImg});
        this.imagenes = [];
        this.token = localStorage.getItem('token');
        this.token = this.token.split('"');
        this.token2 = this.token[1];
        this.mymodel = "segment1";
        this.url = this.global.apiUrl;
    }
    PublicarServicioPage.prototype.ionViewWillEnter = function () {
    };
    PublicarServicioPage.prototype.medicoSelect = function (ev) {
        this.medico = ev;
    };
    PublicarServicioPage.prototype.numCitas = function () {
        var a = { posision: 1 };
        var b = { posision: 2 };
        var c = { posision: 3 };
        var d = { posision: 4 };
        var e = { posision: 5 };
        // this.mCitas.push({a,b,c,d,e});
        // console.log(this.mCitas)
        var posisiones = [a, b, c, d, e];
        for (var i = 0; i < posisiones.length; i++) {
            var pos = posisiones[i].posision;
            this.mCitas.push({ pos: pos });
        }
        this.posisionMaxCitas = this.editar.max_citas_ves;
        this.posisionMaxCitas = parseInt(this.posisionMaxCitas) - 1;
        this.maxCitas = this.posisionMaxCitas;
    };
    PublicarServicioPage.prototype.posisionDpt = function () {
        var _this = this;
        for (var i = 0; i < this.dptms.length; i++) {
            var posision = this.dptms[i].nombre;
            if (this.editar.depar === posision) {
                this.posisionDtp = i;
                var departamento = this.dptms[i].id_departamento;
            }
        }
        this.api.getMunicipio(departamento).subscribe(function (data) {
            _this.mncps = data;
            // console.log(this.mncps);
            for (var i = 0; i < _this.mncps.length; i++) {
                var posision = _this.mncps[i].id_municipio;
                if (posision === _this.editar.id_muni) {
                    _this.posisionMnp = i;
                    _this.mncpSelect = _this.editar.id_muni;
                }
            }
            // console.log(this.mncpSelect);
        }, function (err) {
        });
    };
    PublicarServicioPage.prototype.posisionCategoria = function () {
        for (var i = 0; i < this.ctgas.length; i++) {
            var posision = this.ctgas[i].id_categoria;
            if (posision === this.editar.id_cate) {
                this.posisionCtga = i;
                this.cateSelect = this.editar.id_cate;
            }
        }
    };
    PublicarServicioPage.prototype.editarServices = function () {
        var _this = this;
        var formulario = { "id": this.editar.id_servicios, "nombre": this.datosEdit.value.nombre, "precio": this.datosEdit.value.precio, "direccion": this.datosEdit.value.direccion,
            "descuento": this.datosEdit.value.descuento, "duracion": this.datosEdit.value.duracion, "id_mncp": this.mncpSelect, "id_ctga": this.cateSelect,
            "video": this.datosEdit.value.video, "max_citas": this.maxCitas, "descripcion": this.datosEdit.value.descripcion };
        console.log(formulario);
        // this.loading = this.loadingCtrl.create({
        //   spinner: 'hide',
        //   content: "Espera un momento<br>estamos procesando la información... ",
        // });
        // this.loading.present();
        this.load = true;
        this.api.editInfoServicio(formulario).then(function (res) {
            if (res === true) {
                // this.loading.dismiss();
                _this.load = false;
                _this.presentToast("Informacion actualizada con exito");
            }
            else {
                // this.loading.dismiss();
                _this.load = false;
                _this.presentToast("Error al actualizar la informacion");
            }
        }, function (err) {
            // this.loading.dismiss();
            _this.load = false;
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
            _this.presentToast("Error en la conexion, intentalo mas tarde");
        });
    };
    PublicarServicioPage.prototype.infoEditar = function () {
        var _this = this;
        this.api.getInfoEditar(this.editar).subscribe(function (data) {
            _this.inf = data;
            _this.validacionEditar();
        });
    };
    PublicarServicioPage.prototype.ionViewDidLoad = function () {
    };
    PublicarServicioPage.prototype.ionViewDidLeave = function () {
        var overlayView = this.app._overlayPortal._views[0];
        if (overlayView && overlayView.dismiss) {
            overlayView.dismiss(); // cerrará los modales, alertas, etc
            this.imgs = {};
        }
    };
    PublicarServicioPage.prototype.obtenerImgs = function () {
        var _this = this;
        // this.loading = this.loadingCtrl.create({
        //   spinner: 'hide',
        //   content: "Espera un momento<br>estamos cargando información... ",
        // });
        // this.loading.present();
        this.load = true;
        this.api.getFotosServicio(this.editar.id_servicios).subscribe(function (res) {
            _this.imgs = res;
            // 
            _this.load = false;
            // console.log(this.imgs);
        }, function (er) {
            // 
            _this.load = false;
            _this.presentToast("Error en la conexión, intentalo más tarde.");
        });
    };
    PublicarServicioPage.prototype.diasEdit = function () {
        // console.log(this.horarios);
        for (var i_1 = 0; i_1 < this.horarios.length; i_1++) {
            var dias = this.horarios[i_1].dias;
            // console.log(dias);
            for (var j_1 = 0; j_1 < dias.length; j_1++) {
                var dia = dias[j_1].dia;
                // console.log(dia);
                this.dsEdit.push({ nombre: dia, disponible: false });
            }
        }
        for (var i = 0; i < this.dsEdit.length; i++) {
            for (var j = 0; j < this.ds.length; j++) {
                var d = [];
                d = this.ds[j].dia.nombre;
                var da = this.ds[j].dia.disponible;
                if (this.dsEdit[i].nombre === d) {
                    if (this.ds[j].dia.nombre === d) {
                        // console.log("POR AQUII")
                        var h = this.ds[j].dia.disponible = false;
                        // console.log(h);
                    }
                }
            }
        }
        console.log(this.ds);
    };
    PublicarServicioPage.prototype.agregarHorarioEdit = function () {
        var _this = this;
        var h1 = { id: this.editar.id_servicios, m_de: this.mdesde, m_hasta: this.mhasta, t_de: this.tdesde, t_hasta: this.thasta, semana: this.dias };
        var h2 = { id: this.editar.id_servicios, m_de: this.mdesde2, m_hasta: this.mhasta2, t_de: this.tdesde2, t_hasta: this.thasta2, semana: this.dias2 };
        var h3 = { id: this.editar.id_servicios, m_de: this.mdesde3, m_hasta: this.mhasta3, t_de: this.tdesde3, t_hasta: this.thasta3, semana: this.dias3 };
        var horario = [h1, h2, h3];
        var h4 = { horario: horario };
        var horarios = [h4];
        var info5 = { horarios: horarios };
        console.log(info5);
        this.api.postEditarHorario(info5).then(function (res) {
            console.log(res);
        }, function (err) {
            _this.presentToast("Error en la conexión, intentalo más tarde.");
        });
    };
    PublicarServicioPage.prototype.guardarImgs = function () {
        var _this = this;
        var longitud = this.imgs.length + this.imagenes;
        if (longitud == 0) {
            this.presentToast("Debes elegir al menos una imagen.");
        }
        else {
            // this.loading = this.loadingCtrl.create({
            //   spinner: 'hide',
            //   content: "Espera un momento<br>estamos guardando la información... ",
            // });
            // this.loading.present();
            this.load = true;
            var datos = { id: this.editar.id_servicios, imagenes: this.imagenes };
            this.api.enviarFotosEditServicio(datos).then(function (res) {
                _this.presentToast("Imagenes guardas con exito");
                // this.loading.dismiss();
                _this.load = false;
                console.log(res);
            }, function (err) {
                // this.loading.dismiss();
                _this.load = false;
                _this.presentToast("Error en la conexión, intentalo más tarde.");
            });
        }
    };
    PublicarServicioPage.prototype.days = function () {
        var lunes = { nombre: "lunes", disponible: true };
        var martes = { nombre: "martes", disponible: true };
        var miercoles = { nombre: "miércoles", disponible: true };
        var jueves = { nombre: "jueves", disponible: true };
        var viernes = { nombre: "viernes", disponible: true };
        var sabado = { nombre: "sábado", disponible: true };
        var domingo = { nombre: "domingo", disponible: true };
        var days = [lunes, martes, miercoles, jueves, viernes, sabado, domingo];
        for (var i = 0; i < days.length; i++) {
            var dia = days[i];
            this.ds.push({ dia: dia });
        }
        // console.log(this.ds);
    };
    PublicarServicioPage.prototype.validacionEditar = function () {
        this.datosEdit = this.formBuilder.group({
            nombre: [this.editar.nombre, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(100)]],
            duracion: [this.editar.duracion, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].max(60), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].min(15)]],
            precio: [this.editar.precio, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].min(0), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*')]],
            descuento: [this.editar.descuento, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].max(100), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].min(0), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*')]],
            video: [this.editar.video],
            direccion: [this.editar.direccion, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(60)]],
            descripcion: [this.editar.descripcion, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(40)]],
        });
    };
    PublicarServicioPage.prototype.validacionAgregar = function () {
        this.datos = this.formBuilder.group({
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(60)]],
            duracion: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].max(60), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].min(15), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*')]],
            precio: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].min(0), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*')]],
            descuento: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].max(100), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].min(0), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*')]],
            video: [''],
            direccion: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(60)]],
            descripcion: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(40)]],
            check: [false, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].requiredTrue]],
        });
    };
    PublicarServicioPage.prototype.openGalery = function () {
        var _this = this;
        // this.loading = this.loadingCtrl.create({
        //   spinner: 'hide',
        //   content: "Espera un momento<br>estamos cargando el recorte... ",
        // });
        // this.loading.present();
        this.load = true;
        var options = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            allowEdit: false,
            correctOrientation: true,
            //destinationType: this.camera.DestinationType.DATA_URL,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            quality: 75,
            saveToPhotoAlbum: false,
            targetWidth: 800,
            targetHeight: 800
        };
        if (this.imagenes.length < 6) {
            this.camera.getPicture(options).then(function (imageData) {
                return _this.crop.crop(imageData, { quality: 75, targetWidth: 1000, targetHeight: 1200 });
            }).then(function (croppedImagePath) {
                return _this.base64.encodeFile(croppedImagePath);
            }).then(function (base64Data) {
                // this.loading.dismiss();
                _this.imagen = base64Data;
                _this.imagen = _this.imagen.replace("*", "jpeg");
                _this.imagenes.push({ base64Image: _this.imagen });
                // this.loading.dismiss();
                _this.load = false;
            }).catch(function (err) {
                // this.loading.dismiss();
                _this.load = false;
                console.log(err);
            });
        }
    };
    PublicarServicioPage.prototype.openGaleryEdit = function () {
        var _this = this;
        // this.loading = this.loadingCtrl.create({
        //   spinner: 'hide',
        //   content: "Espera un momento<br>estamos cargando el recorte... ",
        // });
        // this.loading.present();
        this.load = true;
        var options = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            allowEdit: false,
            correctOrientation: true,
            //destinationType: this.camera.DestinationType.DATA_URL,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            quality: 75,
            saveToPhotoAlbum: false,
            targetWidth: 800,
            targetHeight: 800
        };
        var longitud = this.imgs.length;
        console.log(longitud);
        if (this.imagenes.length + longitud < 6) {
            this.camera.getPicture(options).then(function (imageData) {
                return _this.crop.crop(imageData, { quality: 75, targetWidth: 1000, targetHeight: 1200 });
            }).then(function (croppedImagePath) {
                return _this.base64.encodeFile(croppedImagePath);
            }).then(function (base64Data) {
                // this.loading.dismiss();
                _this.imagen = base64Data;
                _this.imagen = _this.imagen.replace("*", "jpeg");
                _this.imagenes.push({ base64Image: _this.imagen });
                // this.loading.dismiss();
                _this.load = false;
            }).catch(function (err) {
                // this.loading.dismiss();
                _this.load = false;
                console.log(err);
            });
        }
        else {
            this.presentToast("Maximo 6 imagenes.");
        }
    };
    PublicarServicioPage.prototype.departamentos = function () {
        var _this = this;
        this.api.getDepartamento()
            .subscribe(function (data) {
            _this.dptms = data;
            // console.log(this.dptms);
            if (_this.editar) {
                _this.posisionDpt();
            }
        }, function (error) {
            // console.log(error);
        });
    };
    PublicarServicioPage.prototype.departamentoSelect = function (selectedValue) {
        // console.log(selectedValue);
        // this.loading = this.loadingCtrl.create({
        //   spinner: 'hide',
        //   content: "Espera un momento<br>estamos cargando información... ",
        var _this = this;
        // });
        // this.loading.present();
        this.load = true;
        this.api.getMunicipio(selectedValue).subscribe(function (data) {
            _this.mncps = data;
            // this.loading.dismiss();
            _this.load = false;
            // console.log(data);
        }, function (error) {
            // this.loading.dismiss();
            _this.load = false;
            // console.log(error);
        });
    };
    PublicarServicioPage.prototype.categorias = function () {
        var _this = this;
        this.api.getCategorias()
            .subscribe(function (data) {
            _this.ctgas = data;
            // console.log(this.ctgas)
            if (_this.editar) {
                _this.posisionCategoria();
            }
        }, function (error) {
            // console.log(error);
        });
    };
    PublicarServicioPage.prototype.categoriaSelect = function (selectedValue) {
        this.cateSelect = selectedValue;
        // console.log(this.cateSelect);
    };
    PublicarServicioPage.prototype.municipioSelect = function (selectedValue) {
        this.mncpSelect = selectedValue;
        // console.log(this.mncpSelect);
    };
    PublicarServicioPage.prototype.maxCitasSelect = function (selectedValue) {
        this.maxCitas = selectedValue;
        // console.log(this.maxCitas);
    };
    PublicarServicioPage.prototype.validacionh1 = function () {
        var mdesde = parseInt(this.mdesde);
        var mhasta = parseInt(this.mhasta);
        var tdesde = parseInt(this.tdesde);
        var thasta = parseInt(this.thasta);
        // console.log(this.dias);
        if (!this.dias || this.dias.length === 0) {
            this.presentToast("Por favor selecciona dias en el horario 1");
        }
        else if ((!mhasta || !mdesde) && (!thasta || !tdesde)) {
            this.presentToast("Seleciona horas de atención en el horario 1");
        }
        else if (mhasta < mdesde || thasta < tdesde) {
            this.presentToast("La hora de la inicio es mayor a la de finalización en el horario 1");
        }
        else {
            // console.log("AQUII H!")
            this.h1 = true;
        }
    };
    PublicarServicioPage.prototype.validacionh2 = function () {
        this.h2 = false;
        var mdesde2 = parseInt(this.mdesde2);
        var mhasta2 = parseInt(this.mhasta2);
        var tdesde2 = parseInt(this.tdesde2);
        var thasta2 = parseInt(this.thasta2);
        if (!this.dias2 || this.dias2.length === 0) {
            this.presentToast("Por favor selecciona dias en el horario 2");
        }
        else if ((!mhasta2 || !mdesde2) && (!thasta2 || !tdesde2)) {
            this.presentToast("Seleciona horas de atención en el horario 2");
        }
        else if (mhasta2 < mdesde2 || thasta2 < tdesde2) {
            this.presentToast("La hora de la inicio es mayor a la de finalización en el horario 2");
        }
        else {
            this.h2 = true;
        }
    };
    PublicarServicioPage.prototype.validacionh3 = function () {
        var mdesde3 = parseInt(this.mdesde3);
        var mhasta3 = parseInt(this.mhasta3);
        var tdesde3 = parseInt(this.tdesde3);
        var thasta3 = parseInt(this.thasta3);
        if (this.f3 === true && (!this.dias3 || this.dias3.length === 0)) {
            this.presentToast("Por favor selecciona dias en el horario 3");
        }
        else if ((!mhasta3 || !mdesde3) && (!thasta3 || !tdesde3)) {
            this.presentToast("Seleciona horas de atención en el horario 3");
        }
        else if (mhasta3 < mdesde3 || thasta3 < tdesde3) {
            this.presentToast("La hora de la inicio es mayor a la de finalización en el horario 3");
        }
        else {
            this.h3 = true;
        }
    };
    PublicarServicioPage.prototype.disponibilidadH2 = function () {
        // 
        this.validacionh1();
        if (this.h1 === true) {
            var l = this.ds[0].dia.disponible;
            var m = this.ds[1].dia.disponible;
            var mi = this.ds[2].dia.disponible;
            var j = this.ds[3].dia.disponible;
            var v = this.ds[4].dia.disponible;
            var s = this.ds[5].dia.disponible;
            var d = this.ds[6].dia.disponible;
            if (l === false && m === false && mi === false && j === false && v === false && s === false && d === false) {
                this.dispoh2 = false;
            }
            else {
                this.dispoh2 = true;
            }
        }
        if (this.dispoh2 === false) {
            this.presentToast("Ya no hay dias disponibles para el horario 2");
            for (var r = 0; r < this.dias.length; r++) {
                for (var t = 0; t < this.ds.length; t++) {
                    var d = [];
                    d = this.ds[t].dia.nombre;
                    var da = this.ds[t].dia.disponible;
                    if (this.dias[r] === d) {
                        if (this.ds[t].dia.nombre === d) {
                            var k = this.ds[t].dia.disponible = true;
                        }
                    }
                }
            }
        }
    };
    PublicarServicioPage.prototype.disponibilidadH3 = function () {
        var l = this.ds[0].dia.disponible;
        var m = this.ds[1].dia.disponible;
        var mi = this.ds[2].dia.disponible;
        var j = this.ds[3].dia.disponible;
        var v = this.ds[4].dia.disponible;
        var s = this.ds[5].dia.disponible;
        var d = this.ds[6].dia.disponible;
        if (l === false && m === false && mi === false && j === false && v === false && s === false && d === false) {
            this.dispoh3 = false;
        }
        else {
            this.dispoh3 = true;
        }
        if (this.dispoh3 === false) {
            this.presentToast("Ya no hay dias disponibles para el horario 3");
            for (var r = 0; r < this.dias2.length; r++) {
                for (var t = 0; t < this.ds.length; t++) {
                    var d_1 = [];
                    d_1 = this.ds[t].dia.nombre;
                    var da = this.ds[t].dia.disponible;
                    if (this.dias2[r] === d_1) {
                        if (this.ds[t].dia.nombre === d_1) {
                            var k = this.ds[t].dia.disponible = true;
                        }
                    }
                }
            }
        }
    };
    PublicarServicioPage.prototype.agregarHorario = function () {
        // console.log(this.h2);
        // console.log(this.dias2);
        // console.log(this.mdesde2);
        // console.log(this.mhasta2);
        // console.log(this.tdesde2);
        // console.log(this.thasta2);
        var agregar = true;
        switch (agregar === true) {
            case this.f2 === false:
                this.validacionh1();
                if (this.h1 === true) {
                    for (var i = 0; i < this.dias.length; i++) {
                        for (var j = 0; j < this.ds.length; j++) {
                            var d = [];
                            d = this.ds[j].dia.nombre;
                            var da = this.ds[j].dia.disponible;
                            if (this.dias[i] === d) {
                                if (this.ds[j].dia.nombre === d) {
                                    // console.log("POR AQUII")
                                    var h = this.ds[j].dia.disponible = false;
                                    // console.log(h);
                                }
                            }
                        }
                    }
                    this.disponibilidadH2();
                    if (this.dispoh2 === true) {
                        this.f2 = true;
                        this.f1d = true;
                        this.eliminar = true;
                    }
                }
                break;
            case (this.f2 === true && this.dispoh2 === true):
                this.validacionh2();
                if (this.h2 === true) {
                    for (var m = 0; m < this.dias2.length; m++) {
                        for (var n = 0; n < this.ds.length; n++) {
                            var d = [];
                            d = this.ds[n].dia.nombre;
                            var da = this.ds[n].dia.disponible;
                            if (this.dias2[m] === d) {
                                // console.log(d);
                                if (this.ds[n].dia.nombre === d) {
                                    // console.log(d);
                                    // console.log("POR AQUII")
                                    var k = this.ds[n].dia.disponible = false;
                                    // console.log(h);
                                }
                            }
                        }
                    }
                    this.disponibilidadH3();
                    if (this.dispoh3 === true) {
                        this.f3 = true;
                        this.f2d = true;
                        this.dis = false;
                    }
                }
                break;
        }
    };
    PublicarServicioPage.prototype.eliminarHorario = function () {
        var eli = true;
        console.log(this.h2);
        switch (eli === true) {
            case (this.f2 === true && this.f3 === false):
                this.dis = true;
                this.h1 = false;
                this.h2 = false;
                for (var i = 0; i < this.dias.length; i++) {
                    for (var j = 0; j < this.ds.length; j++) {
                        var d = [];
                        d = this.ds[j].dia.nombre;
                        var da = this.ds[j].dia.disponible;
                        if (this.dias[i] === d) {
                            if (this.ds[j].dia.nombre === d) {
                                var h = this.ds[j].dia.disponible = true;
                            }
                        }
                    }
                }
                this.f2 = false;
                this.f1d = false;
                this.eliminar = false;
                this.dias2 = undefined;
                this.mdesde2 = undefined;
                this.mhasta2 = undefined;
                this.tdesde2 = undefined;
                this.thasta2 = undefined;
                break;
            //     case (this.h1 === true && this.f2 === true && this.h2 === false):
            //       console.log("AQUII");
            //   this.f2d = false;
            //     this.h2 = false;
            //     for(var p = 0; p<this.dias2.length; p++){
            //       for(var o = 0;o<this.ds.length ;o++){
            //         let d = [];
            //         d = this.ds[o].dia.nombre;
            //         let  da = this.ds[o].dia.disponible;
            //         if(this.dias2[p] === d){
            //           if (this.ds[o].dia.nombre === d)
            //           {
            //             var l = this.ds[o].dia.disponible = true;
            //           }      
            //         }
            //       }
            // }
            //   break;
            case (this.f2 === true && this.f3 === true):
                this.f3 = false;
                this.f2d = false;
                this.h2 = false;
                this.dis = true;
                for (var m = 0; m < this.dias2.length; m++) {
                    for (var n = 0; n < this.ds.length; n++) {
                        var d = [];
                        d = this.ds[n].dia.nombre;
                        var da = this.ds[n].dia.disponible;
                        if (this.dias2[m] === d) {
                            if (this.ds[n].dia.nombre === d) {
                                var k = this.ds[n].dia.disponible = true;
                            }
                        }
                    }
                }
                this.dias3 = undefined;
                this.mdesde3 = undefined;
                this.mhasta3 = undefined;
                this.tdesde3 = undefined;
                this.thasta3 = undefined;
                break;
        }
    };
    PublicarServicioPage.prototype.registrar = function () {
        if (!this.editar) {
            /////////////////////////// Validaciones horarios ////////////////////////////////
            var hor = true;
            // var tbn:boolean = true;
            switch (hor === true) {
                case this.h1 === false:
                    this.validacionh1();
                    // console.log("1");
                    break;
                case (this.h1 === true && this.f2 === false && this.f3 === false):
                    // console.log("registrar");
                    this.enviar();
                    break;
                case (this.h1 === true && this.h2 === true && this.f3 === false):
                    // console.log("AQUIIIIIIII REGISTRARRRR");
                    this.enviar();
                    break;
                case (this.h1 === true && this.h2 === true && this.h3 === true):
                    // console.log("registrar");
                    this.enviar();
                    break;
                case (this.f3 === true):
                    this.validacionh3();
                    break;
                case (this.h1 === true && this.f2 === true):
                    this.validacionh2();
                    break;
            }
        }
        else {
            var formularioEdit = { "id_usuario": this.global.id_usuario, "token": this.token2, "nombre": this.datos.value.nombre, "precio": this.datos.value.precio,
                "descuento": this.datos.value.descuento, "duracion": this.datos.value.duracion, "id_mncp": this.mncpSelect, "id_ctga": this.cateSelect, "imagenes": this.imagenes,
                "video": this.datos.value.video, "max_citas": this.maxCitas, "descripcion": this.datos.value.descripcion };
            this.api.editService(formularioEdit);
        }
    };
    PublicarServicioPage.prototype.enviar = function () {
        var _this = this;
        // if(this.imagenes.length < 1){
        //    this.presentToast("Debes elegir almenos una imagen.");
        // }else 
        if (!this.medico) {
            this.presentToast("Debes elegir un medico.");
        }
        else if (!this.mncpSelect) {
            this.presentToast("Debes elegir un departamento y municipio.");
        }
        else if (!this.cateSelect) {
            this.presentToast("Debes elegir una categoria.");
        }
        else if (!this.maxCitas) {
            this.presentToast("Por favor selecciona un número maximo de citas por hora.");
            this.maxCitasCofirm = true;
        }
        else if (!this.datos.valid) {
            this.presentToast("completa los campos requeridos.");
        }
        else {
            var h1 = { m_de: this.mdesde, m_hasta: this.mhasta, t_de: this.tdesde, t_hasta: this.thasta, semana: this.dias };
            var h2 = { m_de: this.mdesde2, m_hasta: this.mhasta2, t_de: this.tdesde2, t_hasta: this.thasta2, semana: this.dias2 };
            var h3 = { m_de: this.mdesde3, m_hasta: this.mhasta3, t_de: this.tdesde3, t_hasta: this.thasta3, semana: this.dias3 };
            var horario = [h1, h2, h3];
            var h4 = { horario: horario };
            var horarios = [h4];
            var info5 = { horarios: horarios };
            var formulario = { "id_usuario": this.global.id_usuario, "token": this.token2, "nombre": this.datos.value.nombre, "precio": this.datos.value.precio, "direccion": this.datos.value.direccion,
                "descuento": this.datos.value.descuento, "duracion": this.datos.value.duracion, "id_mncp": this.mncpSelect, "id_ctga": this.cateSelect, "imagenes": this.imagenes,
                "video": this.datos.value.video, "max_citas": this.maxCitas, "descripcion": this.datos.value.descripcion, horarios: horarios, medico_id: this.medico };
            console.log(formulario);
            // this.loading = this.loadingCtrl.create({
            //   spinner: 'hide',
            //   content: "Espera un momento<br>estamos procesando la información... ",
            // });
            // this.loading.present();
            this.load = true;
            this.maxCitasCofirm = false;
            this.api.postImages(formulario).then(function (data) {
                // console.log("AQUIIIIII");
                // console.log(data);
                _this.res = data;
                _this.res = _this.res[0];
                // console.log(this.res.agregado);
                if (_this.res.agregado == true) {
                    // this.loading.dismiss();
                    _this.load = false;
                    _this.presentToast("Servicio agregado con exito.");
                    _this.navCtrl.pop();
                }
                else {
                    // this.loading.dismiss();
                    _this.load = false;
                    _this.navCtrl.pop();
                    _this.presentToast("Error al agregar el servicio.");
                }
            }, function (error) {
                // console.log("error en la conexion");
                // this.loading.dismiss();
                _this.load = false;
                _this.presentToast("Error en la conexion, intentalo más tarde o revisa tu conexión.");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
            });
        }
    };
    PublicarServicioPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 4000
        });
        toast.present();
    };
    PublicarServicioPage.prototype.borrarFoto = function (index) {
        console.log(index);
        this.imagenes.splice(index, 1);
    };
    PublicarServicioPage.prototype.borrarFotoEdit = function (index, id, ruta) {
        // console.log(index,id,ruta);
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmación',
            message: '¿Seguro que deseas eliminar esta imagen, ten encuenta que no se podra recuperar?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Aceptar',
                    handler: function () {
                        if (_this.imgs.length == 1) {
                            _this.presentToast("No se puede eliminar, El servicio debe tener al menos una imagen");
                        }
                        else {
                            _this.imgs.splice(index, 1);
                            // let body = {id:id , ruta:ruta}
                            _this.api.dltImagenServicio(id, ruta).then(function (res) {
                                console.log(res);
                            }, function (err) {
                                console.log(err);
                            });
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    PublicarServicioPage.prototype.diasF1 = function (ev) {
        this.dias = ev;
        // console.log(this.dias);
    };
    PublicarServicioPage.prototype.mdesdef1 = function (ev) {
        this.mdesde = ev;
        // console.log(this.mdesde);
    };
    PublicarServicioPage.prototype.mhastaf1 = function (ev) {
        this.mhasta = ev;
        this.validacionh1();
        // console.log(this.mhasta);
    };
    PublicarServicioPage.prototype.tdesdef1 = function (ev) {
        // console.log(ev);
        this.tdesde = ev;
    };
    PublicarServicioPage.prototype.thastaf1 = function (ev) {
        // console.log(ev);
        this.thasta = ev;
        this.validacionh1();
    };
    PublicarServicioPage.prototype.diasF2 = function (ev) {
        this.dias2 = ev;
        // console.log(this.dias2);
    };
    PublicarServicioPage.prototype.mdesdef2 = function (ev) {
        this.mdesde2 = ev;
        // console.log(this.mdesde2);
    };
    PublicarServicioPage.prototype.mhastaf2 = function (ev) {
        this.mhasta2 = ev;
        // console.log(this.mhasta2);
        this.validacionh2();
    };
    PublicarServicioPage.prototype.tdesdef2 = function (ev) {
        this.tdesde2 = ev;
    };
    PublicarServicioPage.prototype.thastaf2 = function (ev) {
        this.thasta2 = ev;
        this.validacionh2();
    };
    PublicarServicioPage.prototype.diasF3 = function (ev) {
        this.dias3 = ev;
    };
    PublicarServicioPage.prototype.mdesdef3 = function (ev) {
        this.mdesde3 = ev;
    };
    PublicarServicioPage.prototype.mhastaf3 = function (ev) {
        this.mhasta3 = ev;
        this.validacionh3();
    };
    PublicarServicioPage.prototype.tdesdef3 = function (ev) {
        this.tdesde3 = ev;
    };
    PublicarServicioPage.prototype.thastaf3 = function (ev) {
        this.thasta3 = ev;
        this.validacionh3();
    };
    PublicarServicioPage.prototype.mananaVer = function (ev) {
        if (ev.value === true) {
            this.mananaH1 = true;
        }
        else {
            this.mananaH1 = false;
            this.mdesde = null;
            this.mhasta = null;
        }
        // console.log(this.mdesde,this.mhasta);
    };
    PublicarServicioPage.prototype.tardeVer = function (ev) {
        if (ev.value === true) {
            this.tardeH1 = true;
        }
        else {
            this.tardeH1 = false;
            this.tdesde = null;
            this.thasta = null;
        }
    };
    PublicarServicioPage.prototype.mananaVerH2 = function (ev) {
        if (ev.value === true) {
            this.mananaH2 = true;
        }
        else {
            this.mananaH2 = false;
            this.mdesde2 = null;
            this.mhasta2 = null;
        }
    };
    PublicarServicioPage.prototype.tardeVerH2 = function (ev) {
        if (ev.value === true) {
            this.tardeH2 = true;
        }
        else {
            this.tardeH2 = false;
            this.tdesde2 = null;
            this.thasta2 = null;
        }
    };
    PublicarServicioPage.prototype.mananaVerH3 = function (ev) {
        if (ev.value === true) {
            this.mananaH3 = true;
        }
        else {
            this.mananaH3 = false;
            this.mdesde3 = null;
            this.mhasta3 = null;
        }
    };
    PublicarServicioPage.prototype.tardeVerH3 = function (ev) {
        if (ev.value === true) {
            this.tardeH3 = true;
        }
        else {
            this.tardeH3 = false;
            this.tdesde3 = null;
            this.thasta3 = null;
        }
    };
    PublicarServicioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-publicar-servicio',template:/*ion-inline-start:"E:\ionic\appMovil\src\pages\publicar-servicio\publicar-servicio.html"*/'<!--\n\n  Generated template for the PublicarServicioPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title *ngIf="!editar">Publicar servicio</ion-title>\n\n    <ion-title *ngIf="editar">Editar servicio</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<!-- <img src="{{ruta}}" alt="ND"> -->\n\n\n\n\n\n\n\n<!----------------------------------------FORMULARIO AGREGAR -------------------------------------------->\n\n\n\n<div *ngIf="!editar">\n\n\n\n<h2 class="h2">Selecciona imagenes</h2>\n\n<p> * Selecciona una o más imagenes para tu servicio.</p>\n\n\n\n<div id="LoadedImages" *ngIf="imagenes">\n\n  <ion-item *ngFor="let item of imagenes; let i = index">\n\n      <ion-icon name="close-circle" (click)="borrarFoto(i)"></ion-icon>\n\n      <img [src]="item.base64Image | youtube" class="imagenes">\n\n      <img *ngIf="editar" [src]="imgsEdit.ruta" class="imagenes">\n\n  </ion-item>\n\n</div>\n\n\n\n <div class="galeria">\n\n        <ion-item>\n\n          <button ion-button icon-left round block (click)="openGalery()">\n\n            <ion-icon name="image"></ion-icon>\n\n            Abrir galeria</button>\n\n        </ion-item>\n\n      </div>\n\n          \n\n      <h2 class="h2">Selecciona un medico</h2>\n\n         <p>* Seleciona el medico que atendera este servicio.</p>\n\n\n\n         <div>\n\n            <ion-item>\n\n                <ion-label>Medicos</ion-label>\n\n                <ion-select multiple="false" (ionChange)="medicoSelect($event);" cancelText="cancelar">\n\n                  <ion-option *ngFor="let m of infMedicos;let i = index" [value]="m.medico_id"  >{{m.nombre}}</ion-option>     \n\n                </ion-select>\n\n              </ion-item>\n\n           \n\n         </div>\n\n\n\n\n\n         <h2 class="h2">Horario de atención</h2>\n\n         <p>* Seleciona un horario de atención o más, según la disponibilidad del servicio.</p>\n\n         <div class="horarios">\n\n            \n\n\n\n            \n\n           <div id="f1">\n\n             <ion-card>\n\n               <ion-card-header>\n\n                 <ion-item>Horario 1</ion-item>\n\n                 </ion-card-header>\n\n               <ion-card-content>\n\n             <p>Dias</p>\n\n             <ion-item >\n\n                 <ion-label>Dias</ion-label>\n\n                  <ion-select multiple="true" (ionChange)="diasF1($event);" [disabled]="f1d" cancelText="cancelar">\n\n                    <div *ngFor="let i of ds">\n\n                        <ion-option  [disabled]="i.dia.disponible === false" [value]="i.dia.nombre" >{{i.dia.nombre}}</ion-option>\n\n                    </div>\n\n                    <!-- <ion-option value="lunes">lunes</ion-option>\n\n                      <ion-option value="martes">martes</ion-option>\n\n                      <ion-option value="miércoles">miércoles</ion-option>\n\n                      <ion-option value="jueves">jueves</ion-option>\n\n                      <ion-option value="viernes">viernes</ion-option>\n\n                      <ion-option value="sábado">sábado</ion-option>\n\n                      <ion-option value="domingo">domingo</ion-option> -->\n\n                 </ion-select>\n\n               </ion-item>\n\n           \n\n             <!-- <p id="manana">Mañana</p> -->\n\n             <ion-item>\n\n             <ion-checkbox (ionChange)="mananaVer($event);" [disabled]="f1d"></ion-checkbox>\n\n              <ion-label id="manana">Mañana</ion-label>\n\n            </ion-item>\n\n             <ion-grid *ngIf="mananaH1" >\n\n               <ion-row>\n\n                 <ion-col>\n\n                   <ion-item>\n\n                   <ion-label>Desde</ion-label>\n\n                   <ion-select (ionChange)="mdesdef1($event);" [disabled]="f1d" cancelText="cancelar">\n\n                     <ion-option value="6:00">6 a.m</ion-option>\n\n                     <ion-option value="7:00">7 a.m</ion-option>\n\n                     <ion-option value="8:00">8 a.m</ion-option>\n\n                     <ion-option value="9:00">9 a.m</ion-option>\n\n                     <ion-option value="10:00">10 a.m</ion-option>\n\n                     <ion-option value="11:00">11 a.m</ion-option>\n\n                     <ion-option value="12:00">12 a.m</ion-option>\n\n                   </ion-select>\n\n                 </ion-item>\n\n                 </ion-col>\n\n                 <ion-col>\n\n                   <ion-item>\n\n                   <ion-label>Hasta</ion-label>\n\n                   <ion-select (ionChange)="mhastaf1($event);" [disabled]="f1d" cancelText="cancelar">\n\n                    <ion-option value="6:00">6 a.m</ion-option>\n\n                    <ion-option value="7:00">7 a.m</ion-option>\n\n                    <ion-option value="8:00">8 a.m</ion-option>\n\n                    <ion-option value="9:00">9 a.m</ion-option>\n\n                    <ion-option value="10:00">10 a.m</ion-option>\n\n                    <ion-option value="11:00">11 a.m</ion-option>\n\n                    <ion-option value="12:00">12 a.m</ion-option>\n\n                 </ion-select>\n\n                </ion-item>\n\n                 </ion-col>\n\n               </ion-row>\n\n             </ion-grid>\n\n           \n\n             <ion-item>\n\n                <ion-checkbox (ionChange)="tardeVer($event);" [disabled]="f1d"></ion-checkbox>\n\n                 <ion-label id="manana">Tarde</ion-label>\n\n               </ion-item>\n\n             <ion-grid *ngIf="tardeH1">\n\n                 <ion-row>\n\n                   <ion-col>\n\n                     <ion-item>\n\n                     <ion-label>Desde</ion-label>\n\n                     <ion-select (ionChange)="tdesdef1($event);" [disabled]="f1d" cancelText="cancelar">\n\n                         <ion-option value="13:00">1 p.m</ion-option>\n\n                         <ion-option value="14:00">2 p.m</ion-option>\n\n                         <ion-option value="15:00">3 p.m</ion-option>\n\n                         <ion-option value="16:00">4 p.m</ion-option>\n\n                         <ion-option value="17:00">5 p.m</ion-option>\n\n                         <ion-option value="18:00">6 p.m</ion-option>\n\n                         <ion-option value="19:00">7 p.m</ion-option>\n\n                     </ion-select>\n\n                   </ion-item>\n\n                   </ion-col>\n\n                   <ion-col>\n\n                     <ion-item>\n\n                     <ion-label>Hasta</ion-label>\n\n                  <ion-select (ionChange)="thastaf1($event);" [disabled]="f1d" cancelText="cancelar">\n\n                    <ion-option value="13:00">1 p.m</ion-option>\n\n                    <ion-option value="14:00">2 p.m</ion-option>\n\n                    <ion-option value="15:00">3 p.m</ion-option>\n\n                    <ion-option value="16:00">4 p.m</ion-option>\n\n                    <ion-option value="17:00">5 p.m</ion-option>\n\n                    <ion-option value="18:00">6 p.m</ion-option>\n\n                    <ion-option value="19:00">7 p.m</ion-option>\n\n                   </ion-select>\n\n                  </ion-item>\n\n                   </ion-col>\n\n                 </ion-row>\n\n               </ion-grid>\n\n             </ion-card-content>\n\n             </ion-card>\n\n         </div>\n\n\n\n\n\n       \n\n         <div id="f2" *ngIf="f2">\n\n             <ion-card>\n\n                 <ion-card-header>\n\n                   <ion-item>Horario 2</ion-item>\n\n                   </ion-card-header>\n\n                 <ion-card-content>\n\n             <p>Dias</p>\n\n             <ion-item>\n\n                 <ion-label>Dias</ion-label>\n\n                  <ion-select multiple="true" (ionChange)="diasF2($event);" [disabled]="f2d" cancelText="cancelar">\n\n                      <div *ngFor="let i of ds">\n\n                          <ion-option  [disabled]="i.dia.disponible === false" [value]="i.dia.nombre" >{{i.dia.nombre}}</ion-option>\n\n                      </div>\n\n                 </ion-select>\n\n               </ion-item>\n\n           \n\n               <ion-item>\n\n                  <ion-checkbox (ionChange)="mananaVerH2($event);" [disabled]="f2d"></ion-checkbox>\n\n                   <ion-label id="manana">Mañana</ion-label>\n\n                 </ion-item>\n\n             <ion-grid *ngIf="mananaH2">\n\n               <ion-row>\n\n                 <ion-col>\n\n                   <ion-item>\n\n                   <ion-label>Desde</ion-label>\n\n                   <ion-select (ionChange)="mdesdef2($event);" [disabled]="f2d" cancelText="cancelar">\n\n                    <ion-option value="6:00">6 a.m</ion-option>\n\n                    <ion-option value="7:00">7 a.m</ion-option>\n\n                    <ion-option value="8:00">8 a.m</ion-option>\n\n                    <ion-option value="9:00">9 a.m</ion-option>\n\n                    <ion-option value="10:00">10 a.m</ion-option>\n\n                    <ion-option value="11:00">11 a.m</ion-option>\n\n                    <ion-option value="12:00">12 a.m</ion-option>\n\n                   </ion-select>\n\n                 </ion-item>\n\n                 </ion-col>\n\n                 <ion-col>\n\n                   <ion-item>\n\n                   <ion-label>Hasta</ion-label>\n\n                <ion-select (ionChange)="mhastaf2($event);" [disabled]="f2d" cancelText="cancelar">\n\n                  <ion-option value="6:00">6 a.m</ion-option>\n\n                  <ion-option value="7:00">7 a.m</ion-option>\n\n                  <ion-option value="8:00">8 a.m</ion-option>\n\n                  <ion-option value="9:00">9 a.m</ion-option>\n\n                  <ion-option value="10:00">10 a.m</ion-option>\n\n                  <ion-option value="11:00">11 a.m</ion-option>\n\n                  <ion-option value="12:00">12 a.m</ion-option>\n\n                 </ion-select>\n\n                </ion-item>\n\n                 </ion-col>\n\n               </ion-row>\n\n             </ion-grid>\n\n             <ion-item>\n\n                <ion-checkbox (ionChange)="tardeVerH2($event);" [disabled]="f2d"></ion-checkbox>\n\n                 <ion-label id="manana">Tarde</ion-label>\n\n               </ion-item>\n\n             <ion-grid *ngIf="tardeH2">\n\n                 <ion-row>\n\n                   <ion-col>\n\n                     <ion-item>\n\n                     <ion-label>Desde</ion-label>\n\n                     <ion-select (ionChange)="tdesdef2($event);" [disabled]="f2d" cancelText="cancelar">\n\n                      <ion-option value="13:00">1 p.m</ion-option>\n\n                      <ion-option value="14:00">2 p.m</ion-option>\n\n                      <ion-option value="15:00">3 p.m</ion-option>\n\n                      <ion-option value="16:00">4 p.m</ion-option>\n\n                      <ion-option value="17:00">5 p.m</ion-option>\n\n                      <ion-option value="18:00">6 p.m</ion-option>\n\n                      <ion-option value="19:00">7 p.m</ion-option>\n\n                     </ion-select>\n\n                   </ion-item>\n\n                   </ion-col>\n\n                   <ion-col>\n\n                     <ion-item>\n\n                     <ion-label>Hasta</ion-label>\n\n                  <ion-select (ionChange)="thastaf2($event);" [disabled]="f2d" cancelText="cancelar">\n\n                    <ion-option value="13:00">1 p.m</ion-option>\n\n                    <ion-option value="14:00">2 p.m</ion-option>\n\n                    <ion-option value="15:00">3 p.m</ion-option>\n\n                    <ion-option value="16:00">4 p.m</ion-option>\n\n                    <ion-option value="17:00">5 p.m</ion-option>\n\n                    <ion-option value="18:00">6 p.m</ion-option>\n\n                    <ion-option value="19:00">7 p.m</ion-option>\n\n                   </ion-select>\n\n                  </ion-item>\n\n                   </ion-col>\n\n                 </ion-row>\n\n               </ion-grid>\n\n               </ion-card-content>\n\n               </ion-card>\n\n             </div>\n\n       \n\n       \n\n             <div id="f3" *ngIf="f3">\n\n                 <ion-card>\n\n                     <ion-card-header>\n\n                       <ion-item>Horario 3</ion-item>\n\n                       </ion-card-header>\n\n                     <ion-card-content>\n\n                 <p>Dias</p>\n\n                 <ion-item>\n\n                     <ion-label>Dias</ion-label>\n\n                      <ion-select multiple="true" (ionChange)="diasF3($event);" cancelText="cancelar">\n\n                          <div *ngFor="let i of ds">\n\n                              <ion-option  [disabled]="i.dia.disponible === false" [value]="i.dia.nombre" >{{i.dia.nombre}}</ion-option>\n\n                          </div>\n\n                     </ion-select>\n\n                   </ion-item>\n\n               \n\n                   <ion-item>\n\n                      <ion-checkbox (ionChange)="mananaVerH3($event);" [disabled]="f3d"></ion-checkbox>\n\n                       <ion-label id="manana">Mañana</ion-label>\n\n                     </ion-item>\n\n                 <ion-grid *ngIf="mananaH3">\n\n                   <ion-row>\n\n                     <ion-col>\n\n                       <ion-item>\n\n                       <ion-label>Desde</ion-label>\n\n                       <ion-select (ionChange)="mdesdef3($event);" cancelText="cancelar">\n\n                        <ion-option value="6:00">6 a.m</ion-option>\n\n                        <ion-option value="7:00">7 a.m</ion-option>\n\n                        <ion-option value="8:00">8 a.m</ion-option>\n\n                        <ion-option value="9:00">9 a.m</ion-option>\n\n                        <ion-option value="10:00">10 a.m</ion-option>\n\n                        <ion-option value="11:00">11 a.m</ion-option>\n\n                        <ion-option value="12:00">12 a.m</ion-option>\n\n                       </ion-select>\n\n                     </ion-item>\n\n                     </ion-col>\n\n                     <ion-col>\n\n                       <ion-item>\n\n                       <ion-label>Hasta</ion-label>\n\n                    <ion-select (ionChange)="mhastaf3($event);" cancelText="cancelar">\n\n                      <ion-option value="6:00">6 a.m</ion-option>\n\n                      <ion-option value="7:00">7 a.m</ion-option>\n\n                      <ion-option value="8:00">8 a.m</ion-option>\n\n                      <ion-option value="9:00">9 a.m</ion-option>\n\n                      <ion-option value="10:00">10 a.m</ion-option>\n\n                      <ion-option value="11:00">11 a.m</ion-option>\n\n                      <ion-option value="12:00">12 a.m</ion-option>\n\n                     </ion-select>\n\n                    </ion-item>\n\n                     </ion-col>\n\n                   </ion-row>\n\n                 </ion-grid>\n\n                 <ion-item>\n\n                    <ion-checkbox (ionChange)="tardeVerH3($event);" [disabled]="f3d"></ion-checkbox>\n\n                     <ion-label id="manana">Tarde</ion-label>\n\n                   </ion-item>\n\n                 <ion-grid *ngIf="tardeH3">\n\n                     <ion-row>\n\n                       <ion-col>\n\n                         <ion-item>\n\n                         <ion-label>Desde</ion-label>\n\n                         <ion-select (ionChange)="tdesdef3($event);" cancelText="cancelar">\n\n                          <ion-option value="13:00">1 p.m</ion-option>\n\n                          <ion-option value="14:00">2 p.m</ion-option>\n\n                          <ion-option value="15:00">3 p.m</ion-option>\n\n                          <ion-option value="16:00">4 p.m</ion-option>\n\n                          <ion-option value="17:00">5 p.m</ion-option>\n\n                          <ion-option value="18:00">6 p.m</ion-option>\n\n                          <ion-option value="19:00">7 p.m</ion-option>  \n\n                         </ion-select>\n\n                       </ion-item>\n\n                       </ion-col>\n\n                       <ion-col>\n\n                         <ion-item>\n\n                         <ion-label>Hasta</ion-label>\n\n                      <ion-select (ionChange)="thastaf3($event);" cancelText="cancelar">\n\n                        <ion-option value="13:00">1 p.m</ion-option>\n\n                        <ion-option value="14:00">2 p.m</ion-option>\n\n                        <ion-option value="15:00">3 p.m</ion-option>\n\n                        <ion-option value="16:00">4 p.m</ion-option>\n\n                        <ion-option value="17:00">5 p.m</ion-option>\n\n                        <ion-option value="18:00">6 p.m</ion-option>\n\n                        <ion-option value="19:00">7 p.m</ion-option>\n\n                       </ion-select>\n\n                      </ion-item>\n\n                       </ion-col>\n\n                     </ion-row>\n\n                   </ion-grid>\n\n                   </ion-card-content>\n\n                   </ion-card>\n\n                 </div>\n\n       <ion-item>\n\n         <button ion-button round block icon-left (click)="agregarHorario()" [disabled]="!dis">\n\n           <ion-icon name="add"></ion-icon>\n\n           Agregar otro horario</button>\n\n           <button *ngIf="eliminar" ion-button round block icon-left (click)="eliminarHorario()" color="danger">\n\n            <ion-icon name="close"></ion-icon>\n\n            Eliminar Horario</button>\n\n       </ion-item>\n\n      \n\n        \n\n     \n\n           \n\n         </div>\n\n\n\n  <form [formGroup]="datos" (ngSubmit)="registrar()"  novalidate>\n\n \n\n    <div class="info">\n\n        <h2>¿Donde vas a prestar tu servicio?</h2>\n\n        <ion-item>\n\n            <ion-label>Departamento</ion-label>\n\n            <ion-select multiple="false" (ionChange)="departamentoSelect($event);" cancelText="cancelar">\n\n              <ion-option *ngFor="let dpt of dptms;let i = index" [value]="dpt.id_departamento"  >{{dpt.nombre}}</ion-option>     \n\n            </ion-select>\n\n          </ion-item>\n\n          \n\n           <ion-item>\n\n            <ion-label>Municipio</ion-label>\n\n            <ion-select multiple="false" (ionChange)="municipioSelect($event);" cancelText="cancelar">\n\n                <ion-option *ngFor="let mnp of mncps;let i = index" [value]="mnp.id_municipio"  >{{mnp.nombre}}</ion-option>\n\n              \n\n            </ion-select>\n\n          </ion-item>\n\n\n\n         \n\n      </div>\n\n\n\n    <div class="info">\n\n        <h2>Cuentanos más !</h2>\n\n        <ion-item>\n\n          <ion-label>Categoria</ion-label>\n\n          <ion-select multiple="false" (ionChange)="categoriaSelect($event);" class="selectCategoria" cancelText="cancelar">\n\n            <ion-option *ngFor="let cate of ctgas;let i = index" [value]="cate.id_categoria"  >{{cate.nombre}}</ion-option>     \n\n          </ion-select>\n\n        </ion-item>\n\n          <!-- <ion-item>\n\n            <input type="text" formControlName="id_usr">\n\n          </ion-item> -->\n\n          <ion-item>\n\n              <ion-label floating>\n\n                \n\n                Nombre servicio</ion-label>\n\n              <ion-input type="text" formControlName="nombre"></ion-input>\n\n             \n\n            </ion-item>\n\n            <ion-item *ngIf="datos.get(\'nombre\').errors && datos.get(\'nombre\').dirty">\n\n              <p color="danger" ion-text *ngIf="datos.get(\'nombre\').hasError(\'required\')">* El campo es requerido</p>\n\n              <p color="danger" ion-text *ngIf="datos.get(\'nombre\').hasError(\'minlength\')">Cantidad minima de caracteres (4)</p>\n\n              <p color="danger" ion-text *ngIf="datos.get(\'nombre\').hasError(\'maxlength\')">Cantidad maxima de caracteres (60)</p>\n\n            </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>\n\n              Duracion aprox. cita en Mins.</ion-label>\n\n            <ion-input type="number" formControlName="duracion"></ion-input>\n\n          </ion-item>\n\n          \n\n          <ion-item *ngIf="datos.get(\'duracion\').errors && datos.get(\'duracion\').dirty">\n\n            <p color="danger" ion-text *ngIf="datos.get(\'duracion\').hasError(\'required\')">* El campo es requerido</p>\n\n            <p color="danger" ion-text *ngIf="datos.get(\'duracion\').hasError(\'max\')">Duración maxima en minutos (60)</p>\n\n            <p color="danger" ion-text *ngIf="datos.get(\'duracion\').hasError(\'min\')">Duración minima en minutos (15)</p>\n\n            <p color="danger" ion-text *ngIf="datos.get(\'duracion\').hasError(\'pattern\')">* El campo solo acepta numeros</p>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label>Max citas / hora, es el número maximo de citas que puedes atender en una hora</ion-label>\n\n            <ion-select multiple="false" (ionChange)="maxCitasSelect($event);" cancelText="cancelar">\n\n              \n\n                <ion-option value="1">1</ion-option>\n\n                <ion-option value="2">2</ion-option>\n\n                <ion-option value="3">3</ion-option>\n\n                <ion-option value="4">4</ion-option>\n\n                <ion-option value="5">5</ion-option>\n\n              \n\n            </ion-select>\n\n          </ion-item>\n\n          <ion-item *ngIf="maxCitasCofirm">\n\n            <p  style="color:red">* Este campo es requerido</p>\n\n          </ion-item>\n\n          \n\n          <ion-item>\n\n              <ion-label floating>Precio a particulares</ion-label>\n\n              <ion-input type="number" formControlName="precio"></ion-input>\n\n            </ion-item>\n\n            <ion-item *ngIf="datos.get(\'precio\').errors && datos.get(\'precio\').dirty">\n\n              <p color="danger" ion-text *ngIf="datos.get(\'precio\').hasError(\'required\')">* El campo es requerido</p>\n\n              <p color="danger" ion-text *ngIf="datos.get(\'precio\').hasError(\'min\')">Cantidad minima ($0)</p>\n\n              <p color="danger" ion-text *ngIf="datos.get(\'precio\').hasError(\'pattern\')">* El campo solo acepta numeros</p>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label floating>Dirección</ion-label>\n\n              <ion-input type="text" formControlName="direccion"></ion-input>\n\n            </ion-item>\n\n            <ion-item *ngIf="datos.get(\'direccion\').errors && datos.get(\'direccion\').dirty">\n\n              <p color="danger" ion-text *ngIf="datos.get(\'direccion\').hasError(\'required\')">* El campo es requerido</p>\n\n              <p color="danger" ion-text *ngIf="datos.get(\'direccion\').hasError(\'maxlength\')">Cantidad maxima de caracteres (60)</p>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label floating>Descuento prevenir, de 10 a 100 sin (%)</ion-label>\n\n                <ion-input type="number" formControlName="descuento"></ion-input>\n\n              </ion-item>\n\n              <ion-item *ngIf="datos.get(\'descuento\').errors && datos.get(\'descuento\').dirty">\n\n                <p color="danger" ion-text *ngIf="datos.get(\'descuento\').hasError(\'min\')">Cantidad minima (0)</p>\n\n                <p color="danger" ion-text *ngIf="datos.get(\'descuento\').hasError(\'max\')">Cantidad maxima (100)</p>\n\n                <p color="danger" ion-text *ngIf="datos.get(\'descuento\').hasError(\'pattern\')">* El campo solo acepta numeros</p>\n\n              </ion-item>\n\n              <ion-item>\n\n                <ion-label floating>link video - www.youtube.com</ion-label>\n\n                <ion-input type="text" formControlName="video"></ion-input>\n\n              </ion-item>\n\n              <ion-item>\n\n                  <ion-label floating>Descripción del servicio</ion-label>\n\n                  <ion-textarea class="txt_area" formControlName="descripcion"></ion-textarea>\n\n              </ion-item>\n\n                <ion-item *ngIf="datos.get(\'descripcion\').errors && datos.get(\'descripcion\').dirty">\n\n                    <p color="danger" ion-text *ngIf="datos.get(\'descripcion\').hasError(\'required\')">* El campo es requerido</p>\n\n                  <p color="danger" ion-text *ngIf="datos.get(\'descripcion\').hasError(\'minlength\')">Cantidad minima caracteres (40)</p>\n\n                </ion-item>\n\n      </div>\n\n     \n\n      <div class="logo">\n\n      <ion-item>\n\n        <img src="/assets/imgs/logo-grande-negro.png" alt="">\n\n      </ion-item>\n\n    </div>\n\n      <ion-item ion-col col-12>\n\n          <ion-label>Acepto terminos y condiciones</ion-label>\n\n          <ion-checkbox required formControlName="check"></ion-checkbox>\n\n        </ion-item>\n\n    \n\n        <!-- [disabled]="!this.datos.valid" -->\n\n      <ion-item>\n\n          <button *ngIf="!editar" ion-button icon-left block round  [disabled]="!this.datos.valid">\n\n            <ion-icon name="send"></ion-icon>\n\n            Registrar servicio\n\n          </button>\n\n          <button *ngIf="editar" ion-button icon-left block round [disabled]="!this.datos.valid">\n\n            <ion-icon name="send"></ion-icon>\n\n           Editar servicio\n\n          </button>\n\n         \n\n        </ion-item>\n\n  </form>\n\n\n\n</div>\n\n\n\n  <!---------------------------------------- FORMULARIO EDITAR -------------------------------------------->\n\n\n\n  <div *ngIf="editar">\n\n\n\n  <ion-segment [(ngModel)]="mymodel">\n\n      <ion-segment-button class="segment"value="segment1">\n\n        <p class="p">Información</p> \n\n      </ion-segment-button>\n\n      <!-- <ion-segment-button  class="segment" value="segment2">\n\n      <p class="p">Horarios</p> \n\n      </ion-segment-button> -->\n\n      <ion-segment-button  class="segment" value="segment2">\n\n          <p class="p">Imagenes</p> \n\n      </ion-segment-button>\n\n  </ion-segment>\n\n  \n\n  <div [ngSwitch]="mymodel">\n\n  \n\n    <div *ngSwitchCase="\'segment1\'" >\n\n    \n\n        <form [formGroup]="datosEdit" (ngSubmit)="editarServices()"  novalidate>\n\n \n\n            <div class="info2">\n\n                <h2>¿Donde vas a prestar tu servicio?</h2>\n\n                <ion-item>\n\n                    <ion-label>Departamento</ion-label>\n\n                    <ion-select multiple="false" (ionChange)="departamentoSelect($event);" cancelText="cancelar">\n\n                      <ion-option *ngFor="let dpt of dptms;let i = index" [selected]="i == posisionDtp" [value]="dpt.id_departamento"  >{{dpt.nombre}}</ion-option>     \n\n                    </ion-select>\n\n                  </ion-item>\n\n                  \n\n                   <ion-item>\n\n                    <ion-label>Municipio</ion-label>\n\n                    <ion-select multiple="false" (ionChange)="municipioSelect($event);" cancelText="cancelar">\n\n                        <ion-option *ngFor="let mnp of mncps;let i = index" [selected]="i == posisionMnp" [value]="mnp.id_municipio"  >{{mnp.nombre}}</ion-option>\n\n                      \n\n                    </ion-select>\n\n                  </ion-item>\n\n        \n\n                 \n\n              </div>\n\n        \n\n            <div class="info">\n\n                <h2>Cuentanos más !</h2>\n\n                <ion-item>\n\n                  <ion-label>Categoria</ion-label>\n\n                  <ion-select multiple="false" (ionChange)="categoriaSelect($event);" class="selectCategoria">\n\n                    <ion-option *ngFor="let cate of ctgas;let i = index" [selected]="i == posisionCtga" [value]="cate.id_categoria"  >{{cate.nombre}}</ion-option>     \n\n                  </ion-select>\n\n                </ion-item>\n\n                \n\n                  <ion-item>\n\n                      <ion-label floating>\n\n                        \n\n                        Nombre servicio</ion-label>\n\n                      <ion-input type="text" formControlName="nombre"></ion-input>\n\n                     \n\n                    </ion-item>\n\n                    <ion-item *ngIf="datosEdit.get(\'nombre\').errors && datos.get(\'nombre\').dirty">\n\n                      <p color="danger" ion-text *ngIf="datosEdit.get(\'nombre\').hasError(\'required\')">* El campo es requerido</p>\n\n                      <p color="danger" ion-text *ngIf="datosEdit.get(\'nombre\').hasError(\'minlength\')">Cantidad minima de caracteres (4)</p>\n\n                      <p color="danger" ion-text *ngIf="datosEdit.get(\'nombre\').hasError(\'maxlength\')">Cantidad maxima de caracteres (60)</p>\n\n                    </ion-item>\n\n                  <ion-item>\n\n                    <ion-label floating>\n\n                      Duracion aprox. cita en Mins.</ion-label>\n\n                    <ion-input type="number" formControlName="duracion"></ion-input>\n\n                  </ion-item>\n\n                  \n\n                  <ion-item *ngIf="datosEdit.get(\'duracion\').errors && datosEdit.get(\'duracion\').dirty">\n\n                    <p color="danger" ion-text *ngIf="datosEdit.get(\'duracion\').hasError(\'required\')">* El campo es requerido</p>\n\n                    <p color="danger" ion-text *ngIf="datosEdit.get(\'duracion\').hasError(\'max\')">Duración maxima en minutos (60)</p>\n\n                    <p color="danger" ion-text *ngIf="datosEdit.get(\'duracion\').hasError(\'min\')">Duración minima en minutos (15)</p>\n\n                    <p color="danger" ion-text *ngIf="datosEdit.get(\'duracion\').hasError(\'pattern\')">* El campo solo acepta numeros</p>\n\n                  </ion-item>\n\n\n\n                  <ion-item>\n\n                    <ion-label>Max citas / hora, es el número maximo de citas que puedes atender en una hora</ion-label>\n\n                    <ion-select multiple="false" (ionChange)="maxCitasSelect($event);">\n\n                      \n\n                      <ion-option *ngFor="let m of mCitas, let i = index" [selected]="i == posisionMaxCitas" [value]="m.pos">{{m.pos}}</ion-option>\n\n                      \n\n                    \n\n          \n\n                    </ion-select>\n\n                  </ion-item>\n\n                  <ion-item *ngIf="maxCitasCofirm">\n\n                    <p  style="color:red">* Este campo es requerido</p>\n\n                  </ion-item>\n\n                  \n\n                  <ion-item>\n\n                      <ion-label floating>Precio a particulares</ion-label>\n\n                      <ion-input type="number" formControlName="precio"></ion-input>\n\n                    </ion-item>\n\n\n\n                    <ion-item *ngIf="datosEdit.get(\'precio\').errors && datosEdit.get(\'precio\').dirty">\n\n                      <p color="danger" ion-text *ngIf="datosEdit.get(\'precio\').hasError(\'required\')">* El campo es requerido</p>\n\n                      <p color="danger" ion-text *ngIf="datosEdit.get(\'precio\').hasError(\'min\')">Cantidad minima ($0)</p>\n\n                      <p color="danger" ion-text *ngIf="datosEdit.get(\'precio\').hasError(\'pattern\')">* El campo solo acepta numeros</p>\n\n                    </ion-item>\n\n\n\n                    <ion-item>\n\n                      <ion-label floating>Dirección</ion-label>\n\n                      <ion-input type="text" formControlName="direccion"></ion-input>\n\n                    </ion-item>\n\n\n\n                    <ion-item *ngIf="datosEdit.get(\'direccion\').errors && datosEdit.get(\'direccion\').dirty">\n\n                      <p color="danger" ion-text *ngIf="datosEdit.get(\'direccion\').hasError(\'required\')">* El campo es requerido</p>\n\n                      <p color="danger" ion-text *ngIf="datosEdit.get(\'direccion\').hasError(\'maxlength\')">Cantidad maxima de caracteres (60)</p>\n\n                    </ion-item>\n\n\n\n                    <ion-item>\n\n                        <ion-label floating>Descuento prevenir, de 10 a 100 sin (%)</ion-label>\n\n                        <ion-input type="number" formControlName="descuento"></ion-input>\n\n                      </ion-item>\n\n\n\n                      <ion-item *ngIf="datosEdit.get(\'descuento\').errors && datosEdit.get(\'descuento\').dirty">\n\n                        <p color="danger" ion-text *ngIf="datosEdit.get(\'descuento\').hasError(\'min\')">Cantidad minima (0)</p>\n\n                        <p color="danger" ion-text *ngIf="datosEdit.get(\'descuento\').hasError(\'max\')">Cantidad maxima (100)</p>\n\n                        <p color="danger" ion-text *ngIf="datosEdit.get(\'descuento\').hasError(\'pattern\')">* El campo solo acepta numeros</p>\n\n                      </ion-item>\n\n\n\n                      <ion-item>\n\n                        <ion-label floating>link video - www.youtube.com</ion-label>\n\n                        <ion-input type="text" formControlName="video"></ion-input>\n\n                      </ion-item>\n\n                      <ion-item>\n\n                          <ion-label floating>Descripción del servicio</ion-label>\n\n                          <ion-textarea class="txt_area" formControlName="descripcion"></ion-textarea>\n\n                      </ion-item>\n\n\n\n                        <ion-item *ngIf="datosEdit.get(\'descripcion\').errors && datosEdit.get(\'descripcion\').dirty">\n\n                            <p color="danger" ion-text *ngIf="datosEdit.get(\'descripcion\').hasError(\'required\')">* El campo es requerido</p>\n\n                          <p color="danger" ion-text *ngIf="datosEdit.get(\'descripcion\').hasError(\'minlength\')">Cantidad minima caracteres (40)</p>\n\n                        </ion-item>\n\n              </div>\n\n\n\n              <ion-item>\n\n                  <button *ngIf="editar" ion-button icon-left block round [disabled]="!this.datosEdit.valid">\n\n                    <ion-icon name="send"></ion-icon>\n\n                   Guardar Información\n\n                  </button>\n\n                 \n\n                </ion-item>\n\n             \n\n              <div class="logo">\n\n              <ion-item>\n\n                <img src="/assets/imgs/logo-grande-negro.png" alt="">\n\n              </ion-item>\n\n            </div>\n\n             \n\n            \n\n                <!-- [disabled]="!this.datos.valid" -->\n\n              \n\n          </form>\n\n\n\n     </div>\n\n    <div *ngSwitchCase="\'segment2\'">\n\n     \n\n      <div class="galeria2">\n\n\n\n      <h2 class="h2">Selecciona imagenes</h2>\n\n      <p>* Imagenes actuales.</p>\n\n       \n\n      <div id="LoadedImages" *ngIf="imgs">\n\n        <ion-item *ngFor="let item of imgs; let i = index">\n\n\n\n            <ion-icon name="close-circle" (click)="borrarFotoEdit(i,item.id,item.ruta)"></ion-icon>\n\n            <!-- <img [src]="item.base64Image | youtube" class="imagenes"> -->\n\n            <img  [src]="url+item.ruta | youtube" class="imagenes">\n\n        </ion-item>\n\n      </div>\n\n\n\n      <p> * Selecciona nuevas imagenes para tu servicio.</p>\n\n      \n\n      <div id="LoadedImages" *ngIf="imagenes">\n\n        <ion-item *ngFor="let item of imagenes; let i = index">\n\n\n\n            <ion-icon name="close-circle" (click)="borrarFoto(i)"></ion-icon>\n\n            <img [src]="item.base64Image | youtube" class="imagenes">\n\n            <!-- <img  [src]="url+item.ruta | youtube" class="imagenes"> -->\n\n        </ion-item>\n\n      </div>\n\n      \n\n       <div class="galeria">\n\n             <ion-item>\n\n                <button ion-button icon-left round block (click)="openGaleryEdit()">\n\n                  <ion-icon name="image"></ion-icon>\n\n                  Abrir galeria</button>\n\n            \n\n                  <button ion-button icon-left round block color="secondary" (click)="guardarImgs()" \n\n                  [disabled]="imagenes.length == 0">\n\n                    <ion-icon name="add"></ion-icon>\n\n                    Guardar cambios</button>\n\n              </ion-item>\n\n                \n\n            </div>\n\n                \n\n      </div>\n\n  </div>\n\n\n\n</div>\n\n\n\n</div>\n\n</ion-content>\n\n\n\n<!-- <div *ngSwitchCase="\'segment2\'">\n\n\n\n\n\n      <div class="horariosEdit">\n\n\n\n        <ion-item>\n\n          <button ion-button color="secondary" block round icon-left (click)="agregarHorarioEdit()" [disabled]="horarios.length == 3">\n\n            <ion-icon name="add"></ion-icon>\n\n            Agregar Horario</button>\n\n        </ion-item>\n\n\n\n        <div id="f1">\n\n          <ion-card>\n\n            <ion-card-header>\n\n              <ion-item>Horario 1</ion-item>\n\n              </ion-card-header>\n\n            <ion-card-content>\n\n          <p>Dias</p>\n\n          <ion-item >\n\n              <ion-label>Dias</ion-label>\n\n               <ion-select multiple="true" (ionChange)="diasF1($event);" [disabled]="f1d">\n\n                 <div *ngFor="let i of ds">\n\n                     <ion-option  [disabled]="i.dia.disponible === false" [value]="i.dia.nombre" >{{i.dia.nombre}}</ion-option>\n\n                 </div>\n\n                  <ion-option value="lunes">lunes</ion-option>\n\n                   <ion-option value="martes">martes</ion-option>\n\n                   <ion-option value="miércoles">miércoles</ion-option>\n\n                   <ion-option value="jueves">jueves</ion-option>\n\n                   <ion-option value="viernes">viernes</ion-option>\n\n                   <ion-option value="sábado">sábado</ion-option>\n\n                   <ion-option value="domingo">domingo</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n        \n\n           <p id="manana">Mañana</p> \n\n          <ion-item>\n\n          <ion-checkbox (ionChange)="mananaVer($event);" [disabled]="f1d"></ion-checkbox>\n\n           <ion-label id="manana">Mañana</ion-label>\n\n         </ion-item>\n\n          <ion-grid *ngIf="mananaH1" >\n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-item>\n\n                <ion-label>Desde</ion-label>\n\n                <ion-select (ionChange)="mdesdef1($event);" [disabled]="f1d">\n\n                  <ion-option value="6:00">6 a.m</ion-option>\n\n                  <ion-option value="7:00">7 a.m</ion-option>\n\n                  <ion-option value="8:00">8 a.m</ion-option>\n\n                  <ion-option value="9:00">9 a.m</ion-option>\n\n                  <ion-option value="10:00">10 a.m</ion-option>\n\n                  <ion-option value="11:00">11 a.m</ion-option>\n\n                  <ion-option value="12:00">12 a.m</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n              </ion-col>\n\n              <ion-col>\n\n                <ion-item>\n\n                <ion-label>Hasta</ion-label>\n\n                <ion-select (ionChange)="mhastaf1($event);" [disabled]="f1d">\n\n                 <ion-option value="6:00">6 a.m</ion-option>\n\n                 <ion-option value="7:00">7 a.m</ion-option>\n\n                 <ion-option value="8:00">8 a.m</ion-option>\n\n                 <ion-option value="9:00">9 a.m</ion-option>\n\n                 <ion-option value="10:00">10 a.m</ion-option>\n\n                 <ion-option value="11:00">11 a.m</ion-option>\n\n                 <ion-option value="12:00">12 a.m</ion-option>\n\n              </ion-select>\n\n             </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n        \n\n          <ion-item>\n\n             <ion-checkbox (ionChange)="tardeVer($event);" [disabled]="f1d"></ion-checkbox>\n\n              <ion-label id="manana">Tarde</ion-label>\n\n            </ion-item>\n\n          <ion-grid *ngIf="tardeH1">\n\n              <ion-row>\n\n                <ion-col>\n\n                  <ion-item>\n\n                  <ion-label>Desde</ion-label>\n\n                  <ion-select (ionChange)="tdesdef1($event);" [disabled]="f1d">\n\n                      <ion-option value="13:00">1 p.m</ion-option>\n\n                      <ion-option value="14:00">2 p.m</ion-option>\n\n                      <ion-option value="15:00">3 p.m</ion-option>\n\n                      <ion-option value="16:00">4 p.m</ion-option>\n\n                      <ion-option value="17:00">5 p.m</ion-option>\n\n                      <ion-option value="18:00">6 p.m</ion-option>\n\n                      <ion-option value="19:00">7 p.m</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n                </ion-col>\n\n                <ion-col>\n\n                  <ion-item>\n\n                  <ion-label>Hasta</ion-label>\n\n               <ion-select (ionChange)="thastaf1($event);" [disabled]="f1d">\n\n                 <ion-option value="13:00">1 p.m</ion-option>\n\n                 <ion-option value="14:00">2 p.m</ion-option>\n\n                 <ion-option value="15:00">3 p.m</ion-option>\n\n                 <ion-option value="16:00">4 p.m</ion-option>\n\n                 <ion-option value="17:00">5 p.m</ion-option>\n\n                 <ion-option value="18:00">6 p.m</ion-option>\n\n                 <ion-option value="19:00">7 p.m</ion-option>\n\n                </ion-select>\n\n               </ion-item>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n          </ion-card-content>\n\n          </ion-card>\n\n      </div>\n\n\n\n\n\n\n\n          <h2>Horario(s)</h2>\n\n      <ion-card *ngFor="let h of horarios, let i = index">\n\n        \n\n        \n\n        <ion-card-header>\n\n          Horario {{i+1}}\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <p><strong>Dias :</strong></p>\n\n          <p *ngFor="let d of h.dias">{{d.dia}}</p>\n\n          <p><strong>Mañana</strong> </p>\n\n          <p> Desde : {{h.de_maniana}} a.m</p>\n\n          <p> Hasta :{{h.a_maniana}} a.m</p>\n\n          <p><strong>Tarde </strong> </p>\n\n          <p> Desde :  {{h.de_tarde}} p.m</p>\n\n          <p> Hasta :   {{h.a_tarde}} p.m</p>\n\n          <ion-item>\n\n              <button ion-button color="danger" block round icon-left (click)="eliminarHorarioEdit(h.id_horario,h.dias)"><ion-icon name="trash" ></ion-icon> eliminar</button>\n\n          </ion-item>\n\n        </ion-card-content>   \n\n      </ion-card>\n\n    </div>\n\n\n\n    </div>  -->\n\n\n\n    <div class="loading" *ngIf="load">\n\n      <img src="/assets/imgs/pulso.gif" alt="">\n\n    </div> '/*ion-inline-end:"E:\ionic\appMovil\src\pages\publicar-servicio\publicar-servicio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_5__app_global__["a" /* Global */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_crop__["a" /* Crop */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_base64__["a" /* Base64 */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicApp */]])
    ], PublicarServicioPage);
    return PublicarServicioPage;
}());

// private volver (){
//   this.platform.registerBackButtonAction(() => {
//     let alert = this.alertCtrl.create({
//       title: 'Confirmación',
//       message: '¿Seguro que deseas descartar esta publicación?',
//       buttons: [
//         {
//           text: 'Cancelar',
//           role: 'cancel',
//           handler: () => {
//             // console.log('Cancel clicked');
//           }
//         },
//         {
//           text: 'Aceptar',
//           handler: () => {
//             this.navCtrl.pop();
//           }
//         }
//       ]
//     });
//     alert.present();
// async ionViewCanLeave() {
//   const shouldLeave = await this.confirmLeave();
//   return shouldLeave;
// }
// confirmLeave(): Promise<Boolean> {
//   let resolveLeaving;
//   const canLeave = new Promise<Boolean>(resolve => resolveLeaving = resolve);
//   const alert = this.alertCtrl.create({
//     title: 'Confirmacion',
//     message: '¿Seguro que deseas descartar esta publicacion?',
//     buttons: [
//       {
//         text: 'No',
//         role: 'cancel',
//         handler: () => resolveLeaving(false)
//       },
//       {
//         text: 'Si',
//         handler: () => resolveLeaving(true)
//       }
//     ]
//   });
//   alert.present();
//   return canLeave   https://youtu.be/
// }
// openGalery(){
//   const options: CameraOptions = {
//     quality: 100,
//     destinationType: this.camera.DestinationType.DATA_URL,
//     encodingType: this.camera.EncodingType.JPEG,
//     mediaType:this.camera.MediaType.PICTURE,
//     sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
//     targetWidth:800,
//     targetHeight:800,
//     correctOrientation:true
//       // sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
//       // allowEdit: false,
//       // correctOrientation: true,
//       // //destinationType: this.camera.DestinationType.DATA_URL,
//       // destinationType: this.camera.DestinationType.FILE_URI,
//       // encodingType: this.camera.EncodingType.JPEG,
//       // mediaType: this.camera.MediaType.PICTURE,
//       // quality: 75,
//       // saveToPhotoAlbum: false,
//       // targetWidth: 800,
//       // targetHeight: 800
//   }
//   if (this.imagenes.length < 6) {
//     this.camera.getPicture(options).then((imageData)=>{
//       this.imagenes.push({base64Image : 'data:image/jpeg;base64,'+imageData});
//     },(err)=>{
//     });
//   }
// }
// eliminarHorarioEdit(id,dias){
//   console.log(id,dias);
//   let alert = this.alertCtrl.create({
//           title: 'Confirmación',
//           message: '¿Seguro que deseas eliminar este horario?',
//           buttons: [
//             {
//               text: 'Cancelar',
//               role: 'cancel',
//               handler: () => {
//                 // console.log('Cancel clicked');
//               }
//             },
//             {
//               text: 'Aceptar',
//               handler: () => {
//                   this.loading = this.loadingCtrl.create({
//                     spinner: 'hide',
//                     content: "Espera un momento<br>estamos eliminando el horario... ",
//                   });
//                   this.loading.present();
//                   this.api.dltHorarioServicio(id).then((res)=>{
//                     this.loading.dismiss();
//                     this.obtenerHorarios();
//                     if(res === true){
//                       this.presentToast("Horario eliminado con exito");
//                     }else{
//                       this.loading.dismiss();
//                       this.presentToast("Error al eliminar el horario");
//                     }
//                   },(err)=>{
//                     this.loading.dismiss();
//                     this.presentToast("Error en la conexion, intentalo mas tarde");
//                   });
//               }
//             }
//           ]
//         });
//         alert.present();
// }
// obtenerHorarios(){
//   this.loading = this.loadingCtrl.create({
//     spinner: 'hide',
//     content: "Espera un momento<br>estamos cargando información... ",
//   });
//   this.loading.present();
//   this.api.getHorariosServicio(this.editar.id_servicios).subscribe((data)=>{
//     this.horarios = data;
//     this.diasEdit();
//     this.loading.dismiss();
//   },(err)=>{
//     this.loading.dismiss();
//     this.presentToast("Error en la conexión, intentalo más tarde.");
//   });
// }
//# sourceMappingURL=publicar-servicio.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiciosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicio_servicio__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popover_filtro_popover_filtro__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_global__ = __webpack_require__(10);
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
 * Generated class for the ServiciosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServiciosPage = /** @class */ (function () {
    function ServiciosPage(navCtrl, navParams, api, popoverCtr, loadingCtrl, toastCtrl, global, platform, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.popoverCtr = popoverCtr;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.global = global;
        this.platform = platform;
        this.app = app;
        this.busqueda = "";
        this.inf = [];
        this.in = [];
        this.estrellasAmarillas = [];
        this.estrellasGrises = [];
        this.url = this.global.apiUrl;
        this.mostr();
        this.mostrar = this.navParams.get('vacio');
        this.mascota = this.navParams.get('mascota');
        // console.log(this.mascota);
        // console.log(this.mostrar);
    }
    ServiciosPage.prototype.mostr = function () {
        this.services = this.navParams.get('servicios');
        console.log(this.services);
    };
    ServiciosPage.prototype.ionViewDidLoad = function () {
        // this.servicios();
        // this.calificacion();
    };
    ServiciosPage.prototype.ionViewCanLeave = function () {
        var overlayView = this.app._overlayPortal._views[0];
        if (overlayView && overlayView.dismiss) {
            overlayView.dismiss(); // cerrará los modales, alertas, etc
        }
    };
    ServiciosPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.mostr();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.services = this.services.filter(function (servicio) {
                return (servicio.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1 || servicio.descripcion.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    ServiciosPage.prototype.cancel = function (ev) {
        this.inf = [];
        this.mostr();
    };
    ServiciosPage.prototype.goToServicio = function (servicio) {
        // console.log(this.mascota);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__servicio_servicio__["a" /* ServicioPage */], { servicio: servicio, mascota: this.mascota });
    };
    ServiciosPage.prototype.popover = function (event) {
        var _this = this;
        var popover = this.popoverCtr.create(__WEBPACK_IMPORTED_MODULE_4__popover_filtro_popover_filtro__["a" /* PopoverFiltroPage */], { mascota: this.mascota });
        popover.present({ ev: event });
        popover.onDidDismiss(function (data) {
            if (!data) {
                // console.log("No hay datos");
            }
            else {
                // this.loading = this.loadingCtrl.create({
                //       spinner: 'hide',
                //       content: "Espera un momento<br>estamos cargando información... ",
                //     });
                //     this.loading.present();
                _this.load = true;
                _this.api.getBusqueda(data.municipio, data.categoria).subscribe(function (res) {
                    var a = res[0].vacio;
                    if (a === true) {
                        _this.inf = [];
                        // this.loading.dismiss();
                        _this.load = false;
                        _this.mostrar = true;
                    }
                    else {
                        _this.mostrar = false;
                        _this.inf = [];
                        // this.loading.dismiss();
                        _this.load = false;
                        _this.services = res;
                        console.log(_this.services);
                    }
                }, function (err) {
                    _this.load = false;
                    _this.presentToast("Error en la conexión, intentalo más tarde.");
                    // console.log(err);
                });
            }
        });
    };
    ServiciosPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    ServiciosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-servicios',template:/*ion-inline-start:"E:\ionic\appMovil\src\pages\servicios\servicios.html"*/'<!--\n\n  Generated template for the ServiciosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n  	<!-- <button ion-button menuToggle>\n\n  		<ion-icon name="menu"></ion-icon>\n\n  	</button> -->\n\n    <ion-title>Servicios</ion-title>\n\n    <!-- <ion-title>{{viewTitle}}</ion-title> -->\n\n    <ion-buttons end>\n\n        <button class="btnNavbar" ion-button (click)="popover($event)">\n\n          <ion-icon name="settings"></ion-icon>\n\n          </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div>\n\n    <ion-searchbar (ionInput)="getItems($event)" (ionCancel)="cancel($event)" [ngModel]="busqueda" placeholder="¿ Que estas buscando ?"></ion-searchbar>\n\n    <!-- <ion-searchbar (ionCancel)="cancel($event)" [ngModel]="busqueda" placeholder="Buscar"></ion-searchbar> -->\n\n  </div>\n\n  <h4 class="h4" *ngIf="mostrar">No se encontraron resultados</h4>\n\n\n\n<div *ngIf="!mostrar">\n\n  <div *ngFor="let servicio of services " icon-left (click)="goToServicio(servicio)">\n\n  <ion-card >\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col>\n\n            <img [src]="url+servicio.foto" alt="" class="img">\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n      \n\n      <ion-card-content>\n\n        <ion-card-title>\n\n            {{servicio.nombre}}\n\n          </ion-card-title>\n\n          <div class="dv" >      \n\n              <h2><strong>Calificación : </strong>&nbsp; \n\n                <label *ngFor="let e of servicio.estrellasAmarillas" id="{{e.id}}" >★</label>\n\n                <label *ngFor="let e of servicio.estrellasGrises" id="{{e.id}}" >★</label></h2>\n\n          </div>\n\n          <p ><ion-icon name="thumbs-up">&nbsp;Descuento de : {{servicio.descuento}}%</ion-icon></p>\n\n          <h2><strong>Categoria :</strong>&nbsp; {{servicio.categoria}}</h2>\n\n          <br>\n\n          <p> {{ servicio.descripcion }} </p>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n</div>\n\n \n\n  <!-- <div>\n\n    <ion-list>\n\n    <button ion-item *ngFor="let servicio of inf " icon-left (click)="goToServicio(servicio)" color="white">\n\n        <ion-card>\n\n          <ion-grid>\n\n            <ion-row><ion-col>\n\n                <img [src]="servicio.foto" alt="" class="img">\n\n            </ion-col></ion-row>\n\n           \n\n            <ion-row>\n\n              <ion-card-content>\n\n            <br>\n\n            <br>\n\n            <h1>{{servicio.nombre}}</h1>\n\n            <div class="p">\n\n            <p ><ion-icon name="thumbs-up">&nbsp;Descuento de : {{servicio.descuento}}%</ion-icon></p>\n\n            <br>\n\n            <h2 >Categoria:&nbsp; {{servicio.categoria}}</h2>\n\n            <p>{{ servicio.id_servicios }}</p>\n\n            \n\n          </div>\n\n          {{ servicio.descripcion }}\n\n        </ion-card-content>\n\n        </ion-row>\n\n  \n\n        </ion-grid>\n\n          </ion-card>\n\n    </button>     \n\n    </ion-list>\n\n\n\n  </div> -->\n\n\n\n \n\n</ion-content>\n\n\n\n<div class="loading" *ngIf="load">\n\n  <img src="/assets/imgs/pulso.gif" alt="">\n\n</div> '/*ion-inline-end:"E:\ionic\appMovil\src\pages\servicios\servicios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__app_global__["a" /* Global */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicApp */]])
    ], ServiciosPage);
    return ServiciosPage;
}());

// calificacion(){
//   let calificacion:number = 4;
//   let resultado =  5  - calificacion;
//   // console.log(resultado);
//   for(let i = 0; i < calificacion ; i++){
//     let id = "amarilla";
//     this.estrellasAmarillas.push({id:id});
//   }
//   if(resultado >= 1){
//     for(let i = 0; i < resultado ; i++){
//       let id = "gris";
//       this.estrellasGrises.push({id:id});
//     }
//   }
// }
// servicios(){
//   this.loading = this.loadingCtrl.create({
//     spinner: 'hide',
//     content: "Espera un momento<br>estamos cargando información... ",
//     duration: 3000
//   });
//   this.loading.present();
//   this.api.getServicios().subscribe((data)=>{
//     this.services=data;
//     // console.log(this.services);
//     this.info();
//     this.loading.dismiss();
//   },(error)=>{
//     this.loading.dismiss();
//     this.presentToast("Error en la conexión intentalo más tarde")
//     console.log(error);
//   });
// }
// info(){
//   // console.log(this.services);
//   for(var i = 0; i < this.services.length; i ++){
//     let categoria = this.services[i].categoria;
//     let duracion = this.services[i].duracion;
//     let descuento = this.services[i].descuento;
//     let nombre = this.services[i].nombre;
//     let precio = this.services[i].precio;
//     let descripcion = this.services[i].descripcion;
//     let fot = this.services[i];
//     let id_servicios = this.services[i].id_servicios;
//     let id_provedores = this.services[i].id_provedores;
//     let precio_cliente_prevenir = this.services[i].precio_cliente_prevenir;
//     let video = this.services[i].video;
//     let fotos = this.services[i].foto;
//     let direccion = this.services[i].direccion;
//     fot = fot.foto[0];
//     fot = this.url+fot.ruta;
//     // console.log(fot.ruta);
//     this.inf.push({categoria:categoria,descuento:descuento,nombre:nombre,descripcion:descripcion,foto:fot,
//                     id_servicio:id_servicios,id_provedores:id_provedores, duracion:duracion,precio:precio,
//                     precio_cliente_prevenir:precio_cliente_prevenir, video:video, fotos:fotos , direccion:direccion });
//   }
//   console.log(this.inf);
//   this.in = this.inf;
// }
//   getItems(ev: any) {
//      this.initializeItems();
//      const val = ev.target.value;
//      if (val && val.trim() != '') {
//       this.inf = this.inf.filter((servicio) => {
//        return (servicio.nombre.toLowerCase() && servicio.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
//      }
//      );
//     }
// }
//# sourceMappingURL=servicios.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverFiltroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(9);
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
 * Generated class for the PopoverFiltroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PopoverFiltroPage = /** @class */ (function () {
    function PopoverFiltroPage(navCtrl, navParams, api, viewCtrl, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.mascota = this.navParams.get('mascota');
        if (!this.mascota) {
            this.categorias();
            this.departamentos();
        }
        else {
            this.departamentos();
        }
    }
    PopoverFiltroPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad PopoverPage');
    };
    PopoverFiltroPage.prototype.departamentoSelect = function (selectedValue) {
        var _this = this;
        this.dptmSelect = selectedValue;
        // console.log(selectedValue);
        // this.loading = this.loadingCtrl.create({
        //   spinner: 'hide',
        //   content: "Espera un momento<br>estamos cargando municipios... ",
        // });
        // this.loading.present();
        this.load = true;
        this.api.getMunicipio(selectedValue).subscribe(function (data) {
            _this.mncps = data;
            // this.loading.dismiss();
            _this.load = false;
            // console.log(data);
        }, function (error) {
            // this.loading.dismiss();
            _this.load = false;
            // console.log(error);
            _this.presentToast("Error en la conexión.");
        });
    };
    PopoverFiltroPage.prototype.categorias = function () {
        var _this = this;
        // this.loading = this.loadingCtrl.create({
        //   spinner : 'hide',
        //   content : 'Espera un momento<br>estamos cargando las categorias...'
        // });
        // this.loading.present();
        this.load = true;
        this.api.getCategorias().subscribe(function (data) {
            _this.ctgas = data;
            _this.load = false;
            //  this.loading.dismiss();
            //  console.log(this.ctgas);
        }, function (err) {
            _this.load = false;
            // this.loading.dismiss();
            _this.presentToast("Error en la conexión, intentalo más tarde.");
            // console.log(err)
        });
    };
    PopoverFiltroPage.prototype.departamentos = function () {
        var _this = this;
        // this.loading = this.loadingCtrl.create({
        //   spinner : 'hide',
        //   content : 'Espera un momento<br>estamos cargando los departamentos...'
        // });
        // this.loading.present();
        this.load = true;
        this.api.getDepartamento().subscribe(function (data) {
            // this.loading.dismiss();
            _this.dptms = data;
            _this.load = false;
        }, function (err) {
            _this.load = false;
            // this.loading.dismiss();
            _this.presentToast("Error en la conexión, intentalo más tarde.");
        });
    };
    PopoverFiltroPage.prototype.categoriaSelect = function (selectedValue) {
        this.cateSelect = selectedValue;
        // console.log(this.cateSelect);
    };
    PopoverFiltroPage.prototype.municipioSelect = function (selectedValue) {
        this.mncpSelect = selectedValue;
        // console.log(this.mncpSelect);
    };
    PopoverFiltroPage.prototype.buscar = function () {
        if (!this.cateSelect) {
            // console.log("categoria undifined");
            if (!this.mncpSelect) {
                this.presentToast("Selecciona departamento y municipio");
            }
            else {
                this.event = { categoria: 0, municipio: this.mncpSelect };
                this.viewCtrl.dismiss(this.event);
            }
        }
        else {
            if (!this.mncpSelect) {
                this.presentToast("Selecciona departamento y municipio");
            }
            else {
                this.event = { categoria: this.cateSelect, municipio: this.mncpSelect };
                this.viewCtrl.dismiss(this.event);
            }
        }
    };
    PopoverFiltroPage.prototype.buscarVeterinario = function () {
        if (!this.mncpSelect) {
            this.presentToast("Selecciona departamento y municipio");
        }
        else {
            this.event = { categoria: 20, municipio: this.mncpSelect };
            this.viewCtrl.dismiss(this.event);
        }
    };
    PopoverFiltroPage.prototype.cerrar = function () {
        this.viewCtrl.dismiss();
    };
    PopoverFiltroPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    PopoverFiltroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-popover-filtro',template:/*ion-inline-start:"E:\ionic\appMovil\src\pages\popover-filtro\popover-filtro.html"*/'<h4 class="h4">Filtrar</h4>\n\n<ion-item *ngIf="!mascota">\n\n    <ion-label>Categorias</ion-label>\n\n    <ion-select multiple="false" (ionChange)="categoriaSelect($event);" cancelText="cancelar">\n\n      <ion-option *ngFor="let cate of ctgas;let i = index" [value]="cate.id_categoria"  >{{cate.nombre}}</ion-option>     \n\n    </ion-select>\n\n  </ion-item>\n\n<ion-item>\n\n    <ion-label>Departamentos</ion-label>\n\n    <ion-select multiple="false" (ionChange)="departamentoSelect($event);" cancelText="cancelar">\n\n      <ion-option *ngFor="let dpt of dptms;let i = index" [value]="dpt.id_departamento"  >{{dpt.nombre}}</ion-option>     \n\n    </ion-select>\n\n</ion-item>\n\n<ion-item>\n\n    <ion-label>Municipio</ion-label>\n\n    <ion-select multiple="false" (ionChange)="municipioSelect($event);" cancelText="cancelar">\n\n        <ion-option *ngFor="let mnp of mncps;let i = index" [value]="mnp.id_municipio"  >{{mnp.nombre}}</ion-option>\n\n      \n\n    </ion-select>\n\n  </ion-item>\n\n  <ion-item>\n\n    <button *ngIf="!mascota" ion-button icon-left color="prevenir" (click)="buscar()">\n\n      <ion-icon name="search"> Buscar </ion-icon>\n\n    </button>\n\n    <button *ngIf="mascota" ion-button icon-left color="prevenir" (click)="buscarVeterinario()">\n\n      <ion-icon name="search"> Buscar </ion-icon>\n\n    </button>\n\n    <button ion-button icon-left color="danger" (click)="cerrar()">\n\n      <ion-icon name="close"> Cerrar </ion-icon>\n\n    </button>\n\n  </ion-item>\n\n\n\n  <div class="loading" *ngIf="load">\n\n    <img src="/assets/imgs/pulso.gif" alt="">\n\n  </div> '/*ion-inline-end:"E:\ionic\appMovil\src\pages\popover-filtro\popover-filtro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], PopoverFiltroPage);
    return PopoverFiltroPage;
}());

//# sourceMappingURL=popover-filtro.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formulario_registro_formulario_registro__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__formulario_registro_admin_formulario_registro_admin__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__welcome_welcome__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_api__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_crypto_js__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_crypto_js__);
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
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistroPage = /** @class */ (function () {
    function RegistroPage(navCtrl, navParams, formBuilder, loadingCtrl, api, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.cambioContrasena = false;
        this.registro = this.navParams.get('registro');
        if (this.registro === false) {
            this.datos = this.formBuilder.group({
                email: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
                pssw: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required,]],
                pssw2: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required,]],
                salt: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required,]]
                // Validators.minLength(8)
            });
        }
    }
    RegistroPage.prototype.email = function () {
        var _this = this;
        if (!this.datos.value.email) {
            this.presentToast("Por favor escribe tu correo.");
        }
        else {
            // this.loading = this.loadingCtrl.create({
            //   spinner: 'hide',
            //   content: "Espera un momento<br>estamos verificando el correo... ",
            // });
            // this.loading.present();
            this.load = true;
            this.api.getConfirmacionCorreo(this.datos.value.email).subscribe(function (data) {
                console.log(data);
                // this.loading.dismiss();
                _this.load = false;
                if (data === true) {
                    _this.cambioContrasena = true;
                    _this.formularioContrasena();
                }
                else {
                    _this.presentToast("Por favor ingresa un correo valido.");
                }
            }, function (err) {
                // this.loading.dismiss();
                _this.load = false;
                _this.presentToast("Error en la conexión, intentalo más tarde o revisa tu conexión");
            });
        }
    };
    RegistroPage.prototype.formularioContrasena = function () {
        this.datos = this.formBuilder.group({
            pssw: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(8)]],
            pssw2: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(8)]],
            salt: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required,]]
            // Validators.minLength(8)
        });
    };
    RegistroPage.prototype.contrasena = function () {
        var _this = this;
        console.log(this.datos.value.salt, this.datos.value.pssw, this.datos.value.pssw2);
        var pssw = this.datos.value.pssw;
        var pss2 = this.datos.value.pssw2;
        if (pssw === pss2) {
            // this.loading = this.loadingCtrl.create({
            //   spinner: 'hide',
            //   content: "Espera un momento<br> estamos verificando la información... ",
            // });
            // this.loading.present(); 
            this.load = true;
            var hashed = __WEBPACK_IMPORTED_MODULE_7_crypto_js___default.a.SHA512(this.datos.value.pssw).toString(__WEBPACK_IMPORTED_MODULE_7_crypto_js___default.a.enc.Hex);
            var info = { salt: this.datos.value.salt, pssw: hashed };
            // console.log(info);
            this.api.cambioContrasena(info).then(function (res) {
                // console.log(res);
                // this.loading.dismiss();
                _this.load = false;
                if (res === true) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__welcome_welcome__["a" /* WelcomePage */]);
                    _this.presentToast("Contraseña cambiada exitosamente.");
                }
                else {
                    _this.presentToast("El codigo de recuperación de contraseña no coincide.");
                }
            }, function (err) {
                // this.loading.dismiss();
                _this.load = false;
                _this.presentToast("Error en la conexión, intentalo más tarde o revisa tu conexión.");
            });
        }
        else {
            this.presentToast("las contraseñas no coinciden.");
        }
    };
    RegistroPage.prototype.esUsuario = function () {
        this.esAdmin = false;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__formulario_registro_formulario_registro__["a" /* FormularioRegistroPage */], { esAdmin: this.esAdmin });
    };
    RegistroPage.prototype.esProveedor = function () {
        this.esAdmin = true;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__formulario_registro_admin_formulario_registro_admin__["a" /* FormularioRegistroAdminPage */], { esAdmin: this.esAdmin });
    };
    RegistroPage.prototype.goToWelcome = function () {
        this.navCtrl.pop();
    };
    RegistroPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad RegistroPage');
    };
    RegistroPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    RegistroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-registro',template:/*ion-inline-start:"E:\ionic\appMovil\src\pages\registro\registro.html"*/'<!--\n\n  Generated template for the RegistroPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content padding>\n\n\n\n  <div *ngIf="registro">\n\n\n\n    <div class="logo">\n\n        <img src="/assets/imgs/logo-grande-negro.png" alt="">\n\n      </div>\n\n      <ion-card>\n\n        <ion-card-header>\n\n          <ion-card-title>Registrese con nosotros</ion-card-title>\n\n        </ion-card-header>\n\n      </ion-card>\n\n      <div class="imgs">\n\n        <ion-list>\n\n          <button ion-item (click)="esUsuario()">\n\n            <img class="centrar" src="/assets/imgs/consumidor.png" alt="">\n\n            <p class="txt">Eres usuario</p>\n\n          </button>\n\n          <button ion-item (click)="esProveedor()">\n\n              <img class="centrar" src="/assets/imgs/proveedor.png" alt="">\n\n              <p class="txt">Eres proovedor</p>\n\n            </button>\n\n        </ion-list>\n\n      </div>\n\n      <button ion-button (click)="goToWelcome()" icon-left color="energized" round block>\n\n      <ion-icon name="arrow-round-back"></ion-icon>\n\n      Volver</button>\n\n\n\n  </div>\n\n\n\n  <div *ngIf="!registro && !cambioContrasena">\n\n    \n\n      <div class="logo_welcome">\n\n          <img src="/assets/imgs/logo-grande-negro.png" alt="">\n\n      </div>\n\n      <p>* Ingresa el correo con el cual te registraste, si el correo no llega recuerda revisar en correos no deseados o spam.</p>\n\n      <div class="contenido">\n\n\n\n        <form [formGroup]="datos" (ngSubmit)="email()"  novalidate>\n\n\n\n            <ion-item>\n\n                <ion-label floating>\n\n                  <ion-icon name="mail"></ion-icon>\n\n                  * Ingrese su correo</ion-label>\n\n                <ion-input type="email" formControlName="email" ></ion-input>\n\n            </ion-item>\n\n            <ion-item *ngIf="datos.get(\'email\').errors && datos.get(\'email\').dirty">\n\n                <p color="danger" ion-text *ngIf="datos.get(\'email\').hasError(\'required\')">* El campo es requerido</p>\n\n                <p color="danger" ion-text *ngIf="datos.get(\'email\').hasError(\'email\')">Tipo de email no valido (ejemplo@mail.com)</p>\n\n              </ion-item>\n\n    \n\n              <button ion-button type="submit" round block icon-left color="prevenir">\n\n                <ion-icon name="send"></ion-icon>\n\n                Comprobar\n\n              </button>\n\n        </form>\n\n        \n\n      <button ion-button (click)="goToWelcome()" icon-left color="energized" round block>\n\n          <ion-icon name="arrow-round-back"></ion-icon>\n\n        Volver</button>\n\n\n\n        \n\n\n\n      </div>\n\n\n\n\n\n\n\n  </div>\n\n\n\n  <div *ngIf="!registro && cambioContrasena">\n\n    \n\n      <div class="logo_welcome">\n\n          <img src="/assets/imgs/logo-grande-negro.png" alt="">\n\n      </div>\n\n\n\n      <p>* Ingresa el codigo enviado al correo.</p>\n\n\n\n      <div class="contenido">\n\n\n\n          <form [formGroup]="datos" (ngSubmit)="contrasena()"  novalidate>\n\n\n\n              <ion-item>\n\n                  <ion-label><ion-icon name="alert"></ion-icon></ion-label>\n\n                  <ion-input type="text" formControlName="salt" placeholder="Ingrese el codigo"></ion-input>\n\n              </ion-item>               \n\n              <ion-item *ngIf="datos.get(\'salt\').errors && datos.get(\'salt\').dirty">\n\n                    <p color="danger" ion-text *ngIf="datos.get(\'salt\').hasError(\'required\')">* El campo es requerido</p>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                  <ion-label><ion-icon name="key"></ion-icon></ion-label>\n\n                  <ion-input type="password" formControlName="pssw" placeholder="Ingrese la contraseña"></ion-input>\n\n              </ion-item>   \n\n              <ion-item *ngIf="datos.get(\'pssw\').errors && datos.get(\'pssw\').dirty">\n\n                    <p color="danger" ion-text *ngIf="datos.get(\'pssw\').hasError(\'required\')">* El campo es requerido</p>\n\n                    <p color="danger" ion-text *ngIf="datos.get(\'pssw\').hasError(\'minlength\')">Cantidad minima de caracteres (8)</p>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                  <ion-label><ion-icon name="key"></ion-icon></ion-label>\n\n                  <ion-input type="password" formControlName="pssw2" placeholder="Confirma la contraseña"></ion-input>\n\n              </ion-item>   \n\n              <ion-item *ngIf="datos.get(\'pssw2\').errors && datos.get(\'pssw2\').dirty">\n\n                    <p color="danger" ion-text *ngIf="datos.get(\'pssw2\').hasError(\'required\')">* El campo es requerido</p>\n\n                    <p color="danger" ion-text *ngIf="datos.get(\'pssw2\').hasError(\'minlength\')">Cantidad minima de caracteres (8)</p>\n\n              </ion-item>\n\n\n\n              <button ion-button round block color="prevenir" type="submit" icon-left [disabled]="!this.datos.valid">\n\n                <ion-icon name="send"></ion-icon>\n\n                Confirmar\n\n              </button>\n\n\n\n          </form>\n\n          <button ion-button (click)="goToWelcome()" icon-left color="energized" round block>\n\n              <ion-icon name="arrow-round-back"></ion-icon>\n\n            Volver</button>\n\n        </div>\n\n\n\n      \n\n      </div>\n\n\n\n\n\n   \n\n      \n\n</ion-content>\n\n\n\n<div class="loading" *ngIf="load">\n\n  <img src="/assets/imgs/pulso.gif" alt="">\n\n</div> '/*ion-inline-end:"E:\ionic\appMovil\src\pages\registro\registro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], RegistroPage);
    return RegistroPage;
}());

//# sourceMappingURL=registro.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormularioRegistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_crypto_js__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_crypto_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(12);
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
 * Generated class for the FormularioRegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FormularioRegistroPage = /** @class */ (function () {
    function FormularioRegistroPage(navCtrl, navParams, toastCtrl, auth, fb, formBuilder, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.auth = auth;
        this.fb = fb;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.userData = { "id": "", "email": "", "identificacion": "", "pssw": "", "nombre": "",
            "apellido": "", "esAdmin": "", "face": "" };
        this.key = "token";
        this.keyId = "id";
        this.keyAdmin = "admin";
        this.confirm = false;
        this.esAdmin = this.navParams.get('esAdmin');
        this.datos = this.formBuilder.group({
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(20)]],
            apellido: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(20)]],
            id: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].min(0), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].pattern('[0-9]*')]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
            pssw: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(8)]],
            confirmacion: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(8)]],
            check: [false, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].requiredTrue]]
        });
    }
    FormularioRegistroPage.prototype.registroFacebook = function () {
        var _this = this;
        this.load = true;
        this.fb.login(['public_profile', 'email'])
            .then(function (rta) {
            // console.log(rta.status);
            if (rta.status == 'connected') {
                // this.getInfo();
                _this.fb.api('/me?fields=id,name,email,first_name,picture,last_name,gender', ['public_profile', 'email'])
                    .then(function (data) {
                    // console.log(data);
                    _this.user = data;
                    _this.face = true;
                    _this.pssw = _this.user.id;
                    _this.hashed = __WEBPACK_IMPORTED_MODULE_5_crypto_js___default.a.SHA512(_this.pssw).toString(__WEBPACK_IMPORTED_MODULE_5_crypto_js___default.a.enc.Hex);
                    _this.idFb = _this.user.id;
                    // console.log(this.esAdmin);
                    var user = { "email": _this.user.email, "identificacion": "", "pssw": _this.hashed,
                        "nombre": _this.user.first_name, "apellido": _this.user.last_name, "esAdmin": _this.esAdmin, "face": _this.face, avatar: _this.user.picture.data.url };
                    // console.log(user);
                    /////////////////////////Envio datos a la API///////////////////////////////
                    // this.loading = this.loadingCtrl.create({
                    //   spinner: 'hide',
                    //   content: "Espera un momento<br>estamos guardando tu información... ",
                    // });
                    // this.loading.present();
                    _this.auth.postLogin(user, "/register").then(function (result) {
                        _this.resposeData = result;
                        // console.log(this.resposeData);
                        var recorrido = result[0];
                        var recorri2 = result[1];
                        // console.log("/////////////////////AQUIIII///////");
                        // console.log(recorrido.existe);
                        if (recorrido.existe === false) {
                            _this.tokenR = _this.resposeData.token;
                            _this.id_usuario = _this.resposeData.id_usuario;
                            var int = parseInt(recorri2.id_usuario);
                            // console.log("IDDDDDD  ",int);
                            localStorage.setItem(_this.key, JSON.stringify(recorri2.token));
                            localStorage.setItem(_this.keyId, JSON.stringify(recorri2.id_usuario));
                            localStorage.setItem(_this.keyAdmin, JSON.stringify(recorri2.esAdmin));
                            _this.userData.nombre = _this.user.first_name;
                            _this.userData.apellido = _this.user.last_name;
                            _this.userData.email = _this.user.email;
                            _this.userData.pssw = _this.user.hashed;
                            // this.loading.dismiss();
                            _this.load = false;
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                        }
                        else {
                            //usuario ya existe
                            // this.loading.dismiss();
                            _this.load = false;
                            _this.presentToast("El correo ya se encuentra registrado");
                        }
                    }, function (error) {
                        // this.loading.dismiss();
                        _this.load = false;
                        _this.presentToast("Error en la conexion intentalo mas tarde");
                    });
                })
                    .catch(function (error) {
                    _this.load = false;
                    _this.loading.dismiss();
                    // console.error( error );
                });
            }
            ;
        })
            .catch(function (error) {
            // console.error( error );
            // this.loading.dismiss();
            _this.load = false;
            _this.presentToast("Error en la conexion");
        });
    };
    FormularioRegistroPage.prototype.registrar = function () {
        var _this = this;
        this.load = true;
        if (!this.datos.valid) {
            this.presentToast("Completa los campos requeridos");
        }
        else {
            this.face = false;
            var pssw1 = this.datos.value.pssw;
            var pssw2 = this.datos.value.confirmacion;
            if (pssw1 === pssw2) {
                // this.loading = this.loadingCtrl.create({
                //   spinner: 'hide',
                //   content: "Espera un momento<br>estamos guardando tu información... ",
                // });
                // this.loading.present();
                this.confirm = false;
                this.esAdmin = false;
                this.face = false;
                this.hashed = __WEBPACK_IMPORTED_MODULE_5_crypto_js___default.a.SHA512(this.datos.value.pssw).toString(__WEBPACK_IMPORTED_MODULE_5_crypto_js___default.a.enc.Hex);
                //  "id":this.datos.value.id,
                var userData = { "email": this.datos.value.email, "identificacion": this.datos.value.id,
                    "pssw": this.hashed, "nombre": this.datos.value.nombre,
                    "apellido": this.datos.value.apellido, "esAdmin": this.esAdmin, "face": this.face, "avatar": "http://cdn.prevenirexpress.com/avatars/avatarundefined.png" };
                // console.log(userData);
                this.auth.postLogin(userData, "/register").then(function (result) {
                    _this.resposeData = result;
                    var re1 = result[0];
                    var re2 = result[1];
                    // console.log("resulta222222222");
                    // console.log(re1);
                    // console.log(re2);
                    // console.log(this.resposeData);
                    ///////////////////////////verificar si el usuario no existe/////////////////
                    if (re1.existe == false) {
                        var int = parseInt(re2.id_usuario);
                        // console.log("IDDDDDD  ",int);
                        localStorage.setItem(_this.key, JSON.stringify(re2.token));
                        localStorage.setItem(_this.keyId, JSON.stringify(int));
                        localStorage.setItem(_this.keyAdmin, JSON.stringify(re2.esAdmin));
                        // this.loading.dismiss();
                        _this.load = false;
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                    }
                    else {
                        // this.loading.dismiss();
                        _this.load = false;
                        var campo = _this.resposeData[1];
                        campo = campo[0].campo;
                        if (campo === "email") {
                            _this.presentToast("El correo ya se encuentra registrado");
                        }
                        else {
                            _this.presentToast("La cedula ya se encuentra registrado");
                        }
                    }
                }, function (error) {
                    // this.loading.dismiss();
                    _this.load = false;
                    _this.presentToast("error en la conexión intentalo mas tarde");
                });
            }
            else {
                // console.log("No son iguales");
                this.confirm = true;
            }
        }
    };
    FormularioRegistroPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    FormularioRegistroPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad FormularioRegistroPage');
    };
    FormularioRegistroPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    FormularioRegistroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-formulario-registro',template:/*ion-inline-start:"E:\ionic\appMovil\src\pages\formulario-registro\formulario-registro.html"*/'<!--\n\n  Generated template for the FormularioRegistroPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content padding>\n\n\n\n    <ion-col class="ion-padding-top ion-padding-bottom">\n\n        <ion-card>\n\n            <ion-card-header>\n\n              <ion-card-title>Registrese como Usuario</ion-card-title>\n\n            </ion-card-header>\n\n          </ion-card>\n\n          </ion-col>\n\n\n\n    <form [formGroup]="datos" (ngSubmit)="registrar()"  novalidate>\n\n   \n\n        <ion-item >\n\n          <ion-label >\n\n            <ion-icon name ="person"></ion-icon>\n\n          </ion-label>\n\n          <ion-input type="text" placeholder="Nombres *" formControlName="nombre" ></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="datos.get(\'nombre\').errors && datos.get(\'nombre\').dirty">\n\n            <p color="danger" ion-text *ngIf="datos.get(\'nombre\').hasError(\'required\')">* El campo es requerido</p>\n\n            <p color="danger" ion-text *ngIf="datos.get(\'nombre\').hasError(\'minlength\')">Cantidad minima de caracteres (4)</p>\n\n          </ion-item>\n\n        <ion-item >\n\n          <ion-label>\n\n            <ion-icon name="person"></ion-icon>\n\n          </ion-label>\n\n          <ion-input type="text" placeholder="Apellidos *" formControlName="apellido"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="datos.get(\'apellido\').errors && datos.get(\'apellido\').dirty">\n\n            <p color="danger" ion-text *ngIf="datos.get(\'apellido\').hasError(\'required\')">* El campo es requerido</p>\n\n            <p color="danger" ion-text *ngIf="datos.get(\'apellido\').hasError(\'minlength\')">Cantidad minima de caracteres (4)</p>\n\n          </ion-item>\n\n        <ion-item >\n\n          <ion-label >\n\n            <ion-icon name="card"></ion-icon>\n\n          </ion-label>\n\n          <ion-input type="number" placeholder="Cédula / No. Identificación *" formControlName="id"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="datos.get(\'id\').errors && datos.get(\'id\').dirty">\n\n            <p color="danger" ion-text *ngIf="datos.get(\'id\').hasError(\'required\')">* El campo es requerido</p>\n\n            <p color="danger" ion-text *ngIf="datos.get(\'id\').hasError(\'min\')">Solo numeros positivos</p>\n\n            <p color="danger" ion-text *ngIf="datos.get(\'id\').hasError(\'pattern\')">* El campo solo acepta numeros</p>\n\n          </ion-item>\n\n        <ion-item>\n\n          <ion-label>\n\n            <ion-icon name="mail"></ion-icon>\n\n          </ion-label>\n\n          <ion-input type="email" placeholder="ejemplo@mail.com *" formControlName="email"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="datos.get(\'email\').errors && datos.get(\'email\').dirty">\n\n            <p color="danger" ion-text *ngIf="datos.get(\'email\').hasError(\'required\')">* El campo es requerido</p>\n\n            <p color="danger" ion-text *ngIf="datos.get(\'email\').hasError(\'email\')">Tipo de email no valido (ejemplo@mail.com)</p>\n\n          </ion-item>\n\n        <ion-item>\n\n          <ion-label>\n\n            <ion-icon name="key"></ion-icon>\n\n          </ion-label>\n\n          <ion-input type="password" placeholder="Contraseña *" formControlName="pssw"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="datos.get(\'pssw\').errors && datos.get(\'pssw\').dirty">\n\n          <p color="danger" ion-text *ngIf="datos.get(\'pssw\').hasError(\'required\')">* El campo es requerido</p>\n\n          <p color="danger" ion-text *ngIf="datos.get(\'pssw\').hasError(\'minlength\')">Cantidad minima de caracteres (8)</p>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>\n\n            <ion-icon name="key"></ion-icon>\n\n          </ion-label>\n\n          <ion-input type="password" placeholder="Confirmar contraseña *" formControlName="confirmacion"></ion-input>\n\n        </ion-item>\n\n        <p *ngIf="confirm" style="color: red">Las contraseñas no coinciden</p>\n\n        <ion-item *ngIf="datos.get(\'confirmacion\').errors && datos.get(\'confirmacion\').dirty">\n\n          <p color="danger" ion-text *ngIf="datos.get(\'confirmacion\').hasError(\'required\')">* El campo es requerido</p>\n\n          <p color="danger" ion-text *ngIf="datos.get(\'confirmacion\').hasError(\'minlength\')">Cantidad minima de caracteres (8)</p>\n\n        </ion-item>\n\n<br/>\n\n\n\n        <ion-item>\n\n          <ion-label>Acepto terminos y condiciones</ion-label>    \n\n          <ion-checkbox required formControlName="check"></ion-checkbox>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <div style="text-align: center;">\n\n              <p> <a href="http://citas.prevenirexpress.com/#/terminos-y-condiciones">Leer terminos y condiciones</a></p>\n\n          </div>      \n\n        </ion-item>\n\n\n\n        <button ion-button icon-left round block [disabled]="!this.datos.valid">\n\n        <ion-icon name="person-add"></ion-icon>\n\n        Registrar</button>\n\n    \n\n       \n\n     \n\n    </form>\n\n    \n\n      <button ion-button (click)="registroFacebook()" icon-left color="facebook" round block [disabled]="!this.datos.get(\'check\').valid">\n\n        <ion-icon name="logo-facebook"></ion-icon>\n\n        Registrar con facebook</button>\n\n      <button ion-button (click)="goBack()" icon-left color="energized" round block>\n\n          <ion-icon name="arrow-round-back"></ion-icon>\n\n          Volver</button>\n\n</ion-content>\n\n\n\n<div class="loading" *ngIf="load">\n\n  <img src="/assets/imgs/pulso.gif" alt="">\n\n</div> '/*ion-inline-end:"E:\ionic\appMovil\src\pages\formulario-registro\formulario-registro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], FormularioRegistroPage);
    return FormularioRegistroPage;
}());

//# sourceMappingURL=formulario-registro.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormularioRegistroAdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_crypto_js__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_crypto_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_api__ = __webpack_require__(9);
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
 * Generated class for the FormularioRegistroAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FormularioRegistroAdminPage = /** @class */ (function () {
    function FormularioRegistroAdminPage(navCtrl, navParams, fb, toastCtrl, auth, formBuilder, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.toastCtrl = toastCtrl;
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.key = "token";
        this.keyId = "id";
        this.keyAdmin = "admin";
        this.confirm = false;
        this.datos = this.formBuilder.group({
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].maxLength(40)]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
            pssw: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(8)]],
            direccion: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]],
            id: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].min(0), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern('[0-9]*')]],
            tel: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].min(0), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern('[0-9]*')]],
            wsp: ['', []],
            confirmacion: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(8)]],
            codigo: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern('[0-9]*')]],
            check: [false, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].requiredTrue]]
        });
    }
    FormularioRegistroAdminPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad FormularioRegistroAdminPage');
    };
    FormularioRegistroAdminPage.prototype.registrar = function () {
        var _this = this;
        if (!this.datos.valid) {
            this.presentToast("Completa los campos requeridos");
        }
        else {
            var pssw1 = this.datos.value.pssw;
            var pssw2 = this.datos.value.confirmacion;
            if (pssw1 === pssw2) {
                this.load = true;
                // this.loading = this.loadingCtrl.create({
                //   spinner: 'hide',
                //   content: "Espera un momento<br>estamos guardando tu información... ",
                // });
                // this.loading.present();
                this.confirm = false;
                this.esAdmin = true;
                this.face = false;
                var hashed = __WEBPACK_IMPORTED_MODULE_3_crypto_js___default.a.SHA512(this.datos.value.pssw).toString(__WEBPACK_IMPORTED_MODULE_3_crypto_js___default.a.enc.Hex);
                var userData = { "email": this.datos.value.email, "pssw": hashed,
                    "nombre": this.datos.value.nombre, "esAdmin": this.esAdmin, "face": this.face, "direccion": this.datos.value.direccion,
                    "nit": this.datos.value.id, "tel": this.datos.value.tel, "wsp": this.datos.value.wsp, codigo: this.datos.value.codigo };
                console.log(userData);
                this.auth.postLogin(userData, "/register").then(function (result) {
                    _this.resposeData = result;
                    var r1 = result[0];
                    var r2 = result[1];
                    // console.log(this.resposeData);
                    // console.log("registro11122131");
                    // console.log(this.resposeData);
                    // console.log(r1);
                    // console.log(r2);
                    ///////////////////////////verificar si el usuario no existe/////////////////
                    if (r1.existe == false) {
                        var int = parseInt(r2.id_usuario);
                        // console.log("IDDDDDDDDDDDD  ",int);
                        localStorage.setItem(_this.key, JSON.stringify(r2.token));
                        localStorage.setItem(_this.keyId, JSON.stringify(int));
                        localStorage.setItem(_this.keyAdmin, JSON.stringify(r2.esAdmin));
                        // this.loading.dismiss();
                        _this.load = false;
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                    }
                    else {
                        // this.loading.dismiss();
                        _this.load = false;
                        var campo = r2[0].campo;
                        if (campo === "email") {
                            _this.presentToast("El correo ya se encuentra registrado");
                        }
                        else {
                            _this.presentToast("El nit ya se encuentra registrado");
                        }
                    }
                }, function (error) {
                    // this.loading.dismiss();
                    _this.load = false;
                    _this.presentToast("Error en la conexion intentalo mas tarde");
                });
            }
            else {
                this.confirm = true;
            }
        }
    };
    FormularioRegistroAdminPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    FormularioRegistroAdminPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    FormularioRegistroAdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-formulario-registro-admin',template:/*ion-inline-start:"E:\ionic\appMovil\src\pages\formulario-registro-admin\formulario-registro-admin.html"*/'<!--\n\n  Generated template for the FormularioRegistroAdminPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content padding>\n\n\n\n    <ion-col class="ion-padding-top ion-padding-bottom">\n\n        <ion-card>\n\n            <ion-card-header>\n\n              <ion-card-title>Registrese como Proveedor</ion-card-title>\n\n            </ion-card-header>\n\n          </ion-card>\n\n          </ion-col>\n\n\n\n    <form [formGroup]="datos" (ngSubmit)="registrar()"  novalidate>\n\n      \n\n        <ion-item>\n\n          <ion-label>\n\n            <ion-icon name="person"></ion-icon>\n\n          </ion-label>\n\n          <ion-input placeholder="Nombre proveedor / Empresa *" type="text" formControlName="nombre"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="datos.get(\'nombre\').errors && datos.get(\'nombre\').dirty">\n\n            <p color="danger" ion-text *ngIf="datos.get(\'nombre\').hasError(\'required\')">* El campo es requerido</p>\n\n            <p color="danger" ion-text *ngIf="datos.get(\'nombre\').hasError(\'minlength\')">cantidad minima de caracteres (4)</p>\n\n            <p color="danger" ion-text *ngIf="datos.get(\'nombre\').hasError(\'maxlength\')">cantidad maxima de caracteres (40)</p>\n\n          </ion-item>\n\n        <ion-item>\n\n            <ion-label>\n\n              <ion-icon name="mail"></ion-icon>\n\n            </ion-label>\n\n            <ion-input placeholder="ejemplo@mail.com *" type="email" formControlName="email"></ion-input>\n\n          </ion-item>\n\n          <ion-item *ngIf="datos.get(\'email\').errors && datos.get(\'email\').dirty">\n\n              <p color="danger" ion-text *ngIf="datos.get(\'email\').hasError(\'required\')">* El campo es requerido</p>\n\n              <p color="danger" ion-text *ngIf="datos.get(\'email\').hasError(\'email\')">Tipo de email no valido (ejemplo@mail.com)</p>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label>\n\n                  <ion-icon name="locate"></ion-icon>\n\n                </ion-label>\n\n                <ion-input placeholder="Dirección *" type="text" formControlName="direccion"></ion-input>\n\n              </ion-item>\n\n              <ion-item *ngIf="datos.get(\'direccion\').errors && datos.get(\'direccion\').dirty">\n\n                  <p color="danger" ion-text *ngIf="datos.get(\'direccion\').hasError(\'required\')">* El campo es requerido</p>\n\n                </ion-item>\n\n\n\n                <ion-grid style="padding: 0px;">\n\n                    <ion-row>\n\n                      <ion-col col-7 style="padding: 0px;">\n\n                        <div>\n\n                             \n\n                            <ion-item>\n\n                                <ion-label>\n\n                                  <ion-icon name="card"></ion-icon>\n\n                                </ion-label>\n\n                                <ion-input placeholder="Nit" type="number" formControlName="id" min="0"></ion-input>\n\n                              </ion-item>\n\n\n\n                              <ion-item *ngIf="datos.get(\'id\').errors && datos.get(\'id\').dirty">\n\n                                  <p color="danger" ion-text *ngIf="datos.get(\'id\').hasError(\'required\')">* El campo es requerido</p>\n\n                                  <p color="danger" ion-text *ngIf="datos.get(\'id\').hasError(\'min\')">Solo numeros positivos</p>\n\n                                  <p color="danger" ion-text *ngIf="datos.get(\'id\').hasError(\'pattern\')">* El campo solo acepta numeros</p>\n\n                                  \n\n                              </ion-item>\n\n\n\n                        </div>\n\n                      </ion-col>\n\n\n\n                      <ion-col col-1 align-self-center style="padding-right:2px;"> \n\n                        <div style="text-align: center;">\n\n                            <ion-icon name="remove"></ion-icon> \n\n                        </div>\n\n                      </ion-col>\n\n                       \n\n                      <ion-col col-4 style="padding: 0px;">\n\n                        <div>\n\n                          \n\n                          <ion-item>\n\n                                <ion-input placeholder="codigo" type="number" formControlName="codigo"></ion-input>\n\n                          </ion-item>\n\n\n\n                          <ion-item *ngIf="datos.get(\'codigo\').errors && datos.get(\'codigo\').dirty">\n\n                              <p color="danger" ion-text *ngIf="datos.get(\'codigo\').hasError(\'required\')">* El campo es requerido</p>\n\n                              <p color="danger" ion-text *ngIf="datos.get(\'codigo\').hasError(\'pattern\')">* El campo solo acepta numeros</p>\n\n                              \n\n                          </ion-item>\n\n\n\n                        </div>\n\n                      </ion-col>\n\n                    </ion-row>\n\n                  </ion-grid>\n\n\n\n                \n\n               \n\n\n\n                <ion-item>\n\n                    <ion-label>\n\n                      <ion-icon name="call"></ion-icon>\n\n                    </ion-label>\n\n                    <ion-input placeholder="Teléfono *" type="number" formControlName="tel"></ion-input>\n\n                  </ion-item>\n\n                  <ion-item *ngIf="datos.get(\'tel\').errors && datos.get(\'tel\').dirty">\n\n                      <p color="danger" ion-text *ngIf="datos.get(\'tel\').hasError(\'required\')">* El campo es requerido</p>\n\n                      <p color="danger" ion-text *ngIf="datos.get(\'tel\').hasError(\'min\')">Solo numeros positivos</p>\n\n                      <p color="danger" ion-text *ngIf="datos.get(\'tel\').hasError(\'pattern\')">* El campo solo acepta numeros</p>\n\n                    </ion-item>\n\n                  \n\n                  <ion-item>\n\n                      <ion-label>\n\n                        <ion-icon name="logo-whatsapp"></ion-icon>\n\n                      </ion-label>\n\n                      <ion-input placeholder="Whatsapp" type="number"  formControlName="wsp"></ion-input>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                      <ion-label>\n\n                        <ion-icon name="key"></ion-icon>\n\n                      </ion-label>\n\n                      <ion-input placeholder="Contraseña *" type="password" formControlName="pssw"></ion-input>\n\n                    </ion-item>\n\n                    <ion-item *ngIf="datos.get(\'pssw\').errors && datos.get(\'pssw\').dirty">\n\n                        <p color="danger" ion-text *ngIf="datos.get(\'pssw\').hasError(\'required\')">* El campo es requerido</p>\n\n                        <p color="danger" ion-text *ngIf="datos.get(\'pssw\').hasError(\'minlength\')">cantidad minima de caracteres (8)</p>\n\n                      </ion-item>\n\n                      <ion-item>\n\n                        <ion-label>\n\n                          <ion-icon name="key"></ion-icon>\n\n                        </ion-label>\n\n                        <ion-input placeholder="Confirma Contraseña *" type="password" formControlName="confirmacion"></ion-input>\n\n                      </ion-item>\n\n                      <p *ngIf="confirm" style="color:red">Las contraseñas no coinciden</p>\n\n                      <ion-item *ngIf="datos.get(\'confirmacion\').errors && datos.get(\'confirmacion\').dirty">\n\n                          <p color="danger" ion-text *ngIf="datos.get(\'confirmacion\').hasError(\'required\')">* El campo es requerido</p>\n\n                          <p color="danger" ion-text *ngIf="datos.get(\'confirmacion\').hasError(\'minlength\')">cantidad minima de caracteres (8)</p>\n\n                        </ion-item>\n\n                        <br/>\n\n\n\n\n\n                       <ion-item>\n\n                          <ion-label>Acepto terminos y condiciones</ion-label>    \n\n                          <ion-checkbox required formControlName="check"></ion-checkbox>\n\n                      </ion-item>\n\n\n\n                       <ion-item>\n\n                         <div style="text-align: center;">\n\n                             <p> <a href="http://citas.prevenirexpress.com/#/terminos-y-condiciones">Leer terminos y condiciones</a></p>\n\n                         </div>      \n\n                       </ion-item>\n\n\n\n\n\n                    <button ion-button icon-left block round [disabled]="!this.datos.valid">\n\n                        <ion-icon name="person-add"></ion-icon>\n\n                        Registrar \n\n                      </button>\n\n     \n\n    </form>\n\n   \n\n      <button ion-button (click)="goBack()" icon-left color="energized" round block>\n\n          <ion-icon name="arrow-round-back"></ion-icon>\n\n          Volver</button>\n\n\n\n</ion-content>\n\n\n\n<div class="loading" *ngIf="load">\n\n  <img src="/assets/imgs/pulso.gif" alt="">\n\n</div> '/*ion-inline-end:"E:\ionic\appMovil\src\pages\formulario-registro-admin\formulario-registro-admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], FormularioRegistroAdminPage);
    return FormularioRegistroAdminPage;
}());

//# sourceMappingURL=formulario-registro-admin.js.map

/***/ }),

/***/ 154:
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
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__citas_citas__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_global__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__listado_publicaciones_listado_publicaciones__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__servicios_servicios__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_push__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__blanco_blanco__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_user__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var HomePage = /** @class */ (function () {
    // slideChanged() {
    //     let currentIndex = this.slides.getActiveIndex();
    //     console.log('Current index is', currentIndex);
    //   }
    function HomePage(navCtrl, global, navParams, api, toastCtrl, loadingCtrl, push, alertCtrl, menu) {
        // this.api.getTopics(this.global.id_usuario).subscribe((data)=>{
        //   console.log(data);
        // },(err)=>{
        //   console.log(err);
        // });
        this.navCtrl = navCtrl;
        this.global = global;
        this.navParams = navParams;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.push = push;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this.servicio = [];
        this.slideData = [{ image: "/assets/imgs/slider/banner1a.png" },
            { image: "/assets/imgs/slider/banner3a.png" },
            { image: "/assets/imgs/slider/porquenosprefieren.png" }];
    }
    HomePage.prototype.ionViewDidEnter = function () {
        this.inicio();
        // this.goToSlide();
    };
    HomePage.prototype.inicio = function () {
        this.id_usuario = localStorage.getItem("id");
        this.esAdmin = localStorage.getItem("admin");
        this.global.id_usuario = this.id_usuario;
        this.global.login = true;
        // console.log (this.esAdmin);
        if (this.esAdmin == 1) {
            //  console.log("Entro aquiii! admin")
            this.global.admin = true;
            this.global.medico = false;
            this.datosProvedor();
        }
        else if (this.esAdmin == 2) {
            // console.log("Entro aquiii! user , facebook")
            this.global.admin = false;
            this.global.medico = false;
            this.datosUser();
        }
        else if (this.esAdmin == 3) {
            // console.log("es medico");
            this.global.admin = false;
            this.global.medico = true;
            this.datosMedico();
        }
        // else if(this.esAdmin == "false"){
        //   console.log("Entro aquiii! user")
        //  this.global.admin=false;
        //  this.global.medico=false;
        //  this.datosUser();   
        // }
        // console.log("APPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP!")
        // console.log(this.global);
    };
    HomePage.prototype.adminServs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__listado_publicaciones_listado_publicaciones__["a" /* ListadoPublicacionesPage */]);
    };
    HomePage.prototype.departamentos = function () {
        var _this = this;
        this.api.getDepartamento()
            .subscribe(function (data) {
            _this.dptms = data;
            // console.log(this.dptms)
        }, function (error) {
            // console.log(error);
        });
    };
    HomePage.prototype.departamentoSelect = function (selectedValue) {
        var _this = this;
        this.dptmSelect = selectedValue;
        // console.log(selectedValue);
        // this.loading = this.loadingCtrl.create({
        //   spinner: 'hide',
        //   content: "Espera un momento<br>estamos cargando municipios... ",
        // });
        // this.loading.present();
        this.load = true;
        this.menu.enable(false);
        this.api.getMunicipio(selectedValue).subscribe(function (data) {
            _this.mncps = data;
            // this.loading.dismiss();
            _this.mncpSelect = null;
            _this.menu.enable(true);
            _this.load = false;
            // console.log(data);
        }, function (error) {
            // this.loading.dismiss();
            _this.menu.enable(true);
            _this.load = false;
            _this.presentToast("Error en la conexion, intentalo mas tarde");
        });
    };
    HomePage.prototype.municipioSelect = function (selectedValue) {
        this.mncpSelect = selectedValue;
        // console.log(this.mncpSelect);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        this.departamentos();
        // this.categorias();
    };
    HomePage.prototype.misCitas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__citas_citas__["a" /* CitasPage */]);
    };
    HomePage.prototype.buscar = function (bol) {
        var _this = this;
        if (!bol) {
            if (!this.mncpSelect) {
                this.presentToast("Selecciona Departamento y Municipio");
            }
            else {
                // busqueda:this.busqueda,
                // this.loading = this.loadingCtrl.create({
                //   spinner: 'hide',
                //   content: "Espera un momento<br>estamos cargando información... ",
                // });
                // this.loading.present();
                this.load = true;
                this.menu.enable(false);
                this.calificacion = [];
                this.api.getBusqueda(this.mncpSelect, 0).subscribe(function (data) {
                    console.log(data);
                    var a = data[0];
                    _this.calificacion = data;
                    if (a.vacio === true) {
                        _this.load = false;
                        _this.menu.enable(true);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__servicios_servicios__["a" /* ServiciosPage */], { servicios: data, vacio: true });
                    }
                    else {
                        _this.servicio = [];
                        for (var i = 0; i < _this.calificacion.length; i++) {
                            var categoria = _this.calificacion[i].categoria;
                            var createdAt = _this.calificacion[i].createdAt;
                            var createdupdate = _this.calificacion[i].createdupdate;
                            var descripcion = _this.calificacion[i].descripcion;
                            var descuento = _this.calificacion[i].descuento;
                            var direccion = _this.calificacion[i].direccion;
                            var duracion = _this.calificacion[i].duracion;
                            var foto = _this.calificacion[i].foto;
                            var fotos = _this.calificacion[i].fotos;
                            var id_categoria = _this.calificacion[i].id_categoria;
                            var id_provedores = _this.calificacion[i].id_provedores;
                            var id_servicios = _this.calificacion[i].id_servicios;
                            var locked = _this.calificacion[i].locked;
                            var max_citas_ves = _this.calificacion[i].max_citas_ves;
                            var municipio_id_municipio = _this.calificacion[i].municipio_id_municipio;
                            var nombre = _this.calificacion[i].nombre;
                            var medico_id = _this.calificacion[i].medico_id;
                            var precio = _this.calificacion[i].precio;
                            var precio_cliente_prevenir = _this.calificacion[i].precio_cliente_prevenir;
                            var promedio = _this.calificacion[i].promedio;
                            var video = _this.calificacion[i].video;
                            var coment = _this.calificacion[i].coment;
                            var id_municipio = _this.calificacion[i].id_municipio;
                            var estrellasAmarillas = [];
                            var estrellasGrises = [];
                            for (var j = 0; j < promedio; j++) {
                                var id = "amarilla";
                                estrellasAmarillas.push({ id: id });
                            }
                            var resultado = 5 - promedio;
                            console.log(resultado);
                            if (resultado >= 1) {
                                console.log('aqui');
                                for (var h = 0; h < resultado; h++) {
                                    var id = "gris";
                                    estrellasGrises.push({ id: id });
                                }
                            }
                            _this.servicio.push({ medico_id: medico_id, categoria: categoria, createdAt: createdAt, createdupdate: createdupdate, descripcion: descripcion, descuento: descuento,
                                direccion: direccion, duracion: duracion, foto: foto, fotos: fotos, id_categoria: id_categoria, id_provedores: id_provedores, id_servicios: id_servicios,
                                locked: locked, max_citas_ves: max_citas_ves, municipio_id_municipio: municipio_id_municipio, nombre: nombre, precio: precio, id_municipio: id_municipio,
                                precio_cliente_prevenir: precio_cliente_prevenir, promedio: promedio, video: video, estrellasAmarillas: estrellasAmarillas, estrellasGrises: estrellasGrises, coment: coment });
                        }
                        // this.loading.dismiss();
                        _this.load = false;
                        _this.menu.enable(true);
                        // console.log(this.servicio);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__servicios_servicios__["a" /* ServiciosPage */], { servicios: _this.servicio, vacio: false });
                    }
                }, function (err) {
                    // this.loading.dismiss();
                    _this.load = false;
                    _this.menu.enable(true);
                    _this.presentToast("Error en la conexión, intentalo más tarde");
                    // console.log(err);
                });
            }
        }
        else {
            if (!this.mncpSelect) {
                this.presentToast("Selecciona Departamento y Municipio");
            }
            else {
                // this.loading = this.loadingCtrl.create({
                //   spinner: 'hide',
                //   content: "Espera un momento<br>estamos cargando información... ",
                // });
                // this.loading.present();
                this.load = true;
                this.menu.enable(false);
                this.api.getBusqueda(this.mncpSelect, 20).subscribe(function (data) {
                    _this.calificacion = data;
                    console.log(data);
                    var a = data[0];
                    if (a.vacio === true) {
                        // this.loading.dismiss();
                        _this.load = false;
                        _this.menu.enable(true);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__servicios_servicios__["a" /* ServiciosPage */], { servicios: data, vacio: true, mascota: true });
                    }
                    else {
                        _this.servicio = [];
                        for (var i = 0; i < _this.calificacion.length; i++) {
                            var categoria = _this.calificacion[i].categoria;
                            var createdAt = _this.calificacion[i].createdAt;
                            var createdupdate = _this.calificacion[i].createdupdate;
                            var descripcion = _this.calificacion[i].descripcion;
                            var descuento = _this.calificacion[i].descuento;
                            var direccion = _this.calificacion[i].direccion;
                            var duracion = _this.calificacion[i].duracion;
                            var foto = _this.calificacion[i].foto;
                            var fotos = _this.calificacion[i].fotos;
                            var id_categoria = _this.calificacion[i].id_categoria;
                            var id_provedores = _this.calificacion[i].id_provedores;
                            var id_servicios = _this.calificacion[i].id_servicios;
                            var locked = _this.calificacion[i].locked;
                            var max_citas_ves = _this.calificacion[i].max_citas_ves;
                            var municipio_id_municipio = _this.calificacion[i].municipio_id_municipio;
                            var nombre = _this.calificacion[i].nombre;
                            var precio = _this.calificacion[i].precio;
                            var precio_cliente_prevenir = _this.calificacion[i].precio_cliente_prevenir;
                            var promedio = _this.calificacion[i].promedio;
                            var medico_id = _this.calificacion[i].medico_id;
                            var video = _this.calificacion[i].video;
                            var coment = _this.calificacion[i].coment;
                            var estrellasAmarillas = [];
                            for (var j = 0; j < promedio; j++) {
                                var id = "amarilla";
                                estrellasAmarillas.push({ id: id });
                            }
                            var resultado = 5 - promedio;
                            if (resultado >= 1) {
                                var estrellasGrises = [];
                                for (var h = 0; h < resultado; h++) {
                                    var id = "gris";
                                    estrellasGrises.push({ id: id });
                                }
                            }
                            _this.servicio.push({ medico_id: medico_id, categoria: categoria, createdAt: createdAt, createdupdate: createdupdate, descripcion: descripcion, descuento: descuento,
                                direccion: direccion, duracion: duracion, foto: foto, fotos: fotos, id_categoria: id_categoria, id_provedores: id_provedores, id_servicios: id_servicios,
                                locked: locked, max_citas_ves: max_citas_ves, municipio_id_municipio: municipio_id_municipio, nombre: nombre, precio: precio,
                                precio_cliente_prevenir: precio_cliente_prevenir, promedio: promedio, video: video, estrellasAmarillas: estrellasAmarillas, estrellasGrises: estrellasGrises, coment: coment });
                        }
                        // this.loading.dismiss();
                        _this.load = false;
                        _this.menu.enable(true);
                        // console.log(this.servicio);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__servicios_servicios__["a" /* ServiciosPage */], { servicios: _this.servicio, vacio: false, mascota: true });
                    }
                }, function (err) {
                    // this.loading.dismiss();
                    _this.load = false;
                    _this.menu.enable(true);
                    _this.presentToast("Error en la conexión, intentalo más tarde");
                    // console.log(err);
                });
            }
        }
    };
    HomePage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    HomePage.prototype.datosUser = function () {
        // console.log('info', this.info);
        var _this = this;
        // console.log(this.global.id_usuario);
        this.api.getUser(this.global.id_usuario).subscribe(function (data) {
            // console.log("data!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
            console.log('data', data);
            _this.usuario = data;
            _this.global.infoPerfil = _this.usuario;
            _this.info = _this.global.infoPerfil;
            _this.foto = _this.info.avatar;
            _this.nombre = _this.info.nombre;
            _this.nombres = _this.info.nombre + " " + _this.info.apellidos;
            _this.global.foto = _this.foto;
            _this.global.nombre = _this.nombre;
            _this.global.nombre = _this.nombres;
            _this.phs('user');
            _this.locked('user');
            console.log(_this.global);
        }, function (err) {
            // console.log(err)
        });
    };
    HomePage.prototype.datosMedico = function () {
        var _this = this;
        this.api.getInfoMedico(this.global.id_usuario).subscribe(function (data) {
            _this.usuario = data[0];
            _this.global.infoPerfil = _this.usuario;
            _this.info = _this.global.infoPerfil;
            _this.foto = _this.info.avatar;
            _this.nombre = _this.info.nombre;
            _this.nombres = _this.info.nombres + " " + _this.info.apellidos;
            _this.global.foto = _this.foto;
            _this.global.nombre = _this.nombre;
            _this.global.nombre = _this.nombres;
            console.log(_this.global);
            _this.phs('medico');
            _this.locked('medico');
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.datosProvedor = function () {
        // console.log(this.global.id_usuario);
        // console.log("aquii 1");
        var _this = this;
        this.api.getProovedor(this.global.id_usuario).subscribe(function (data) {
            // console.log("aquii 2");
            // console.log(data);
            _this.provedor = data;
            _this.global.infoPerfil = _this.provedor;
            _this.info = _this.global.infoPerfil;
            _this.foto = _this.global.apiUrl + _this.info.avatar;
            _this.nombre = _this.info.nombre;
            _this.nombres = _this.info.nombre + " " + _this.info.apellidos;
            _this.global.foto = _this.foto;
            _this.global.nombre = _this.nombre;
            // this.global.nombres = this.nombres;
            console.log(_this.global);
            _this.phs('admin');
            _this.locked('admin');
        }, function (err) {
            // console.log(err)
        });
        // console.log("aquii 3");
    };
    HomePage.prototype.locked = function (user) {
        var _this = this;
        console.log('aqui', this.global.id_usuario);
        this.api.getConfirmacionCuenta(this.global.id_usuario).subscribe(function (data) {
            console.log('aqui locked');
            console.log(data);
            if (data === false) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__blanco_blanco__["a" /* BlancoPage */], { locked: true });
            }
            else {
                if (user == 'user') {
                    // console.log("Aquii");
                    _this.validacion();
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.validacion = function () {
        // console.log(this.global.id_usuario);
        // this.loading = this.loadingCtrl.create({
        //     spinner: 'hide',
        //     content: "Espera un momento ... ",
        //   });
        //   this.loading.present();
        var _this = this;
        this.load = true;
        this.menu.enable(false);
        this.api.getValidacion(this.global.id_usuario).subscribe(function (data) {
            // this.loading.dismiss();
            _this.load = false;
            _this.menu.enable(true);
            _this.val = data;
            if (_this.val.datos === false) {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Información',
                    message: 'Para sacar una cita debes completar la información de tu perfil en "Menú > Mi cuenta", <br> ¿ Deseas completarla ahora ?',
                    buttons: [
                        {
                            text: 'Cancelar',
                            role: 'cancel',
                            handler: function () {
                                // console.log('Cancel clicked');
                            }
                        },
                        {
                            text: 'Aceptar',
                            handler: function () {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__user_user__["a" /* UserPage */]);
                            }
                        }
                    ]
                });
                alert_1.present();
            }
        }, function (err) {
            _this.load = false;
            _this.menu.enable(true);
            _this.presentToast("Error en la conexión, intentalo más tarde o revisa tu conexión");
            // this.loading.dismiss();
        });
    };
    HomePage.prototype.phs = function (rol) {
        var _this = this;
        // console.log("rol",rol);
        var tp;
        if (rol == 'admin') {
            tp = 'provedor';
            //  console.log(this.info.topics);
            //  var tps = [];
            //  for(let i = 0; i < this.info.topics.length ; i++){
            //   let tp = this.info.topics[i];
            //   tps.push({tp})
            //  }
            //  console.log(tps[0].tp,tps[2].tp);
        }
        else if (rol == 'user') {
            tp = 'user';
        }
        else {
            tp = 'medico';
            console.log("medico");
        }
        // console.log(tp);
        // topics: ['global','admin','user'],
        var options = {
            android: {
                senderID: '777283957904',
                sound: 'true',
                vibrate: 'true',
                topics: [tp],
            },
            ios: {
                alert: 'true',
                badge: true,
                sound: 'false'
            },
        };
        var pushObject = this.push.init(options);
        pushObject.on('notification').subscribe(function (notification) { return console.log('Received a notification', notification); });
        pushObject.on('registration').subscribe(function (registration) {
            return _this.api.obtenerToken(registration).then(function (res) { console.log(res); }, function (err) {
                //  console.log(err);
            });
        });
        //  console.log(this.token.registrationId);
        //  console.log('Device registered', registration)
        pushObject.on('error').subscribe(function (error) { return console.error('Error with Push plugin', error); });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\ionic\appMovil\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton>\n\n  	<button ion-button menuToggle>\n\n  		<ion-icon name="menu"></ion-icon>\n\n  	</button>\n\n    <ion-title>Prevenir express</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n<!-- <ion-slides spaceBetween="50" pager>\n\n	<ion-slide><img src="/assets/imgs/slider/banner1a.png" alt=""></ion-slide>\n\n	<ion-slide><img src="/assets/imgs/slider/banner3a.png" alt=""></ion-slide>\n\n	<ion-slide><img src="/assets/imgs/slider/porquenosprefieren.png" alt=""></ion-slide>\n\n</ion-slides> -->\n\n\n\n<ion-slides autoplay="5000" loop="true" speed="3000" pager>\n\n  <ion-slide *ngFor="let slide of slideData">\n\n    <img src="{{slide.image}}" />\n\n  </ion-slide>\n\n</ion-slides>\n\n\n\n<button ion-button icon-left color="danger"  (click)="misCitas()" class="btnCitas" round block>\n\n	<ion-icon name="list-box"></ion-icon>\n\nMis citas</button>\n\n<!-- <br> -->\n\n<button *ngIf="global.admin" ion-button icon-left color="prevenir"  (click)="adminServs()" class="btnCitas" round block>\n\n	<ion-icon name="list-box"></ion-icon>\n\nAdministrar servicios</button>\n\n<!-- <br> -->\n\n<!-- <button ion-button icon-left color="energized"  (click)="misCitas()" class="btnCitas" round block>\n\n	<ion-icon name="list-box"></ion-icon>\n\nMi cuenta</button> -->\n\n\n\n\n\n\n\n\n\n  <!-- <ion-item>\n\n    <ion-label>Categorias</ion-label>\n\n    <ion-select multiple="false" (ionChange)="categoriaSelect($event);">\n\n      <ion-option *ngFor="let cate of ctgas;let i = index" [value]="cate.id_categoria"  >{{cate.nombre}}</ion-option>     \n\n    </ion-select>\n\n  </ion-item>\n\n<ion-input type="text" placeholder="¿ Que estas buscando ?" [(ngModel)]="busqueda"></ion-input> -->\n\n\n\n<p class="p1"> ¿Donde quieres ser atendido? </p>\n\n<ion-item>\n\n  <ion-label>Departamento</ion-label>\n\n  <ion-select multiple="false" (ionChange)="departamentoSelect($event);" cancelText="cancelar">\n\n    <ion-option *ngFor="let dpt of dptms;let i = index" [value]="dpt.id_departamento"  >{{dpt.nombre}}</ion-option>     \n\n  </ion-select>\n\n</ion-item>\n\n\n\n<ion-item>\n\n  <ion-label>Municipio</ion-label>\n\n  <ion-select multiple="false" (ionChange)="municipioSelect($event);" cancelText="cancelar">\n\n      <ion-option *ngFor="let mnp of mncps;let i = index" [value]="mnp.id_municipio">{{mnp.nombre}}</ion-option>\n\n    \n\n  </ion-select>\n\n</ion-item>\n\n<p class="p1"> Encuentra el servicio que estas buscando </p>\n\n\n\n<button ion-button icon-left color="danger" class="btnCitas" round block (click)="buscar()">\n\n	<ion-icon name="search"></ion-icon>\n\n    Buscar proveedor\n\n</button>\n\n<button ion-button icon-left  class="btnCitas" round block (click)="buscar(true)">\n\n    <ion-icon name="paw"></ion-icon>\n\n      Buscar Veterinario\n\n  </button>\n\n\n\n\n\n</ion-content>\n\n\n\n\n\n<div class="loading" *ngIf="load">\n\n  <img src="/assets/imgs/pulso.gif" alt="">\n\n</div>'/*ion-inline-end:"E:\ionic\appMovil\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__app_global__["a" /* Global */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_push__["a" /* Push */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], HomePage);
    return HomePage;
}());

// miles(numero){
//       var num = numero.replace(/\./g,"");
//       if(!isNaN(num)){
//       num = num.toString().split("").reverse().join("").replace(/(?=\d*\.?)(\d{3})/g,'$1.');
//       num = num.split("").reverse().join("").replace(/^[\.]/, "");
//       console.log(num);
//       }
//       // else{ alert("Solo se permiten numeros");
//       // input.value = input.value.replace(/[^\d\.]*/g,"");
//       // }
// }
// categorias(){
//   this.api.getCategorias()
// 	.subscribe(
//   (data)=>{this.ctgas=data;
//   // console.log(this.ctgas)
// },
// 	(error)=>{
//     this.loading.dismiss();
//     // console.log(error);
//   })
// }
// categoriaSelect(selectedValue: any){
//   this.cateSelect = selectedValue;
//   // console.log(this.cateSelect);
// }
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/actualizar-servicio/actualizar-servicio.module": [
		510,
		0
	],
	"../pages/agregar-beneficiario/agregar-beneficiario.module": [
		197
	],
	"../pages/agregar-medico/agregar-medico.module": [
		332
	],
	"../pages/beneficiarios/beneficiarios.module": [
		333
	],
	"../pages/blanco/blanco.module": [
		336
	],
	"../pages/calificacion/calificacion.module": [
		337
	],
	"../pages/citas-provedor/citas-provedor.module": [
		338
	],
	"../pages/citas/citas.module": [
		339
	],
	"../pages/contactenos/contactenos.module": [
		340
	],
	"../pages/formulario-registro-admin/formulario-registro-admin.module": [
		341
	],
	"../pages/formulario-registro/formulario-registro.module": [
		342
	],
	"../pages/listado-publicaciones/listado-publicaciones.module": [
		343
	],
	"../pages/medicos/medicos.module": [
		344
	],
	"../pages/modal-beneficiario/modal-beneficiario.module": [
		345
	],
	"../pages/modal-cita-user/modal-cita-user.module": [
		346
	],
	"../pages/modal-cita/modal-cita.module": [
		347
	],
	"../pages/modal-medico/modal-medico.module": [
		348
	],
	"../pages/popover-filtro/popover-filtro.module": [
		349
	],
	"../pages/publicaciones-proveedor/publicaciones-proveedor.module": [
		350
	],
	"../pages/publicar-servicio/publicar-servicio.module": [
		351
	],
	"../pages/registro/registro.module": [
		352
	],
	"../pages/sacar-cita/sacar-cita.module": [
		353
	],
	"../pages/servicio/servicio.module": [
		354
	],
	"../pages/servicios/servicios.module": [
		355
	],
	"../pages/terminos/terminos.module": [
		356
	],
	"../pages/user/user.module": [
		357
	],
	"../pages/welcome/welcome.module": [
		358
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 196;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarBeneficiarioPageModule", function() { return AgregarBeneficiarioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agregar_beneficiario__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AgregarBeneficiarioPageModule = /** @class */ (function () {
    function AgregarBeneficiarioPageModule() {
    }
    AgregarBeneficiarioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__agregar_beneficiario__["a" /* AgregarBeneficiarioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__agregar_beneficiario__["a" /* AgregarBeneficiarioPage */]),
            ],
        })
    ], AgregarBeneficiarioPageModule);
    return AgregarBeneficiarioPageModule;
}());

//# sourceMappingURL=agregar-beneficiario.module.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgregarBeneficiarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_global__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(19);
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
 * Generated class for the AgregarBeneficiarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AgregarBeneficiarioPage = /** @class */ (function () {
    function AgregarBeneficiarioPage(navCtrl, navParams, formBuilder, toastCtrl, api, global, loadingCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.api = api;
        this.global = global;
        this.loadingCtrl = loadingCtrl;
        this.app = app;
        this.pSelect = 47;
        this.mascota = this.navParams.get('mascota');
        if (!this.mascota) {
            this.validacionesBeneficiario();
            this.pais();
            this.obtenerParentescos();
        }
        else {
            // console.log("aqui");
            this.validacionesMascota();
        }
    }
    AgregarBeneficiarioPage.prototype.validacionesMascota = function () {
        this.datosMascota = this.formBuilder.group({
            nombres: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(50)]],
            especie: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(50)]],
            raza: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(50)]],
            color: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(50)]],
            fechaNacimiento: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]]
        });
    };
    AgregarBeneficiarioPage.prototype.validacionesBeneficiario = function () {
        this.datos = this.formBuilder.group({
            fecha: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(35)]],
            apellido: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(35)]],
        });
        this.datosSinCuenta = this.formBuilder.group({
            identificacion: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[0-9]*')]],
            telefono: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[0-9]*')]],
            check: [false, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].requiredTrue]],
        });
        this.datosConCuenta = this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
            telefono: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[0-9]*')]],
            identificacion: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[0-9]*')]],
        });
    };
    AgregarBeneficiarioPage.prototype.ionViewDidLoad = function () {
    };
    AgregarBeneficiarioPage.prototype.esterilizado = function (ev) {
        // console.log(ev);
        this.esterilizadoMascota = ev;
    };
    AgregarBeneficiarioPage.prototype.sexo = function (ev) {
        // console.log(ev);
        this.sexoMascota = ev;
    };
    AgregarBeneficiarioPage.prototype.agregarMascota = function () {
        var _this = this;
        if (!this.sexoMascota) {
            this.presentToast("Por favor elige un sexo para el peludito.");
        }
        else if (!this.esterilizadoMascota) {
            this.presentToast("Por favor selecciona el campo esterilizado.");
        }
        else if (!this.datosMascota.value.fechaNacimiento) {
            this.presentToast("Por favor selecciona una fecha de nacimiento.");
        }
        else {
            // this.loading = this.loadingCtrl.create({
            //   spinner: 'hide',
            //   content: "Espera un momento<br>estamos guardando información... ",
            // });
            // this.loading.present();
            this.load = true;
            var datos = { especie: this.datosMascota.value.especie, raza: this.datosMascota.value.raza, color: this.datosMascota.value.color, nombre: this.datosMascota.value.nombres, sexo: this.sexoMascota, fechan: this.datosMascota.value.fechaNacimiento, esteril: this.esterilizadoMascota, id_usu: this.global.id_usuario };
            // console.log(datos);
            this.api.postMascota(datos).then(function (res) {
                if (res === true) {
                    //  this.loading.dismiss();
                    _this.load = false;
                    _this.presentToast("Peludito agregado con exito");
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
                }
                else {
                    // this.loading.dismiss();
                    _this.load = false;
                    _this.presentToast("Error al agregar peludito");
                }
            }, function (err) {
                // this.loading.dismiss();
                _this.load = false;
                _this.presentToast("Error en la conexion, intentalo mas tarde");
            });
        }
    };
    AgregarBeneficiarioPage.prototype.obtenerParentescos = function () {
        var _this = this;
        // this.loading = this.loadingCtrl.create({
        //   spinner: 'hide',
        //   content: "Espera un momento<br>estamos cargando parentescos... ",
        // });
        // this.loading.present();
        this.load = true;
        this.api.getParentesco().subscribe(function (data) {
            _this.parentescos = data;
            // this.loading.dismiss();
            _this.load = false;
            // console.log(data);
        }, function (err) {
            _this.load = false;
            // console.log(err);
        });
    };
    AgregarBeneficiarioPage.prototype.ionViewDidLeave = function () {
        var overlayView = this.app._overlayPortal._views[0];
        if (overlayView && overlayView.dismiss) {
            overlayView.dismiss(); // cerrará los modales, alertas, etc
        }
    };
    AgregarBeneficiarioPage.prototype.goToBack = function () {
        this.navCtrl.pop();
    };
    AgregarBeneficiarioPage.prototype.parentesco = function (ev) {
        this.beneParentesco = ev;
        // console.log(this.beneParentesco);
    };
    AgregarBeneficiarioPage.prototype.datosBeneficiario = function (bol) {
        var _this = this;
        var datos;
        if (bol === true) {
            datos = { fecha_n: this.datos.value.fecha, nomb: this.datos.value.nombre, apellidos: this.datos.value.apellido,
                ident: this.datosConCuenta.value.identificacion, parent: this.beneParentesco, pais: this.pSelect, id_usu: this.global.id_usuario,
                tel: this.datosConCuenta.value.telefono, email: this.datosConCuenta.value.email, cuenta: bol };
            console.log(datos);
        }
        else {
            datos = { fecha_n: this.datos.value.fecha, nomb: this.datos.value.nombre, apellidos: this.datos.value.apellido, ident: this.datosSinCuenta.value.identificacion, cuenta: bol,
                parent: this.beneParentesco, tel: this.datosSinCuenta.value.telefono, pais: this.pSelect };
            console.log(datos);
        }
        this.api.postBeneficiario(datos).then(function (res) {
            console.log(res);
            if (res === true) {
                // this.loading.dismiss();
                _this.load = false;
                _this.presentToast("Beneficiario agregador con exito");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
            }
            else {
                // this.loading.dismiss();
                _this.load = false;
                _this.presentToast("No se pudo agregar el beneficiario, intentalo más tarde");
            }
        }, function (err) {
            // console.log(err);
            // this.loading.dismiss();
            _this.load = false;
            _this.navCtrl.pop();
            _this.presentToast("Error en la conexión, intentalo más tarde");
        });
    };
    AgregarBeneficiarioPage.prototype.pais = function () {
        var _this = this;
        this.load = true;
        this.api.getPais().subscribe(function (data) {
            _this.load = false;
            _this.paises = data;
            // console.log(this.paises);
        }, function (err) {
            _this.load = false;
            // console.log(err);
        });
    };
    AgregarBeneficiarioPage.prototype.paisSelect = function (ev) {
        this.pSelect = ev;
    };
    AgregarBeneficiarioPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    AgregarBeneficiarioPage.prototype.fechaNacimiento = function () {
        // console.log(this.datos.value.fecha);
        var fecha1 = __WEBPACK_IMPORTED_MODULE_3_moment__(this.datos.value.fecha); //fecha de nacimiento
        var today = __WEBPACK_IMPORTED_MODULE_3_moment__(new Date().toISOString()).format('YYYY-M-DD');
        var fecha2 = __WEBPACK_IMPORTED_MODULE_3_moment__(today); //fecha actual
        var years = fecha2.diff(fecha1, 'years');
        console.log(years);
        if ((years > 18 && years < 65)) {
            console.log('aqui');
            this.tipoBeneficiario = true;
        }
        else {
            console.log('aca');
            this.tipoBeneficiario = false;
        }
    };
    AgregarBeneficiarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-agregar-beneficiario',template:/*ion-inline-start:"E:\ionic\appMovil\src\pages\agregar-beneficiario\agregar-beneficiario.html"*/'<!--\n\n  Generated template for the AgregarBeneficiarioPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title *ngIf="!mascota">Agregar beneficiario</ion-title>\n\n    <ion-title *ngIf="mascota">Agregar Peludito</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <!-- ---------------------------------------Formulario Beneficiario ------------------------------------------- -->\n\n  \n\n  <div *ngIf="!mascota">\n\n\n\n    <div style="padding: 5px;">\n\n        <p>Puedes agregar hasta 10 beneficiarios y 3 peluditos a tu grupo familiar, los beneficiarios menores de 18 años y mayores de 65 años estan bajo la tutoria del titular de la cuenta.</p>\n\n    </div>\n\n   \n\n\n\n\n\n    <form [formGroup]="datos" (ngSubmit)="datosBeneficiario()"  novalidate>\n\n\n\n        <ion-item>\n\n            <ion-label>\n\n              <ion-icon name="person"></ion-icon>\n\n            </ion-label>\n\n            <ion-input type="text" placeholder="Nombres beneficiario" formControlName="nombre"></ion-input>\n\n          </ion-item>\n\n          <ion-item *ngIf="datos.get(\'nombre\').errors && datos.get(\'nombre\').dirty">\n\n            <p color="danger" ion-text *ngIf="datos.get(\'nombre\').hasError(\'required\')">* El campo es requerido</p>\n\n            <p color="danger" ion-text *ngIf="datos.get(\'nombre\').hasError(\'minlength\')">Cantidad minima de caracteres (2)</p>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>\n\n              <ion-icon name="person"></ion-icon>\n\n            </ion-label>\n\n            <ion-input type="text" placeholder="Apellidos beneficiario" formControlName="apellido"></ion-input>\n\n          </ion-item>\n\n          <ion-item *ngIf="datos.get(\'apellido\').errors && datos.get(\'apellido\').dirty">\n\n            <p color="danger" ion-text *ngIf="datos.get(\'apellido\').hasError(\'required\')">* El campo es requerido</p>\n\n            <p color="danger" ion-text *ngIf="datos.get(\'apellido\').hasError(\'minlength\')">Cantidad minima de caracteres (3)</p>\n\n        </ion-item>\n\n      \n\n        <ion-item>\n\n            <ion-label icon-left>\n\n              <ion-icon name="calendar"></ion-icon>\n\n              Fecha nacimiento</ion-label>\n\n            <ion-datetime displayFormat="DD/MM/YYYY" formControlName="fecha"  doneText="Ok" cancelText="Cancelar" (ionChange)="fechaNacimiento()"></ion-datetime>\n\n          </ion-item>\n\n    </form>\n\n\n\n    <div *ngIf="tipoBeneficiario === false" novalidate>\n\n        <form [formGroup]="datosSinCuenta">\n\n\n\n            <ion-item>\n\n                <ion-label>\n\n                  <ion-icon name="card"></ion-icon>\n\n                </ion-label>\n\n                <ion-input type="number" placeholder="No. identificacion beneficiario" formControlName="identificacion"></ion-input>\n\n              </ion-item>\n\n  \n\n              <ion-item *ngIf="datosConCuenta.get(\'identificacion\').errors && datosConCuenta.get(\'identificacion\').dirty">\n\n                <p color="danger" ion-text *ngIf="datosConCuenta.get(\'identificacion\').hasError(\'required\')">* El campo es requerido</p>\n\n                <p color="danger" ion-text *ngIf="datosConCuenta.get(\'identificacion\').hasError(\'pattern\')">* El campo solo acepta numeros</p>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label>\n\n                  <ion-icon name="call"></ion-icon>\n\n                </ion-label>\n\n                <ion-input type="number" placeholder="No. de contacto" formControlName="telefono"></ion-input>\n\n              </ion-item>\n\n  \n\n              <ion-item *ngIf="datosConCuenta.get(\'telefono\').errors && datosConCuenta.get(\'telefono\').dirty">\n\n                <p color="danger" ion-text *ngIf="datosConCuenta.get(\'telefono\').hasError(\'required\')">* El campo es requerido</p>\n\n                <p color="danger" ion-text *ngIf="datosConCuenta.get(\'telefono\').hasError(\'pattern\')">* El campo solo acepta numeros</p>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label>Parentesco</ion-label>\n\n                <ion-select multiple="false" (ionChange)="parentesco($event);" cancelText="cancelar">\n\n                  <ion-option *ngFor="let p of parentescos" [value]="p.id_parentescos">{{p.nombre}}</ion-option>     \n\n                </ion-select>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                  <ion-label>Pais</ion-label>\n\n                  <ion-select multiple="false" (ionChange)="paisSelect($event);" cancelText="cancelar">\n\n                      <ion-option *ngFor="let p of paises;let i = index" [selected]="i == 4" [value]="p.id_pais">{{p.nombre}}</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n                <br>\n\n\n\n          <p>Acepto que este beneficiario esta bajo la tutoria del titular de esta cuenta.</p>\n\n          <ion-item ion-col col-12>  \n\n            <ion-label>Acepto</ion-label>\n\n            <ion-checkbox required formControlName="check"></ion-checkbox>\n\n          </ion-item>\n\n\n\n        </form>\n\n    </div>\n\n\n\n    <div *ngIf="tipoBeneficiario">\n\n      <form [formGroup]="datosConCuenta" novalidate>\n\n\n\n          <ion-item>\n\n              <ion-label>\n\n                <ion-icon name="card"></ion-icon>\n\n              </ion-label>\n\n              <ion-input type="number" placeholder="No. identificacion beneficiario" formControlName="identificacion"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item *ngIf="datosConCuenta.get(\'identificacion\').errors && datosConCuenta.get(\'identificacion\').dirty">\n\n              <p color="danger" ion-text *ngIf="datosConCuenta.get(\'identificacion\').hasError(\'required\')">* El campo es requerido</p>\n\n              <p color="danger" ion-text *ngIf="datosConCuenta.get(\'identificacion\').hasError(\'pattern\')">* El campo solo acepta numeros</p>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n              <ion-label>\n\n                <ion-icon name="call"></ion-icon>\n\n              </ion-label>\n\n              <ion-input type="number" placeholder="No. de contacto beneficiario" formControlName="telefono"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item *ngIf="datosConCuenta.get(\'telefono\').errors && datosConCuenta.get(\'telefono\').dirty">\n\n              <p color="danger" ion-text *ngIf="datosConCuenta.get(\'telefono\').hasError(\'required\')">* El campo es requerido</p>\n\n              <p color="danger" ion-text *ngIf="datosConCuenta.get(\'telefono\').hasError(\'pattern\')">* El campo solo acepta numeros</p>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n              <ion-label>\n\n                <ion-icon name="mail"></ion-icon>\n\n              </ion-label>\n\n              <ion-input type="email" placeholder="Correo electronico beneficiario" formControlName="email"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item *ngIf="datosConCuenta.get(\'email\').errors && datosConCuenta.get(\'email\').dirty">\n\n              <p color="danger" ion-text *ngIf="datosConCuenta.get(\'email\').hasError(\'required\')">* El campo es requerido</p>\n\n              <p color="danger" ion-text *ngIf="datosConCuenta.get(\'email\').hasError(\'pattern\') || datosConCuenta.get(\'email\').hasError(\'email\')">* El correo no es valido.</p>\n\n          </ion-item>\n\n\n\n            <ion-item>\n\n              <ion-label>Parentesco</ion-label>\n\n              <ion-select multiple="false" (ionChange)="parentesco($event);" cancelText="cancelar">\n\n                <ion-option *ngFor="let p of parentescos" [value]="p.id_parentescos">{{p.nombre}}</ion-option>     \n\n              </ion-select>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n              <ion-label>Pais</ion-label>\n\n              <ion-select multiple="false" (ionChange)="paisSelect($event);" cancelText="cancelar">\n\n                  <ion-option *ngFor="let p of paises;let i = index" [selected]="i == 4" [value]="p.id_pais">{{p.nombre}}</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n\n\n      </form>\n\n    </div>\n\n\n\n    <!-- Botones -->\n\n    <div>\n\n        <button ion-button block round [disabled]="!this.datos.valid || !this.datosConCuenta.valid" *ngIf="tipoBeneficiario" (click)="datosBeneficiario(true)">\n\n            <ion-icon name="person-add"></ion-icon>\n\n            Agregar con\n\n        </button>\n\n\n\n        <button ion-button block round [disabled]="!this.datos.valid || !this.datosSinCuenta.valid" *ngIf="!tipoBeneficiario" (click)="datosBeneficiario(false)">\n\n            <ion-icon name="person-add"></ion-icon>\n\n            Agregar sin\n\n        </button>\n\n  \n\n        <button color="energized" ion-button round block (click)="goToBack()">\n\n          <ion-icon name="arrow-round-back"></ion-icon>\n\n          Volver\n\n        </button>\n\n    </div>\n\n    \n\n  </div>\n\n\n\n  <!-- ---------------------------------------Formulario Mascota ------------------------------------------- -->\n\n  <div *ngIf="mascota">\n\n\n\n    <form [formGroup]="datosMascota" (ngSubmit)="agregarMascota()" novalidate>\n\n      <ion-item>\n\n        <ion-label icon-left><ion-icon name="paw"></ion-icon></ion-label>\n\n        <ion-input type="text" placeholder="Nombre peludito" formControlName="nombres"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="datosMascota.get(\'nombres\').errors && datosMascota.get(\'nombres\').dirty">\n\n          <p color="danger" ion-text *ngIf="datosMascota.get(\'nombres\').hasError(\'required\')">* El campo es requerido</p>\n\n          <p color="danger" ion-text *ngIf="datosMascota.get(\'nombres\').hasError(\'minlength\')">Cantidad minima de caracteres (2)</p>\n\n          <p color="danger" ion-text *ngIf="datosMascota.get(\'nombres\').hasError(\'maxlength\')">Cantidad minima de caracteres (50)</p>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n          <ion-label icon-left><ion-icon name="paw"></ion-icon></ion-label>\n\n          <ion-input type="text" placeholder="Especie" formControlName="especie"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="datosMascota.get(\'especie\').errors && datosMascota.get(\'especie\').dirty">\n\n          <p color="danger" ion-text *ngIf="datosMascota.get(\'especie\').hasError(\'required\')">* El campo es requerido</p>\n\n          <p color="danger" ion-text *ngIf="datosMascota.get(\'especie\').hasError(\'minlength\')">Cantidad minima de caracteres (2)</p>\n\n          <p color="danger" ion-text *ngIf="datosMascota.get(\'especie\').hasError(\'maxlength\')">Cantidad minima de caracteres (50)</p>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n          <ion-label icon-left><ion-icon name="paw"></ion-icon></ion-label>\n\n          <ion-input type="text" placeholder="Raza" formControlName="raza"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="datosMascota.get(\'raza\').errors && datosMascota.get(\'raza\').dirty">\n\n          <p color="danger" ion-text *ngIf="datosMascota.get(\'raza\').hasError(\'required\')">* El campo es requerido</p>\n\n          <p color="danger" ion-text *ngIf="datosMascota.get(\'raza\').hasError(\'minlength\')">Cantidad minima de caracteres (2)</p>\n\n          <p color="danger" ion-text *ngIf="datosMascota.get(\'raza\').hasError(\'maxlength\')">Cantidad minima de caracteres (50)</p>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n          <ion-label icon-left><ion-icon name="female"></ion-icon>Sexo</ion-label>\n\n          <ion-select (ionChange)="sexo($event)" cancelText="cancelar">\n\n            <ion-option value="Macho">Macho</ion-option>\n\n            <ion-option value="Hembra">Hembra</ion-option>\n\n          </ion-select>   \n\n      </ion-item>\n\n\n\n      <ion-item>\n\n          <ion-label icon-left><ion-icon name="color-palette"></ion-icon></ion-label>\n\n          <ion-input type="text" placeholder="Color" formControlName="color"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="datosMascota.get(\'color\').errors && datosMascota.get(\'color\').dirty">\n\n          <p color="danger" ion-text *ngIf="datosMascota.get(\'color\').hasError(\'required\')">* El campo es requerido</p>\n\n          <p color="danger" ion-text *ngIf="datosMascota.get(\'color\').hasError(\'minlength\')">Cantidad minima de caracteres (2)</p>\n\n          <p color="danger" ion-text *ngIf="datosMascota.get(\'color\').hasError(\'maxlength\')">Cantidad minima de caracteres (50)</p>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n          <ion-label icon-left>\n\n            <ion-icon name="calendar"></ion-icon>\n\n            Fecha nacimiento</ion-label>\n\n          <ion-datetime displayFormat="DD/MM/YYYY" formControlName="fechaNacimiento" doneText="Ok" cancelText="Cancelar"></ion-datetime>\n\n        </ion-item>\n\n        <ion-item *ngIf="datosMascota.get(\'fechaNacimiento\').errors && datosMascota.get(\'fechaNacimiento\').dirty">\n\n            <p color="danger" ion-text *ngIf="datosMascota.get(\'fechaNacimiento\').hasError(\'required\')">* El campo es requerido</p>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label icon-left><ion-icon name="male"></ion-icon>Esterilizado</ion-label>\n\n            <ion-select (ionChange)="esterilizado($event)" cancelText="cancelar">\n\n              <ion-option value="si">Si</ion-option>\n\n              <ion-option value="no">No</ion-option>\n\n            </ion-select>   \n\n        </ion-item>\n\n\n\n        <br/>\n\n\n\n        <button ion-button type="submit" icon-left round block>\n\n          <ion-icon name="add"></ion-icon>\n\n          Agregar Peludito\n\n        </button> \n\n    </form>\n\n    <button color="energized" ion-button round block (click)="goToBack()">\n\n        <ion-icon name="arrow-round-back"></ion-icon>\n\n        Volver\n\n      </button>\n\n  </div>\n\n</ion-content>\n\n\n\n<div class="loading" *ngIf="load">\n\n  <img src="/assets/imgs/pulso.gif" alt="">\n\n</div> \n\n'/*ion-inline-end:"E:\ionic\appMovil\src\pages\agregar-beneficiario\agregar-beneficiario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_5__app_global__["a" /* Global */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicApp */]])
    ], AgregarBeneficiarioPage);
    return AgregarBeneficiarioPage;
}());

//# sourceMappingURL=agregar-beneficiario.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarMedicoPageModule", function() { return AgregarMedicoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agregar_medico__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AgregarMedicoPageModule = /** @class */ (function () {
    function AgregarMedicoPageModule() {
    }
    AgregarMedicoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__agregar_medico__["a" /* AgregarMedicoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__agregar_medico__["a" /* AgregarMedicoPage */]),
            ],
        })
    ], AgregarMedicoPageModule);
    return AgregarMedicoPageModule;
}());

//# sourceMappingURL=agregar-medico.module.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneficiariosPageModule", function() { return BeneficiariosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__beneficiarios__ = __webpack_require__(334);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BeneficiariosPageModule = /** @class */ (function () {
    function BeneficiariosPageModule() {
    }
    BeneficiariosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__beneficiarios__["a" /* BeneficiariosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__beneficiarios__["a" /* BeneficiariosPage */]),
            ],
        })
    ], BeneficiariosPageModule);
    return BeneficiariosPageModule;
}());

//# sourceMappingURL=beneficiarios.module.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeneficiariosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agregar_beneficiario_agregar_beneficiario__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_global__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modal_beneficiario_modal_beneficiario__ = __webpack_require__(335);
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
 * Generated class for the BeneficiariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BeneficiariosPage = /** @class */ (function () {
    function BeneficiariosPage(navCtrl, navParams, api, global, modalCtrl, loadingCtrl, app, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.global = global;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.app = app;
        this.toastCtrl = toastCtrl;
        this.info = [];
        this.disabled = false;
        this.disabledMascota = false;
        this.mostrar = false;
        this.mostrarPeluditos = false;
        this.infoMascotas = [];
        this.mymodel = "segment1";
    }
    BeneficiariosPage.prototype.ionViewDidLoad = function () {
    };
    BeneficiariosPage.prototype.goToAgregar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__agregar_beneficiario_agregar_beneficiario__["a" /* AgregarBeneficiarioPage */]);
    };
    BeneficiariosPage.prototype.ionViewDidEnter = function () {
        this.info = [];
        this.infoMascotas = [];
        this.obtenerBeneficiarios();
        this.obtenerMascotas();
    };
    BeneficiariosPage.prototype.ionViewCanLeave = function () {
        var activeModal = this.app._modalPortal.getActive();
        if (activeModal) {
            activeModal.dismiss();
        }
    };
    BeneficiariosPage.prototype.obtenerMascotas = function () {
        var _this = this;
        this.api.getMascotasUser(this.global.id_usuario).subscribe(function (data) {
            _this.mascotas = data;
            // console.log(this.mascotas);
            if (_this.mascotas.length == 0) {
                _this.mostrarPeluditos = true;
            }
            else {
                for (var i = 0; i < _this.mascotas.length; i++) {
                    var fecha = _this.mascotas[i].fecha_nacimineto;
                    fecha = __WEBPACK_IMPORTED_MODULE_5_moment__(fecha).format('DD-M-YYYY');
                    var avatar = _this.mascotas[i].avatar;
                    var color = _this.mascotas[i].color;
                    var dueno = _this.mascotas[i].dueño;
                    var especie = _this.mascotas[i].especie;
                    var esterilizado = _this.mascotas[i].esterilizado;
                    var id_mascotas = _this.mascotas[i].id_mascotas;
                    var nombre = _this.mascotas[i].nombre;
                    var raza = _this.mascotas[i].raza;
                    var sexo = _this.mascotas[i].sexo;
                    var telefono = _this.mascotas[i].telefono;
                    _this.infoMascotas.push({ fecha: fecha, avatar: avatar, color: color, dueno: dueno, especie: especie,
                        esterilizado: esterilizado, id_mascotas: id_mascotas, nombres: nombre, raza: raza, sexo: sexo, telefono: telefono });
                }
                if (_this.infoMascotas.length >= 3) {
                    _this.disabledMascota = true;
                }
                // console.log(this.infoMascotas);
            }
        }, function (err) {
            _this.presentToast("Error en la conexion, intentalo mas tarde");
        });
    };
    BeneficiariosPage.prototype.obtenerBeneficiarios = function () {
        var _this = this;
        // this.loading = this.loadingCtrl.create({
        //   spinner: 'hide',
        //   content: "Espera un momento<br>estamos cargando beneficiarios... ",
        // });
        // this.loading.present();
        this.load = true;
        this.api.getBeneficiarios(this.global.id_usuario).subscribe(function (data) {
            _this.beneficiarios = data;
            // this.loading.dismiss();
            _this.load = false;
            if (_this.beneficiarios.length == 0) {
                _this.mostrar = true;
            }
            else {
                for (var i = 0; i < _this.beneficiarios.length; i++) {
                    var nombres = _this.beneficiarios[i].nombre + " " + _this.beneficiarios[i].apellidos;
                    var nombre = _this.beneficiarios[i].nombre;
                    var apellidos = _this.beneficiarios[i].apellidos;
                    var identificacion = _this.beneficiarios[i].cedula;
                    var fecha = _this.beneficiarios[i].fecha_nacimiento;
                    fecha = __WEBPACK_IMPORTED_MODULE_5_moment__(fecha).format('DD-M-YYYY');
                    var telefono = _this.beneficiarios[i].telefono;
                    var avatar = _this.beneficiarios[i].avatar;
                    var correo = _this.beneficiarios[i].correo;
                    var direccion = _this.beneficiarios[i].direccion;
                    var id_pais = _this.beneficiarios[i].id_pais;
                    var id = _this.beneficiarios[i].id;
                    var parentesco = _this.beneficiarios[i].parentesco;
                    var watshapp = _this.beneficiarios[i].telefonowatshapp;
                    var id_usuarioTitular = _this.beneficiarios[i].usuariosBf_id;
                    _this.info.push({ nombres: nombres, identificacion: identificacion, fecha: fecha, telefono: telefono,
                        avatar: avatar, correo: correo, direccion: direccion, pais: id_pais, id_beneficiario: id,
                        parentesco: parentesco, watshapp: watshapp, id_usuarioTitular: id_usuarioTitular, nombre: nombre, apellidos: apellidos });
                }
                // console.log(this.info);
                if (_this.info.length >= 10) {
                    _this.disabled = true;
                }
            }
        }, function (err) {
            // this.loading.dismiss();
            _this.load = false;
            _this.presentToast("Error en la conexión, intentalo más tarde");
        });
    };
    // infoPeludito(){
    // }
    // fecha(){
    // }
    BeneficiariosPage.prototype.ver = function (info, bol) {
        // console.log(info);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__modal_beneficiario_modal_beneficiario__["a" /* ModalBeneficiarioPage */], { info: info, mascota: bol });
        modal.present();
        modal.onDidDismiss(function (data) {
            // console.log(data);
        });
    };
    BeneficiariosPage.prototype.goToAgregarMascota = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__agregar_beneficiario_agregar_beneficiario__["a" /* AgregarBeneficiarioPage */], { mascota: true });
    };
    BeneficiariosPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    BeneficiariosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-beneficiarios',template:/*ion-inline-start:"E:\ionic\appMovil\src\pages\beneficiarios\beneficiarios.html"*/'<!--\n\n  Generated template for the BeneficiariosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Beneficiarios</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n \n\n  \n\n\n\n    <div class="boton">\n\n      <button ion-button block round icon-left color="energized" [disabled]="disabled" (click)="goToAgregar()">\n\n        <ion-icon name="person-add"></ion-icon>\n\n        Agregar beneficiario</button>\n\n\n\n        <button ion-button block round icon-left color="secondary" [disabled]="disabledMascota" (click)="goToAgregarMascota()">\n\n            <ion-icon name="paw"></ion-icon>\n\n            Agregar Peludito</button>\n\n    </div>\n\n\n\n\n\n    <ion-segment [(ngModel)]="mymodel">\n\n        <ion-segment-button class="segment"value="segment1">\n\n          <p class="p">Beneficiarios</p> \n\n        </ion-segment-button>\n\n        <ion-segment-button  class="segment" value="segment2">\n\n        <p class="p">Peluditos</p> \n\n       \n\n        </ion-segment-button>\n\n    </ion-segment>\n\n    \n\n    <div [ngSwitch]="mymodel">\n\n    \n\n      <div *ngSwitchCase="\'segment1\'" >\n\n  \n\n        <ion-list>\n\n         \n\n            <ion-card *ngFor="let b of info" (click)="ver(b)">\n\n                <ion-card-header>{{b.nombres}}</ion-card-header>\n\n                <ion-card-content>\n\n                  <ion-grid>\n\n                    <ion-row>\n\n                      <ion-col col-9> \n\n                        <h3><strong>Identificacion : </strong> {{b.identificacion}}</h3>\n\n                        <h3><strong>Fecha nacimiento: </strong>{{b.fecha}}</h3>\n\n                        <h3><strong>No. Contacto : </strong>{{b.telefono}}</h3>\n\n                      </ion-col>\n\n                      <ion-col col-3>\n\n                        <img class="imgBeneficiario" [src]="b.avatar" alt="nd">\n\n                      </ion-col>\n\n                    </ion-row>\n\n                  </ion-grid>\n\n                 \n\n                </ion-card-content>\n\n              </ion-card>\n\n            \n\n        </ion-list>\n\n  \n\n        <div *ngIf="mostrar">\n\n           <br>\n\n          <h2 class="h1" >No tienes beneficiarios registrados</h2>\n\n        </div>\n\n\n\n      </div>\n\n  \n\n  \n\n      <div *ngSwitchCase="\'segment2\'">\n\n          \n\n\n\n          <ion-list>\n\n         \n\n              <ion-card *ngFor="let m of infoMascotas" (click)="ver(m,true)">\n\n                  <ion-card-header>{{m.nombres}}</ion-card-header>\n\n                  <ion-card-content>\n\n                    <ion-grid>\n\n                      <ion-row>\n\n                        <ion-col col-9> \n\n                          <h3><strong>Especie : </strong> {{m.especie}}</h3>\n\n                          <h3><strong>Fecha nacimiento: </strong>{{m.fecha}}</h3>\n\n                          <h3><strong>Raza : </strong>{{m.raza}}</h3>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                          <img class="imgBeneficiario" [src]="m.avatar" alt="nd">\n\n                        </ion-col>\n\n                      </ion-row>\n\n                    </ion-grid>\n\n                   \n\n                  </ion-card-content>\n\n                </ion-card>\n\n              \n\n          </ion-list>\n\n\n\n            <div *ngIf="mostrarPeluditos">\n\n               <br>\n\n              <h2 class="h1" >No tienes peluditos registrados</h2>\n\n            </div>\n\n      </div>\n\n    </div>\n\n</ion-content>\n\n\n\n<div class="loading" *ngIf="load">\n\n  <img src="/assets/imgs/pulso.gif" alt="">\n\n</div> \n\n'/*ion-inline-end:"E:\ionic\appMovil\src\pages\beneficiarios\beneficiarios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_4__app_global__["a" /* Global */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicApp */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], BeneficiariosPage);
    return BeneficiariosPage;
}());

//# sourceMappingURL=beneficiarios.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalBeneficiarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_crop__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_base64__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_photo_viewer__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_api__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_global__ = __webpack_require__(10);
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
 * Generated class for the ModalBeneficiarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalBeneficiarioPage = /** @class */ (function () {
    function ModalBeneficiarioPage(navCtrl, navParams, viewCtrl, crop, base64, photoViewer, camera, toastCtrl, loadingCtrl, api, global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.crop = crop;
        this.base64 = base64;
        this.photoViewer = photoViewer;
        this.camera = camera;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.api = api;
        this.global = global;
        this.info = this.navParams.get('info');
        this.mascota = this.navParams.get('mascota');
        // console.log(this.info.id_mascotas);
        // console.log(this.mascota);
    }
    ModalBeneficiarioPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad ModalBeneficiarioPage');
    };
    ModalBeneficiarioPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ModalBeneficiarioPage.prototype.verImg = function (foto) {
        this.photoViewer.show(foto, '', { share: false });
    };
    ModalBeneficiarioPage.prototype.openGalery = function () {
        var _this = this;
        // this.loading = this.loadingCtrl.create({
        //   spinner: 'hide',
        //   content: "Espera un momento<br>estamos cargando el recorte... ",
        // });
        // this.loading.present();
        this.load = true;
        var options = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            allowEdit: false,
            correctOrientation: true,
            //destinationType: this.camera.DestinationType.DATA_URL,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            quality: 75,
            saveToPhotoAlbum: false,
            targetWidth: 800,
            targetHeight: 800
        };
        this.camera.getPicture(options).then(function (imageData) {
            // let opt = {
            //   quality: 75,
            //   widthRatio: 6,
            //   heightRatio: 6,
            //   targetWidth: 100,
            //   targetHeight: 500
            //   };
            return _this.crop.crop(imageData, { quality: 75 });
        }).then(function (croppedImagePath) {
            return _this.base64.encodeFile(croppedImagePath);
        }).then(function (base64Data) {
            _this.base64Image = base64Data;
            _this.base64Image = _this.base64Image.replace("*", "jpeg");
            // this.loading.dismiss();
            _this.load = false;
            // console.log("IMAGENNNNNNNNNNNNNNNNN");
            // console.log(this.base64Image);
            // console.log("IMAGENNNNNNNNNNNNNNNNN");
        }).catch(function (err) {
            // this.loading.dismiss();
            _this.load = false;
            // this.presentToast("Error en la conexión, intentalo más tarde"); solucion dismiss recorte
            // console.log(err)
        });
    };
    ModalBeneficiarioPage.prototype.guardarAvatar = function () {
        var _this = this;
        // console.log(this.imagen);
        // this.loading = this.loadingCtrl.create({
        //   spinner: 'hide',
        //   content: "Espera un momento<br>estamos guardando tu avatar... ",
        // });
        // this.loading.present();
        this.load = true;
        // let j = {foto:this.base64Image,id:this.global.id_usuario,admin:this.global.admin,medico:this.global.medico};
        this.api.editAvatar(this.base64Image, this.global.id_usuario, this.global.admin, this.global.medico).then(function (data) {
            var a = data[0].cambio;
            if (a === true) {
                // this.loading.dismiss();
                _this.load = false;
                _this.presentToast("Avatar cambiado con exito");
                _this.viewCtrl.dismiss();
                _this.navCtrl.pop();
                _this.base64Image = null;
            }
            else {
                // this.loading.dismiss();
                _this.load = false;
                _this.presentToast("Error al cambiar el avatar intentalo mas tarde");
            }
        }, function (err) {
            _this.presentToast("Error en la conexión, intentalo más tarde.");
            // console.log(err);
            _this.load = false;
        });
    };
    ModalBeneficiarioPage.prototype.guardarAvatarMascota = function () {
        var _this = this;
        // this.loading = this.loadingCtrl.create({
        //   spinner: 'hide',
        //   content: "Espera un momento<br>estamos guardando tu avatar... ",
        // });
        // this.loading.present();
        this.load = true;
        // this.base64Image,this.info.id_mascotas,this.global.admin
        var datos = { id: this.info.id_mascotas, imagen: this.base64Image };
        this.api.editAvatarMascota(datos).then(function (res) {
            if (res === true) {
                // this.loading.dismiss();
                _this.load = true;
                _this.presentToast("Avatar cambiado con exito");
                _this.viewCtrl.dismiss();
                _this.navCtrl.pop();
                _this.base64Image = null;
            }
            else {
                // this.loading.dismiss();
                _this.load = true;
                _this.presentToast("Error al cambiar el avatar intentalo mas tarde");
            }
        }, function (err) {
            // this.loading.dismiss();
            _this.load = true;
            _this.presentToast("Error en la conexión, intentalo más tarde.");
        });
    };
    ModalBeneficiarioPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    ModalBeneficiarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-modal-beneficiario',template:/*ion-inline-start:"E:\ionic\appMovil\src\pages\modal-beneficiario\modal-beneficiario.html"*/'<!--\n\n  Generated template for the ModalBeneficiarioPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <ion-buttons start>\n\n          <button ion-button icon-only (click)="close()">\n\n            <ion-icon name="close"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n\n\n    <ion-title >{{info.nombres}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n<!-- ------------------------------------------MODAL BENEFICIARIO --------------------------------------- -->\n\n\n\n<div *ngIf="!mascota">\n\n\n\n    <div class="img">\n\n        <img *ngIf="!base64Image" id="userImg" [src]="info.avatar" alt="nd" (click)="verImg(info.avatar)">\n\n        <img *ngIf="base64Image" id="userImg" [src]="base64Image | youtube" alt="nd">\n\n        <ion-fab >\n\n          <button ion-fab mini (click)="openGalery()">\n\n            <ion-icon name="cloud-upload"></ion-icon>\n\n          </button>\n\n        </ion-fab>\n\n      </div>\n\n      <button *ngIf="base64Image" icon-left ion-button block round (click)="guardarAvatar()">\n\n        <ion-icon name="archive"></ion-icon>\n\n        Guardar Avatar</button>\n\n\n\n<h1 class="h1"></h1>\n\n<div class="card">\n\n      <ion-card>\n\n        <ion-card-content>\n\n          <h2><strong>Nombres : </strong> {{info.nombre}} </h2>\n\n          <h2><strong>Apellidos : </strong> {{info.apellidos}} </h2>\n\n          <h2><strong>Fecha Nacimiento : </strong> {{info.fecha}} </h2>\n\n          <h2><strong>Patentesco : </strong> {{info.parentesco}}</h2>\n\n          <h2><strong>No. Contacto : </strong> {{info.telefono}}</h2>\n\n          <br>\n\n          \n\n        </ion-card-content>\n\n      </ion-card>\n\n      </div>\n\n\n\n      <button ion-button color="energized" icon-left round block (click)="close()">\n\n          <ion-icon name="arrow-round-back" ></ion-icon>\n\n        Volver</button>\n\n\n\n      </div>\n\n\n\n\n\n      <!-- --------------------------------------- MODAL MASCOTA --------------------------------------- -->\n\n\n\n\n\n      <div *ngIf="mascota">\n\n\n\n\n\n          <div class="img">\n\n              <img *ngIf="!base64Image" id="userImg" [src]="info.avatar" alt="nd" (click)="verImg(info.avatar)">\n\n              <img *ngIf="base64Image" id="userImg" [src]="base64Image | youtube" alt="nd">\n\n              <ion-fab >\n\n                <button ion-fab mini (click)="openGalery()">\n\n                  <ion-icon name="cloud-upload"></ion-icon>\n\n                </button>\n\n              </ion-fab>\n\n            </div>\n\n            <button *ngIf="base64Image" icon-left ion-button block round (click)="guardarAvatarMascota()">\n\n              <ion-icon name="archive"></ion-icon>\n\n              Guardar Avatar</button>\n\n      \n\n      <h1 class="h1"></h1>\n\n      <div class="card">\n\n            <ion-card>\n\n              <ion-card-content>\n\n                <h2><strong>Nombre : </strong> {{info.nombres}} </h2>\n\n                <h2><strong>Dueño : </strong> {{info.dueno}} </h2>\n\n                <h2><strong>No. Contacto : </strong> {{info.telefono}}</h2>\n\n                <h2><strong>Sexo : </strong> {{info.sexo}} </h2>\n\n                <h2><strong>Estelirizado : </strong> {{info.esterilizado}} </h2>\n\n                <h2><strong>Fecha Nacimiento : </strong> {{info.fecha}} </h2>\n\n                <h2><strong>Especie : </strong> {{info.especie}}</h2>\n\n                <h2><strong>Raza : </strong> {{info.raza}}</h2>\n\n                <h2><strong>Color : </strong> {{info.color}}</h2>\n\n                \n\n                <br>\n\n                \n\n              </ion-card-content>\n\n            </ion-card>\n\n            </div>\n\n      \n\n            <button ion-button color="energized" icon-left round block (click)="close()">\n\n                <ion-icon name="arrow-round-back" ></ion-icon>\n\n              Volver</button>\n\n\n\n\n\n\n\n      </div>\n\n        \n\n</ion-content>\n\n\n\n<div class="loading" *ngIf="load">\n\n  <img src="/assets/imgs/pulso.gif" alt="">\n\n</div> \n\n'/*ion-inline-end:"E:\ionic\appMovil\src\pages\modal-beneficiario\modal-beneficiario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_crop__["a" /* Crop */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_base64__["a" /* Base64 */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_photo_viewer__["a" /* PhotoViewer */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_7__app_global__["a" /* Global */]])
    ], ModalBeneficiarioPage);
    return ModalBeneficiarioPage;
}());

//# sourceMappingURL=modal-beneficiario.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlancoPageModule", function() { return BlancoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blanco__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BlancoPageModule = /** @class */ (function () {
    function BlancoPageModule() {
    }
    BlancoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__blanco__["a" /* BlancoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__blanco__["a" /* BlancoPage */]),
            ],
        })
    ], BlancoPageModule);
    return BlancoPageModule;
}());

//# sourceMappingURL=blanco.module.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalificacionPageModule", function() { return CalificacionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calificacion__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CalificacionPageModule = /** @class */ (function () {
    function CalificacionPageModule() {
    }
    CalificacionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__calificacion__["a" /* CalificacionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__calificacion__["a" /* CalificacionPage */]),
            ],
        })
    ], CalificacionPageModule);
    return CalificacionPageModule;
}());

//# sourceMappingURL=calificacion.module.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitasProvedorPageModule", function() { return CitasProvedorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__citas_provedor__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic3_calendar_en__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CitasProvedorPageModule = /** @class */ (function () {
    function CitasProvedorPageModule() {
    }
    CitasProvedorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__citas_provedor__["a" /* CitasProvedorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__citas_provedor__["a" /* CitasProvedorPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic3_calendar_en__["a" /* CalendarModule */]
            ],
        })
    ], CitasProvedorPageModule);
    return CitasProvedorPageModule;
}());

//# sourceMappingURL=citas-provedor.module.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitasPageModule", function() { return CitasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__citas__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CitasPageModule = /** @class */ (function () {
    function CitasPageModule() {
    }
    CitasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__citas__["a" /* CitasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__citas__["a" /* CitasPage */]),
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
        })
    ], CitasPageModule);
    return CitasPageModule;
}());

//# sourceMappingURL=citas.module.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactenosPageModule", function() { return ContactenosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contactenos__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContactenosPageModule = /** @class */ (function () {
    function ContactenosPageModule() {
    }
    ContactenosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contactenos__["a" /* ContactenosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contactenos__["a" /* ContactenosPage */]),
            ],
        })
    ], ContactenosPageModule);
    return ContactenosPageModule;
}());

//# sourceMappingURL=contactenos.module.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioRegistroAdminPageModule", function() { return FormularioRegistroAdminPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formulario_registro_admin__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FormularioRegistroAdminPageModule = /** @class */ (function () {
    function FormularioRegistroAdminPageModule() {
    }
    FormularioRegistroAdminPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__formulario_registro_admin__["a" /* FormularioRegistroAdminPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__formulario_registro_admin__["a" /* FormularioRegistroAdminPage */]),
            ],
        })
    ], FormularioRegistroAdminPageModule);
    return FormularioRegistroAdminPageModule;
}());

//# sourceMappingURL=formulario-registro-admin.module.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioRegistroPageModule", function() { return FormularioRegistroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formulario_registro__ = __webpack_require__(121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FormularioRegistroPageModule = /** @class */ (function () {
    function FormularioRegistroPageModule() {
    }
    FormularioRegistroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__formulario_registro__["a" /* FormularioRegistroPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__formulario_registro__["a" /* FormularioRegistroPage */]),
            ],
        })
    ], FormularioRegistroPageModule);
    return FormularioRegistroPageModule;
}());

//# sourceMappingURL=formulario-registro.module.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoPublicacionesPageModule", function() { return ListadoPublicacionesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listado_publicaciones__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListadoPublicacionesPageModule = /** @class */ (function () {
    function ListadoPublicacionesPageModule() {
    }
    ListadoPublicacionesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__listado_publicaciones__["a" /* ListadoPublicacionesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__listado_publicaciones__["a" /* ListadoPublicacionesPage */]),
            ],
        })
    ], ListadoPublicacionesPageModule);
    return ListadoPublicacionesPageModule;
}());

//# sourceMappingURL=listado-publicaciones.module.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicosPageModule", function() { return MedicosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__medicos__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MedicosPageModule = /** @class */ (function () {
    function MedicosPageModule() {
    }
    MedicosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__medicos__["a" /* MedicosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__medicos__["a" /* MedicosPage */]),
            ],
        })
    ], MedicosPageModule);
    return MedicosPageModule;
}());

//# sourceMappingURL=medicos.module.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBeneficiarioPageModule", function() { return ModalBeneficiarioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_beneficiario__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ModalBeneficiarioPageModule = /** @class */ (function () {
    function ModalBeneficiarioPageModule() {
    }
    ModalBeneficiarioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_beneficiario__["a" /* ModalBeneficiarioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_beneficiario__["a" /* ModalBeneficiarioPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__modal_beneficiario__["a" /* ModalBeneficiarioPage */]
            ]
        })
    ], ModalBeneficiarioPageModule);
    return ModalBeneficiarioPageModule;
}());

//# sourceMappingURL=modal-beneficiario.module.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCitaUserPageModule", function() { return ModalCitaUserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_cita_user__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalCitaUserPageModule = /** @class */ (function () {
    function ModalCitaUserPageModule() {
    }
    ModalCitaUserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_cita_user__["a" /* ModalCitaUserPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_cita_user__["a" /* ModalCitaUserPage */]),
            ],
        })
    ], ModalCitaUserPageModule);
    return ModalCitaUserPageModule;
}());

//# sourceMappingURL=modal-cita-user.module.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCitaPageModule", function() { return ModalCitaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_cita__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalCitaPageModule = /** @class */ (function () {
    function ModalCitaPageModule() {
    }
    ModalCitaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_cita__["a" /* ModalCitaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_cita__["a" /* ModalCitaPage */]),
            ],
        })
    ], ModalCitaPageModule);
    return ModalCitaPageModule;
}());

//# sourceMappingURL=modal-cita.module.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalMedicoPageModule", function() { return ModalMedicoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_medico__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalMedicoPageModule = /** @class */ (function () {
    function ModalMedicoPageModule() {
    }
    ModalMedicoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_medico__["a" /* ModalMedicoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_medico__["a" /* ModalMedicoPage */]),
            ],
        })
    ], ModalMedicoPageModule);
    return ModalMedicoPageModule;
}());

//# sourceMappingURL=modal-medico.module.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverFiltroPageModule", function() { return PopoverFiltroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover_filtro__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PopoverFiltroPageModule = /** @class */ (function () {
    function PopoverFiltroPageModule() {
    }
    PopoverFiltroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__popover_filtro__["a" /* PopoverFiltroPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__popover_filtro__["a" /* PopoverFiltroPage */]),
            ],
        })
    ], PopoverFiltroPageModule);
    return PopoverFiltroPageModule;
}());

//# sourceMappingURL=popover-filtro.module.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicacionesProveedorPageModule", function() { return PublicacionesProveedorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__publicaciones_proveedor__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PublicacionesProveedorPageModule = /** @class */ (function () {
    function PublicacionesProveedorPageModule() {
    }
    PublicacionesProveedorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__publicaciones_proveedor__["a" /* PublicacionesProveedorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__publicaciones_proveedor__["a" /* PublicacionesProveedorPage */]),
            ],
        })
    ], PublicacionesProveedorPageModule);
    return PublicacionesProveedorPageModule;
}());

//# sourceMappingURL=publicaciones-proveedor.module.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicarServicioPageModule", function() { return PublicarServicioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__publicar_servicio__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PublicarServicioPageModule = /** @class */ (function () {
    function PublicarServicioPageModule() {
    }
    PublicarServicioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__publicar_servicio__["a" /* PublicarServicioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__publicar_servicio__["a" /* PublicarServicioPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__publicar_servicio__["a" /* PublicarServicioPage */]
            ]
        })
    ], PublicarServicioPageModule);
    return PublicarServicioPageModule;
}());

//# sourceMappingURL=publicar-servicio.module.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPageModule", function() { return RegistroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registro__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegistroPageModule = /** @class */ (function () {
    function RegistroPageModule() {
    }
    RegistroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__registro__["a" /* RegistroPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__registro__["a" /* RegistroPage */]),
            ],
        })
    ], RegistroPageModule);
    return RegistroPageModule;
}());

//# sourceMappingURL=registro.module.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SacarCitaPageModule", function() { return SacarCitaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sacar_cita__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic3_calendar_en__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SacarCitaPageModule = /** @class */ (function () {
    function SacarCitaPageModule() {
    }
    SacarCitaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sacar_cita__["a" /* SacarCitaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sacar_cita__["a" /* SacarCitaPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic3_calendar_en__["a" /* CalendarModule */],
            ],
        })
    ], SacarCitaPageModule);
    return SacarCitaPageModule;
}());

//# sourceMappingURL=sacar-cita.module.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicioPageModule", function() { return ServicioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicio__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ServicioPageModule = /** @class */ (function () {
    function ServicioPageModule() {
    }
    ServicioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__servicio__["a" /* ServicioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__servicio__["a" /* ServicioPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__servicio__["a" /* ServicioPage */]
            ]
        })
    ], ServicioPageModule);
    return ServicioPageModule;
}());

//# sourceMappingURL=servicio.module.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosPageModule", function() { return ServiciosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ServiciosPageModule = /** @class */ (function () {
    function ServiciosPageModule() {
    }
    ServiciosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__servicios__["a" /* ServiciosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__servicios__["a" /* ServiciosPage */]),
            ],
        })
    ], ServiciosPageModule);
    return ServiciosPageModule;
}());

//# sourceMappingURL=servicios.module.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminosPageModule", function() { return TerminosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terminos__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TerminosPageModule = /** @class */ (function () {
    function TerminosPageModule() {
    }
    TerminosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__terminos__["a" /* TerminosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__terminos__["a" /* TerminosPage */]),
            ],
        })
    ], TerminosPageModule);
    return TerminosPageModule;
}());

//# sourceMappingURL=terminos.module.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageModule", function() { return UserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UserPageModule = /** @class */ (function () {
    function UserPageModule() {
    }
    UserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user__["a" /* UserPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user__["a" /* UserPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__user__["a" /* UserPage */]
            ]
        })
    ], UserPageModule);
    return UserPageModule;
}());

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WelcomePageModule = /** @class */ (function () {
    function WelcomePageModule() {
    }
    WelcomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* WelcomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* WelcomePage */]),
            ],
        })
    ], WelcomePageModule);
    return WelcomePageModule;
}());

//# sourceMappingURL=welcome.module.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sacar_cita_sacar_cita__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__publicaciones_proveedor_publicaciones_proveedor__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_global__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__medicos_medicos__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// @Pipe({
//   name: 'youtube',
// })
// export class YoutubePipe implements PipeTransform {
//   /**
//    * Takes a value and makes it lowercase.
//    */
//    constructor(private dom:DomSanitizer){
//    }
//   transform(value) {
//    return this.dom.bypassSecurityTrustResourceUrl(value);
//   }
// }
/**
 * Generated class for the ServicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServicioPage = /** @class */ (function () {
    function ServicioPage(navCtrl, navParams, api, formBuilder, global, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.formBuilder = formBuilder;
        this.global = global;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.fotos = [];
        this.estrellasAmarillas = [];
        this.estrellasGrises = [];
        this.comentario = [];
        this.masPublicaciones = false;
        // this.user();
        this.servicio = navParams.get('servicio');
        this.mascota = this.navParams.get('mascota');
        this.cita = this.navParams.get('cita');
        this.masPublicaciones = this.navParams.get('masPublicaciones');
        if (this.global.admin === true && this.global.medico === false) {
            this.esAdmin = false;
        }
        else if (this.global.admin === false && this.global.medico === true) {
            this.esAdmin = false;
        }
        else if (this.global.admin === false && this.global.medico === false) {
            this.esAdmin = true;
        }
        console.log(this.servicio);
        if (this.cita) {
            this.servicio = this.servicio[0];
            // console.log(this.servicio);
        }
        this.getProveedor();
        this.getFotos();
        // this.getMedico();
        this.getSucursales(this.servicio.id_servicios, this.servicio.id_provedores, this.servicio.id_municipio);
        this.datos = this.formBuilder.group({
            descripcion: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(15)]],
        });
        if (!this.servicio.video) {
            this.video = "https://www.youtube.com/embed/4Z4TxFh1tO8";
        }
        else {
            this.video = "https://www.youtube.com/embed/" + this.servicio.video;
        }
    }
    ServicioPage.prototype.medicoPerfil = function () {
        // console.log("medico perfil" , this.servicio.medico_id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__medicos_medicos__["a" /* MedicosPage */], { medico: this.infoMedico });
    };
    ServicioPage.prototype.getSucursales = function (id_servicio, id_provedor, id_municipio) {
        // console.log('sucu',id_provedor, id_servicio, id_municipio);
        this.api.getSucursalesServicio(id_servicio, id_provedor, id_municipio).subscribe(function (response) {
            console.log(response);
        }, function (err) {
            console.log(err);
        });
    };
    ServicioPage.prototype.getMedico = function () {
        var _this = this;
        this.api.getInfoMedico(this.servicio.medico_id).subscribe(function (data) {
            _this.infoMedico = data[0];
            console.log(_this.infoMedico);
            _this.nombresMedico = _this.infoMedico.nombres + " " + _this.infoMedico.apellidos;
        }, function (err) {
        });
    };
    ServicioPage.prototype.getFotos = function () {
        var fotos = this.servicio.fotos;
        // console.log("AQUIIIIIIIIIIIIIII");
        // console.log(fotos.length);
        for (var i = 0; i < fotos.length; i++) {
            var foto = fotos[i].ruta;
            foto = this.global.apiUrl + foto;
            this.fotos.push({ foto: foto });
        }
        // console.log(this.fotos)
    };
    ServicioPage.prototype.goToMasPerfil = function () {
        this.navCtrl.pop();
    };
    ServicioPage.prototype.user = function () {
        var _this = this;
        this.load = true;
        this.api.getUser(this.global.id_usuario).subscribe(function (data) {
            _this.usr = data;
            _this.load = false;
            // console.log(this.usr);
        }, function (err) {
            _this.load = false;
            // console.log(err);
        });
    };
    ServicioPage.prototype.ionViewDidLoad = function () {
        // this.api.getServicio(this.servicio.id_servicio).subscribe((data)=>{
        //   this.service = data;
        //   this.service = this.service[0];
        // },(err)=>{
        // });
        this.nombreUser = this.global.nombre;
        this.correoUser = this.global.infoPerfil;
        this.correoUser = this.correoUser.correo;
        // this.calificacion();
        this.comentarios();
    };
    ServicioPage.prototype.comentarios = function () {
        // console.log(this.servicio.coment);
        for (var i = 0; i < this.servicio.coment.length; i++) {
            var fecha = this.servicio.coment[i].CreatedAt;
            fecha = __WEBPACK_IMPORTED_MODULE_7_moment__(fecha).format('DD/M/YYYY');
            var nombre = this.servicio.coment[i].nombre;
            var comentario_med = this.servicio.coment[i].comentario_med;
            var coment = this.servicio.coment[i].comentario;
            var calificacion = this.servicio.coment[i].calificacion;
            var avatar = this.servicio.coment[i].avatar;
            var estrellasAmarillasComent = [];
            for (var j = 0; j < calificacion; j++) {
                var id = "amarilla";
                estrellasAmarillasComent.push({ id: id });
            }
            // let resultado = 5 - calificacion;
            // if(resultado >= 1){
            //   var estrellasGrisesComent = [];
            //   for(let h = 0; h < resultado ; h++){
            //     let id = "gris";
            //     estrellasGrisesComent.push({id:id});
            //   }
            // }
            this.comentario.push({ comentario_med: comentario_med, avatar: avatar, fecha: fecha, nombre: nombre, coment: coment, estrellasAmarillas: estrellasAmarillasComent });
        }
        console.log(this.comentario);
    };
    ServicioPage.prototype.getProveedor = function () {
        var _this = this;
        this.load = true;
        this.api.getProovedor(this.servicio.id_provedores).subscribe(function (data) {
            _this.prov = data;
            // console.log(this.prov);
            _this.nombre = _this.prov.nombre;
            _this.nit = _this.prov.nit;
            _this.descripcion = _this.prov.descripcion;
            _this.logo = _this.global.apiUrl + _this.prov.avatar;
            _this.id = _this.prov.id_provedor;
            _this.correoProv = _this.prov.correo;
            // console.log(this.descripcion);
            _this.load = false;
        }, function (error) {
            _this.load = false;
            // console.log(error);
        });
    };
    ServicioPage.prototype.sacarCita = function (idProduct, id_categoria) {
        console.log(idProduct, '  -  ', id_categoria);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sacar_cita_sacar_cita__["a" /* SacarCitaPage */], { id_servicio: idProduct, mascota: this.mascota, id_categoria: id_categoria });
    };
    ServicioPage.prototype.goToMaspublicaciones = function () {
        // console.log(this.id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__publicaciones_proveedor_publicaciones_proveedor__["a" /* PublicacionesProveedorPage */], { provedor: this.prov });
    };
    ServicioPage.prototype.asunto = function (ev) {
        this.asunt = ev;
    };
    ServicioPage.prototype.mensaje = function () {
        var _this = this;
        this.correoUser;
        this.correoProv;
        var mensaje = this.datos.value.descripcion + ". Correo enviado por :  " + this.correoUser;
        if (!this.asunt) {
            this.presentToast("Debes elegir un asunto antes de enviar el mensaje");
        }
        else {
            var correo = { remitente: this.nombreUser, destino: this.correoProv, texto: mensaje, asunto: this.asunt };
            // console.log(correo);
            // this.loading = this.loadingCtrl.create({
            //   spinner: 'hide',
            //   content: "Espera un momento<br>estamos enviando tu mensaje... ",
            // });
            // this.loading.present();
            this.load = true;
            this.api.enviarMensaje(correo).then(function (data) {
                // console.log(data);
                if (data === true) {
                    _this.datos.reset();
                    // this.loading.dismiss();
                    _this.load = false;
                    _this.presentToast("Su mensaje ha sido enviado con exito");
                }
                else {
                    // this.loading.dismiss();
                    _this.load = false;
                    _this.presentToast("El mensaje no ha sido enviado, intentalo mas tarde");
                }
            }, function (err) {
                // this.loading.dismiss();
                _this.load = false;
                _this.presentToast("Error al enviar el mensaje, intentalo mas tarde");
            });
        }
    };
    ServicioPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    ServicioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-servicio',template:/*ion-inline-start:"E:\ionic\appMovil\src\pages\servicio\servicio.html"*/'<!--\n\n  Generated template for the ServicioPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n	<ion-title>{{servicio.nombre}}</ion-title>\n\n	\n\n	<!-- <ion-buttons end>\n\n			<button class="btnNavbar" ion-button (click)="medicoPerfil()">\n\n			  <ion-icon name="contact"></ion-icon>\n\n			  </button>\n\n		</ion-buttons> -->\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content >\n\n	\n\n<div *ngIf="!masPublicaciones">\n\n    <ion-card (click)="goToMaspublicaciones()">\n\n       <ion-item>\n\n	     <ion-avatar item-start>\n\n	        <img src="{{logo}}">\n\n	     </ion-avatar>\n\n			<h2><strong>{{ nombre }}</strong></h2>\n\n			<h3>Nit/TP : {{nit}}</h3>\n\n	    <p>{{descripcion}}</p>\n\n	   </ion-item>\n\n	<button ion-button round block color="danger">Ver Provedor</button>\n\n	</ion-card>\n\n</div>\n\n\n\n	\n\n<div *ngIf="masPublicaciones">\n\n		<ion-card (click)="goToMasPerfil()">\n\n				<ion-item>\n\n				<ion-avatar item-start>\n\n					 <img src="{{logo}}">\n\n				</ion-avatar>\n\n			 <h2><strong>{{ nombre }}</strong></h2>\n\n			 <h3>Nit/TP : {{nit}}</h3>\n\n			 <p>{{descripcion}}</p>\n\n			</ion-item>\n\n	 <button ion-button round block color="danger">Mas Publicaciones</button>\n\n	 </ion-card>\n\n</div>\n\n\n\n	<ion-card >\n\n			<ion-grid>\n\n			  <ion-row>\n\n				<ion-col>\n\n				<ion-slides spaceBetween="50" pager>\n\n				 <ion-slide *ngFor="let f of fotos"><img [src]="f.foto" alt=""></ion-slide>		\n\n				</ion-slides>\n\n				</ion-col>\n\n			  </ion-row>\n\n			</ion-grid>\n\n			  \n\n			  <ion-card-content>\n\n				<ion-card-title>\n\n					<p><strong>{{servicio.categoria}}</strong></p>\n\n					</ion-card-title>\n\n					<div class="dv" >      \n\n              <h2><strong>Calificación : </strong>&nbsp; \n\n                <label *ngFor="let e of servicio.estrellasAmarillas" id="{{e.id}}" >★</label>\n\n                <label *ngFor="let e of servicio.estrellasGrises" id="{{e.id}}" >★</label></h2>\n\n          </div>\n\n				  <h2><strong>Precio : </strong>${{servicio.precio}}</h2>\n\n				  <h2><ion-icon name="thumbs-up">&nbsp;Descuento : </ion-icon>&nbsp;{{servicio.descuento}}%</h2>\n\n				  <h2><strong>Precio clientes prevenir :</strong> ${{servicio.precio_cliente_prevenir}}</h2>\n\n				  <h2><strong>Duracion aprox. en minutos :</strong> {{servicio.duracion}}</h2>\n\n				  <h2><strong>Dirección :</strong> {{servicio.direccion}}</h2>\n\n				  <h2><strong>Medico :</strong> {{nombresMedico}}</h2>\n\n				  <br>\n\n                  <p>{{ servicio.descripcion }}</p>\n\n			  </ion-card-content>\n\n			</ion-card>\n\n\n\n\n\n<!-- <ion-card>\n\n	<ion-slides spaceBetween="50" pager>\n\n		<ion-slide *ngFor="let f of fotos"><img [src]="f.foto" alt=""></ion-slide>\n\n		\n\n	</ion-slides>\n\n	<br>\n\n	<h4>Categoria : {{servicio.categoria}}</h4>\n\n	<br>\n\n	<h4>Precio : ${{servicio.precio}}</h4>\n\n	<br>\n\n	<p><ion-icon name="thumbs-up">&nbsp;Descuento</ion-icon>&nbsp;{{servicio.descuento}}%</p>\n\n	<br>\n\n	<h3>Precio clientes prevenir : ${{servicio.precio_cliente_prevenir}}</h3>\n\n	<br>\n\n	<h4>Duracion aprox. en minutos : {{servicio.duracion}}</h4>\n\n	<br>\n\n	<p>{{ servicio.descripcion }}</p>\n\n</ion-card> -->\n\n\n\n\n\n\n\n<ion-card>\n\n	<ion-card-header>\n\n		<strong>Conoscanos</strong>\n\n	</ion-card-header>\n\n	 <ion-card-content>\n\n			\n\n		<div class="embed-container">\n\n			<iframe width="560" height="315" [src]="video | youtube" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\n\n		</div>\n\n	</ion-card-content> \n\n	\n\n</ion-card>\n\n\n\n<ion-card>\n\n	<ion-card-header>\n\n	<strong>Contactenos</strong>	\n\n	</ion-card-header>\n\n	<ion-card-content>\n\n		<ion-item>\n\n           <ion-avatar item-start>\n\n            <img src="{{logo}}">\n\n           </ion-avatar>\n\n           <h2>{{nombre}}</h2>\n\n           <p>Proveedor</p>		\n\n		</ion-item>\n\n		\n\n		<form [formGroup]="datos" (ngSubmit)="mensaje()"  novalidate>\n\n		<ion-item><ion-input class="inp" type="text"  readonly [value]="nombreUser"></ion-input></ion-item>\n\n		<ion-item><ion-input class="inp" type="email" readonly [value]="correoUser"></ion-input></ion-item>\n\n		<ion-item>\n\n			<ion-label>Asunto</ion-label>\n\n				<ion-select (ionChange)="asunto($event);">\n\n					<ion-option value="Consulta">Consulta</ion-option>\n\n					<ion-option value="Pregunta">Pregunta</ion-option>\n\n					<ion-option value="Comentario">Comentario</ion-option>\n\n				</ion-select>\n\n		</ion-item>\n\n		\n\n		<ion-textarea type="text" class="txt_area" formControlName="descripcion" rows="5"  placeholder="Escribe aqui tu mensaje"></ion-textarea>\n\n  		<button ion-button icon-left color="danger" class="btnCitas" [disabled]="!this.datos.valid" round block>\n\n	    <ion-icon name="mail"></ion-icon>\n\n        Mensaje\n\n		</button>\n\n	</form>\n\n\n\n	</ion-card-content>\n\n</ion-card>\n\n\n\n<ion-card>\n\n	<ion-card-header><strong>Comentarios</strong></ion-card-header>\n\n	<div *ngFor="let c of comentario">\n\n	<ion-item >\n\n           <ion-avatar item-start>\n\n            <img src="{{c.avatar}}">\n\n           </ion-avatar>\n\n           <h2>{{c.nombre}}</h2>\n\n					 <h3><label *ngFor="let e of c.estrellasAmarillas" id="{{e.id}}" >★</label>  {{c.fecha}}</h3>			 	\n\n		</ion-item>\n\n		<h2>{{c.coment}}</h2>\n\n		<br>\n\n		<h3><strong>Respuesta</strong></h3>\n\n		<h2>{{c.comentario_med}}</h2>\n\n	</div>\n\n		\n\n</ion-card>\n\n\n\n<ion-fab *ngIf="esAdmin">\n\n	<button ion-fab icon-center (click)="sacarCita(servicio.id_servicios,servicio.id_categoria)" >\n\n		<ion-icon name="medkit"></ion-icon>\n\n	</button>\n\n\n\n</ion-fab>\n\n\n\n</ion-content>\n\n\n\n<div class="loading" *ngIf="load">\n\n  <img src="/assets/imgs/pulso.gif" alt="">\n\n</div> '/*ion-inline-end:"E:\ionic\appMovil\src\pages\servicio\servicio.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__app_global__["a" /* Global */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__app_global__["a" /* Global */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _g || Object])
    ], ServicioPage);
    return ServicioPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

// calificacion(){
//   let calificacion:number = 4;
//   let resultado =  5  - calificacion;
//   // console.log(resultado);
//   for(let i = 0; i < calificacion ; i++){
//     let id = "amarilla";
//     this.estrellasAmarillas.push({id:id});
//   }
//   if(resultado >= 1){
//     for(let i = 0; i < resultado ; i++){
//       let id = "gris";
//       this.estrellasGrises.push({id:id});
//     }
//   }
// }
//# sourceMappingURL=servicio.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(422);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_citas_citas__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic3_calendar_en__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contactenos_contactenos__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_terminos_terminos__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_servicio_servicio__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_sacar_cita_sacar_cita__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_publicaciones_proveedor_publicaciones_proveedor__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_blanco_blanco__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_welcome_welcome__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_registro_registro__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_formulario_registro_formulario_registro__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_formulario_registro_admin_formulario_registro_admin__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_user_user__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_storage__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__global__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_publicar_servicio_publicar_servicio__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_image_picker__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_listado_publicaciones_listado_publicaciones__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_modal_cita_modal_cita__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_popover_filtro_popover_filtro__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_citas_provedor_citas_provedor__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_modal_cita_user_modal_cita_user__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_status_bar__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_splash_screen__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_api_api__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_facebook__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_common_http__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_camera__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_blanco_blanco_module__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_citas_citas_module__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_citas_provedor_citas_provedor_module__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_contactenos_contactenos_module__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_formulario_registro_formulario_registro_module__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_formulario_registro_admin_formulario_registro_admin_module__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_listado_publicaciones_listado_publicaciones_module__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_modal_cita_modal_cita_module__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_modal_cita_user_modal_cita_user_module__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_popover_filtro_popover_filtro_module__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_publicaciones_proveedor_publicaciones_proveedor_module__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_publicar_servicio_publicar_servicio_module__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_registro_registro_module__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_sacar_cita_sacar_cita_module__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_user_user_module__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_welcome_welcome_module__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_servicio_servicio_module__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_terminos_terminos_module__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pipes_pipes_module__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_servicios_servicios_module__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_beneficiarios_beneficiarios_module__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_agregar_beneficiario_agregar_beneficiario_module__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_modal_beneficiario_modal_beneficiario_module__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_calificacion_calificacion_module__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_calificacion_calificacion__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_medicos_medicos_module__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pages_medicos_medicos__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_agregar_medico_agregar_medico_module__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pages_agregar_medico_agregar_medico__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__pages_modal_medico_modal_medico_module__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_modal_medico_modal_medico__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__ionic_native_crop__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__ionic_native_base64__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__ionic_native_photo_viewer__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__ionic_native_push__ = __webpack_require__(331);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import {Calendar} from 'ionic3-calendar-en/src/calendar/calendar';






























































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                // FilterPipe,
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5_ionic3_calendar_en__["a" /* CalendarModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/actualizar-servicio/actualizar-servicio.module#ActualizarServicioPageModule', name: 'ActualizarServicioPage', segment: 'actualizar-servicio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/agregar-beneficiario/agregar-beneficiario.module#AgregarBeneficiarioPageModule', name: 'AgregarBeneficiarioPage', segment: 'agregar-beneficiario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/agregar-medico/agregar-medico.module#AgregarMedicoPageModule', name: 'AgregarMedicoPage', segment: 'agregar-medico', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/beneficiarios/beneficiarios.module#BeneficiariosPageModule', name: 'BeneficiariosPage', segment: 'beneficiarios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/blanco/blanco.module#BlancoPageModule', name: 'BlancoPage', segment: 'blanco', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calificacion/calificacion.module#CalificacionPageModule', name: 'CalificacionPage', segment: 'calificacion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/citas-provedor/citas-provedor.module#CitasProvedorPageModule', name: 'CitasProvedorPage', segment: 'citas-provedor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/citas/citas.module#CitasPageModule', name: 'CitasPage', segment: 'citas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contactenos/contactenos.module#ContactenosPageModule', name: 'ContactenosPage', segment: 'contactenos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/formulario-registro-admin/formulario-registro-admin.module#FormularioRegistroAdminPageModule', name: 'FormularioRegistroAdminPage', segment: 'formulario-registro-admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/formulario-registro/formulario-registro.module#FormularioRegistroPageModule', name: 'FormularioRegistroPage', segment: 'formulario-registro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/listado-publicaciones/listado-publicaciones.module#ListadoPublicacionesPageModule', name: 'ListadoPublicacionesPage', segment: 'listado-publicaciones', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/medicos/medicos.module#MedicosPageModule', name: 'MedicosPage', segment: 'medicos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-beneficiario/modal-beneficiario.module#ModalBeneficiarioPageModule', name: 'ModalBeneficiarioPage', segment: 'modal-beneficiario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-cita-user/modal-cita-user.module#ModalCitaUserPageModule', name: 'ModalCitaUserPage', segment: 'modal-cita-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-cita/modal-cita.module#ModalCitaPageModule', name: 'ModalCitaPage', segment: 'modal-cita', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-medico/modal-medico.module#ModalMedicoPageModule', name: 'ModalMedicoPage', segment: 'modal-medico', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popover-filtro/popover-filtro.module#PopoverFiltroPageModule', name: 'PopoverFiltroPage', segment: 'popover-filtro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/publicaciones-proveedor/publicaciones-proveedor.module#PublicacionesProveedorPageModule', name: 'PublicacionesProveedorPage', segment: 'publicaciones-proveedor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/publicar-servicio/publicar-servicio.module#PublicarServicioPageModule', name: 'PublicarServicioPage', segment: 'publicar-servicio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registro/registro.module#RegistroPageModule', name: 'RegistroPage', segment: 'registro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sacar-cita/sacar-cita.module#SacarCitaPageModule', name: 'SacarCitaPage', segment: 'sacar-cita', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/servicio/servicio.module#ServicioPageModule', name: 'ServicioPage', segment: 'servicio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/servicios/servicios.module#ServiciosPageModule', name: 'ServiciosPage', segment: 'servicios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terminos/terminos.module#TerminosPageModule', name: 'TerminosPage', segment: 'terminos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user/user.module#UserPageModule', name: 'UserPage', segment: 'user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_18__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_31__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_33__pages_blanco_blanco_module__["BlancoPageModule"],
                __WEBPACK_IMPORTED_MODULE_35__pages_citas_provedor_citas_provedor_module__["CitasProvedorPageModule"],
                __WEBPACK_IMPORTED_MODULE_34__pages_citas_citas_module__["CitasPageModule"],
                __WEBPACK_IMPORTED_MODULE_36__pages_contactenos_contactenos_module__["ContactenosPageModule"],
                __WEBPACK_IMPORTED_MODULE_37__pages_formulario_registro_formulario_registro_module__["FormularioRegistroPageModule"],
                __WEBPACK_IMPORTED_MODULE_38__pages_formulario_registro_admin_formulario_registro_admin_module__["FormularioRegistroAdminPageModule"],
                __WEBPACK_IMPORTED_MODULE_39__pages_listado_publicaciones_listado_publicaciones_module__["ListadoPublicacionesPageModule"],
                __WEBPACK_IMPORTED_MODULE_40__pages_modal_cita_modal_cita_module__["ModalCitaPageModule"],
                __WEBPACK_IMPORTED_MODULE_41__pages_modal_cita_user_modal_cita_user_module__["ModalCitaUserPageModule"],
                __WEBPACK_IMPORTED_MODULE_42__pages_popover_filtro_popover_filtro_module__["PopoverFiltroPageModule"],
                __WEBPACK_IMPORTED_MODULE_43__pages_publicaciones_proveedor_publicaciones_proveedor_module__["PublicacionesProveedorPageModule"],
                __WEBPACK_IMPORTED_MODULE_44__pages_publicar_servicio_publicar_servicio_module__["PublicarServicioPageModule"],
                __WEBPACK_IMPORTED_MODULE_45__pages_registro_registro_module__["RegistroPageModule"],
                __WEBPACK_IMPORTED_MODULE_46__pages_sacar_cita_sacar_cita_module__["SacarCitaPageModule"],
                __WEBPACK_IMPORTED_MODULE_47__pages_user_user_module__["UserPageModule"],
                __WEBPACK_IMPORTED_MODULE_48__pages_welcome_welcome_module__["WelcomePageModule"],
                __WEBPACK_IMPORTED_MODULE_49__pages_servicio_servicio_module__["ServicioPageModule"],
                __WEBPACK_IMPORTED_MODULE_52__pages_servicios_servicios_module__["ServiciosPageModule"],
                __WEBPACK_IMPORTED_MODULE_50__pages_terminos_terminos_module__["TerminosPageModule"],
                __WEBPACK_IMPORTED_MODULE_51__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_53__pages_beneficiarios_beneficiarios_module__["BeneficiariosPageModule"],
                __WEBPACK_IMPORTED_MODULE_54__pages_agregar_beneficiario_agregar_beneficiario_module__["AgregarBeneficiarioPageModule"],
                __WEBPACK_IMPORTED_MODULE_55__pages_modal_beneficiario_modal_beneficiario_module__["ModalBeneficiarioPageModule"],
                __WEBPACK_IMPORTED_MODULE_56__pages_calificacion_calificacion_module__["CalificacionPageModule"],
                __WEBPACK_IMPORTED_MODULE_58__pages_medicos_medicos_module__["MedicosPageModule"],
                __WEBPACK_IMPORTED_MODULE_60__pages_agregar_medico_agregar_medico_module__["AgregarMedicoPageModule"],
                __WEBPACK_IMPORTED_MODULE_62__pages_modal_medico_modal_medico_module__["ModalMedicoPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contactenos_contactenos__["a" /* ContactenosPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_terminos_terminos__["a" /* TerminosPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_servicio_servicio__["a" /* ServicioPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_sacar_cita_sacar_cita__["a" /* SacarCitaPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_publicaciones_proveedor_publicaciones_proveedor__["a" /* PublicacionesProveedorPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_blanco_blanco__["a" /* BlancoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_registro_registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_formulario_registro_formulario_registro__["a" /* FormularioRegistroPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_publicar_servicio_publicar_servicio__["a" /* PublicarServicioPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_listado_publicaciones_listado_publicaciones__["a" /* ListadoPublicacionesPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_formulario_registro_admin_formulario_registro_admin__["a" /* FormularioRegistroAdminPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_citas_citas__["a" /* CitasPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_modal_cita_modal_cita__["a" /* ModalCitaPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_popover_filtro_popover_filtro__["a" /* PopoverFiltroPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_citas_provedor_citas_provedor__["a" /* CitasProvedorPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_modal_cita_user_modal_cita_user__["a" /* ModalCitaUserPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_servicio_servicio__["a" /* ServicioPage */],
                __WEBPACK_IMPORTED_MODULE_57__pages_calificacion_calificacion__["a" /* CalificacionPage */],
                __WEBPACK_IMPORTED_MODULE_59__pages_medicos_medicos__["a" /* MedicosPage */],
                __WEBPACK_IMPORTED_MODULE_61__pages_agregar_medico_agregar_medico__["a" /* AgregarMedicoPage */],
                __WEBPACK_IMPORTED_MODULE_63__pages_modal_medico_modal_medico__["a" /* ModalMedicoPage */]
                // Calendar
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_19__global__["a" /* Global */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_image_picker__["a" /* ImagePicker */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_29__providers_api_api__["a" /* ApiProvider */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_64__ionic_native_crop__["a" /* Crop */],
                __WEBPACK_IMPORTED_MODULE_66__ionic_native_photo_viewer__["a" /* PhotoViewer */],
                __WEBPACK_IMPORTED_MODULE_65__ionic_native_base64__["a" /* Base64 */],
                __WEBPACK_IMPORTED_MODULE_67__ionic_native_push__["a" /* Push */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 200,
	"./af.js": 200,
	"./ar": 201,
	"./ar-dz": 202,
	"./ar-dz.js": 202,
	"./ar-kw": 203,
	"./ar-kw.js": 203,
	"./ar-ly": 204,
	"./ar-ly.js": 204,
	"./ar-ma": 205,
	"./ar-ma.js": 205,
	"./ar-sa": 206,
	"./ar-sa.js": 206,
	"./ar-tn": 207,
	"./ar-tn.js": 207,
	"./ar.js": 201,
	"./az": 208,
	"./az.js": 208,
	"./be": 209,
	"./be.js": 209,
	"./bg": 210,
	"./bg.js": 210,
	"./bm": 211,
	"./bm.js": 211,
	"./bn": 212,
	"./bn.js": 212,
	"./bo": 213,
	"./bo.js": 213,
	"./br": 214,
	"./br.js": 214,
	"./bs": 215,
	"./bs.js": 215,
	"./ca": 216,
	"./ca.js": 216,
	"./cs": 217,
	"./cs.js": 217,
	"./cv": 218,
	"./cv.js": 218,
	"./cy": 219,
	"./cy.js": 219,
	"./da": 220,
	"./da.js": 220,
	"./de": 221,
	"./de-at": 222,
	"./de-at.js": 222,
	"./de-ch": 223,
	"./de-ch.js": 223,
	"./de.js": 221,
	"./dv": 224,
	"./dv.js": 224,
	"./el": 225,
	"./el.js": 225,
	"./en-SG": 226,
	"./en-SG.js": 226,
	"./en-au": 227,
	"./en-au.js": 227,
	"./en-ca": 228,
	"./en-ca.js": 228,
	"./en-gb": 229,
	"./en-gb.js": 229,
	"./en-ie": 230,
	"./en-ie.js": 230,
	"./en-il": 231,
	"./en-il.js": 231,
	"./en-nz": 232,
	"./en-nz.js": 232,
	"./eo": 233,
	"./eo.js": 233,
	"./es": 234,
	"./es-do": 235,
	"./es-do.js": 235,
	"./es-us": 236,
	"./es-us.js": 236,
	"./es.js": 234,
	"./et": 237,
	"./et.js": 237,
	"./eu": 238,
	"./eu.js": 238,
	"./fa": 239,
	"./fa.js": 239,
	"./fi": 240,
	"./fi.js": 240,
	"./fo": 241,
	"./fo.js": 241,
	"./fr": 242,
	"./fr-ca": 243,
	"./fr-ca.js": 243,
	"./fr-ch": 244,
	"./fr-ch.js": 244,
	"./fr.js": 242,
	"./fy": 245,
	"./fy.js": 245,
	"./ga": 246,
	"./ga.js": 246,
	"./gd": 247,
	"./gd.js": 247,
	"./gl": 248,
	"./gl.js": 248,
	"./gom-latn": 249,
	"./gom-latn.js": 249,
	"./gu": 250,
	"./gu.js": 250,
	"./he": 251,
	"./he.js": 251,
	"./hi": 252,
	"./hi.js": 252,
	"./hr": 253,
	"./hr.js": 253,
	"./hu": 254,
	"./hu.js": 254,
	"./hy-am": 255,
	"./hy-am.js": 255,
	"./id": 256,
	"./id.js": 256,
	"./is": 257,
	"./is.js": 257,
	"./it": 258,
	"./it-ch": 259,
	"./it-ch.js": 259,
	"./it.js": 258,
	"./ja": 260,
	"./ja.js": 260,
	"./jv": 261,
	"./jv.js": 261,
	"./ka": 262,
	"./ka.js": 262,
	"./kk": 263,
	"./kk.js": 263,
	"./km": 264,
	"./km.js": 264,
	"./kn": 265,
	"./kn.js": 265,
	"./ko": 266,
	"./ko.js": 266,
	"./ku": 267,
	"./ku.js": 267,
	"./ky": 268,
	"./ky.js": 268,
	"./lb": 269,
	"./lb.js": 269,
	"./lo": 270,
	"./lo.js": 270,
	"./lt": 271,
	"./lt.js": 271,
	"./lv": 272,
	"./lv.js": 272,
	"./me": 273,
	"./me.js": 273,
	"./mi": 274,
	"./mi.js": 274,
	"./mk": 275,
	"./mk.js": 275,
	"./ml": 276,
	"./ml.js": 276,
	"./mn": 277,
	"./mn.js": 277,
	"./mr": 278,
	"./mr.js": 278,
	"./ms": 279,
	"./ms-my": 280,
	"./ms-my.js": 280,
	"./ms.js": 279,
	"./mt": 281,
	"./mt.js": 281,
	"./my": 282,
	"./my.js": 282,
	"./nb": 283,
	"./nb.js": 283,
	"./ne": 284,
	"./ne.js": 284,
	"./nl": 285,
	"./nl-be": 286,
	"./nl-be.js": 286,
	"./nl.js": 285,
	"./nn": 287,
	"./nn.js": 287,
	"./pa-in": 288,
	"./pa-in.js": 288,
	"./pl": 289,
	"./pl.js": 289,
	"./pt": 290,
	"./pt-br": 291,
	"./pt-br.js": 291,
	"./pt.js": 290,
	"./ro": 292,
	"./ro.js": 292,
	"./ru": 293,
	"./ru.js": 293,
	"./sd": 294,
	"./sd.js": 294,
	"./se": 295,
	"./se.js": 295,
	"./si": 296,
	"./si.js": 296,
	"./sk": 297,
	"./sk.js": 297,
	"./sl": 298,
	"./sl.js": 298,
	"./sq": 299,
	"./sq.js": 299,
	"./sr": 300,
	"./sr-cyrl": 301,
	"./sr-cyrl.js": 301,
	"./sr.js": 300,
	"./ss": 302,
	"./ss.js": 302,
	"./sv": 303,
	"./sv.js": 303,
	"./sw": 304,
	"./sw.js": 304,
	"./ta": 305,
	"./ta.js": 305,
	"./te": 306,
	"./te.js": 306,
	"./tet": 307,
	"./tet.js": 307,
	"./tg": 308,
	"./tg.js": 308,
	"./th": 309,
	"./th.js": 309,
	"./tl-ph": 310,
	"./tl-ph.js": 310,
	"./tlh": 311,
	"./tlh.js": 311,
	"./tr": 312,
	"./tr.js": 312,
	"./tzl": 313,
	"./tzl.js": 313,
	"./tzm": 314,
	"./tzm-latn": 315,
	"./tzm-latn.js": 315,
	"./tzm.js": 314,
	"./ug-cn": 316,
	"./ug-cn.js": 316,
	"./uk": 317,
	"./uk.js": 317,
	"./ur": 318,
	"./ur.js": 318,
	"./uz": 319,
	"./uz-latn": 320,
	"./uz-latn.js": 320,
	"./uz.js": 319,
	"./vi": 321,
	"./vi.js": 321,
	"./x-pseudo": 322,
	"./x-pseudo.js": 322,
	"./yo": 323,
	"./yo.js": 323,
	"./zh-cn": 324,
	"./zh-cn.js": 324,
	"./zh-hk": 325,
	"./zh-hk.js": 325,
	"./zh-tw": 326,
	"./zh-tw.js": 326
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 447;

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(34);
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
 * Generated class for the YoutubePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var YoutubePipe = /** @class */ (function () {
    /**
     * Takes a value and makes it lowercase.
     */
    function YoutubePipe(dom) {
        this.dom = dom;
    }
    YoutubePipe.prototype.transform = function (value) {
        return this.dom.bypassSecurityTrustResourceUrl(value);
        // return this.dom.bypassSecurityTrustHtml(value);
    };
    YoutubePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'youtube',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], YoutubePipe);
    return YoutubePipe;
}());

//# sourceMappingURL=youtube.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the FilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    FilterPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return value.toLowerCase();
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'filter',
        })
    ], FilterPipe);
    return FilterPipe;
}());

//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_citas_citas__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contactenos_contactenos__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_servicios_servicios__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_terminos_terminos__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_user_user__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_welcome_welcome__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_beneficiarios_beneficiarios__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_blanco_blanco__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_listado_publicaciones_listado_publicaciones__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__global__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_api_api__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_medicos_medicos__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















// import { Push, PushObject, PushOptions } from '@ionic-native/push';

var MyApp = /** @class */ (function () {
    // servicios : Array<{nombre:string, component:any, descripcion:string, duracion:string}>;
    function MyApp(platform, statusBar, splashScreen, global, alertCtrl, api) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.global = global;
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_11__pages_blanco_blanco__["a" /* BlancoPage */];
        // this.split = this.id_usuario.split('"');
        // console.log(this.split);
        // this.pages = [
        // { titulo:'Servicios', component:ServiciosPage, icon:'medkit'  },
        // { titulo:'Historial de citas', component:CitasPage, icon:'clipboard'  },
        // { titulo:'Terminos y condiciones', component:TerminosPage, icon:'book'  },
        // { titulo:'Contactenos', component:ContactenosPage, icon:'call'  },
        // ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.platform.registerBackButtonAction(function () {
                console.log(_this.nav._views);
                if (_this.nav._views.length == 1) {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Confirmación',
                        message: '¿Desea salir de la aplicación?',
                        buttons: [{
                                text: 'Aceptar',
                                handler: function () { return _this.platform.exitApp(); }
                            }, {
                                text: 'Cancelar',
                                role: 'cancel'
                            }]
                    });
                    alert_1.present();
                }
                else {
                    _this.nav.pop();
                }
            });
        });
    }
    MyApp.prototype.goToUser = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_user_user__["a" /* UserPage */]);
    };
    MyApp.prototype.goToService = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_servicios_servicios__["a" /* ServiciosPage */]);
    };
    MyApp.prototype.goToHistorial = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_citas_citas__["a" /* CitasPage */]);
    };
    MyApp.prototype.goToPage = function (page) {
        this.nav.setRoot(page);
    };
    MyApp.prototype.pubicar = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_12__pages_listado_publicaciones_listado_publicaciones__["a" /* ListadoPublicacionesPage */]);
    };
    MyApp.prototype.beneficiarios = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_10__pages_beneficiarios_beneficiarios__["a" /* BeneficiariosPage */]);
    };
    MyApp.prototype.goToTerminos = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_terminos_terminos__["a" /* TerminosPage */]);
    };
    MyApp.prototype.goToContactenos = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_contactenos_contactenos__["a" /* ContactenosPage */]);
    };
    MyApp.prototype.goToMedicos = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_15__pages_medicos_medicos__["a" /* MedicosPage */]);
    };
    MyApp.prototype.logOut = function () {
        localStorage.clear();
        this.global.infoPerfil = {};
        this.global.login = false;
        this.global.foto = null;
        this.global.nombre = null;
        this.global.id_usuario = null;
        this.global.medico = false;
        // console.log(this.global);
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_welcome_welcome__["a" /* WelcomePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\ionic\appMovil\src\app\app.html"*/'<ion-menu [content]="content" persistent="true">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content>\n\n    <ion-list>\n\n    	\n\n    <button ion-item (click)="goToUser()" menuClose>\n\n        \n\n           <ion-avatar item-start>\n\n            <img [src]="global.foto">\n\n           </ion-avatar>\n\n           <h2>{{global.nombre}}</h2>\n\n           <p>Mi cuenta</p>\n\n               \n\n    </button>\n\n    <button *ngIf="global.admin" ion-item (click)="pubicar()" menuClose>\n\n      <ion-icon item-left name="list-box"></ion-icon>\n\n     Publicar servicio\n\n    </button>\n\n    <button *ngIf="!global.admin && !global.medico" ion-item (click)="beneficiarios()" menuClose>\n\n      <ion-icon item-left name="list-box"></ion-icon>\n\n    Beneficiarios\n\n    </button>\n\n      \n\n      <!-- <button ion-item *ngFor="let page of pages" (click)="goToPage(page.component)" menuClose>\n\n        <ion-icon item-left name="{{page.icon}}"></ion-icon>\n\n        {{page.titulo}}\n\n      </button> -->\n\n      \n\n      <!-- <button ion-item (click)="goToService()" menuClose hideBackButton>\n\n      	<ion-icon name="medkit" item-start></ion-icon>\n\n        Servicios\n\n      </button> -->\n\n      \n\n      <button ion-item (click)="goToHistorial()" menuClose hideBackButton>\n\n      	<ion-icon name="clipboard" item-start></ion-icon>\n\n        Mis Citas\n\n      </button>\n\n\n\n      <button  *ngIf="global.admin" ion-item (click)="goToMedicos()" menuClose hideBackButton>\n\n      	<ion-icon name="medkit" item-start></ion-icon>\n\n        Gestionar Medicos\n\n      </button>\n\n      \n\n      <button ion-item (click)="goToContactenos()" menuClose hideBackButton>\n\n          <ion-icon name="call" item-start></ion-icon>\n\n          Contactenos\n\n        </button>\n\n        \n\n      <button ion-item (click)="goToTerminos()" menuClose hideBackButton>\n\n      	<ion-icon name="book" item-start></ion-icon>\n\n        Terminos y condiciones\n\n      </button>\n\n      \n\n      <button ion-item (click)="logOut()" menuClose hideBackButton>\n\n      	<ion-icon name="power" item-start></ion-icon>\n\n        Cerrar sesión\n\n      </button>\n\n      \n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>'/*ion-inline-end:"E:\ionic\appMovil\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_13__global__["a" /* Global */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_14__providers_api_api__["a" /* ApiProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agregar_medico_agregar_medico__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_global__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modal_medico_modal_medico__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_photo_viewer__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment__);
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
 * Generated class for the MedicosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MedicosPage = /** @class */ (function () {
    function MedicosPage(navCtrl, navParams, global, api, loadingCtrl, toastCtrl, modalCtrl, app, photoViewer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.global = global;
        this.api = api;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.app = app;
        this.photoViewer = photoViewer;
        this.titulos = [];
        this.infoMedico = this.navParams.get('medico');
        console.log(this.infoMedico);
        if (this.infoMedico) {
            this.nombres = this.infoMedico.nombres + " " + this.infoMedico.apellidos;
            this.avatar = this.infoMedico.avatar;
            for (var i = 0; i < this.infoMedico.titulos.length; i++) {
                var nombre = this.infoMedico.titulos[i].nombre;
                var institucion = this.infoMedico.titulos[i].institucion;
                var start = this.infoMedico.titulos[i].start;
                start = __WEBPACK_IMPORTED_MODULE_8_moment__(start).format('DD-M-YYYY');
                var end = this.infoMedico.titulos[i].end;
                end = __WEBPACK_IMPORTED_MODULE_8_moment__(end).format('DD-M-YYYY');
                this.titulos.push({ nombre: nombre, institucion: institucion, start: start, end: end });
            }
        }
    }
    MedicosPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad MedicosPage');
    };
    MedicosPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        if (!this.infoMedico) {
            this.medicos = null;
            // this.loading = this.loadingCtrl.create({
            //   spinner: 'hide',
            //   content: "Espera un momento<br>estamos procesando tu solicitud... ",
            // });
            // this.loading.present();
            this.load = true;
            this.api.getMedicosProvedor(this.global.id_usuario).subscribe(function (data) {
                console.log(data);
                _this.medicos = data;
                // this.loading.dismiss();
                _this.load = false;
            }, function (err) {
                // this.loading.dismiss();
                _this.load = false;
                _this.presentToast("Error en la conexión, intentalo más tarde o revisa tu conexión");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                // console.log(err);
            });
        }
    };
    MedicosPage.prototype.ionViewCanLeave = function () {
        var activeModal = this.app._modalPortal.getActive();
        if (activeModal) {
            activeModal.dismiss();
        }
    };
    MedicosPage.prototype.goToAgregar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__agregar_medico_agregar_medico__["a" /* AgregarMedicoPage */]);
    };
    MedicosPage.prototype.ver = function (info) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__modal_medico_modal_medico__["a" /* ModalMedicoPage */], { info: info });
        modal.present();
        modal.onDidDismiss(function (data) {
            console.log(data);
            if (!data) {
                _this.infoMedico = undefined;
                _this.ionViewWillEnter();
            }
        });
    };
    MedicosPage.prototype.verImg = function (foto) {
        this.photoViewer.show(foto, '', { share: false });
    };
    MedicosPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    MedicosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-medicos',template:/*ion-inline-start:"E:\ionic\appMovil\src\pages\medicos\medicos.html"*/'<!--\n\n  Generated template for the MedicosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title *ngIf="!infoMedico" >Listado de Medicos</ion-title>\n\n    <ion-title *ngIf="infoMedico">Perfil Medico</ion-title> \n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <div *ngIf="!infoMedico">\n\n\n\n      <div class="boton">\n\n          <button ion-button block round icon-left color="secondary" (click)="goToAgregar()">\n\n            <ion-icon name="person-add"></ion-icon>\n\n            Agregar medico</button>\n\n      </div>\n\n  \n\n      <ion-card *ngFor="let m of medicos" (click)="ver(m)">\n\n        <ion-card-header>{{m.nombre}}</ion-card-header>\n\n        <ion-card-content>\n\n  \n\n            <ion-grid>\n\n                <ion-row>\n\n                  <ion-col col-9> \n\n                      <h3><strong>Titulo : </strong> {{m.titulo}}</h3>\n\n                      <h3><strong>Cedula: </strong>{{m.cedula}}</h3>\n\n                  </ion-col>\n\n                  <ion-col col-3>\n\n                    <img class="img" [src]="m.avatar" alt="nd">\n\n                  </ion-col>\n\n                </ion-row>\n\n              </ion-grid>\n\n  \n\n            \n\n        </ion-card-content>\n\n      </ion-card>\n\n\n\n  </div>\n\n\n\n  <div *ngIf="infoMedico">\n\n\n\n      <div class="img_medico">\n\n          <img id="userImg" [src]="avatar" alt="nd" (click)="verImg(avatar)">\n\n        </div>\n\n  <h1 class="h1">{{nombres}}</h1>\n\n  <div class="card">\n\n        <ion-card>\n\n          <ion-card-content>\n\n            <h2><strong>Titulo : </strong> {{infoMedico.titulo}}</h2>\n\n            <h2><strong>Tarjeta Profecional : </strong> {{infoMedico.tarj_profecional}}</h2>\n\n            <h2><strong>Numero de contacto : </strong> {{infoMedico.telefono}}</h2>\n\n            <br>\n\n            <h2><strong>Estudios :</strong></h2>\n\n              <br>\n\n            <ion-item *ngFor="let t of titulos">\n\n              <p><strong>Titulo : </strong>  {{t.nombre}}</p>\n\n              <p><strong>Institucion : </strong>  {{t.institucion}}</p>\n\n              <p><strong>Fecha de Inicio : </strong>  {{t.start}}</p>\n\n              <p><strong>Fecha de Finalización : </strong>  {{t.end}}</p>\n\n\n\n              <br>\n\n              <br>\n\n            </ion-item>\n\n          </ion-card-content>\n\n        </ion-card>\n\n        </div>\n\n\n\n  </div>\n\n\n\n   \n\n\n\n</ion-content>\n\n\n\n<div class="loading" *ngIf="load">\n\n  <img src="/assets/imgs/pulso.gif" alt="">\n\n</div> \n\n'/*ion-inline-end:"E:\ionic\appMovil\src\pages\medicos\medicos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__app_global__["a" /* Global */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicApp */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_photo_viewer__["a" /* PhotoViewer */]])
    ], MedicosPage);
    return MedicosPage;
}());

// getMedico(){
//   this.loading = this.loadingCtrl.create({
//     spinner: 'hide',
//     content: "Espera un momento<br>estamos procesando tu solicitud... ",
//   });
//   this.loading.present();
//   this.api.getInfoMedico(this.medico_id).subscribe((data)=>{
//     this.loading.dismiss();
//     let info = data[0];
//     console.log(data);
//     this.infoMedico = data[0].titulos;
//     this.avatar = info.avatar;
//     this.nombres = info.nombres + " " + info.apellidos;
//     this.titulo =info.titulo;
//     this.tarj_profecional = info.tarj_profecional;
//     this.telefono = info.telefono;
//     for(let i = 0; i < this.infoMedico.length; i++){
//       let nombre = this.infoMedico[i].nombre;
//       let institucion = this.infoMedico[i].institucion;
//       let start = this.infoMedico[i].start;
//       start = moment(start).format('DD-M-YYYY');
//       let end = this.infoMedico[i].end;
//       end = moment(end).format('DD-M-YYYY');
//       this.titulos.push({nombre:nombre , institucion : institucion , start : start , end:end});
//     }
//   },(err)=>{
//     this.loading.dismiss();
//     this.navCtrl.setRoot(HomePage);
//     this.presentToast("Error en la conexión, intentalo más tarde o revisa tu conexión.")
//   });
// }
//# sourceMappingURL=medicos.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registro_registro__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_crypto_js__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_crypto_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_api__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(12);
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
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WelcomePage = /** @class */ (function () {
    function WelcomePage(navCtrl, navParams, fb, toastCtrl, auth, formBuilder, menu, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.toastCtrl = toastCtrl;
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.menu = menu;
        this.loadingCtrl = loadingCtrl;
        this.key = "token";
        this.keyId = "id";
        this.keyAdmin = "admin";
        this.userData = { "email": "", "pssw": "" };
        this.user = {};
        this.menu.close();
        this.menu.swipeEnable(false);
        this.datos = this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
            pssw: ['', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required,]],
        });
    }
    WelcomePage.prototype.login = function () {
        var _this = this;
        if (!this.datos.valid) {
            this.presentToast("Por favor rellena los campos");
        }
        else {
            // this.loading = this.loadingCtrl.create({
            //   spinner: 'hide',
            //   content: "Espera un momento<br>estamos verificando tu información... ",
            // });
            // this.loading.present(); 
            this.load = true;
            var hashed = __WEBPACK_IMPORTED_MODULE_4_crypto_js___default.a.SHA512(this.datos.value.pssw).toString(__WEBPACK_IMPORTED_MODULE_4_crypto_js___default.a.enc.Hex);
            this.userData.email = this.datos.value.email;
            this.userData.pssw = hashed;
            console.log(this.userData);
            this.auth.postLogin(this.userData, "/login").then(function (result) {
                console.log(result);
                _this.resposeData = result;
                if (_this.resposeData.token) {
                    // this.loading.dismiss();
                    console.log(_this.resposeData);
                    _this.tokenR = _this.resposeData.token;
                    _this.id_usuario = _this.resposeData.id_usuario;
                    _this.esAdmin = _this.resposeData.admin;
                    // this.userInfo=[this.esAdmin,this.id_usuario]
                    localStorage.setItem(_this.key, JSON.stringify(_this.resposeData.token));
                    localStorage.setItem(_this.keyId, JSON.stringify(_this.resposeData.id_usuario));
                    localStorage.setItem(_this.keyAdmin, JSON.stringify(_this.resposeData.esAdmin));
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                }
                else {
                    // console.log(this.resposeData)
                    // this.loading.dismiss();
                    _this.load = false;
                    _this.presentToast("usuario o contraseña incorrectos");
                }
            }, function (error) {
                // this.loading.dismiss();
                _this.load = false;
                _this.presentToast("error en la conexion intentalo mas tarde");
            });
        }
    };
    WelcomePage.prototype.loginFacebook = function () {
        var _this = this;
        this.load = true;
        this.fb.login(['public_profile', 'email'])
            .then(function (rta) {
            // console.log(rta.status);
            if (rta.status == 'connected') {
                _this.fb.api('/me?fields=id,name,email,first_name,picture,last_name,gender', ['public_profile', 'email'])
                    .then(function (data) {
                    // console.log(data);
                    _this.user = data;
                    // this.pssw = this.user.id;
                    _this.hashed = __WEBPACK_IMPORTED_MODULE_4_crypto_js___default.a.SHA512(_this.user.id).toString(__WEBPACK_IMPORTED_MODULE_4_crypto_js___default.a.enc.Hex);
                    // this.userData={"email":this.user.email,"pssw":this.hashed};   
                    var user = { email: _this.user.email, pssw: _this.hashed, avatar: _this.user.picture.data.url };
                    // console.log("USERRRRRRRRRRRRR");
                    // console.log(user);
                    /////////////////////////Envio datos a la API///////////////////////////////
                    // this.loading = this.loadingCtrl.create({
                    //   spinner: 'hide',
                    //   content: "Espera un momento<br>estamos verificando tu información... ",
                    // });
                    // this.loading.present();
                    _this.auth.postLogin(user, "/login").then(function (result) {
                        _this.resposeData = result;
                        console.log(_this.resposeData);
                        if (_this.resposeData.login === true) {
                            // this.loading.dismiss();
                            _this.load = false;
                            // console.log(this.resposeData)
                            _this.userData.email = _this.user.email;
                            _this.userData.pssw = _this.hashed;
                            _this.tokenR = _this.resposeData.token;
                            _this.id_usuario = _this.resposeData.id_usuario;
                            _this.esAdmin = _this.resposeData.esAdmin;
                            // this.userInfo=[this.esAdmin,this.id_usuario]
                            localStorage.setItem(_this.key, JSON.stringify(_this.resposeData.token));
                            localStorage.setItem(_this.keyId, JSON.stringify(_this.resposeData.id_usuario));
                            localStorage.setItem(_this.keyAdmin, JSON.stringify(_this.resposeData.esAdmin));
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                        }
                        else {
                            // this.loading.dismiss();
                            _this.load = false;
                            _this.presentToast("No se encuentra registrado, Por favor registrate");
                        }
                    }, function (error) {
                        // this.loading.dismiss();
                        _this.load = false;
                        _this.presentToast("error en la conexion intentalo mas tarde");
                    });
                })
                    .catch(function (error) {
                    _this.load = false;
                    _this.presentToast("error en la conexion intentalo mas tarde");
                    // console.error( error );
                });
            }
            ;
        })
            .catch(function (error) {
            _this.load = false;
            // console.error( error );
            _this.presentToast("error en la conexion intentalo mas tarde");
        });
    };
    WelcomePage.prototype.ionViewDidLoad = function () {
    };
    WelcomePage.prototype.goToRegistro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__registro_registro__["a" /* RegistroPage */], { registro: true });
    };
    WelcomePage.prototype.cambioContrasena = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__registro_registro__["a" /* RegistroPage */], { registro: false });
    };
    WelcomePage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"E:\ionic\appMovil\src\pages\welcome\welcome.html"*/'<!--\n\n  Generated template for the WelcomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content padding>\n\n\n\n  <div class="logo_welcome">\n\n    <img src="/assets/imgs/logo-grande-negro.png" alt="">\n\n  </div>\n\n  <ion-item>\n\n      <button  ion-button (click)="loginFacebook()" icon-left color="facebook" round block>\n\n          <ion-icon name="logo-facebook"></ion-icon>\n\n            Inicia con facebook\n\n        </button>\n\n  </ion-item>\n\n  <br/>\n\n  <div class="contenido">\n\n      <form [formGroup]="datos" (ngSubmit)="login()"  novalidate>\n\n    <ion-item>\n\n        <ion-label floating>\n\n          <ion-icon name="mail"></ion-icon>\n\n          Ingrese su correo</ion-label>\n\n        <ion-input type="email" formControlName="email" ></ion-input>\n\n    </ion-item>\n\n    <ion-item *ngIf="datos.get(\'email\').errors && datos.get(\'email\').dirty">\n\n        <p color="danger" ion-text *ngIf="datos.get(\'email\').hasError(\'required\')">* El campo es requerido</p>\n\n        <p color="danger" ion-text *ngIf="datos.get(\'email\').hasError(\'email\')">Tipo de email no valido (ejemplo@mail.com)</p>\n\n      </ion-item>\n\n    <ion-item>\n\n        <ion-label floating>\n\n          <ion-icon name="key"></ion-icon>\n\n          Ingrese su contraseña</ion-label>\n\n        <ion-input type="password" formControlName="pssw"></ion-input>\n\n    </ion-item>\n\n    <ion-item *ngIf="datos.get(\'pssw\').errors && datos.get(\'pssw\').dirty">\n\n        <p color="danger" ion-text *ngIf="datos.get(\'pssw\').hasError(\'required\')">* El campo es requerido</p>\n\n        <!-- <p color="danger" ion-text *ngIf="datos.get(\'pssw\').hasError(\'minlenght\')">cantidad minima caracteres (8)</p> -->\n\n      </ion-item>\n\n    <br><br>\n\n        <button ion-button [disabled]="!this.datos.valid" icon-left color="prevenir" round block>\n\n          <ion-icon name="checkmark"></ion-icon>\n\n          Iniciar sesión\n\n        </button>\n\n \n\n    </form>\n\n    <br/>\n\n\n\n    <button ion-button (click)="goToRegistro()" icon-left color="energized" round block>\n\n        <ion-icon name="person-add"></ion-icon>\n\n        Registrate\n\n      </button>\n\n      <br>\n\n\n\n      <div class="cambioContra">\n\n        <a (click)="cambioContrasena()">¿Olvidó su contraseña?</a>\n\n      </div>\n\n      \n\n      <!-- <button ion-button (click)="cambioContrasena()" icon-left color="light" round block>\n\n          <ion-icon name="key"></ion-icon>\n\n          Recuperar Cuenta\n\n        </button> -->\n\n      \n\n  </div>\n\n \n\n      \n\n\n\n \n\n \n\n</ion-content>\n\n\n\n<div class="loading" *ngIf="load">\n\n  <img src="/assets/imgs/pulso.gif" alt="">\n\n</div>'/*ion-inline-end:"E:\ionic\appMovil\src\pages\welcome\welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__youtube_youtube__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter_filter__ = __webpack_require__(488);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__youtube_youtube__["a" /* YoutubePipe */],
                __WEBPACK_IMPORTED_MODULE_2__filter_filter__["a" /* FilterPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__youtube_youtube__["a" /* YoutubePipe */],
                __WEBPACK_IMPORTED_MODULE_2__filter_filter__["a" /* FilterPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CitasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_global__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__citas_provedor_citas_provedor__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modal_cita_user_modal_cita_user__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__publicaciones_proveedor_publicaciones_proveedor__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__terminos_terminos__ = __webpack_require__(70);
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
 * Generated class for the CitasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CitasPage = /** @class */ (function () {
    function CitasPage(navCtrl, navParams, api, global, toastCtrl, alertCtrl, modalCtrl, app, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.global = global;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.inf = [];
        this.infBeneficiarios = [];
        this.infMascotas = [];
        this.servicio = [];
        this.mostrar = false;
        this.mostrarBene = false;
        this.mostrarMascota = false;
        this.usuario_id = this.global.id_usuario;
        this.usuario_id = parseInt(this.usuario_id);
        this.url = this.global.apiUrl;
        if (this.global.admin === true && this.global.medico === false) {
            this.getServicios();
        }
        else if (this.global.admin === false && this.global.medico === false) {
            console.log("es Usuario");
            this.getCitas();
            this.mymodel = "segment1";
            // this.obtenerHistorial();
        }
        else if (this.global.admin === false && this.global.medico === true) {
            console.log("es Medico");
            this.getProvedores();
        }
    }
    CitasPage.prototype.goToHistorial = function (rol) {
        // console.log(rol);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__publicaciones_proveedor_publicaciones_proveedor__["a" /* PublicacionesProveedorPage */], { rol: rol });
    };
    CitasPage.prototype.ionViewDidLoad = function () {
    };
    CitasPage.prototype.ionViewCanLeave = function () {
        var activeModal = this.app._modalPortal.getActive();
        if (activeModal) {
            activeModal.dismiss();
        }
    };
    CitasPage.prototype.getProvedores = function () {
        var _this = this;
        // this.loading = this.loadingCtrl.create({
        //   spinner: 'hide',
        //   content: "Espera un momento<br>estamos procesando la solicitud... ",
        // });
        // this.loading.present();
        this.load = true;
        this.api.getProvedoresMedico(this.global.id_usuario).subscribe(function (data) {
            console.log(data);
            _this.infMedico = data;
            // this.loading.dismiss();
            _this.load = false;
        }, function (err) {
            // this.loading.dismiss();
            _this.load = false;
            console.log(err);
        });
    };
    CitasPage.prototype.toggleSection = function (i) {
        this.infMedico[i].open = !this.infMedico[i].open;
    };
    // toggleSection2(i) {
    //   this.tarde[i].open = !this.tarde[i].open;
    // }
    CitasPage.prototype.toggleItem = function (i, j) {
        // this.maniana[i].children[j].open = !this.maniana[i].children[j].open;
    };
    CitasPage.prototype.getServicios = function () {
        var _this = this;
        // this.loading = this.loadingCtrl.create({
        //   spinner: 'hide',
        //   content: "Espera un momento<br>estamos procesando la solicitud... ",
        // });
        // this.loading.present();
        this.load = true;
        var id = parseInt(this.global.id_usuario);
        this.api.getPublicacionesProveedor(id).subscribe(function (data) {
            var a = data[0].servicios;
            // console.log(a);
            if (a === false) {
                // this.loading.dismiss();
                _this.load = false;
                _this.mostrar = true;
            }
            else {
                // this.loading.dismiss();
                _this.load = false;
                _this.mostrar = false;
                _this.servicios = data;
                _this.getFoto();
            }
        }, function (err) {
            // this.loading.dismiss();
            _this.load = false;
            // console.log(err);
            _this.presentToast("Error en la conexión, intentalo más tarde");
        });
    };
    CitasPage.prototype.verCita = function (info) {
        var nombre = info.nombre;
        var id_servicios = info.id_servicios;
        var id_categoria = info.categoria_idcategoria;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__citas_provedor_citas_provedor__["a" /* CitasProvedorPage */], { nombre: nombre, id_servicios: id_servicios, id_categoria: id_categoria, medico: true });
    };
    CitasPage.prototype.verCitas = function (id, nombre, id_categoria) {
        //  console.log(id_categoria);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__citas_provedor_citas_provedor__["a" /* CitasProvedorPage */], { id_servicios: id, nombre: nombre, id_categoria: id_categoria });
    };
    CitasPage.prototype.getCitas = function () {
        var _this = this;
        // this.loading = this.loadingCtrl.create({
        //   spinner: 'hide',
        //   content: "Espera un momento<br>estamos procesando la solicitud... ",
        // });
        // this.loading.present();
        this.load = true;
        this.api.getCitasUsuario(this.usuario_id).subscribe(function (data) {
            _this.citas = data;
            // console.log(this.citas);
            // this.loading.dismiss();
            _this.load = false;
            _this.getBeneficiarios();
            _this.getMascotas();
            _this.info();
        }, function (err) {
            // console.log(err);
            // this.loading.dismiss();
            _this.load = false;
            _this.presentToast("Error en la conexión, intentalo más tarde");
        });
    };
    CitasPage.prototype.getBeneficiarios = function () {
        var _this = this;
        // this.loading = this.loadingCtrl.create({
        //   spinner: 'hide',
        //   content: "Espera un momento<br>estamos procesando la solicitud... ",
        // });
        // this.loading.present();
        this.load = true;
        this.api.getCitasBeneficiarios(this.global.id_usuario).subscribe(function (data) {
            _this.beneficiarios = data;
            // console.log(this.beneficiarios);
            if (_this.beneficiarios.length == 0) {
                _this.mostrarBene = true;
                // this.loading.dismiss();
                _this.load = false;
            }
            else {
                console.log(_this.beneficiarios);
                for (var i = 0; i < _this.beneficiarios.length; i++) {
                    var fecha = _this.beneficiarios[i].start;
                    var hora = __WEBPACK_IMPORTED_MODULE_4_moment__(fecha).format('hh:mm a');
                    fecha = __WEBPACK_IMPORTED_MODULE_4_moment__(fecha).format('DD-M-YYYY');
                    var nombres = _this.beneficiarios[i].nombreU;
                    var nombre = _this.beneficiarios[i].nombre;
                    var id_servicio = _this.beneficiarios[i].servicios_idservicios;
                    var nombreU = _this.beneficiarios[i].nombreU;
                    var id_eventos = _this.beneficiarios[i].id_eventos;
                    var usuarios_id = _this.beneficiarios[i].usuarios_id;
                    var direccion = _this.beneficiarios[i].direccion;
                    _this.infBeneficiarios.push({ nombre: nombre, fecha: fecha, hora: hora,
                        id_servicio: id_servicio, nombreU: nombreU, id_eventos: id_eventos, usuarios_id: usuarios_id, direccion: direccion });
                }
                // this.loading.dismiss();
                _this.load = false;
            }
        }, function (err) {
            _this.presentToast("Error en la conexión, intentalo más tarde");
            // this.loading.dismiss();
            _this.load = false;
        });
    };
    CitasPage.prototype.getMascotas = function () {
        var _this = this;
        //   this.loading = this.loadingCtrl.create({
        //     spinner: 'hide',
        //     content: "Espera un momento<br>estamos procesando la solicitud... ",
        //   });
        //   this.loading.present();
        this.load = true;
        this.api.getCitasMascota(this.global.id_usuario).subscribe(function (data) {
            // this.loading.dismiss();
            _this.load = false;
            //   this.mostrarMascota = true;
            _this.mascotas = data;
            // let length = ;
            // console.log(length);
            if (_this.mascotas.length <= 0) {
                _this.mostrarMascota = true;
            }
            else {
                for (var i = 0; i < _this.mascotas.length; i++) {
                    var fecha = _this.mascotas[i].start;
                    var hora = __WEBPACK_IMPORTED_MODULE_4_moment__(fecha).format('hh:mm a');
                    fecha = __WEBPACK_IMPORTED_MODULE_4_moment__(fecha).format('DD-M-YYYY');
                    var nombre = _this.mascotas[i].nombre;
                    var nombreU = _this.mascotas[i].nombreU;
                    var id_eventos = _this.mascotas[i].id_eventos;
                    var id_servicio = _this.mascotas[i].id_servicios;
                    var direccion = _this.mascotas[i].direccion;
                    _this.infMascotas.push({ fecha: fecha, hora: hora, nombre: nombre,
                        id_eventos: id_eventos, id_servicio: id_servicio, direccion: direccion, nombreU: nombreU });
                }
                // console.log(this.infMascotas);
            }
        }, function (err) {
            // this.loading.dismiss();
            _this.load = false;
            _this.presentToast("Error en la conexión, intentalo más tarde");
        });
    };
    CitasPage.prototype.getFoto = function () {
        // console.log(this.servicios);
        for (var i = 0; i < this.servicios.length; i++) {
            var categoria = this.servicios[i].id_categoria;
            var foto = this.servicios[i].foto;
            var f = this.servicios[i];
            var nombre = this.servicios[i].nombre;
            var id = this.servicios[i].id_servicios;
            var descripcion = this.servicios[i].descripcion;
            // let id_categoria = this.servicio[i].id_categoria;
            // f = f.foto[0];
            // f = this.url+f.ruta;
            // this.foto = f;
            // this.servicio.push({id_servicios:id, nombre:nombre, foto:f, descripcion:descripcion});
            this.servicio.push({ id_servicios: id, nombre: nombre, descripcion: descripcion, categoria: categoria });
        }
        // console.log(this.servicio);
    };
    CitasPage.prototype.info = function () {
        if (this.citas.length == 0) {
            // console.log("AQUI");
            this.mostrar = true;
        }
        else {
            // console.log(this.citas);
            for (var i = 0; i < this.citas.length; i++) {
                var p = this.citas[i];
                p = __WEBPACK_IMPORTED_MODULE_4_moment__(p.start).format('DD-M-YYYY hh:mm a');
                p = p.split(' ');
                var p1 = p[0];
                var p2 = p[1];
                p2 = p2 + " " + p[2];
                var id_servicio = this.citas[i].servicios_idservicios;
                var nombre = this.citas[i].nombre;
                var id_eventos = this.citas[i].id_eventos;
                var direccion = this.citas[i].direccion;
                this.inf.push({ fecha: p1, hora: p2, id_servicio: id_servicio, nombre: nombre, id_eventos: id_eventos, direccion: direccion });
            }
        }
        // console.log(this.inf);
    };
    CitasPage.prototype.eliminar = function (id, mascota) {
        var _this = this;
        if (mascota === true) {
            var alert_1 = this.alertCtrl.create({
                title: 'Confirmación',
                message: '¿ Estas seguro que deseas eliminar esta cita?',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: function () {
                        }
                    },
                    {
                        text: 'Confirmar',
                        handler: function () {
                            // this.loading = this.loadingCtrl.create({
                            //   spinner: 'hide',
                            //   content: "Espera un momento<br>estamos procesando la solicitud... ",
                            // });
                            // this.loading.present();
                            _this.load = true;
                            _this.api.dltCita(id, mascota).then(function (data) {
                                _this.res = data;
                                if (_this.res.borrado === true) {
                                    _this.presentToast("Su cita fue eliminada con exito");
                                    // this.loading.dismiss();
                                    _this.load = false;
                                    _this.navCtrl.pop();
                                }
                                else {
                                    // this.loading.dismiss();
                                    _this.load = false;
                                    _this.presentToast("No puedes eliminar una cita 24 horas antes");
                                }
                            }, function (err) {
                                // this.loading.dismiss();
                                _this.load = false;
                                _this.presentToast("Error en la conexión, intentalo más tarde");
                                // console.log(err)
                            });
                        }
                    }
                ]
            });
            alert_1.present();
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: 'Confirmación',
                message: '¿ Estas seguro que deseas eliminar esta cita?',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: function () {
                        }
                    },
                    {
                        text: 'Confirmar',
                        handler: function () {
                            // this.loading = this.loadingCtrl.create({
                            //   spinner: 'hide',
                            //   content: "Espera un momento<br>estamos procesando la solicitud... ",
                            // });
                            // this.loading.present();
                            _this.load = true;
                            _this.api.dltCita(id, false).then(function (data) {
                                _this.res = data;
                                if (_this.res.borrado === true) {
                                    _this.presentToast("Su cita fue eliminada con exito");
                                    // this.loading.dismiss();
                                    _this.load = false;
                                    _this.navCtrl.pop();
                                }
                                else {
                                    // this.loading.dismiss();
                                    _this.load = false;
                                    _this.presentToast("No puedes eliminar una cita 24 horas antes");
                                }
                            }, function (err) {
                                // this.loading.dismiss();
                                _this.load = false;
                                _this.presentToast("Error en la conexión, intentalo más tarde");
                                // console.log(err)
                            });
                        }
                    }
                ]
            });
            alert_2.present();
        }
    };
    CitasPage.prototype.ver = function (info) {
        // console.log(info);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__modal_cita_user_modal_cita_user__["a" /* ModalCitaUserPage */], { info: info });
        modal.present();
        modal.onDidDismiss(function (data) {
            // console.log(data);
        });
    };
    CitasPage.prototype.verComentarios = function (info) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__terminos_terminos__["a" /* TerminosPage */], { info: info });
    };
    CitasPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    CitasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-citas',template:/*ion-inline-start:"E:\ionic\appMovil\src\pages\citas\citas.html"*/'<!--\n\n  Generated template for the CitasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Mis citas</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <div *ngIf="!global.admin && !global.medico">\n\n     \n\n\n\n    <ion-segment [(ngModel)]="mymodel">\n\n      <ion-segment-button class="segment"value="segment1">\n\n        <p class="p">Mis citas</p> \n\n      </ion-segment-button>\n\n      <ion-segment-button  class="segment" value="segment2">\n\n      <p class="p">Beneficiarios</p> \n\n      </ion-segment-button>\n\n      <ion-segment-button  class="segment" value="segment3">\n\n        <p class="p">Mascotas</p> \n\n        </ion-segment-button>\n\n  </ion-segment>\n\n  \n\n  <div [ngSwitch]="mymodel">\n\n  \n\n    <div *ngSwitchCase="\'segment1\'" >\n\n\n\n      <div class="btn">\n\n          <button ion-button round block color="energized" (click)="goToHistorial(\'user\')" icon-left>\n\n              <ion-icon name="list-box"></ion-icon>\n\n            Ver historial</button>\n\n      </div>\n\n       \n\n\n\n      <ion-list>\n\n        <div *ngFor="let c of inf">\n\n          <ion-item>\n\n      <ion-card>\n\n        <ion-card-header>{{c.nombre}}</ion-card-header>\n\n        <ion-card-content>\n\n          <p><strong>Fecha :</strong>  {{c.fecha}}</p>\n\n          <p><strong>Hora :</strong>  {{c.hora}}</p>\n\n          \n\n          <br>\n\n          <button ion-button icon-left  (click)="ver(c)">\n\n            <ion-icon name="eye"></ion-icon>\n\n            Ver</button>\n\n            <button ion-button icon-left color="danger"  (click)="eliminar(c.id_eventos)">\n\n              <ion-icon name="trash"></ion-icon>\n\n              Eliminar</button>\n\n        </ion-card-content>\n\n      </ion-card>\n\n      </ion-item>\n\n      </div>\n\n      </ion-list>\n\n\n\n    \n\n      <div *ngIf="mostrar">\n\n         <br>\n\n        <h1 class="h1" >No hay citas disponibles</h1>\n\n      </div>\n\n    </div>\n\n\n\n\n\n    <div *ngSwitchCase="\'segment2\'">\n\n        <div class="btn">\n\n            <button ion-button round block color="energized" (click)="goToHistorial(\'beneficiario\')" icon-left>\n\n                <ion-icon name="list-box"></ion-icon>\n\n              Ver historial</button>\n\n        </div>\n\n\n\n        <ion-list>\n\n            <div *ngFor="let c of infBeneficiarios">\n\n              <ion-item>\n\n          <ion-card>\n\n            <ion-card-header>{{c.nombre}}</ion-card-header>\n\n            <ion-card-content>\n\n              <p>Nombre : {{c.nombreU}}</p>\n\n              <p>Fecha : {{c.fecha}}</p>\n\n              <p>Hora : {{c.hora}}</p>\n\n              \n\n              <br>\n\n              <button ion-button icon-left  (click)="ver(c)">\n\n                <ion-icon name="eye"></ion-icon>\n\n                Ver</button>\n\n                <button ion-button icon-left color="danger"  (click)="eliminar(c.id_eventos)">\n\n                  <ion-icon name="trash"></ion-icon>\n\n                  Eliminar</button>\n\n            </ion-card-content>\n\n          </ion-card>\n\n          </ion-item>\n\n          </div>\n\n          </ion-list>\n\n    \n\n          <div *ngIf="mostrarBene">\n\n             <br>\n\n            <h1 class="h1" >No hay citas disponibles</h1>\n\n          </div>\n\n\n\n\n\n    </div>\n\n\n\n    <div *ngSwitchCase="\'segment3\'">\n\n\n\n        <div class="btn">\n\n            <button ion-button round block color="energized" (click)="goToHistorial(\'mascota\')" icon-left>\n\n                <ion-icon name="list-box"></ion-icon>\n\n              Ver historial</button>\n\n        </div>\n\n      <ion-list>\n\n        <div *ngFor="let m of infMascotas">\n\n          <ion-item>\n\n      <ion-card>\n\n        <ion-card-header>{{m.nombre}}</ion-card-header>\n\n        <ion-card-content>\n\n          <p>Nombre : {{m.nombreU}}</p>\n\n          <p>Fecha : {{m.fecha}}</p>\n\n          <p>Hora : {{m.hora}}</p>\n\n          \n\n          <br>\n\n          <button ion-button icon-left  (click)="ver(m)">\n\n            <ion-icon name="eye"></ion-icon>\n\n            Ver</button>\n\n            <button ion-button icon-left color="danger"  (click)="eliminar(m.id_eventos,true)">\n\n              <ion-icon name="trash"></ion-icon>\n\n              Eliminar</button>\n\n        </ion-card-content>\n\n      </ion-card>\n\n      </ion-item>\n\n      </div>\n\n      </ion-list>\n\n      <div *ngIf="mostrarMascota">\n\n        <br>\n\n       <h1 class="h1" >No hay citas disponibles</h1>\n\n     </div>\n\n    </div>\n\n  </div>\n\n\n\n  \n\n</div>\n\n\n\n<div *ngIf="global.admin && !global.medico">\n\n\n\n<h4 class="h4" *ngIf="mostrar">No tienes servicios, crea una publicación</h4>\n\n\n\n    <ion-list>\n\n      <div class="item">\n\n        <ion-item  *ngFor="let s of servicio" (click)="verCitas(s.id_servicios,s.nombre,s.categoria)">\n\n          <h2>{{s.nombre}}</h2>\n\n          <p>{{s.descripcion}}</p>\n\n          <button ion-button clear item-end left-icon ><ion-icon name="eye"></ion-icon></button>\n\n        </ion-item>\n\n      </div>\n\n      </ion-list>\n\n    </div>\n\n\n\n    <div *ngIf="!global.admin && global.medico">\n\n      \n\n \n\n      <ion-list class="accordion-list">\n\n        <ion-list-header *ngFor="let item of infMedico; let i = index" no-lines no-padding>\n\n          \n\n            <button ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n\n                <ion-icon item-left name="arrow-forward" *ngIf="!item.open"></ion-icon>\n\n                <ion-icon item-left name="arrow-down" *ngIf="item.open"></ion-icon>\n\n                <ion-row>\n\n                  <!-- <ion-col col-8>{{ item.hora }}</ion-col> -->\n\n                  <ion-col> {{ item.provedor }}</ion-col>\n\n                </ion-row>\n\n                    \n\n              </button>\n\n              <ion-list *ngIf="item.serv && item.open" no-lines>\n\n\n\n                <ion-list-header *ngIf="item.serv.length == 0">\n\n                  <ion-item>\n\n                    <h2>No tienes servicios asociados con este provedor.</h2>\n\n                  </ion-item>\n\n                </ion-list-header>\n\n                \n\n                       \n\n                  <ion-list-header *ngFor="let child of item.serv; let j = index" no-padding>\n\n\n\n                    <ion-item *ngIf="!child.serv" ion-item detail-none class="child-item" text-wrap>          \n\n                        <h2>{{ child.nombre}}</h2>  \n\n                        <button ion-button outline item-end (click)="verCita(child)">Ver</button> \n\n                        <button ion-button outline color ="cafe" item-end (click)="verComentarios(child)">Comentarios</button>        \n\n                    </ion-item> \n\n                  </ion-list-header>\n\n\n\n          </ion-list>\n\n            \n\n        </ion-list-header>\n\n      </ion-list>\n\n\n\n\n\n    </div>\n\n\n\n</ion-content>\n\n\n\n<div class="loading" *ngIf="load">\n\n  <img src="/assets/imgs/pulso.gif" alt="">\n\n</div> '/*ion-inline-end:"E:\ionic\appMovil\src\pages\citas\citas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_3__app_global__["a" /* Global */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicApp */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], CitasPage);
    return CitasPage;
}());

//# sourceMappingURL=citas.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SacarCitaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_global__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic3_calendar_en__ = __webpack_require__(65);
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
 * Generated class for the SacarCitaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SacarCitaPage = /** @class */ (function () {
    function SacarCitaPage(navCtrl, navParams, api, formBuilder, global, alertCtrl, toastCtrl, loadingCtrl, menu, calendar) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.formBuilder = formBuilder;
        this.global = global;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.menu = menu;
        this.calendar = calendar;
        this.hr = false;
        this.ds = false;
        this.info = [];
        this.read = false;
        this.id_usuario = this.global.id_usuario;
        this.id_usuario = parseInt(this.id_usuario);
        this.id_servicio = this.navParams.get('id_servicio');
        this.mascota = this.navParams.get('mascota');
        this.id_categoria = this.navParams.get('id_categoria');
        this.citaProvedor = this.navParams.get('info');
        // console.log(this.id_categoria);
        // console.log(this.citaProvedor.id_categoria);
        if (!this.citaProvedor) {
            if (this.id_categoria == 20) {
                this.validacion();
                this.obtenerMascotas();
            }
            else {
                this.validacion();
                this.obtenerBeneficiarios();
            }
        }
        else {
            this.formularioCitas();
        }
        this.today = __WEBPACK_IMPORTED_MODULE_2_moment__(new Date().toISOString()).format('YYYY-M-DD');
        this.horarios();
    }
    SacarCitaPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad SacarCitaPage');
    };
    SacarCitaPage.prototype.ionViewWillLeave = function () {
        this.info = [];
        this.read = true;
    };
    SacarCitaPage.prototype.obtenerBeneficiarios = function () {
        // this.loading = this.loadingCtrl.create({
        //   spinner: 'hide',
        //   content: "Espera un momento<br>estamos cargando información... ",
        // });
        // this.loading.present();
        var _this = this;
        this.load = true;
        this.menu.enable(false);
        this.api.getBeneficiarios(this.id_usuario).subscribe(function (data) {
            _this.beneficiarios = data;
            _this.info.push({ type: 'radio', label: _this.global.nombre, value: _this.id_usuario, checked: true });
            for (var i = 0; i < _this.beneficiarios.length; i++) {
                var nombres = _this.beneficiarios[i].nombre + " " + _this.beneficiarios[i].apellidos;
                var id = _this.beneficiarios[i].id;
                _this.info.push({ type: 'radio', label: nombres, value: id, checked: false });
            }
            // this.loading.dismiss();
            _this.load = false;
            // this.menu.enable(true);
            // console.log(this.info);
        }, function (err) {
            // this.loading.dismiss();
            _this.load = false;
            // this.menu.enable(true);
            _this.presentToast("Error en la conexion, intentalo mas tarde");
        });
    };
    SacarCitaPage.prototype.obtenerMascotas = function () {
        var _this = this;
        // this.loading = this.loadingCtrl.create({
        //   spinner: 'hide',
        //   content: "Espera un momento<br>estamos cargando información... ",
        // });
        // this.loading.present();
        this.load = true;
        this.menu.enable(false);
        this.api.getMascotasUser(this.id_usuario).subscribe(function (data) {
            _this.mascotas = data;
            // console.log(this.mascotas);
            for (var i = 0; i < _this.mascotas.length; i++) {
                var nombres = _this.mascotas[i].nombre;
                var id = _this.mascotas[i].id_mascotas;
                _this.info.push({ type: 'radio', label: nombres, value: id, checked: false });
            }
            // console.log(this.info);
            // this.loading.dismiss();
            _this.load = false;
            // this.menu.enable(true);
        }, function (err) {
            //  this.loading.dismiss();
            _this.load = false;
            // this.menu.enable(true);
            _this.presentToast("Error en la conexion, intentalo mas tarde");
        });
    };
    SacarCitaPage.prototype.onDaySelect = function (ev) {
        // console.log(ev);
        var numero = parseInt(ev.month) + 1;
        this.fecha = ev.year + "-" + numero + "-" + ev.date;
        var today = new Date(this.today).getTime();
        var fecha = new Date(this.fecha).getTime();
        if (fecha >= today) {
            this.hr = false;
        }
        else {
            this.hr = true;
        }
        this.horarios();
    };
    SacarCitaPage.prototype.horarios = function () {
        var _this = this;
        if (!this.fecha) {
            this.f = this.today;
            this.api.getHorario(this.today, this.id_servicio, this.id_categoria).subscribe(function (data) {
                console.log(data);
                var hors = data[0];
                _this.maniana = hors.maniana;
                var hors2 = data[1];
                _this.tarde = hors2.tardes;
                var dis = _this.maniana[0];
                var dispo = _this.tarde[0];
                if (dis.disponible === false) {
                    _this.mn = true;
                }
                else {
                    _this.mn = false;
                }
                if (dispo.disponible === false) {
                    _this.td = true;
                }
                else {
                    _this.td = false;
                }
            }, function (err) {
                // console.log(err);
            });
        }
        else {
            this.f = this.fecha;
            this.api.getHorario(this.fecha, this.id_servicio, this.id_categoria).subscribe(function (data) {
                console.log(data);
                var hors = data[0];
                _this.maniana = hors.maniana;
                var hors2 = data[1];
                _this.tarde = hors2.tardes;
                var dis = _this.maniana[0];
                var dispo = _this.tarde[0];
                if (dis.disponible === false) {
                    _this.mn = true;
                }
                else {
                    _this.mn = false;
                }
                if (dispo.disponible === false) {
                    _this.td = true;
                }
                else {
                    _this.td = false;
                }
            }, function (err) {
                // console.log(err);
            });
        }
    };
    SacarCitaPage.prototype.sacarCita = function (hora, tarde) {
        var _this = this;
        var fe = __WEBPACK_IMPORTED_MODULE_2_moment__(this.f).format('DD-M-YYYY');
        var alert = this.alertCtrl.create({
            subTitle: '¿Para quien deseas sacar la cita?',
            inputs: this.info,
            message: 'Estas seguro que deseas sacar una cita a las ' + hora + " del " + fe +
                ". Ten en cuenta que solo podras cancelar la cita 24 horas antes de la fecha elegida.",
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Aceptar',
                    handler: function (data) {
                        var id = data;
                        if (!data) {
                            _this.presentToast('Por favor elige una mascota o agrega una en "Menú > Beneficiarios"');
                        }
                        else {
                            if (!tarde) {
                                // console.log(this.val);
                                if (_this.val.datos === false) {
                                    _this.presentToast('Por favor completa los datos de registro en  "Inicio > Menú > Mi cuenta" para reservar la cita');
                                }
                                else {
                                    var h = hora.split(':');
                                    h = h[0];
                                    h = h + ":00:00";
                                    var start = _this.f + " " + h;
                                    var info = { color: "#07a9df", start: start, usuario: id, servicio: _this.id_servicio, mascota: _this.mascota };
                                    console.log(info);
                                    var today = __WEBPACK_IMPORTED_MODULE_2_moment__(new Date().toISOString()).format('YYYY-M-DD HH:mm:ss');
                                    var today2 = __WEBPACK_IMPORTED_MODULE_2_moment__(today);
                                    var st = __WEBPACK_IMPORTED_MODULE_2_moment__(start);
                                    var hours = st.diff(today2, 'hours');
                                    // console.log(start);
                                    // console.log(today);
                                    if (hours < 2) {
                                        _this.presentToast("No se puede sacar una cita 2 horas antes. Por favor escoge otro horario");
                                    }
                                    else {
                                        // console.log(info);
                                        // this.loading = this.loadingCtrl.create({
                                        //   spinner: 'hide',
                                        //   content: "Espera un momento<br>estamos agendando tu cita... ",
                                        // });
                                        // this.loading.present();
                                        _this.load = true;
                                        // this.menu.enable(false);
                                        _this.api.guardarCita(info).then(function (data) {
                                            var a = data;
                                            a = a[0].agregado;
                                            var b = data;
                                            b = b[0].reservado;
                                            // console.log(data);
                                            // this.loading.dismiss();
                                            _this.load = false;
                                            // this.menu.enable(true);
                                            if (b === true) {
                                                _this.presentToast("Ya tienes asignada una cita para este dia, revisa mis citas");
                                            }
                                            if (a === true) {
                                                _this.presentToast("Su cita fue reservada con exito, Revisa tu historial de citas");
                                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                                            }
                                        }, function (err) {
                                            // this.loading.dismiss();
                                            _this.load = false;
                                            // this.menu.enable(true);
                                            _this.presentToast("Error en la conexion, intentalo mas tarde");
                                        });
                                    }
                                }
                            }
                            else {
                                if (_this.val.datos === false) {
                                    _this.presentToast('Por favor completa los datos de registro en  "Inicio > Menú > Mi cuenta" para reservar la cita');
                                }
                                else {
                                    var h = hora.split(':');
                                    h = h[0];
                                    h = parseInt(h) + 12;
                                    h = h + ":00:00";
                                    var start = _this.f + " " + h;
                                    var info = { color: "#07a9df", start: start, usuario: id, servicio: _this.id_servicio, mascota: _this.mascota };
                                    console.log(info);
                                    var today = __WEBPACK_IMPORTED_MODULE_2_moment__(new Date().toISOString()).format('YYYY-M-DD HH:mm:ss');
                                    var today2 = __WEBPACK_IMPORTED_MODULE_2_moment__(today);
                                    var st = __WEBPACK_IMPORTED_MODULE_2_moment__(start);
                                    var hours = st.diff(today2, 'hours');
                                    //  console.log(hours);
                                    if (hours < 2) {
                                        _this.presentToast("No se puede sacar una cita 2 horas antes. Por favor escoge otro horario");
                                    }
                                    else {
                                        //  this.loading = this.loadingCtrl.create({
                                        //     spinner: 'hide',
                                        //     content: "Espera un momento<br>estamos agendando tu cita... ",
                                        //   });
                                        //   this.loading.present();
                                        _this.load = true;
                                        // this.menu.enable(false);
                                        _this.api.guardarCita(info).then(function (data) {
                                            var a = data;
                                            a = a[0].agregado;
                                            var b = data;
                                            b = b[0].reservado;
                                            // console.log(data);
                                            // this.loading.dismiss();
                                            _this.load = false;
                                            // this.menu.enable(true);
                                            if (b === true) {
                                                _this.presentToast("Ya tienes asignada una cita para este dia, revisa mis citas");
                                            }
                                            if (a === true) {
                                                _this.presentToast("Su cita fue agregada con exito, Revisa tu historial de citas");
                                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                                            }
                                        }, function (err) {
                                            //  this.loading.dismiss();
                                            _this.load = false;
                                            // this.menu.enable(true);
                                            _this.presentToast("Error en la conexion, intentalo mas tarde");
                                        });
                                    }
                                }
                            }
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    SacarCitaPage.prototype.validacion = function () {
        var _this = this;
        // console.log(this.global.id_usuario);
        this.api.getValidacion(this.global.id_usuario).subscribe(function (data) {
            _this.val = data;
        }, function (err) {
            // console.log(err)
        });
    };
    SacarCitaPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 5000
        });
        toast.present();
    };
    //////////////////////////////////////////SACAR CITA PROVEDOR ///////////////////////////////////////
    SacarCitaPage.prototype.sacarCitaProvedor = function (bol) {
        // let fecha = ;
        var _this = this;
        if (bol === true) {
            // this.loading = this.loadingCtrl.create({
            //   spinner: 'hide',
            //   content: "Espera un momento<br>estamos agendando tu cita... ",
            // });
            // this.loading.present();
            this.load = true;
            // this.menu.enable(false);
            var fecha = this.citaProvedor.fecha + " " + this.citaProvedor.start;
            console.log(fecha);
            var info = { color: "#07a9df", start: fecha, mascota: undefined, servicio: this.citaProvedor.id_servicios, existe: bol, usuario: this.infoCitas.id };
            console.log(info);
            this.api.postCitasProvedor(info).then(function (res) {
                console.log(res);
                var response = res[0];
                if (response.agregado !== undefined && response.agregado === true) {
                    console.log('agregada');
                    _this.presentToast("Cita agregada con exito");
                    // this.loading.dismiss();
                    _this.load = false;
                    // this.menu.enable(true);
                    _this.navCtrl.pop();
                }
                if (response.reservado !== undefined && response.reservado === true) {
                    _this.presentToast('No se puede sacar la cita, el usuario ' + _this.datos.value.nombres + ' '
                        + _this.datos.value.apellidos + ' ya tiene una cita reservada para este dia.');
                    _this.load = false;
                }
            }, function (err) {
                // this.loading.dismiss();
                _this.load = false;
                // this.menu.enable(true);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
            });
        }
        else {
            if (!this.datos.value.fecha) {
                this.presentToast("Por favor elige una fecha de nacimiento");
            }
            else {
                // this.loading = this.loadingCtrl.create({
                //   spinner: 'hide',
                //   content: "Espera un momento<br>estamos agendando tu cita... ",
                // });
                // this.loading.present();
                this.load = true;
                // this.menu.enable(false);
                var fecha = this.citaProvedor.fecha + " " + this.citaProvedor.start;
                console.log(fecha);
                var info = { color: "#07a9df", start: fecha, mascota: undefined, servicio: this.citaProvedor.id_servicios, existe: bol, usuario: this.datos.value.identificacion, nombres: this.datos.value.nombres,
                    apellidos: this.datos.value.apellidos, fecha_nacimiento: this.datos.value.fecha, contacto: this.datos.value.contacto, correo: this.datos.value.correo };
                console.log(info);
                this.api.postCitasProvedor(info).then(function (res) {
                    console.log(res);
                    var response = res[0];
                    if (response.correo !== undefined && response.correo === false) {
                        console.log('correo repetido');
                        _this.presentToast('Este correo ya se encuentra registrado');
                        _this.load = false;
                    }
                    if (response.agregado !== undefined && response.agregado === true) {
                        console.log('agregada');
                        _this.presentToast("Cita agregada con exito");
                        // this.loading.dismiss();
                        _this.load = false;
                        // this.menu.enable(true);
                        _this.navCtrl.pop();
                    }
                    if (response.reservado !== undefined && response.reservado === true) {
                        _this.presentToast('No se puede sacar la cita, el usuario ' + _this.datos.value.nombres + ' '
                            + _this.datos.value.apellidos + ' ya tiene una cita reservada para este dia.');
                        _this.load = false;
                    }
                    // var agregado = res[0];
                    // if(agregado.agregado === true){
                    //   this.presentToast("Cita agregada con exito");
                    //   // this.loading.dismiss();
                    //   this.load = false;
                    //   // this.menu.enable(true);
                    //   this.navCtrl.pop();
                    // }else{
                    //   this.presentToast("No se pudo agregar la cita, por favor intentalo más tarde");
                    //   // this.loading.dismiss();
                    //   this.load = false;
                    //   // this.menu.enable(true);
                    //   this.navCtrl.setRoot(HomePage);
                    // }
                }, function (err) {
                    // this.loading.dismiss();
                    _this.load = false;
                    // this.menu.enable(true);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                });
            }
        }
    };
    SacarCitaPage.prototype.buscarCedula = function () {
        var _this = this;
        // this.loading = this.loadingCtrl.create({
        //   spinner: 'hide',
        //   content: "Espera un momento<br>estamos cargando información... ",
        // });
        // this.loading.present();
        this.load = true;
        // this.menu.enable(false);
        this.cedula = this.datos.value.identificacion;
        if (this.citaProvedor.id_categoria == 20) {
            if (!this.cedula) {
                // this.loading.dismiss();
                this.load = false;
                // this.menu.enable(true);
                this.presentToast("Por favor llena el campo.");
            }
            else {
                this.api.cedula(this.cedula, true).subscribe(function (data) {
                    console.log(data);
                    // this.loading.dismiss();
                    _this.load = false;
                    // this.menu.enable(true);
                    if (data === false) {
                        _this.formularioMascotas();
                        _this.mascotaForm = true;
                        _this.read = true;
                    }
                    else {
                        _this.infoCitas = data[0];
                        console.log(_this.infoCitas);
                        if (_this.infoCitas.masc.length >= 8) {
                            _this.numeroMascotas = false;
                        }
                        _this.formularioMascotasExiste();
                        _this.mascotaForm2 = true;
                        _this.read = true;
                    }
                }, function (err) {
                    // this.loading.dismiss();
                    _this.load = false;
                    // this.menu.enable(true);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                });
            }
        }
        else {
            if (!this.cedula) {
                console.log(this.cedula);
                // this.loading.dismiss();
                this.load = false;
                //  this.menu.enable(true);
                this.presentToast("Por favor llena el campo.");
            }
            else {
                this.read = true;
                this.api.cedula(this.cedula, false).subscribe(function (data) {
                    console.log(data);
                    //  this.loading.dismiss();
                    _this.load = false;
                    // this.menu.enable(true);
                    if (data === false) {
                        _this.form2 = true;
                        _this.formularioCitas();
                    }
                    else {
                        _this.infoCitas = data[0];
                        _this.fechaNacimiento = _this.infoCitas.fecha_nacimiento;
                        _this.fechaNacimiento = __WEBPACK_IMPORTED_MODULE_2_moment__(_this.fechaNacimiento).format('DD-M-YYYY');
                        _this.formularioCitasProvedor();
                        _this.form = true;
                    }
                }, function (err) {
                    // this.loading.dismiss();
                    _this.load = false;
                    // this.menu.enable(true);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                });
            }
        }
    };
    SacarCitaPage.prototype.borrar = function () {
        if (this.citaProvedor.id_categoria == 20) {
            if (this.mascotaForm === true) {
                this.datos.reset();
                this.read = false;
                this.mascotaForm = false;
            }
            if (this.mascotaForm2 === true) {
                this.datosMascota.reset();
                this.read = false;
                this.mascotaForm2 = false;
            }
            if (this.mascotaForm3 === true) {
                this.datosMascotaNueva.reset();
                this.read = false;
                this.mascotaForm3 = false;
            }
        }
        else {
            if (this.form === true) {
                this.datos.reset();
                this.read = false;
                this.form = false;
            }
            if (this.form2 === true) {
                this.datos.reset();
                this.read = false;
                this.form2 = false;
            }
        }
    };
    SacarCitaPage.prototype.formularioCitasProvedor = function () {
        this.datos = this.formBuilder.group({
            nombres: [this.infoCitas.nombre, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(50)]],
            apellidos: [this.infoCitas.apellidos, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(50)]],
            fecha: [],
            fecha_nacimiento: [this.fechaNacimiento],
            identificacion: [this.infoCitas.cedula, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].pattern('[0-9]*')]],
            contacto: [this.infoCitas.telefono, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].pattern('[0-9]*')]],
        });
    };
    SacarCitaPage.prototype.formularioCitas = function () {
        this.datos = this.formBuilder.group({
            nombres: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(50)]],
            apellidos: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(50)]],
            fecha: [''],
            fecha_nacimiento: [''],
            identificacion: [this.cedula, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].pattern('[0-9]*')]],
            contacto: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].pattern('[0-9]*')]],
            correo: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
        });
    };
    SacarCitaPage.prototype.formularioMascotas = function () {
        this.datosMascota = this.formBuilder.group({
            nombres: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(50)]],
            apellidos: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(50)]],
            identificacion: [this.cedula, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].pattern('[0-9]*')]],
            contacto: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].pattern('[0-9]*')]],
            nombreMascota: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(50)]],
            especie: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(50)]],
        });
    };
    SacarCitaPage.prototype.formularioMascotasExiste = function () {
        this.datosMascota = this.formBuilder.group({
            nombres: [this.infoCitas.nombre, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(50)]],
            apellidos: [this.infoCitas.apellidos, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(50)]],
            identificacion: [this.infoCitas.cedula, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].pattern('[0-9]*')]],
            contacto: [this.infoCitas.telefono, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].pattern('[0-9]*')]],
        });
    };
    SacarCitaPage.prototype.formularioMascotaNueva = function () {
        this.datosMascotaNueva = this.formBuilder.group({
            nombres: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(50)]],
            especie: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(50)]],
            raza: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(50)]],
            color: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(50)]],
            fechaNacimiento: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required]]
        });
    };
    SacarCitaPage.prototype.esterilizado = function (ev) {
        // console.log(ev);
        this.esterilizadoMascota = ev;
    };
    SacarCitaPage.prototype.sexo = function (ev) {
        // console.log(ev);
        this.sexoMascota = ev;
    };
    SacarCitaPage.prototype.sacarCitaProvedorMascota = function (bol) {
        var _this = this;
        if (bol === true) {
            if (!this.id_mascota) {
                this.presentToast("Por favor selecciona una mascota.");
            }
            else {
                // this.loading = this.loadingCtrl.create({
                //   spinner: 'hide',
                //   content: "Espera un momento<br>estamos agendando tu cita... ",
                // });
                // this.loading.present();
                this.load = true;
                // this.menu.enable(false);
                var fecha = this.citaProvedor.fecha + " " + this.citaProvedor.start;
                // console.log(fecha);
                var info = { color: "#07a9df", start: fecha, mascota: true, servicio: this.citaProvedor.id_servicios, existe: bol, usuario: this.infoCitas.id, nombres: this.datosMascota.value.nombres,
                    apellidos: this.datosMascota.value.apellidos, contacto: this.datosMascota.value.contacto, id_mascota: this.id_mascota, existem: true };
                console.log(info);
                this.api.postCitasProvedor(info).then(function (res) {
                    console.log(res);
                    // this.loading.dismiss();
                    _this.load = false;
                    // this.menu.enable(true);
                    var agregado = res[0].agregado;
                    if (agregado === true) {
                        _this.presentToast("Cita agregada con exito");
                        // this.loading.dismiss();
                        _this.load = false;
                        // this.menu.enable(true);
                        _this.navCtrl.pop();
                    }
                    else {
                        _this.presentToast("No se pudo agregar la cita, por favor intentalo más tarde");
                        // this.loading.dismiss();
                        _this.load = false;
                        // this.menu.enable(true);
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                    }
                }, function (err) {
                    // this.loading.dismiss();
                    _this.load = false;
                    // this.menu.enable(true);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                });
            }
        }
        else {
            if (!this.esterilizadoMascota) {
                this.presentToast("Por favor seleccion el campo estetilizado.");
            }
            else if (!this.sexoMascota) {
                this.presentToast("Por favor seleccion el campo sexo mascota.");
            }
            else {
                // this.loading = this.loadingCtrl.create({
                //   spinner: 'hide',
                //   content: "Espera un momento<br>estamos agendando tu cita... ",
                // });
                // this.loading.present();
                this.load = true;
                // this.menu.enable(false);
                var fecha = this.citaProvedor.fecha + " " + this.citaProvedor.start;
                var info = { color: "#07a9df", start: fecha, mascota: true, servicio: this.citaProvedor.id_servicios, existe: bol, usuario: this.datosMascota.value.identificacion, nombres: this.datosMascota.value.nombres,
                    apellidos: this.datosMascota.value.apellidos, contacto: this.datosMascota.value.contacto, nombreMascota: this.datosMascota.value.nombreMascota, especie: this.datosMascota.value.especie,
                    esterilizado: this.esterilizadoMascota, sexo: this.sexoMascota };
                console.log(info);
                this.api.postCitasProvedor(info).then(function (res) {
                    console.log(res);
                    var agregado = res[0].agregado;
                    if (agregado === true) {
                        _this.presentToast("Cita agregada con exito");
                        // this.loading.dismiss();
                        _this.load = false;
                        // this.menu.enable(true);
                        _this.navCtrl.pop();
                    }
                    else {
                        _this.presentToast("No se pudo agregar la cita, por favor intentalo más tarde");
                        // this.loading.dismiss();
                        _this.load = false;
                        // this.menu.enable(true);
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                    }
                }, function (err) {
                    // this.loading.dismiss();
                    _this.load = false;
                    // this.menu.enable(true);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                });
            }
        }
    };
    SacarCitaPage.prototype.citaMascotaNueva = function () {
        var _this = this;
        if (!this.datosMascotaNueva.value.fechaNacimiento) {
            this.presentToast("Por favor selecciona una fecha de nacimiento.");
        }
        else {
            // this.loading = this.loadingCtrl.create({
            //   spinner: 'hide',
            //   content: "Espera un momento<br>estamos agendando tu cita... ",
            // });
            // this.loading.present();
            this.load = true;
            // this.menu.enable(false);
            var fecha = this.citaProvedor.fecha + " " + this.citaProvedor.start;
            var info = { color: "#07a9df", start: fecha, mascota: true, servicio: this.citaProvedor.id_servicios, existe: true, usuario: this.infoCitas.id, nombres: this.datosMascota.value.nombres,
                apellidos: this.datosMascota.value.apellidos, contacto: this.datosMascota.value.contacto, nombreMascota: this.datosMascotaNueva.value.nombres, especie: this.datosMascotaNueva.value.especie,
                esterilizado: this.esterilizadoMascota, sexo: this.sexoMascota, raza: this.datosMascotaNueva.value.raza, colorMascota: this.datosMascotaNueva.value.color,
                fecha_nacimiento: this.datosMascotaNueva.value.fechaNacimiento, existem: false };
            console.log(info);
            this.api.postCitasProvedor(info).then(function (res) {
                console.log(res);
                var agregado = res[0].agregado;
                if (agregado === true) {
                    _this.presentToast("Cita agregada con exito");
                    // this.loading.dismiss();
                    _this.load = false;
                    // this.menu.enable(true);
                    _this.navCtrl.pop();
                }
                else {
                    _this.presentToast("No se pudo agregar la cita, por favor intentalo más tarde");
                    // this.loading.dismiss();
                    _this.load = false;
                    // this.menu.enable(true);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                }
            }, function (err) {
                // this.loading.dismiss();
                _this.load = false;
                // this.menu.enable(true);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
            });
        }
    };
    SacarCitaPage.prototype.mascotaSelect = function (ev) {
        console.log(ev);
        if (ev != "nueva") {
            this.mascotaForm3 = false;
            this.id_mascota = ev;
        }
        else {
            if (this.numeroMascotas === false) {
                this.presentToast("Ya tienes 8 mascotas, no puedes agregar más");
            }
            else {
                this.mascotaForm3 = true;
                this.formularioMascotaNueva();
            }
        }
    };
    SacarCitaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-sacar-cita',template:/*ion-inline-start:"E:\ionic\appMovil\src\pages\sacar-cita\sacar-cita.html"*/'<ion-header>\n\n  <ion-navbar>\n\n  \n\n    <ion-title>\n\n      Sacar cita\n\n    </ion-title>\n\n    <ion-buttons end *ngIf="!citaProvedor">\n\n      <button ion-button (click)="calendar.today()">\n\n        <ion-icon name="calendar"></ion-icon>\n\n        </button>\n\n  </ion-buttons>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <div *ngIf="!citaProvedor">\n\n      <!-- <ion-calendar #calendar lang="es"\n\n      [events]="currentEvents" (onDaySelect)="onDaySelect($event)" \n\n      (onMonthSelect)="onMonthSelect($event)"\n\n     \n\n      ></ion-calendar> -->\n\n  \n\n  <ion-calendar #calendar lang="es"\n\n  (onDaySelect)="onDaySelect($event)"\n\n\n\n \n\n  ></ion-calendar>\n\n  <h1 class="h1" *ngIf="!hr">Horario Disponible</h1>\n\n  <h1 class="h1" *ngIf="hr">Horario No Disponible</h1>\n\n  <h3 *ngIf="!hr">Mañana</h3>\n\n  <div class="cerrado" *ngIf="mn">\n\n  <img  class="img_cerrado"  src="/assets/imgs/cerrado.jpg" alt="">\n\n  </div>\n\n\n\n\n\n  <div class="hr"  *ngIf="!hr">\n\n\n\n \n\n  \n\n<ion-list>\n\n    <div *ngFor="let i of maniana">\n\n      <button ion-item (click)="sacarCita(i.hora)" *ngIf="!mn" [disabled]="i.libres === 0" >\n\n        <p>{{i.hora}}</p>\n\n        <p>Citas disponibles : {{i.libres}}</p>\n\n      </button>\n\n    </div>   \n\n</ion-list>   \n\n\n\n<h3>Tarde</h3>\n\n<ion-list>\n\n<div *ngFor="let i of tarde">\n\n    <button ion-item (click)="sacarCita(i.hora,\'tarde\')" *ngIf="!td" [disabled]="i.libres === 0" >\n\n      <p>{{i.hora}}</p>\n\n      <p>Citas disponibles : {{i.libres}}</p>\n\n    </button>\n\n  </div>\n\n</ion-list>\n\n\n\n<div class="cerrado" *ngIf="td">\n\n    <img  class="img_cerrado"  src="/assets/imgs/cerrado.jpg" alt="">\n\n    </div>\n\n\n\n</div>\n\n\n\n</div>\n\n\n\n\n\n <!-- ----------------------------------SACAR CITA PROVEDOR ---------------------------------------------- -->\n\n\n\n <div *ngIf="citaProvedor">\n\n\n\n    <form [formGroup]="datos" (ngSubmit)="buscarCedula()"  novalidate>\n\n  <ion-item>\n\n    <ion-label>\n\n      <ion-icon name="card"></ion-icon>\n\n    </ion-label>\n\n    <ion-input type="number" placeholder="No. de Cedula" formControlName="identificacion" readonly={{read}}></ion-input>\n\n  </ion-item>\n\n  <ion-item *ngIf="datos.get(\'identificacion\').errors && datos.get(\'identificacion\').dirty">\n\n      <p color="danger" ion-text *ngIf="datos.get(\'identificacion\').hasError(\'required\')">* El campo es requerido</p>\n\n      <p color="danger" ion-text *ngIf="datos.get(\'identificacion\').hasError(\'pattern\')">* El campo solo acepta numeros</p>\n\n  </ion-item>\n\n    </form>\n\n\n\n    <div class="btns">\n\n    <button ion-button (click)="buscarCedula()">Buscar</button>\n\n    <button ion-button color="danger" (click)="borrar()">Borrar</button>\n\n    </div>\n\n\n\n    <div *ngIf="form">\n\n    <form [formGroup]="datos" (ngSubmit)="sacarCitaProvedor(true)"  novalidate>\n\n        <ion-item>\n\n          <ion-label>\n\n            <ion-icon name="person"></ion-icon>\n\n            Nombres\n\n          </ion-label>\n\n          <ion-input type="text" placeholder="Nombres" formControlName="nombres" readonly={{read}}></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="datos.get(\'nombres\').errors && datos.get(\'nombres\').dirty">\n\n          <p color="danger" ion-text *ngIf="datos.get(\'nombres\').hasError(\'required\')">* El campo es requerido</p>\n\n          <p color="danger" ion-text *ngIf="datos.get(\'nombres\').hasError(\'minlength\')">Cantidad minima de caracteres (2)</p>\n\n      </ion-item>\n\n \n\n      <ion-item>\n\n          <ion-label>\n\n            <ion-icon name="person"></ion-icon>\n\n            Apellidos\n\n          </ion-label>\n\n          <ion-input type="text" placeholder="Apellidos" formControlName="apellidos" readonly={{read}}></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="datos.get(\'apellidos\').errors && datos.get(\'apellidos\').dirty">\n\n          <p color="danger" ion-text *ngIf="datos.get(\'apellidos\').hasError(\'required\')">* El campo es requerido</p>\n\n          <p color="danger" ion-text *ngIf="datos.get(\'apellidos\').hasError(\'minlength\')">Cantidad minima de caracteres (2)</p>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n          <ion-label>\n\n            <ion-icon name="card"></ion-icon>\n\n            Identificacion\n\n          </ion-label>\n\n          <ion-input type="number" placeholder="No. de identificacion" formControlName="identificacion" readonly={{read}}></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="datos.get(\'identificacion\').errors && datos.get(\'identificacion\').dirty">\n\n          <p color="danger" ion-text *ngIf="datos.get(\'identificacion\').hasError(\'required\')">* El campo es requerido</p>\n\n          <p color="danger" ion-text *ngIf="datos.get(\'identificacion\').hasError(\'pattern\')">* El campo solo acepta numeros</p>\n\n      </ion-item>\n\n\n\n      <!-- <ion-item *ngIf="!fechaNacimiento">\n\n          <ion-label icon-left>\n\n            <ion-icon name="calendar"></ion-icon>\n\n            Fecha nacimiento</ion-label>\n\n          <ion-datetime displayFormat="DD/MM/YYYY" formControlName="fecha" doneText="Aceptar" cancelText="Cancelar"></ion-datetime>\n\n        </ion-item> -->\n\n\n\n        <ion-item>\n\n          <ion-label>\n\n            <ion-icon name="calendar" ></ion-icon>\n\n            Fecha nacimiento\n\n          </ion-label>\n\n          <ion-input type="text" formControlName="fecha_nacimiento" readonly={{read}}></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>\n\n              <ion-icon name="call"></ion-icon>\n\n              No. de Contacto\n\n            </ion-label>\n\n            <ion-input type="number" placeholder="No. de Contacto" formControlName="contacto" readonly={{read}}></ion-input>\n\n          </ion-item>\n\n          <ion-item *ngIf="datos.get(\'contacto\').errors && datos.get(\'contacto\').dirty">\n\n            <p color="danger" ion-text *ngIf="datos.get(\'contacto\').hasError(\'required\')">* El campo es requerido</p>\n\n            <p color="danger" ion-text *ngIf="datos.get(\'contacto\').hasError(\'pattern\')">* El campo solo acepta numeros</p>\n\n        </ion-item>\n\n        \n\n        <button ion-button block round [disabled]="!this.datos.valid" icon-left>\n\n          <ion-icon name="list-box"></ion-icon>\n\n          Sacar cita\n\n        </button>\n\n    </form>\n\n  </div>\n\n\n\n  \n\n  <div *ngIf="form2">\n\n    \n\n    <form [formGroup]="datos" (ngSubmit)="sacarCitaProvedor(false)"  novalidate>\n\n      <ion-item>\n\n        <ion-label>\n\n          <ion-icon name="person"></ion-icon>\n\n        </ion-label>\n\n        <ion-input type="text" placeholder="Nombres" formControlName="nombres" ></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="datos.get(\'nombres\').errors && datos.get(\'nombres\').dirty">\n\n        <p color="danger" ion-text *ngIf="datos.get(\'nombres\').hasError(\'required\')">* El campo es requerido</p>\n\n        <p color="danger" ion-text *ngIf="datos.get(\'nombres\').hasError(\'minlength\')">Cantidad minima de caracteres (2)</p>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label>\n\n          <ion-icon name="person"></ion-icon>\n\n        </ion-label>\n\n        <ion-input type="text" placeholder="Apellidos" formControlName="apellidos" ></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="datos.get(\'apellidos\').errors && datos.get(\'apellidos\').dirty">\n\n        <p color="danger" ion-text *ngIf="datos.get(\'apellidos\').hasError(\'required\')">* El campo es requerido</p>\n\n        <p color="danger" ion-text *ngIf="datos.get(\'apellidos\').hasError(\'minlength\')">Cantidad minima de caracteres (2)</p>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label>\n\n          <ion-icon name="card"></ion-icon>\n\n        </ion-label>\n\n        <ion-input type="number" placeholder="No. de identificacion" formControlName="identificacion" readonly={{read}}></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="datos.get(\'identificacion\').errors && datos.get(\'identificacion\').dirty">\n\n        <p color="danger" ion-text *ngIf="datos.get(\'identificacion\').hasError(\'required\')">* El campo es requerido</p>\n\n        <p color="danger" ion-text *ngIf="datos.get(\'identificacion\').hasError(\'pattern\')">* El campo solo acepta numeros</p>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label>\n\n          <ion-icon name="mail"></ion-icon>\n\n        </ion-label>\n\n        <ion-input type="email" placeholder="Correo electronico" formControlName="correo"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="datos.get(\'correo\').errors && datos.get(\'correo\').dirty">\n\n        <p color="danger" ion-text *ngIf="datos.get(\'correo\').hasError(\'required\')">* El campo es requerido</p>\n\n        <p color="danger" ion-text *ngIf="datos.get(\'correo\').hasError(\'pattern\') ">* El tipo de email no es valido.</p>\n\n    </ion-item>\n\n\n\n    <ion-item >\n\n        <ion-label icon-left>\n\n          <ion-icon name="calendar"></ion-icon>\n\n          Fecha nacimiento</ion-label>\n\n        <ion-datetime displayFormat="DD/MM/YYYY" formControlName="fecha" doneText="Aceptar" cancelText="Cancelar"></ion-datetime>\n\n      </ion-item>\n\n\n\n      <!-- <ion-item>\n\n        <ion-label>\n\n          <ion-icon name="calendar" ></ion-icon>\n\n          Fecha nacimiento\n\n        </ion-label>\n\n        <ion-input type="text" formControlName="fecha_nacimiento" readonly={{read}}></ion-input>\n\n      </ion-item> -->\n\n\n\n      <ion-item>\n\n          <ion-label>\n\n            <ion-icon name="call"></ion-icon>\n\n          </ion-label>\n\n          <ion-input type="number" placeholder="No. de Contacto" formControlName="contacto"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="datos.get(\'contacto\').errors && datos.get(\'contacto\').dirty">\n\n          <p color="danger" ion-text *ngIf="datos.get(\'contacto\').hasError(\'required\')">* El campo es requerido</p>\n\n          <p color="danger" ion-text *ngIf="datos.get(\'contacto\').hasError(\'pattern\')">* El campo solo acepta numeros</p>\n\n      </ion-item>\n\n      \n\n      <button ion-button block round [disabled]="!this.datos.valid" icon-left >\n\n        <ion-icon name="list-box"></ion-icon>\n\n        Sacar cita\n\n      </button>\n\n  </form>\n\n\n\n  </div>\n\n\n\n  <div *ngIf="mascotaForm">\n\n\n\n  <form [formGroup]="datosMascota" (ngSubmit)="sacarCitaProvedorMascota(false)"  novalidate>\n\n    <ion-item>\n\n      <ion-label>\n\n        <ion-icon name="person"></ion-icon>\n\n      </ion-label>\n\n      <ion-input type="text" placeholder="Nombres" formControlName="nombres" ></ion-input>\n\n    </ion-item>\n\n    <ion-item *ngIf="datosMascota.get(\'nombres\').errors && datosMascota.get(\'nombres\').dirty">\n\n      <p color="danger" ion-text *ngIf="datosMascota.get(\'nombres\').hasError(\'required\')">* El campo es requerido</p>\n\n      <p color="danger" ion-text *ngIf="datosMascota.get(\'nombres\').hasError(\'minlength\')">Cantidad minima de caracteres (2)</p>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n      <ion-label>\n\n        <ion-icon name="person"></ion-icon>\n\n      </ion-label>\n\n      <ion-input type="text" placeholder="Apellidos" formControlName="apellidos" ></ion-input>\n\n    </ion-item>\n\n    <ion-item *ngIf="datosMascota.get(\'apellidos\').errors && datosMascota.get(\'apellidos\').dirty">\n\n      <p color="danger" ion-text *ngIf="datosMascota.get(\'apellidos\').hasError(\'required\')">* El campo es requerido</p>\n\n      <p color="danger" ion-text *ngIf="datosMascota.get(\'apellidos\').hasError(\'minlength\')">Cantidad minima de caracteres (2)</p>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n      <ion-label>\n\n        <ion-icon name="card"></ion-icon>\n\n      </ion-label>\n\n      <ion-input type="number" placeholder="No. de identificacion" formControlName="identificacion" readonly={{read}}></ion-input>\n\n    </ion-item>\n\n    <ion-item *ngIf="datosMascota.get(\'identificacion\').errors && datosMascota.get(\'identificacion\').dirty">\n\n      <p color="danger" ion-text *ngIf="datosMascota.get(\'identificacion\').hasError(\'required\')">* El campo es requerido</p>\n\n      <p color="danger" ion-text *ngIf="datosMascota.get(\'identificacion\').hasError(\'pattern\')">* El campo solo acepta numeros</p>\n\n  </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label>\n\n          <ion-icon name="call"></ion-icon>\n\n        </ion-label>\n\n        <ion-input type="number" placeholder="No. de Contacto" formControlName="contacto"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="datosMascota.get(\'contacto\').errors && datosMascota.get(\'contacto\').dirty">\n\n        <p color="danger" ion-text *ngIf="datosMascota.get(\'contacto\').hasError(\'required\')">* El campo es requerido</p>\n\n        <p color="danger" ion-text *ngIf="datosMascota.get(\'contacto\').hasError(\'pattern\')">* El campo solo acepta numeros</p>\n\n    </ion-item>\n\n\n\n\n\n     \n\n\n\n    <ion-item>\n\n      <ion-label>\n\n        <ion-icon name="paw"></ion-icon>\n\n      </ion-label>\n\n      <ion-input type="text" placeholder="Nombre mascota" formControlName="nombreMascota"></ion-input>\n\n    </ion-item>\n\n    <ion-item *ngIf="datosMascota.get(\'nombreMascota\').errors && datosMascota.get(\'nombreMascota\').dirty">\n\n      <p color="danger" ion-text *ngIf="datosMascota.get(\'nombreMascota\').hasError(\'required\')">* El campo es requerido</p>\n\n      <p color="danger" ion-text *ngIf="datosMascota.get(\'nombreMascota\').hasError(\'pattern\')">* El campo solo acepta numeros</p>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label>\n\n      <ion-icon name="paw"></ion-icon>\n\n    </ion-label>\n\n    <ion-input type="text" placeholder="Especie" formControlName="especie"></ion-input>\n\n  </ion-item>\n\n  <ion-item *ngIf="datosMascota.get(\'especie\').errors && datosMascota.get(\'especie\').dirty">\n\n    <p color="danger" ion-text *ngIf="datosMascota.get(\'especie\').hasError(\'required\')">* El campo es requerido</p>\n\n    <p color="danger" ion-text *ngIf="datosMascota.get(\'especie\').hasError(\'pattern\')">* El campo solo acepta numeros</p>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label icon-left><ion-icon name="female"></ion-icon>Sexo</ion-label>\n\n    <ion-select (ionChange)="sexo($event)" cancelText="cancelar">\n\n      <ion-option value="Macho">Macho</ion-option>\n\n      <ion-option value="Hembra">Hembra</ion-option>\n\n    </ion-select>   \n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label icon-left><ion-icon name="male"></ion-icon>Esterilizado</ion-label>\n\n    <ion-select (ionChange)="esterilizado($event)" cancelText="cancelar">\n\n      <ion-option value="si">Si</ion-option>\n\n      <ion-option value="no">No</ion-option>\n\n    </ion-select>   \n\n  </ion-item>\n\n\n\n\n\n\n\n    \n\n    <button ion-button block round [disabled]="!this.datosMascota.valid" icon-left >\n\n      <ion-icon name="list-box"></ion-icon>\n\n      Sacar cita\n\n    </button>\n\n</form>\n\n\n\n  </div>\n\n\n\n  <div *ngIf="mascotaForm2">\n\n\n\n    <form [formGroup]="datosMascota" (ngSubmit)="sacarCitaProvedorMascota(true)"  novalidate>\n\n      <ion-item>\n\n        <ion-label>\n\n          <ion-icon name="person"></ion-icon>\n\n        </ion-label>\n\n        <ion-input type="text" placeholder="Nombres" formControlName="nombres" readonly={{read}}></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="datosMascota.get(\'nombres\').errors && datosMascota.get(\'nombres\').dirty">\n\n        <p color="danger" ion-text *ngIf="datosMascota.get(\'nombres\').hasError(\'required\')">* El campo es requerido</p>\n\n        <p color="danger" ion-text *ngIf="datosMascota.get(\'nombres\').hasError(\'minlength\')">Cantidad minima de caracteres (2)</p>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n        <ion-label>\n\n          <ion-icon name="person"></ion-icon>\n\n        </ion-label>\n\n        <ion-input type="text" placeholder="Apellidos" formControlName="apellidos" readonly={{read}}></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="datosMascota.get(\'apellidos\').errors && datosMascota.get(\'apellidos\').dirty">\n\n        <p color="danger" ion-text *ngIf="datosMascota.get(\'apellidos\').hasError(\'required\')">* El campo es requerido</p>\n\n        <p color="danger" ion-text *ngIf="datosMascota.get(\'apellidos\').hasError(\'minlength\')">Cantidad minima de caracteres (2)</p>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n        <ion-label>\n\n          <ion-icon name="card"></ion-icon>\n\n        </ion-label>\n\n        <ion-input type="number" placeholder="No. de identificacion" formControlName="identificacion" readonly={{read}}></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="datosMascota.get(\'identificacion\').errors && datosMascota.get(\'identificacion\').dirty">\n\n        <p color="danger" ion-text *ngIf="datosMascota.get(\'identificacion\').hasError(\'required\')">* El campo es requerido</p>\n\n        <p color="danger" ion-text *ngIf="datosMascota.get(\'identificacion\').hasError(\'pattern\')">* El campo solo acepta numeros</p>\n\n    </ion-item>\n\n  \n\n      <ion-item>\n\n          <ion-label>\n\n            <ion-icon name="call"></ion-icon>\n\n          </ion-label>\n\n          <ion-input type="number" placeholder="No. de Contacto" formControlName="contacto" readonly={{read}}></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="datosMascota.get(\'contacto\').errors && datosMascota.get(\'contacto\').dirty">\n\n          <p color="danger" ion-text *ngIf="datosMascota.get(\'contacto\').hasError(\'required\')">* El campo es requerido</p>\n\n          <p color="danger" ion-text *ngIf="datosMascota.get(\'contacto\').hasError(\'pattern\')">* El campo solo acepta numeros</p>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>Peluditos</ion-label>\n\n        <ion-select multiple="false" (ionChange)="mascotaSelect($event);" cancelText="cancelar">\n\n          <ion-option *ngFor="let m of this.infoCitas.masc;let i = index" [value]="m.id_mascotas"  >{{m.nombre}}</ion-option>  \n\n          <ion-option value="nueva">Agregar otra</ion-option>   \n\n        </ion-select>\n\n      </ion-item>\n\n  \n\n      <!-- <ion-item>\n\n        <ion-label>\n\n          <ion-icon name="paw"></ion-icon>\n\n        </ion-label>\n\n        <ion-input type="text" placeholder="Nombre mascota" formControlName="nombreMascota"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="datosMascota.get(\'nombreMascota\').errors && datosMascota.get(\'nombreMascota\').dirty">\n\n        <p color="danger" ion-text *ngIf="datosMascota.get(\'nombreMascota\').hasError(\'required\')">* El campo es requerido</p>\n\n        <p color="danger" ion-text *ngIf="datosMascota.get(\'nombreMascota\').hasError(\'pattern\')">* El campo solo acepta numeros</p>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label>\n\n        <ion-icon name="paw"></ion-icon>\n\n      </ion-label>\n\n      <ion-input type="text" placeholder="Especie" formControlName="especie"></ion-input>\n\n    </ion-item>\n\n    <ion-item *ngIf="datosMascota.get(\'especie\').errors && datosMascota.get(\'especie\').dirty">\n\n      <p color="danger" ion-text *ngIf="datosMascota.get(\'especie\').hasError(\'required\')">* El campo es requerido</p>\n\n      <p color="danger" ion-text *ngIf="datosMascota.get(\'especie\').hasError(\'pattern\')">* El campo solo acepta numeros</p>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label icon-left><ion-icon name="male"></ion-icon>Esterilizado</ion-label>\n\n      <ion-select (ionChange)="esterilizado($event)" cancelText="cancelar">\n\n        <ion-option value="si">Si</ion-option>\n\n        <ion-option value="no">No</ion-option>\n\n      </ion-select>   \n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label icon-left><ion-icon name="female"></ion-icon>Sexo</ion-label>\n\n      <ion-select (ionChange)="sexo($event)" cancelText="cancelar">\n\n        <ion-option value="Macho">Macho</ion-option>\n\n        <ion-option value="Hembra">Hembra</ion-option>\n\n      </ion-select>   \n\n    </ion-item> -->\n\n  \n\n    <button *ngIf="!mascotaForm3" ion-button block round [disabled]="!this.datosMascota.valid" icon-left >\n\n      <ion-icon name="list-box"></ion-icon>\n\n      Sacar cita\n\n    </button>\n\n      \n\n  </form>\n\n\n\n  <div *ngIf="mascotaForm3">\n\n\n\n    <div class="h3"><h3 >Agregar peludito</h3></div>\n\n    \n\n    <form [formGroup]="datosMascotaNueva" (ngSubmit)="citaMascotaNueva()"  novalidate>\n\n     \n\n        <ion-item>\n\n            <ion-label icon-left><ion-icon name="paw"></ion-icon></ion-label>\n\n            <ion-input type="text" placeholder="Nombre peludito" formControlName="nombres"></ion-input>\n\n          </ion-item>\n\n          <ion-item *ngIf="datosMascotaNueva.get(\'nombres\').errors && datosMascotaNueva.get(\'nombres\').dirty">\n\n              <p color="danger" ion-text *ngIf="datosMascotaNueva.get(\'nombres\').hasError(\'required\')">* El campo es requerido</p>\n\n              <p color="danger" ion-text *ngIf="datosMascotaNueva.get(\'nombres\').hasError(\'minlength\')">Cantidad minima de caracteres (2)</p>\n\n              <p color="danger" ion-text *ngIf="datosMascotaNueva.get(\'nombres\').hasError(\'maxlength\')">Cantidad minima de caracteres (50)</p>\n\n          </ion-item>\n\n    \n\n          <ion-item>\n\n              <ion-label icon-left><ion-icon name="paw"></ion-icon></ion-label>\n\n              <ion-input type="text" placeholder="Especie" formControlName="especie"></ion-input>\n\n          </ion-item>\n\n          <ion-item *ngIf="datosMascotaNueva.get(\'especie\').errors && datosMascotaNueva.get(\'especie\').dirty">\n\n              <p color="danger" ion-text *ngIf="datosMascotaNueva.get(\'especie\').hasError(\'required\')">* El campo es requerido</p>\n\n              <p color="danger" ion-text *ngIf="datosMascotaNueva.get(\'especie\').hasError(\'minlength\')">Cantidad minima de caracteres (2)</p>\n\n              <p color="danger" ion-text *ngIf="datosMascotaNueva.get(\'especie\').hasError(\'maxlength\')">Cantidad minima de caracteres (50)</p>\n\n          </ion-item>\n\n    \n\n          <ion-item>\n\n              <ion-label icon-left><ion-icon name="paw"></ion-icon></ion-label>\n\n              <ion-input type="text" placeholder="Raza" formControlName="raza"></ion-input>\n\n          </ion-item>\n\n          <ion-item *ngIf="datosMascotaNueva.get(\'raza\').errors && datosMascotaNueva.get(\'raza\').dirty">\n\n              <p color="danger" ion-text *ngIf="datosMascotaNueva.get(\'raza\').hasError(\'required\')">* El campo es requerido</p>\n\n              <p color="danger" ion-text *ngIf="datosMascotaNueva.get(\'raza\').hasError(\'minlength\')">Cantidad minima de caracteres (2)</p>\n\n              <p color="danger" ion-text *ngIf="datosMascotaNueva.get(\'raza\').hasError(\'maxlength\')">Cantidad minima de caracteres (50)</p>\n\n          </ion-item>\n\n    \n\n          <ion-item>\n\n              <ion-label icon-left><ion-icon name="female"></ion-icon>Sexo</ion-label>\n\n              <ion-select (ionChange)="sexo($event)" cancelText="cancelar">\n\n                <ion-option value="Macho">Macho</ion-option>\n\n                <ion-option value="Hembra">Hembra</ion-option>\n\n              </ion-select>   \n\n          </ion-item>\n\n    \n\n          <ion-item>\n\n              <ion-label icon-left><ion-icon name="color-palette"></ion-icon></ion-label>\n\n              <ion-input type="text" placeholder="Color" formControlName="color"></ion-input>\n\n          </ion-item>\n\n          <ion-item *ngIf="datosMascotaNueva.get(\'color\').errors && datosMascotaNueva.get(\'color\').dirty">\n\n              <p color="danger" ion-text *ngIf="datosMascotaNueva.get(\'color\').hasError(\'required\')">* El campo es requerido</p>\n\n              <p color="danger" ion-text *ngIf="datosMascotaNueva.get(\'color\').hasError(\'minlength\')">Cantidad minima de caracteres (2)</p>\n\n              <p color="danger" ion-text *ngIf="datosMascotaNueva.get(\'color\').hasError(\'maxlength\')">Cantidad minima de caracteres (50)</p>\n\n          </ion-item>\n\n    \n\n          <ion-item>\n\n              <ion-label icon-left>\n\n                <ion-icon name="calendar"></ion-icon>\n\n                Fecha nacimiento</ion-label>\n\n              <ion-datetime displayFormat="DD/MM/YYYY" formControlName="fechaNacimiento" doneText="Ok" cancelText="Cancelar"></ion-datetime>\n\n            </ion-item>\n\n            <ion-item *ngIf="datosMascotaNueva.get(\'fechaNacimiento\').errors && datosMascotaNueva.get(\'fechaNacimiento\').dirty">\n\n                <p color="danger" ion-text *ngIf="datosMascotaNueva.get(\'fechaNacimiento\').hasError(\'required\')">* El campo es requerido</p>\n\n            </ion-item>\n\n    \n\n            <ion-item>\n\n                <ion-label icon-left><ion-icon name="male"></ion-icon>Esterilizado</ion-label>\n\n                <ion-select (ionChange)="esterilizado($event)" cancelText="cancelar">\n\n                  <ion-option value="si">Si</ion-option>\n\n                  <ion-option value="no">No</ion-option>\n\n                </ion-select>   \n\n            </ion-item>\n\n    \n\n            <button ion-button type="submit" icon-left round block>\n\n              <ion-icon name="list-box"></ion-icon>\n\n              Agregar Peludito y sacar cita\n\n            </button> \n\n  \n\n      \n\n  </form>\n\n  </div>\n\n\n\n    </div>\n\n\n\n </div>\n\n\n\n\n\n</ion-content>\n\n\n\n<div class="loading" *ngIf="load">\n\n  <img src="/assets/imgs/pulso.gif" alt="">\n\n</div>'/*ion-inline-end:"E:\ionic\appMovil\src\pages\sacar-cita\sacar-cita.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__app_global__["a" /* Global */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_7_ionic3_calendar_en__["a" /* CalendarModule */]])
    ], SacarCitaPage);
    return SacarCitaPage;
}());

//# sourceMappingURL=sacar-cita.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalCitaUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_global__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_photo_viewer__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servicio_servicio__ = __webpack_require__(38);
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
 * Generated class for the ModalCitaUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalCitaUserPage = /** @class */ (function () {
    function ModalCitaUserPage(navCtrl, navParams, viewCtrl, api, global, loadingCtrl, toastCtrl, photoViewer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.api = api;
        this.global = global;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.photoViewer = photoViewer;
        this.info = this.navParams.get('info');
        this.calificacion = this.navParams.get('calificacion');
        // console.log(this.info);
        // if(!this.calificacion){
        //      this.getServicio();
        //   }
        //   else{
        //   }
        // console.log(this.info);
    }
    ModalCitaUserPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad ModalCitaUserPage');
        this.getServicio();
    };
    ModalCitaUserPage.prototype.verServicio = function () {
        // console.log(this.infoServicio);
        var categoria = this.infoServicio.categoria;
        var createdAt = this.infoServicio.createdAt;
        var createdupdate = this.infoServicio.createdupdate;
        var descripcion = this.infoServicio.descripcion;
        var descuento = this.infoServicio.descuento;
        var direccion = this.infoServicio.direccion;
        var duracion = this.infoServicio.duracion;
        var foto = this.infoServicio.foto;
        var fotos = this.infoServicio.fotos;
        var id_categoria = this.infoServicio.id_categoria;
        var id_provedores = this.infoServicio.id_provedores;
        var id_servicios = this.infoServicio.id_servicios;
        var locked = this.infoServicio.locked;
        var max_citas_ves = this.infoServicio.max_citas_ves;
        var municipio_id_municipio = this.infoServicio.municipio_id_municipio;
        var nombre = this.infoServicio.nombre;
        var precio = this.infoServicio.precio;
        var precio_cliente_prevenir = this.infoServicio.precio_cliente_prevenir;
        var promedio = this.infoServicio.promedio;
        var video = this.infoServicio.video;
        var coment = this.infoServicio.coment;
        var estrellasAmarillas = [];
        for (var j = 0; j < promedio; j++) {
            var id = "amarilla";
            estrellasAmarillas.push({ id: id });
        }
        var resultado = 5 - promedio;
        if (resultado >= 1) {
            var estrellasGrises = [];
            for (var h = 0; h < resultado; h++) {
                var id = "gris";
                estrellasGrises.push({ id: id });
            }
        }
        var servicio = [];
        servicio.push({ categoria: categoria, createdAt: createdAt, createdupdate: createdupdate, descripcion: descripcion, descuento: descuento,
            direccion: direccion, duracion: duracion, foto: foto, fotos: fotos, id_categoria: id_categoria, id_provedores: id_provedores, id_servicios: id_servicios,
            locked: locked, max_citas_ves: max_citas_ves, municipio_id_municipio: municipio_id_municipio, nombre: nombre, precio: precio,
            precio_cliente_prevenir: precio_cliente_prevenir, promedio: promedio, video: video, estrellasAmarillas: estrellasAmarillas, estrellasGrises: estrellasGrises, coment: coment });
        // console.log(servicio[0]);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__servicio_servicio__["a" /* ServicioPage */], { servicio: servicio, cita: true, mascota: true });
    };
    ModalCitaUserPage.prototype.verImg = function (foto) {
        this.photoViewer.show(foto, '', { share: false });
    };
    ModalCitaUserPage.prototype.getServicio = function () {
        var _this = this;
        // this.loading = this.loadingCtrl.create({
        //   spinner: 'hide',
        //   content: "Espera un momento<br>estamos cargando la información... ",
        // });
        // this.loading.present();
        this.load = true;
        // console.log(this.info.id_servicio);
        this.api.getServicio(this.info.id_servicio).subscribe(function (data) {
            _this.infoServicio = data;
            // console.log(data);
            _this.infoServicio = _this.infoServicio[0];
            var provedor = _this.infoServicio.id_provedores;
            // this.loading.dismiss();
            _this.load = false;
            // console.log(provedor);
            _this.getProvedor(provedor);
        }, function (err) {
            // this.loading.dismiss();
            _this.load = false;
            _this.presentToast("Error en la conexion, intentalo más tarde");
            // console.log(err);
        });
    };
    ModalCitaUserPage.prototype.getProvedor = function (id) {
        var _this = this;
        // console.log("AQUII");
        // console.log(id);
        // this.loading = this.loadingCtrl.create({
        //   spinner: 'hide',
        //   content: "Espera un momento<br>estamos cargando la información... ",
        // });
        // this.loading.present();
        this.load = true;
        this.api.getProovedor(id).subscribe(function (data) {
            _this.infoProvedor = data;
            // console.log(this.infoProvedor);
            _this.avatar = _this.global.apiUrl + _this.infoProvedor.avatar;
            _this.nombreProvedor = _this.infoProvedor.nombre;
            _this.telefonoProvedor = _this.infoProvedor.telefono;
            // this.direccionProvedor = this.infoProvedor.direccion;
            _this.correoProvedor = _this.infoProvedor.correo;
            // this.loading.dismiss();
            _this.load = false;
        }, function (err) {
            // this.loading.dismiss();
            _this.load = false;
            _this.presentToast("Error en la conexion, intentalo más tarde");
            // console.log(err);
        });
    };
    ModalCitaUserPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ModalCitaUserPage.prototype.save = function () {
        this.viewCtrl.dismiss();
    };
    ModalCitaUserPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 5000
        });
        toast.present();
    };
    ModalCitaUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-modal-cita-user',template:/*ion-inline-start:"E:\ionic\appMovil\src\pages\modal-cita-user\modal-cita-user.html"*/'<!--\n\n  Generated template for the ModalCitaUserPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <ion-buttons start>\n\n          <button ion-button icon-only (click)="close()">\n\n            <ion-icon name="close"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n    <ion-title>Información</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n\n\n\n\n    <div class="img">\n\n        <img id="userImg" [src]="avatar" alt="nd" (click)="verImg(avatar)">\n\n      </div>\n\n<h1 class="h1">{{nombreProvedor}}</h1>\n\n<div class="card">\n\n      <ion-card>\n\n        <ion-card-content>\n\n          <h2><strong>Servicio : </strong> {{info.nombre}}</h2>\n\n          <h2><strong>Dirección : </strong> {{info.direccion}}</h2>\n\n          <h2><strong>Numero de contacto : </strong> {{telefonoProvedor}}</h2>\n\n          <!-- <h2><strong></strong> Dirección : {{direccionProvedor}}</h2> -->\n\n          <h2 *ngIf="calificacion"><strong>Fecha cita : </strong> {{info.start}}</h2>\n\n          <h2 *ngIf="!calificacion"><strong>Fecha cita : </strong> {{info.fecha}}</h2>\n\n          <h2 *ngIf="!calificacion"><strong>Hora cita : </strong> {{info.hora}}</h2>\n\n          <br>\n\n          <h2 *ngIf="!calificacion">* Recuerda llegar 15 minutos antes de la cita</h2>\n\n        </ion-card-content>\n\n      </ion-card>\n\n      </div>\n\n\n\n      <button *ngIf="!calificacion" class="hc" ion-button round block disabled icon-left>\n\n        <ion-icon name="list-box"></ion-icon>\n\n        Hoja de vida Medico</button>\n\n        <button *ngIf="calificacion" class="hc" ion-button round block icon-left (click)="verServicio()">\n\n            <ion-icon name="eye"></ion-icon>\n\n            Ver Servicio</button>\n\n      <button ion-button color="energized" icon-left round block (click)="close()">\n\n          <ion-icon name="arrow-round-back" ></ion-icon>\n\n        Volver</button>\n\n</ion-content>\n\n\n\n<div class="loading" *ngIf="load">\n\n  <img src="/assets/imgs/pulso.gif" alt="">\n\n</div> \n\n'/*ion-inline-end:"E:\ionic\appMovil\src\pages\modal-cita-user\modal-cita-user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_3__app_global__["a" /* Global */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_photo_viewer__["a" /* PhotoViewer */]])
    ], ModalCitaUserPage);
    return ModalCitaUserPage;
}());

//# sourceMappingURL=modal-cita-user.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicacionesProveedorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_global__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servicio_servicio__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__calificacion_calificacion__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modal_cita_user_modal_cita_user__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_photo_viewer__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__contactenos_contactenos__ = __webpack_require__(68);
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
 * Generated class for the PublicacionesProveedorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PublicacionesProveedorPage = /** @class */ (function () {
    function PublicacionesProveedorPage(navCtrl, navParams, api, global, toastCtrl, modalCtrl, app, photoViewer, formBuilder, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.global = global;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.app = app;
        this.photoViewer = photoViewer;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.inf = [];
        this.infoH = [];
        this.mostrarHistorial = false;
        this.rol = this.navParams.get('rol');
        //  console.log(this.rol);
        if (!this.rol) {
            this.historial = false;
            this.proveedor = this.navParams.get('provedor');
            this.datos = this.formBuilder.group({
                descripcion: ['', [__WEBPACK_IMPORTED_MODULE_9__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_9__angular_forms__["f" /* Validators */].minLength(15)]],
            });
            this.avatar = this.global.apiUrl + this.proveedor.avatar;
            this.getProveedor();
            this.nombreUser = this.global.nombre;
            this.correoUser = this.global.infoPerfil;
            this.correoUser = this.correoUser.correo;
        }
        else {
            this.historial = true;
        }
    }
    PublicacionesProveedorPage.prototype.goToService = function (servicio) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__servicio_servicio__["a" /* ServicioPage */], { servicio: servicio });
    };
    PublicacionesProveedorPage.prototype.goToMasPublicaciones = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__contactenos_contactenos__["a" /* ContactenosPage */], { id: this.proveedor.id_provedor });
    };
    PublicacionesProveedorPage.prototype.mensaje = function () {
        this.correoUser;
        // this.correoProv;
        var mensaje = this.datos.value.descripcion + ". Correo enviado por :  " + this.correoUser;
        if (!this.asunt) {
            this.presentToast("Debes elegir un asunto antes de enviar el mensaje");
        }
        else {
            var correo = { remitente: this.nombreUser, destino: this.proveedor.correo, texto: mensaje, asunto: this.asunt };
            console.log(correo);
            // this.loading = this.loadingCtrl.create({
            //   spinner: 'hide',
            //   content: "Espera un momento<br>estamos enviando tu mensaje... ",
            // });
            // this.loading.present();
            // this.api.enviarMensaje(correo).then((data)=>{
            //   // console.log(data);
            //   if(data === true){
            //     this.datos.reset();
            //     this.loading.dismiss();
            //     this.presentToast("Su mensaje ha sido enviado con exito");
            //   }else{
            //     this.loading.dismiss();
            //     this.presentToast("El mensaje no ha sido enviado, intentalo mas tarde");
            //   }
            // },(err)=>{
            //   this.loading.dismiss();
            //   this.presentToast("Error al enviar el mensaje, intentalo mas tarde");
            // });
        }
    };
    PublicacionesProveedorPage.prototype.verImg = function (foto) {
        this.photoViewer.show(foto, '', { share: false });
    };
    PublicacionesProveedorPage.prototype.ionViewWillEnter = function () {
        if (this.historial) {
            this.infoH = [];
            switch (this.rol) {
                case (this.rol = "user"):
                    this.obtenerHistorial();
                    break;
                case (this.rol = "beneficiario"):
                    this.obtenerHistorialBeneficiario();
                    break;
                case (this.rol = "mascota"):
                    this.obtenerHistorialMascota();
                    break;
            }
        }
    };
    PublicacionesProveedorPage.prototype.ionViewDidLoad = function () {
    };
    PublicacionesProveedorPage.prototype.ionViewWillLeave = function () {
    };
    PublicacionesProveedorPage.prototype.asunto = function (ev) {
        this.asunt = ev;
    };
    PublicacionesProveedorPage.prototype.obtenerHistorialMascota = function () {
        var _this = this;
        this.load = true;
        this.api.getHistorialmascotas(this.global.id_usuario).subscribe(function (data) {
            // console.log(data);
            _this.info_historial = data;
            _this.mascota = true;
            _this.infoHistorial();
            _this.load = false;
        }, function (err) {
            _this.load = false;
            _this.presentToast("Error en la conexion, intentalo mas tarde o revisa tu conexion");
        });
    };
    PublicacionesProveedorPage.prototype.obtenerHistorialBeneficiario = function () {
        var _this = this;
        this.load = true;
        this.api.getHistorialBeneficiarios(this.global.id_usuario).subscribe(function (data) {
            // console.log(data);
            _this.info_historial = data;
            _this.infoHistorial();
            _this.load = false;
        }, function (err) {
            _this.load = false;
            _this.presentToast("Error en la conexion, intentalo mas tarde o revisa tu conexion");
        });
    };
    PublicacionesProveedorPage.prototype.obtenerHistorial = function () {
        var _this = this;
        this.load = true;
        this.api.getHistorialUser(this.global.id_usuario).subscribe(function (data) {
            // console.log(data);
            _this.info_historial = data;
            _this.infoHistorial();
        }, function (err) {
            _this.load = false;
            _this.presentToast("Error en la conexion, intentalo mas tarde o revisa tu conexion");
        });
    };
    PublicacionesProveedorPage.prototype.ionViewCanLeave = function () {
        var activeModal = this.app._modalPortal.getActive();
        if (activeModal) {
            activeModal.dismiss();
        }
    };
    PublicacionesProveedorPage.prototype.infoHistorial = function () {
        this.load = false;
        if (this.info_historial.length <= 0) {
            this.mostrarHistorial = true;
        }
        else {
            // console.log(this.info_historial);
            for (var i = 0; i < this.info_historial.length; i++) {
                var nombres = this.info_historial[i].nombres;
                var start = this.info_historial[i].start;
                start = __WEBPACK_IMPORTED_MODULE_5_moment__(start).format('DD-M-YYYY');
                var nombre = this.info_historial[i].servicio;
                var id_servicio = this.info_historial[i].servicios_idservicios;
                var calificada = this.info_historial[i].calificada;
                var id_historial = this.info_historial[i].id_historial;
                var direccion = this.info_historial[i].direccion;
                this.infoH.push({ nombres: nombres, start: start, nombre: nombre, id_servicio: id_servicio,
                    calificada: calificada, id_historial: id_historial, direccion: direccion });
            }
            // console.log(this.infoH);
        }
    };
    PublicacionesProveedorPage.prototype.calificar = function (h) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__calificacion_calificacion__["a" /* CalificacionPage */], { info: h, mascota: this.mascota });
    };
    PublicacionesProveedorPage.prototype.getProveedor = function () {
        var _this = this;
        this.load = true;
        var id = this.proveedor.id_provedor;
        this.api.getPublicacionesProveedor(id).subscribe(function (res) {
            _this.publicaciones = res;
            _this.load = false;
            _this.info();
            // console.log(this.publicaciones);
        }, function (err) {
            _this.load = false;
            _this.presentToast("Error en la conexion.");
            // console.log(err);
        });
    };
    PublicacionesProveedorPage.prototype.ver = function (info) {
        // console.log(info);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__modal_cita_user_modal_cita_user__["a" /* ModalCitaUserPage */], { info: info, calificacion: true });
        modal.present();
        modal.onDidDismiss(function (data) {
        });
    };
    PublicacionesProveedorPage.prototype.info = function () {
        // console.log(this.publicaciones);
        for (var i = 0; i < this.publicaciones.length; i++) {
            var categoria = this.publicaciones[i].categoria;
            var createdAt = this.publicaciones[i].createdAt;
            var createdupdate = this.publicaciones[i].createdupdate;
            var descripcion = this.publicaciones[i].descripcion;
            var descuento = this.publicaciones[i].descuento;
            var direccion = this.publicaciones[i].direccion;
            var duracion = this.publicaciones[i].duracion;
            var foto = this.publicaciones[i].foto;
            var fotos = this.publicaciones[i].fotos;
            var id_categoria = this.publicaciones[i].id_categoria;
            var id_provedores = this.publicaciones[i].id_provedores;
            var id_servicios = this.publicaciones[i].id_servicios;
            var locked = this.publicaciones[i].locked;
            var max_citas_ves = this.publicaciones[i].max_citas_ves;
            var municipio_id_municipio = this.publicaciones[i].municipio_id_municipio;
            var nombre = this.publicaciones[i].nombre;
            var precio = this.publicaciones[i].precio;
            var precio_cliente_prevenir = this.publicaciones[i].precio_cliente_prevenir;
            var promedio = this.publicaciones[i].promedio;
            var video = this.publicaciones[i].video;
            var coment = this.publicaciones[i].coment;
            var estrellasAmarillas = [];
            for (var j = 0; j < promedio; j++) {
                var id = "amarilla";
                estrellasAmarillas.push({ id: id });
            }
            var resultado = 5 - promedio;
            if (resultado >= 1) {
                var estrellasGrises = [];
                for (var h = 0; h < resultado; h++) {
                    var id = "gris";
                    estrellasGrises.push({ id: id });
                }
            }
            this.inf.push({ categoria: categoria, createdAt: createdAt, createdupdate: createdupdate, descripcion: descripcion, descuento: descuento,
                direccion: direccion, duracion: duracion, foto: foto, fotos: fotos, id_categoria: id_categoria, id_provedores: id_provedores, id_servicios: id_servicios,
                locked: locked, max_citas_ves: max_citas_ves, municipio_id_municipio: municipio_id_municipio, nombre: nombre, precio: precio,
                precio_cliente_prevenir: precio_cliente_prevenir, promedio: promedio, video: video, estrellasAmarillas: estrellasAmarillas, estrellasGrises: estrellasGrises, coment: coment });
        }
        // console.log(this.inf);
    };
    PublicacionesProveedorPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 5000
        });
        toast.present();
    };
    PublicacionesProveedorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-publicaciones-proveedor',template:/*ion-inline-start:"E:\ionic\appMovil\src\pages\publicaciones-proveedor\publicaciones-proveedor.html"*/'<!--\n\n  Generated template for the PublicacionesProveedorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title *ngIf="!historial" >Perfil provedor</ion-title>\n\n    <ion-title *ngIf="historial" >Historial de Citas</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n\n\n\n\n  <div *ngIf="!historial">   \n\n\n\n      <div class="img">\n\n          <img id="userImg" [src]="avatar" alt="nd" (click)="verImg(avatar)">\n\n        </div>\n\n\n\n        <h1 class="texto">{{proveedor.nombre}}</h1>\n\n\n\n  <div class="carta">\n\n    <ion-card>\n\n      <ion-card-header>\n\n       <strong>Información Provedor</strong> \n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <p><strong>Telefono : </strong> {{proveedor.telefono}}</p>\n\n        <p><strong>Dirección : </strong> {{proveedor.direccion}}</p>\n\n        <p><strong>Nit / Tarjeta profecional : </strong> {{proveedor.nit}}</p>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n\n\n  <button ion-button round block color="danger" (click)="goToMasPublicaciones()">Ver más publicaciones</button>\n\n\n\n      \n\n  <ion-card>\n\n    <ion-card-header>\n\n    <strong>Contactenos</strong>	\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-item>\n\n             <ion-avatar item-start>\n\n              <img src="{{avatar}}">\n\n             </ion-avatar>\n\n             <h2>{{proveedor.nombre}}</h2>\n\n             <p>Proveedor</p>		\n\n      </ion-item>\n\n      \n\n      <form [formGroup]="datos" (ngSubmit)="mensaje()"  novalidate>\n\n      <ion-item><ion-input class="inp" type="text"  readonly [value]="nombreUser"></ion-input></ion-item>\n\n      <ion-item><ion-input class="inp" type="email" readonly [value]="correoUser"></ion-input></ion-item>\n\n      <ion-item>\n\n        <ion-label>Asunto</ion-label>\n\n          <ion-select (ionChange)="asunto($event);">\n\n            <ion-option value="Consulta">Consulta</ion-option>\n\n            <ion-option value="Pregunta">Pregunta</ion-option>\n\n            <ion-option value="Comentario">Comentario</ion-option>\n\n          </ion-select>\n\n      </ion-item>\n\n      \n\n      <ion-textarea type="text" class="txt_area" formControlName="descripcion" rows="5"  placeholder="Escribe aqui tu mensaje"></ion-textarea>\n\n        <button ion-button icon-left color="danger" class="btnCitas" [disabled]="!this.datos.valid" round block>\n\n        <ion-icon name="mail"></ion-icon>\n\n          Mensaje\n\n      </button>\n\n    </form>\n\n  \n\n    </ion-card-content>\n\n  </ion-card>\n\n    \n\n\n\n  <!-- <h1 class="texto">Mas publicaciones de </h1>\n\n  <h2 class="texto">{{proveedor.nombre}}</h2>\n\n  <br>\n\n  <div class="carta" *ngFor="let servicio of inf">\n\n  <ion-card>\n\n    <ion-card-header><h2><strong>{{servicio.nombre}}</strong></h2></ion-card-header>\n\n    <ion-card-content>\n\n      \n\n              <p><strong>Descuento :</strong>  {{servicio.descuento}}%</p>\n\n              <p><strong>Precio a Particulares :</strong>  ${{servicio.precio}}</p>\n\n              <p><strong>Precio clientes Prevenir :</strong>  ${{servicio.precio_cliente_prevenir}}</p>\n\n\n\n       \n\n        <button ion-button icon-left (click)="goToService(servicio)">\n\n          <ion-icon name="eye"></ion-icon>\n\n          Ver</button>\n\n    </ion-card-content>\n\n   \n\n    </ion-card>\n\n   </div> -->\n\n\n\n  </div>\n\n\n\n  <div *ngIf="historial">\n\n    <h2 id="h2" *ngIf="mostrarHistorial">Aun no tienes un historial de citas</h2>\n\n    <ion-card *ngFor="let h of infoH">\n\n      <ion-card-header>\n\n        {{h.nombre}}\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n          <p><strong>Nombre :</strong> {{h.nombres}} </p>\n\n          <p><strong>Fecha :</strong> {{h.start}}</p>\n\n          \n\n          <br>\n\n\n\n        <div class="btn">\n\n            <button ion-button color="prevenir" (click)="ver(h)" icon-left *ngIf="h.calificada == 1">\n\n              <ion-icon name="eye"></ion-icon>\n\n              Ver</button>\n\n            <button ion-button icon-left color="energized" (click)="calificar(h)" *ngIf="h.calificada == 0">\n\n                <ion-icon name="star"></ion-icon>\n\n                Calificar</button>\n\n        </div>\n\n        \n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n\n\n</ion-content>\n\n\n\n<div class="loading" *ngIf="load">\n\n  <img src="/assets/imgs/pulso.gif" alt="">\n\n</div> \n\n'/*ion-inline-end:"E:\ionic\appMovil\src\pages\publicaciones-proveedor\publicaciones-proveedor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_3__app_global__["a" /* Global */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicApp */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_photo_viewer__["a" /* PhotoViewer */], __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], PublicacionesProveedorPage);
    return PublicacionesProveedorPage;
}());

//# sourceMappingURL=publicaciones-proveedor.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactenosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicio_servicio__ = __webpack_require__(38);
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
 * Generated class for the ContactenosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactenosPage = /** @class */ (function () {
    function ContactenosPage(navCtrl, navParams, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.inf = [];
        this.idProvedor = this.navParams.get('id');
        console.log(this.idProvedor);
        if (!this.idProvedor) {
            this.mostrar = false;
        }
        else {
            this.mostrar = true;
            this.getPublicaciones();
        }
    }
    ContactenosPage.prototype.goToService = function (servicio) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__servicio_servicio__["a" /* ServicioPage */], { servicio: servicio, masPublicaciones: true });
    };
    ContactenosPage.prototype.getPublicaciones = function () {
        var _this = this;
        this.api.getPublicacionesProveedor(this.idProvedor).subscribe(function (res) {
            _this.publicaciones = res;
            for (var i = 0; i < _this.publicaciones.length; i++) {
                var categoria = _this.publicaciones[i].categoria;
                var createdAt = _this.publicaciones[i].createdAt;
                var createdupdate = _this.publicaciones[i].createdupdate;
                var descripcion = _this.publicaciones[i].descripcion;
                var descuento = _this.publicaciones[i].descuento;
                var direccion = _this.publicaciones[i].direccion;
                var duracion = _this.publicaciones[i].duracion;
                var foto = _this.publicaciones[i].foto;
                var fotos = _this.publicaciones[i].fotos;
                var id_categoria = _this.publicaciones[i].id_categoria;
                var id_provedores = _this.publicaciones[i].id_provedores;
                var id_servicios = _this.publicaciones[i].id_servicios;
                var locked = _this.publicaciones[i].locked;
                var max_citas_ves = _this.publicaciones[i].max_citas_ves;
                var municipio_id_municipio = _this.publicaciones[i].municipio_id_municipio;
                var nombre = _this.publicaciones[i].nombre;
                var precio = _this.publicaciones[i].precio;
                var precio_cliente_prevenir = _this.publicaciones[i].precio_cliente_prevenir;
                var promedio = _this.publicaciones[i].promedio;
                var video = _this.publicaciones[i].video;
                var coment = _this.publicaciones[i].coment;
                var estrellasAmarillas = [];
                for (var j = 0; j < promedio; j++) {
                    var id = "amarilla";
                    estrellasAmarillas.push({ id: id });
                }
                var resultado = 5 - promedio;
                if (resultado >= 1) {
                    var estrellasGrises = [];
                    for (var h = 0; h < resultado; h++) {
                        var id = "gris";
                        estrellasGrises.push({ id: id });
                    }
                }
                _this.inf.push({ categoria: categoria, createdAt: createdAt, createdupdate: createdupdate, descripcion: descripcion, descuento: descuento,
                    direccion: direccion, duracion: duracion, foto: foto, fotos: fotos, id_categoria: id_categoria, id_provedores: id_provedores, id_servicios: id_servicios,
                    locked: locked, max_citas_ves: max_citas_ves, municipio_id_municipio: municipio_id_municipio, nombre: nombre, precio: precio,
                    precio_cliente_prevenir: precio_cliente_prevenir, promedio: promedio, video: video, estrellasAmarillas: estrellasAmarillas, estrellasGrises: estrellasGrises, coment: coment });
            }
            // console.log(this.publicaciones);
        }, function (err) {
            // console.log(err);
        });
    };
    ContactenosPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad ContactenosPage');
    };
    ContactenosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-contactenos',template:/*ion-inline-start:"E:\ionic\appMovil\src\pages\contactenos\contactenos.html"*/'<!--\n\n  Generated template for the ContactenosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n  	<!-- <button ion-button menuToggle>\n\n  		<ion-icon name="menu"></ion-icon>\n\n  	</button> -->\n\n    <ion-title *ngIf="!mostrar">Contactenos</ion-title>\n\n    <ion-title *ngIf="mostrar">Mas Publicaciones</ion-title>\n\n\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <div *ngIf="!mostrar">\n\n<br>\n\n<div class="logo">\n\n  <img src="/assets/imgs/logo.png" alt="">\n\n</div>\n\n  \n\n<ion-card margin-top>\n\n  <ion-card-header class="prevenir-title">\n\n    <h1 text-center >CONTACTENOS</h1>\n\n  </ion-card-header>\n\n\n\n  <ion-card-content>\n\n    <p margin-bottom>El objetivo de <strong>Grupo Prevenir Express SAS</strong>\n\n      es proveer soluciones integrales que faciliten y agilicen la toma de decisiones importantes para nuestros suscriptores, \n\n      en la adquisición de productos o servicios de las diferentes entidades.\n\n    </p>\n\n    <ion-list>\n\n      <ion-item no-padding>\n\n        <ion-icon name="locate"></ion-icon>&nbsp;\n\n        carrera 29 No. 17-89  <br> segundo piso  <br> diagonal camara de comercio. <br>\n\n        San Juan de Pasto Nariño, Colombia\n\n      </ion-item>\n\n      <ion-item no-padding>\n\n        <ion-icon name="phone-portrait"></ion-icon>&nbsp;\n\n        Teléfono: <a href="tel:+57-3104351937">+57 3104351937</a>\n\n      </ion-item>\n\n\n\n      <ion-item no-padding>\n\n        <ion-icon name="mail"></ion-icon>&nbsp;\n\n        Correo<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="mailto:clientes@prevenirexpress.co">clientes@prevenirexpress.com</a>      \n\n      </ion-item>\n\n    </ion-list>\n\n    \n\n  </ion-card-content>\n\n</ion-card>\n\n  <!-- <ion-card > -->\n\n    <!-- <ion-card-content>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi consequuntur dolorem sapiente laboriosam enim nobis omnis eaque, nam vitae, quibusdam architecto rem quisquam eos iste, deleniti, laudantium doloribus iusto sit? Nobis amet harum quo eius culpa dolore officiis iusto veniam consectetur illum vitae dolorem architecto, possimus ratione eaque, odio beatae.      <br>\n\n      <br>\n\n    <p icon-left><ion-icon name="locate">  asdas</ion-icon></p>  \n\n    <p icon-left><ion-icon name="call">  asdas</ion-icon></p>  \n\n    <p icon-left><ion-icon name="mail">  asdas</ion-icon></p>\n\n    </ion-card-content> -->\n\n\n\n    <!-- <p margin-bottom>El objetivo de <strong>Grupo Prevenir Express SAS</strong>\n\n      es proveer soluciones integrales que faciliten y agilicen la toma de decisiones importantes para nuestros suscriptores, \n\n      en la adquisición de productos o servicios de las diferentes entidades.\n\n    </p>\n\n    <ion-list>\n\n      <ion-item no-padding>\n\n        <ion-icon name="locate"></ion-icon>&nbsp;\n\n        Centro Comercial Los Andes <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Local 214 - San Juan de Pasto\n\n      </ion-item>\n\n      <ion-item no-padding>\n\n        <ion-icon name="phone-portrait"></ion-icon>&nbsp;\n\n        Teléfono: <a href="call:+573104351937">+57 3104351937</a>\n\n      </ion-item>\n\n      <ion-item no-padding>\n\n        <ion-icon name="mail"></ion-icon>&nbsp;\n\n        Correo<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="mailto:clientes@prevenirexpress.co">clientes@prevenirexpress.com</a>      \n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-card> -->\n\n\n\n  <ion-fab >\n\n      <button ion-fab icon-center >\n\n        <ion-icon name="logo-whatsapp"></ion-icon>\n\n      </button>\n\n    \n\n    </ion-fab>\n\n  \n\n  </div>\n\n\n\n\n\n  <!-- ---------------------------------------- Mas publicaciones ------------------------------------- -->\n\n\n\n  <div *ngIf="mostrar">\n\n\n\n\n\n  <!-- <h1 class="texto">Mas publicaciones </h1>\n\n  <h2 class="texto"></h2> -->\n\n  <br>\n\n  <div class="carta" *ngFor="let servicio of inf">\n\n  <ion-card>\n\n    <ion-card-header><h2><strong>{{servicio.nombre}}</strong></h2></ion-card-header>\n\n    <ion-card-content>\n\n      \n\n              <p><strong>Descuento :</strong>  {{servicio.descuento}}%</p>\n\n              <p><strong>Precio a Particulares :</strong>  ${{servicio.precio}}</p>\n\n              <p><strong>Precio clientes Prevenir :</strong>  ${{servicio.precio_cliente_prevenir}}</p>\n\n\n\n       \n\n        <button ion-button icon-left (click)="goToService(servicio)">\n\n          <ion-icon name="eye"></ion-icon>\n\n          Ver</button>\n\n    </ion-card-content>\n\n   \n\n    </ion-card>\n\n   </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\ionic\appMovil\src\pages\contactenos\contactenos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], ContactenosPage);
    return ContactenosPage;
}());

//# sourceMappingURL=contactenos.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_global__ = __webpack_require__(10);
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
 * Generated class for the TerminosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TerminosPage = /** @class */ (function () {
    function TerminosPage(navCtrl, navParams, api, global, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.global = global;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.infoComents = [];
        this.visual = false;
        this.comentarios = this.navParams.get('info');
        console.log(this.comentarios);
        if (this.comentarios) {
            this.getComentariosMedico();
        }
    }
    TerminosPage.prototype.getComentariosMedico = function () {
        var _this = this;
        this.infoComents = [];
        this.comentArea = "";
        // this.loading = this.loadingCtrl.create({
        //   spinner: 'hide',
        //   content: "Espera un momento<br>estamos cargando comentarios... ",
        // });
        // this.loading.present();
        this.load = true;
        this.api.getComentarioMedico(this.comentarios.id_servicios, this.comentarios.categoria_idcategoria).
            subscribe(function (data) {
            // this.loading.dismiss();
            _this.load = false;
            // console.log(data);
            _this.coments = data;
            if (_this.coments.length <= 0) {
                _this.visual = true;
            }
            else {
                _this.visual = false;
            }
            _this.informacionComentarios();
        }, function (err) {
            // this.loading.dismiss();
            _this.load = false;
            _this.presentToast("Error en la conexión, intentalo más tarde o revisa tu conexión.");
        });
        // this.api.getComentarioMedico(this.co)
    };
    TerminosPage.prototype.informacionComentarios = function () {
        for (var i = 0; i < this.coments.length; i++) {
            var comentario = this.coments[i].comentario;
            var id_comentarios = this.coments[i].id_comentarios;
            var avatar = this.coments[i].avatar;
            var usu = this.coments[i].usu;
            this.infoComents.push({ comentario: comentario, id_comentarios: id_comentarios, avatar: avatar, usu: usu });
        }
        console.log(this.infoComents);
    };
    TerminosPage.prototype.responder = function (info) {
        var _this = this;
        // this.loading = this.loadingCtrl.create({
        //   spinner: 'hide',
        //   content: "Espera un momento<br>estamos enviando su respuesta... ",
        // });
        // this.loading.present();
        this.load = true;
        var infoComent = { cate: this.comentarios.categoria_idcategoria, coment: this.comentArea, id: info.id_comentarios };
        console.log(infoComent);
        this.api.respuestaComentarioMedico(infoComent).then(function (res) {
            console.log(res);
            // this.loading.dismiss();
            _this.load = false;
            if (res === true) {
                _this.presentToast("Respuesta exitosa.");
                _this.getComentariosMedico();
            }
            else {
                _this.presentToast("Error al enviar su respuesta.");
            }
        }, function (err) {
            // this.loading.dismiss();
            _this.load = false;
            _this.presentToast("Error en la conexión, intentalo más tarde o revisa tu conexión.");
        });
    };
    TerminosPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad TerminosPage');
    };
    TerminosPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    TerminosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-terminos',template:/*ion-inline-start:"E:\ionic\appMovil\src\pages\terminos\terminos.html"*/'<!--\n\n  Generated template for the TerminosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n  	<!-- <button ion-button menuToggle>\n\n  		<ion-icon name="menu"></ion-icon>\n\n  	</button> -->\n\n    <ion-title  *ngIf="!comentarios">Terminos y condiciones</ion-title>\n\n    <ion-title  *ngIf="comentarios">{{comentarios.nombre}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n<div *ngIf="!comentarios">\n\n\n\n  <ion-card>\n\n    <ion-card-header color="prevenir">\n\n      CONDICIONES DE USO\n\n    </ion-card-header>\n\n    <ion-card-content text-justify>\n\n      Para redimir el su PREVI-descuentos debe estar inscrito y sus datos diligenciados al 100%,\n\n      El PREVI-descuentos deberá ser redimido a nuestros terceros para confirmar día fecha y hora de su requerimiento.\n\n      No tenemos límite de PREVI-descuentos por persona. El PREVI-descuentos se enviará vía mail, whatsApp, mensaje de texto o en su defecto se le llamara personalmente para conocimiento del solicitante.\n\n      Para preguntas o reclamos (PQRS) se debe ingresar a www.prevenirexpress.com en espacio PQRS o al correo clientes@prevenirexpress.com\n\n      Se debe enviar un e-mail ha solicitando su requerimiento o comunicarse a los teléfonos (2) 7209417 o wpp 310 4351937, 3172645522, o al correo clientes@prevenirexpress.com\n\n      * Los descuentos los aplica la entidad jurídica o natural de acuerdo a sus condiciones y restricciones\n\n      *Aplican condiciones y restricciones a todos los PREVI-descuentos.\n\n      GRUPO PREVENIR EXPRESS Sas. Es un enlace entre el usuario y el tercero para que apliquen los descuentos del servicio y NO se hace responsable de incumplimientos dineros malos procedimientos pero estará muy atento a las sugerencia quejas y reclamos para dar un buen servicio.   \n\n      \n\n      <br>\n\n      \n\n      <strong> Para mas información consulta aqui.</strong>\n\n      <a href="http://citas.prevenirexpress.com/#/terminos-y-condiciones"> Leer terminos y condiciones </a>\n\n\n\n\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n</div>\n\n\n\n\n\n<div *ngIf="comentarios">\n\n\n\n  <div class="visual" *ngIf="visual">\n\n      <h1 >No tienes comentarios por responder</h1>\n\n  </div>\n\n  \n\n\n\n  <div *ngFor="let c of infoComents">\n\n      <ion-item >\n\n          <ion-avatar item-start>\n\n           <img src="{{c.avatar}}">\n\n          </ion-avatar>\n\n          <h2>{{c.comentario}}</h2>		\n\n          <h3>{{c.usu}}</h3>		 	\n\n   </ion-item>\n\n\n\n   <ion-item>\n\n      <ion-textarea class="txt_area" placeholder="Escribe aqui tu respuesta ..." maxlength="150" [(ngModel)]="comentArea"></ion-textarea>\n\n  </ion-item>\n\n  \n\n   <div class="btn" >\n\n     <button ion-button round (click)="responder(c)">Responder</button>\n\n   </div>\n\n  </div>\n\n   \n\n\n\n\n\n</div>\n\n\n\n</ion-content>\n\n\n\n<div class="loading" *ngIf="load">\n\n  <img src="/assets/imgs/pulso.gif" alt="">\n\n</div>\n\n\n\n<!--  <ion-card>\n\n    <ion-card-header>\n\n      TRATAMIENTOS DE DATOS  PRIVACIDAD Y CONFIDENCIALIDAD\n\n    </ion-card-header>\n\n    <ion-card-content text-justify>\n\n      Tratamiento de Datos Personales\n\n      GRUPO PREVENIR EXPRESS sas. (En adelante, " GRUPO PREVENIR "), identificada con el NIT 900690163-6, ubicada en la Calle 18 No 24 – 29 local 214, Pasto Nariño, con número de teléfonos (2) 7209417 o wpp 310 4351937, 3172645522, o correo clientes@prevenirexpress.com  , es el titular del tratamiento de los datos personales de las personas naturales usuarias del sitio http://www.prevenirexpress.com. Debido a la actividad comercial que desarrolla GP, y dando cumplimiento al Decreto 1377 de 2013, les informamos a los titulares de los datos personales que GP lleva a cabo los siguientes tipos de Tratamiento sobre sus datos personales.\n\n\n\n      1. Protegiéndolo: Sus derechos frente al Tratamiento de sus datos personales.\n\n      GP está comprometido con proteger su privacidad y garantizar sus derechos al habeas data para que Usted pueda conocer, actualizar y rectificar los datos personales que administre GRUPO PREVENIR.  Esta Política de Tratamiento de Datos es referente al uso que GRUPO PREVENIR ESPRESS sas. Le dará a los datos personales que reposen en sus registros de conformidad con lo establecido en la ley 1581 de 2012 y el Decreto 1377 de 2013.\n\n      1.1 FINALIDAD DE LA BASE DE DATOS. La base de datos tiene como finalidades principales informarle sobre los servicios que prestamos en primera persona y/o con terceros, para fines comerciales, administrativos y publicitarios y contacto frente a los titulares de los mismos.\n\n      1.2 DATOS PERSONALES. La información objeto de tratamiento por parte de GRUPO PREVENIR EXPRESS sas. En adelante en este documento “Datos personales”, es aquella que suministran los Titulares, cuando acceden a sus bienes y/o servicios, o con ocasión de los mismos, tales como: nombre, apellidos, identificación, edad, sexo, teléfono, dirección física y electrónica, país, ciudad y demás datos necesarios que le sean solicitados en el proceso de registro, los cuales en ningún caso serán de carácter sensible en los términos de ley.\n\n      GRUPO PREVENIR ESPRESS sas. Se reserva el derecho de modificar esta política sin previo aviso. Los cambios realizados no afectarán las obligaciones ni seguridad exigida por la normatividad vigente. Los cambios realizados podrán ser anunciados a los usuarios a través de la página web y/o a través de correo electrónico, sin embargo usted debe comprobar nuestro sitio web frecuentemente para ver los cambios recientes. Dado el carácter vinculante de los términos y condiciones, es responsabilidad única del Usuario revisar los términos vigentes en cada momento. La presente política se publica el septiembre de 2016.\n\n\n\n      2 INFORMACIÓN CONTENIDA EN EL PORTAL WEB\n\n      2.1 Propiedad del contenido del Portal – Copyright\n\n      El portal www.prevenirexpress.com (en adelante el “Portal”) es de propiedad de GRUPO PREVENIR EXPRESS sas. (En adelante, “GRUPO PREVENIR”). Y su App (En adelante “GRUPO PREVENIR”) El acceso, participación y uso del Portal está regido por los Términos y Condiciones y las Políticas de Tratamiento de la Información que se incluyen a continuación y se entienden conocidos y aceptados por el usuario del Portal. Se entenderá como usuario aquella persona que acceda, participe o use el Portal (en adelante, el “Usuario”) y/o  el Tercero quien es la entidad Jurídica o Natural quien presta sus actividades comerciales a través de estos portales ofertando sus productos o servicios con un descuento y trato Preferencial al Usuario (En adelante el “Tercero”), ello implica su adhesión plena e incondicional a estos términos y condiciones y las Políticas de Tratamiento de la Información aquí contempladas. Si en cualquier momento el Usuario y/o el tercero no estuviera de acuerdo total o parcialmente con estos Términos y Condiciones y las Políticas de Tratamiento de la Información, deberá abstenerse inmediatamente de usar este Portal en cualquiera de sus partes o secciones, en caso contrario cualquier uso de los mismos presumirá que el Usuario acepta sin reserva los Términos y Condiciones de uso y las Políticas de Tratamiento de la Información bajo su total responsabilidad.\n\n      Esta página de Internet y su App  son de propiedad del GRUPO PREVENIR EXPRESS sas. Quien es titular de los derechos de autor y de propiedad intelectual del contenido textual, auditivo y gráfico de este Portal y ostenta los derechos de explotación de éstos a través de acuerdos con terceros, quienes conceden el uso de los mismos. La aceptación de los presentes Términos y Condiciones y las Políticas de Tratamiento de la Información no implica en ningún caso la adquisición por parte del Usuario y/o el tercero de los derechos de propiedad intelectual o industrial relacionados con el Portal o con su contenido. GRUPO PREVENIR no concede licencia o autorización de uso alguna sobre el Portal y su contenido, por lo tanto está prohibida su reproducción total o parcial, su traducción, inclusión, transmisión, almacenamiento o acceso a través de medios analógicos, digitales o de cualquier otro sistema o tecnología creada o por crearse, sin autorización previa y escrita de GRUPO PREVENIR. Todo nombre, marca, logo, texto, gráfico, dibujo, fotografía, video, sonido y en general todo contenido de este Portal está protegido por derechos de propiedad intelectual así como por cualquier otro derecho de propiedad conforme lo permitan las leyes aplicables. La titularidad de tales derechos recae en cabeza de GRUPO PREVENIR  o de terceros que por mandato legal o autorización expresa han conferido a GRUPO PREVENIR el derecho al uso o explotación de los mismos.\n\n      Teniendo en cuenta la posibilidad del Usuario de incluir en el Portal: videos, fotos y/ o imágenes y/o textos y/u otro tipo de material de titularidad del Usuario o bien por éste de titularidad de un tercero, se deja expresamente establecido que al incluirlo en el Portal se considerará que el Usuario o el tercero concede a GRUPO PREVENIR en forma permanente, una licencia de uso gratuita, No exclusiva, para la reproducción, adaptación, compilación, almacenamiento y distribución de los contenidos por él suministrados a través de esta página de Internet y/o su App sin derecho a percibir contraprestación, remuneración, retribución o reclamo posterior alguno, cualquiera sea su tipo o índole. GRUPO PREVENIR podrá a su vez hacer cualquier tipo de uso de dicho material, en virtud de la licencia de uso así concedida. En tal sentido el Usuario reconoce que GRUPO PREVENIR podrá realizar la reproducción y sincronización del contenido publicado, en cualquier formato, conocido o por conocerse. Así mismo, la comunicación pública o distribución de dicho contenido se podrá realizar a través de cualquier medio existente o por desarrollarse, incluyendo, pero sin limitarse ha: Internet, descargas móviles, descargas desde la App del GRUPO PREVENIR, televisión, abierta o cerrada, Home Video y DVD. Consecuentemente, GRUPO PREVENIR queda en plena libertad de reproducir, distribuir, fijar, comunicar públicamente, transformar, comercializar y realizar cualquier negociación plena y sin ninguna limitación en relación con los derechos patrimoniales sobre cualquier contenido cargado o publicado por algún Usuario del Portal.\n\n      2.2 El Usuario garantiza que los contenidos suministrados son de su autoría, que no está violando derechos de autor de terceras personas y que mantendrá indemne a GRUPO PREVENIR y a sus sublicenciatarios frente a cualquier reclamación que se presente con ocasión de su uso. Así mismo, el Usuario se obliga a no cargar ningún contenido que contenga material cuya utilización por GRUPO PREVENIR le pueda generar algún tipo de perjuicio a éste último.\n\n      2.3 El acceso a el Portal por parte del Usuario tiene carácter libre; no obstante algunos de los servicios y contenidos ofrecidos por GRUPO PREVENIR o por terceros a través del Portal tales como: Señal en vivo, videos y audios por demanda para entretenimiento, humor, cultura, actualidad, opinión, entre otros, pueden encontrarse sujetos a pago, así como al registro y autenticación del Usuario y/o terceros en la forma que se determine en los correspondientes Términos y Condiciones. Queda prohibida la contratación de productos o servicios a través del Portal por parte de menores de edad, debiendo éstos obtener debidamente y con anterioridad, el consentimiento de sus padres, tutores o representantes legales, los cuales serán considerados como responsables de los actos que lleven a cabo los menores a su cargo, conforme a la normatividad vigente.\n\n      2.3 Por el hecho de ingresar al Portal y para garantizar el buen y adecuado uso del mismo, el Usuario reconoce en cabeza de GRUPO PREVENIR:\n\n      (i) El derecho de actualizar, modificar o eliminar en cualquier tiempo y por cualquier razón sin previo aviso, tanto la información contenida en éste portal Web, así como estos términos y condiciones, pudiendo incluso limitar o no permitir el acceso a dicha información;\n\n      (ii) El derecho de negar el registro a cualquier persona, en cualquier momento y por cualquier razón.\n\n      (iii) El derecho de incluir o no en el Portal el material recibido de los usuarios a su criterio. En el caso de incluirlo, podrá mantener en los Portales dicho material por el lapso que considere pertinente o modificarlo.\n\n      (iv) Remover, sin que sea obligatorio, contenidos que a juicio de GRUPO PREVENIR sean ilegales, ofensivos, difamatorios o que de cualquier otra forma violen éstos Términos y Condiciones. Así mismo, podrán ser retirados los contenidos que violen derechos intelectuales, ya sean de GRUPO PREVENIR o de un tercero, a solicitud de éste.\n\n      (v) Utilizar la información personal y/o contenidos suministrados por los Usuarios y/o terceos de acuerdo con los Términos y Condiciones del Portal y las Políticas de Tratamiento de la Información.\n\n      3. Cookies\n\n      El usuario del Sitio Web de GRUPO PREVENIR y su App conoce y acepta que GRUPO PREVENIR podrá utilizar Cookies. Las Cookies son pequeños archivos que se instalan en el disco rígido, con una duración limitada en el tiempo que ayudan a personalizar los servicios (las \'Cookies\'). También ofrecemos ciertas funcionalidades que sólo están disponibles mediante el empleo de Cookies. Las Cookies se utilizan con el fin de conocer los intereses, el comportamiento y la demografía de quienes visitan o son visitantes de nuestro Sitio web o la App y de esa forma, comprender mejor sus necesidades e intereses y darles un mejor servicio o proveerle información relacionada. También usaremos la información obtenida por intermedio de las Cookies para analizar las páginas navegadas por el visitante o usuario, las búsquedas realizadas, mejorar nuestras iniciativas comerciales y promocionales, mostrar publicidad o promociones, banners de interés, noticias sobre GRUPO PREVENIR, perfeccionar nuestra oferta de contenidos y artículos, personalizar dichos contenidos, pr|esentación y servicios. \n\n\n\n      Adicionalmente GRUPO PREVENIR utiliza las Cookies para que el usuario no tenga que introducir su clave tan frecuentemente durante una sesión de navegación, también para contabilidad y para corroborar las registraciones, la actividad del usuario y otros conceptos y acuerdos comerciales, siempre teniendo como objetivo de la instalación de las Cookies, el beneficio del usuario que la recibe, y no será usado con otros fines ajenos a GRUPO PREVENIR. Se establece que la instalación, permanencia y existencia de las Cookies en el computador del usuario o del visitante depende de su exclusiva voluntad y puede ser eliminada de su computador cuando así lo desee. Para saber cómo quitar las Cookies del sistema es necesario revisar la sección Ayuda (Help) del navegador. También, se pueden encontrar Cookies u otros sistemas similares instalados por terceros en ciertas páginas de nuestro Sitio Web. GRUPO PREVENIR no controla el uso de Cookies por terceros.\n\n\n\n       4. E-mails\n\n      Nuestra Política, respecto del envío de emails, tiene finalidades principales de nuestro negocio:\n\n      E-mails con recordatorios de los servicios que ofrecemos (especialmente de las campañas que aún no haya utilizado o no haya utilizado en un tiempo considerable). En cada uno de los e-mails siempre ofreceremos la posibilidad de dejar de recibir e-mails en el futuro, enviándonos un E-mail.\n\n\n\n      5. Seguridad y almacenamiento\n\n      Empleamos diversas técnicas de seguridad para proteger datos de accesos no autorizados. Sin embargo, es necesario tener en cuenta que la seguridad perfecta no existe en Internet. Por ello, GRUPO PREVENIR no se hace responsable por interceptaciones ilegales o violación de sus sistemas o base de datos por parte de personas no autorizadas. GRUPO PREVENIR, tampoco se hace responsable por la indebida utilización de la información obtenida por esos medios.\n\n\n\n      6. Transferencias Comerciales o Cambios Corporativos\n\n      GRUPO PREVENIR y sus empresas afiliadas se reservan el derecho a divulgar, transferir o a licenciar parte o toda la información relacionada con el Sitio, incluyendo Información Personal: a un propietario posterior, co-propietario u operador de uno o más de los Sitios o cualquier porción u operación relacionada con una parte de uno o más Sitios, o en conexión con una integración corporativa, consolidación o reestructuración, la venta de sustancialmente todas nuestras acciones y/o activos, u otros cambios corporativos, incluyendo, sin limitación, durante el curso de cualquier proceso de debida diligencia.\n\n\n\n      7. Registro y Participación del Usuario.\n\n      Para realizar determinadas actividades dentro del Portal y/o hacer uso de algunos servicios de los mismos, el Usuario y/o el tercero deberán registrarse directamente en el Portal o App que GRUPO PREVENIR ha desarrollado Y almacenará los datos personales del Usuario en su base de datos de acuerdo con lo establecido en las Políticas de Tratamiento de la Información\n\n      Por el hecho de ingresar al Portal y para garantizar el buen y adecuado uso del mismo, el Usuario deberá cumplir con lo siguiente: (i) Observar el Código de Ética, los Términos y Condiciones y la las Políticas de Tratamiento de la Información, así como cualquier otra condición establecida en el Portal; (ii) Ser responsable por cualquier actividad que se lleve a cabo bajo su registro; (iv)Ser responsable de la seguridad de su contraseña en el uso de la App ; (v) No abusar, acosar, amenazar o intimidar a otros usuarios de los Portales asociados y/o relacionados con el portal ya sea a través de los chats, foros, blogs o cualquier otro espacio de participación; (vi) No usar ésta página como medio para desarrollar actividades ilegales o no autorizadas tanto en Colombia, como en cualquier otro país; (vii) Ser el único responsable por su conducta y por el contenido de textos, gráficos, fotos, videos o cualquier otro tipo de información de la cual haga uso o incluya en el Portal; (viii) Utilizar el Portal única y exclusivamente para uso personal. Cualquier uso para beneficio corporativo, colectivo o comercial está prohibido; (ix) Abstenerse de enviar correo electrónico no deseado (SPAM) a otros Usuarios de esta web, así como también le está prohibido transmitir virus o cualquier código de naturaleza destructiva.; (xi) Abstenerse de intentar acceder y en su caso, utilizar las cuentas de de otros Usuarios y modificar o manipular mensajes ; (xii) No hacerse pasar por otra persona o entidad, realizar manifestaciones falsas o proporcionar información falsa acerca de él, su edad o su relación con cualquier persona o entidad; (xiii) No cargar, publicar, transmitir, compartir, almacenar o facilitar contenido que constituya, incite o proporcione instrucciones para cometer delitos, que infrinja los derechos de un tercero, dé lugar a responsabilidades o vulnere cualquier ley de ámbito local, estatal, nacional o internacional; (xiiii) Abstenerse de cargar, publicar, transmitir, compartir, almacenar o facilitar contenido que, a juicio exclusivo de GRUPO PREVENIR, sea cuestionable o que restrinja o impida el uso adecuado del Portal por otras personas, o que pueda exponer a GRUPO PREVENIR o a sus Usuarios a daños o responsabilidades de cualquier tipo. Mientras en el Portal estén prohibidas estas conductas, GRUPO PREVENIR no será responsable por su cumplimiento y el Usuario será responsable por todo concepto.\n\n\n\n      7.1 El Portal, contiene links o vínculos a web sites de terceros que remiten a otras páginas en la web.\n\n      Los links a otras páginas de Internet, distintas de aquellas de las cuales GRUPO PREVENIR es propietaria, son ofrecidos como un servicio a los usuarios. GRUPO PREVENIR no estuvo involucrada en su producción y por lo tanto no es responsable por su contenido. Si el Usuario decide acceder a través de los links o vínculos a los web sites de terceros, lo hace bajo su propio riesgo. Al accesar a los enlaces o hipervínculos que remiten a sitios y portales de terceros en Internet el Usuario abandona el Portal y en consecuencia se somete a las normas de uso y de privacidad de los sitios y portales que entre a visitar, GRUPO PREVENIR no comprueba ni verifica la exactitud, adecuación o exhaustividad de tales sitios de terceros, aplicaciones, software o contenido de terceros, y no se hace responsable de los sitios de terceros a los que se acceda a través de nuestro Portal ni de las aplicaciones, software o contenido de terceros que se publiquen en los Portales. Por lo tanto GRUPO PREVENIR no es responsable por la disponibilidad y contenido de dichos sitios y el Usuario deberá dirigirse directamente al administrador de dicho sitio y usar los mismos de acuerdo con los términos de uso respectivos que regule cada uno de ellos. La inclusión del enlace o hipervínculo en el Portal no implica que exista relación alguna entre GRUPO PREVENIR y el operador o propietario de los mismos.\n\n      7.2 Servicios Ofrecidos por terceros.\n\n      GRUPO PREVENIR no garantiza la licitud, calidad, fiabilidad y utilidad de los servicios prestados por terceros a través del Portal o sobre los que GRUPO PREVENIR actúe como mero cauce publicitario. Consecuentemente, GRUPO PREVENIR ni sus filiales o asociadas, serán responsables de los daños y perjuicios de toda naturaleza causados por los servicios prestados por terceros a través de los Portales y en particular, a título enunciativo pero no limitativo, por: i) infracción de derechos de propiedad intelectual e industrial; ii) incumplimiento de la ley, la moral o el orden público; iii) publicidad ilícita, engañosa o desleal; iv) vulneración al derecho a la honra, intimidad e imagen propia o de terceros; v) falta de exactitud o veracidad de los contenidos; vi) transmisión de virus o malware; vii) el incumplimiento por cualquier causa de las obligaciones contraídas por terceros y por tanto, no podrá ser considerado responsable de los mismos.\n\n      7.3. El registro al Portal podrá darse por terminado por el Usuario en cualquier momento enviando un e-mail a: clientes@prevenirexpress.com o eliminándolo directamente de su sites ingresando a sus datos y en la parte de abajo dice eliminar registro “el usuario puede eliminar e inscribirse cuantas veces lo vea necesario asi como eliminar y descargar la aplicación las veces que el desee”.\n\n      7.4. El Usuario y/o el tercero deberá cumplir los Términos y Condiciones del Portal, así como toda condición adicional que se establezca en el Portal.\n\n      7.5  GRUPO PREVENIR no garantiza la disponibilidad y continuidad del funcionamiento del Portal. Cuando ello sea razonablemente posible, GRUPO PREVENIR no advertirá previamente las interrupciones en el funcionamiento del Portal. GRUPO PREVENIR tampoco garantiza la utilidad del Portal para la realización de alguna actividad en particular, ni su infalibilidad y, en particular, aunque no de modo exclusivo, que los Usuarios y/o terceros puedan efectivamente utilizar el Portal, acceder a las distintas páginas web o secciones que forman el Portal y su App.\n\n      7.5. GRUPO PREVENIR excluye cualquier responsabilidad por los daños y perjuicios de toda naturaleza que puedan deberse a la falta de disponibilidad o de continuidad del funcionamiento del Portal, a la defraudación de la utilidad que los Usuarios y/o terceros hubieren podido atribuir al Portal y a los servicios, a la falibilidad del Portal, y en particular, aunque no de modo exclusivo, a las fallas en el acceso a las distintas páginas web o secciones del Portal.\n\n      7.6  GRUPO PREVENIR no controla ni garantiza, y por lo tanto no se hace responsable por, la ausencia de virus ni de otros elementos en los contenidos del Portal que puedan producir alteraciones en el sistema informático (software y hardware) del Usuario o en los documentos electrónicos y ficheros almacenados en el sistema informático del Usuario.\n\n      7.7. Es interés de GRUPO PREVENIR ser una fuente de información con contenido de entretenimiento, de actualidad y de interés para los Usuarios y/o terceros. No obstante, no puede garantizar que dicho contenido esté exento de errores o imprecisiones, en cuyo caso podrán solicitarse las aclaraciones o correcciones que sean del caso GRUPO PREVENIR tampoco puede garantizar que el contenido del Portal sea suficiente y/o útil para el Usuario y/o el tercero.\n\n      7.8. GRUPO PREVENIR no garantiza y por lo tanto no es responsable de, la licitud, fiabilidad, exactitud, exhaustividad, actualidad y utilidad de las columnas de opinión, y/o las opiniones o contenidos de los Usuarios incluidos en los Portales.\n\n      7.9. Limitación de la responsabilidad; En ningún caso será GRUPO PREVENIR, sus directivos, empleados o agentes, responsables frente al Usuario u otros terceros por cualquier tipo de daño, incluyendo pérdidas de beneficios o datos derivados de la utilización del Portal o sus servicios, las aplicaciones de la plataforma, el contenido del Portal u otros materiales a los que se haya accedido a través del Portal o descargados de éste, aun cuando GRUPO PREVENIR sea consciente o haya sido advertido de la posibilidad de dichos daños.\n\n      7.10 Estos Términos y Condiciones han sido dispuestos de conformidad con las leyes colombianas. Cualquier acción o reclamación deberá hacerse ante los Tribunales en Colombia.\n\n\n\n\n\n      8. Finalidades y uso que hacemos de la información.\n\n      Para hacer más efectivas y seguras las transacciones que se lleven a cabo en PREVI-descuento. Para la administración del Sitio Web en el que el usuario entra para explorar las ofertas y promociones proporcionadas por GRUPO PREVENIR. Para cumplir a cabalidad con los servicios celebrados con los clientes y usuarios, de acuerdo con sus finalidades para brindar las ofertas, promociones, servicios o productos de GRUPO PREVENIR o de terceros. Para complementar la información y, en general, adelantar las actividades necesarias para gestionar las solicitudes, quejas y reclamos presentadas por los clientes o usuarios de GRUPO PREVENIR,  por terceros y direccionarlas a las áreas responsables de emitir las respuestas correspondientes. Enviar información y ofertas comerciales de productos de GRUPO PREVENIR, así como realizar actividades de mercadeo. Esto, como finalidad principal en el tratamiento de datos personales por parte de GRUPO PREVENIR y objeto social, consistentes en la difusión efectiva de las ofertas que realiza, dado su carácter temporal. La personalización de clientes con el fin de hacerlos partícipes de los diferentes programas de beneficios e informaciones promocionales. Elaborar estudios de mercado, estadísticas, encuestas, análisis de tendencias del mercado, encuestas de satisfacción sobre los servicios prestados por GRUPO PREVENIR. Para la transmisión de datos personales a terceros con los cuales se hayan celebrado contratos con este objeto, para fines comerciales, administrativos y/o operativos. Gestionar toda la información necesaria para el cumplimiento de las obligaciones tributarias y de registros comerciales, corporativos y contables de GRUPO PREVENIR. Para identificar a los usuarios cuando ingresen al Sitio Web. Para ofrecer a los clientes servicios y funcionalidades que se adecuan a los gustos e intereses personalizados. Para proceder a la facturación y cobro de los servicios de compra directa. Para enviar información o mensajes sobre los nuevos productos y/o servicios, mostrar la publicidad o promoción del momento, banners, noticias sobre GRUPO PREVENIR y toda otra información que creamos conveniente. Compartir los datos personales con empresas de servicios o empresas de “outsourcing” que contribuyan a mejorar o a facilitar las operaciones a través de GRUPO PREVENIR, dentro de las que se incluyen, medios de pago, seguros o intermediarios de la gestión de pagos. GRUPO PREVENIR velará porque las políticas de los terceros tengan estándares similares a los de la presente Política, mediante la firma de acuerdos, convenios y/o contratos. Para suministrar los datos personales de los titulares a las entidades que intervengan en la resolución de conflictos y que tengan competencia para ello.\n\n\n\n      8.1 Información de identificación personal (IIP) como nombres y apellidos, teléfono, dirección y otro tipo de información que le permita a GRUPO PREVENIR identificar a los usuarios. También se solicitará información personal para comprar PREVI-descuentos, a saber: (i) nombres y apellidos; (ii) dirección; (iii) dirección de correo electrónico; (iv) fecha de nacimiento; (v) número telefónico; y (vi) datos relacionados con el medio de pago.\n\n      8.2 Dirección IP (Internet Protocol) con el fin de diagnosticar problemas o inconvenientes con nuestro servidor, así como para administrar su Sitio Web. Una dirección de IP es un número que se le asigna a su computadora cuando usa internet. Su dirección de IP también es utilizada para ayudar a identificarle dentro de una sesión particular y para recolectar información demográfica general. Correo electrónico para la utilización del Sitio Web, la vinculación a GRUPO PREVENIR y la compra de PREVI-descuentos.\n\n      9.  Promociones, concursos y eventos\n\n      Las promociones, concursos, sorteos y eventos que se divulguen en el Portal estarán sujetas a las reglas y condiciones que en cada oportunidad se establezca por parte de GRUPO PREVENIR, siendo necesario como requisito mínimo para acceder a tales oportunidades o beneficios comerciales, que el Usuario se encuentre debidamente registrado como usuario de la App o de los Portales asociados. GRUPO PREVENIR no se responsabiliza por cualquier tipo de daño -incluyendo moral, físico, material, ni de cualquier otra índole- que pudiera invocarse como relacionado con la recepción por parte del Usuario registrado de cualquier tipo de obsequios y/o regalos remitidos por GRUPO PREVENIR o portales asociados. Así mismo, GRUPO PREVENIR no será responsable por las consecuencias que pudieren causar el ingreso al Portal y/o la asistencia en cualquier evento y/o reunión divulgado por medio de los Portales Asociados o de terceros. El Usuario reconoce que GRUPO PREVENIR no asume responsabilidad alguna que corresponda a un anunciante y/o el proveedor de los servicios que se ofrezcan en el Portal y/o en la App ni en los Portales asociados, siendo entendido que GRUPO PREVENIR no se responsabiliza por la calidad ni la entrega de los productos o prestación de servicios que se publican en este sitio. Por tal motivo no será responsable por cualquier problema, queja o reclamo de los usuarios por cuestiones atinentes a dichos premios, productos y/o servicios. Cada promoción, concurso o evento que se promueva o realice a través del Portal, estará sujeto a las reglas que para el mismo se indiquen, por lo que la participación en los mismos deberá atenerse a lo que en cada sitio web y caso se señale.\n\n      10. Foros, Blogs, Chats, Comentarios y otros espacios de participación\n\n      El Usuario reconoce que su participación en cualquier foro, chat, comentario, blog, red social y/o cualquier otro espacio de participación del Portal, será bajo su exclusiva responsabilidad, por lo cual deberá ser mayor de edad, y que de igual forma, las opiniones y/o acciones y/o comportamiento de otros Usuarios en tales espacios son responsabilidad exclusiva de quienes las emiten o realizan, por lo cual GRUPO PREVENIR no se hace responsable ni garantiza la calidad o idoneidad de tales conductas u opiniones, ni por las consecuencias que ellas pudieren acarrear a favor y/ o en contra de otros Usuarios o de terceros. Particularmente los usuarios deberán tener en cuenta las recomendaciones que se incluyan en el Portal encaminadas a propiciar una adecuada convivencia y participación en tales espacios de participación. El diseño, manejo, finalidad y características de los diferentes espacios de participación del Portal es discrecional de GRUPO PREVENIR, quien podrá en cualquier momento cambiarlos y/o eliminarlos, y/o determinar la cantidad de participantes admitidos en cada uno de ellos.\n\n\n\n      11. Guía de principios y recomendaciones para una sana participación en las actividades y servicios de los Portales.\n\n      La presente guía debe ser leída en forma detenida y periódica por parte de los Usuarios interesados en participar en las actividades y servicios del Portal. La participación en redes sociales, foros, chats, comentarios y otros espacios similares de participación dentro del Portal (en adelante los “Espacios”) implican la aceptación y conocimiento por parte del Usuario de los Términos y Condiciones del Portal, así como el compromiso irrevocable de cada Usuario de respetar dichos Términos y Condiciones, siendo entendido y aceptado que eximen a GRUPO PREVENIR y mantendrán indemne a GRUPO PREVENIR de cualquier responsabilidad que se derive del incumplimiento a tal compromiso, lo cual incluye daños y perjuicios causados a otros Usuarios y/o cualquier tercero afectado. Si un Usuario no está conforme o de acuerdo con los presentes Términos y Condiciones del Portal, GRUPO PREVENIR le sugiere no participar en él y/o en los Espacios. El Usuario entiende que a través del Portal se invita y promueve una activa y libre participación, comunicación y expresión por parte de los Usuarios, hasta donde la Constitución y la ley lo permiten. De igual forma el Usuario entiende y acepta que es de todo interés de GRUPO PREVENIR y de la comunidad en general, que el Portal sean un medio amigable, pacífico y sano de convivencia y participación, por lo que tanto GRUPO PREVENIR como la comunidad de Usuarios de los espacios esperan de cada Usuario el comportamiento y conducta que permita lograr tal propósito, a lo cual se compromete cada Usuario con el solo acceso al Portal y/o la App. Cada Usuario acepta y faculta expresa e irrevocablemente a GRUPO PREVENIR para revisar los comentarios u opiniones vertidos en los Espacios y/o suprimir los que no se adecuen al Código de Ética plasmado en estos Términos y Condiciones del Portal, así como a interrumpir la comunicación en caso que lo considere conveniente por tales motivos. De igual forma GRUPO PREVENIR se reserva el derecho de ejercer tal facultad cuando así lo estime conveniente, a su discreción, sin que por tal razón sea factible imputar responsabilidad alguna a GRUPO PREVENIR por el no ejercicio de la facultad y/o por la existencia, ingreso, participación de Usuarios no deseables y/o de comentarios u opiniones que no atienden estas recomendaciones. Teniendo en cuenta que los comentarios y opiniones vertidas en las redes sociales, foros, comentarios y Blogs no provendrán de GRUPO PREVENIR sino de Usuarios y terceros absolutamente ajenos, GRUPO PREVENIR no se responsabiliza por los mismos, así como tampoco presta conformidad ni discrepa con ellos, siendo entendido que emanan exclusivamente de su autor, y quedan bajo su completa responsabilidad. GRUPO PREVENIR entiende que cada uno de los comentarios, mensajes, opiniones, información o similares que se viertan en los Espacios son de autoría exclusiva de quienes los ingresen. Asimismo, queda absolutamente prohibido ingresar comentarios, mensajes, opiniones, información, o similares, de contenido difamatorio, obsceno, abusivo, racista, discriminatorio a raza, color, religión, posición geográfica etc.  Contrario a la buena moral y las buenas costumbres, discriminatorio, ofensivo, obsceno, intimidatorio, calumnioso, inapropiado, ilegal, violatorio de derechos de terceros de cualquier índole, incluidos los derechos de los menores de edad, que cause daños y/o perjuicios, o impida o limite el derecho propio o ajeno a usar los Espacios y demás capítulos del sitio, constituya un delito o apología a un delito y/o incite a la violencia y/o a la comisión de delitos. Tampoco está permitido publicitar productos y/o servicios de cualquier tipo dentro de los Espacios, ni utilizar o enviar virus, o desviarse de los temas propuestos en los foros. El supuesto de que este tipo de comentarios, mensajes, opiniones, información, o similares, ingrese en los Espacios, los Usuarios, aceptan en forma expresa e incondicionada que GRUPO PREVENIR , sus empleados, proveedores, o anunciantes, NO serán responsables en modo alguno por las consecuencias de cualquier tipo y alcance que los mismos pudieran generar, frente a cualquier tercero, ya sea en virtud de su inclusión dentro de los Espacios o por cualquier causa relacionada directa o indirectamente con el uso de los mismos. Asimismo, GRUPO PREVENIR, sus empleados, proveedores o anunciantes, NO serán responsables de modo alguno en el supuesto que los comentarios, información, mensajes, opiniones, o similares, se vean afectados, eliminados, alterados, o modificados de alguna manera. Los Usuarios se abstendrán de iniciar cualquier acción o reclamación contra GRUPO PREVENIR relacionada con, o derivada de, la información, contenido, opinión o comentario proveniente de otro Usuario y/o de un tercero ajeno a GRUPO PREVENIR, siendo aceptado por los Usuarios que tales acciones o reclamaciones solo podrán ser iniciadas contra su directo responsable, para lo cual deberán promover las acciones legales pertinentes, bajo los procedimientos legalmente establecidos para el efecto. GP podrá abstenerse de suministrar la información disponible sobre el presunto infractor cuando a su juicio tal información esté protegida por la confidencialidad ofrecida a los Usuarios, en cuyo caso, el suministro estará condicionado a la solicitud de autoridad competente. GRUPO PREVENIR, a su sólo juicio, se reserva el derecho de excluir de los Espacios, a aquellos Usuarios que no se atengan a las presentes reglas o que no respeten los principios básicos de sana convivencia y el respeto. Así como también de interrumpir y/o eliminar y/o excluir, total o parcialmente, en todos los casos, todo aquel mensaje, opinión, información o similares que no se adecuen o resulten violatorios de las reglas y/o principios antes indicados. GRUPO PREVENIR asume que cada usuario se obliga a cumplir y respetar las presentes reglas y que asume todo tipo de consecuencias que su indebido uso pudiere ocasionar. Ello tanto frente a GP como frente a cualquier tercero. Los Usuarios deberán denunciar cualquier violación a los Términos y Condiciones del Portal por parte de otros Usuarios, de la que tenga conocimiento, para lo cual remitirá un e–mail a clientes@prevenirexpress.com para que GRUPO PREVENIR tome las medidas que estén a su alcance respecto del Portal.\n\n\n\n      12. CÓDIGO DE ÉTICA\n\n      Guía de comportamiento en espacios de participación en el Portal. Al ingresar en los espacios de participación de GP en su sitio web oficial, el Usuario se compromete a respetar y cumplir las siguientes normas:\n\n      (i)Interactuar en forma respetuosa y cortés. Las críticas y opiniones son bienvenidas siempre y cuando se hagan con total respeto; (ii) No publicar contenido que atente contra la integridad de otras personas, incluidos los menores de edad; (iii) No abusar, acosar, amenazar o intimidar a otros usuarios ya sea a través de los comentarios en los Espacios, chats, foros, blogs o cualquier otro espacio de participación; (iv) Usar lenguaje adecuado y cortés y de ninguna manera usar lenguaje ofensivo; (v) Ser responsable por cualquier actividad que se lleve a cabo bajo su registro; (vi) No usar los Espacios de participación de las páginas de redes sociales oficiales de GP como medio para desarrollar actividades ilegales o no autorizadas tanto en Colombia, como en cualquier otro país; (vii) No usar los espacios de GRUPO PREVENIR como medio para desarrollar actividades comerciales SIN AUTORIZACION; (viii) No usar los espacios de participación de las redes sociales de GP para difundir spam (se llama spam o mensaje basura a los mensajes no solicitados, no deseados o de remitente no conocido, habitualmente de tipo publicitario, generalmente enviados en grandes cantidades que perjudican de alguna o varias maneras al receptor); (ix) No usar los espacios de participación de las redes sociales de GRUPO PREVENIR para crear, almacenar, o transmitir material que infrinja los derechos de autor, la marca o demás derechos de propiedad intelectual; (x) No usar la información contenida en las redes sociales de GRUPO PREVENIR para revender, modificar o redistribuir cualquiera de los servicios proporcionados por GRUPO PREVENIR, nuestros contratistas o licenciatarios, sin nuestro consentimiento previo y por escrito; (xi) No publicar o difundir contenidos o propaganda de carácter racista, xenófoba, pornográfica, de apología del terrorismo o atentatoria contra los derechos humanos;\n\n      13. Territorio\n\n      La actividad será válida en todo el territorio nacional (Colombia).\n\n      14. Descarga aplicación móvil\n\n      Podrán participar todos los usuarios con dispositivos móviles y su descarga será gratuita.\n\n      14.1. Descargar la aplicación móvil “PREVENIR EXPRESS” totalmente gratis y registrarse con Facebook o ingresar Nombre, Correo electrónico y clave para poder acceder a la App.\n\n      15. Publicidad\n\n      EL GRUPO PREVENIR EXPRESS sas. Será responsable de la publicidad de la Actividad, la cual puede realizarse en toda la variedad de formatos publicitarios existentes y por existir así como en todos los medios que determine el Organizador a su propia discreción en contracción directa y por escrito de lo contrario no será responsable de otras publicaciones.\n\n      16. Servicio al cliente\n\n      Para atender cualquier duda, consulta, queja, pregunta, reclamación o solicitud de cualquier tipo de información relacionada con sus datos personales, particularmente, para ejercer sus derechos a conocer, actualizar, rectificar y suprimir el dato o revocar la autorización otorgada, GRUPO PREVENIR ha dispuesto a clientes@prevenirexpress.com, como encargado.\n\n      16.1. el deber de actualización de datos por parte del titular El titular de los datos tiene la obligación de mantener actualizados los datos personales que haya suministrado a GRUPO PREVENIR. Hasta el máximo permitido por la Ley, GRUPO PREVENIR no se hace responsable por la falta de actualización de datos personales por parte del titular de los mismos.\n\n      16.2. CONSULTAS \n\n      GRUPO PREVENIR dispone de mecanismos para que el titular, sus causahabientes, sus representantes y/o apoderados, aquellos que por estipulación a favor de otro o para otro estén legitimados, o los representantes de menores de edad titulares, formulen CONSULTAS respecto de cuáles son los datos personales del titular que reposan en las bases de datos de GRUPO PREVENIR. Estos mecanismos podrán ser físicos como a través del correo electrónico de pqrs@prevenirexpress.com o través de las llamadas telefónicas que se realicen a los call centers encargados de recepcionar las peticiones, quejas y reclamos. Cualquiera que sea el medio, GRUPO PREVENIR guardará prueba de la consulta y su respuesta. \n\n      16.3 Antes de proceder, el responsable de atender la consulta verificará: \n\n      La identidad del titular del dato personal o su representante. Para ello, exigirá la cédula de ciudadanía o documento de identificación original del titular y los poderes especiales o generales según sea el caso. \n\n      16.4 La autorización o contrato con terceros que dieron origen al Tratamiento del dato personal del titular, por parte de GRUPO PREVENIR  GP. \n\n      Si el solicitante tuviere capacidad para formular la consulta, el responsable de atenderla recopilará toda la información sobre el titular que esté contenida en el registro individual de esa persona o que esté vinculada con la identificación del titular dentro de las bases de datos de GRUPO PREVENIR  GP. \n\n      16.5 El responsable de atender la consulta dará respuesta al solicitante siempre y cuando éste último tuviere derecho a ello por ser el titular del dato personal, su causahabiente, su representante y/o apoderado, aquellos que por estipulación a favor de otro o para otro estén legitimados, o el responsable legal en el caso de menores de edad. Esta respuesta será enviada dentro de los diez (10) días hábiles contados a partir de la fecha en la que la solicitud fue recibida por GP. Esta respuesta será obligatoria aún en los casos en que se considere que el solicitante no tiene capacidad para realizar la consulta, en cuyo caso así se le informará al solicitante y se dará opción de que demuestre el interés y capacidad aportando documentación adicional. \n\n      En caso de que la solicitud no pueda ser atendida a los diez (10) hábiles, se contactará al solicitante para comunicarle los motivos por los cuales el estado de su solicitud se encuentra en trámite y señalando la fecha en la que se atenderá la consulta, la cual en ningún caso podrá superar los cinco (5) días hábiles siguientes al vencimiento del primer término. Para ello se utilizará el mismo medio o uno similar a aquel mediante el cual fue presentada la consulta. \n\n      La respuesta definitiva a todas las solicitudes no puede tardar más de quince (15) días hábiles desde la fecha en la que la solicitud inicial fue recibida por GP. \n\n\n\n\n\n\n\n      17. RECLAMOS \n\n      GRUPO PREVENIR dispondrá de mecanismos para que el titular, sus causahabientes, sus representantes y/o apoderados, aquellos que por estipulación a favor de otro o para otro estén legitimados, o los representantes de menores de edad titulares, puedan formular RECLAMOS respecto de (i) datos personales Tratados por GP que deben ser objeto de corrección, actualización o supresión, o (ii) el presunto incumplimiento de los deberes legales de GRUPO PREVENIR. Estos mecanismos podrán ser físicos como electrónicos, tales como como correo electrónico. Cualquiera que sea el medio, GRUPO PREVENIR GP deberá guardar prueba de la consulta y su respuesta. \n\n      17.1 El RECLAMO deberá ser presentado por el titular, sus causahabientes; las personas facultadas para representar a niños, niñas o adolecentes, cuando estos sean titulares; sus representantes y/o apoderado; aquellos que por estipulación a favor de otro o para otro estén legitimados, o sus representantes, \n\n\n\n      17.2 Deberá dirigirse a legal@prevenirexpress.com Deberá contener una descripción de los hechos que dan lugar al reclamo y el objetivo perseguido (actualización, corrección o supresión, o cumplimiento de deberes).Deberá indicar la dirección y datos de contacto e identificación del reclamante. Deberá acompañarse por toda la documentación que el reclamante quiera hacer valer.\n\n\n\n      17.3 Antes de proceder, el responsable de atender el reclamo verificará:\n\n      La identidad del titular del dato personal o su representante. Para ello, puede exigir la cédula de ciudadanía o documento de identificación original del Titular, y los poderes especiales o generales según sea el caso. La autorización o contrato con terceros que dieron origen al Tratamiento, por parte de la GP, del dato personal del titular. Si el reclamo o la documentación adicional están incompletos, GP requerirá al reclamante por una sola vez dentro de los cinco (5) días siguientes a la recepción del reclamo para que subsane las fallas. Si el reclamante no presenta la documentación e información requerida dentro de los dos (2) meses siguientes a la fecha del reclamo inicial, se entenderá que ha desistido del reclamo. Si por cualquier hecho la persona que recibe el reclamo al interior de GP no es competente para resolverlo, dará traslado a legal@prevenirexpress.com dentro de los dos (2) días hábiles siguientes a haber recibido el reclamo, e informará de dicha remisión al reclamante.\n\n      Una vez recibido el reclamo con la documentación completa, se incluirá en la base de datos de GP donde reposen los datos del titular sujetos a reclamo una leyenda que diga “reclamo en trámite” y el motivo del mismo, en un término no mayor a dos (2) días hábiles. Esta leyenda deberá mantenerse hasta que el reclamo sea decidido. \n\n\n\n      17.3 El término máximo para atender el reclamo será de quince (15) días hábiles contados a partir del día siguiente a la fecha de su recibo. Cuando no fuere posible atender el reclamo dentro de dicho término, se informará al interesado los motivos de la demora y la fecha en que se atenderá su reclamo, la cual en ningún caso podrá superar los ocho (8) días hábiles siguientes al vencimiento del primer término.\n\n\n\n\n\n      18. Vigencia\n\n      Esta Política empezará a regir desde la fecha (septiembre 2016). Los datos personales que sean almacenados, utilizados o transmitidos permanecerán en la base de datos de GRUPO PREVENIR  GP, durante el tiempo que sea necesario para las finalidades mencionadas en esta Política, para las cuales fueron recolectados.\n\n      18.2 El usuario puede presentar ante la Superintendencia de Industria y Comercio quejas por infracciones a la Ley 1581 de 2012 y al Decreto 1377 de 2013.Revocar su autorización y/o solicitar la supresión de sus datos personales de las bases de datos de GRUPO PREVENIR  GP, siempre y cuando no exista un deber legal (cuando el usuario ha realizado compras directas existe una obligación legal y tributaria de dejar el registro de las compras realizadas, por lo cual esta información debe permanecer en el registro de ventas de GRUPO PREVENIR  GP, lo anterior con fundamento al artículo 60 C.C) ó una obligación de carácter contractual en cabeza del titular con GRUPO PREVENIR GP, en virtud de la cual el titular no tenga el derecho de solicitar la supresión de sus datos personales o revocar su autorización para el Tratamiento de los mismos. Si no hay un deber legal o contractual y GRUPO PREVENIR GP no ha suprimido los datos personales del titular de sus bases de datos o no ha revocado la autorización de quien está legitimado para revocarla dentro del término legal para ello, el titular podrá acudir a la Superintendencia de Industria y Comercio para que exija la revocación de la autorización y/o la supresión de los datos personales. Solicitar acceso y acceder en forma gratuita a sus datos personales que hayan sido objeto de Tratamiento.\n\n      Esta Política garantiza que cualquier información que nos provea será mantenida de manera privada y segura. Para dar fe de esto, en este documento proveemos los detalles de qué información recabamos y de qué manera la utilizamos. Nunca recolectaremos información sin su consentimiento explícito, previo e informado\n\n      18.3 Quien diligencia el formulario de registro acepta y autoriza el tratamiento de sus datos personales y que los mismos se incorporen a las bases de datos de GRUPO PREVENIR GP, sus filiales o subsidiarias de acuerdo con lo estipulado en las Políticas de Tratamiento de la Información.\n\n      19. Aceptación de los Términos y Condiciones\n\n      La participación en esta Actividad, mediante el registro en la App de GRUPO PREVENIR  GP y específicamente la recepción de los PREVI-descuentos  significará la plena aceptación, de parte de los Participantes, de estos Términos y Condiciones, la cual se formalizará en la declaración de aceptación.\n\n      Estos Términos y Condiciones se encontrarán disponibles para consulta en el sitio web www.prevenirexpress.com\n\n      20. LEY APLICABLE\n\n      Estos términos y condiciones, así como las Políticas de Privacidad y Manejo e Información de uso se regirán e interpretarán de acuerdo con las leyes de la república de Colombia.\n\n    </ion-card-content>\n\n  </ion-card> -->\n\n'/*ion-inline-end:"E:\ionic\appMovil\src\pages\terminos\terminos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_3__app_global__["a" /* Global */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], TerminosPage);
    return TerminosPage;
}());

//# sourceMappingURL=terminos.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoPublicacionesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__publicar_servicio_publicar_servicio__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_global__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servicio_servicio__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__medicos_medicos__ = __webpack_require__(53);
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
 * Generated class for the ListadoPublicacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListadoPublicacionesPage = /** @class */ (function () {
    function ListadoPublicacionesPage(navCtrl, navParams, api, global, alertCtrl, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.global = global;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.inf = [];
        this.url = global.apiUrl;
    }
    ListadoPublicacionesPage.prototype.ionViewDidLoad = function () {
    };
    ListadoPublicacionesPage.prototype.ionViewWillEnter = function () {
        this.inf = [];
        this.getPublicaciones();
        // this.imgs={};
    };
    ListadoPublicacionesPage.prototype.getPublicaciones = function () {
        var _this = this;
        // this.loading = this.loadingCtrl.create({
        //   spinner: 'hide',
        //   content: "Espera un momento<br>estamos cargando información... ",
        // });
        // this.loading.present();
        this.load = true;
        var id = this.global.id_usuario;
        this.api.getPublicacionesProveedor(id).subscribe(function (res) {
            // console.log(res);
            // this.loading.dismiss();
            _this.load = false;
            var a = res[0].vacio;
            if (a === true) {
                _this.inf = [];
                _this.mostrar = true;
            }
            else {
                _this.mostrar = false;
                _this.publicaciones = res;
                console.log(_this.publicaciones);
                for (var i = 0; i < _this.publicaciones.length; i++) {
                    // let categoria = this.publicaciones[i].categoria;
                    // let duracion = this.publicaciones[i].duracion;
                    // let descuento = this.publicaciones[i].descuento;
                    // let nombre = this.publicaciones[i].nombre;
                    // let precio = this.publicaciones[i].precio;
                    // let descripcion = this.publicaciones[i].descripcion;
                    // let fot = this.publicaciones[i];
                    // let id_servicios = this.publicaciones[i].id_servicios;
                    // let id_provedores = this.publicaciones[i].id_provedores;
                    // let precio_cliente_prevenir = this.publicaciones[i].precio_cliente_prevenir;
                    // let video = this.publicaciones[i].video;
                    // let fotos = this.publicaciones[i].foto;
                    // fot = fot.fotos[0];
                    // fot = this.url+fot.ruta;
                    // console.log(fot);
                    var categoria = _this.publicaciones[i].categoria;
                    var createdAt = _this.publicaciones[i].createdAt;
                    var createdupdate = _this.publicaciones[i].createdupdate;
                    var descripcion = _this.publicaciones[i].descripcion;
                    var descuento = _this.publicaciones[i].descuento;
                    var direccion = _this.publicaciones[i].direccion;
                    var duracion = _this.publicaciones[i].duracion;
                    var foto = _this.publicaciones[i].foto;
                    var fotos = _this.publicaciones[i].fotos;
                    var id_categoria = _this.publicaciones[i].id_categoria;
                    var id_provedores = _this.publicaciones[i].id_provedores;
                    var id_servicios = _this.publicaciones[i].id_servicios;
                    var locked = _this.publicaciones[i].locked;
                    var max_citas_ves = _this.publicaciones[i].max_citas_ves;
                    var municipio_id_municipio = _this.publicaciones[i].municipio_id_municipio;
                    var nombre = _this.publicaciones[i].nombre;
                    var precio = _this.publicaciones[i].precio;
                    var precio_cliente_prevenir = _this.publicaciones[i].precio_cliente_prevenir;
                    var promedio = _this.publicaciones[i].promedio;
                    var video = _this.publicaciones[i].video;
                    var medico_id = _this.publicaciones[i].medico_id;
                    var coment = _this.publicaciones[i].coment;
                    var estrellasAmarillas = [];
                    for (var j = 0; j < promedio; j++) {
                        var id_1 = "amarilla";
                        estrellasAmarillas.push({ id: id_1 });
                    }
                    var resultado = 5 - promedio;
                    if (resultado >= 1) {
                        var estrellasGrises = [];
                        for (var h = 0; h < resultado; h++) {
                            var id_2 = "gris";
                            estrellasGrises.push({ id: id_2 });
                        }
                    }
                    _this.inf.push({ categoria: categoria, createdAt: createdAt, createdupdate: createdupdate, descripcion: descripcion, descuento: descuento,
                        direccion: direccion, duracion: duracion, foto: foto, fotos: fotos, id_categoria: id_categoria, id_provedores: id_provedores, id_servicios: id_servicios,
                        locked: locked, max_citas_ves: max_citas_ves, municipio_id_municipio: municipio_id_municipio, nombre: nombre, precio: precio,
                        precio_cliente_prevenir: precio_cliente_prevenir, promedio: promedio, video: video, estrellasAmarillas: estrellasAmarillas, estrellasGrises: estrellasGrises, coment: coment, medico_id: medico_id });
                }
                // console.log(this.inf);
            }
        }, function (err) {
            // this.loading.dismiss();
            _this.load = false;
            _this.presentToast("Error en la conexión intentalo más tarde");
            // console.log(err);
        });
    };
    ListadoPublicacionesPage.prototype.updateService = function (id) {
        // console.log(id);
        var _this = this;
        // this.loading = this.loadingCtrl.create({
        //   spinner: 'hide',
        //   content: "Espera un momento<br>estamos cargando información... ",
        // });
        // this.loading.present();
        this.load = true;
        this.api.getInfoEditar(id).subscribe(function (data) {
            // this.loading.dismiss();
            _this.load = false;
            console.log(data);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__publicar_servicio_publicar_servicio__["a" /* PublicarServicioPage */], { info: data });
        }, function (err) {
            // this.loading.dismiss();
            _this.load = false;
            _this.presentToast("Error en la conexión, intentalo más tarde.");
        });
    };
    ListadoPublicacionesPage.prototype.viewService = function (servicio) {
        console.log(servicio);
        // let categoria = servicio.categoria;
        // let duracion = servicio.duracion;
        // let descuento = servicio.descuento;
        // let nombre = servicio.nombre;
        // let precio = servicio.precio;
        // let descripcion = servicio.descripcion;
        // let fot = servicio;
        // let id_servicios = servicio.id_servicios;
        // let id_provedores = servicio.id_provedores;
        // let precio_cliente_prevenir = servicio.precio_cliente_prevenir;
        // let video = servicio.video;
        // let fotos = servicio.foto;
        // fot = fot.foto[0];
        // fot = this.url+fot.ruta;
        // let info =[];
        // info.push({categoria:categoria,descuento:descuento,nombre:nombre,descripcion:descripcion,foto:fot,
        //                 id_servicio:id_servicios,id_provedores:id_provedores, duracion:duracion,precio:precio,
        //                 precio_cliente_prevenir:precio_cliente_prevenir, video:video, fotos:fotos });
        // let a = info;
        // a = a[0];
        this.inf = [];
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__servicio_servicio__["a" /* ServicioPage */], { servicio: servicio });
    };
    ListadoPublicacionesPage.prototype.presentConfirm = function (id) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmación',
            message: '¿Esta seguro que desea eliminar esta publciación?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        // console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Eliminar',
                    handler: function () {
                        // this.loading = this.loadingCtrl.create({
                        //   spinner: 'hide',
                        //   content: "Espera un momento<br>estamos procesando tu solicitud... ",
                        // });
                        // this.loading.present();
                        _this.load = true;
                        _this.api.dltService(id).then(function (data) {
                            _this.res = data;
                            // console.log("AQUIIIIIIII")
                            // console.log(this.res);
                            _this.inf = [];
                            if (_this.res === false) {
                                _this.presentToast("No se puede eliminar el servicio, existen citas agendadas");
                            }
                            else {
                                _this.presentToast("La publicación se ha eliminado exitosamente");
                            }
                            // this.loading.dismiss();
                            _this.load = false;
                            _this.getPublicaciones();
                        }, function (err) {
                            // console.log(err);
                            // this.loading.dismiss();
                            _this.load = false;
                            _this.presentToast("Error al eliminar intentalo mas tarde");
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    ListadoPublicacionesPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 4000
        });
        toast.present();
    };
    ListadoPublicacionesPage.prototype.crearPublicacion = function () {
        var _this = this;
        this.load = true;
        this.inf = [];
        this.api.getMedicosProvedor(this.global.id_usuario).subscribe(function (data) {
            _this.load = false;
            console.log(data);
            _this.infMedicos = data;
            if (_this.infMedicos.length <= 0) {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Confirmar',
                    message: 'Aún no tienes un medico agregado, ¿Deseas agregar uno?',
                    buttons: [
                        {
                            text: 'Cancelar',
                            role: 'cancel',
                            handler: function () {
                            }
                        },
                        {
                            text: 'Aceptar',
                            handler: function () {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__medicos_medicos__["a" /* MedicosPage */]);
                            }
                        }
                    ]
                });
                alert_1.present();
            }
            else {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__publicar_servicio_publicar_servicio__["a" /* PublicarServicioPage */], { medicos: _this.infMedicos });
            }
        }, function (err) {
            _this.load = false;
            _this.presentToast("Error en la conexión, intentalo más tarde o revisa tu conexión");
        });
    };
    ListadoPublicacionesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-listado-publicaciones',template:/*ion-inline-start:"E:\ionic\appMovil\src\pages\listado-publicaciones\listado-publicaciones.html"*/'<!--\n\n  Generated template for the ListadoPublicacionesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Mis publicaciones</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <button ion-button icon-left color="secondary" (click)="crearPublicacion()" round block>\n\n        <ion-icon name="create"></ion-icon>\n\n          Crear publicación\n\n      </button>\n\n\n\n      <h4 class="h4" *ngIf="mostrar">No tienes publicaciones, crea una</h4>\n\n\n\n\n\n  <ion-list>\n\n    <div class="carta" *ngFor="let pub of inf">\n\n     \n\n   <ion-card>\n\n    <ion-card-header>\n\n     <img [src]="url+pub.foto" alt="">\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <p><strong>Nombre : </strong>{{pub.nombre}}</p>\n\n      <p><strong>Categoria : </strong>{{pub.categoria}}</p>\n\n      <p><strong>Descuento : </strong> {{pub.descuento}}%</p>\n\n      <p><strong>Descripción : </strong> {{pub.descripcion}}</p>\n\n      <br>\n\n      <div>\n\n          <button ion-button small color="prevenir"><ion-icon name="eye" (click)="viewService(pub)"></ion-icon></button>\n\n          <button ion-button small color="energized"><ion-icon name="create" (click)="updateService(pub.id_servicios)"></ion-icon></button>\n\n          <button ion-button small color="danger"><ion-icon name="trash" (click)="presentConfirm(pub.id_servicios)"></ion-icon></button>\n\n      </div>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  </div>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n\n\n<div class="loading" *ngIf="load">\n\n  <img src="/assets/imgs/pulso.gif" alt="">\n\n</div> \n\n'/*ion-inline-end:"E:\ionic\appMovil\src\pages\listado-publicaciones\listado-publicaciones.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_4__app_global__["a" /* Global */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], ListadoPublicacionesPage);
    return ListadoPublicacionesPage;
}());

//# sourceMappingURL=listado-publicaciones.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlancoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_welcome__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_global__ = __webpack_require__(10);
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
 * Generated class for the BlancoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BlancoPage = /** @class */ (function () {
    function BlancoPage(navCtrl, navParams, api, global, toastCtrl, alertCtrl, loadingCtrl, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.global = global;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.menu = menu;
        this.locked = this.navParams.get('locked');
        console.log(this.locked);
        if (!this.locked) {
            this.estaLogeado();
        }
    }
    BlancoPage.prototype.estaLogeado = function () {
        // this.loading = this.loadingCtrl.create({
        //   spinner: 'hide',
        //   content: "Espera un momento... ",
        //   duration: 3000
        // });
        // this.loading.present();
        this.load = true;
        this.menu.enable(false);
        var mostrar = localStorage.getItem("token");
        // console.log("Aqui toyyy"+mostrar);
        if (mostrar != null) {
            // this.loading.dismiss();
            this.load = false;
            this.menu.enable(true);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }
        else {
            // this.loading.dismiss();
            this.load = false;
            this.menu.enable(true);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__welcome_welcome__["a" /* WelcomePage */]);
        }
    };
    BlancoPage.prototype.confirmar = function () {
        // this.loading = this.loadingCtrl.create({
        //   spinner: 'hide',
        //   content: "Espera un momento<br> Estamos confirmando tu cuenta... ",
        // });
        // this.loading.present();
        var _this = this;
        this.load = true;
        this.menu.enable(false);
        var info = { salt: this.codigo, id: this.global.id_usuario };
        this.api.confirmacionCuenta(info).then(function (res) {
            if (res === true) {
                // this.loading.dismiss();
                _this.load = false;
                _this.menu.enable(true);
                var alert_1 = _this.alertCtrl.create({
                    title: 'Bienvenid@',
                    subTitle: 'Bienvenido al grupo PREVENIR EXPRESS.',
                    buttons: ['Gracias']
                });
                alert_1.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
            }
            else {
                // this.loading.dismiss();
                _this.load = false;
                _this.menu.enable(true);
                _this.presentToast("Codigo incorrecto");
            }
        }, function (err) {
            _this.load = false;
            _this.menu.enable(true);
            console.log(err);
        });
    };
    BlancoPage.prototype.reenviar = function () {
        // this.loading = this.loadingCtrl.create({
        //   spinner: 'hide',
        //   content: "Espera un momento<br> Estamos generando un codigo nuevo... ",
        // });
        // this.loading.present();
        var _this = this;
        this.load = true;
        this.menu.enable(false);
        this.api.getReenviarCodigoCorreo(this.global.id_usuario).subscribe(function (data) {
            // this.loading.dismiss();
            _this.load = false;
            _this.menu.enable(true);
            if (data === true) {
                _this.presentToast("Código reenviado con exito, Por favor revisa tu correo.");
                //   let alert = this.alertCtrl.create({
                //     title: 'Reenvio codigo',
                //     subTitle: 'Código reenviado con exito, Por favor revisa tu correo.',
                //     buttons: ['Confirmar']
                //   });
                //   alert.present()
            }
        }, function (err) {
            // this.loading.dismiss();
            _this.load = false;
            _this.menu.enable(true);
            _this.presentToast("Error en la conexión, intentalo más tarde o revisa tu conexión.");
        });
    };
    BlancoPage.prototype.ionViewDidLoad = function () {
    };
    BlancoPage.prototype.goToRegistro = function () {
        localStorage.clear();
        this.global.infoPerfil = {};
        this.global.login = false;
        this.global.foto = null;
        this.global.nombre = null;
        this.global.id_usuario = null;
        this.global.medico = false;
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__welcome_welcome__["a" /* WelcomePage */]);
    };
    BlancoPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    BlancoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-blanco',template:/*ion-inline-start:"E:\ionic\appMovil\src\pages\blanco\blanco.html"*/'<ion-content padding>\n\n\n\n    <div *ngIf="locked">\n\n\n\n        <div class="logo_welcome">\n\n                <img src="/assets/imgs/logo-grande-negro.png" alt="">\n\n              </div>\n\n\n\n              <p>* Ingresa el codigo que esta en el correo, si no has recibo el correo, puedes revisa en correos no deseados o spam.</p>\n\n            \n\n              <div class="contenido">\n\n             <div>\n\n                <ion-item>\n\n                    <ion-label> <ion-icon name="key"></ion-icon></ion-label>\n\n                    <ion-input type="text" placeholder="Ingresa tu codigo de confirmación" [(ngModel)]="codigo"></ion-input>\n\n                </ion-item>\n\n            \n\n            </div>\n\n            \n\n            \n\n                <button ion-button round block color="prevenir" icon-left (click)="confirmar()">\n\n                    <ion-icon name="checkmark"></ion-icon>\n\n                    Confirmar</button>\n\n                <button ion-button round block color="energized" icon-left (click)="reenviar()">\n\n                    <ion-icon name="mail"></ion-icon>\n\n                    Reenviar codigo</button>\n\n                    <button ion-button round block color="secondary" icon-left (click)="goToRegistro()">\n\n                        <ion-icon name="arrow-round-back"></ion-icon>\n\n                        Ir a registro</button>\n\n\n\n      </div>\n\n    </div>\n\n\n\n</ion-content>\n\n\n\n<div class="loading" *ngIf="laod">\n\n    <img src="/assets/imgs/pulso.gif" alt="">\n\n</div>\n\n\n\n\n\n\n\n    \n\n\n\n \n\n'/*ion-inline-end:"E:\ionic\appMovil\src\pages\blanco\blanco.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_5__app_global__["a" /* Global */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], BlancoPage);
    return BlancoPage;
}());

//# sourceMappingURL=blanco.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_global__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_crop__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_base64__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_photo_viewer__ = __webpack_require__(37);
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
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserPage = /** @class */ (function () {
    function UserPage(navCtrl, navParams, camera, global, api, formBuilder, toastCtrl, loadingCtrl, crop, base64, photoViewer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.global = global;
        this.api = api;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.crop = crop;
        this.base64 = base64;
        this.photoViewer = photoViewer;
        this.usuario = {};
        this.anArray = [];
        this.anArray2 = [];
        this.anArray3 = [];
        this.anArray4 = [];
        this.estudiosBol = false;
        this.titulos = [];
        this.eliminarFormEstudios = false;
        this.inicio();
    }
    UserPage.prototype.inicio = function () {
        if (this.global.admin === false && this.global.medico === false) {
            /////////////////////////////////Usuario///////////////////////////////////////////////////
            // console.log("USERRRRRRRRRRR")
            this.infoUser = this.global.infoPerfil;
            this.foto = this.infoUser.avatar;
            this.departamentos();
            if (!this.infoUser.fecha_nacimiento) {
                // console.log("AQUII");
                this.fechaNacimiento = false;
            }
            else {
                // console.log("ACAAA");
                this.fechaNacimiento = true;
                var ff = __WEBPACK_IMPORTED_MODULE_6_moment__(this.infoUser.fecha_nacimiento).format('DD-M-YYYY');
            }
            // TIPO DOCUMENTOS
            this.tipoDocumento = [{ tipo: 'CC', nombre: 'Cédula de Ciudadanía' },
                { tipo: 'CE', nombre: 'Cédula de Extranjería' },
                { tipo: 'PA', nombre: 'Pasaporte' },
                { tipo: 'RC', nombre: 'Registro Civil' },
                { tipo: 'TI', nombre: 'Tarjeta de Identidad' }];
            this.estadoCivil = [{ tipo: 'Solter@', nombre: 'Solter@' },
                { tipo: 'Comprometid@', nombre: 'Comprometid@' },
                { tipo: 'Casad@', nombre: 'Casad@' },
                { tipo: 'Union libre', nombre: 'Union libre' },
                { tipo: 'Separad@', nombre: 'Separad@' },
                { tipo: 'Divorciad@', nombre: 'Divorciad@' },
                { tipo: 'Viud@', nombre: 'Viud@' },
                { tipo: 'Noviazgo', nombre: 'Noviazgo' }];
            console.log(this.infoUser);
            this.datosUser = this.formBuilder.group({
                email: [this.infoUser.correo, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
                nombres: [this.infoUser.nombre, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].maxLength(20)]],
                apellidos: [this.infoUser.apellidos, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].maxLength(20)]],
                identificacion: [this.infoUser.cedula, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern('[0-9]*')]],
                direccion: [this.infoUser.direccion],
                telefono: [this.infoUser.telefono, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern('[0-9]*')]],
                whats: [this.infoUser.telefonowatshapp],
                fecha: [''],
                fecha2: [ff],
                barrio: [this.infoUser.barrio],
                tipoDocumento: [this.infoUser.tipoDocumento],
                estadoCivil: [this.infoUser.estadoCivil],
                ocupacion: [this.infoUser.ocupacion, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern('[a-z A-z]*')]],
                eps: [this.infoUser.eps, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern('[a-z A-z]*')]]
            });
        }
        else if (this.global.admin === true && this.global.medico === false) {
            this.infoUser = this.global.infoPerfil;
            this.foto = this.global.apiUrl + this.infoUser.avatar;
            this.datosAdmin = this.formBuilder.group({
                email: [this.infoUser.correo, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
                nombres: [this.infoUser.nombre, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].maxLength(50)]],
                nit: [this.infoUser.nit, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern('[0-9]*')]],
                direccion: [this.infoUser.direccion, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]],
                telefono: [this.infoUser.telefono, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern('[0-9]*')]],
                whats: [this.infoUser.telefonowatshapp, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern('[0-9]*')]],
                descripcion: [this.infoUser.descripcion, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(40)]],
                // decrip : ['',[Validators.required, Validators.minLength(40)]],
                web: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern('(?:(?:(?:ht|f)tp)s?://)?[\\w_-]+(?:\\.[\\w_-]+)+([\\w.,@?^=%&:/~+#-]*[\\w@?^=%&/~+#-])?')]],
                youtube: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern('(?:(?:(?:ht|f)tp)s?://)?[\\w_-]+(?:\\.[\\w_-]+)+([\\w.,@?^=%&:/~+#-]*[\\w@?^=%&/~+#-])?')]],
            });
        }
        else {
            this.infoUser = this.global.infoPerfil;
            if (this.infoUser.titulos.length >= 1) {
                for (var i = 0; i < this.infoUser.titulos.length; i++) {
                    var nombre = this.infoUser.titulos[i].nombre;
                    var institucion = this.infoUser.titulos[i].institucion;
                    var start = this.infoUser.titulos[i].start;
                    start = __WEBPACK_IMPORTED_MODULE_6_moment__(start).format('DD-M-YYYY');
                    var end = this.infoUser.titulos[i].end;
                    end = __WEBPACK_IMPORTED_MODULE_6_moment__(end).format('DD-M-YYYY');
                    this.titulos.push({ nombre: nombre, institucion: institucion, start: start, end: end });
                }
                //  console.log(this.titulos);
                this.estudiosBol = true;
            }
            this.foto = this.infoUser.avatar;
            // console.log(this.infoUser);
            this.datosMedico = this.formBuilder.group({
                nombres: [this.infoUser.nombres, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].maxLength(50)]],
                apellidos: [this.infoUser.apellidos, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].maxLength(50)]],
                email: [this.infoUser.email, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
                cedula: [this.infoUser.cedula, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern('[0-9]*')]],
                tarjetaProfecional: [this.infoUser.tarj_profecional, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern('[0-9]*')]],
                especialidad: [this.infoUser.titulo, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].maxLength(50)]],
                whats: [this.infoUser.whatsapp, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern('[0-9]*')]],
                telefono: [this.infoUser.telefono, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern('[0-9]*')]]
            });
        }
    };
    UserPage.prototype.ionViewDidLoad = function () {
        this.pais();
    };
    // goTo(){
    //   console.log('this.anArray',this.anArray);
    //   console.log('this.anArray',this.anArray2);
    //   console.log('this.anArray',this.anArray3);
    //   console.log('this.anArray',this.anArray4);
    //   }
    UserPage.prototype.Add = function () {
        this.estudiosBol = true;
        this.eliminarFormEstudios = true;
        this.anArray.push({ 'value': '' });
        this.anArray2.push({ 'value': '' });
        this.anArray3.push({ 'value': '' });
        this.anArray4.push({ 'value': '' });
    };
    UserPage.prototype.Delete = function () {
        if (this.anArray.length <= 0) {
            this.eliminarFormEstudios = false;
        }
        else {
            this.anArray.pop();
            this.anArray2.pop();
            this.anArray3.pop();
            this.anArray4.pop();
            if (this.anArray.length <= 0) {
                this.eliminarFormEstudios = false;
            }
        }
    };
    UserPage.prototype.openGalery = function () {
        var _this = this;
        // this.loading = this.loadingCtrl.create({
        //   spinner: 'hide',
        //   content: "Espera un momento<br>estamos cargando el recorte... ",
        // });
        // this.loading.present();
        this.load = true;
        var options = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            allowEdit: false,
            correctOrientation: true,
            //destinationType: this.camera.DestinationType.DATA_URL,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            quality: 75,
            saveToPhotoAlbum: false,
            targetWidth: 800,
            targetHeight: 800
        };
        this.camera.getPicture(options).then(function (imageData) {
            // let opt = {
            //   quality: 75,
            //   widthRatio: 6,
            //   heightRatio: 6,
            //   targetWidth: 100,
            //   targetHeight: 500
            //   };
            return _this.crop.crop(imageData, { quality: 75 });
        }).then(function (croppedImagePath) {
            return _this.base64.encodeFile(croppedImagePath);
        }).then(function (base64Data) {
            // this.loading.dismiss();
            _this.load = false;
            _this.base64Image = base64Data;
            _this.base64Image = _this.base64Image.replace("*", "jpeg");
            // console.log("IMAGENNNNNNNNNNNNNNNNN");
            // console.log(this.base64Image);
            // console.log("IMAGENNNNNNNNNNNNNNNNN");
        }).catch(function (err) {
            // this.loading.dismiss();
            _this.load = false;
            // console.log(err)
        });
    };
    UserPage.prototype.verImg = function (foto) {
        this.photoViewer.show(foto, '', { share: false });
    };
    UserPage.prototype.event = function (ev) {
        // console.log(ev);
    };
    UserPage.prototype.datosUsr = function () {
        var _this = this;
        // console.log(this.fechaNacimiento);
        if (this.fechaNacimiento === false) {
            //  console.log("Aqui");
            var fecha1 = __WEBPACK_IMPORTED_MODULE_6_moment__(this.datosUser.value.fecha); //fecha de nacimiento
            console.log(fecha1);
            var today = __WEBPACK_IMPORTED_MODULE_6_moment__(new Date().toISOString()).format('YYYY-M-DD');
            var fecha2 = __WEBPACK_IMPORTED_MODULE_6_moment__(today); //fecha actual
            var years = fecha2.diff(fecha1, 'years');
            if (!this.datosUser.valid) {
                this.presentToast("Por favor completa los campos requeridos");
            }
            else if (!this.datosUser.value.fecha) {
                this.presentToast("Por favor selecciona una fecha de nacimiento");
                this.inicio();
            }
            else if (!this.mncpSelect) {
                this.presentToast("Por favor selecciona un departamento y municipio.");
            }
            else if (years < 18) {
                this.presentToast("Para sacar una cita debes ser mayor de 18 años, vuelve más tarde");
                this.inicio();
            }
            else {
                // this.loading = this.loadingCtrl.create({
                //   spinner: 'hide',
                //   content: "Espera un momento<br>estamos procesando la información... ",
                // });
                // this.loading.present();
                this.load = true;
                var datos = { cedula: this.datosUser.value.identificacion, nombre: this.datosUser.value.nombres, apellidos: this.datosUser.value.apellidos,
                    direccion: this.datosUser.value.direccion, telefono: this.datosUser.value.telefono, telefonowatshapp: this.datosUser.value.whats,
                    fecha_nacimiento: this.datosUser.value.fecha, id: this.global.id_usuario, id_municipio: this.mncpSelect, eps: this.datosUser.value.eps,
                    barrio: this.datosUser.value.barrio, ocupacion: this.datosUser.value.ocupacion, estadoCivil: this.datosUser.value.estadoCivil,
                    tipoDocumento: this.datosUser.value.tipoDocumento };
                // console.log(datos);
                this.api.editUser(datos).then(function (data) {
                    console.log(data);
                    _this.res = data;
                    if (_this.res.update === true) {
                        _this.presentToast("Datos actualizados con exito");
                        // this.loading.dismiss();
                        _this.load = false;
                        _this.navCtrl.pop();
                    }
                    else {
                        // this.loading.dismiss();
                        _this.load = false;
                        _this.presentToast("El numero de cedula ya se encuentra asociada a otra cuenta.");
                    }
                }, function (err) {
                    // this.loading.dismiss();
                    _this.load = false;
                    _this.presentToast("Error al actualizar, intentalo más tarde");
                });
            }
        }
        else {
            if (!this.datosUser.valid) {
                this.presentToast("Por favor llena los campos requeridos");
            }
            else if (!this.mncpSelect) {
                this.presentToast("Por favor selecciona un departamento y municipio.");
            }
            else {
                // console.log(this.mncpSelect);
                // this.loading = this.loadingCtrl.create({
                //   spinner: 'hide',
                //   content: "Espera un momento<br>estamos procesando la información... ",
                // });
                // this.loading.present();
                this.load = true;
                var datos = { cedula: this.datosUser.value.identificacion, nombre: this.datosUser.value.nombres, apellidos: this.datosUser.value.apellidos,
                    direccion: this.datosUser.value.direccion, telefono: this.datosUser.value.telefono, telefonowatshapp: this.datosUser.value.whats,
                    fecha_nacimiento: this.infoUser.fecha_nacimiento, id: this.global.id_usuario, id_municipio: this.mncpSelect, eps: this.datosUser.value.eps,
                    barrio: this.datosUser.value.barrio, ocupacion: this.datosUser.value.ocupacion, estadoCivil: this.datosUser.value.estadoCivil,
                    tipoDocumento: this.datosUser.value.tipoDocumento };
                // console.log(this.datosUser.value.identificacion);
                console.log(datos);
                this.api.editUser(datos).then(function (data) {
                    console.log(data);
                    _this.res = data;
                    if (_this.res.update === true) {
                        _this.presentToast("Datos actualizados con exito");
                        // this.loading.dismiss();
                        _this.load = false;
                        _this.navCtrl.pop();
                    }
                    else {
                        // this.loading.dismiss();
                        _this.load = false;
                        _this.presentToast("El numero de cedula ya se encuentra asociada a otra cuenta.");
                    }
                }, function (err) {
                    // this.loading.dismiss();
                    _this.load = false;
                    _this.presentToast("Error al actualizar, intentalo más tarde");
                });
            }
        }
    };
    UserPage.prototype.datosMedic = function () {
        var _this = this;
        // this.loading = this.loadingCtrl.create({
        //   spinner: 'hide',
        //   content: "Espera un momento<br>estamos procesando la información... ",
        // });
        // this.loading.present();
        this.load = true;
        if (!this.datosMedico.value.telefono) {
            var telefono = 0;
        }
        else {
            telefono = this.datosMedico.value.telefono;
        }
        if (!this.datosMedico.value.whats) {
            var wp = 0;
        }
        else {
            wp = this.datosMedico.value.whats;
        }
        if (this.anArray.length <= 0) {
            var contenedor = [];
            var info = { nombres: this.datosMedico.value.nombres, apellidos: this.datosMedico.value.apellidos, titulo: this.datosMedico.value.especialidad,
                telefono: telefono, wp: wp, id: this.global.id_usuario, estudios: contenedor };
            console.log(info);
            this.api.editInfoMedico(info).then(function (res) {
                // console.log(res);
                // this.loading.dismiss();
                _this.load = false;
                if (res === true) {
                    _this.presentToast("Datos actualizados con exito");
                    _this.navCtrl.pop();
                }
                else {
                    _this.presentToast("Error al actualizar los datos");
                    _this.navCtrl.pop();
                }
            }, function (err) {
                // console.log(err);
                // this.loading.dismiss();
                _this.load = false;
                _this.presentToast("Error en la conexion, intentalo mas tarde o revisa tu conexion");
                _this.navCtrl.pop();
            });
        }
        else {
            var contenedor = [];
            var id = this.global.id_usuario;
            var tooBn;
            for (var i = 0; i < this.anArray.length; i++) {
                if (!this.anArray[i].value) {
                    this.presentToast("Por favor llena todos los campos");
                    tooBn = false;
                    break;
                }
                var nombreEstudio = this.anArray[i].value;
                for (var j = 0; j < this.anArray2.length; j++) {
                    if (!this.anArray2[i].value) {
                        this.presentToast("Por favor llena todos los campos");
                        tooBn = false;
                        break;
                    }
                    var nombreInstitucion = this.anArray2[i].value;
                }
                for (var j = 0; j < this.anArray3.length; j++) {
                    if (!this.anArray3[i].value) {
                        this.presentToast("Por favor llena todos los campos");
                        tooBn = false;
                        break;
                    }
                    var start = this.anArray3[i].value;
                }
                for (var j = 0; j < this.anArray4.length; j++) {
                    if (!this.anArray4[i].value) {
                        this.presentToast("Por favor llena todos los campos");
                        tooBn = false;
                        break;
                    }
                    var end = this.anArray4[i].value;
                }
                contenedor.push({ nombreEstudio: nombreEstudio, nombreInstitucion: nombreInstitucion, start: start, end: end, id: id });
                tooBn = true;
            }
            if (tooBn === true) {
                var info = { nombres: this.datosMedico.value.nombres, apellidos: this.datosMedico.value.apellidos, titulo: this.datosMedico.value.especialidad,
                    telefono: telefono, wp: wp, id: this.global.id_usuario, estudios: contenedor };
                console.log(info);
                this.api.editInfoMedico(info).then(function (res) {
                    console.log(res);
                    //  this.loading.dismiss();
                    _this.load = false;
                    _this.rs = res;
                    var tbn;
                    if (_this.rs.length >= 1) {
                        for (var i = 0; i < _this.rs.length; i++) {
                            var val = _this.rs[i].fecha;
                            if (val === false) {
                                _this.presentToast("Por favor revisa las fechas, la fecha de inicio no puede ser mayor a la de finalización.");
                                tbn = false;
                                break;
                            }
                            else {
                                tbn = true;
                            }
                        }
                    }
                    if (tbn === true) {
                        _this.presentToast("Datos actualizados con exito.");
                        _this.navCtrl.pop();
                    }
                }, function (err) {
                    // console.log(err);
                    // this.loading.dismiss();
                    _this.load = false;
                    _this.presentToast("Error en la conexion, intentalo mas tarde o revisa tu conexion");
                    _this.navCtrl.pop();
                });
            }
            else {
                // this.loading.dismiss();
                this.load = false;
            }
        }
    };
    UserPage.prototype.datosProv = function () {
        var _this = this;
        if (!this.datosAdmin.valid) {
            this.presentToast("Por favor completa los campos requeridos");
        }
        else {
            // this.loading = this.loadingCtrl.create({
            //   spinner: 'hide',
            //   content: "Espera un momento<br>estamos procesando la información... ",
            // });
            // this.loading.present();
            this.load = true;
            var datos = { nit: this.datosAdmin.value.nit, correo: this.datosAdmin.value.email, nombre: this.datosAdmin.value.nombres,
                direccion: this.datosAdmin.value.direccion, telefono: this.datosAdmin.value.telefono, whatsapp: this.datosAdmin.value.whats,
                descripcion: this.datosAdmin.value.descripcion, link: this.datosAdmin.value.web, video: this.datosAdmin.value.video, id: this.global.id_usuario };
            // console.log(datos);
            this.api.editProv(datos).then(function (data) {
                _this.res = data;
                if (_this.res.update === true) {
                    _this.presentToast("Datos actualizados con exito");
                    // this.loading.dismiss();
                    _this.load = false;
                    _this.navCtrl.pop();
                }
                else {
                    // this.loading.dismiss();
                    _this.load = false;
                    _this.presentToast("Por favor llena los datos requeridos");
                }
            }, function (err) {
                // this.loading.dismiss();
                _this.load = false;
                _this.presentToast("Error al actualizar, intentalo más tarde");
            });
        }
    };
    UserPage.prototype.guardarAvatar = function () {
        var _this = this;
        // console.log(this.imagen);
        // this.loading = this.loadingCtrl.create({
        //   spinner: 'hide',
        //   content: "Espera un momento<br>estamos guardando tu avatar... ",
        // });
        // this.loading.present();
        this.load = true;
        // let j = {foto:this.base64Image,id:this.global.id_usuario,admin:this.global.admin,medico:this.global.medico};
        this.api.editAvatar(this.base64Image, this.global.id_usuario, this.global.admin, this.global.medico).then(function (data) {
            console.log(data);
            var a = data[0].cambio;
            if (a === true) {
                // this.loading.dismiss();
                _this.load = false;
                _this.presentToast("Avatar cambiado con exito");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */]);
                _this.base64Image = null;
            }
            else {
                // this.loading.dismiss();
                _this.load = false;
                _this.presentToast("Error al cambiar el avatar intentalo mas tarde");
            }
        }, function (err) {
            _this.load = false;
            _this.presentToast("Error en la conexión, intentalo más tarde.");
            // console.log(err);
        });
    };
    UserPage.prototype.pais = function () {
        var _this = this;
        this.api.getPais().subscribe(function (data) {
            _this.paises = data;
        }, function (err) {
            // console.log(err);
        });
    };
    UserPage.prototype.departamentos = function () {
        var _this = this;
        this.api.getDepartamento()
            .subscribe(function (data) {
            _this.dptms = data;
            // console.log(this.dptms)
            if (_this.infoUser.nomDepa) {
                _this.posisionDpt();
                console.log("aqui");
            }
            else {
                console.log("por aca");
            }
        }, function (error) {
            // console.log(error);
        });
    };
    UserPage.prototype.departamentoSelect = function (selectedValue) {
        var _this = this;
        this.dptmSelect = selectedValue;
        // console.log(selectedValue);
        // this.loading = this.loadingCtrl.create({
        //   spinner: 'hide',
        //   content: "Espera un momento<br>estamos cargando municipios... ",
        // });
        // this.loading.present();
        this.load = true;
        this.api.getMunicipio(selectedValue).subscribe(function (data) {
            _this.mncps = data;
            // this.loading.dismiss();
            _this.load = false;
            _this.mncpSelect = null;
            // console.log(data);
        }, function (error) {
            // this.loading.dismiss();
            _this.load = false;
            _this.presentToast("Error en la conexion, intentalo mas tarde");
        });
    };
    UserPage.prototype.municipioSelect = function (selectedValue) {
        this.mncpSelect = selectedValue;
        // console.log(this.mncpSelect);
    };
    UserPage.prototype.posisionDpt = function () {
        var _this = this;
        console.log("entree");
        for (var i = 0; i < this.dptms.length; i++) {
            var posision = this.dptms[i].nombre;
            if (this.infoUser.nomDepa === posision) {
                this.posisionDtp = i;
                var departamento = this.dptms[i].id_departamento;
            }
        }
        this.api.getMunicipio(departamento).subscribe(function (data) {
            _this.mncps = data;
            // console.log(this.mncps);
            for (var i = 0; i < _this.mncps.length; i++) {
                var posision = _this.mncps[i].id_municipio;
                if (posision === _this.infoUser.id_municipio) {
                    _this.posisionMnp = i;
                    _this.mncpSelect = _this.infoUser.id_municipio;
                }
            }
            // console.log(this.mncpSelect);
        }, function (err) {
        });
    };
    UserPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 5000
        });
        toast.present();
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"E:\ionic\appMovil\src\pages\user\user.html"*/'<!--\n\n  Generated template for the UserPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Mi cuenta</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<!-- ----------------------------------- AVATAR ---------------------------------------------- -->\n\n\n\n<ion-content padding>\n\n<div class="img">\n\n  <img *ngIf="!base64Image" id="userImg" [src]="foto" alt="nd" (click)="verImg(foto)">\n\n  <img *ngIf="base64Image" id="userImg" [src]="base64Image | youtube" alt="nd">\n\n  <ion-fab >\n\n    <button ion-fab mini (click)="openGalery()">\n\n      <ion-icon name="cloud-upload"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n</div>\n\n<button *ngIf="base64Image" icon-left ion-button block round (click)="guardarAvatar()">\n\n  <ion-icon name="archive"></ion-icon>\n\n  Guardar Avatar</button>\n\n\n\n<!-- ------------------------------ FORMULARIO USER ---------------------------------------------- -->\n\n\n\n\n\n\n\n  <div *ngIf="!global.admin && !global.medico">\n\n  <form [formGroup]="datosUser" (ngSubmit)="datosUsr()"  novalidate>\n\n  <div class="info">\n\n    <h3>Informacion de mi cuenta</h3>\n\n    <ion-item>\n\n      <ion-label>Pais</ion-label>\n\n      <ion-select multiple="false" >\n\n          <ion-option *ngFor="let p of paises;let i = index" [selected]="i == 4" [value]="">{{p.nombre}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n      <ion-item>\n\n        <ion-label>\n\n          <ion-icon name="mail"></ion-icon>\n\n        </ion-label>\n\n        <ion-input placeholder="ejemplo@mail.com" type="email" formControlName="email" readonly></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n          <ion-label>\n\n            <ion-icon name="person"></ion-icon>\n\n          </ion-label>\n\n          <ion-input placeholder="Ingresa tu nombre *" type="text" formControlName="nombres"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="datosUser.get(\'nombres\').errors && datosUser.get(\'nombres\').dirty">\n\n            <p color="danger" ion-text *ngIf="datosUser.get(\'nombres\').hasError(\'required\')">* El campo es requerido</p>\n\n            <p color="danger" ion-text *ngIf="datosUser.get(\'nombres\').hasError(\'minlength\')">Cantidad minima de caracteres (3)</p>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>\n\n            <ion-icon name="person"></ion-icon>\n\n          </ion-label>\n\n          <ion-input placeholder="Ingresa tus apellidos *" type="text" formControlName="apellidos"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="datosUser.get(\'apellidos\').errors && datosUser.get(\'apellidos\').dirty">\n\n            <p color="danger" ion-text *ngIf="datosUser.get(\'apellidos\').hasError(\'required\')">* El campo es requerido</p>\n\n            <p color="danger" ion-text *ngIf="datosUser.get(\'apellidos\').hasError(\'minlength\')">Cantidad minima de caracteres (3)</p>\n\n        </ion-item>\n\n  </div>\n\n  <div class="contacto">\n\n    <h3>Datos de contacto</h3>\n\n\n\n    <!-- TIPO DOCUMENTO -->\n\n          <ion-item>\n\n            <ion-label *ngIf="this.infoUser.tipoDocumento">\n\n              <ion-icon  name="card"></ion-icon>\n\n            </ion-label>\n\n\n\n            <ion-label *ngIf="!this.infoUser.tipoDocumento">Tipo documento</ion-label>\n\n\n\n            <ion-select *ngIf="!this.infoUser.tipoDocumento" formControlName="tipoDocumento">\n\n              <ion-option *ngFor="let tp of tipoDocumento" value="{{tp.tipo}}">{{tp.nombre}}</ion-option>\n\n            </ion-select>\n\n\n\n            <ion-input *ngIf="this.infoUser.tipoDocumento" placeholder="Tipo de documento" formControlName="tipoDocumento" type="text" readonly></ion-input>\n\n          </ion-item>\n\n\n\n\n\n    <!-- IDENTIFICACION -->\n\n          <ion-item>\n\n            <ion-label>\n\n              <ion-icon name="card"></ion-icon>\n\n            </ion-label>\n\n            <ion-input placeholder="Ingresa tu identificación *" type="number" formControlName="identificacion"></ion-input>\n\n          </ion-item>\n\n          <ion-item *ngIf="datosUser.get(\'identificacion\').errors && datosUser.get(\'identificacion\').dirty">\n\n            <p color="danger" ion-text *ngIf="datosUser.get(\'identificacion\').hasError(\'required\')">* El campo es requerido</p>\n\n            <p color="danger" ion-text *ngIf="datosUser.get(\'identificacion\').hasError(\'pattern\')">* El campo solo acepta numeros</p>\n\n            \n\n          </ion-item>\n\n          <ion-item>\n\n              <ion-label>\n\n                <ion-icon name="locate"></ion-icon>\n\n              </ion-label>\n\n              <ion-input placeholder="Ingresa tu dirección" type="text"  formControlName="direccion" ></ion-input>\n\n            </ion-item>\n\n\n\n\n\n            <!-- BARRIO -->\n\n\n\n            <ion-item>\n\n              <ion-label>\n\n                <ion-icon name="locate"></ion-icon>\n\n              </ion-label>\n\n              <ion-input placeholder="Ingresa el barrio" type="text"  formControlName="barrio" ></ion-input>\n\n            </ion-item>\n\n\n\n\n\n            <!-- FECHA NACIMIENTO -->\n\n\n\n            <ion-item>\n\n              <ion-label icon-left>\n\n                <ion-icon name="calendar"></ion-icon>\n\n                Fecha nacimiento *</ion-label>\n\n              <ion-datetime *ngIf="!fechaNacimiento" displayFormat="DD/MM/YYYY" formControlName="fecha" doneText="Aceptar" cancelText="Cancelar"></ion-datetime>\n\n              <ion-input type="text" *ngIf="fechaNacimiento" formControlName="fecha2" readonly></ion-input>\n\n            </ion-item>\n\n\n\n<!-- \n\n            <ion-item>\n\n              <ion-label>Departamento</ion-label>\n\n              <ion-select multiple="false" (ionChange)="departamentoSelect($event);" cancelText="cancelar">\n\n                <ion-option *ngFor="let dpt of dptms;let i = index" [value]="dpt.id_departamento"  >{{dpt.nombre}}</ion-option>     \n\n              </ion-select>\n\n            </ion-item>\n\n            \n\n            <ion-item>\n\n              <ion-label>Municipio</ion-label>\n\n              <ion-select multiple="false" (ionChange)="municipioSelect($event);" cancelText="cancelar">\n\n                  <ion-option *ngFor="let mnp of mncps;let i = index" [value]="mnp.id_municipio">{{mnp.nombre}}</ion-option>\n\n                \n\n              </ion-select>\n\n            </ion-item> -->\n\n\n\n            <ion-item>\n\n              <ion-label>Departamento</ion-label>\n\n              <ion-select multiple="false" (ionChange)="departamentoSelect($event);" cancelText="cancelar">\n\n                <ion-option *ngFor="let dpt of dptms;let i = index" [selected]="i == posisionDtp" [value]="dpt.id_departamento"  >{{dpt.nombre}}</ion-option>     \n\n              </ion-select>\n\n            </ion-item>\n\n            \n\n             <ion-item>\n\n              <ion-label>Municipio</ion-label>\n\n              <ion-select multiple="false" (ionChange)="municipioSelect($event);" cancelText="cancelar">\n\n                  <ion-option *ngFor="let mnp of mncps;let i = index" [selected]="i == posisionMnp" [value]="mnp.id_municipio"  >{{mnp.nombre}}</ion-option>\n\n                \n\n              </ion-select>\n\n            </ion-item>\n\n\n\n            <!-- ESTADO CIVIL -->\n\n\n\n            <ion-item>\n\n\n\n                <ion-label *ngIf="this.infoUser.estadoCivil">\n\n                    <ion-icon  name="person"></ion-icon>\n\n                  </ion-label>\n\n      \n\n                  <ion-label *ngIf="!this.infoUser.estadoCivil">Estado civil</ion-label>\n\n      \n\n                  <ion-select *ngIf="!this.infoUser.estadoCivil" formControlName="estadoCivil">\n\n                    <ion-option *ngFor="let tp of estadoCivil" value="{{tp.tipo}}">{{tp.nombre}}</ion-option>\n\n                  </ion-select>\n\n      \n\n                  <ion-input *ngIf="this.infoUser.estadoCivil" placeholder="Tipo de documento" formControlName="estadoCivil" type="text" readonly></ion-input>\n\n\n\n            </ion-item>\n\n\n\n\n\n            <!-- TELEFONO -->\n\n\n\n            <ion-item>\n\n                <ion-label>\n\n                  <ion-icon name="call"></ion-icon>\n\n                </ion-label>\n\n                <ion-input placeholder="Ingresa tu numero de contacto *" type="number" formControlName="telefono"></ion-input>\n\n              </ion-item>\n\n              <ion-item *ngIf="datosUser.get(\'telefono\').errors && datosUser.get(\'telefono\').dirty">\n\n                  <p color="danger" ion-text *ngIf="datosUser.get(\'telefono\').hasError(\'required\')">* El campo es requerido</p>\n\n                  <p color="danger" ion-text *ngIf="datosUser.get(\'telefono\').hasError(\'pattern\')">* El campo solo acepta numeros</p>\n\n              </ion-item>\n\n\n\n              <!-- WhatsApp -->\n\n\n\n              <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon name="logo-whatsapp"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input placeholder="Ingresa tu WhatsApp *" type="number" formControlName="whats"></ion-input>\n\n                </ion-item>    \n\n                \n\n                <!-- OCUPACION -->\n\n\n\n                <ion-item>\n\n                    <ion-label>\n\n                        <ion-icon name="hammer"></ion-icon>\n\n                      </ion-label>\n\n                      <ion-input placeholder="Ingresa tu ocupacion" type="text" formControlName="ocupacion"></ion-input>\n\n                </ion-item>\n\n\n\n                <!-- EPS -->\n\n\n\n                <ion-item>\n\n                    <ion-label>\n\n                        <ion-icon name="medkit"></ion-icon>\n\n                      </ion-label>\n\n                      <ion-input placeholder="Ingresa tu eps" type="text" formControlName="eps"></ion-input>\n\n                </ion-item>\n\n  </div>\n\n\n\n  <button icon-left ion-button block round [disabled]="!this.datosUser.valid">\n\n    <ion-icon name="archive"></ion-icon>\n\n    Guardar </button>\n\n\n\n  </form>\n\n</div>\n\n\n\n<!--   --------------------- FORMULARIO PROVEDOR -------------------------------------------------- -->\n\n\n\n<div *ngIf="global.admin && !global.medico">\n\n    <form [formGroup]="datosAdmin" (ngSubmit)="datosProv()"  novalidate>\n\n    <div class="info">\n\n        <h3>Informacion de mi cuenta</h3>\n\n        <ion-item>\n\n          <ion-label>Pais</ion-label>\n\n          <ion-select multiple="false" >\n\n              <ion-option *ngFor="let p of paises;let i = index" [selected]="i == 4" [value]="">{{p.nombre}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n          <ion-item>\n\n              <ion-label>\n\n                <ion-icon name="mail"></ion-icon>\n\n              </ion-label>\n\n              <ion-input placeholder="ejemplo@mail.com" type="email" formControlName="email" readonly></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label>\n\n                  <ion-icon name="person"></ion-icon>\n\n                </ion-label>\n\n                <ion-input placeholder="* ingresa tu nombre" type="text" formControlName="nombres"></ion-input>\n\n              </ion-item>\n\n              <ion-item *ngIf="datosAdmin.get(\'nombres\').errors && datosAdmin.get(\'nombres\').dirty">\n\n                  <p color="danger" ion-text *ngIf="datosAdmin.get(\'nombres\').hasError(\'required\')">* El campo es requerido</p>\n\n                  <p color="danger" ion-text *ngIf="datosAdmin.get(\'nombres\').hasError(\'minlength\')">Cantidad minima de caracteres (3)</p>\n\n              </ion-item>\n\n    </div>\n\n    <div class="contacto">\n\n        <h3>Datos de contacto</h3>\n\n       \n\n              <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon name="locate"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input placeholder="igresa tu dirección" type="text" formControlName="direccion"></ion-input>\n\n                </ion-item>\n\n                <ion-item *ngIf="datosAdmin.get(\'direccion\').errors && datosAdmin.get(\'direccion\').dirty">\n\n                    <p color="danger" ion-text *ngIf="datosAdmin.get(\'direccion\').hasError(\'required\')">* El campo es requerido</p> \n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label>\n\n                      <ion-icon name="call"></ion-icon>\n\n                    </ion-label>\n\n                    <ion-input placeholder="igresa tu número de contacto" type="number" formControlName="telefono"></ion-input>\n\n                  </ion-item>\n\n                  <ion-item *ngIf="datosAdmin.get(\'telefono\').errors && datosAdmin.get(\'telefono\').dirty">\n\n                      <!-- <p color="danger" ion-text *ngIf="datosAdmin.get(\'telefono\').hasError(\'required\')">* El campo es requerido</p> -->\n\n                      <p color="danger" ion-text *ngIf="datosAdmin.get(\'telefono\').hasError(\'pattern\')">* El campo solo acepta numeros</p> \n\n                  </ion-item>\n\n                  <ion-item>\n\n                      <ion-label>\n\n                        <ion-icon name="logo-whatsapp"></ion-icon>\n\n                      </ion-label>\n\n                      <ion-input placeholder="igresa tu whatsapp" type="number" formControlName="whats"></ion-input>\n\n                    </ion-item>       \n\n      </div>\n\n\n\n  <div class="proovedor">\n\n    <h3>Información proovedor</h3>\n\n    \n\n      <ion-item>\n\n          <ion-label>\n\n            <ion-icon name="contacts"></ion-icon>\n\n          </ion-label>\n\n          <ion-input placeholder="* Ingresa el nombre de tu empresa" type="text" formControlName="nombres"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="datosAdmin.get(\'nombres\').errors && datosAdmin.get(\'nombres\').dirty">\n\n            <p color="danger" ion-text *ngIf="datosAdmin.get(\'nombres\').hasError(\'required\')">* El campo es requerido</p>\n\n            <p color="danger" ion-text *ngIf="datosAdmin.get(\'nombres\').hasError(\'minlength\')">Cantidad minima de caracteres (3)</p>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>\n\n              <ion-icon name="person"></ion-icon>\n\n            </ion-label>\n\n            <ion-input placeholder="* Ingresa tu Nit / Tarjeta profecional" formControlName="nit"></ion-input>\n\n          </ion-item>\n\n          <ion-item *ngIf="datosAdmin.get(\'nit\').errors && datosAdmin.get(\'nit\').dirty">\n\n              <p color="danger" ion-text *ngIf="datosAdmin.get(\'nit\').hasError(\'required\')">* El campo es requerido</p>\n\n              <p color="danger" ion-text *ngIf="datosAdmin.get(\'nit\').hasError(\'pattern\')">* El campo solo acepta numeros</p> \n\n          </ion-item>\n\n\n\n          <ion-item>\n\n              <ion-label>\n\n                <ion-icon name="at"></ion-icon>\n\n              </ion-label>\n\n              <ion-input placeholder="Ingresa link de tu sitio web" formControlName="web"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label>\n\n                <ion-icon name="logo-youtube"></ion-icon>\n\n              </ion-label>\n\n              <ion-input placeholder="Pega el link de tu video" formControlName="youtube"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label floating>* Describenos tu empresa</ion-label>\n\n              <ion-textarea class="txt_area" formControlName="descripcion"></ion-textarea>\n\n          </ion-item>\n\n              <ion-item *ngIf="datosAdmin.get(\'descripcion\').errors && datosAdmin.get(\'descripcion\').dirty">\n\n                  <p color="danger" ion-text *ngIf="datosAdmin.get(\'descripcion\').hasError(\'required\')">* El campo es requerido</p>\n\n                <p color="danger" ion-text *ngIf="datosAdmin.get(\'descripcion\').hasError(\'minlength\')">Cantidad minima caracteres (40)</p>\n\n              </ion-item>      \n\n  </div>\n\n\n\n  <button icon-left ion-button block round >\n\n      <ion-icon name="archive"></ion-icon>\n\n      Guardar </button>\n\n\n\n</form>\n\n</div>\n\n\n\n<!-- ---------------------------------------FORMULARIO MEDICO -------------------------------------------------- -->\n\n\n\n<div *ngIf="!global.admin && global.medico">\n\n\n\n  <form [formGroup]="datosMedico" (ngSubmit)="datosMedic()"  novalidate>\n\n    <div class="info">\n\n      <h3>Informacion de mi cuenta</h3>\n\n      <ion-item>\n\n        <ion-label>Pais</ion-label>\n\n        <ion-select multiple="false" >\n\n            <ion-option *ngFor="let p of paises;let i = index" [selected]="i == 4" [value]="">{{p.nombre}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n        <ion-item>\n\n          <ion-label>\n\n            <ion-icon name="mail"></ion-icon>\n\n          </ion-label>\n\n          <ion-input placeholder="ejemplo@mail.com" type="email" formControlName="email" readonly></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>\n\n              <ion-icon name="person"></ion-icon>\n\n            </ion-label>\n\n            <ion-input placeholder="* ingresa tu nombre" type="text" formControlName="nombres"></ion-input>\n\n          </ion-item>\n\n          <ion-item *ngIf="datosMedico.get(\'nombres\').errors && datosMedico.get(\'nombres\').dirty">\n\n              <p color="danger" ion-text *ngIf="datosMedico.get(\'nombres\').hasError(\'required\')">* El campo es requerido</p>\n\n              <p color="danger" ion-text *ngIf="datosMedico.get(\'nombres\').hasError(\'minlength\')">Cantidad minima de caracteres (3)</p>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label>\n\n              <ion-icon name="person"></ion-icon>\n\n            </ion-label>\n\n            <ion-input placeholder="* ingresa tus apellidos" type="text" formControlName="apellidos"></ion-input>\n\n          </ion-item>\n\n          <ion-item *ngIf="datosMedico.get(\'apellidos\').errors && datosMedico.get(\'apellidos\').dirty">\n\n              <p color="danger" ion-text *ngIf="datosMedico.get(\'apellidos\').hasError(\'required\')">* El campo es requerido</p>\n\n              <p color="danger" ion-text *ngIf="datosMedico.get(\'apellidos\').hasError(\'minlength\')">Cantidad minima de caracteres (3)</p>\n\n          </ion-item>\n\n    </div>\n\n    <div class="contacto">\n\n      <h3>Datos de contacto</h3>\n\n\n\n            <ion-item>\n\n              <ion-label>\n\n                <ion-icon name="card"></ion-icon>\n\n              </ion-label>\n\n              <ion-input placeholder="* igresa tu identificación" type="number" formControlName="cedula" readonly></ion-input>\n\n            </ion-item>\n\n            <ion-item *ngIf="datosMedico.get(\'cedula\').errors && datosMedico.get(\'cedula\').dirty">\n\n              <p color="danger" ion-text *ngIf="datosMedico.get(\'cedula\').hasError(\'required\')">* El campo es requerido</p>\n\n              <p color="danger" ion-text *ngIf="datosMedico.get(\'cedula\').hasError(\'pattern\')">* El campo solo acepta numeros</p>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n              <ion-label>\n\n                <ion-icon name="card"></ion-icon>\n\n              </ion-label>\n\n              <ion-input placeholder="* igresa tu tarjeta profecional" type="number" formControlName="tarjetaProfecional" readonly></ion-input>\n\n            </ion-item>\n\n            <ion-item *ngIf="datosMedico.get(\'tarjetaProfecional\').errors && datosMedico.get(\'tarjetaProfecional\').dirty">\n\n              <p color="danger" ion-text *ngIf="datosMedico.get(\'tarjetaProfecional\').hasError(\'required\')">* El campo es requerido</p>\n\n              <p color="danger" ion-text *ngIf="datosMedico.get(\'tarjetaProfecional\').hasError(\'pattern\')">* El campo solo acepta numeros</p>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n              <ion-label>\n\n                <ion-icon name="person"></ion-icon>\n\n              </ion-label>\n\n              <ion-input placeholder="* ingresa tu titulo" type="text" formControlName="especialidad"></ion-input>\n\n            </ion-item>\n\n            <ion-item *ngIf="datosMedico.get(\'especialidad\').errors && datosMedico.get(\'especialidad\').dirty">\n\n                <p color="danger" ion-text *ngIf="datosMedico.get(\'especialidad\').hasError(\'required\')">* El campo es requerido</p>\n\n                <p color="danger" ion-text *ngIf="datosMedico.get(\'especialidad\').hasError(\'minlength\')">Cantidad minima de caracteres (2)</p>\n\n            </ion-item>\n\n           \n\n              <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon name="call"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input placeholder="ingresa tu numero de contacto" type="number" formControlName="telefono"></ion-input>\n\n                </ion-item>\n\n                <ion-item *ngIf="datosMedico.get(\'telefono\').errors && datosMedico.get(\'telefono\').dirty">\n\n                    <p color="danger" ion-text *ngIf="datosMedico.get(\'telefono\').hasError(\'required\')">* El campo es requerido</p>\n\n                    <p color="danger" ion-text *ngIf="datosMedico.get(\'telefono\').hasError(\'pattern\')">* El campo solo acepta numeros</p>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                    <ion-label>\n\n                      <ion-icon name="logo-whatsapp"></ion-icon>\n\n                    </ion-label>\n\n                    <ion-input placeholder="igresa tu whatsapp" type="number" formControlName="whats"></ion-input>\n\n                  </ion-item>     \n\n                  \n\n                  <ion-item *ngIf="datosMedico.get(\'whats\').errors && datosMedico.get(\'whats\').dirty">\n\n                    <p color="danger" ion-text *ngIf="datosMedico.get(\'whats\').hasError(\'required\')">* El campo es requerido</p>\n\n                    <p color="danger" ion-text *ngIf="datosMedico.get(\'whats\').hasError(\'pattern\')">* El campo solo acepta numeros</p>\n\n                </ion-item>\n\n    </div> \n\n    </form><br>\n\n\n\n    <div *ngIf="estudiosBol">\n\n      <h3 class="contacto">Estudios Medicos</h3>\n\n    </div>\n\n\n\n  <div>\n\n    <ion-card *ngFor="let t of titulos">\n\n      <ion-card-header>{{t.nombre}}</ion-card-header>\n\n      <ion-card-content>\n\n        <h3><strong>Institución :</strong>{{t.institucion}}</h3>\n\n        <h3><strong>Fecha de inicio :</strong>{{t.start}}</h3>\n\n        <h3><strong>Fecha de finalización:</strong>{{t.end}}</h3>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n\n\n  <div class="estudios" *ngFor="let att of anArray; let idx = index">\n\n    <ion-item >\n\n        <ion-label >\n\n          <ion-icon name="paper"></ion-icon>\n\n        </ion-label>\n\n        <ion-input type="text" placeholder="Nombre del estudio" [(ngModel)]="anArray[idx].value"></ion-input>\n\n      </ion-item>\n\n\n\n        <ion-item >\n\n            <ion-label >\n\n              <ion-icon name="book"></ion-icon>\n\n            </ion-label>\n\n            <ion-input type="text" placeholder="Nombre de la institucion" [(ngModel)]="anArray2[idx].value"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item >\n\n            <ion-label icon-left>\n\n              <ion-icon name="calendar"></ion-icon>\n\n              Fecha de Inicio  *</ion-label>\n\n            <ion-datetime  displayFormat="DD/MM/YYYY" doneText="Aceptar" cancelText="Cancelar" [(ngModel)]="anArray3[idx].value"></ion-datetime>\n\n        </ion-item>\n\n    \n\n        <ion-item >\n\n            <ion-label icon-left>\n\n              <ion-icon name="calendar"></ion-icon>\n\n              Fecha de finalización  *</ion-label>\n\n            <ion-datetime  displayFormat="DD/MM/YYYY" doneText="Aceptar" cancelText="Cancelar" [(ngModel)]="anArray4[idx].value"></ion-datetime>\n\n        </ion-item>\n\n  </div>\n\n\n\n    <button *ngIf="eliminarFormEstudios" ion-button icon-left round block color="danger" (click)="Delete()">\n\n    <ion-icon name="trash"> </ion-icon>\n\n    Eliminar Formulario\n\n    </button>\n\n\n\n    <button ion-button icon-left block round color="energized" (click)="Add()">\n\n      <ion-icon name="create"></ion-icon>\n\n      Agregar estudios</button>\n\n\n\n    <button icon-left ion-button block round (click)="datosMedic()" [disabled]="!this.datosMedico.valid">\n\n      <ion-icon name="archive"></ion-icon>\n\n      Guardar </button>\n\n\n\n</div>\n\n\n\n</ion-content>\n\n\n\n<div class="loading" *ngIf="load">\n\n  <img src="/assets/imgs/pulso.gif" alt="">\n\n</div>\n\n'/*ion-inline-end:"E:\ionic\appMovil\src\pages\user\user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__app_global__["a" /* Global */], __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_crop__["a" /* Crop */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_base64__["a" /* Base64 */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_photo_viewer__["a" /* PhotoViewer */]])
    ], UserPage);
    return UserPage;
}());

// Open galeria opciones antiguas, 
//   openGaleryEstudiosMedicos(){
//   const options: CameraOptions = {
//     quality: 100,
//     destinationType: this.camera.DestinationType.DATA_URL,
//     encodingType: this.camera.EncodingType.JPEG,
//     mediaType:this.camera.MediaType.PICTURE,
//     sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
//     targetWidth:800,
//     targetHeight:800,
//     correctOrientation:true
//       // sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
//       // allowEdit: false,
//       // correctOrientation: true,
//       // //destinationType: this.camera.DestinationType.DATA_URL,
//       // destinationType: this.camera.DestinationType.FILE_URI,
//       // encodingType: this.camera.EncodingType.JPEG,
//       // mediaType: this.camera.MediaType.PICTURE,
//       // quality: 75,
//       // saveToPhotoAlbum: false,
//       // targetWidth: 800,
//       // targetHeight: 800
//   }
//     this.camera.getPicture(options).then((imageData)=>{
//        this.diploma = 'data:image/jpeg;base64,'+imageData;
//     },(err)=>{
//     });
// }
//# sourceMappingURL=user.js.map

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_global__ = __webpack_require__(10);
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
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
// let apiUrl = 'http://192.168.2.104:3300';
var ApiProvider = /** @class */ (function () {
    function ApiProvider(http, global) {
        this.http = http;
        this.global = global;
        this.apiUrl = global.apiUrl;
    }
    /////////////////////////////////////// POST ///////////////////////////////////////////////
    ApiProvider.prototype.postLogin = function (datos, tipo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            headers.set('Content-Type', 'application/json');
            _this.http.post(_this.apiUrl + tipo, datos, { headers: headers })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiProvider.prototype.postRegistro = function (datos, tipo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            headers.set('Content-Type', 'application/json');
            _this.http.post(_this.apiUrl + tipo, datos, { headers: headers })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    // Ruta para enviar el formulario de registro de un nuevo servicio
    ApiProvider.prototype.postImages = function (datos) {
        var _this = this;
        // console.log("Entreeeee");
        // let cadena = "pepin";
        // cadena = cadena.replace('"',' ');
        // console.log(cadena);
        // console.log(datos);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            headers.set('Content-Type', 'application/json');
            _this.http.post(_this.apiUrl + '/services', datos, { headers: headers })
                .subscribe(function (res) {
                // console.log("Toy aquiiiii");
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiProvider.prototype.guardarCita = function (datos) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            headers.set('Content-Type', 'application/json');
            _this.http.post(_this.apiUrl + '/events', datos, { headers: headers })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiProvider.prototype.postBeneficiario = function (datos) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            headers.append('Content-Type', 'application/json');
            _this.token = localStorage.getItem('token');
            _this.token = _this.token.split('"');
            _this.token2 = _this.token[1];
            // console.log(this.token2);
            _this.http.post(_this.apiUrl + '/benef' + "?token=" + _this.token2, datos, { headers: headers })
                .subscribe(function (res) {
                // console.log("ENTRE AL PROVIDER");
                // console.log(res);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiProvider.prototype.enviarMensaje = function (mensaje) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post(_this.apiUrl + '/sendm', mensaje, { headers: headers })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiProvider.prototype.postEditarHorario = function (horarios) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            headers.append('Content-Type', 'application/json');
            // console.log(horarios);
            _this.http.post(_this.apiUrl + '/horariosed', horarios, { headers: headers })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiProvider.prototype.enviarFotosEditServicio = function (imgs) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            headers.append('Content-Type', 'application/json');
            // console.log(imgs);
            _this.http.post(_this.apiUrl + '/infotoser', imgs, { headers: headers })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiProvider.prototype.postMascota = function (datos) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            headers.append('Content-Type', 'application/json');
            // console.log(imgs);
            _this.http.post(_this.apiUrl + '/mascota', datos, { headers: headers })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiProvider.prototype.postCalificacion = function (info) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            headers.append('Content-Type', 'application/json');
            // console.log(imgs);
            _this.http.post(_this.apiUrl + '/coment', info, { headers: headers })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiProvider.prototype.postCitasProvedor = function (info) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            headers.append('Content-Type', 'application/json');
            _this.token = localStorage.getItem('token');
            _this.token = _this.token.split('"');
            _this.token2 = _this.token[1];
            // console.log(j);
            _this.http.post(_this.apiUrl + '/citai/' + "?token=" + _this.token2, info, { headers: headers })
                .subscribe(function (res) {
                // console.log("ENTRE AL PROVIDER");
                // console.log(res);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    // Agregar medico desde provedor
    ApiProvider.prototype.postAgregarMedicos = function (info) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            headers.append('Content-Type', 'application/json');
            _this.token = localStorage.getItem('token');
            _this.token = _this.token.split('"');
            _this.token2 = _this.token[1];
            // console.log(info);
            _this.http.post(_this.apiUrl + '/medicos/' + "?token=" + _this.token2, info, { headers: headers })
                .subscribe(function (res) {
                // console.log("ENTRE AL PROVIDER");
                // console.log(res);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    /////////////////////////////////////// GET ///////////////////////////////////////////////
    ApiProvider.prototype.getDepartamento = function () {
        return this.http.get(this.apiUrl + '/departamentos/47');
    };
    ApiProvider.prototype.getMunicipio = function (id) {
        return this.http.get(this.apiUrl + '/municipios/' + id);
    };
    ApiProvider.prototype.getCategorias = function () {
        return this.http.get(this.apiUrl + '/categoria');
    };
    ApiProvider.prototype.getServicios = function () {
        return this.http.get(this.apiUrl + '/services');
    };
    ApiProvider.prototype.getProovedor = function (id) {
        // console.log(id);
        return this.http.get(this.apiUrl + '/provedores/' + id);
    };
    ApiProvider.prototype.getPublicacionesProveedor = function (id) {
        return this.http.get(this.apiUrl + '/services/' + id);
    };
    ApiProvider.prototype.getFechas = function () {
        return this.http.get(this.apiUrl + '/events');
    };
    //Ruta para pedir la información del usuario
    ApiProvider.prototype.getUser = function (id) {
        // console.log(id);
        return this.http.get(this.apiUrl + '/user/' + id);
    };
    ApiProvider.prototype.getHorario = function (fecha, id, id_categoria) {
        // console.log(fecha);
        // console.log("AQUIIIIIIIIIIIIIIIIII");
        // console.log(id_categoria);
        return this.http.get(this.apiUrl + '/citas/' + fecha + '/' + id + '/' + id_categoria);
    };
    ApiProvider.prototype.getCitasUsuario = function (id) {
        return this.http.get(this.apiUrl + '/events/' + id);
    };
    ApiProvider.prototype.getServicio = function (id) {
        // console.log("AquIIIIIIII");
        // console.log(id);
        return this.http.get(this.apiUrl + '/servicess/' + id);
    };
    ApiProvider.prototype.getCitasMedico = function (fecha, id, id_cate) {
        return this.http.get(this.apiUrl + '/servcitas/' + fecha + '/' + id + '/' + id_cate);
        //  return this.http.get(this.apiUrl+'/servcitas/'+fecha+'/'+id);
    };
    ApiProvider.prototype.getValidacion = function (id) {
        return this.http.get(this.apiUrl + '/datos/' + id);
    };
    ApiProvider.prototype.getBusqueda = function (idm, idc) {
        return this.http.get(this.apiUrl + '/services/' + idm + '/' + idc);
    };
    ApiProvider.prototype.getPais = function () {
        return this.http.get(this.apiUrl + '/pais');
    };
    ApiProvider.prototype.getParentesco = function () {
        return this.http.get(this.apiUrl + '/parent');
    };
    ApiProvider.prototype.getBeneficiarios = function (id) {
        return this.http.get(this.apiUrl + '/benef/' + id);
    };
    ApiProvider.prototype.getEventos = function (mes, anio, id_serv, id_cate) {
        return this.http.get(this.apiUrl + '/eventser/' + mes + '/' + anio + '/' + id_serv + '/' + id_cate);
    };
    ApiProvider.prototype.getCitasBeneficiarios = function (id) {
        return this.http.get(this.apiUrl + '/eventsb/' + id);
    };
    ApiProvider.prototype.getInfoEditar = function (id) {
        return this.http.get(this.apiUrl + '/sservicio/' + id);
    };
    ApiProvider.prototype.getFotosServicio = function (id) {
        return this.http.get(this.apiUrl + '/fotosser/' + id);
    };
    ApiProvider.prototype.getHorariosServicio = function (id) {
        return this.http.get(this.apiUrl + '/horariosed/' + id);
    };
    ApiProvider.prototype.getMascotasUser = function (id) {
        return this.http.get(this.apiUrl + '/mascota/' + id);
    };
    ApiProvider.prototype.getMascotaInfo = function (id) {
        return this.http.get(this.apiUrl + '/mascotam/' + id);
    };
    ApiProvider.prototype.getCitasMascota = function (id) {
        // console.log(id);
        return this.http.get(this.apiUrl + '/eventsm/' + id);
    };
    ApiProvider.prototype.getTopics = function (id) {
        return this.http.get(this.apiUrl + '/topic/' + id);
    };
    ApiProvider.prototype.getHistorialUser = function (id) {
        // console.log("Apiii")
        return this.http.get(this.apiUrl + '/hist/' + id);
    };
    ApiProvider.prototype.getHistorialBeneficiarios = function (id) {
        return this.http.get(this.apiUrl + '/histb/' + id);
    };
    ApiProvider.prototype.getHistorialmascotas = function (id) {
        return this.http.get(this.apiUrl + '/histm/' + id);
    };
    ApiProvider.prototype.cedula = function (cedula, bol) {
        return this.http.get(this.apiUrl + '/cedula/' + cedula + '/' + bol);
    };
    // Ruta para obtener los medicos que estan subscritos a un provedor
    ApiProvider.prototype.getMedicosProvedor = function (id) {
        return this.http.get(this.apiUrl + '/medicos/' + id);
    };
    // Saber si el medico existe o no a travez de la cedula
    ApiProvider.prototype.getMedico = function (cedula) {
        return this.http.get(this.apiUrl + '/medicosc/' + cedula);
    };
    // Ruta para perdir la información del medico
    ApiProvider.prototype.getInfoMedico = function (id) {
        return this.http.get(this.apiUrl + '/medicosm/' + id);
    };
    // Ruta para pedir los servicios que tiene asociados el medico
    ApiProvider.prototype.getProvedoresMedico = function (id) {
        return this.http.get(this.apiUrl + '/medicospr/' + id);
    };
    //metodo para la confirmacion de la cuenta 
    ApiProvider.prototype.getConfirmacionCuenta = function (id) {
        return this.http.get(this.apiUrl + '/locked/' + id);
    };
    //metodo para reenciar codigo de confirmacion de cuenta al correo
    ApiProvider.prototype.getReenviarCodigoCorreo = function (id) {
        return this.http.get(this.apiUrl + '/cambios/' + id);
    };
    //metodo para verificar que el correo exista, para el cambio de contraseña
    ApiProvider.prototype.getConfirmacionCorreo = function (correo) {
        return this.http.get(this.apiUrl + '/cambioc/' + correo);
    };
    //ruta para obtener los comentarios por servicio de un medico
    ApiProvider.prototype.getComentarioMedico = function (id, idctga) {
        return this.http.get(this.apiUrl + '/comentmed/' + id + '/' + idctga);
    };
    // Ruta para obtener las sucursales de un servicio
    ApiProvider.prototype.getSucursalesServicio = function (id_servicio, id_provedor, id_municipio) {
        return this.http.get(this.apiUrl + '/sucuserprovmuni/' + id_servicio + '/' + id_provedor + '/' + id_municipio);
    };
    /////////////////////////////////////// DELETE ///////////////////////////////////////////////
    ApiProvider.prototype.dltService = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            headers.append('Content-Type', 'application/json');
            _this.token = localStorage.getItem('token');
            _this.token = _this.token.split('"');
            _this.token2 = _this.token[1];
            var url = _this.apiUrl + '/services/' + id + "?token=" + _this.token2;
            // console.log(url);
            _this.http.delete(url, { headers: headers })
                .subscribe(function (res) {
                // console.log(res);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiProvider.prototype.dltCita = function (id, mascota) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            headers.append('Content-Type', 'application/json');
            _this.token = localStorage.getItem('token');
            _this.token = _this.token.split('"');
            _this.token2 = _this.token[1];
            _this.http.delete(_this.apiUrl + '/events/' + id + '/' + mascota + "?token=" + _this.token2, { headers: headers })
                .subscribe(function (res) {
                // console.log(res);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiProvider.prototype.dltCitaProvedor = function (idServicio, idProvedor, id_categoria) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            headers.append('Content-Type', 'application/json');
            _this.token = localStorage.getItem('token');
            _this.token = _this.token.split('"');
            _this.token2 = _this.token[1];
            _this.http.delete(_this.apiUrl + '/eventss/' + idServicio + '/' + idProvedor + '/' + id_categoria + "?token=" + _this.token2, { headers: headers })
                .subscribe(function (res) {
                // console.log(res);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiProvider.prototype.dltImagenServicio = function (id, ruta) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            headers.append('Content-Type', 'application/json');
            _this.token = localStorage.getItem('token');
            _this.token = _this.token.split('"');
            _this.token2 = _this.token[1];
            console.log(id);
            console.log(ruta);
            // +"?token="+this.token2
            _this.http.delete(_this.apiUrl + '/elmfotoser/' + id, { headers: headers })
                .subscribe(function (res) {
                // console.log(res);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiProvider.prototype.dltHorarioServicio = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            headers.append('Content-Type', 'application/json');
            _this.token = localStorage.getItem('token');
            _this.token = _this.token.split('"');
            _this.token2 = _this.token[1];
            // console.log(id);
            // +"?token="+this.token2
            _this.http.delete(_this.apiUrl + '/horariodel/' + id + "?token=" + _this.token2, { headers: headers })
                .subscribe(function (res) {
                // console.log(res);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    // borrar medico, desde el provedor
    ApiProvider.prototype.dltMedicoPorProvedor = function (medico_id, provedor_id) {
        var _this = this;
        console.log(medico_id, provedor_id);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            headers.append('Content-Type', 'application/json');
            _this.token = localStorage.getItem('token');
            _this.token = _this.token.split('"');
            _this.token2 = _this.token[1];
            // console.log(id);
            // +"?token="+this.token2
            _this.http.delete(_this.apiUrl + '/medico/' + medico_id + '/' + provedor_id + "?token=" + _this.token2, { headers: headers })
                .subscribe(function (res) {
                // console.log(res);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    /////////////////////////////////////// PUT ///////////////////////////////////////////////
    ApiProvider.prototype.obtenerToken = function (token) {
        var _this = this;
        this.tk = token;
        console.log(this.tk);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            headers.append('Content-Type', 'application/json');
            _this.token = localStorage.getItem('token');
            _this.token = _this.token.split('"');
            _this.token2 = _this.token[1];
            var id = localStorage.getItem("id");
            var j = { token: _this.tk.registrationId, id: id, admin: _this.global.admin, medico: _this.global.medico };
            console.log(j);
            _this.http.put(_this.apiUrl + '/push', j, { headers: headers })
                .subscribe(function (res) {
                // console.log("ENTRE AL PROVIDER");
                // console.log(res);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiProvider.prototype.editAvatar = function (foto, id, admin, medico) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            headers.append('Content-Type', 'application/json');
            _this.token = localStorage.getItem('token');
            _this.token = _this.token.split('"');
            _this.token2 = _this.token[1];
            var j = { foto: foto, id: id, admin: admin, medico: medico };
            console.log(j);
            _this.http.put(_this.apiUrl + '/fotou/' + "?token=" + _this.token2, j, { headers: headers })
                .subscribe(function (res) {
                // console.log("ENTRE AL PROVIDER");
                // console.log(res);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiProvider.prototype.editAvatarMascota = function (datos) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            headers.append('Content-Type', 'application/json');
            _this.token = localStorage.getItem('token');
            _this.token = _this.token.split('"');
            _this.token2 = _this.token[1];
            // console.log(j);
            _this.http.put(_this.apiUrl + '/fotom/' + "?token=" + _this.token2, datos, { headers: headers })
                .subscribe(function (res) {
                // console.log("ENTRE AL PROVIDER");
                // console.log(res);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiProvider.prototype.editService = function (datos) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            headers.append('Content-Type', 'application/json');
            _this.token = localStorage.getItem('token');
            _this.token = _this.token.split('"');
            _this.token2 = _this.token[1];
            console.log(datos);
            _this.http.put(_this.apiUrl, { headers: headers })
                .subscribe(function (res) {
                // console.log("ENTRE AL PROVIDER");
                console.log(res);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiProvider.prototype.editUser = function (datos) {
        var _this = this;
        // console.log('provider');
        // console.log(datos)
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            headers.append('Content-Type', 'application/json');
            _this.token = localStorage.getItem('token');
            _this.token = _this.token.split('"');
            _this.token2 = _this.token[1];
            // console.log(this.token2);
            _this.http.put(_this.apiUrl + '/user/' + "?token=" + _this.token2, datos, { headers: headers })
                .subscribe(function (res) {
                // console.log("ENTRE AL PROVIDER");
                // console.log(res);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    // Ruta para actualizar los datos del provedor 
    ApiProvider.prototype.editProv = function (datos) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            headers.append('Content-Type', 'application/json');
            _this.token = localStorage.getItem('token');
            _this.token = _this.token.split('"');
            _this.token2 = _this.token[1];
            // console.log(this.token2);
            _this.http.put(_this.apiUrl + '/provedores/' + "?token=" + _this.token2, datos, { headers: headers })
                .subscribe(function (res) {
                // console.log("ENTRE AL PROVIDER");
                // console.log(res);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiProvider.prototype.editInfoServicio = function (datos) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            headers.append('Content-Type', 'application/json');
            _this.token = localStorage.getItem('token');
            _this.token = _this.token.split('"');
            _this.token2 = _this.token[1];
            // console.log(this.token2);
            _this.http.put(_this.apiUrl + '/servicioput/' + "?token=" + _this.token2, datos, { headers: headers })
                .subscribe(function (res) {
                // console.log("ENTRE AL PROVIDER");
                // console.log(res);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    // Ruta para la edicion de informacion del medico
    ApiProvider.prototype.editInfoMedico = function (info) {
        var _this = this;
        console.log(info);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            headers.append('Content-Type', 'application/json');
            _this.token = localStorage.getItem('token');
            _this.token = _this.token.split('"');
            _this.token2 = _this.token[1];
            // console.log(info);
            _this.http.put(_this.apiUrl + '/medico/' + "?token=" + _this.token2, info, { headers: headers })
                .subscribe(function (res) {
                // console.log("ENTRE AL PROVIDER");
                // console.log(res);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiProvider.prototype.confirmacionCuenta = function (info) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            headers.append('Content-Type', 'application/json');
            _this.token = localStorage.getItem('token');
            _this.token = _this.token.split('"');
            _this.token2 = _this.token[1];
            // console.log(info);
            _this.http.put(_this.apiUrl + '/cuenta/' + "?token=" + _this.token2, info, { headers: headers })
                .subscribe(function (res) {
                // console.log("ENTRE AL PROVIDER");
                // console.log(res);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiProvider.prototype.cambioContrasena = function (info) {
        var _this = this;
        // console.log(info);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            headers.append('Content-Type', 'application/json');
            // console.log(info);
            _this.http.put(_this.apiUrl + '/cambioc', info, { headers: headers })
                .subscribe(function (res) {
                // console.log("ENTRE AL PROVIDER");
                // console.log(res);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    // ruta para dar respuestas a los comentarios por parte del medico.
    ApiProvider.prototype.respuestaComentarioMedico = function (info) {
        var _this = this;
        // console.log(info);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            headers.append('Content-Type', 'application/json');
            // console.log(info);
            _this.http.put(_this.apiUrl + '/comentmed', info, { headers: headers })
                .subscribe(function (res) {
                // console.log("ENTRE AL PROVIDER");
                // console.log(res);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__app_global__["a" /* Global */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.js.map

/***/ })

},[401]);
//# sourceMappingURL=main.js.map