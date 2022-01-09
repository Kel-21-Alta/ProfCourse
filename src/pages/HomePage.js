import Navbar from "parts/Navbar";
import Jumbotron from "parts/Jumbotron";
import Kursus from "parts/Kursus";
import Spesialisasi from "parts/Spesialisasi";
import Footer from "parts/Footer";

export default function HomePage(props) {
  return (
    <>
      <Navbar {...props}></Navbar>
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
