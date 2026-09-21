import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import Reveal from "../components/Reveal.jsx";

const stats = [
  { num: "4", label: "完成项目", bg: "bg-pblue/70" },
  { num: "4+", label: "常用技能", bg: "bg-ppink/70" },
  { num: "300+", label: "项目注册用户", bg: "bg-pyellow/70" },
  { num: "在读", label: "广州软件学院", bg: "bg-pgreen/70" },
];

const interests = [
  { icon: "📖", label: "阅读" },
  { icon: "🎬", label: "电影" },
  { icon: "🎵", label: "音乐" },
  { icon: "🏃", label: "跑步" },
  { icon: "✈️", label: "旅行" },
  { icon: "🧩", label: "折腾新工具" },
];

export default function About() {
  return (
    <>
      <PageHeader overline="ABOUT ME" title="关于我" desc="多了解我一点" />

      {/* 自述 + 数据 */}
      <section className="mx-auto max-w-[1100px] px-6 py-16">
        <div className="grid gap-7 md:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="relative h-full rounded-[22px] border-2 border-dashed border-ink/15 bg-paper p-8 text-[15px] font-medium leading-relaxed text-ink/75 shadow-[0_10px_28px_rgba(91,74,63,0.1)]">
              <div className="tape left-[10%] top-[-13px] rotate-[-4deg]" aria-hidden="true" />
              <p>
                你好！我是<strong className="font-hand text-xl text-ink">王宇恒</strong>
                ，一名软件工程专业学生，来自广州，目前就读于广州软件学院。我主要关注 AI
                辅助开发与大语言模型技术，平时使用 Python、Java 和 TypeScript 进行项目开发。
              </p>
              <p className="mt-3.5">
                我在持续学习<strong className="font-hand text-xl text-ink">前后端开发、数据可视化与 AI 应用构建</strong>
                ，享受从需求梳理、界面设计到功能落地的完整过程。
              </p>
              <p className="mt-3.5">
                这个网站是我对自己的一次介绍，后续还会持续更新更多内容，欢迎常来看看。
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div
                  className={`flex h-full flex-col items-center justify-center rounded-[20px] border-2 border-dashed border-ink/15 p-6 text-center shadow-[0_8px_22px_rgba(91,74,63,0.1)] ${s.bg} ${
                    i % 2 === 0 ? "rotate-[-1deg]" : "rotate-[0.8deg]"
                  }`}
                >
                  <b className="font-round text-3xl text-ink">{s.num}</b>
                  <span className="mt-1 text-[13px] font-semibold text-ink/70">{s.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 兴趣 */}
      <section className="mx-auto max-w-[1100px] px-6 pb-16">
        <Reveal>
          <h2 className="font-hand text-3xl text-ink">
            <span className="mr-2.5 inline-block h-5 w-5 -rotate-12 rounded-full bg-ppurple align-[-3px]" />
            兴趣与日常
          </h2>
          <p className="mb-9 mt-2 text-sm font-medium text-ink-soft">代码之外，这些事情也让我保持热情</p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-3">
            {interests.map((it, i) => (
              <span
                key={it.label}
                className={`hand-badge inline-flex items-center gap-1.5 bg-paper px-4 py-1.5 text-sm font-semibold text-ink shadow-sm transition-colors hover:border-ink/50 ${
                  i % 2 === 0 ? "rotate-[-1.4deg]" : "rotate-[1.2deg]"
                }`}
              >
                <span aria-hidden="true">{it.icon}</span>
                {it.label}
              </span>
            ))}
          </div>
        </Reveal>
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
