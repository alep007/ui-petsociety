import { Card, Link, Grid, Typography, Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

type PetCardProps = {
  key: string;
  pet: PetObject;
};
export type PetObject = {
  id: string;
  imgSrc: string;
  name: string;
  date: string;
};

const StyledProductImg = styled("img")({
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});

const PetsCard = ({ key, pet }: PetCardProps) => {
  return (
    <Grid key={key} item xs={12} sm={6} md={3}>
      <Card>
        <Box sx={{ pt: "100%", position: "relative" }}>
          <StyledProductImg alt={pet.name} src={pet.imgSrc} loading={"lazy"} />
        </Box>

        <Stack spacing={2} sx={{ p: 3 }}>
          <Link color="inherit" underline="hover">
            <Typography variant="subtitle2" noWrap>
              {pet.name}
            </Typography>
          </Link>

          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="subtitle1">{pet.date}</Typography>
          </Stack>
        </Stack>
      </Card>
    </Grid>
  );
};
export default PetsCard;
