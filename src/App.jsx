import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Forms from "./components/Forms";
import Card from "./components/Card";
import hero from "./assets/hero.png";
import react from "./assets/react.svg";

const App = () => {
  return (
    <div>
      <Navbar />

      <Card
        Image={hero}
        Title="module 1"
        Description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
        deleniti amet dolorum ipsam? Maiores, nesciunt?"
        Price="500"
        bgcolor="#FFA259"
      />
      <Card
        Image={react}
        Title="module 2"
        Description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        Price="1000"
        bgcolor="#ABD2FA"
      />
      <Forms />
      <Button
        onClick={() => {
          alert("Welcome");
        }}
      >
        Click Here
      </Button>
      <Button
        style={{ background: "red", color: "white" }}
        onClick={() => {
          alert("Hey, Whats up");
        }}
      >
        Click Here
      </Button>

      <Footer />
    </div>
  );
};

export default App;
