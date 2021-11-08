import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	BaseEntity
} from 'typeorm';

@Entity('product')
export class Product extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	image: string;

	@Column()
	price: number;

	@Column()
	title: string;

	@Column()
	category: string;

	@Column()
	description: string;
	@Column({
		type: 'simple-json',
		nullable: true,
	})
	additional_info: {
		in_store: number;
		provider: string;
	};
}
