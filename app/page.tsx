// import Posts from "./components/Posts";
import HomePage from "./pages/HomePage";
// import "../public/prism.css";

export const revalidate = 86400;

export default function Home() {
  return (
    <div className="mx-auto">
      <HomePage></HomePage>

{/* if you are seeing this so something changes */}
      {/* <Posts /> */}
    </div>
  );
}
