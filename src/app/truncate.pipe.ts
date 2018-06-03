import {Pipe, PipeTransform} from '@angular/core';

//We need to apply Pipe Decorator fdunction
@Pipe({
    name: 'truncate' //Word we gonna use in HTML markup
})


//We need to implement PipeTransform interface here
export class TruncatePipe implements PipeTransform{
    //we need to have this function in pipe. First is value we filter, second argument is arguments we pass in pipe
    transform(value: string, limit?: number){
        if(!value){
            return null;
        }

        return value.substring(0, limit) + '...';

    }
}