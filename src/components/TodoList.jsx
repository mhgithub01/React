import '../App.css'



export default function Avatar() {
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const description = "Gregorio Y. Zara";
  return (
    <>
      <h2>Dr.Jhatka</h2>
      <img className="avatar" src={avatar} alt={description} />
    </>
  );
}
