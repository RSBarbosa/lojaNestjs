import {  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put, } from "@nestjs/common";
  import { randomUUID } from 'crypto';
import { CriaProdutoDTO } from './dto/CriaProduto.dto';
import { ProdutoEntity } from './produto.entity';
import { ProdutoRepository } from "./produto.repository";
import { AtualizaProdutoDTO } from './dto/atualizaProduto.dto';

@Controller( 'produtos')
export class ProdutoController {

   constructor( private produtoRepository: ProdutoRepository) {}

   @Post()
   async criaNovo(@Body() dadosProduto: CriaProdutoDTO) {
    const produto = new ProdutoEntity(); 

    produto.id = randomUUID();
    produto.nome = dadosProduto.nome;
    produto.usuarioId = dadosProduto.usuarioId;
    produto.valor = dadosProduto.valor;
    produto.quantidade = dadosProduto.quantidade;
    produto.descricao = dadosProduto.descricao;
    produto.categoria = dadosProduto.categoria;
    produto.caracteristicas = dadosProduto.caracteristicas;
    produto.imagens = dadosProduto.imagens;


     const produtoCadastrado = this.produtoRepository.salva(produto);
     return produtoCadastrado;
   }
 
   @Get()
   listaTodos() {
     return this.produtoRepository.listaTodos();
   }
 }