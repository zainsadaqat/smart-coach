'use client';
import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Stack,
} from '@chakra-ui/react';

const NewPlayer = () => {
  return (
    <FormControl>
      <div className="my-8">
        <FormLabel>Player Name</FormLabel>
        <Input type="text" />
      </div>
      <div className="my-8">
        <FormLabel>Position</FormLabel>
        <Select placeholder="Select option">
          <option value="option1">GOAL_KEEPER</option>
          <option value="option2">FULL_BACK_RIGHT</option>
          <option value="option3">FULL_BACK_LEFT</option>
          <option value="option4">CENTRE_BACK</option>
          <option value="option5">SWEEPER</option>
          <option value="option6">DEFENSIVE_MIDFIELD_RIGHT</option>
          <option value="option7">DEFENSIVE_MIDFIELD_LEFT</option>
          <option value="option8">SECOND_STRIKER</option>
          <option value="option9">CENTRE_FORWARD</option>
        </Select>
      </div>
      <div className="my-8">
        <FormLabel>Contact</FormLabel>
        <Input type="text" />
      </div>
      <Stack direction="row" spacing={4}>
        <Button
          isLoading={false}
          loadingText="Submitting"
          colorScheme="teal"
          variant="outline"
        >
          Submit
        </Button>
      </Stack>
    </FormControl>
  );
};

export default NewPlayer;
