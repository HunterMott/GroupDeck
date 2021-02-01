import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import DropDown from "../components/DropDown";

const EventCreate = (props) => {
  const { handleCreate, interests, currentUser } = props;

  const [formData, setFormData] = useState({
  });

  const { title, description, date, img_url, interest_id} = formData;


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setFormData((prevState) => ({
          ...prevState, user_id: currentUser.id
        }));
        handleCreate(formData);
      }}
    >
      <TextField
        name="title"
        id="title"
        label="Title"
        variant="outlined"
        value={title}
        onChange={handleChange}
      />
      <TextField
        name="description"
        id="description"
        label="Description"
        variant="outlined"
        value={description}
        onChange={handleChange}
      />
      <TextField
        name="date"
        id="date"
        label="Date"
        variant="outlined"
        value={date}
        onChange={handleChange}
      />
      <TextField
        name="img_url"
        id="img_url"
        label="Image url"
        variant="outlined"
        value={img_url}
        onChange={handleChange}
      />
      {/* <DropDown interests={interests} setFormData={setFormData} /> */}
      <select defaultValue="default" onChange={handleChange} name='interest_id' value={interest_id}>
        <option disabled value="default">
          -- Select a Category --
        </option>
        {interests.map((interest) => (
          <option value={interest.id} key={interest.id}>
            {interest.name}
          </option>
        ))}
      </select>
      <Button variant="contained" type="submit">
        Login
      </Button>
    </form>
  );
};

export default EventCreate;