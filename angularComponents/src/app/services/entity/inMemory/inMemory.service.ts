import { Observable } from "rxjs/internal/Observable";
import {EntityService, IEntity} from "../entity.service";

//-----------------------------------------------------------------------------
export interface IIdGenerator<T_id>
{
   newId(): T_id   
}

//-----------------------------------------------------------------------------
export abstract class InMemoryService< T_id, T_entity extends IEntity<T_id> >
   extends EntityService<T_id, T_entity>
{
   readonly entityArray: T_entity[] = new Array<T_entity>();
   
   //-----------------------------------------------------------------------
   constructor(readonly idGenerator: IIdGenerator<T_id>,
               entityArray?: T_entity[])
   {
      super();

      if (entityArray)
         this.entityArray = entityArray;
   }

   //-----------------------------------------------------------------------
   public retrieveAll(): Observable<T_entity[]>
   {
      return new Observable<T_entity[]>( observer =>
      {
         setTimeout(() => observer.next(this.entityArray), 1000);
      });
   }

   //-----------------------------------------------------------------------
   public findById(id: T_id): Observable<T_entity>
   {
      const filtered = this.entityArray.filter((entity: T_entity) => entity.id === id);
      
      return new Observable<T_entity>((observer) =>
      {
         setTimeout(() =>
            filtered.length > 0 ? observer.next(filtered[0])
               : observer.error((`Not Found id:${ id }`))
         , 1000);
      });
   }

   //-----------------------------------------------------------------------
   private add(entity: T_entity): Observable<T_entity>
   {
      entity.id = this.idGenerator.newId();
      this.entityArray.push(entity);
      return new Observable(observer =>
      {
         setTimeout(() => observer.next(entity), 1000)
      })
   }

   //-----------------------------------------------------------------------
   private update(entity: T_entity): Observable<T_entity>
   {
      const index = this.entityArray.findIndex(element => entity.id === element.id);
      
      if (index >= 0)
         this.entityArray[index] = entity;
      
      return new Observable(observer =>
      {
         setTimeout(() => index >= 0 ? observer.next(entity)
            : observer.error(`Not found id: ${entity.id}`), 1000)
      })
   }

   //-----------------------------------------------------------------------
   public save(entity: T_entity): Observable < T_entity >
   {
      console.log('saving', entity);
      if (!entity.id)
         return this.add(entity);
      
      return this.update(entity);
   }

   //-----------------------------------------------------------------------
   public deleteById(id: T_id): Observable<T_entity>
   {
      const index = this.entityArray.findIndex(entity => entity.id === id);
      const entity = this.entityArray[index];

      if (index >= 0)
         this.entityArray.splice(index, 1);
      
      return new Observable(observer =>
      {
         setTimeout(() => index >= 0 ? observer.next(entity)
            : observer.error(`Not found id: ${ entity.id }`), 1000)
      })
   }
   //-----------------------------------------------------------------------
}

