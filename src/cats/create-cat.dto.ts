/* 
    DTO(数据传输对象)模式
    DTO是一个对象，定义数据如何通过网络发送的。
    我们可以使用简单的类来确定DTO模式
*/
export class CreateCatDto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}
