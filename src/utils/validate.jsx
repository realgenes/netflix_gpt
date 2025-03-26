export const checkValidData = (email, password, userName) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const isUsernameValid = /^[a-z0-9_-]{3,15}$/.test(userName);

  if (!isUsernameValid) {
    return "Username must be 3-15 characters long and can only contain lowercase letters, numbers, underscores (_), and hyphens (-). Example: john_doe, user123, test-user";
  }

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) {
    return "Please enter a valid email address";
  }

  if (!isPasswordValid) {
    return "Password must contain at least 8 characters, including UPPER/lowercase and numbers";
  }

  return null;
};
