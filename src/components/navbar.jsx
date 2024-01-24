import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from '../utils/constants';
import searchbar from "./searchbar";

const navbar = () => (
 <Stack 
 direction="row" 
 alighItems="center" 
 p={2} 
 sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between'}}
 >

<Link to ="/" style={{ display: 'flex', alignItems: 'center'}}>
<img src={logo} alt="logo" height={45} />
</Link>
<searchbar />
 </Stack>
  )


export default navbar