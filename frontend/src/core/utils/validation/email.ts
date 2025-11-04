/**
 * @utility isValidEmail
 * @summary Validates email format
 * @domain core
 * @type utility-function
 * @category validation
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
