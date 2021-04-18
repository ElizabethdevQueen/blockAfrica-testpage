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
    <div style={{ paddingTop: "2rem", backgroundColor: "#CCC9C9" }}>
      <p
        style={{
          paddingBottom: "1rem",
          paddingLeft: "1rem",
          fontSize: "1rem",
          fontWeight: 500,
          color: "#4791db",
        }}
      >
        Select Currency:
      </p>
      <Box bg="white" w="100%" p={4}>
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
          <Button bg="#4791db" color="#fff" size="lg" alignItems="center" fontWeight="light">
            SEND
          </Button>
          <Button bg="#4791db" color="#fff" size="lg" fontWeight="light">
            RECEIVE
          </Button>
        </Stack>
      </Box>
    </div>
  );
};

export default SelectCurrency;
