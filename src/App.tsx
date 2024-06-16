
import UserProfile from "./cmps/UserProfile";
import LandingPage from "./pages/LandingPage";
import "./styles/styles.scss";

function App() {
  return (
    <section className="app-container">
      <LandingPage/>
    <UserProfile />
  </section>
  );
}

export default App;
