import React, { useState, useEffect } from "react";
import { Form, Button, Table, Row, Col, Alert } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import type { Country, FormData } from "../../data/InterfaceForm";

// Componente principal del formulario de contacto
const FormContact: React.FC = () => {
  // Estado para la lista de países obtenidos de la API
  const [countries, setCountries] = useState<Country[]>([]);
  // Estado para los datos del formulario
  const [formData, setFormData] = useState<FormData>({
    id: "",
    name: "",
    lastName: "",
    address: "",
    email: "",
    country: "",
    capital: "",
    message: "",
  });
  // Estado para los datos guardados (envíos realizados)
  const [savedData, setSavedData] = useState<FormData[]>([]);
  // Estado para controlar si se está editando un registro
  const [editingId, setEditingId] = useState<string | null>(null);
  // Estado para mostrar errores en el formulario
  const [error, setError] = useState<string | null>(null);

  // Efecto para obtener países de la API y cargar datos guardados de localStorage
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        // Consulta a la API de países en español
        const response = await fetch(
          "https://restcountries.com/v3.1/lang/spanish"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Country[] = await response.json();
        // Ordena los países alfabéticamente
        const sortedData = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sortedData);
      } catch (e: any) {
        setError(`Failed to fetch countries: ${e.message}`);
        console.error("Error fetching countries:", e);
      }
    };
    fetchCountries();

    // Carga datos guardados del formulario desde localStorage
    const storedData = localStorage.getItem("contactFormData");
    if (storedData) {
      setSavedData(JSON.parse(storedData));
    }
  }, []);

  // Efecto para guardar los datos enviados en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem("contactFormData", JSON.stringify(savedData));
  }, [savedData]);

  // Maneja los cambios en los campos del formulario
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Si el campo cambiado es "country", actualiza la capital automáticamente
    if (name === "country") {
      const selectedCountry = countries.find(
        (country) => country.name.common === value
      );
      setFormData((prevData) => ({
        ...prevData,
        capital: selectedCountry?.capital?.[0] || "",
      }));
    }
  };

  // Maneja el envío del formulario (crear o editar registro)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validación de campos obligatorios
    if (
      !formData.name ||
      !formData.lastName ||
      !formData.email ||
      !formData.country ||
      !formData.capital
    ) {
      setError("Por favor, completa todos los campos obligatorios.");
      return;
    }

    // Si se está editando, actualiza el registro existente
    if (editingId) {
      setSavedData((prevData) =>
        prevData.map((item) =>
          item.id === editingId ? { ...formData, id: editingId } : item
        )
      );
      setEditingId(null);
    } else {
      // Si es un nuevo registro, lo agrega con un id único
      setSavedData((prevData) => [...prevData, { ...formData, id: uuidv4() }]);
    }

    // Limpia el formulario después de enviar
    setFormData({
      id: "",
      name: "",
      lastName: "",
      address: "",
      email: "",
      country: "",
      capital: "",
      message: "",
    });
  };

  // Permite editar un registro existente
  const handleEdit = (id: string) => {
    const itemToEdit = savedData.find((item) => item.id === id);
    if (itemToEdit) {
      setFormData(itemToEdit);
      setEditingId(id);
    }
  };

  // Elimina un registro de los datos guardados
  const handleDelete = (id: string) => {
    setSavedData((prevData) => prevData.filter((item) => item.id !== id));
  };

  // Renderiza el formulario y la tabla de datos enviados
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Formulario de Contacto</h2>
      {/* Muestra error si existe */}
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          {/* Campo Nombre */}
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Ingresa tu nombre"
              required
            />
          </Form.Group>

          {/* Campo Apellido */}
          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Ingresa tu apellido"
              required
            />
          </Form.Group>
        </Row>

        {/* Campo Dirección */}
        <Form.Group className="mb-3" controlId="formGridAddress">
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="1234 Calle Principal"
            required
          />
        </Form.Group>

        {/* Campo Email */}
        <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="correo@ejemplo.com"
            required
          />
        </Form.Group>

        <Row className="mb-3">
          {/* Selector de País */}
          <Form.Group as={Col} controlId="formGridCountry">
            <Form.Label>País</Form.Label>
            <Form.Select
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              required
            >
              <option value="">Selecciona un país</option>
              {countries.map((country) => (
                <option key={country.name.common} value={country.name.common}>
                  {country.name.common}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          {/* Campo Capital (se autocompleta según país) */}
          <Form.Group as={Col} controlId="formGridCapital">
            <Form.Label>Capital</Form.Label>
            <Form.Control
              type="text"
              name="capital"
              value={formData.capital}
              readOnly
              placeholder="Capital del país"
            />
          </Form.Group>
        </Row>

        {/* Campo Mensaje */}
        <Form.Group className="mb-3" controlId="formGridMessage">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={3}
            placeholder="Escribe tu mensaje aquí..."
          />
        </Form.Group>

        {/* Botón de envío */}
        <Button variant="primary" type="submit">
          {editingId ? "Actualizar" : "Enviar"}
        </Button>
      </Form>

      {/* Tabla de datos enviados */}
      <h3 className="mt-5 mb-3">Datos Enviados</h3>
      {savedData.length === 0 ? (
        <Alert variant="info">No hay datos guardados aún.</Alert>
      ) : (
        <Table striped bordered hover responsive className="mt-3">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Dirección</th>
              <th>Email</th>
              <th>País</th>
              <th>Capital</th>
              <th>Mensaje</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {savedData.map((data) => (
              <tr key={data.id}>
                <td>{data.name}</td>
                <td>{data.lastName}</td>
                <td>{data.address}</td>
                <td>{data.email}</td>
                <td>{data.country}</td>
                <td>{data.capital}</td>
                <td>{data.message}</td>
                <td>
                  {/* Botón para editar registro */}
                  <Button
                    variant="warning"
                    size="sm"
                    className="me-2"
                    onClick={() => handleEdit(data.id)}
                  >
                    Editar
                  </Button>
                  {/* Botón para eliminar registro */}
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(data.id)}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default FormContact;