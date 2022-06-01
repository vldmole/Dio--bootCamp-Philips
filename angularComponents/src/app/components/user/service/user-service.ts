import { User } from '../model/user.model'
import {EntityService} from '../../../services/entity/entity.service'

export abstract class UserService extends EntityService<number, User>
{
   //nothing for while
}