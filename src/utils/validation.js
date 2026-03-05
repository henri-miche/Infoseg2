const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value) {
  if (!value || typeof value !== 'string') return false;
  return EMAIL_REGEX.test(value.trim());
}

export function isValidPassword(value) {
  if (!value || typeof value !== 'string') return false;
  return value.length >= 6;
}

export function validateLogin(email, password) {
  if (!email?.trim()) return 'Preencha o e-mail.';
  if (!isValidEmail(email)) return 'E-mail inválido.';
  if (!password) return 'Preencha a senha.';
  if (!isValidPassword(password)) return 'A senha deve ter pelo menos 6 caracteres.';
  return null;
}

export function validateCadastro(email, password, nome) {
  const loginErr = validateLogin(email, password);
  if (loginErr) return loginErr;
  if (!nome?.trim()) return 'Preencha o nome.';
  return null;
}
