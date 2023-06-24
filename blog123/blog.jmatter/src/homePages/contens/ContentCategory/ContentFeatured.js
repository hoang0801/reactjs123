import { Box, Container, Divider, Grid, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useError } from "../../../hooks/useError";
import { searchPost } from "../../../redux/postSlice";

 function ContentFeatured() {
  const { showError } = useError();
 const navigate = useNavigate()
  const { posts, recordsFiltered, search, error } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(posts.map);
    const timeout = setTimeout(() => {
      find();
    }, 500);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]); // khi redux seearch thay doi, thi se dc goi lai find

  const find = async () => {
    dispatch(searchPost());
  };

  const handleChange =()=>{
    return(
      navigate("/tintuc")
    )
  }

  return (
    <Box>
      <Container>
      <Grid container spacing={2}>
  <Grid xs={4}>
    <Box  sx={{ borderRight: 1, borderColor: '#AAAAAA' }}>
      {posts.map((post)=>(
    <Stack  spacing={2} key={post.id}>
  <Typography>
    {post.title}
  </Typography>
  <Stack direction="row" spacing={2}>
    <img src={`http://52.193.212.182:8080/image/${post.images[0]}`}  width={80}  height={80} />
    <Typography variant="body2">
    Chiều 24/6, với gần 97,4% đại biểu tán thành, Quốc hội biểu quyết thông qua Nghị quyết về thí điểm cơ chế đặc thù cho phát triển TP HCM.
    </Typography>
  </Stack>
  <Divider/>
</Stack>
))}
    </Box>
  </Grid>

  <Grid xs={4}>
    <KinhDoanh/>
  </Grid>
  </Grid>
  </Container>
    </Box>
  );
}

function KinhDoanh(){
  return(
    <Box marginLeft={4}>
    <Link
  component="button"
  variant="body2">
  <Typography  variant="h6">
Kinh Doanh
  </Typography>
</Link>

<Grid container spacing={2}>
<Box 
     sx={{
     
        bgcolor:'#FFF0F5'}}>
  <Grid item xs={8}>
   
          <Stack direction="row" spacing={2}>
<Typography>
  Quốc hội yêu cầu thanh tra toàn diện thị trường bảo hiểm nhân thọ
  </Typography>
<Typography> 
  phủ được giao thanh tra toàn diện thị trường bảo hiểm nhân thọ, nhất là sản phẩm bảo hiểm liên kết đầu tư.
</Typography>
</Stack>
    
  </Grid>
  </Box>
  
  <Grid item xs={4}>
    <Box sx={{ borderLeft: 1 }}>
   <Typography variant="h6">
    Ý định siết đầu tư vào Trung Quốc của Mỹ
    </Typography>
   <Typography variant="body2">
    Viện dẫn an ninh quốc gia, chính phủ Mỹ cân nhắc thắt chặt quy định về vốn ra nước ngoài nhưng khả năng thực thi sẽ nhiều thách thức.
     </Typography>
     </Box>
  </Grid>
  </Grid>
</Box>

  )
}

export default ContentFeatured






