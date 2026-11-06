import { TENANT } from "../tenant";

/**
 * The tenant's contact phone. Linked (`tel:`) only when tenant configuration gives a real number;
 * a placeholder is shown as plain text so nobody dials it.
 */
export function Phone({ className }: { className?: string }) {
  const phone: { display: string; tel?: string } = TENANT.contactPhone;
  return phone.tel ? (
    <a href={`tel:${phone.tel}`} className={className}>
      {phone.display}
    </a>
  ) : (
    <span className={className}>{phone.display}</span>
  );
}
