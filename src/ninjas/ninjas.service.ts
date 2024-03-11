import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { updateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NinjasService {
    private ninjas =[
        {id:0,name:'mahendar',weapon:'star'},
        {id:1,name:'mehul',weapon:'shurik'}
    ]
    getNinjas(weapon?: 'star'|'shurik'){
        if(weapon){
            return this.ninjas.filter((ninja)=>ninja.weapon===weapon)
        }
        return this.ninjas
    }
    getNinja(id:number){
        const ninja = this.ninjas.find((ninj)=>ninj.id===id)

        if(!ninja){
            throw new Error('ninja not found')
        }
        return ninja
    }
    createNinja(creatninja:CreateNinjaDto){
        const newNinja = {
            ...creatninja,
            id:Date.now()
        }
        this .ninjas.push(newNinja)
        return newNinja
    }
    updateNinja(id:number,updateNinja:updateNinjaDto){
        this.ninjas = this.ninjas.map((ninja)=>{
            if (ninja.id===id){
                return{...ninja,...updateNinja}
            }
            return ninja

        })
        return this.getNinja(id)
    }

    removeNinja(id:number){
        const toBeRemoved = this.getNinja(id);
        this.ninjas = this.ninjas.filter((ninja)=> ninja.id!==id)
        return toBeRemoved
    }
    
}
