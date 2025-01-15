import React from 'react'

const Dropdown = () => {
  return (
    <div>
        <button className="dropdown">
            Generation
            <div className="dropdownelement">
                <a className="active">Generation 1</a>
                <a>Generation 2</a>
                <a>Generation 3</a>
                <a>Generation 4</a>
                <a>Generation 5</a>
                <a>Generation 6</a>
                <a>Generation 7</a>
                <a>Generation 8</a>
                <a>Generation 9</a>
            </div>
        </button>
    </div>
  )
}

export default Dropdown