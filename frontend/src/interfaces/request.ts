import { IAddress } from './address';

export interface IRequest {
  id: number;
  clientName: string;
  deliveryAddress: IAddress;
  status: RequestStatus;
  userId: number;
}

export interface ICreateRequest {
  clientName?: string;
  deliveryAddressId?: number;
}

export interface IUpdateRequest {
  clientName?: string;
  deliveryAddressId?: number;
  status?: RequestStatus;
}

export const RequestStatus = {
  awaiting: 'awaiting',
  cancelled: 'cancelled',
  production: 'production',
  delivery: 'delivery',
  completed: 'completed',
};

type StatusTranslate = {
  [key in RequestStatus]: string;
};

export const StatusTranslate: StatusTranslate = {
  awaiting: 'Aguardando',
  cancelled: 'Cancelado',
  production: 'Em produção',
  delivery: 'Entrega',
  completed: 'Finalizado',
};

export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus];
