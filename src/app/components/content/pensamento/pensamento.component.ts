import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css'],
})
export class PensamentoComponent implements OnInit {
  @Input() pensamento: Pensamento = {
    id: 1,
    conteudo: 'Meu primeiro pensamento',
    autoria: 'Douglas Rangel',
    modelo: 'modelo3',
    favorito: false,
  };

  constructor(private service: PensamentoService) {}

  ngOnInit(): void {}

  larguraPensamento(): string {
    if (
      this.pensamento.conteudo.length >= 256 &&
      this.pensamento.conteudo.length <= 449
    ) {
      return 'pensamento-g';
    } else if (this.pensamento.conteudo.length >= 450) {
      return 'pensamento-gg';
    }

    return 'pensamento-p';
  }

  mudarIconeFavorito(): string {
    if (this.pensamento.favorito) {
      return 'ativo';
    }
    return 'inativo';
  }

  atualizarFavoritos() {
    this.service.mudarFavorito(this.pensamento).subscribe();
  }
}
