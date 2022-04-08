import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import TemporaryDrawer from "../../components/TemporaryDrawer";
import SimpleBackdrop from "../../components/SimpleBackdrop";
import TextField from "@mui/material/TextField";
import "./home.css";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        DAVEPOTS
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// const tiers = [
//   {
//     title: "Free",
//     price: "0",
//     description: [
//       "10 users included",
//       "2 GB of storage",
//       "Help center access",
//       "Email support",
//     ],
//     buttonText: "Sign up for free",
//     buttonVariant: "outlined",
//   },
//   {
//     title: "Pro",
//     subheader: "Most popular",
//     price: "15",
//     description: [
//       "20 users included",
//       "10 GB of storage",
//       "Help center access",
//       "Priority email support",
//     ],
//     buttonText: "Get started",
//     buttonVariant: "contained",
//   },
//   {
//     title: "Enterprise",
//     price: "30",
//     description: [
//       "50 users included",
//       "30 GB of storage",
//       "Help center access",
//       "Phone & email support",
//     ],
//     buttonText: "Contact us",
//     buttonVariant: "outlined",
//   },
// ];

// const footers = [
//   {
//     title: "Company",
//     description: ["Team", "History", "Contact us", "Locations"],
//   },
//   {
//     title: "Features",
//     description: [
//       "Cool stuff",
//       "Random feature",
//       "Team feature",
//       "Developer stuff",
//       "Another one",
//     ],
//   },
//   {
//     title: "Resources",
//     description: [
//       "Resource",
//       "Resource name",
//       "Another resource",
//       "Final resource",
//     ],
//   },
//   {
//     title: "Legal",
//     description: ["Privacy policy", "Terms of use"],
//   },
// ];

function Home() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const [open, setOpen] = React.useState(false);
  const [emailContent, setEmailContent] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const notify = (feedback) => toast.success(feedback, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined}
    );
  const validateEmail = (emailAdress) => {
    let regexEmail = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
    if (emailAdress.match(regexEmail)) {
      return true;
    } else {
      return false;
    }
  };

  const [error, setError] = React.useState({
    emailError: false,
    nameError: false,
    messageError: false,
  });
  const handleClose = () => {
    setOpen(false);
  };
  // const handleToggle = () => {
  //   setOpen(!open);
  // };

  const detailValidationFailed = () => {
    if (emailContent.name === "") {
      setError({ ...error, nameError: true });
      return true;
    } else if (!validateEmail(emailContent.email)) {
      setError({ ...error, emailError: true });
      return true;
    } else if (emailContent.message === "") {
      setError({ ...error, messageError: true });
      return true;
    } else {
      console.log("In d else ran");
      setError({
        nameError: false,
        messageError: false,
        emailError: false,
      });

      return false;
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(emailContent);
    console.log(error);
    if (!detailValidationFailed()) {
      setOpen(true);
      emailjs
        .sendForm(
          "service_kzzsewh",
          "template_ppqihxw",
          e.target,
          "iMeGneUxWK9PjbNw9"
        )
        .then((res) => {
          if (res.status === 200) {
            console.log(res);
            notify("Your mail was succefully sent");
            setEmailContent({
              name: "",
              email: "",
              message: "",
            })
            setOpen(false);
          }
        })
        .catch((err) => {
          setOpen(false);
          notify("Message was not sent");
          err.message();
        });
    }
  };
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `0px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            DAVEPOT
          </Typography>

          {!matches ? (
            <TemporaryDrawer />
          ) : (
            <>
              <nav>
                <Link
                  variant="button"
                  color="text.primary"
                  underline="none"
                  href="https://www.google.com/"
                  sx={{ my: 1, mx: 1.5 }}
                >
                  About
                </Link>
                <Link
                  variant="button"
                  color="text.primary"
                  underline="none"
                  href="#"
                  sx={{ my: 1, mx: 1.5 }}
                >
                  Contact
                </Link>
              </nav>

              <Button
                href="#"
                variant="contained"
                sx={{ my: 1, mx: 1.5, backgroundColor: "black" }}
              >
                View work
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container maxWidth="lg" component="main" sx={{ py: 8, px: 6 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mt: 5 }}>
          <Grid item xs={6}>
            <Item>xs=6</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>xs=6</Item>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mt: 5 }}>
          <Grid item xs={12}>
            <Item>xs=6</Item>
          </Grid>

          <Grid item xs={4} md={2}>
            <Item>xs=6</Item>
          </Grid>

          <Grid item xs={8} md={10}>
            <Item>xs=6</Item>
          </Grid>
        </Grid>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="lg" component="main" sx={{ px: 6 }}>
        <form onSubmit={sendEmail}>
          <Grid
            container
            spacing={2}
            sx={{
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: "12px",
              paddingRight: "12px",
            }}
          >
            <Grid item xs={12}>
              <Typography
                variant="h4"
                align="center"
                color="text.primary"
                component="p"
              >
                Want to get in touch?
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                error={error.nameError}
                helperText="Name is required"
                id="outlined-basic"
                fullWidth
                label="Name"
                value = {emailContent.name}
                onChange={(e) => {
                  setEmailContent({ ...emailContent, name: e.target.value });
                }}
                placeholder="Enter name"
                name="name"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                error={error.emailError}
                id="outlined-basic"
                fullWidth
                value = {emailContent.email}
                onChange={(e) => {
                  setEmailContent({ ...emailContent, email: e.target.value });
                }}
                label="Email Address"
                name="email"
                helperText="Email is required"
                placeholder="Enter Email Address"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                error={error.messageError}
                id="outlined-multiline-static"
                label="Message"
                value={emailContent.message}
                name="message"
                onChange={(e) => {
                  setEmailContent({ ...emailContent, message: e.target.value });
                }}
                helperText="Message cannot be empty"
                fullWidth
                multiline
                rows={4}
                placeholder="Enter your message"
              />
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <input className="btn" type="submit"></input>
              {/* <Button
              href="#"
              type = "submit"
              size="large"
              variant="contained"
              sx={{
                my: 1,
                mx: 1.5,
                backgroundColor: "black",
              }}
            >
              SUBMIT
            </Button> */}
              <ToastContainer />
              <SimpleBackdrop open={open} handleClose={handleClose} />
            </Grid>
          </Grid>
        </form>
      </Container>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Copyright sx={{ mt: 5 }} />
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}

export default Home;
