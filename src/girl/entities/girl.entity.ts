import {Entity , Column ,PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Girl {
  @PrimaryGeneratedColumn()
  id:number

  @Column()
  name:string

  @Column()
  age:number

}
