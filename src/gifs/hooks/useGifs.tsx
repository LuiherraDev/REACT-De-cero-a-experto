import { useRef, useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { mockGifs } from "../../mock-data/gifs.mock";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";

// const gifsCache: Record<string, Gif[]> = {}

export const useGifs = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [gifsSearches, setGifsSearches] = useState<Gif[]>(mockGifs)

  const gifsCache = useRef<Record<string, Gif[]>>({})

  const handleTermClicked = async (term: string) => {

    if (gifsCache.current[term]) {
      setGifsSearches(gifsCache.current[term])
      return
    }

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

    gifsCache.current[query] = gifs
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