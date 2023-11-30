import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled as styledComponent } from "styled-components";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";

import moment from "moment";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
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
}));

export default function TaskTable({ data, isLoading, requestDelete }) {
  const navigate = useNavigate();
  return (
    <TableWrapper>
      <ControllerWrapper>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          color="success"
          onClick={() => navigate("/tasks/create")}
        >
          Add a task
        </Button>
      </ControllerWrapper>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">No</StyledTableCell>
              <StyledTableCell align="center">Title</StyledTableCell>
              <StyledTableCell align="center">Description</StyledTableCell>
              <StyledTableCell align="center">Deadline</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <StyledTableRow key={row._id}>
                <StyledTableCell align="left">{index + 1}</StyledTableCell>
                <StyledTableCell align="center">{row.title}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.description}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {moment(row.deadline).format("MMMM DD, YYYY")}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <ButtonWrapper>
                    <Button
                      variant="outlined"
                      startIcon={<DeleteIcon />}
                      color="secondary"
                      onClick={() => requestDelete({ _id: row._id })}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="contained"
                      startIcon={<EditIcon />}
                      color="secondary"
                      onClick={() => navigate(`/tasks/${row._id}`)}
                    >
                      Edit
                    </Button>
                  </ButtonWrapper>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </TableWrapper>
  );
}

const TableWrapper = styledComponent.div`
    padding: 50px 100px;
`;
const ButtonWrapper = styledComponent.div`
    display: flex;
    gap: 20px;
    justify-content: right;
`;
const ControllerWrapper = styledComponent.div`
    display: flex;
    justify-content: right;
    margin: 15px 0px;
`;
