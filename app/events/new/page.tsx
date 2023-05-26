'use client';
import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Stack,
  Textarea,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

type FormValues = {
  event_type: String;
  date: String;
  time: String;
  location: String;
  details: String;
};

const NewEvent = () => {
  const { register, handleSubmit, formState, control, getValues } =
    useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    const event_type = getValues('event_type');
    const date = getValues('date');
    console.log('Date: ', date);
    const time = getValues('time');
    const location = getValues('location');
    const details = getValues('details');
    const apiData = {
      event_type,
      date,
      time,
      location,
      details,
    };
    const result = await fetch('http://localhost:3000/api/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(apiData),
    });
    const res = await result.json();
    console.log(res);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <FormControl>
        <div className="my-8">
          <FormLabel>Event Type</FormLabel>
          <Select placeholder="Select Match Type" {...register('event_type')}>
            <option value="PRACTICE">PRACTICE</option>
            <option value="MATCH">MATCH</option>
            <option value="OTHER">OTHER</option>
          </Select>
        </div>
        <div className="my-8">
          <FormLabel>Date</FormLabel>
          <Input type="date" {...register('date')} />
        </div>
        <div className="my-8">
          <FormLabel>Time</FormLabel>
          <Input type="time" {...register('time')} />
        </div>
        <div className="my-8">
          <FormLabel>Location</FormLabel>
          <Input type="text" {...register('location')} />
        </div>
        <div className="my-8">
          <FormLabel>Details</FormLabel>
          <Textarea
            placeholder="Here you can add details"
            {...register('details')}
          />
        </div>
        <Stack direction="row" spacing={4}>
          <Button
            isLoading={false}
            loadingText="Submitting"
            colorScheme="teal"
            variant="outline"
            type="submit"
          >
            Submit
          </Button>
        </Stack>
      </FormControl>
    </form>
  );
};

export default NewEvent;
