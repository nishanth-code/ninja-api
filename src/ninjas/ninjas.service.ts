import { Injectable } from '@nestjs/common';

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
}
