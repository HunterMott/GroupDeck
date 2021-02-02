import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EventEdit = (props) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    img_url: "",
  });
  const { events, handleUpdate } = props;
  const { id } = useParams();
  const { title, description, date, img_url } = formData;

  useEffect(() => {
    const prefillFormData = () => {
      const eventItem = events.find((eventItem) => {
        return eventItem.id === Number(id);
      });
      setFormData({
        title: eventItem.title,
        description: eventItem.description,
        date: eventItem.date,
        img_url: eventItem.img_url,
      });
    };
    if (events.length) {
      prefillFormData();
    }
  }, [events, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className='formdiv'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdate(Number(id), formData);
        }}
      >
        <TextField
          name="title"
          id="title"
          label="Title"
          variant="outlined"
          value={title}
          required
          onChange={handleChange}
        />
        <TextField
          name="description"
          id="description"
          label="Description"
          variant="outlined"
          value={description}
          onChange={handleChange}
          required
        />
        <TextField
          name="date"
          id="date"
          label="Date"
          variant="outlined"
          value={date}
          onChange={handleChange}
          required
        />
        <TextField
          name="img_url"
          id="img_url"
          label="Image url"
          variant="outlined"
          value={img_url}
          onChange={handleChange}
          required
        />
        <Button className='formbutton' variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default EventEdit;
