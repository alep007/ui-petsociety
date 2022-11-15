import { Card, Link, CardContent, Grid, Typography, Box, Button } from "@mui/material";
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

const StyledCardMedia = styled("div")({
  position: "relative",
  paddingTop: "calc(100% * 3 / 4)",
});
const StyledTitle = styled(Link)({
  height: 44,
  overflow: "hidden",
  WebkitLineClamp: 2,
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
});

const StyledCover = styled("img")({
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});

const PetsCard = ({ key, pet }: PetCardProps) => {
  return (
    <>
      <Button>nel</Button>
      <Grid item xs={12} sm={6} md={3}>
        <Card key={key} sx={{ position: "relative" }}>
          <CardContent
            sx={{
              pt: 4,
              bottom: 0,
              width: "100%",
              position: "absolute",
            }}
          >

            <StyledCardMedia>
              <StyledCover alt={pet.name} src={pet.imgSrc} loading="lazy" />
            </StyledCardMedia>
            <Typography gutterBottom variant="caption" sx={{ color: "text.disabled", display: "block" }}>
              {pet.date}
            </Typography>

            <StyledTitle color="inherit" variant="subtitle2" underline="hover">
              {pet.name}
            </StyledTitle>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};
export default PetsCard;
