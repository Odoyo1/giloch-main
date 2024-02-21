import Header from "@/components/header/header";
import SliderMainPage from "@/components/mainPage/slider";
import Recommended from "@/components/recommended/recommended";

export default function Home()  {
  return <main className="md:max-w-7xl mx-auto p-2">
    <Header/>

    <Recommended/>

    <SliderMainPage/>
  </main>;
}
