export const request = async (url, options) => {
  try {
    const baseUrl = "http://localhost:3001/api/";
    const result = await fetch(`${baseUrl}${url}`);
    const data = await result.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
