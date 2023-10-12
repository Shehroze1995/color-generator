import { useState } from "react";
import Values from "values.js";
import "./index.css";
import { SingleColor } from "./components/SingleColor";
import { Footer } from "./components/Footer";

function App() {
  const [color, setColor] = useState("");
  const [list, setList] = useState(new Values('#ff0000').all(10));

  const showColor = (e) => {
    e.preventDefault();
    try {
      setList(new Values(color).all(10));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-6">Color Generator</h1>
      <form
        onSubmit={showColor}
        className="w-[95%] m-auto max-w-lg flex justify-evenly flex-wrap items-center gap-2"
      >
        <input onChange={(e)=>{
          setColor(e.target.value)
        }} type="color" className="w-12 h-12"/>
        <input
          type="text"
          placeholder="#222"
          required
          value={color}
          pattern="[#]{1}[0-9a-z]{3,}"
          title="Kindly add hex code only"
          onChange={(e) => setColor(e.target.value)}
          className="border border-gray-400 rounded focus:outline-blue-400 px-2 py-1"
        />
        <button className="bg-orange-300 font-bold py-1 px-4">Generate</button>
      </form>
      <section className="flex flex-wrap w-[95%] max-w-2xl m-auto justify-center my-8">
        {list.map((item, index) => {
          return (
            <SingleColor
              key={index}
              index={index}
              {...item}
              hexColor={item.hex}
            />
          );
        })}
      </section>
      <Footer/>
    </div>
  );
}

export default App;
