import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function ExpenseView({ type, data }) {
  return (
    <Box
      flex={1}
      w="full"
      bg={"gray.100"}
      mr={"4"}
      mt={"10"}
      p={"5"}
      pb={"4"}
      border={"1px solid"}
      borderColor={"gray.200"}
      borderRadius={"12"}
    >
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        bg={"gray.300"}
        p={"3"}
        borderRadius={"5"}
      >
        <Heading size={"md"} color={"blue.700"}>
          {type === "income" ? "Income" : "Expense"}
        </Heading>
      </Flex>
      {data.map((item) => (
        <>
          <Flex
            bg={type === "expense" ? "red.200" : "blue.200"}
            mt={"4"}
            justifyContent={"space-between"}
            alignItems={"center"}
            border={"1px solid"}
            borderColor={type === "expense" ? "red.100" : "blue.100"}
            p={"4"}
            borderRadius={"8"}
          >
            <Flex alignItems={"center"} justifyContent={"center"}>
              <Text ml="3" fontWeight="bold" color="gray.800">
                {item.description}
              </Text>
            </Flex>
            <Text>${item.amount}</Text>
          </Flex>
        </>
      ))}
    </Box>
  );
}
