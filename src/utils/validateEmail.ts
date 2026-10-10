export const validateEmail = (email : string) => {
  return email && email.length > 12 && email.endsWith("@gmail.com")
}