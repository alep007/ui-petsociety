import React from "react";
import { Helmet } from "react-helmet-async";
import { Grid, Container, Typography, useTheme } from "@mui/material";
import WidgetSummary from "./WidgetSummary";
import PeopleIcon from "@mui/icons-material/People";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import Visits from "./Visits";
import Cities from "./Cities";

const Dashboard = () => {
  const theme = useTheme();
  return (
    <>
      <Helmet>
        <title> Dashboard </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Welcome to the jungle
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <WidgetSummary title="Weekly Sales" total={714000} icon={<CurrencyExchangeIcon />} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <WidgetSummary title="New Users" total={1352831} color="info" icon={<PeopleIcon />} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <WidgetSummary title="Item Orders" total={1723315} color="warning" icon={<AddReactionIcon />} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <WidgetSummary title="Bug Reports" total={234} color="error" icon={<NotificationImportantIcon />} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <Visits
              title="Website Visits"
              subheader="(+43%) than last year"
              chartLabels={[
                "01/01/2003",
                "02/01/2003",
                "03/01/2003",
                "04/01/2003",
                "05/01/2003",
                "06/01/2003",
                "07/01/2003",
                "08/01/2003",
                "09/01/2003",
                "10/01/2003",
                "11/01/2003",
              ]}
              chartData={[
                {
                  name: "Team A",
                  type: "column",
                  fill: "solid",
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: "Team B",
                  type: "area",
                  fill: "gradient",
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: "Team C",
                  type: "line",
                  fill: "solid",
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Cities
              title="Current Visits"
              chartData={[
                { label: "America", value: 4344 },
                { label: "Asia", value: 5435 },
                { label: "Europe", value: 1443 },
                { label: "Africa", value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
