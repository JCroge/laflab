type SiteFooterProps = {
  copyright: string;
  companyName: string;
};

export default function SiteFooter({ copyright, companyName }: SiteFooterProps) {
  return (
    <footer className="border-t border-white/10 pb-10 pt-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-slate/60 md:flex-row md:items-center md:justify-between">
        <p>{copyright}</p>
        <p>{companyName}</p>
      </div>
    </footer>
  );
}
