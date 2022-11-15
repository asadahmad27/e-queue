const toBase64 = async (file: File): Promise<ArrayBuffer | string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.addEventListener('load', () => {
      resolve(reader.result || '');
    });
    reader.addEventListener('error', (error) => {
      reject(error);
    });
  });
export default toBase64;
