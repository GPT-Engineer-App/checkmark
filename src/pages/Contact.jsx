import React from "react";
import { Box, Heading, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box maxWidth="400px" margin="auto" mt={8}>
      <Heading mb={8}>Contact Us</Heading>
      <form>
        <FormControl id="name" mb={4}>
          <FormLabel>Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="email" mb={4}>
          <FormLabel>Email</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="message" mb={4}>
          <FormLabel>Message</FormLabel>
          <Textarea />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Send
        </Button>
      </form>
    </Box>
  );
};

export default Contact;
