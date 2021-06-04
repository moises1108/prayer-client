import {
  Box,
  chakra,
  Flex,
  Icon,
  SimpleGrid,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, React, useState } from "react";

// GET all prayer requests on landing
export default function Main() {
  const [prayers, setPrayers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/prayer")
      .then((response) => {
        let tmpPrayers = [];
        response.data.forEach((prayer) => {
          tmpPrayers = [
            ...tmpPrayers,
            {
              name: prayer.name,
              country: prayer.country,
              city: prayer.city,
              key: prayer._id,
              content: prayer.content,
            },
          ];
        });
        setPrayers(tmpPrayers);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Flex
      textAlign={"center"}
      pt={10}
      justifyContent={"center"}
      direction={"column"}
      width={"full"}
    >
      <Box width={{ base: "full", sm: "lg", lg: "xl" }} margin={"auto"}>
        <chakra.h3
          fontFamily={"Work Sans"}
          fontWeight={"bold"}
          fontSize={20}
          textTransform={"uppercase"}
          color={"purple.400"}
        >
          {/* "And whatever things you ask in prayer, believing, you will receive.”
          Matthew 21:22 */}
        </chakra.h3>
        <chakra.h1
          py={5}
          fontSize={48}
          fontFamily={"Work Sans"}
          fontWeight={"bold"}
          color={useColorModeValue("gray.700", "gray.50")}
        >
          Pray for this:
        </chakra.h1>
        <chakra.h2
          margin={"auto"}
          width={"70%"}
          fontFamily={"Inter"}
          fontWeight={"medium"}
          color={useColorModeValue("gray.500", "gray.400")}
        >
          Upload your prayer,{" "}
          <chakra.strong color={useColorModeValue("gray.700", "gray.50")}>
            Pray for a week,
          </chakra.strong>{" "}
          Prayer is free!
        </chakra.h2>
      </Box>
      <SimpleGrid
        columns={{ base: 1, xl: 2 }}
        spacing={"20"}
        mt={16}
        mx={"auto"}
      >
        {prayers.map((prayer) => (
          <TestmonialCard {...prayer} />
        ))}
      </SimpleGrid>

      <Box>
        <chakra.h2
          paddingTop={"20px"}
          margin={"auto"}
          width={"70%"}
          fontFamily={"Inter"}
          fontWeight={"medium"}
          color={useColorModeValue("gray.700", "gray.50")}
          // backgroundColor={"red.100"}
        >
          Click the heart every time you pray for these!
        </chakra.h2>
        <Button
          backgroundColor={"white"}
          _hover={{
            background: "white",
            color: "teal.500",
          }}
          _focus={"box-shadow: none"}
          outline="0"
        >
          <Icon
            onClick={console.log("Heart clicked")}
            viewBox="0 0 40 35"
            mt={2}
            boxSize={10}
            color={"red.400"}
          >
            <path
              fill={"currentColor"}
              d="M10.7964 5.04553e-07C8.66112 -0.000123335 6.57374 0.632971 4.79827 1.81922C3.0228 3.00547 1.63898 4.69158 0.82182 6.66433C0.00466116 8.63708 -0.209132 10.8079 0.207477 12.9021C0.624087 14.9964 1.65239 16.9201 3.16233 18.4299L19.1153 34.3828C19.2395 34.5074 19.3871 34.6062 19.5496 34.6736C19.7121 34.741 19.8863 34.7757 20.0622 34.7757C20.2381 34.7757 20.4123 34.741 20.5748 34.6736C20.7373 34.6062 20.8848 34.5074 21.0091 34.3828L36.962 18.4272C38.9319 16.3917 40.0228 13.6636 39.9996 10.8311C39.9764 7.99858 38.8409 5.28867 36.838 3.28573C34.835 1.28279 32.1251 0.147283 29.2926 0.124081C26.4601 0.100879 23.732 1.19184 21.6965 3.1617L20.0622 4.79337L18.4305 3.1617C17.4276 2.15892 16.237 1.36356 14.9267 0.821064C13.6163 0.278568 12.2119 -0.000433066 10.7937 5.04553e-07H10.7964Z"
            />
          </Icon>
        </Button>
      </Box>
    </Flex>
  );
}

function TestmonialCard(props) {
  const { name, city, country, content } = props;
  return (
    <Flex
      backgroundColor={"blue.50"}
      boxShadow={"lg"}
      maxW={"640px"}
      direction={{ base: "column-reverse", md: "row" }}
      width={"full"}
      rounded={"xl"}
      p={10}
      justifyContent={"space-between"}
      position={"relative"}
      bg={"blue.50"}
    >
      <Flex
        direction={"column"}
        textAlign={"left"}
        justifyContent={"space-between"}
      >
        <chakra.p
          fontFamily={"Inter"}
          fontWeight={"medium"}
          fontSize={"15px"}
          pb={4}
        >
          {content}
        </chakra.p>
        <chakra.p fontFamily={"Work Sans"} fontWeight={"bold"} fontSize={14}>
          {name}
          <chakra.span
            fontFamily={"Inter"}
            fontWeight={"medium"}
            color={"gray.500"}
          >
            {" "}
            - {`${city}, ${country}`}
          </chakra.span>
        </chakra.p>
      </Flex>
    </Flex>
  );
}
