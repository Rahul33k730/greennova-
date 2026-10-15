import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import PageLoadingFallback from '@/components/layout/PageLoadingFallback';
import { GREEN_HYDROGEN, CBG, WASTE_TO_ENERGY, ENV_ENGG, RENEWABLE_HYBRID, SUSTAINABILITY } from '@/data/services-data';
import ServiceDetailPage from '@/pages/ServiceDetailPage';

const HomePage = lazy(() => import('@/pages/HomePage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ServicesIndexPage = lazy(() => import('@/pages/ServicesIndexPage'));
const CareerPage = lazy(() => import('@/pages/CareerPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const ESGPage = lazy(() => import('@/pages/ESGPage'));
const LeadershipPage = lazy(() => import('@/pages/LeadershipPage'));
const AdminLoginPage = lazy(() => import('@/pages/admin/AdminLoginPage'));
const AdminDashboard = lazy(() => import('@/pages/admin/AdminDashboard'));
const ProtectedRoute = lazy(() => import('@/components/layout/ProtectedRoute'));

function ScrollHandler() {
  const { pathname, hash, action } = useLocation() as { pathname: string; hash: string; action?: string };

  useEffect(() => {
    if (action === 'POP') return;

    if (hash) {
      const id = hash.slice(1);
      if (!id) return;
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname, hash, action]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollHandler />
      <Suspense fallback={<PageLoadingFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesIndexPage />} />
          <Route path="/services/green-hydrogen" element={<ServiceDetailPage service={GREEN_HYDROGEN} />} />
          <Route path="/services/compressed-biogas" element={<ServiceDetailPage service={CBG} />} />
          <Route path="/services/waste-to-energy" element={<ServiceDetailPage service={WASTE_TO_ENERGY} />} />
          <Route path="/services/environmental-engineering" element={<ServiceDetailPage service={ENV_ENGG} />} />
          <Route path="/services/renewable-hybrid-energy" element={<ServiceDetailPage service={RENEWABLE_HYBRID} />} />
          <Route path="/services/sustainability-advisory" element={<ServiceDetailPage service={SUSTAINABILITY} />} />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/esg" element={<ESGPage />} />
          <Route path="/careers" element={<CareerPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
