import { GifsList } from "./gifs/components/GifsList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { useGifs } from "./gifs/hooks/useGifs"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"

export const GifsApp = () => {
  const { gifsSearches, previousTerms, handleSearch, handleTermClicked } = useGifs()

  return (
    <>
      < CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gif que desees" />

      < SearchBar placeholder="Busca lo que quieras" onQuery={handleSearch} />

      < PreviousSearches searches={previousTerms} onLabelCliecked={handleTermClicked} />

      < GifsList gifs={gifsSearches} />

    </>
  )
}