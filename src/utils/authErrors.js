export function getAuthErrorMessage(code) {
  const messages = {
    'auth/invalid-email': 'E-mail inválido.',
    'auth/wrong-password': 'Senha inválida.',
    'auth/user-not-found': 'Usuário não encontrado.',
    'auth/weak-password': 'A senha deve ter pelo menos 6 caracteres.',
    'auth/email-already-in-use': 'Este e-mail já está cadastrado.',
    'auth/too-many-requests': 'Muitas tentativas. Tente novamente mais tarde.',
    'auth/network-request-failed': 'Erro de conexão. Verifique sua rede.',
    'auth/invalid-credential': 'E-mail ou senha incorretos.',
  };
  return messages[code] || 'Ocorreu um erro. Tente novamente.';
}
