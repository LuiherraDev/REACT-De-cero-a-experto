import type { FC } from "react";

interface Props {
  searches: string[];

  onLabelCliecked: (term: string) => void;
}

export const PreviousSearches: FC<Props> = ({ searches, onLabelCliecked }) => {
  return (
    <div className="previous-searches">
      <h2>Busquedas previas</h2>
      <ul className="previous-searches-list">
        {
          searches.map(term => (
            <li key={term} onClick={() => onLabelCliecked(term)

            } >{term}</li>
          ))
        }
      </ul>
    </div>
  )
} 