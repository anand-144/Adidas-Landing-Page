import {
  CustomerReviwes,
  Hero,
  Footer,
  PopularProducts,
  Services,
  SpecialOffers,
  Subscribe,
  SuperQuality,
} from "./sections";

import Nav from "./components/Nav";

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-1 wide:padding-r padding-b"><Hero /></section>
    <section className="padding"><PopularProducts/></section>
    <section className="padding"><SuperQuality/></section>
    <section className="padding-x py-10x"><Services/></section>
    <section className="padding"><SpecialOffers/></section>
    <section className="padding bg-pale-blue"><CustomerReviwes/></section>
    <section className="padding-x sm:py-32 py-16 w-full"><Subscribe/></section>
    <section className="padding-x padding-t pb-8 bg-black"><Footer/></section>
  </main>
);

export default App;
