import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchPost, setPostSearch } from "../../../redux/postSlice";
import "./Hover.css";

export default function ContentPost() {
  const { posts, recordsFiltered, search, error } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    const timeout = setTimeout(() => {
      find();
    }, 500);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]); // khi redux seearch thay doi, thi se dc goi lai find

  const find = async () => {
    dispatch(searchPost());
  };

  const handleChange = (e) => {
    let newSearch = {
      ...search,
      start: 0,// reset lai trang dau
      size: 3,
      categoryId: e.target.value
    };

    //update thay doi redux search
    dispatch(setPostSearch(newSearch));
  };




  return (
    <Box bgcolor={"#EEEEEE"} ><Box marginTop="20">
      <Grid container spacing={2}>
        <Grid sx={{ marginTop: 10, marginLeft: 5 }} >
          <Stack direction="row">

            <Grid item xs={8} >
              {posts.slice(2, 3).map((post) => (
                <Stack direction="row" spacing={2} key={post.id} >
                  <Link to={`/thongtin/${post.id}`} >
                    <img src={`http://52.193.212.182:8080/image/${post.images[0]}`} alt="nghien cuu" width="470" height="300" />
                  </Link>
                  <Grid>
                    <Typography sx={{ fontSize: 20 }} variant="h3">
                      <Link style={{ textDecoration: 'none', color: "#040404" }} to={`/thongtin/${post.id}`} >
                        {post.title}
                      </Link>

                    </Typography>
                    <ReactMarkdown >
                      Tỷ phú xe điện đánh giá Ấn Độ có tiềm năng lớn về năng lượng bền vững và muốn Tesla có mặt tại đây sớm nhất có thể.
                    </ReactMarkdown>
                  </Grid>
                </Stack>
              ))}

              <Stack marginLeft={-2} direction="row" spacing={4} sx={{ marginTop: 4 }}>
                {posts.slice(1, 4).map((post) => (
                  <Box
                    p={2}
                    borderRadius={3}
                    width="300"
                    height="200"
                    key={post.id}>
                    <Typography sx={{ fontSize: 20 }} variant="h3" color="#0A0606" >
                      <Link style={{ textDecoration: 'none', color: "#040404" }} to={`/thongtin/${post.id}`} >
                        {post.title}
                      </Link>

                    </Typography>
                    <ReactMarkdown>
                      Chân chạy Quách Thị Lan cùng bốn VĐV điền kinh khác dính doping của Việt Nam ở SEA Games 31 bị huỷ toàn bộ thành tích và nhận án phạt cấm thi đấu từ 16 đến 18 tháng.
                    </ReactMarkdown>
                  </Box>
                ))}
              </Stack>
            </Grid >


            <Grid item xs={4}>
              <Box marginLeft={2.5}>
                <a className="icon-footer" href="https://www.facebook.com/">
                  <img src={'pcc.png'} width="320" height="600" />
                </a>

              </Box>
            </Grid>
          </Stack>
        </Grid>

      </Grid>
      <Divider />


    </Box >



    </Box>

  );
}


