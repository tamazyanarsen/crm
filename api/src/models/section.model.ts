import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Section extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  project: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Section>) {
    super(data);
  }
}

export interface SectionRelations {
  // describe navigational properties here
}

export type SectionWithRelations = Section & SectionRelations;
