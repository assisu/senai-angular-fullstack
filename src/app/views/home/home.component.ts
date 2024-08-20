import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  public titulo!: string;
  public texto!: string;
  public tituloDestaque!: string;
  public textoDestaque!: string;
  ngOnInit(){
    this.titulo! ='Este é o Título.';
    this.texto! = 'Este é o texto contendo um parágrafo para explicar como funciona uma variável.'
    this.tituloDestaque!= 'Que tal conhecer nossos jogos?'
    this.textoDestaque! = 'Loreoaf fdasijf fspdj fds  fsdpfpd fdsj po fsdpf sdp fjsdf sdp'
  }
  onSubmit(form:NgForm){
    let dados = `
    NOme:${form.value.nome}
    Email: ${form.value.email}
    Senha: ${form.value.password}`;

    console.log(dados);
  }

}
