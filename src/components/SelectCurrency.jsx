import React from "react";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Box,
  Button,
} from "@chakra-ui/react";

const SelectCurrency = () => {
  return (
      <div style={{ paddingTop: "2rem", backgroundColor:"grey" }}>
    <Box bg="white" w="100%" p={4}>
      <p style={{ paddingBottom: "1rem", fontSize:"1rem", fontWeight: 500, }}>Select Currency:</p>
      <InputGroup>
        <InputLeftAddon children="AFYA" />
        <Input type="tel" placeholder="0.00000001" />
      </InputGroup>
      <Stack
        direction="row"
        align="center"
        justifyContent="space-around"
        marginTop="1rem"
      >
        <Button bg="#4791db" color="#fff" size="lg" alignItems="center">
          SEND
        </Button>
        <Button bg="#4791db" color="#fff" size="lg">
          RECEIVE
        </Button>
      </Stack>
    </Box>
    </div>
  );
};

export default SelectCurrency;
