import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";


const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect(props) {
  const classes = useStyles();
  // const [singleInterest, setSingleInterest] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const { interests, setFormData } = props;

  const handleChange = (event) => {
    const {name, value} = event.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
//target: {name: value: }
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="open-select">Category</InputLabel>
        <Select
          labelId="open-select"
          id="open-select"
          open={open}
          name='interest'
          onClose={handleClose}
          onOpen={handleOpen}
          // value={interest}
          onChange={handleChange}
        >
          {interests.map((interest, index) => (
            <MenuItem key={index + 1}value={interest.name}>{interest.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
