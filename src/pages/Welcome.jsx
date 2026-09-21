import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";

/* ---------- 入场动效：整卡淡入上浮 + 内部元素错落 ---------- */
const container = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.11,
      delayChildren: 0.2,
    },
  },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ---------- 手绘涂鸦元素（描边颜色跟随当前主题） ---------- */
const ink = "var(--c-ink)";

function Doodle({ children, className }) {
  return (
    <div className={`pointer-events-none absolute ${className ?? ""}`} aria-hidden="true">
      {children}
    </div>
  );
}

const Star = () => (
  <svg viewBox="0 0 24 24" width="34" height="34" fill="none">
    <path
      d="M12 2.5c.8 4.8 2.6 6.6 7.5 7.4-4.9.8-6.7 2.6-7.5 7.4-.8-4.8-2.6-6.6-7.5-7.4 4.9-.8 6.7-2.6 7.5-7.4Z"
      fill="#f6cfd8"
      stroke={ink}
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
  </svg>
);

const Flower = () => (
  <svg viewBox="0 0 24 24" width="30" height="30" fill="none">
    <g stroke={ink} strokeWidth="1.3" strokeLinecap="round">
      <ellipse cx="12" cy="6" rx="3.2" ry="4.2" fill="#cfe8cd" />
      <ellipse cx="18.5" cy="12" rx="3.2" ry="4.2" fill="#c9e4f0" transform="rotate(72 12 12)" />
      <ellipse cx="15.5" cy="18.3" rx="3.2" ry="4.2" fill="#f8e3b0" transform="rotate(144 12 12)" />
      <ellipse cx="8.5" cy="18.3" rx="3.2" ry="4.2" fill="#f6cfd8" transform="rotate(216 12 12)" />
      <ellipse cx="5.5" cy="12" rx="3.2" ry="4.2" fill="#dcd0f0" transform="rotate(288 12 12)" />
    </g>
    <circle cx="12" cy="12" r="2.6" fill="#f8e3b0" stroke={ink} strokeWidth="1.2" />
  </svg>
);

const Wave = () => (
  <svg viewBox="0 0 80 20" width="80" height="20" fill="none">
    <path
      d="M2 14c8-9 16-9 24 0s16 9 24 0 16-9 28-2"
      stroke={ink}
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.5"
    />
  </svg>
);

const Dots = () => (
  <svg viewBox="0 0 60 20" width="60" height="20" fill="none">
    <circle cx="10" cy="10" r="3" fill="#c9e4f0" stroke={ink} strokeWidth="1" />
    <circle cx="30" cy="10" r="3" fill="#f6cfd8" stroke={ink} strokeWidth="1" />
    <circle cx="50" cy="10" r="3" fill="#f8e3b0" stroke={ink} strokeWidth="1" />
  </svg>
);

/* ---------- 标签：不规则手绘圆圈 ---------- */
const badges = [
  { icon: "🐍", label: "Python", chip: "bg-pyellow" },
  { icon: "☕", label: "Java", chip: "bg-pblue" },
  { icon: "⚡", label: "TypeScript", chip: "bg-ppurple" },
  { icon: "🤖", label: "AI 应用", chip: "bg-pgreen" },
];

const entries = [
  {
    to: "/intro",
    idx: "01",
    title: "个人介绍",
    desc: "了解我的技能栈、学习方向与成长经历。",
    bg: "bg-pblue/70",
    rotate: "rotate-[-1.5deg]",
  },
  {
    to: "/works",
    idx: "02",
    title: "作品展示",
    desc: "我做过的一些小项目与练手作品，持续更新。",
    bg: "bg-ppink/70",
    rotate: "rotate-[1.5deg]",
  },
  {
    to: "/about",
    idx: "03",
    title: "关于我",
    desc: "更多关于我的故事、兴趣和正在做的事。",
    bg: "bg-pgreen/70",
    rotate: "rotate-[-1deg]",
  },
];

