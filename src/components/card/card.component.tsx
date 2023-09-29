import "./card.component.scss";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { ICharacter } from "@/interfaces/character.interface";
import { Spinner } from "@/components/spinner";

export type CardProps = { character: ICharacter; loading: boolean };

export function Card({ character, loading }: CardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={"card" + (flipped ? " -flipped" : "")}>
      <div className="content">
        {loading ? (
          <Spinner />
        ) : (
          !!character.id && (
            <>
              <div className="front">
                <Image
                  width={300}
                  height={300}
                  className="picture"
                  src={character.image}
                  alt=""
                />
                <ul className="profile">
                  <li>
                    <dt>Status</dt>
                    <dd>{character.status}</dd>
                  </li>
                  <li>
                    <dt>Species</dt>
                    <dd>{character.species}</dd>
                  </li>
                  <li>
                    <dt>Type</dt>
                    <dd>{character.type || "Normal"}</dd>
                  </li>
                  <li>
                    <dt>Gender</dt>
                    <dd>{character.gender}</dd>
                  </li>
                  <li>
                    <dt>Location</dt>
                    <dd>
                      <Link href={`/locations/${character.location.id}`}>
                        {character.location.name}
                      </Link>
                      {!!character.location.dimension && (
                        <>
                          <br /> {character.location.dimension}
                        </>
                      )}
                      {!!character.location.type && (
                        <>
                          <br /> ({character.location.type})
                        </>
                      )}
                    </dd>
                  </li>
                  <li>
                    <dt>Origin</dt>
                    <dd>
                      <Link href={`/locations/${character.origin.id}`}>
                        {character.origin.name}
                      </Link>
                      {!!character.origin.dimension && (
                        <>
                          <br /> {character.origin.dimension}
                        </>
                      )}
                      {!!character.origin.type && (
                        <>
                          <br /> ({character.origin.type})
                        </>
                      )}
                    </dd>
                  </li>
                  <li>
                    <dt>Episodes</dt>
                    <dd>
                      <button
                        type="button"
                        className="action"
                        onClick={() => setFlipped(true)}
                      >
                        See Episodes
                      </button>
                    </dd>
                  </li>
                </ul>
              </div>
              <div className="back">
                <table>
                  <thead>
                    <tr>
                      <th> 
                        <button
                          type="button"
                          className="action"
                          onClick={() => setFlipped(false)}
                        >
                          See Profile
                        </button>
                      </th>
                    </tr>
                    <tr>
                      <th>Episode</th>
                      <th>Name</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {character?.episode?.map(
                      ({ episode, name, id, air_date }) => (
                        <tr key={id}>
                          <td>
                            <Link href={`/episodes/${id}`}>{episode}</Link>
                          </td>
                          <td>{name}</td>
                          <td>{air_date}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </>
          )
        )}
      </div>
    </div>
  );
}
