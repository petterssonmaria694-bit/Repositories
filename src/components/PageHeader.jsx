// 二级页统一页头（手绘粉彩风）
export default function PageHeader({ overline, title, desc }) {
  return (
    <header className="mx-auto mt-14 max-w-[1100px] px-6">
      <span className="font-round inline-block rounded-full border-2 border-dashed border-ink/20 bg-pyellow/70 px-4 py-1 text-[13px] font-bold tracking-[0.2em] text-ink">
        {overline}
      </span>
      <h1 className="font-hand mt-4 text-4xl leading-snug text-ink md:text-[42px]">
        {title}
      </h1>
      <p className="mt-2.5 text-[15px] font-medium text-ink-soft">{desc}</p>
    </header>
  );
}
