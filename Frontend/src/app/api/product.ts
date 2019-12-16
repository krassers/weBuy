export interface Product {
  id?: number;
  name: string;
  description?: string;
  sellingPrice?: number;
  purchasePrice?: number;
  status?: string;
  pictureUrl?: string;
  supplierId?: number;
  customerId?: number;
}
