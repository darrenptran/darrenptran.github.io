export async function sendEmail(data) {
  const response = await fetch('/api/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // Convert the data object to JSON for the request
  });

  if (!response.ok) {
    throw new Error('Failed to send email'); // Throw an error if the request fails
  }
}
