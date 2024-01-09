const fromServer = (dataFromServer) => {
  return {
    title: dataFromServer.title,
    subTitle: dataFromServer.subtitle,
    description: dataFromServer.description,
    phone: dataFromServer.phone,
    email: dataFromServer.email,
    web: dataFromServer.web,
    url: dataFromServer.image.url,
    alt: dataFromServer.image.alt,
    state: dataFromServer.address.state,
    country: dataFromServer.address.country,
    city: dataFromServer.address.city,
    street: dataFromServer.address.street,
    houseNumber: dataFromServer.address.houseNumber,
    zip: dataFromServer.address.zip,
  };
};
export { fromServer };
