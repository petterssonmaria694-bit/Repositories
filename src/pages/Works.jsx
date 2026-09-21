import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import Reveal from "../components/Reveal.jsx";

const works = [
  {
    icon: "💰",
    title: "轻记账",
    featured: true,
    tech: "TypeScript · 微信小程序 · 微信云开发 · ECharts",
    date: "2025.04",
    desc: "面向日常生活的极简记账小程序，支持语音快捷记账、月度收支统计和预算提醒。",
    bg: "bg-pblue/70",
    rotate: "rotate-[-1.2deg]",
  },
  {
    icon: "🏪",
    title: "拾光集市",
    tech: "Java · Spring Boot · MySQL · Vue",
    date: "2025.09",
    desc: "校园二手交易平台，提供商品发布、关键词检索、站内私信和信用评分，注册用户超 300 人。",
    bg: "bg-ppink/70",
    rotate: "rotate-[1deg]",
  },
  {
    icon: "🌆",
    title: "城市脉搏",
    tech: "TypeScript · Canvas · SVG · ECharts",
    date: "2026.03",
    desc: "城市实时交通与天气数据可视化大屏，多数据源轮询聚合，支持大屏可视化展示。",
    bg: "bg-pgreen/70",
    rotate: "rotate-[-0.8deg]",
  },
  {
    icon: "📚",
    title: "课语通",
    tech: "Python · FastAPI · RAG · 大模型 API · Streamlit",
    date: "2026.07",
    desc: "基于大语言模型的课程问答助手，上传资料建立知识索引，提供引用出处与知识点小测。",
    bg: "bg-pyellow/70",
    rotate: "rotate-[1.1deg]",
  },
];

export default function Works() {
  return (
    <>
      <PageHeader
        overline="WORKS"
        title="作品展示"
        desc="值得一看的精选项目"
      />

      <section className="mx-auto max-w-[1100px] px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {works.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.1}>
              <article
                className={`group h-full rounded-[20px] border-2 border-dashed border-ink/15 p-7 shadow-[0_10px_28px_rgba(91,74,63,0.12)] transition-all duration-300 hover:rotate-0 hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(91,74,63,0.2)] ${w.bg} ${w.rotate}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border-2 border-dashed border-ink/20 bg-paper text-[21px] shadow-sm">
                    {w.icon}
                  </div>
                  <span className="font-round shrink-0 rounded-full border-2 border-dashed border-ink/20 bg-paper px-2.5 py-0.5 text-xs font-bold text-ink/70">
                    {w.date}
                  </span>
                </div>
                <h3 className="font-hand flex items-center text-[22px] text-ink">
                  {w.title}
                  {w.featured && (
                    <span className="font-round ml-2 rounded-full border-2 border-dashed border-ink/20 bg-pyellow px-2.5 py-0.5 text-[11px] font-bold text-ink/80">
                      ★ 精选
                    </span>
                  )}
                </h3>
                <p className="mt-1 text-[13px] font-semibold text-ink/60">{w.tech}</p>
                <p className="mt-2 text-sm font-medium leading-relaxed text-ink/70">{w.desc}</p>
                <div className="mt-4 flex gap-3.5">
                  <a href="#" onClick={(e) => e.preventDefault()} className="font-hand text-lg text-ink/80 hover:text-ink hover:underline">
                    查看详情
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="pb-24 text-center">
        <Link
          to="/"
          className="font-hand inline-flex items-center gap-2 rounded-full border-2 border-dashed border-ink/25 bg-paper px-5 py-2.5 text-lg text-ink-soft transition-colors hover:border-ink/50 hover:text-ink"
        >
          ← 返回首页
        </Link>
      </div>
    </>
  );
}
