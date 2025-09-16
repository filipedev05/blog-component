import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog-component',
  imports: [FormsModule],
  templateUrl: './blog-component.html',
  styleUrl: './blog-component.css'
})
export class BlogComponent {
  provas = [
    {
      titulo: 'Prova de Matemática',
      autor: 'Professor João da Silva',
      dataPublicacao: '21/10/2024',
      conteudo: 'Esta prova aborda conceitos fundamentais da matemática...',
      likes: 0,
      comentarios: [] as string[]
    },
    {
      titulo: 'Prova de Português',
      autor: 'Professora Maria Lima',
      dataPublicacao: '10/09/2024',
      conteudo: 'A avaliação explora a interpretação de textos...',
      likes: 0,
      comentarios: [] as string[]
    },
    {
      titulo: 'Prova de História',
      autor: 'Professor Carlos Alberto',
      dataPublicacao: '05/08/2024',
      conteudo: 'A prova trata dos principais eventos da Revolução Francesa...',
      likes: 0,
      comentarios: [] as string[]
    }
  ];
  
  
  selecionada: any = null;

  contador: number = 0;
  incrementar() {
    this.contador++;
  }

  
  
  comentario='';
  comentar() {
    `Comentário: ${this.comentario}`
  }


  lista: string[] = [];
    adicionarItem(event: any) {
      this.lista.push(event.target.value);
        event. target. value = '';
    }

  
}
