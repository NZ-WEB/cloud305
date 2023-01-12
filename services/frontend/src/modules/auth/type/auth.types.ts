export enum ERoles {
  student = 'student',
  teacher = 'teacher',
  admin = 'admin',
}

export type RoleType = ERoles.admin | ERoles.teacher | ERoles.student;
