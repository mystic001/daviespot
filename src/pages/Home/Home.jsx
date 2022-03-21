import * as React from "react";

// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardHeader from "@mui/material/CardHeader";
// import StarIcon from "@mui/icons-material/StarBorder";

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
        DAVEPOT
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
        <Grid container spacing={2}>
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
            <Item>xs=6</Item>
          </Grid>

          <Grid item xs={12} md={6}>
            <Item>xs=6</Item>
          </Grid>

          <Grid item xs={12}>
            <Item>xs=6</Item>
          </Grid>

          <Grid item xs={12} sx = {{display:"flex",alignItems: "center",justifyContent: "center"}}>
            <Button
              href="#"
              size = 'large'
              variant="contained"
              sx={{
                my: 1,
                mx: 1.5,
                backgroundColor: "black",
              }}
            >
              SUBMIT
            </Button>
          </Grid>
        </Grid>
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
