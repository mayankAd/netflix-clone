import Hero from "./components/Hero/Hero";
import Section_two from "./components/section2/Section_two";
import Question_section from "./components/question_section/Question_section";
import styles from "./App.css"
const App = () => {
  return (
    <div className="main">
    <Hero>
    </Hero>
    <Section_two heading="Enjoy on your TV" paragraph ="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more." imagePath ={"images/tv.png"} isLeft={true}/>
    <Section_two heading= "Download your shows to watch offline" paragraph ="Save your favourites easily and always have something to watch." imagePath ={"images/mobile-0819.jpg"}/>
    <Section_two heading="Watch everywhere" paragraph="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV." imagePath={"images/device-pile-in.png"} isLeft={true}/>
    <Section_two heading="Create profiles for kids" paragraph="Send children on adventures with their favourite characters in a space made just for them—free with your membership." imagePath={"images/children.png"}/>
    <Question_section/>
    </div>
  );
};

export default App;



