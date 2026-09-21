import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const navBtnBase =
  "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap";
const navBtnIdle = "text-ink-soft hover:text-ink hover:bg-pyellow/60";
const navBtnActive = "bg-pblue text-ink shadow-sm";

// 联系方式在欢迎页内（锚点），从二级页点击时先回首页再平滑滚动
function ContactButton({ className }) {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        navigate("/");
        window.setTimeout(() => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        }, 80);
      }}
    >
      联系方式
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `${navBtnBase} ${isActive ? navBtnActive : navBtnIdle}`;

  return (
    <nav className="sticky top-3 z-50 w-[min(1100px,calc(100%-2rem))] mx-auto mt-3">
      <div className="relative flex items-center justify-between gap-3 rounded-3xl border-2 border-dashed border-ink/15 bg-paper/85 px-4 py-2 shadow-[0_8px_24px_rgba(91,74,63,0.12)] backdrop-blur-md">
        <Link
          to="/"
          className="flex items-center gap-2.5 font-bold text-ink shrink-0 hover:-rotate-1 transition-transform"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-2xl bg-gradient-to-br from-ppink to-pyellow font-hand text-[17px] text-ink shadow-sm">
            王
          </span>
          <span className="font-hand text-lg">王宇恒</span>
        </Link>

        {/* 桌面端导航 */}
        <div className="hidden md:flex items-center gap-1">
          <NavLink to="/intro" className={linkClass}>
            个人介绍
          </NavLink>
          <NavLink to="/works" className={linkClass}>
            作品展示
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            关于我
          </NavLink>
          <ContactButton className={`${navBtnBase} ${navBtnIdle}`} />
        </div>

        {/* 移动端汉堡按钮 */}
        <button
          type="button"
          aria-label="打开导航菜单"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-2xl border-2 border-dashed border-ink/20 bg-paper"
        >
          <span
            className={`block h-0.5 w-[18px] rounded bg-ink transition-transform ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span className={`block h-0.5 w-[18px] rounded bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`block h-0.5 w-[18px] rounded bg-ink transition-transform ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* 移动端下拉菜单 */}
      {open && (
        <div className="md:hidden mt-2 flex flex-col gap-1 rounded-3xl border-2 border-dashed border-ink/15 bg-paper/95 p-3 shadow-[0_14px_32px_rgba(91,74,63,0.15)] backdrop-blur-md">
          <Link to="/intro" onClick={() => setOpen(false)} className={`${navBtnBase} text-center py-2.5 ${navBtnIdle}`}>
            个人介绍
          </Link>
          <Link to="/works" onClick={() => setOpen(false)} className={`${navBtnBase} text-center py-2.5 ${navBtnIdle}`}>
            作品展示
          </Link>
          <Link to="/about" onClick={() => setOpen(false)} className={`${navBtnBase} text-center py-2.5 ${navBtnIdle}`}>
            关于我
          </Link>
          <ContactButton className={`${navBtnBase} text-center py-2.5 ${navBtnIdle}`} />
        </div>
      )}
    </nav>
  );
}
