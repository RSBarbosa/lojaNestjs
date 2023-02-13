import { Controller, Post, Body, Get } from "@nestjs/common";
import { CriaProdutoDTO } from './dto/CriarProduto.dto';
import { ProdutoRepository } from "./produto.repository";

@Controller( '/produtos')
export class ProdutoController {

   constructor( private produtoRepository: ProdutoRepository) {}

   @Post()
   criaNovo(@Body() dadosProduto: CriaProdutoDTO) {
     const produtoCadastrado = this.produtoRepository.salva(dadosProduto);
     return produtoCadastrado;
   }
 
   @Get()
   listaTodos() {
     return this.produtoRepository.listaTodos();
   }
 }