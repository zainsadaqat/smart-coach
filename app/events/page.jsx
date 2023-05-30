'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Heading, Button } from '@chakra-ui/react';

const Events = () => {
  const [events, setEvents] = useState({
    events: [],
  });

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch('http://localhost:3000/api/events');
      const data = await response.json();
      setEvents(data);
    };
    fetchEvents();
  }, []);

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:3000/api/events`, {
      method: 'DELETE',
      body: JSON.stringify({ id }),
    });
    const data = await response.json();
    console.log('Response on Delete: ', data);
  };

  return (
    <div className="my-8">
      <Link href={'/events/new'}>
        <Button colorScheme="blue">Create an Event</Button>
      </Link>
      <div className="my-4">
        <Heading>Recent Events</Heading>
      </div>
      <ul className="my-4">
        {events.events.map((event, index) => {
          return (
            // @ts-ignore
            <div key={index} className="flex flex-col border p-4">
              <li>{index + 1}</li>
              <li>{event.event_type}</li>
              <li>{event.date}</li>
              <li>{event.time}</li>
              <li>{event.location}</li>
              <li>{event.details}</li>
              <li onClick={() => handleDelete(event.id)}>Delete</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Events;
