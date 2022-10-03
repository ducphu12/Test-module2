export interface Manage<T>{
    add(t:T)
    findByName(name:string)
   findById(id:number)
    deleteById(id:number)

}