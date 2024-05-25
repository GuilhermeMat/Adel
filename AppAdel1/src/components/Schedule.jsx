"use client";
import { authentication } from "@/auth";
import { useLoadingContext } from "@/context/LoadingContext";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loading from "./Loading";

function createData(dia, evento, hora) {
  return { dia, evento, hora };
}

export default function Schedule() {
  const { isLoading, setGlobalLoading } = useLoadingContext();
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = authentication();
    if (isAuthenticated) {
      localStorage.clear();
      router.push(isAuthenticated);
      return;
    }
    setGlobalLoading(false);
  }, []);

  if (isLoading) return <Loading />;

  const rows = [
    createData("Terça-feira", "PGI", "19h30"),
    createData("Quarta-feira", "Culto de ensino", "19h30"),
    createData("Sábado", "Culto de departamento", "19h30"),
    createData("Domingo", "Culto da família", "19h30"),
  ];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection:"column",
        padding: "0 10px 0 10px"
      }}
    >
      <Box sx={{
        height:"60vh",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between"
      }}>
      <Box sx={{
        textAlign:"center",
        marginTop:"20px"
      }}>
        <Typography variant="h3" fontWeight={800} sx={{
          color:"white",
        }}>
          Agenda
        </Typography>
      </Box>
      <TableContainer
        component={Paper}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "800" }} align="center">
                Dia
              </TableCell>
              <TableCell sx={{ fontWeight: "800" }} align="center">
                Evento
              </TableCell>
              <TableCell sx={{ fontWeight: "800" }} align="center">
                Horário
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.dia}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.dia}</TableCell>
                <TableCell align="center">{row.evento}</TableCell>
                <TableCell align="center">{row.hora}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Box>
    </Box>
  );
}
