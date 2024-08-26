
export async function getDepartments() {
  try {
    const response = await fetch("https://api-colombia.com/api/v1/Department");
    if (!response.ok) {
      throw new Error("Error al obtener los departamentos");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}
export async function getDepartmentDetails(id) {
  try {
    const response = await fetch(
      `https://api-colombia.com/api/v1/Department/${id}`
    );
    if (!response.ok) {
      throw new Error("Error al obtener los detalles del departamento");
    }
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export async function getDepartmentCities(id) {
  try {
    const response = await fetch(
      `https://api-colombia.com/api/v1/Department/${id}/cities`
    ); 
    if (!response.ok) {
      throw new Error("Error al obtener las ciudades del departamento");
    }
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

export async function getDepartmentNatureAreas(id) {
  try {
    const response = await fetch(
      `https://api-colombia.com/api/v1/Department/${id}/naturalareas`
    ); 
    if (!response.ok) {
      throw new Error("Error al obtener las áreas naturales del departamento");
    }
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

export async function getInvasiveSpecies() {
  try {
    const response = await fetch(
      "https://api-colombia.com/api/v1/Invasivespecie"
    );
    if (!response.ok) {
      throw new Error("Error al obtener las especies invasoras");
    }
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}
