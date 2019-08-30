import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController ,Loading,
  LoadingController, IonicApp } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import {ApiProvider} from '../../providers/api/api';
import {Global} from '../../app/global';
import { HomePage } from '../home/home';

/**
 * Generated class for the AgregarBeneficiarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregar-beneficiario',
  templateUrl: 'agregar-beneficiario.html',
})
export class AgregarBeneficiarioPage {
  private datos : FormGroup;
  private datosMascota : FormGroup;
  private datosSinCuenta : FormGroup;
  private datosConCuenta : FormGroup;
  beneParentesco;
  parentescos;
  paises;
  pSelect = 47;
  loading: Loading;
  mascota;
  sexoMascota;
  esterilizadoMascota;
  load;
  tipoBeneficiario;


  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder,
    private toastCtrl:ToastController, private api:ApiProvider , private global:Global , 
    public loadingCtrl: LoadingController, private app:IonicApp) {


      this.mascota = this.navParams.get('mascota');

      if(!this.mascota){

        this.validacionesBeneficiario();
        this.pais();
        this.obtenerParentescos();

      }else{
        // console.log("aqui");
        this.validacionesMascota();
      }
  }

 
  validacionesMascota(){
    this.datosMascota = this.formBuilder.group({

      nombres:['',[Validators.required,Validators.minLength(2), Validators.maxLength(50)]],
      especie:['',[Validators.required,Validators.minLength(2), Validators.maxLength(50)]],
      raza:['',[Validators.required,Validators.minLength(2), Validators.maxLength(50)]],
      color:['',[Validators.required,Validators.minLength(2), Validators.maxLength(50)]],
      fechaNacimiento:['',[Validators.required]]
    });
  }

  validacionesBeneficiario(){
    this.datos = this.formBuilder.group({

      fecha : ['',[Validators.required]],
      nombre: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(35)]],
      apellido : ['',[Validators.required,Validators.minLength(3),Validators.maxLength(35)]],
    });

    this.datosSinCuenta = this.formBuilder.group({

      identificacion : ['',[Validators.required , Validators.pattern('[0-9]*')]],
      telefono : ['',[Validators.required,Validators.pattern('[0-9]*')]],
      check:[false,[Validators.requiredTrue]],
    });

    this.datosConCuenta = this.formBuilder.group({

      email: ['',[Validators.required,Validators.email,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      telefono : ['',[Validators.required,Validators.pattern('[0-9]*')]],
      identificacion : ['',[Validators.required , Validators.pattern('[0-9]*')]], 
    });

  }


  ionViewDidLoad() {
    
  }

  esterilizado(ev){
    // console.log(ev);
    this.esterilizadoMascota = ev;
  }

  sexo(ev){
    // console.log(ev);
    this.sexoMascota = ev;
  }

  agregarMascota(){

    if(!this.sexoMascota)
    {
      this.presentToast("Por favor elige un sexo para el peludito.")
    }else if(!this.esterilizadoMascota){
      this.presentToast("Por favor selecciona el campo esterilizado.")
    }else if(!this.datosMascota.value.fechaNacimiento){
      this.presentToast("Por favor selecciona una fecha de nacimiento.")
    }else{

      // this.loading = this.loadingCtrl.create({
      //   spinner: 'hide',
      //   content: "Espera un momento<br>estamos guardando información... ",
      // });
      // this.loading.present();
      this.load = true;

      let datos = {especie:this.datosMascota.value.especie, raza:this.datosMascota.value.raza, color:this.datosMascota.value.color, nombre:this.datosMascota.value.nombres, sexo:this.sexoMascota , fechan:this.datosMascota.value.fechaNacimiento, esteril: this.esterilizadoMascota , id_usu:this.global.id_usuario};
      // console.log(datos);

      this.api.postMascota(datos).then((res)=>{
        if(res === true){
        //  this.loading.dismiss();
        this.load = false;
         this.presentToast("Peludito agregado con exito");
         this.navCtrl.setRoot(HomePage);
        }else{
          // this.loading.dismiss();
          this.load = false;
          this.presentToast("Error al agregar peludito");
        }
     },(err)=>{
      // this.loading.dismiss();
      this.load = false;
       this.presentToast("Error en la conexion, intentalo mas tarde");
     });

    } 
  }

  obtenerParentescos(){
    // this.loading = this.loadingCtrl.create({
    //   spinner: 'hide',
    //   content: "Espera un momento<br>estamos cargando parentescos... ",
    // });
    // this.loading.present();
    this.load = true;

     this.api.getParentesco().subscribe((data)=>{
      this.parentescos = data;
      // this.loading.dismiss();
      this.load = false;
      // console.log(data);
    },
    (err)=>{
      this.load = false;
      // console.log(err);
    });
  }

  ionViewDidLeave(){

    const overlayView = this.app._overlayPortal._views[0];
    if (overlayView && overlayView.dismiss) {
    overlayView.dismiss();// cerrará los modales, alertas, etc
    } 
  }

  goToBack(){
    this.navCtrl.pop();
  }

  parentesco(ev){
    this.beneParentesco = ev;
    // console.log(this.beneParentesco);
  }

 
  datosBeneficiario(bol){

      var datos;

    if(bol === true) {

       datos = {fecha_n:this.datos.value.fecha , nomb: this.datos.value.nombre , apellidos : this.datos.value.apellido,
       ident: this.datosConCuenta.value.identificacion , parent:this.beneParentesco , pais:this.pSelect , id_usu:this.global.id_usuario,
       tel:this.datosConCuenta.value.telefono, email: this.datosConCuenta.value.email, cuenta : bol};

       console.log(datos);

    } else {
      
      datos = {fecha_n:this.datos.value.fecha , nomb: this.datos.value.nombre , apellidos : this.datos.value.apellido, ident: this.datosSinCuenta.value.identificacion, cuenta : bol,
        parent:this.beneParentesco , tel:this.datosSinCuenta.value.telefono, pais:this.pSelect, id_usu:this.global.id_usuario};
      console.log(datos);
    }

    this.api.postBeneficiario(datos).then((res)=>{
      console.log(res);
      if (res === true){
        // this.loading.dismiss();
        this.load = false;
        this.presentToast("Beneficiario agregador con exito");
        this.navCtrl.setRoot(HomePage);
      }else{
        // this.loading.dismiss();
        this.load = false;
        this.presentToast("No se pudo agregar el beneficiario, intentalo más tarde");
      }
    },
    (err)=>{
      // console.log(err);
      // this.loading.dismiss();
      this.load = false;
      this.navCtrl.pop();
      this.presentToast("Error en la conexión, intentalo más tarde");
    });
  }

  pais(){
    this.load = true;
    this.api.getPais().subscribe((data)=>{
      this.load = false;
      this.paises = data;
      // console.log(this.paises);
    },(err)=>{
      this.load = false;
      // console.log(err);
    });
  }

  paisSelect(ev){
    this.pSelect = ev;
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

  fechaNacimiento() {
    // console.log(this.datos.value.fecha);

    let fecha1 = moment(this.datos.value.fecha); //fecha de nacimiento
    let today = moment(new Date().toISOString()).format('YYYY-M-DD');
    let fecha2 = moment(today);  //fecha actual
    let years = fecha2.diff(fecha1, 'years');
    console.log(years);

    if((years > 18 && years < 65 )) {
      console.log('aqui');
      this.tipoBeneficiario = true;
    } else {
      console.log('aca');
      this.tipoBeneficiario = false;
    }
  }

}
