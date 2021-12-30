import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import styled from "styled-components/macro";
import { GlobalStyle } from "../styles/globalstyles";
import { queryClient } from "../utils/react-query-client";
import Config from "./config/Config";

const AppStyles = styled.main`
  display: grid;
  place-items: center;
`;

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <GlobalStyle />
      <AppStyles>
        <Config />
        {/* The rest of your application */}
      </AppStyles>
    </QueryClientProvider>
  );
}

export default App;
