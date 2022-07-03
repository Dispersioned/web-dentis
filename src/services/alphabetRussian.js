export default function alphabetRussian(num) {
  const startCode = 1073; // russian a
  return String.fromCharCode(startCode - 2 + num);
}
