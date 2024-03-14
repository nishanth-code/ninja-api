import { IsEnum, MinLength, isEnum } from "class-validator"

export class CreateNinjaDto  {
    @MinLength(3)
    name:string

    
    @IsEnum(['star','shurik','nanchachuk'],{message:'use correct weapon'})
    weapon:string
    


}