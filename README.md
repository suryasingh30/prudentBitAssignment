# 🏥 Patient Directory Web App

A responsive full-stack patient directory built with **Next.js App Router**, **TypeScript**, **TailwindCSS**, and a custom backend API. Features include search, pagination, and dynamic card-based UI.

🌐 **Live Demo**: [https://prudent-bit-assignment.vercel.app](https://prudent-bit-assignment.vercel.app)

---

## 🚀 Features

- 🧾 Patient directory listing from mock JSON data  
- 🔍 Live search (name-based)  
- 📄 Card and row views (modular UI)  
- 📚 Pagination with page control  
- 💡 Type-safe code with custom interfaces  
- 🎯 Custom API route for filtering and pagination  

---

## 📁 Project Structure

```
/app
  /api/patients/route.ts     # API route for patients
/components
  PatientCard.tsx            # Card view UI
  PatientRow.tsx             # (Optional) Row view UI
  SearchBar.tsx              # Search input component
  FilterSortBar.tsx          # (Optional) Filter/sort controls
/lib
  data.ts                    # JSON data loader
  types.ts                   # TypeScript interfaces
/public
  MOCK_DATA.json             # Source JSON data
```

---

## 🛠️ Getting Started

### 1. Clone and install

```bash
git clone https://github.com/suryasingh30/prudentBitAssignment.git
cd patient-directory
npm install
```

### 2. Run locally

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 📦 Technologies Used

- [Next.js](https://nextjs.org/) (App Router)  
- [TypeScript](https://www.typescriptlang.org/)  
- [TailwindCSS](https://tailwindcss.com/)  
- [Vercel](https://vercel.com/) (Hosting)  
- [Mock JSON Data](./public/MOCK_DATA.json)  

---

## 🧠 Bonus Features

- 🔁 Debounced search input   
- ✨ Clean UI with TailwindCSS  
- ✅ Git-friendly commit messages  


