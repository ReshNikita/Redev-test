import logo from "./logo.svg";
import "./App.css";
import PostSection from "./Components/PostSection";
import ClassPost from "./Components/ClassPost";
import RedevText from "./Components/RedevText";
import PersonalIfo from "./Components/PersonalIfo";

const additionalIfo = {
  email: "rieshietnikov.nikita.1998@mail.ru",
  email2: "nikitareshetnikov03@gmail.com",
};

function closureExample(word1) {
  return function closureExample2(word2) {
    return word1 + "" + word2;
  };
}

let sentence = closureExample("Redev is the ");

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Just getting started, Pasha:)</h1>
        <PostSection
          title="Apple introduces the new HomePod with breakthrough sound and
        intelligence"
          text="Delivering incredible audio quality, enhanced Siri capabilities, and a
        safe and secure smart home experience. CUPERTINO, CALIFORNIA -
        Apple today announced HomePod (2nd generation), a powerful smart
        speaker that delivers next-level acoustics in a gorgeous, iconic
        design. Packed with Apple innovations and Siri intelligence, HomePod
        offers advanced computational audio for a groundbreaking listening
        experience, including support for immersive Spatial Audio tracks. With
        convenient new ways to manage everyday tasks and control the smart
        home, users can now create smart home automations using Siri, get
        notified when a smoke or carbon monoxide alarm is detected in their
        home, and check temperature and humidity in a room — all hands-free."
          text2="The new HomePod is available to order online and in the Apple Store
        app starting today, with availability beginning Friday, February 3.
        “Leveraging our audio expertise and innovations, the new HomePod
        delivers rich, deep bass, natural mid-range, and clear, detailed
        highs,” said Greg Joswiak, Apple’s senior vice president of Worldwide
        Marketing. “With the popularity of HomePod mini, we’ve seen growing
        interest in even more powerful acoustics achievable in a larger
        HomePod. We’re thrilled to bring the next generation of HomePod to
        customers around the world.”"
        />
        <PostSection
          title="In celebration of Black History Month, Apple releases new Black Unity collection and content"
          text="Apple commemorates Black History Month with exclusive content and curated launches celebrating Black culture and community. Starting today, customers can show their support with this year’s Black Unity Collection, which includes a special-edition Apple Watch Black Unity Sport Loop, alongside a new matching watch face and iPhone wallpaper. Beginning in February, all-new activations — including a series of Apple Maps Guides created by the Smithsonian, TV and film collections curated by Dr. Jelani Cobb, and more will be available to explore. Additionally, through its Racial Equity and Justice Initiative (REJI), Apple is expanding its support of five organizations focused on uplifting Black and Brown communities by unlocking creative potential through technology.  "
        />
        <PostSection
          title="Apple unveils MacBook Pro featuring M2 Pro and M2 Max, with more game-changing performance and the longest battery life ever in a Mac"
          text="CUPERTINO, CALIFORNIA Apple today announced the new 14- and 16-inch MacBook Pro featuring M2 Pro and M2 Max, Apple’s next-generation pro silicon that brings even more power-efficient performance and battery life to pro users. With M2 Pro and M2 Max — the world’s most powerful and efficient chip for a pro laptop — MacBook Pro tackles demanding tasks, like effects rendering, which is up to 6x faster than the fastest Intel-based MacBook Pro, and color grading, which is up to 2x faster.1 Building on the unprecedented power efficiency of Apple silicon, battery life on MacBook Pro is now up to 22 hours — the longest battery life ever in a Mac.2 For enhanced connectivity, the new MacBook Pro supports Wi-Fi 6E,3 which is up to twice as fast as the previous generation, as well as advanced HDMI, which supports 8K displays for the first time. With up to 96GB of unified memory in the M2 Max model, creators can work on scenes so large that PC laptops can’t even run them.4 Rounding out the unrivaled features of MacBook Pro are its renowned Liquid Retina XDR display, extensive array of connectivity, 1080p FaceTime HD camera, six-speaker sound system, and studio-quality mics. When combined with macOS Ventura, the MacBook Pro user experience is unrivaled. Customers can order the new 14- and 16-inch MacBook Pro today, with availability beginning Tuesday, January 24."
          text2="“MacBook Pro with Apple silicon has been a game changer, empowering pros to push the limits of their workflows while on the go and do things they never thought possible on a laptop,” said Greg Joswiak, Apple’s senior vice president of Worldwide Marketing. “Today the MacBook Pro gets even better. With faster performance, enhanced connectivity, and the longest battery life ever in a Mac, along with the best display in a laptop, there’s simply nothing else like it.”"
        />
        <ClassPost
          title={
            "Apple unveils M2 Pro and M2 Max: next-generation chips for next-level workflows"
          }
          text={
            "CUPERTINO, CALIFORNIA Apple today announced M2 Pro and M2 Max, two next-generation SoCs (systems on a chip) that take the breakthrough power-efficient performance of Apple silicon to new heights. M2 Pro scales up the architecture of M2 to deliver an up to 12-core CPU and up to 19-core GPU, together with up to 32GB of fast unified memory. M2 Max builds on the capabilities of M2 Pro, including an up to 38-core GPU, double the unified memory bandwidth, and up to 96GB of unified memory. Its industry-leading performance per watt makes it the world’s most powerful and power-efficient chip for a pro laptop. Both chips also feature enhanced custom technologies, including a faster 16-core Neural Engine and Apple’s powerful media engine. M2 Pro brings pro performance to Mac mini for the first time, while M2 Pro and M2 Max take the game-changing performance and capabilities of the 14-inch and 16-inch MacBook Pro even further."
          }
          text2={`“Only Apple is building SoCs like M2 Pro and M2 Max. They deliver incredible pro performance along with industry-leading power efficiency,” said Johny Srouji, Apple’s senior vice president of Hardware Technologies. “With an even more powerful CPU and GPU, support for a larger unified memory system, and an advanced media engine, M2 Pro and M2 Max represent astonishing advancements in Apple silicon.”`}
        />
        <RedevText />
      </header>
      <section className="propsTasks">
        <PersonalIfo
          age={24}
          name={"Nikita Reshetnikov"}
          additionalIfo={additionalIfo.email}
          sentence={sentence("best!")}
        ></PersonalIfo>
      </section>
    </div>
  );
}

export default App;
