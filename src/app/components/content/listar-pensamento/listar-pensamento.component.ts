import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];
  currentPage: number = 1;
  haMaisPensamentos: boolean = true;
  filter: string = '';

  constructor(private service: PensamentoService) {}

  ngOnInit(): void {
    this.service.listar(this.currentPage, this.filter).subscribe((data) => {
      this.listaPensamentos = data;
    });
  }

  carregarMaisPensamentos() {
    this.service.listar(++this.currentPage, this.filter).subscribe((data) => {
      this.listaPensamentos.push(...data);
      if (!data.length) {
        this.haMaisPensamentos = false;
      }
    });
  }

  pesquisarPensamentos() {
    this.haMaisPensamentos = true;
    this.currentPage = 1;
    this.service.listar(this.currentPage, this.filter).subscribe((data) => {
      this.listaPensamentos = data;
    });
  }
}
