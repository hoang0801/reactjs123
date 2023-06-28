import { Box, Divider, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { searchPostAPI } from "../../../service/postService";

function KhoaHocVaCongNghe() {
  return (

    <Box container bgcolor={'#FCFAF6'} sx={{ border: 1, borderColor: 'grey.500' }}>
      <Box marginTop={3}
        marginLeft={3}>
        <Typography
          container sx={{ fontSize: 30, color: '#a1887f' }}
          variant="h3"
        >
          Khoa học - Công nghệ
        </Typography>

        <Box>
          <KhoaHoc />
        </Box>
        <Divider />

        <Box>
          <CongNghe />
        </Box>

      </Box >
    </Box>

  );
}


function KhoaHoc() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    find();
  }, []);

  const find = async () => {
    let resp = await searchPostAPI({
      "start": 0,
      "length": 10,
      "categoryId": 94
    });
    setPosts(resp.result.data);
  };

  return (
    <Box >
      <Box>
        <Typography
          container sx={{ fontSize: 25 }}
          variant="h3"
          marginTop={3}
        >
          Khoa Học
        </Typography>
      </Box>

      <Grid container spacing={2} marginTop={2}>
        {posts?.slice(0, 1).map((item) => (
          <Grid key={item.id} item xs={5}>
            <Link style={{ textDecoration: 'none', color: "#040404" }} to={`/thongtin/${item.id}`} >
              <img src={`http://52.193.212.182:8080/image/${item.images[0]}`} width={470} height={280} />

              <Typography container sx={{ fontSize: 25 }}
                variant="h3">
                {item.title}
              </Typography>
            </Link>
            <Typography>
              Tàu đệm từ Thượng Hải của Trung Quốc xếp đầu danh sách tàu nhanh nhất thế giới hiện nay với tốc độ 460 km/h.
            </Typography>
          </Grid>
        ))}

        <Grid item xs={7} spacing={2}>
          <Box marginLeft={1.5} sx={{ borderLeft: 1, borderColor: 'grey.500' }}>

            <Grid container spacing={2}
              marginLeft={0.5}>
              <Grid item xs={5}>
                {posts?.slice(1, 3).map((item) => (
                  <Box key={item.is}>
                    <Link style={{ textDecoration: 'none', color: "#040404" }} to={`/thongtin/${item.id}`} >
                      <img src={`http://52.193.212.182:8080/image/${item.images[0]}`} width={240} height={150} />

                      <Typography container sx={{ fontSize: 20 }}
                        variant="h3">
                        {item.title}
                      </Typography>
                    </Link>
                  </Box>
                ))}

              </Grid>

              <Grid item xs={7}>
                <Box marginLeft={-2} mgin sx={{ borderLeft: 1, borderColor: 'grey.500' }}>
                  {posts?.slice(3, 8).map((item) => (
                    <Grid key={item.id} container spacing={2} marginLeft={0.2}>

                      <Grid item xs={7}>
                        <Typography container sx={{ fontSize: 22 }}
                          variant="h3">
                          <Link style={{ textDecoration: 'none', color: "#040404" }} to={`/thongtin/${item.id}`} >
                            {item.title}
                          </Link>
                        </Typography>
                      </Grid>
                      <Grid item xs={5}>
                        <Link style={{ textDecoration: 'none', color: "#040404" }} to={`/thongtin/${item.id}`} >
                          <img src={`http://52.193.212.182:8080/image/${item.images[0]}`} width={100} height={80} />
                        </Link>
                      </Grid>
                      <Divider />
                    </Grid>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>

      </Grid>



    </Box>
  );
}


function CongNghe() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    find();
  }, []);

  const find = async () => {
    let resp = await searchPostAPI({
      "start": 0,
      "length": 10,
      "categoryId": 95
    });
    setPosts(resp?.result?.data);
  };
  return (
    <Box>
      <Box>
        <Typography
          container sx={{ fontSize: 25 }}
          variant="h3"
          marginTop={3}
        >
          Số Hóa
        </Typography>
      </Box>

      <Grid container spacing={2} marginTop={2}>
        {posts?.slice(0, 1).map((item) => (
          <Grid key={item.id} item xs={5}>
            <Link style={{ textDecoration: 'none', color: "#040404" }} to={`/thongtin/${item.id}`} >
              <img src={`http://52.193.212.182:8080/image/${item.images[0]}`} width={470} height={280} />

              <Typography container sx={{ fontSize: 25 }}
                variant="h3">
                {item.title}
              </Typography>
            </Link>
            <Typography>
              Ông Errol Musk lo lắng vì dù thắng hay thua trong cuộc đấu tay đôi với Mark Zuckerberg, người chịu tiếng xấu luôn là CEO Tesla            </Typography>
          </Grid>
        ))}

        <Grid item xs={7} spacing={2}>
          <Box marginLeft={1.5} sx={{ borderLeft: 1, borderColor: 'grey.500' }}>

            <Grid container spacing={2}
              marginLeft={0.5}>
              <Grid item xs={5}>
                {posts?.slice(1, 3).map((item) => (
                  <Box key={item.is}>
                    <Link style={{ textDecoration: 'none', color: "#040404" }} to={`/thongtin/${item.id}`} >
                      <img src={`http://52.193.212.182:8080/image/${item.images[0]}`} width={240} height={150} />

                      <Typography container sx={{ fontSize: 20 }}
                        variant="h3">
                        {item.title}
                      </Typography>
                    </Link>
                  </Box>
                ))}

              </Grid>

              <Grid item xs={7}>
                <Box marginLeft={-2} mgin sx={{ borderLeft: 1, borderColor: 'grey.500' }}>
                  {posts?.slice(3, 8).map((item) => (
                    <Grid key={item.id} container spacing={2} marginLeft={0.2}>

                      <Grid item xs={7}>
                        <Typography container sx={{ fontSize: 22 }}
                          variant="h3">
                          <Link style={{ textDecoration: 'none', color: "#040404" }} to={`/thongtin/${item.id}`} >
                            {item.title}
                          </Link>
                        </Typography>
                      </Grid>
                      <Grid item xs={5}>
                        <Link style={{ textDecoration: 'none', color: "#040404" }} to={`/thongtin/${item.id}`} >
                          <img src={`http://52.193.212.182:8080/image/${item.images[0]}`} width={100} height={80} />
                        </Link>
                      </Grid>
                      <Divider />
                    </Grid>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>

      </Grid>



    </Box>
  );
}

export default KhoaHocVaCongNghe;