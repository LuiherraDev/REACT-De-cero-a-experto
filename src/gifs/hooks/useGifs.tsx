import { useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { mockGifs } from "../../mock-data/gifs.mock";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";

export const useGifs = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [gifsSearches, setGifsSearches] = useState<Gif[]>(mockGifs)

  const handleTermClicked = async (term: string) => {
    const gifs = await getGifsByQuery(term)
    setGifsSearches(gifs)
  }

  const handleSearch = async (query: string = '') => {
    query = query.trim().toLowerCase()

    if (query.length === 0) return

    if (previousTerms.includes(query)) return

    setPreviousTerms([query, ...previousTerms].slice(0, 4))

    const gifs = await getGifsByQuery(query)

    setGifsSearches(gifs)
  }

  return {
    // Props
    gifsSearches,

    // Actions
    handleSearch,
    handleTermClicked,
    previousTerms,
  }
}