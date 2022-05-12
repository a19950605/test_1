import React from "react";
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
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#31bccc",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  "&:hover": {
    background: "#bdfdff",
  },
}));
function createData(
  id,
  cardCode,
  accountCode,
  name,
  startDate,
  endDate,
  createDate
) {
  return { id, cardCode, accountCode, name, startDate, endDate, createDate };
}

const rows = [
  createData(
    "86514",
    49821881,
    "",
    "",
    "2010-12-01",
    "2029-04-05",
    "2020-12-29 15:44:58"
  ),
  createData(
    "86513",
    49825361,
    "",
    "",
    "2010-12-01",
    "2029-04-05",
    "2020-12-29 15:44:58"
  ),
  createData(
    "86512",
    49821312,
    "",
    "",
    "2010-12-01",
    "2029-04-05",
    "2020-12-29 15:44:58"
  ),
  createData(
    "86511",
    49821881,
    "",
    "",
    "2010-12-01",
    "2029-04-05",
    "2020-12-29 15:44:58"
  ),
  createData(
    "86510",
    49821882,
    "",
    "",
    "2010-12-01",
    "2029-04-05",
    "2020-12-29 15:44:58"
  ),
  createData(
    "86510",
    49821882,
    "",
    "",
    "2010-12-01",
    "2029-04-05",
    "2020-12-29 15:44:58"
  ),
  createData(
    "86510",
    49821882,
    "",
    "",
    "2010-12-01",
    "2029-04-05",
    "2020-12-29 15:44:58"
  ),
];

function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 750 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <div>ID</div>
                <div>
                  {" "}
                  <ArrowDropUpIcon />
                </div>
              </div>
            </StyledTableCell>
            <StyledTableCell align="left">Card Code </StyledTableCell>
            <StyledTableCell align="left">Account Code</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Start Date</StyledTableCell>
            <StyledTableCell align="left">End Date</StyledTableCell>
            <StyledTableCell align="left">Create Date</StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="left">{row.cardCode}</StyledTableCell>
              <StyledTableCell align="left">{row.accountCode}</StyledTableCell>
              <StyledTableCell align="left">{row.name}</StyledTableCell>
              <StyledTableCell align="left">{row.startDate}</StyledTableCell>
              <StyledTableCell align="left">{row.endDate}</StyledTableCell>
              <StyledTableCell align="left">{row.createDate}</StyledTableCell>
              <StyledTableCell align="left">
                <a href="" style={{ marginRight: "5px", color: "#31bbbc" }}>
                  Details
                </a>
                |
                <a href="" style={{ marginLeft: "5px", color: "#31bbbc" }}>
                  Edit
                </a>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default CustomizedTables;
