export const copyContact = (
  contact: string,
  message: string,
) => {
  navigator.clipboard.writeText(contact).then(
    () => {
      alert(message);
    },
    () => {
      alert('Ошибка копирования данных');
    },
  );
};
