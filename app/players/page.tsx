'use client';
import React from 'react';
import { Button } from '@chakra-ui/react';
import Link from 'next/link';

const Players = () => {
  return (
    <div className="my-8">
      <Link href={'/players/new'}>
        <Button colorScheme="blue">Add a Player</Button>
      </Link>
    </div>
  );
};

export default Players;
