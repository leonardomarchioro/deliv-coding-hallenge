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

export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus];
