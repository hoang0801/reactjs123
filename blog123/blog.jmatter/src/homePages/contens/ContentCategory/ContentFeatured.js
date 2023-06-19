import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchCategory, setCategorySearch } from '../../../redux/categorySlice';

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
        <Grid container spacing={2}>
          <Grid item xs={10}>

            <Typography variant="h4">
              Case Studies
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Button sx={{ marginRight: 7 }} >

              See all

              <ArrowForwardOutlinedIcon />
            </Button>
          </Grid>
        </Grid>


        <Grid container spacing={2}>
          <Grid item xs={3}>
            {categories.map((category) => (
              <Box p={2}
                key={category.id} category={category}
                minHeight={10}
                borderRadius={3}>
                <Typography variant="h6">
                  {category.name}
                </Typography>
                <Button component={Link} to={`/tintuc`} variant="text">READ NOW</Button>
              </Box>
            ))
            }
          </Grid>
        </Grid>

      </Box>


    </Stack>

  );
}




