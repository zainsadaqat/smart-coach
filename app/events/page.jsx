'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Events = () => {
  const [events, setEvents] = useState({
    events: [],
  });

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch('/api/events');
      const data = await response.json();
      setEvents(data);
    };
    fetchEvents();
  }, []);

  return (
    <div className="my-8">
      <ul className="my-4">
        {events.events.map((event, index) => {
          return (
            // @ts-ignore
            <div key={index} className="flex flex-col p-4">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <div>
                    <li>{event.date}</li>
                  </div>
                  <div>
                    <li>{event.event_type}</li>
                    <div className="flex">
                      <li>{event.time}</li>
                      <li>{event.location}</li>
                    </div>
                  </div>
                </div>
                <div>
                  <span>8 Players</span>
                </div>
                <div>
                  <span>Edit</span>
                  <span>Delete</span>
                </div>
              </div>
              {/* <li>{event.details}</li> */}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Events;
