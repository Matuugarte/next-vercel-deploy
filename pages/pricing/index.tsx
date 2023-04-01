import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";

export default function PricingPage() {
  return (
    <MainLayout>
      <h1>Pricing Page</h1>

      <h1 className={"title"}>
        Ir a <Link href="/">Home</Link>
      </h1>

      <p classname={"description"}>Bienvenidos a la Pricing Page</p>
      <p>
        <code classname={"code"}>pages/pricing/index.jsx</code>
      </p>
    </MainLayout>
  );
}