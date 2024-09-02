import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import Usuario from './usuario.entity';

@Injectable()
export class UsuarioRepository {
  constructor(private prismaService: PrismaService) {}

  async obterTodos() {
    return this.prismaService.usuario.findMany();
  }
  async obterPorId(id: number) {
    return this.prismaService.usuario.findUnique({
      where: {
        id,
      },
    });
  }
  async criar(usuario: Usuario) {
    return this.prismaService.usuario.create({
      data: usuario as any,
    });
  }
  async atualizar(usuario: Usuario) {
    if (!usuario.id) throw new Error('Id não informado');
    return this.prismaService.usuario.update({
      data: usuario as any,
      where: {
        id: usuario.id,
      },
    });
  }
  async deletar(id: number) {
    return this.prismaService.usuario.delete({
      where: {
        id,
      },
    });
  }
}
