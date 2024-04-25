// Admin.js

import React, { useState } from 'react';
import axios from 'axios';
import { fetchProjects } from './api'; // Імпортуємо функцію fetchProjects з файлу api.js

import {
  Button,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Admin() {
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    images: [],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const handleDateChange = (event) => {
    const { name, value } = event.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const handleImageChange = (event) => {
    const files = event.target.files;
    setNewProject({ ...newProject, images: Array.from(files) });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      newProject.title &&
      newProject.description &&
      newProject.startDate &&
      newProject.endDate &&
      Array.isArray(newProject.images) &&
      newProject.images.length > 0
    ) {
      try {
        const formData = new FormData();
        formData.append('title', newProject.title);
        formData.append('description', newProject.description);
        formData.append('startDate', newProject.startDate);
        formData.append('endDate', newProject.endDate);
        newProject.images.forEach((image) => {
          formData.append('images', image);
        });

        const response = await axios.post(
          'http://localhost:5001/projects',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        console.log(response.data);

        updateProjectsList(); 
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const updateProjectsList = async () => {
    try {
      const response = await fetchProjects(); // Викликаємо функцію fetchProjects, яка виконує запит GET на сервер
      const projects = response.data; // Припустимо, що сервер повертає масив об'єктів проектів
      console.log('Projects list updated:', projects);
    } catch (error) {
      console.error('Error updating projects list:', error);
    }
  };

  return (
    <Container style={{ marginTop: '130px' }}>
      <h1>Add New Project</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>Title</FormLabel>
          <FormControl
            type='text'
            name='title'
            value={newProject.title}
            onChange={handleInputChange}
            placeholder='Enter title'
            required
          />
        </FormGroup>

        <FormGroup>
          <FormLabel>Description</FormLabel>
          <FormControl
            as='textarea'
            name='description'
            value={newProject.description}
            onChange={handleInputChange}
            placeholder='Enter description'
            rows={4}
            required
          />
        </FormGroup>

        <FormGroup>
          <FormLabel>Start Date</FormLabel>
          <FormControl
            type='date'
            name='startDate'
            value={newProject.startDate}
            onChange={handleDateChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <FormLabel>End Date</FormLabel>
          <FormControl
            type='date'
            name='endDate'
            value={newProject.endDate}
            onChange={handleDateChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <FormLabel>Images</FormLabel>
          <FormControl
            type='file'
            name='images'
            onChange={handleImageChange}
            multiple
            required
          />
        </FormGroup>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Admin;
