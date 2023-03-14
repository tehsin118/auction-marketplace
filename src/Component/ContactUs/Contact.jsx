import * as React from "react";
import "./contact.css";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Icon } from "@iconify/react";

const Contact = () => {
  return (
    <div className="c-main">
      <div className="c-inner row">
        <div className="col-lg-6 col-sm-12">
          <h1 className="c-title">CONTACT US</h1>

          <div className="email-input">
            <Box sx={{ "& > :not(style)": { m: 1 } }}>
              <FormControl variant="standard">
                <InputLabel htmlFor="input-with-icon-adornment">
                  Email
                </InputLabel>
                <Input
                  id="input-with-icon-adornment"
                  endAdornment={
                    <InputAdornment position="end">
                      <AccountCircle />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
          </div>

          <div className="name-input">
            <Box sx={{ "& > :not(style)": { m: 1 } }}>
              <FormControl variant="standard">
                <InputLabel htmlFor="input-with-icon-adornment">
                  Name
                </InputLabel>
                <Input
                  id="input-with-icon-adornment"
                  endAdornment={
                    <InputAdornment position="end">
                      <AccountCircle />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
          </div>

          <div className="message-input">
            <Box sx={{ "& > :not(style)": { m: 1 } }}>
              <FormControl variant="standard">
                <InputLabel htmlFor="input-with-icon-adornment">
                  Message
                </InputLabel>
                <Input
                  id="input-with-icon-adornment"
                  endAdornment={
                    <InputAdornment position="end">
                      <AccountCircle />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
          </div>

          <div className="btn">
            <button>Get in Touch</button>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12 c-content-r">
          <div className="c-para">
            <p>For discussions and our latest updates follow us on</p>
            <p>Twitter： @bidauction</p>
          </div>
          <div className="c-para mt-5">
            <p>For cooperation , please contact us at </p>
            <p>Email： hello@bidauction.io.</p>
          </div>

          <div className="c-social-icon">
            <div className="mycircle">
              <Icon
                icon="typcn:social-twitter"
                className="icos"
                width="40"
                height="40"
              />
            </div>
            <div className="mycircle">
              <Icon
                icon="ic:round-discord"
                className="icos"
                width="40"
                height="40"
              />
            </div>
            <div className="mycircle">
              <Icon
                icon="ic:sharp-telegram"
                className="icos"
                width="40"
                height="40"
              />
            </div>
            <div className="mycircle">
              <Icon
                icon="ri:medium-fill"
                className="icos"
                width="40"
                height="40"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
