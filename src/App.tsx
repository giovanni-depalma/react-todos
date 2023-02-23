import tw from "twin.macro";
import { RouterProvider } from "react-router";
import { router } from "./routes/router";

const PageContainer = tw.div`flex items-center justify-center bg-cyan-50`;

function App() {
  return (
    <PageContainer>
      <RouterProvider router={router} />
    </PageContainer>
  );
}

export default App;