const contacts = [
  { icon: "📮", text: "邮箱：1613778232@qq.com", href: "mailto:1613778232@qq.com" },
  { icon: "💻", text: "GitHub：xiaohe-dev", href: "https://github.com/xiaohe-dev", external: true },
  { icon: "🖥️", text: "个人主页：xiaohe.dev", href: "https://xiaohe.dev", external: true },
  { icon: "💬", text: "微信：xiaohezi" },
  { icon: "📍", text: "所在地：中国·广州" },
];

export default function Welcome() {
  return (
    <>
      {/* ================= 欢迎首屏 ================= */}
      <header className="relative overflow-hidden">
        {/* 手绘涂鸦散点（缓慢漂浮） */}
        <Doodle className="animate-wobble left-[6%] top-[16%]">
          <Star />
        </Doodle>
        <Doodle className="animate-wobble-slow right-[8%] top-[20%] rotate-[12deg]">
          <Flower />
        </Doodle>
        <Doodle className="animate-wobble left-[10%] bottom-[26%] rotate-[-8deg]">
          <Flower />
        </Doodle>
        <Doodle className="animate-wobble-slow right-[12%] bottom-[24%]">
          <Star />
        </Doodle>
        <Doodle className="left-[3%] top-[52%] rotate-[-10deg]">
          <Wave />
        </Doodle>
        <Doodle className="right-[5%] top-[60%] rotate-[8deg]">
          <Wave />
        </Doodle>
        <Doodle className="left-[46%] top-[8%] rotate-[6deg]">
          <Dots />
        </Doodle>
        <Doodle className="left-[38%] bottom-[10%] rotate-[-6deg]">
          <Dots />
        </Doodle>

        <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-[1100px] items-center justify-center px-6 py-20">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="relative"
          >
            {/* 背后错位的粉彩便签纸，增加层次 */}
            <div
              className="absolute inset-0 translate-x-3 translate-y-3 rotate-[2.5deg] rounded-[22px] bg-ppink/80 border-2 border-dashed border-ink/10"
              aria-hidden="true"
            />

            {/* 微微倾斜的拍立得纸卡 */}
            <motion.div
              whileHover={{ rotate: 0, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 220, damping: 16 }}
              className="relative flex w-full max-w-2xl flex-col items-center rounded-[26px] border-2 border-ink/10 bg-paper px-8 py-14 text-center shadow-[0_22px_60px_rgba(91,74,63,0.18)] rotate-[-2deg] md:px-14"
            >
              {/* 胶带固定 */}
              <div className="tape -rotate-3" aria-hidden="true" />
              <div className="tape left-auto right-8 top-auto bottom-6 w-20 rotate-[8deg]" aria-hidden="true" />

              <motion.span
                variants={item}
                className="font-script mb-5 text-2xl text-ink-soft md:text-3xl"
              >
                hello, it&apos;s me ✎
              </motion.span>

              {/* 粉彩渐变圆角头像块 */}
              <motion.div
                variants={item}
                whileHover={{ scale: 1.06, rotate: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="animate-avatar-float mb-6 rounded-[36px] bg-gradient-to-br from-ppink via-pyellow to-pblue p-1.5 shadow-[0_10px_30px_rgba(91,74,63,0.22)]"
              >
                <div className="flex h-28 w-28 items-center justify-center rounded-[30px] bg-paper md:h-32 md:w-32">
                  <span className="font-hand text-[56px] leading-none text-ink md:text-[60px]">
                    王
                  </span>
                </div>
              </motion.div>

              {/* 手写大标题 */}
              <motion.h1
                variants={item}
                className="font-hand text-5xl leading-[1.15] text-ink md:text-6xl"
              >
                你好，我是王宇恒
              </motion.h1>

              <motion.p
                variants={item}
                className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl"
              >
                软件工程专业学生 / AI 辅助开发与大语言模型
              </motion.p>

              {/* 手绘圆圈标签 */}
              <motion.div variants={item} className="mt-8 flex flex-wrap justify-center gap-3">
                {badges.map((b, i) => (
                  <span
                    key={b.label}
                    className={`hand-badge inline-flex items-center gap-2 bg-paper px-5 py-2 text-sm font-semibold text-ink shadow-sm ${
                      i % 2 === 0 ? "rotate-[-1.6deg]" : "rotate-[1.4deg]"
                    }`}
                  >
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full text-[13px] ${b.chip}`}
                      aria-hidden="true"
                    >
                      {b.icon}
                    </span>
                    {b.label}
                  </span>
                ))}
              </motion.div>

              {/* 粉彩手绘按钮 */}
              <motion.div variants={item} className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  to="/intro"
                  className="font-hand rounded-full border-2 border-dashed border-ink/25 bg-ppink px-9 py-3 text-lg text-ink shadow-[0_10px_26px_rgba(246,207,216,0.7)] transition-all duration-300 hover:-translate-y-1 hover:rotate-[-1.5deg] hover:shadow-[0_16px_36px_rgba(246,207,216,0.9)] active:translate-y-0"
                >
                  认识我
                </Link>
                <Link
                  to="/works"
                  className="font-hand rounded-full border-2 border-dashed border-ink/30 bg-transparent px-9 py-3 text-lg text-ink transition-all duration-300 hover:-translate-y-1 hover:rotate-[1.5deg] hover:bg-pblue active:translate-y-0"
                >
                  看看作品
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* ================= 三个二级页入口（便签纸卡片） ================= */}
      <div className="mx-auto max-w-[1100px] px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {entries.map((e, i) => (
            <Reveal key={e.to} delay={i * 0.1}>
              <Link
                to={e.to}
                className={`group block h-full rounded-[20px] border-2 border-dashed border-ink/15 p-7 shadow-[0_10px_28px_rgba(91,74,63,0.12)] transition-all duration-300 hover:rotate-0 hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(91,74,63,0.2)] ${e.bg} ${e.rotate}`}
              >
                <span className="font-round text-[13px] font-bold tracking-widest text-ink/70">
                  {e.idx}
                </span>
                <h3 className="font-hand mt-2 text-[22px] text-ink">{e.title}</h3>
                <p className="mt-1.5 text-sm font-medium text-ink/70">{e.desc}</p>
                <div className="font-script mt-4 text-xl text-ink/80">
                  进入页面
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                    {" "}
                    →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ================= 联系方式 ================= */}
      <section id="contact" className="mx-auto max-w-[1100px] scroll-mt-24 px-6 pb-24">
        <Reveal>
          <div className="relative rounded-[24px] border-2 border-dashed border-ink/15 bg-pyellow/60 px-8 py-12 text-center shadow-[0_10px_28px_rgba(91,74,63,0.1)]">
            <div className="tape left-[8%] top-[-13px] rotate-[-5deg]" aria-hidden="true" />
            <h2 className="font-hand text-3xl text-ink">联系方式</h2>
            <p className="mt-2 text-sm font-medium text-ink/70">
              如果有想法或者机会，欢迎随时联系我
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3.5">
              {contacts.map((c) =>
                c.href ? (
                  <a
                    key={c.text}
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noreferrer" : undefined}
                    className="hand-badge inline-flex items-center gap-2 rounded-full bg-paper px-5 py-2.5 text-sm font-semibold text-ink shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <span aria-hidden="true">{c.icon}</span>
                    {c.text}
                  </a>
                ) : (
                  <span
                    key={c.text}
                    className="hand-badge inline-flex items-center gap-2 rounded-full bg-paper px-5 py-2.5 text-sm font-semibold text-ink shadow-sm"
                  >
                    <span aria-hidden="true">{c.icon}</span>
                    {c.text}
                  </span>
                )
              )}
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
