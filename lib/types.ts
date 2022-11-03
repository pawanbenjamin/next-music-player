export type Data = {
  email?: string;
  password?: string;
  error?: string;
  firstName?: string;
  lastName?: string;
};

export type User = {
  createdAt?: Date;
  email?: string;
  firstName?: string;
  id?: number;
  lastName?: string;
  password?: string;
  updatedAt?: Date;
};

export type Body = {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
};
