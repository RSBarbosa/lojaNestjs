import { Controller, Post, Body } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";

@Controller( '/usuarios')
export class UsuarioController {

   private usuarioRepository = new UsuarioRepository

   @Post( )
   async criaUsuario(@Body( ) dadosDoUsuario) {
     this.usuarioRepository.salvar(dadosDoUsuario)
    return dadosDoUsuario;



  }

 }
