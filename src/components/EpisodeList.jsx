import { useState } from "react";
import EpisodeList from "./data";

export default function EpisodeList() {
    const [episodes] = useState(episodeList);
    return (
        <section className="details">
            <h2>Episodes</h2>
            <ul className="details">
                {episodes.map((episode) => (
                    <li key={episode.id}>{episode.title}</li>
                ))}
            </ul>
        </section>
    );
}