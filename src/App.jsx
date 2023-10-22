import Sidebar from "./components/Sidebar.jsx";
import Feed from "./components/Feed.jsx";
import Rightbar from "./components/Rightbar.jsx";
import { Box, Stack } from "@mui/material";
import Navbar from "./components/Navbar.jsx";
import Add from "./components/Add.jsx";

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <Add />
    </Box>
  );
}

export default App;
