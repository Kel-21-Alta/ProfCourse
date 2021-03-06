import Jumbotron from "parts/Jumbotron";
import Kursus from "parts/Kursus";
import Spesialisasi from "parts/Spesialisasi";
import Footer from "parts/Footer";
import { useEffect } from "react";

export default function HomePage(props) {
  useEffect(() => {
    window.scroll(0, 0);
    document.title = "Profcourse | Beranda";
  });
  return (
    <>
      <Jumbotron></Jumbotron>
      <Kursus></Kursus>
      <Spesialisasi></Spesialisasi>
      <Footer></Footer>
    </>
  );
}

// export async function getServerSideProps({ req }) {
//   const { token } = req.cookies;
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const history = useHistory();
//   if (!token) {
//     return history.push("/masuk");
//   }
// }
