export const required = value =>
  value || typeof value === "number" ? undefined : "Field is Required";

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;

export const number = value =>
  value && isNaN(Number(value)) ? "phone contains numbers only" : undefined;