import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { updateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';


@Controller('ninjas')
export class NinjasController {
    constructor(private readonly ninjaService:NinjasService ){}
    @Get()
    getNinjas(@Query('weapon') weapon:'star'|'shurik'){
        // const service = new NinjasService()
        return this.ninjaService.getNinjas(weapon)

    }

    @Post()
    createNinja(@Body() ninja:CreateNinjaDto){
        return this.ninjaService.createNinja(ninja)

    }

    @Get(':id')
    getANinja(@Param('id') id :string){
        return this.ninjaService.getNinja(+id)
    
    }

    @Put(':id')
    updateNinja(@Param('id') id:string,@Body() updatninja:updateNinjaDto){
        return this.ninjaService.updateNinja(+id,updatninja)
    }

    @Delete(':id')
    deleteNinja(@Param('id') id:string){
        return this.ninjaService.removeNinja(+id)
    }
}
