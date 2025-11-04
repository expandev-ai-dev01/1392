/**
 * @utility isValidPhone
 * @summary Validates Brazilian phone number
 * @domain core
 * @type utility-function
 * @category validation
 */
export function isValidPhone(phone: string): boolean {
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.length === 10 || cleaned.length === 11;
}
