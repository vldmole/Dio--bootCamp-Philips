
import { EntityService } from "src/app/shared/services/entity/entity.service";
import { User } from "../models/user-model";


export abstract class UserService extends EntityService<number, User>
{
   //nothing for while
}