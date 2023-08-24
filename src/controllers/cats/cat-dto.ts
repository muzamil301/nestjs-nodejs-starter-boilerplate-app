
export class CreateCatDto {
  id:number;
  name: string;
  age: string;
  breed: string;
  isActive:boolean;
}

export class UpdateCatDto{

} 

export class ListAllEntities {
  limit:number;
}