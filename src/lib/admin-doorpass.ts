export const ADMIN_DOORPASS_COOKIE = "admin-doorpass-verified";

export function isValidAdminDoorpass(value: string): boolean {
  const expectedDoorpass = process.env.ADMIN_DOORPASS;

  return Boolean(expectedDoorpass) && value === expectedDoorpass;
}
