import { Facebook } from '@mui/icons-material';
import React from 'react';
import './Footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} - My Blog. All rights reserved.</p>
        <a className="icon-footer" href="https://github.com/"><GitHubIcon/></a>
        <a className="icon-footer" href="https://www.google.com.vn/"><GoogleIcon/></a>
        <a className="icon-footer" href="https://www.facebook.com/"><FacebookIcon/></a>
      </div>
    </footer>
  );
}

