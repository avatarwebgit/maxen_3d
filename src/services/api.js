const baseUrl = "https://maxen.life/api/menus";

export const getLocaleFile = async (lng) => {
  const response = await fetch(baseUrl, {
    headers: {
      "Accept-Language": `${lng}`,
    },
    method: "GET",
  });
  const result = await response.json();
  return { response, result };
};
