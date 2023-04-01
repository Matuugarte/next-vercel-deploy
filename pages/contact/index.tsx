import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";

export default function ContactPage() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>

      <h1 className={"title"}>
        {/* Ir a <a href="/">Home</a> */}
        Ir a <Link href="/">Home</Link>
      </h1>

      <p classname={"description"}>Bienvenidos a la Contact Page</p>
      <p>
        <code classname={"code"}>pages/contact/index.jsx</code>
      </p>
    </MainLayout>
  );
}
