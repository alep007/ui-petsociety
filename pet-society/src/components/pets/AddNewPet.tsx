import {
  AppBar,
  Button,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  Slide,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React, { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";

export type PetDetails = {
  name: string;
  owner: string;
  //   race: string;
  //   breed: string;
  //   agre: number;
};

const AddNewPet = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<PetDetails>();

  const [open, setModal] = useState(false);

  const onClickAddNewPet = () => {
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
  };

  const onSubmit: SubmitHandler<PetDetails> = (data) => {
    console.log(data);
  };

  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  return (
    <>
      <Button onClick={onClickAddNewPet} variant="contained">
        Add new pet
      </Button>
      <Dialog open={open} onClose={handleClose} fullScreen>
        {/* TransitionComponent={Transition}> */}
        <AppBar color="secondary" sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              New Pet Form
            </Typography>
            <Button autoFocus color="inherit" onClick={handleSubmit(onSubmit)}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <Controller
                control={control}
                name={"name"}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    id="name"
                    label="Name"
                    required
                    type="text"
                    onChange={onChange}
                    value={value}
                    fullWidth
                    error={errors.name?.message === ""}
                    helperText={errors.name?.message === "" ? "This field is required" : ""}
                  />
                )}
              />
            </Grid>
            <Grid item xs={5}>
              <Controller
                control={control}
                name={"owner"}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    id="owner"
                    label="Owner"
                    required
                    type="text"
                    onChange={onChange}
                    value={value}
                    fullWidth
                    error={errors.owner?.message === ""}
                    helperText={errors.owner?.message === "" ? "This field is required" : ""}
                  />
                )}
              />
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default AddNewPet;
