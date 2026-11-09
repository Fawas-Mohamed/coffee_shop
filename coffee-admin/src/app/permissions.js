export const roleLabels = { admin: 'Admin', manager: 'Manager', staff: 'Staff' };
const access = {
  admin: ['*'],
  manager: ['dashboard','components','profile','products','categories','orders','customers','bookings','blog','reviews','content','media','messages','promotions','reports','activity','settings','notifications'],
  staff: ['orders','bookings','messages','notifications','products:read','components','profile'],
};
export function canAccess(role, section) {
  const allowed = access[role] || [];
  return allowed.includes('*') || allowed.includes(section) || allowed.includes(section + ':read');
}
export const permissionGroups = [
  ['Admin', 'Everything, including users, settings, and the danger zone.'],
  ['Manager', 'Store operations, content, reports, and settings. No users or danger zone.'],
  ['Staff', 'Orders, bookings, messages, and read-only products.'],
];


