import { useEffect, useState } from "react";
// given a media string eg: '(min-width: 590px)' it 
// returns a boolean if there is a match
export default function useMediaQuery(query) {
    const mediaMatch = window.matchMedia(query)
    const [matches, setMatches] = useState(mediaMatch.matches)

    useEffect(() => {
        const handler = e => setMatches(e.matches)
        mediaMatch.addEventListener("change", handler)
        return () => mediaMatch.removeEventListener("change", handler)
    }, [mediaMatch])

    return matches
}