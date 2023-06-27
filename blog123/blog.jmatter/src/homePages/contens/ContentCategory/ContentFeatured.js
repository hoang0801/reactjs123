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
              {posts.map((post) => (
                <Stack spacing={2} key={post.id}>
                  <Typography variant="subtitle2">
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
          {posts?.map((item) => (
            <Box containers key={item.id} >
              <Stack direction="row" spacing={2} >
                <img src={`http://52.193.212.182:8080/image/${item.images[0]}`} width={140} height={130} />
                <Box sx={{ borderRight: 1, borderColor: '#AAAAAA' }}>
                  <Typography variant="h6">
                    {item.title}
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
      <Stack direction="row" spacing={2} marginTop={3}>
        <li>Bị phạt hơn 50 triệu đồng vì livestream bán nước hoa nhái </li>
        <li>Quốc hội yêu cầu thanh tra toàn diện thị trường bảo hiểm nhân thọ</li>
        <li>Quy hoạch Bắc Ninh là thành phố thuộc Trung ương vào năm 2030</li>
      </Stack>
      <Divider />
    </Box>


  );
}

function BĐS() {
  return (

    <Box marginLeft={4}>

      <Typography variant="h6">
        <u>Bất động sản</u>

      </Typography>



      <Grid marginTop={2} container spacing={2}>

        <Grid item xs={8}>
          <Box containers >
            <Stack direction="row" spacing={2}>
              <img src={`bds.jpg`} width={140} height={130} />
              <Box sx={{ borderRight: 1, borderColor: '#AAAAAA' }}>
                <Typography variant="h6">
                  3 đường sẽ mở quanh khu Vinhomes Ocean Park
                </Typography>
                <Typography>
                  3 tuyến đường sẽ mở quanh Vinhomes Ocean Park, trong đó có tuyến giúp tăng cường kết nối với khu đô thị Ecopark.                 </Typography>
              </Box>
            </Stack>
          </Box>
        </Grid>



        <Grid item xs={4}>
          <Box container >
            <Typography variant="h6">
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
  return (

    <Box marginLeft={4}>

      <Typography variant="h6">
        <u>Thể Thao</u>

      </Typography>



      <Grid marginTop={2} container spacing={2}>

        <Grid item xs={8}>
          <Box containers >
            <Stack direction="row" spacing={2}>
              <img src={`dqh.jpg`} width={140} height={130} />
              <Box sx={{ borderRight: 1, borderColor: '#AAAAAA' }}>
                <Typography variant="h6">
                  Cơ thủ Quốc Hoàng thua đau cựu vô địch châu Âu
                </Typography>
                <Typography>
                  Dương Quốc Hoàng cộng bi lỗi và thua sát nút Marc Bijsterbosch 9-10 ở tứ kết pool 9 bi Tây Ban Nha Mở rộng.
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Grid>



        <Grid item xs={4}>
          <Box container >
            <Typography variant="h6">
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
  return (

    <Box marginLeft={4}>

      <Typography variant="h6">
        <u>Giải trí</u>
      </Typography>



      <Grid marginTop={2} container spacing={2}>

        <Grid item xs={8}>
          <Box containers >
            <Stack direction="row" spacing={2}>
              <img src={`line.jpg`} width={140} height={130} />
              <Box sx={{ borderRight: 1, borderColor: '#AAAAAA' }}>
                <Typography variant="h6">
                  Quốc hội yêu cầu thanh tra toàn diện thị trường bảo hiểm nhân thọ
                </Typography>
                <Typography>
                  phủ được giao thanh tra toàn diện thị trường bảo hiểm nhân thọ, nhất là sản phẩm bảo hiểm liên kết đầu tư.
                </Typography>
              </Box>
            </Stack>
          </Box>
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






