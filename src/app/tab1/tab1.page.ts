import { IGenero } from './../models/IGenero.model';
import { GeneroService } from './../services/genero.service';
import { IFilmeApi, IListaFilmes } from './../models/IFilmeAPI.model';
import { FilmeService } from './../services/filme.service';
import { DadosService } from './../services/dados.service';
import { IFilme } from '../models/IFilme.model';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})

export class Tab1Page implements OnInit{
  //titulo: string = 'Videos App';
  titulo = 'Filmes';

  listaVideos: IFilme[] = [
    {
      nome: 'Mortal combat (2021)',
      lancamento: '15/04/2021',
      duracao: '1h 50m',
      classificacao: 76,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ijvC2w2yANsfgLT3LMu2zFr0fxh.jpg',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      pagina: '/mortal-kombat',
    },
    {
      nome: 'Sem Remorso (2021)',
      lancamento: '30/04/2021',
      duracao: '1h 50m',
      classificacao: 73,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uHEZ4ZMziIjlAgCTQAEh9ROvtj0.jpg',
      generos: ['Ação', 'Aventura', 'Thriller', 'Guerra'],
      pagina: '/sem-remorso',
    },
    {
      nome: 'OS VINGADORES - THE AVENGERS (2012)',
      lancamento: '27/04/2012',
      duracao: '2h 23m',
      classificacao: 85,
      cartaz:
        'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/89/43/82/20052140.jpg',
      generos: ['Ação', 'Aventura', 'Ficção científica'],
      pagina: '/os-vingadores',
    },
    {
      nome: 'GODZILLA VS KONG (2021)',
      lancamento: '30/04/2021',
      duracao: '1h 54m',
      classificacao: 80,
      cartaz:
        'https://br.web.img2.acsta.net/c_310_420/pictures/19/07/04/00/09/0672480.jpg',
      generos: ['Ação', 'Aventura', 'Ficção científica'],
      pagina: '/godzilla-vskong',
    },
    {
      nome: ' Mulher-Maravilha 1984 (2020)',
      lancamento: '17/12/2020',
      duracao: '2h 31m',
      classificacao: 67,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qDA95ebiy3W3m8hTRB3xZNZVVBM.jpg',
      generos: ['Fantasia', 'Ação', 'Aventura'],
      pagina: '/mulher-maravilha1984',
    },


  ];

  listaFilmes: IListaFilmes;

  generos: string[] = [];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public filmeService: FilmeService,
    public generoService: GeneroService,
    public route: Router
  ) {}


  buscarFilmes(evento: any){
    console.log(evento.target.value);
    const busca = evento.target.value;
    if (busca && busca.trim() !== ''){
      this.filmeService.buscarFilmes(busca).subscribe(dados => {
        console.log(dados);
        this.listaFilmes = dados;
      });
    }
  }

  //exibirFilme(filme: IFilme) {
  exibirFilme(filme: IFilmeApi) {
    this.dadosService.guardarDados('filme', filme);
    this.route.navigateByUrl('/dados-filme');
  }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      //cssClass: 'my-custom-class',
      header: 'Alerta!',
      message: 'Deseja realmente favoritar o filme?',
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
      message: 'Filme adicionado aos favoritos!',
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
