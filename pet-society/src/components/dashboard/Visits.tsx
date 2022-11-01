import PropTypes from "prop-types";
import ReactApexChart from "react-apexcharts";
// @mui
import { Card, CardHeader, Box } from "@mui/material";
import useChart from "../common/chart/useChart";

// ----------------------------------------------------------------------

Visits.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartData: PropTypes.array.isRequired,
  chartLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function Visits({ title, subheader, chartLabels, chartData, ...other }: any) {
  const chartOptions = useChart({
    plotOptions: { bar: { columnWidth: "16%" } },
    fill: { type: chartData.map((i: any) => i.fill) },
    labels: chartLabels,
    xaxis: { type: "datetime" },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y: Number) => {
          if (typeof y !== "undefined") {
            return `${y.toFixed(0)} visits`;
          }
          return y;
        },
      },
    },
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        {/* @ts-ignore */}
        <ReactApexChart type="line" series={chartData} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
