import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {




  const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };

  return (
    <div>
      <Box sx={{ backgroundColor: '#444444' }}>
        <Typography color='#fff' variant='h3' fontSize={20} p={2} sx={{ justifyContent: 'center', textAlign: 'center' }}>
          NHÓM DANH MỤC
        </Typography>
      </Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Mức giá</Typography>
        </AccordionSummary>
        <Divider />
        <AccordionDetails>
          <Typography>
            Dưới 1 tỉ 500 triệu
          </Typography>
        </AccordionDetails>
        <Divider />
        <AccordionDetails>
          <Typography>
            Dưới 1 tỉ 500 triệu
          </Typography>

        </AccordionDetails>
        <Divider />
        <AccordionDetails>
          <Typography>
            Dưới 1 tỉ 500 triệu
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />} >
          <Link style={{ textDecoration: 'none', color: "#151212" }} to={`/collection/xe-dang-ban`}>
            <Typography>Thương hiệu</Typography>
          </Link>
        </AccordionSummary>

      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />} >
          <Link style={{ textDecoration: 'none', color: "#151212" }} to={`/collection/xe-dang-ban`}>
            <Typography>Năm sản xuất</Typography>
          </Link>
        </AccordionSummary>

      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />} >
          <Link style={{ textDecoration: 'none', color: "#151212" }} to={`/collection/xe-dang-ban`}>
            <Typography>Màu xe</Typography>
          </Link>
        </AccordionSummary>

      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />} >
          <Link style={{ textDecoration: 'none', color: "#151212" }} to={`/collection/xe-dang-ban`}>
            <Typography>Xe Đã bán</Typography>
          </Link>
        </AccordionSummary>

      </Accordion>



    </div>
  );
}
