import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { updateNinjaDto } from './dto/update-ninja.dto';


@Controller('ninjas')
export class NinjasController {
    @Get()
    getNinjas():String{
        return 'in ninjas'

    }

    @Post()
    createNinja(@Body() ninja:CreateNinjaDto):String|CreateNinjaDto{
        return ninja

    }

    @Get(':id')
    getANinja(@Param('id') id :String):String{
        return id
    }

    @Put(':id')
    updateNinja(@Param('id') id:String,@Body() updatninja:updateNinjaDto):String{
        return 'updated sucessfully'
    }

    @Delete(':id')
    deleteNinja(){
        return {}
    }
}
