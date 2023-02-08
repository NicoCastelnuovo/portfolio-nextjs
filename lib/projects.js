export const getProjects = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data;
  }
  catch (error) {
    console.log(error);
  }
};