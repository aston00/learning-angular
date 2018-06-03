
// ng g s service_name

/* 

we will need this if only service has dependencies in constructor
import { INjectible} from  '@angular/core';
@Injectable()

*/



export class CoursesService {

    //we use constructor here if only we inject other service
    getCourses(){
        return ['asls', 'asdwqe', 'fsdgfjhkl', 'asduyakodbd'];
    }
}