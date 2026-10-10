export const validatePhone = (phone : string) => {
  return phone && phone.startsWith("+380")
}
