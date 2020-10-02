import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Task extends Entity {
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
  })
  description?: string;

  @property({
    type: 'string',
    required: true,
  })
  created: string;

  @property({
    type: 'string',
    required: true,
  })
  author_id: string;

  @property({
    type: 'number',
    required: true,
  })
  planTime: number;

  @property({
    type: 'number',
    default: 0,
  })
  factTime?: number;

  @property({
    type: 'string',
    required: true,
  })
  status: string;

  @property({
    type: 'string',
  })
  deadline?: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  files?: string[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  participants?: string[];

  @property({
    type: 'string',
    required: true,
  })
  section: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Task>) {
    super(data);
  }
}

export interface TaskRelations {
  // describe navigational properties here
}

export type TaskWithRelations = Task & TaskRelations;
