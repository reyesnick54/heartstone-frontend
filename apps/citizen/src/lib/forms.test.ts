import { formSchema } from "../test/fixtures";
import type { FormFieldSchema } from "./api-types";
import {
  answersFromValues,
  allFields,
  isFieldRequired,
  isFieldVisible,
  validateField,
} from "./forms";

const fields = allFields(formSchema as never) as FormFieldSchema[];
const byKey = (key: string) => fields.find((f) => f.fieldKey === key) as FormFieldSchema;

describe("form engine (mirrors the backend rules)", () => {
  it("evaluates SHOW conditions", () => {
    expect(isFieldVisible(byKey("landlord"), { rents: "no" })).toBe(false);
    expect(isFieldVisible(byKey("landlord"), { rents: "yes" })).toBe(true);
  });

  it("drops hidden and empty answers and converts numbers", () => {
    const answers = answersFromValues(
      fields,
      { rents: "no", landlord: "X", headcount: "3", email: "  " },
      { visibleOnly: true },
    );
    expect(answers).toEqual({ rents: "no", headcount: 3 });
  });

  it("applies REQUIRE / OPTIONAL rules", () => {
    const field = {
      ...byKey("email"),
      conditionalRules: [
        {
          action: "REQUIRE",
          logic: "AND",
          conditions: [{ fieldKey: "rents", operator: "EQUALS", value: "yes" }],
        },
      ],
    } as unknown as FormFieldSchema;
    expect(isFieldRequired(field, { rents: "yes" })).toBe(true);
    expect(isFieldRequired(field, { rents: "no" })).toBe(false);
  });

  it("validates required, email, integer and declaration fields in plain language", () => {
    expect(validateField(byKey("businessName"), {})).toEqual(["Enter business name"]);
    expect(validateField(byKey("email"), { email: "x" })[0]).toMatch(/correct format/);
    expect(validateField(byKey("headcount"), { headcount: 1.5 })).toContain(
      "People you plan to employ must be a whole number",
    );
    expect(validateField(byKey("truthful"), { truthful: false })).toEqual([
      "Confirm this declaration to continue",
    ]);
    expect(validateField(byKey("landlord"), { rents: "no" })).toEqual([]);
  });
});
