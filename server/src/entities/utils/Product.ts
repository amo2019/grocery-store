import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
} from 'typeorm';

@Entity()
export class Product {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	image: string;

	@Column()
	price: string;

	@Column()
	title: string;

	@Column()
	category: string;

	@Column()
	description: string;
}
