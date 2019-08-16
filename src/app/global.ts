import { Injectable } from '@angular/core';

@Injectable()
export class Global {
  public login:boolean = false;
  public id_usuario;
  public admin:boolean=false;
  // public apiUrl ='http://192.168.2.102:3000';
  // public apiUrl = 'http://cdn.prevenirexpress.com:3000';
  // API MAC
  public apiUrl = 'http://192.168.2.105:3000';
  public infoPerfil={};
  public foto;
  public nombre;
  public medico:boolean=false;
  // public nombres; 
}
