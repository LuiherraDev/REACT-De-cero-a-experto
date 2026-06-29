import { useState } from "react"
import { GifsList } from "./gifs/components/GifsList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action"
import type { Gif } from "./gifs/interfaces/gif.interface"

export const GifsApp = () => {

  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [gifsSearches, setGifsSearches] = useState<Gif[]>(mockGifs)

  const handleTermClicked = (term: string) => {
    console.log({ term });
  }

  const handleSearch = async (query: string = '') => {
    query = query.trim().toLowerCase()

    if (query.length === 0) return

    if (previousTerms.includes(query)) return

    setPreviousTerms([query, ...previousTerms].slice(0, 4))

    const gifs = await getGifsByQuery(query)

    setGifsSearches(gifs)
  }

  return (
    <>
      < CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gif que desees" />

      < SearchBar placeholder="Busca lo que quieras" onQuery={handleSearch} />

      < PreviousSearches searches={previousTerms} onLabelCliecked={handleTermClicked} />

      < GifsList gifs={gifsSearches} />

    </>
  )
}