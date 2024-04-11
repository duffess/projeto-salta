export function handleChange(event, formData, setFormData) {
    const updatedFormData = { ...formData, [event.target.name]: event.target.value };
    setFormData(updatedFormData);
  }
  