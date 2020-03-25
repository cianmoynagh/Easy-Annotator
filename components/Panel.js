import { Box, Flex } from "rebass";

const border = {
  border: "1px solid #DDD"
};

const Panel = props => (
  <Box
    sx={{
      p: 3,
      flexGrow: 2,
      flexBasis: 150
    }}
    style={border}
  >
    {props.children}
  </Box>
);

export default Panel;
