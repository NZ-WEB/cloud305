export const setRoleToLS = (newRole: string) => {
  localStorage.setItem('userRole', newRole);
};

export const getRoleFromLS = () => {
  return localStorage.getItem('userRole');
};

export const removeRoleFromLs = () => {
  localStorage.removeItem('userRole');
};
