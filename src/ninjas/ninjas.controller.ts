import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';


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
    updateNinja(){
        return {}
    }

    @Delete(':id')
    deleteNinja(){
        return {}
    }
}
