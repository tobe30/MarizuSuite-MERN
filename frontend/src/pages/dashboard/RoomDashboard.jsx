import React, { useRef, useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import Sidebar from '../../components/SideBars';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const RoomDashboard = () => {
  const [formData, setFormData] = useState({
    name: '',
    desc: '',
    price: '',
    capacity: '',
    isAvailable: true,
  });

  const [img, setImg] = useState(null); // ✅ define image state
  const imgRef = useRef(null);
  const queryClient = useQueryClient();

  const { mutate: createRoom, isPending, isError, error } = useMutation({
    mutationFn: async ({ name, desc, price, capacity, isAvailable, img }) => {
      const res = await fetch('/api/room/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, desc, price, capacity, isAvailable, img }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong');
      return data;
    },
    onSuccess: () => {
      setFormData({
        name: '',
        desc: '',
        price: '',
        capacity: '',
        isAvailable: true,
      });
      setImg(null);
      toast.success("Room created successfully!");
      queryClient.invalidateQueries({ queryKey: ['room'] });
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createRoom({ ...formData, img }); // ✅ use formData
  };

  const handleImgChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImg(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="d-flex" style={{ minHeight: '100vh', background: '#f8f9fa' }}>
      <Sidebar />

      <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center p-4 w-100">
        <div className="w-100" style={{ maxWidth: '800px' }}>
          <h2 className="text-center mb-4 fw-bold">Room Dashboard</h2>
<ToastContainer />
          <Form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-sm mb-5">
            <Form.Group className="mb-3">
              <Form.Label>Room Name *</Form.Label>
              <Form.Control
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter room name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description *</Form.Label>
              <Form.Control
                as="textarea"
                name="desc"
                required
                value={formData.desc}
                onChange={handleChange}
                placeholder="Enter description"
              />
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Price *</Form.Label>
                  <Form.Control
                    type="number"
                    name="price"
                    required
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="Enter price"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Capacity *</Form.Label>
                  <Form.Control
                    type="number"
                    name="capacity"
                    required
                    value={formData.capacity}
                    onChange={handleChange}
                    placeholder="Enter capacity"
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* Image Upload */}
            <Form.Group className="mb-3">
              <Form.Label>Image *</Form.Label>
              <div className="d-flex align-items-center gap-3">
                <Button variant="outline-secondary" onClick={() => imgRef.current.click()}>
                  Upload Image
                </Button>
                {img && <img src={img} alt="Preview" style={{ width: '80px', borderRadius: '5px' }} />}
              </div>
              <Form.Control
                type="file"
                accept="image/*"
                ref={imgRef}
                onChange={handleImgChange}
                hidden
              />
            </Form.Group>

            <Form.Check
              type="checkbox"
              name="isAvailable"
              checked={formData.isAvailable}
              onChange={handleChange}
              label="Available"
              className="mb-3"
            />

            <div className="text-center">
              <Button variant="primary" type="submit" className="px-5">
                {isPending ? 'Loading...' : 'Add Room'}
              </Button>
              {isError && <p className="text-danger mt-2">{error.message}</p>}
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RoomDashboard;
