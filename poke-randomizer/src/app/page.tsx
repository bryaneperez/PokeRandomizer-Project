import Generate from "./components/Generate"
import Dropdown from "./components/Dropdown"

export default function Home() {
  return <div className="center">
    <p>Pokemon Randomizer
      <Generate></Generate>
      <Dropdown></Dropdown>
    </p>
  </div>
}