import { Body, Controller, Delete, Get, HttpException, NotFoundException, Param, ParseIntPipe, Post, Put, Query, UseGuards, ValidationPipe } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { updateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';
import { BeltGuard } from 'src/belt/belt.guard';


@Controller('ninjas')
export class NinjasController {
    constructor(private readonly ninjaService:NinjasService ){}
    @Get()
    getNinjas(@Query('weapon') weapon:'star'|'shurik'){
        // const service = new NinjasService()
        return this.ninjaService.getNinjas(weapon)

    }

    @Post()
    @UseGuards(BeltGuard)
    createNinja(@Body(new ValidationPipe()) ninja:CreateNinjaDto){
        try {
            return this.ninjaService.createNinja(ninja)
        } catch (error) {
            
            
        }
        

    }

    @Get(':id')
    getANinja(@Param('id',ParseIntPipe) id :number){
        try {
            return this.ninjaService.getNinja(id)
            
        } catch (error) {
            throw new NotFoundException();
        } 
    
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
