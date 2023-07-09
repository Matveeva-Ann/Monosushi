import { IGoodsResponse } from "../goodsInterface/goods-interface";

export interface IOrderRequest {
  numberDevices: string,
  trainingHolders?: string,
  paymentMethod: string,
  methodDelivery: string,
  advance: boolean,
  userName: string,
  userPhone: string,
  address: string,
  deliveryDate: string,
  deliveryInterval: string,
  callMe: string,
  userComment: string,
  commentKitchen: string,
  orderProducts: Array<IGoodsResponse>,
  priseProd?: any,
  orderStatus: string,
  orderNumber: number,
}

export interface IOrderResponse extends IOrderRequest {
  id: string;
}