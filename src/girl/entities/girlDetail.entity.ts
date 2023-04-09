import {Entity ,OneToOne, Column ,PrimaryGeneratedColumn, JoinColumn} from 'typeorm'
import{ Girl } from './girl.entity'

@Entity()
export class GirlDetail {

  @PrimaryGeneratedColumn()
  id:number

  @Column()
  height:number

  @Column()
  weight:number

  @Column()
  skillName:string

  @OneToOne(()=>Girl)
  @JoinColumn({name:'girl_id'})
  girl:Girl

}