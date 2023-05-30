'use client';
import React, { useEffect, useState } from 'react';
import { Button } from '@chakra-ui/react';
import Link from 'next/link';

const Players = () => {
  const [players, setPlayers] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/api/players');
      const result = await response.json();
      setPlayers(result);
    };
    fetchData();
  }, []);

  return (
    <div className="my-8">
      <Link href={'/players/new'}>
        <Button colorScheme="blue">Add a Player</Button>
      </Link>

      <h2>All Players</h2>
      <ul>
        {players?.players &&
          // @ts-ignore
          players.players.map((player) => {
            return (
              <div
                key={player.id}
                className="flex justify-between items-center"
              >
                <li>{player?.name}</li>
                <li>{player?.position}</li>
                <li>{player?.contact}</li>
                <li>Delete</li>
              </div>
            );
          })}
      </ul>
    </div>
  );
};

export default Players;
