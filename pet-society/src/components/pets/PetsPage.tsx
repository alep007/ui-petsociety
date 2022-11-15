import { Button, Grid, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import React from "react";
import { Helmet } from "react-helmet-async";
import PetsCard, { PetObject } from "./PetsCard";

const PETS: Array<PetObject> = [
  {
    id: "1",
    date: new Date().toDateString(),
    imgSrc:
      "https://raw.githubusercontent.com/shiross/shiro/main/shiroapp/assets/img/drago.jpg?token=GHSAT0AAAAAABXU67LIYPYHAMROWZI2XIMIY3DZYLQ",
    name: "draco",
  },
  {
    id: "2",
    date: new Date().toDateString(),
    imgSrc:
      "https://raw.githubusercontent.com/shiross/shiro/main/shiroapp/assets/img/drago.jpg?token=GHSAT0AAAAAABXU67LIYPYHAMROWZI2XIMIY3DZYLQ",
    name: "Shiroksy",
  },
  {
    id: "3",
    date: new Date().toDateString(),
    imgSrc:
      "https://raw.githubusercontent.com/shiross/shiro/main/shiroapp/assets/img/drago.jpg?token=GHSAT0AAAAAABXU67LJOGVF4CWTSNLIVFOGY3D2M7A",
    name: "tuu",
  },
];

const PetsPage = () => {
  return (
    <>
      <Helmet>
        <title> Pets </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Pets
          </Typography>
          <Button variant="contained">Add new pet</Button>
        </Stack>

        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          {/* <BlogPostsSearch posts={POSTS} />
          <BlogPostsSort options={SORT_OPTIONS} /> */}
        </Stack>

        <Grid container spacing={3}>
          {PETS.map((pet) => {
            return <PetsCard key={pet.id} pet={pet} />;
          })}
        </Grid>
      </Container>
    </>
  );
};

export default PetsPage;
