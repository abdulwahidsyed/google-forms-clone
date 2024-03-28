export const generatePostHeaders = (data) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({ data });
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body,
    redirect: "follow",
  };

  return requestOptions;
};
