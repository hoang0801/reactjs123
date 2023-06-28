import { Box, Container, Divider, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useError } from "../../../hooks/useError";
import { searchPost } from "../../../redux/postSlice";
import { searchPostAPI } from "../../../service/postService";

function ContentFeatured() {
  const { showError } = useError();
  const navigate = useNavigate();
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

  const handleChange = () => {
    return (
      navigate("/tintuc")
    );
  };

  return (

    <Box>
      <Container>
        <Grid container spacing={2}>
          <Grid xs={4}>
            <Box sx={{ borderRight: 1, borderColor: '#AAAAAA' }}>
              {posts?.slice(5, 13).map((post) => (
                <Stack spacing={2} key={post.id}>
                  <Typography sx={{ fontSize: 20 }} variant="h3">
                    <Link style={{ textDecoration: 'none', color: "#040404" }} to={`/thongtin/${post.id}`}>
                      {post.title}
                    </Link>
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <Link style={{ textDecoration: 'none', color: "#040404" }} to={`/thongtin/${post.id}`}>
                      
                      <img src={`http://52.193.212.182:8080/image/${post.images[0]}`} width={80} height={80} />
                    </Link>
                    <Typography variant="body2">
                      Chiều 24/6, với gần 97,4% đại biểu tán thành, Quốc hội biểu quyết thông qua Nghị quyết về thí điểm cơ chế đặc thù cho phát triển TP HCM.
                    </Typography>
                  </Stack>
                  <Divider />
                </Stack>
              ))}
            </Box>
          </Grid>

          <Grid xs={8}>
            <KinhDoanh />
            <BĐS />
            <TheThao />
            <GiaiTri />
          </Grid>
          <Divider />
        </Grid>


      </Container>
    </Box>
  );
}

function KinhDoanh() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    find();
  }, []);

  const find = async () => {
    let resp = await searchPostAPI({
      "start": 0,
      "length": 10,
      "categoryId": 90
    }); //await dùng trong hàm async
    console.log(resp.result);
    setPosts(resp?.result?.data);

  };// khi redux seearch thay doi, thi se dc goi lai find

  return (
    <Box marginLeft={4}>

      <Typography variant="h6">
        <u>Kinh Doanh</u>
      </Typography>

      <Grid marginTop={2} container spacing={2}>
        <Grid item xs={8}>
          {posts?.slice(0, 1).map((item) => (
            <Box containers key={item.id} >
              <Stack direction="row" spacing={2} >
                <Link style={{ textDecoration: 'none', color: "#040404" }} to={`/thongtin/${item.id}`} >
                  <img src={`http://52.193.212.182:8080/image/${item.images[0]}`} width={140} height={130} />
                </Link>

                <Box sx={{ borderRight: 1, borderColor: '#AAAAAA' }}>
                  <Typography sx={{ fontSize: 20 }} variant="h3">
                    <Link style={{ textDecoration: 'none', color: "#040404" }} to={`/thongtin/${item.id}`} >
                      {item.title}
                    </Link>
                  </Typography>
                  <Typography>
                    phủ được giao thanh tra toàn diện thị trường bảo hiểm nhân thọ, nhất là sản phẩm bảo hiểm liên kết đầu tư.
                  </Typography>
                </Box>
              </Stack>
            </Box>
          ))}
        </Grid>



        <Grid item xs={4}>
          <Box container >
            <Typography variant="h6">
              Ý định siết đầu tư vào Trung Quốc của Mỹ
            </Typography>
            <Typography variant="body2">
              Viện dẫn an ninh quốc gia, chính phủ Mỹ cân nhắc thắt chặt quy định về vốn ra nước ngoài nhưng khả năng thực thi sẽ nhiều thách thức.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Divider />

      <Stack direction="row" spacing={2} marginTop={3} >

        <li>Bị phạt hơn 50 triệu đồng vì livestream bán nước hoa nhái </li>
        <li>Quốc hội yêu cầu thanh tra toàn diện thị trường bảo hiểm nhân thọ</li>
        <li>Quy hoạch Bắc Ninh là thành phố thuộc Trung ương vào năm 2030</li>
      </Stack>

      <Divider />
    </Box>


  );
}

function BĐS() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    find();
  }, []);

  const find = async () => {
    let resp = await searchPostAPI({
      "start": 0,
      "length": 10,
      "categoryId": 91
    }); //await dùng trong hàm async
    console.log(resp.result);
    setPosts(resp?.result?.data);

  };
  return (

    <Box marginLeft={4}>

      <Typography variant="h6">
        <u>Bất động sản</u>

      </Typography>



      <Grid marginTop={2} container spacing={2}>

        <Grid item xs={8}>
          {posts?.slice(0, 1).map((item) => (
            <Box containers key={item.id} >
              <Stack direction="row" spacing={2} >
                <Link style={{ textDecoration: 'none', color: "#040404" }} to={`/thongtin/${item.id}`} >
                  <img src={`http://52.193.212.182:8080/image/${item.images[0]}`} width={140} height={130} />
                </Link>

                <Box sx={{ borderRight: 1, borderColor: '#AAAAAA' }}>
                  <Typography sx={{ fontSize: 20 }} variant="h3">
                    <Link style={{ textDecoration: 'none', color: "#040404" }} to={`/thongtin/${item.id}`} >
                      {item.title}
                    </Link>
                  </Typography>
                  <Typography>
                    phủ được giao thanh tra toàn diện thị trường bảo hiểm nhân thọ, nhất là sản phẩm bảo hiểm liên kết đầu tư.
                  </Typography>
                </Box>
              </Stack>
            </Box>
          ))}
        </Grid>



        <Grid item xs={4}>
          <Box container >
            <Typography sx={{ fontSize: 20 }} variant="h3">
              Hướng gỡ khó cho dự án 5 tỷ USD của Novaland
            </Typography>
            <Typography variant="body2">
              Bình Thuận đề xuất giữ nguyên chủ trương đầu tư, gộp các quyết định cho thuê đất, cho trả tiền thuê đất một lần để gỡ khó pháp lý ..            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Divider />
      <Stack direction="row" spacing={2} marginTop={3}>
        <li>Bị phạt hơn 50 triệu đồng vì livestream bán nước hoa nhái </li>
        <li>Quốc hội yêu cầu thanh tra toàn diện thị trường bảo hiểm nhân thọ</li>
        <li>Quy hoạch Bắc Ninh là thành phố thuộc Trung ương vào năm 2030</li>
      </Stack>
      <Divider marginTop={2} />
    </Box>


  );
}


