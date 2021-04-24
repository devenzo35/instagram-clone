import { Cards } from "../components/cards";
import { Navbar } from "../components/Navbar";
import { Stories } from "../components/Stories";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Stories />
      <Cards />
    </div>
  );
}
