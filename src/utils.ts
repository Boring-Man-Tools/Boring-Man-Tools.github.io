export function getRandomArrayElement<T>(arr: T[]) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

export function downloadFile(
  filename: string,
  content: string,
  type = "text/plain",
) {
  // Create a Blob with the content and specify the MIME type
  const blob = new Blob([content], { type });

  // Create a temporary link element
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename; // Set the desired file name

  // Append the link, trigger the download, and remove the link
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Release the blob URL
  URL.revokeObjectURL(link.href);
}
