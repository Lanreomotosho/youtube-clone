import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';



import { navbar, feed, videodetail, channeldetail, searchfeed } from './components';


const App = () => (
    <BrowserRouter>
    <Box sx={{ backgroundColor: '#000'}}>
<navbar />
<Routes>
    <Route path="/" exact element={<feed />} />
    <Route path="/video/id" element={<videodetail />} />
    <Route path="/channel/id" element={<channeldetail />} />
    <Route path="/search/:seachTerm" element={<searchfeed />} />
</Routes>
    </Box>
    </BrowserRouter>
  );


export default App