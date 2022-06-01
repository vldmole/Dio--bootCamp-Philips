import { Observable } from "rxjs";

//-----------------------------------------------------
export interface IEntity<T_id>
{
   id: T_id
}

//-----------------------------------------------------
export interface IRetrieveAll<T>
{
   retrieveAll(): Observable<T[]>;
}

//-----------------------------------------------------
export interface IFindById<T_id, T extends IEntity<T_id>>
{
   findById(id: T_id): Observable<T>;
}

//-----------------------------------------------------
export interface ISave<T>
{
   save(entity: T): Observable<T>;
}   

//-----------------------------------------------------
export interface IDeleteById<T_id, T extends IEntity<T_id>>
{
   deleteById(id: T_id): Observable<T>;
}

//-----------------------------------------------------
export abstract class EntityService<T_id, T extends IEntity<T_id>>
   implements
   IRetrieveAll<T>,
   IFindById<T_id, T>,
   ISave<T>,
   IDeleteById<T_id, T>
{
   abstract retrieveAll(): Observable<T[]>
   
   abstract findById(id: T_id): Observable<T>
   
   abstract save(entity: T): Observable<T>
   
   abstract deleteById(id: T_id): Observable<T>
}