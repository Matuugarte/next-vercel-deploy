import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";
import { LightLayout } from "../components/layouts/LightLayout";

export default function AboutPage() {
  return (
    <>
      <h1>About Page</h1>

      <h1 className={"title"}>
        {/* Ir a <a href="/">Home</a> */}
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className={"description"}>Bienvenidos a la About Page</p>
      <p>
        <code className={"code"}>pages/about.jsx</code>
      </p>
    </>
  );
}

AboutPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <LightLayout>{page}</LightLayout>
    </MainLayout>
  );
};
