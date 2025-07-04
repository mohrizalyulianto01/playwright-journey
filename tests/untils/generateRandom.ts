export function generateRandomEmail() {
  return `user_${Math.floor(Math.random() * 1000)}@test.com`;
}

//function to generate random password
export function generateRandomPassword() {
  const length = 8;
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLM0123456789';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}