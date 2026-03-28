import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Avatar />
      <Intro />
      <Skilllist />
    </div>
  );
}
function Avatar() {
  const style = {
    borderRadius: "10px",
    width: "300px",
  };
  return (
    <div>
      <img style={style} src="image.webp" alt="" />
    </div>
  );
}
function Intro() {
  const style = {
    fontFamily: "Poppins",
    fontSize: "20px",
  };
  return (
    <p style={style}>
      Helo, my name is Sabrine. I am a passionate web development student with a
      strong interest in buildung modern and interactive web applications. I
      enjoy working with technologies like HTML, CSS, Javascript, and React My
      goal is to become a professional software developpe and gain international
      experience. I am always eager to learn new skills and improve myself
    </p>
  );
}

function Skilllist() {
  return (
    <div>
      <Skill />
    </div>
  );
}
function Skill() {
  const style = {
    fontSize: "16px",
    marginLeft: "5px",
    paddingLeft: "5px",
  };
  return (
    <div>
      <span style={style} className="python">
        Python <a href="">💪</a>
      </span>
      <span style={style} className="React">
        React Js <a href="">🏋🏻‍♂️</a>
      </span>
      <span style={style} className="html">
        HTML & CSS <a href="">💪</a>
      </span>
      <span style={style} className="javascript">
        Javascript <a href="">💡</a>
      </span>
      <span style={style} className="github">
        Git & GitHub <a href="">🏋🏻💪🏻</a>
      </span>
    </div>
  );
}
