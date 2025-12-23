"use client";
import { useState } from "react";

export default function EnquiryForm({ propertyId }: any) {
  const [form, setForm] = useState({ name:"", phone:"", email:"", message:"" });

  async function submit(e:any) {
    e.preventDefault();
    await fetch("/api/enquiry", {
      method:"POST",
      body: JSON.stringify({ ...form, propertyId })
    });
    alert("Enquiry sent");
  }

  return (
    <form onSubmit={submit}>
      <input placeholder="Name" onChange={e=>setForm({...form,name:e.target.value})}/>
      <input placeholder="Phone" onChange={e=>setForm({...form,phone:e.target.value})}/>
      <input placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})}/>
      <textarea placeholder="Message" onChange={e=>setForm({...form,message:e.target.value})}/>
      <button>Submit</button>
    </form>
  );
}

