import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import Reveal from "../components/Reveal.jsx";

/* ---------- 技能数据 ---------- */
const skills = [
  { name: "Python", level: 86, icon: "🐍", tag: "FastAPI / 数据可视化" },
  { name: "Java", level: 78, icon: "☕", tag: "Spring Boot / MySQL" },
  { name: "TypeScript", level: 80, icon: "⚡", tag: "Vue / 微信小程序" },
  { name: "AI 应用", level: 82, icon: "🤖", tag: "RAG / 大模型 API" },
];

/* ---------- 时间线数据 ---------- */
const timeline = [
  {
    icon: "💰",
    title: "轻记账 · 微信小程序",
    date: "2025.04",
    desc: "极简记账小程序，支持语音快捷记账、月度收支统计和预算提醒，使用微信云开发做数据存储。",
  },
  {
    icon: "🏪",
    title: "拾光集市 · 二手交易平台",
    date: "2025.09",
    desc: "校园二手交易平台，独立完成需求、界面与主要接口开发，上线测试后注册用户超 300 人。",
  },
  {
    icon: "🌆",
    title: "城市脉搏 · 数据可视化大屏",
    date: "2026.03",
    desc: "城市实时交通与天气数据可视化大屏，多数据源轮询聚合，SVG 图表 + Canvas 粒子地图展示。",
  },
  {
    icon: "📚",
    title: "课语通 · 课程问答助手",
    date: "2026.07",
    desc: "基于大语言模型的课程问答助手，上传资料建立知识索引，提供引用出处与知识点小测。",
  },
];

export default function Intro() {
  return (
    <>
      <PageHeader overline="INTRO" title="个人介绍" desc="我的技能与成长轨迹" />

      {/* ================= 技能 ================= */}
      <section className="mx-auto max-w-[1100px] px-6 py-16">
        <Reveal>
          <h2 className="font-hand text-3xl text-ink">
            <span className="mr-2.5 inline-block h-5 w-5 -rotate-12 rounded-full bg-ppink align-[-3px]" />
            技能
          </h2>
          <p className="mb-8 mt-2 text-sm font-medium text-ink-soft">当前方向：AI 辅助开发、大语言模型应用</p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {skills.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.08}>
              <div className="rounded-[20px] border-2 border-dashed border-ink/15 bg-paper p-6 shadow-[0_10px_26px_rgba(91,74,63,0.1)]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-dashed border-ink/15 bg-pyellow text-lg">
                      {s.icon}
                    </span>
                    <div>
                      <p className="font-hand text-lg text-ink">{s.name}</p>
                      <p className="text-xs font-medium text-ink-soft">{s.tag}</p>
                    </div>
                  </div>
                  <span className="font-round text-sm font-bold text-ink/80">{s.level}%</span>
                </div>

                {/* 粉彩渐变进度条 */}
                <div className="mt-5 h-3 overflow-hidden rounded-full border border-ink/10 bg-cream">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="pastel-bar h-full rounded-full"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* 手绘圆圈药丸标签 */}
        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-wrap gap-3">
            {["📊 ECharts 可视化", "🗃️ MySQL", "🖥️ Vue", "🧩 微信小程序", "🤖 RAG 检索", "⚡ FastAPI", "🎨 Canvas / SVG", "📋 Streamlit"].map(
              (t, i) => (
                <span
                  key={t}
                  className={`hand-badge inline-flex items-center gap-1.5 bg-paper px-4 py-1.5 text-[13px] font-semibold text-ink shadow-sm ${
                    i % 2 === 0 ? "rotate-[-1.2deg]" : "rotate-[1deg]"
                  }`}
                >
                  {t}
                </span>
              )
            )}
          </div>
        </Reveal>
      </section>

      {/* ================= 时间线 ================= */}
      <section className="mx-auto max-w-[1100px] px-6 pb-24">
        <Reveal>
          <h2 className="font-hand text-3xl text-ink">
            <span className="mr-2.5 inline-block h-5 w-5 rotate-12 rounded-full bg-pblue align-[-3px]" />
            项目经历
          </h2>
          <p className="mb-10 mt-2 text-sm font-medium text-ink-soft">做过的几个项目，按时间顺序</p>
        </Reveal>

        <div className="relative">
          {/* 粉彩虚线竖线 */}
          <div
            className="absolute left-[13px] top-2 bottom-2 w-0 border-l-2 border-dashed border-ink/25"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {timeline.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.1}>
                <div className="relative flex gap-6">
                  {/* 手绘节点 */}
                  <span
                    className="relative z-10 mt-7 flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full border-2 border-dashed border-ink/30 bg-ppink shadow-sm"
                    aria-hidden="true"
                  >
                    <span className="h-2 w-2 rounded-full bg-ink/40" />
                  </span>
                  {/* 便签卡片（轻微交错旋转） */}
                  <div
                    className={`flex-1 rounded-[18px] border-2 border-dashed border-ink/15 bg-paper p-6 shadow-[0_10px_26px_rgba(91,74,63,0.1)] transition-all duration-300 hover:rotate-0 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(91,74,63,0.16)] ${
                      i % 2 === 0 ? "rotate-[-0.6deg]" : "rotate-[0.5deg]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-dashed border-ink/15 bg-pgreen text-lg">
                          {t.icon}
                        </span>
                        <h3 className="font-hand text-xl text-ink">{t.title}</h3>
                      </div>
                      <span className="font-round shrink-0 text-sm font-bold text-ink/70">
                        {t.date}
                      </span>
                    </div>
                    <p className="mt-3 text-sm font-medium leading-relaxed text-ink/70">{t.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
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
