import mention from "../mention.json";

function Mention() {
  return (
    <div className="bg-beige text-xl font-semibold p-7">
      <h1 className="text-2xl">{mention.title}</h1>
      <br />
      <p>{mention.date}</p>
      <p>{mention.texte1}</p>
      <br />
      <h2 className="text-2xl">{mention.subtitle1}</h2>
      <br />
      <p>{mention.texte2}</p>
      <br />
      <h3 className="text-2xl">{mention.subtitle3}</h3>
      <br />
      <p>{mention.texte3}</p>
      <br />
      <h4 className="text-2xl">{mention.subtitle4}</h4>
      <br />
      <p>{mention.texte4}</p>
      <br />
      <h5 className="text-2xl">{mention.subtitle5}</h5>
      <br />
      <p>{mention.texte5}</p>
      <br />
    </div>
  );
}

export default Mention;
