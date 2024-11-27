export interface IProduct {
  id: string;
  name: string;
  price: number;
  briefInfo: string;
  fullInfo: string;
  image: string;
}

export interface IProductData {
  products: IProduct[];
}

export interface IProductDataSingle {
  product: IProduct;
  isDetail?: boolean;
}
