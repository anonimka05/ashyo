export interface ProductType {
  ProductsItem: any[];
  brendId: number;
  categoryId: number;
  description: string;
  id: number;
  image: string;
  name: string;
}

export interface ProductPageType {
  title: string;
  API: string;
  extraClass?: string;
}

export interface ProductItemType {
  ProductOptions: any[];
  colorId: number;
  id: number | string;
  name: string;
  image: string;
  price: number;
  productId: number;
  quantity: number;
}

export interface ProductTypeV2 {
  brand_id: string;
  category: {};
  category_id: string;
  comments: any[];
  createdAt: string;
  description: string;
  id: number;
  image: string;
  is_aksiya: boolean;
  like: any[];
  name: string;
  nasiya: string;
  price: number;
  product_item: any;
  rating: number;
  summary: string;
  updatedAt: string;
}
