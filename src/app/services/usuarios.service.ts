import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { usuario } from '../Models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  urlApi = 'http://127.0.0.1:8000/api/users';

  constructor(private http: HttpClient) { }

  getAllUsers(){
    return this.http.get<usuario[]>(this.urlApi);
  }
}
