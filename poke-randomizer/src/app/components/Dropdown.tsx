import React from 'react'

const Dropdown = () => {
  return (
        <button className="group relative bg-gray-200 px-4 rounded text-black py-2 hover:bg-gray-300">
            Generation
            <div className="absolute bg-gray-200 top-full right-0 rounded-lg p-4 mt-1 shadow-md scale-y-0 group-focus:scale-y-100 origin-top duration-200">
                <a className="active">Gen 1</a>
                <a>Gen 2</a>
                <a>Gen 3</a>
                <a>Gen 4</a>
                <a>Gen 5</a>
                <a>Gen 6</a>
                <a>Gen 7</a>
                <a>Gen 8</a>
                <a>Gen 9</a>
            </div>
        </button>
  )
}

export default Dropdown