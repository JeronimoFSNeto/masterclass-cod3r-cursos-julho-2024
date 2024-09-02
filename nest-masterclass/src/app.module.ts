import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { TempModule } from './temp/temp.module';
import { UsuarioController } from './usuario/usuario.controller';
import { DbModule } from './db/db.module';
import { UsuarioRepository } from './usuario/usuario.repository';

@Module({
  imports: [UsuarioModule, TempModule, DbModule],
  controllers: [UsuarioController],
  providers: [UsuarioRepository],
  exports: [],
})
export class AppModule {}
