import { useState } from "react";
import { validateRequiredFields } from "@/components/Utils/validation";
import Button from "@/components/atoms/Button/Button";
import "@/components/organisms/BaseForm/BaseForm.css";


export type Field = {
  name: string;
  label: string;
  type: "text" | "email" | "password" | "textarea" | "select" | "tel" | "date";
  placeholder?: string;
  className?: string;
  options?: { value: string; label: string }[];
  min?: string;
  max?: string;
 
};

type BaseFormProps = {
  fields: Field[];
  onSubmit: (values: Record<string, string>) => void;
  buttonText: string;
  className?: string;
};

const BaseForm = ({ fields, onSubmit, buttonText, className }: BaseFormProps) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateRequiredFields(fields, formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onSubmit(formData);
    setFormData({});
  };

  return (
    <form className={`base-form ${className || ""}`} onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name} className="form-group">
          <label htmlFor={field.name}>{field.label}</label>

          {field.type === "textarea" ? (
            <textarea
              id={field.name}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name] || ""}
              onChange={handleChange}
              className={`form-input ${errors[field.name] ? "error" : ""}`}
              aria-invalid={!!errors[field.name]}
              aria-describedby={errors[field.name] ? `error-${field.name}` : undefined}
            />
          ) : field.type === "select" ? (
            <select
              id={field.name}
              name={field.name}
              value={formData[field.name] || ""}
              onChange={handleChange}
              className={`form-input ${errors[field.name] ? "error" : ""}`}
              aria-invalid={!!errors[field.name]}
              aria-describedby={errors[field.name] ? `error-${field.name}` : undefined}

            >
              <option value="">Select an option</option>
              {field.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={field.name}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name] || ""}
              onChange={handleChange}
              className={`form-input ${errors[field.name] ? "error" : ""}`}
              aria-invalid={!!errors[field.name]}
              aria-describedby={errors[field.name] ? `error-${field.name}` : undefined}
              min={field.min}
              max={field.max}

            />
          )}

          {errors[field.name] && (
            <span id={`error-${field.name}`} className="error-message">
              {errors[field.name]}
            </span>
          )}
        </div>
      ))}

      <Button type="submit" className="submit-button ">
        {buttonText}
      </Button>

    </form>
  );
};

export default BaseForm;
