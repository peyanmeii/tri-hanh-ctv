"use client";

import { FormEvent, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [form, setForm] = useState({ full_name: "", email: "", phone: "" });
  const [status, setStatus] = useState("");

  async function submit(e: FormEvent) {
    e.preventDefault();
    setStatus("Đang tạo hồ sơ...");
    const { error } = await supabase.from("ctv_profiles").insert({
      full_name: form.full_name,
      email: form.email,
      phone: form.phone,
      status: "pending"
    });
    setStatus(error ? `Có lỗi: ${error.message}` : "Tạo hồ sơ thành công! Bước tiếp theo sẽ là đăng nhập và quản lý CV.");
  }

  return (
    <main className="page">
      <header className="header">
        <div className="brand">TRI HÀNH</div>
        <div className="tag">Cổng cộng tác viên tuyển dụng</div>
      </header>
      <section className="hero">
        <h1>Kết nối cơ hội.<br/>Đồng hành tuyển dụng.</h1>
        <p>Đây là phiên bản nền đầu tiên của cổng CTV Tri Hành. Mình đang kiểm tra kết nối giữa website và Supabase trước khi xây tiếp phần đăng nhập, job và upload CV.</p>
        <div className="card">
          <h2>Tạo hồ sơ CTV test</h2>
          <p className="muted">Dùng form này để kiểm tra website đã ghi dữ liệu vào bảng <b>ctv_profiles</b> hay chưa.</p>
          <form onSubmit={submit} className="grid">
            <div className="field"><label>Họ và tên</label><input required value={form.full_name} onChange={e=>setForm({...form,full_name:e.target.value})}/></div>
            <div className="field"><label>Email</label><input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/></div>
            <div className="field full"><label>Số điện thoại</label><input required value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})}/></div>
            <div className="field full"><button className="btn" type="submit">Tạo hồ sơ CTV</button></div>
          </form>
          {status && <div className="msg">{status}</div>}
        </div>
      </section>
    </main>
  );
}
