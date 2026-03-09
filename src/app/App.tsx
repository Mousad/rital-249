import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { ScholarshipsPage } from "./pages/ScholarshipsPage";
import CoursesPage from "./pages/CoursesPage";
import AboutPage from "./pages/AboutPage";
import UniversityDetail from "./pages/UniversityDetail";
import ConsultationPage from "./pages/ConsultationPage";
import CertificateServices from "./pages/CertificateServices";
import { Footer } from "./components/Footer";


export default function App() {
  return (
    <BrowserRouter>
      {/* الهيدر يظل ثابت */}
      <Header />
     
      {/* محتوى الصفحات */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/scholarships" element={<ScholarshipsPage />} />
        <Route path="/services/courses" element={<CoursesPage />} />
        <Route path="/services/consultation" element={<ConsultationPage />} />
        <Route path="/services/certificateservices" element={<CertificateServices />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/universities/:id" element={<UniversityDetail />} />
      </Routes>

      {/* الفوتر يظل ثابت في كل الصفحات */}
      <Footer />
    </BrowserRouter>
  );
}