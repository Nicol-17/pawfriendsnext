type Field = {
  name: string;
  label: string;
};

export const validateRequiredFields = (
  fields: Field[],
  formData: Record<string, string>
): Record<string, string> => {
  const errors: Record<string, string> = {};

  fields.forEach(({ name, label }) => {
    if (!formData[name]?.trim()) {
      errors[name] = `${label} is required`;
    }
  });

  return errors;
};
