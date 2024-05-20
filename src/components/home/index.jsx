import { add } from "../../utils/add";

 export function Home() {
    const a = 2
    const b = 13
  return (
    <section>
      <div className="container">
        <h1>Home</h1>
        <h2> 
            a - b = {add(a, b)} and {a} - {b} = {a - b} {a - b > 0 ? "positive" : "negative"}
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eaque
          voluptatum facere!
        </p>
      </div>
    </section>
  );
}

export default Home;
