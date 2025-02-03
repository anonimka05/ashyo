import Products from "@/components/Products";
import Brend from "@/modules/Brend/Brend";
import EnjoyMusic from "@/modules/EnjoyMusic";
import CategoryMenu from "@/modules/CategoryMenu";
import Hero from "@/modules/Hero/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Brend />
      <Products
        extraClass="hidden sm:block"
        title="Most popular product"
        API="/product-item"
      />
      <Products
        extraClass="hidden sm:block"
        title="Most popular product"
        API="/product-item"
      />
      <Products title="Most popular product" API="/product-item" />
      <CategoryMenu />
      <Products title="On-sale Products" API="/product-item" />
      <EnjoyMusic />
      <Products title="Last seen products" API="/product-item" />
    </>
  );
}
