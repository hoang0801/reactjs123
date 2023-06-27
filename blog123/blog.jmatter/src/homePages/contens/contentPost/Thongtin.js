import { Box, Container, Grid, Typography } from "@mui/material";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import rehypeRaw from 'rehype-raw';
import { useError } from "../../../hooks/useError";
import XemNhieu from "./XemNhieu";

export default function ThongTin() {
  const { showError } = useError();
  let { id } = useParams();

  const { posts } = useSelector((state) => state.post);

  const currentPost = posts.find(c => c.id === parseInt(id));

  return (
    <Box sx={{ bgcolor: '#f7f7f7' }}>
      <Container maxWidth='md' sx={{ marginTop: 5, }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>

            <Box>
              <Typography variant="h4">
                {currentPost?.title}
              </Typography>
              <img src={`http://52.193.212.182:8080/image/${currentPost?.images[0]}`} alt="nghien cuu" width="550" height="350" />
              <ReactMarkdown rehypePlugins={[rehypeRaw]} children={currentPost?.description} />
              <Typography sx={{ marginTop: 5, }} >
                Ngày Đăng :{currentPost?.createdDate}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            < XemNhieu currentPost={currentPost} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}