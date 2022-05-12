import "./App.css";
import {
  Container,
  AppBar,
  Toolbar,
  TextField,
  Grid,
  Button,
  Box,
  Typography,
  InputAdornment,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material//Search";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import SortIcon from "@mui/icons-material/Sort";
import CustomizedTables from "./CustomizedTables";

function App() {
  return (
    <div className="App">
      <Container maxWidth={"xl"}>
        <AppBar
          style={{
            background: "#e8e8e8",
            color: "black",
            fontSize: "20px",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <Container maxWidth={"xl"}>
            <Toolbar>
              <Typography sx={{ flexGrow: 1 }}>Member Card List</Typography>
              <Box sx={{ display: { xs: "inline", sm: "none" } }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "50%",
                      background: "#31bccc",
                      padding: "10px",
                      marginLeft: "5px",
                    }}
                  >
                    <FiberNewIcon sx={{ color: "white" }} />
                  </div>
                  <div
                    style={{
                      borderRadius: "50%",
                      background: "#31bccc",
                      padding: "10px",
                      marginLeft: "5px",
                    }}
                  >
                    <FiberNewIcon sx={{ color: "white" }} />
                  </div>
                  <div
                    style={{
                      borderRadius: "50%",
                      background: "#31bccc",
                      padding: "10px",
                      marginLeft: "5px",
                    }}
                  >
                    <SearchIcon sx={{ color: "white" }} />
                  </div>
                </div>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <Toolbar />
        <Box mt={5}></Box>
        <Grid container spacing={2}>
          <Grid item xs={4} sx={{ display: { xs: "none", sm: "block" } }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <div style={{ paddingRight: "10px" }}>
                {" "}
                <SortIcon />
              </div>
              <TextField
                fullWidth
                id="standard-basic"
                label="Card Code"
                variant="standard"
              />
            </div>
          </Grid>
          <Grid item xs={4} sx={{ display: { xs: "none", sm: "block" } }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <div style={{ paddingRight: "10px" }}>
                {" "}
                <SortIcon />
              </div>
              <TextField
                fullWidth
                id="standard-basic"
                label="Account Code"
                variant="standard"
              />
            </div>
          </Grid>
          <Grid item xs={4} sx={{ display: { xs: "none", sm: "block" } }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <div>
                {" "}
                <SortIcon />
              </div>
              <TextField
                fullWidth
                id="standard-basic"
                label="Name"
                variant="standard"
              />
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={4} sx={{ display: { xs: "none", sm: "block" } }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <div style={{ paddingRight: "10px" }}>
                {" "}
                <DateRangeIcon />
              </div>
              <TextField
                fullWidth
                id="standard-basic"
                label="Standard"
                variant="standard"
              />
            </div>
          </Grid>
          <Grid item xs={4} sx={{ display: { xs: "none", sm: "block" } }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <div style={{ paddingRight: "10px" }}>
                {" "}
                <DateRangeIcon />
              </div>
              <TextField
                fullWidth
                id="standard-basic"
                label="Standard"
                variant="standard"
              />
            </div>
          </Grid>
          <Grid item xs={4} sx={{ display: { xs: "none", sm: "block" } }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <div style={{ paddingRight: "10px" }}>
                {" "}
                <DateRangeIcon />
              </div>
              <TextField
                fullWidth
                id="standard-basic"
                label="Standard"
                variant="standard"
              />
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={4} sx={{ display: { xs: "none", sm: "block" } }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <div style={{ paddingRight: "10px" }}>
                {" "}
                <DateRangeIcon />
              </div>
              <TextField
                fullWidth
                id="standard-basic"
                label="Standard"
                variant="standard"
              />
            </div>
          </Grid>
          <Grid item xs={4} sx={{ display: { xs: "none", sm: "block" } }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <div style={{ paddingRight: "10px" }}>
                {" "}
                <DateRangeIcon />
              </div>
              <TextField
                fullWidth
                id="standard-basic"
                label="Standard"
                variant="standard"
              />
            </div>
          </Grid>
          <Grid item xs={4} sx={{ display: { xs: "none", sm: "block" } }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <div style={{ paddingRight: "10px" }}>
                {" "}
                <DateRangeIcon />
              </div>
              <TextField
                fullWidth
                id="standard-basic"
                label="Standard"
                variant="standard"
              />
            </div>
          </Grid>
        </Grid>
        <Box pt={3}></Box>

        <Grid mt={5} pt={5} sx={{ display: { xs: "none", sm: "inline" } }}>
          <div style={{ display: "flex" }}>
            <div style={{ flexGrow: 1 }}>
              <Button
                variant="contained"
                style={{ background: "#31bccc", marginRight: "5px" }}
              >
                NEW
              </Button>
              <Button variant="contained" style={{ background: "#31bccc" }}>
                BULK CREATE NEW CARD
              </Button>
            </div>
            <div>
              <Button variant="contained" style={{ background: "#31bccc" }}>
                CLEAR
              </Button>
              <Button
                variant="contained"
                style={{ background: "#31bccc", marginLeft: "5px" }}
              >
                SEARCH
              </Button>
            </div>
          </div>
        </Grid>
        <Box pt={3}></Box>

        <Grid xs={12}>
          <CustomizedTables />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
