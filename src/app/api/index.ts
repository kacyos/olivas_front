export const getCases = async () => {
  return fetch(
    "https://www.olivas.digital/wp-json/wp/v2/posts?categories=403"
  ).then((response) => response.json());
};

export const getNotices = async () => {
  return fetch(
    "https://www.olivas.digital/wp-json/wp/v2/posts?categories=373",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
