import { Button, Stack } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router";

export default function MainMenu(){
    let{ logout} = useContext(AuthenContext);
    let navigate = useNavigate()

    return < Stack spacing={2}>

        <Button variant="text" onClick={() => navigate("/dashbooard/category/new")} > Add Category</Button>
        <Button variant="text" onClick={() => navigate("/dashbooard/categories")} > Categories</Button>
        <Button variant="text" onClick={logout}>Logout</Button>
        </Stack>
}