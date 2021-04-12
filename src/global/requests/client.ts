
async function client(endpoint: string, { headers, method, body }
= { headers: {}, method: 'GET', body: null }): Promise<any[] | any> {

  const options = {
    method,
    headers: { 'Content-Type': 'application/json', ...headers },
    body: body ? JSON.stringify(body) : undefined,
  };

  try {
    const response = await fetch(endpoint, options);
    const content = await response.text();
    return content.length > 0 ? JSON.parse(content) : {}; // prevents errors on empty responses
  } catch(e) {
    throw Error(`Error when performing fetch request: ${e}`);
  }

}

export default client;