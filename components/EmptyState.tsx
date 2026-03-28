import Link from "next/link";

type EmptyStateProps = {
  title: string;
  description: string;
  href: string;
  cta: string;
};

export function EmptyState({ title, description, href, cta }: EmptyStateProps) {
  return (
    <div className="empty-state">
      <h3 className="title-md">{title}</h3>
      <p className="muted">{description}</p>
      <Link href={href} className="btn btn-primary">
        {cta}
      </Link>
    </div>
  );
}

