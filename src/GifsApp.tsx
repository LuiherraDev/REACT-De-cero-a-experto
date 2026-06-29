import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"

export const GifsApp = () => {
  return (
    <>
      < CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gif que desees" />

      <div className="search-container">
        <input type="text" placeholder="Buscar gifs" />
        <button>Buscar</button>
      </div>

      <div className="previous-searches">
        <h2>Busquedas previas</h2>
        <ul className="previous-searches-list">
          <li>Goku</li>
          <li>Saitama</li>
          <li>Elden Ring</li>
        </ul>
      </div>

      <div className="gifs-container">
        {
          mockGifs.map((gif) => (
            <div key={gif.id} className="gif-card">
              <img src={gif.url} alt={gif.title} />
              <h3>{gif.title}</h3>
              <p>
                {gif.width}x{gif.height} (1.5mb)
              </p>
            </div>
          ))
        }
      </div>

    </>
  )
}
