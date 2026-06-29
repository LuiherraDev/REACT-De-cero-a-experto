import { useState } from "react"
import { GifsList } from "./gifs/components/GifsList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"

export const GifsApp = () => {

  const [previousTerms, setPreviousTerms] = useState(['dragon ball']);

  const handleTermClicked = (term: string) => {
    console.log({ term });
  }

  const handleSearch = (query: string) => {
    console.log({ query })
  }

  return (
    <>
      < CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gif que desees" />

      < SearchBar placeholder="Busca lo que quieras" onQuery={handleSearch} />

      < PreviousSearches searches={previousTerms} onLabelCliecked={handleTermClicked} />

      < GifsList gifs={mockGifs} />

    </>
  )
}