import Generate from "./components/Generate"

export default function Home() {
  return <div className="center">
    <p>Pokemon Randomizer
      <Generate></Generate>
    </p>

  </div>
}