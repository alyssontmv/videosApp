import { IListaSeries, ISerieApi } from './../models/ISerieAPI.model';
import { Router } from '@angular/router';
import { GeneroService } from './../services/genero.service';
import { SerieService } from './../services/serie.service';
import { DadosService } from './../services/dados.service';
import { AlertController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  titulo = 'Séries';

  // listaVideos: IFilme[] = [
  //   {
  //     nome: 'Mortal combat (2021)',
  //     lancamento: '15/04/2021',
  //     duracao: '1h 50m',
  //     classificacao: 76,
  //     cartaz:
  //       'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ijvC2w2yANsfgLT3LMu2zFr0fxh.jpg',
  //     generos: ['Ação', 'Fantasia', 'Aventura'],
  //     pagina: '/mortal-kombat',
  //   },
  //   {
  //     nome: 'Sem Remorso (2021)',
  //     lancamento: '30/04/2021',
  //     duracao: '1h 50m',
  //     classificacao: 73,
  //     cartaz:
  //       'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uHEZ4ZMziIjlAgCTQAEh9ROvtj0.jpg',
  //     generos: ['Ação', 'Aventura', 'Thriller', 'Guerra'],
  //     pagina: '/sem-remorso',
  //   },
  //   {
  //     nome: 'OS VINGADORES - THE AVENGERS (2012)',
  //     lancamento: '27/04/2012',
  //     duracao: '2h 23m',
  //     classificacao: 85,
  //     cartaz:
  //       'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/89/43/82/20052140.jpg',
  //     generos: ['Ação', 'Aventura', 'Ficção científica'],
  //     pagina: '/os-vingadores',
  //   },
  //   {
  //     nome: 'GODZILLA VS KONG (2021)',
  //     lancamento: '30/04/2021',
  //     duracao: '1h 54m',
  //     classificacao: 80,
  //     cartaz:
  //       'https://br.web.img2.acsta.net/c_310_420/pictures/19/07/04/00/09/0672480.jpg',
  //     generos: ['Ação', 'Aventura', 'Ficção científica'],
  //     pagina: '/godzilla-vskong',
  //   },
  //   {
  //     nome: ' Mulher-Maravilha 1984 (2020)',
  //     lancamento: '17/12/2020',
  //     duracao: '2h 31m',
  //     classificacao: 67,
  //     cartaz:
  //       'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qDA95ebiy3W3m8hTRB3xZNZVVBM.jpg',
  //     generos: ['Fantasia', 'Ação', 'Aventura'],
  //     pagina: '/mulher-maravilha1984',
  //   },


  // ];

  listaSeries: IListaSeries;

  generos: string[] = [];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public serieService: SerieService,
    public generoService: GeneroService,
    public route: Router
  ) {}


  buscarSeries(evento: any){
    console.log(evento.target.value);
    const busca = evento.target.value;
    if (busca && busca.trim() !== ''){
      this.serieService.buscarSeries(busca).subscribe(dados => {
        console.log(dados);
        this.listaSeries = dados;
      });
    }
  }


  exibirSerie(serie: ISerieApi) {
    this.dadosService.guardarDados('serie', serie);
    this.route.navigateByUrl('/dados-serie');
  }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      //cssClass: 'my-custom-class',
      header: 'Alerta!',
      message: 'Deseja realmente favoritar a série?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          //cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'SIM, favoritar!',
          handler: () => {
            //console.log('Confirm Okay');
            this.apresentarToast();
          },
        },
      ],
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Série adicionada aos favoritos!',
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }

  ngOnInit() {
    this.generoService.buscarGeneros().subscribe(dados=>{
      console.log('Generos: ', dados.genres );
      dados.genres.forEach( genero => {
        this.generos[genero.id] = genero.name;
      });
      this.dadosService.guardarDados('generos',this.generos);
    });
  }

}
