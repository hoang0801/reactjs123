import { Box, Button, Card, CardActions, CardContent, Divider, Stack, Typography } from "@mui/material";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchCategory, setCategorySearch } from '../../../redux/categorySlice';
import TabContent from "../../components/tabContent";

export default function ContentFeatured() {


  const { categories, recordsFiltered, search, error } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  console.log(categories);
  useEffect(() => {
    const timeout = setTimeout(() => {
      find();
    }, 500);
    return () => clearTimeout(timeout);
  }, [search]); // khi redux seearch thay doi, thi se dc goi lai find

  const find = async () => {
    dispatch(searchCategory());
  };

  const handleChange = (e) => {
    let newSearch = {
      ...search,
      start: 0,// reset lai trang dau
      [e.target.name]: e.target.value
    };

    //update thay doi redux search
    dispatch(setCategorySearch(newSearch));
  };

  const back = () => {
    let start = search.start - parseInt(search.length);
    start = start < 0 ? 0 : start;

    //update thay doi redux search
    dispatch(setCategorySearch({
      ...search,
      start
    }));
  };

  const next = () => {
    let start = (search.start) + parseInt(search.length);

    //update thay doi redux search
    if (start < recordsFiltered)
      dispatch(setCategorySearch({
        ...search,
        start
      }));
  };
  return (
    <Stack>
      <Box>
        <Stack direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
          marginTop={5} >
          {categories.map((category) => (
            <Card sx={{ width: 300, height: 200 }}

            >
              <CardContent
                key={category.id}
                category={category}>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {category.name}
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={`/tintuc/${category.id}`} >
                  <Button size="small" >Xem</Button>
                </Link>
              </CardActions>
            </Card>
          ))
          }
        </Stack>
        <TabContent />
      </Box>


    </Stack>

  );
}




