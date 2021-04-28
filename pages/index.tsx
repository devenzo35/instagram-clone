import { Cards } from "../components/Cards";
import { Navbar } from "../components/Navbar";
import { Stories } from "../components/Stories";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <Stories />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </div>
  );
}