function TheThao() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    find();
  }, []);

  const find = async () => {
    let resp = await searchPostAPI({
      "start": 0,
      "length": 10,
      "categoryId": 92
    }); //await dùng trong hàm async
    console.log(resp.result);
    setPosts(resp?.result?.data);

  };
  return (

    <Box marginLeft={4}>

      <Typography variant="h6">
        <u>Thể Thao</u>

      </Typography>

      <Grid marginTop={2} container spacing={2}>

        <Grid item xs={8}>
          {posts?.slice(0, 1).map((item) => (
            <Box containers key={item.id} >
              <Stack direction="row" spacing={2} >
                <Link style={{ textDecoration: 'none', color: "#040404" }} to={`/thongtin/${item.id}`} >
                  <img src={`http://52.193.212.182:8080/image/${item.images[0]}`} width={140} height={130} />
                </Link>

                <Box sx={{ borderRight: 1, borderColor: '#AAAAAA' }}>
                  <Typography sx={{ fontSize: 20 }} variant="h3">
                    <Link style={{ textDecoration: 'none', color: "#040404" }} to={`/thongtin/${item.id}`} >
                      {item.title}
                    </Link>
                  </Typography>
                  <Typography>
                    phủ được giao thanh tra toàn diện thị trường bảo hiểm nhân thọ, nhất là sản phẩm bảo hiểm liên kết đầu tư.
                  </Typography>
                </Box>
              </Stack>
            </Box>
          ))}
        </Grid>



        <Grid item xs={4}>
          <Box container >
            <Typography sx={{ fontSize: 20 }} variant="h3">
              Tiền đạo nữ Đức vui vì CĐV Việt Nam được ăn mừng
            </Typography>
            <Typography variant="body2">
              Khó chịu khi đội nhà bị thủng lưới, nhưng tiền đạo Laura Freigang cũng vui lây cho CĐV Việt Nam ...             </Typography>
          </Box>
        </Grid>
      </Grid>
      <Divider />
      <Stack direction="row" spacing={2} marginTop={3}>
        <li>HLV tuyển Đức không vui dù thắng Việt Nam </li>
        <li>Thanh Nhã chọc thủng lưới tuyển nữ Đức</li>
        <li>HAGL – TP HCM: Quyết chiến vì top 8</li>
      </Stack>
      <Divider />
    </Box>


  );
}


function GiaiTri() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    find();
  }, []);

  const find = async () => {
    let resp = await searchPostAPI({
      "start": 0,
      "length": 10,
      "categoryId": 93
    }); //await dùng trong hàm async
    console.log(resp.result);
    setPosts(resp?.result?.data);

  };
  return (

    <Box marginLeft={4}>

      <Typography variant="h6">
        <u>Giải trí</u>
      </Typography>



      <Grid marginTop={2} container spacing={2}>

        <Grid item xs={8}>
          {posts?.slice(0, 1).map((item) => (
            <Box containers key={item.id} >
              <Stack direction="row" spacing={2} >
                <Link style={{ textDecoration: 'none', color: "#040404" }} to={`/thongtin/${item.id}`} >
                  <img src={`http://52.193.212.182:8080/image/${item.images[0]}`} width={140} height={130} />
                </Link>

                <Box sx={{ borderRight: 1, borderColor: '#AAAAAA' }}>
                  <Typography sx={{ fontSize: 20 }} variant="h3">
                    <Link style={{ textDecoration: 'none', color: "#040404" }} to={`/thongtin/${item.id}`} >
                      {item.title}
                    </Link>
                  </Typography>
                  <Typography>
                    phủ được giao thanh tra toàn diện thị trường bảo hiểm nhân thọ, nhất là sản phẩm bảo hiểm liên kết đầu tư.
                  </Typography>
                </Box>
              </Stack>
            </Box>
          ))}
        </Grid>



        <Grid item xs={4}>
          <Box container >
            <Typography sx={{ fontSize: 20 }} variant="h3">
              Ý định siết đầu tư vào Trung Quốc của Mỹ
            </Typography>
            <Typography variant="body2">
              Viện dẫn an ninh quốc gia, chính phủ Mỹ cân nhắc thắt chặt quy định về vốn ra nước ngoài nhưng khả năng thực thi sẽ nhiều thách thức.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Divider />
      <Stack direction="row" spacing={2} marginTop={3}>
        <li>Bị phạt hơn 50 triệu đồng vì livestream bán nước hoa nhái </li>
        <li>Quốc hội yêu cầu thanh tra toàn diện thị trường bảo hiểm nhân thọ</li>
        <li>Quy hoạch Bắc Ninh là thành phố thuộc Trung ương vào năm 2030</li>
      </Stack>
      <Divider marginTop={2} />
    </Box>


  );
}

export default ContentFeatured






