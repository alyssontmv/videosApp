import { map, catchError } from 'rxjs/operators';
import { IListaSeries } from './../models/ISerieAPI.model';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SerieService {
  lingua = 'pt-BR';
  regiao = 'BR';

  private apiURL = 'https://api.themoviedb.org/3/';
  private key = '?api_key=53d3b7828776bdc3726ff771050ab5b2';

  constructor(private http: HttpClient, public toastController: ToastController) { }

  buscarSeries(busca: string): Observable<IListaSeries>{
    const url = `${this.apiURL}search/tv${this.key}&language=${this.lingua}&region=${this.regiao}&query=${busca}`;
    return this.http.get<IListaSeries>(url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  async exibirErro(erro){
    const toast = await this.toastController.create({
      message: 'Erro ao consultar a API',
      duration: 2000,
      color: 'danger',
      position: 'middle'
    });
    toast.present();
    return null;
  }
}
