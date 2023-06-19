import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function Tintuc() {

  const [value, setValue] = useState();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Container maxWidth='md'>
        <Box marginTop={5}>
          <Grid container spacing={8}>
            <Grid item xs={8} >
              <Typography variant="h4">
                Bộ Công an: Vụ tấn công ở Đăk Lăk 'có tổ chức, man rợ'
              </Typography>
              <Typography>
                Vụ tấn công hai trụ sở ủy ban xã Ea Tiêu và Ea Ktur "có tổ chức, rất manh động, liều lĩnh, man rợ và mất nhân tính", theo người phát ngôn Bộ Công an.
                <br />
                Trung tướng Tô Ân Xô, người phát ngôn Bộ Công an, cho biết rạng sáng 11/6 khi xông vào trụ sở UBND xã Ea Ktur, Ea Tiêu, đám đông đập vỡ cửa kính, dùng súng và vũ khí thô sơ tấn công khiến Bí thư xã Ea Ktur, Chủ tịch xã Ea Tiêu và 4 cán bộ công an tử vong; hai công an trọng thương.
              </Typography>
              <img src="sung.jpg" alt="Girl in a jacket" width="550" height="300" />

              <Typography>
                VTV thông tin, rạng sáng 11/6, nhóm nghi phạm xông vào đập phá cửa chính và các cửa sổ hai trụ sở UBND xã Ea Tiêu và Ea Ktur. Đám đông ném bom xăng vào phòng khiến nhiều thiết bị, tài liệu giấy tờ cháy rụi. Hiện trường có nhiều vết đạn, ôtô bị đốt trơ khung.
                <br />
                Sau khi đốt phá và sát hại 4 cán bộ làm nhiệm vụ, nhóm nghi phạm di chuyển ra đường, tiếp tục dùng súng, dao, bom xăng tấn công. Hành vi này làm 9 người chết, 2 người bị thương.
                <br />
                Hàng chục nghi phạm bị bắt sau vụ tấn công hai trụ sở ủy ban xã Ea Tiêu và Ea Ktur đều cư ngụ tại tỉnh Đăk Lăk. Khai với cơ quan điều tra, họ cho biết có bàn bạc trong cuộc họp, phân công nhiệm vụ và được đưa súng, dao, bom xăng, lựu đạn cho từng người.
              </Typography>



            </Grid>

            <Grid item xs={4}>
              <Box marginTop={10} marginLeft={5}>
                <Stack spacing={2}  >
                  <Typography>
                    xem nhiều
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item sx={4}>
                      <img src="1.jpg" alt="Girl in a jacket" width="70" height="50" />
                    </Grid>
                    <Grid item sx={6}>
                      <Typography variant="caption" display="block" gutterBottom>
                        Nhiều người bị phạt vì bình luận xuyên tạc vụ tấn công trụ sở xã ở Đăk Lăk
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container spacing={2}>
                    <Grid item sx={4}>
                      <img src="2.jpg" alt="Girl in a jacket" width="70" height="50" />
                    </Grid>
                    <Grid item sx={6}>
                      <Typography variant="caption" display="block" gutterBottom>
                        Nghi phạm tấn công trụ sở uỷ ban xã khai 'được chỉ đạo xả súng'

                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container spacing={2}>
                    <Grid item sx={4}>
                      <img src="3.jpg" alt="Girl in a jacket" width="70" height="50" />
                    </Grid>
                    <Grid item sx={6}>
                      <Typography variant="caption" display="block" gutterBottom>
                        Cô giáo Lê Thị Dung được giảm án
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container spacing={2}>
                    <Grid item sx={4}>
                      <img src="4.jpg" alt="Girl in a jacket" width="70" height="50" />
                    </Grid>
                    <Grid item sx={6}>
                      <Typography variant="caption" display="block" gutterBottom>
                        Sắp ly hôn, có nên cho chồng mượn thẻ căn cước để vay tín chấp?
                      </Typography>
                    </Grid>
                  </Grid>
                </Stack>
              </Box>
            </Grid>

          </Grid>
        </Box>
      </Container>

    </>
  );
}