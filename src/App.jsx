import { useState } from "react";
import { Route, Routes } from "react-router-dom";

// importing component
import NavBar from "./components/navbar/index";
import Footer from "./components/footer/index";
import WhatsAppComponent from "./components/whatsappComponent/index";
import EnquiryComponent from "./components/enquiryComponent/index";

// importing pages
import Home from "./pages/home/index";
import About from "./pages/about/index";
import Career from "./pages/career/index";
import Notification from "./pages/notification/index";
import ContactUs from "./pages/contact/index";
import PrivacyPolicy from "./pages/privacyPolicy/index";
import Login from "./pages/login/index";
import Admission from "./pages/admission/index";
import AdmissionInformation from "./pages/admission/AdmissionInfo";
import Exam from "./pages/exam/index";
import ExamInformation from "./pages/exam/ExamInfo";
import NotificationInfo from "./pages/notification/NotificationInfo";

function App() {
  const [selectedNotify, setSelectedNotify] = useState("career");

  return (
    <>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              selectedNotify={selectedNotify}
              setSelectedNotify={setSelectedNotify}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route
          path="/notification"
          element={
            <Notification
              selectedNotify={selectedNotify}
              setSelectedNotify={setSelectedNotify}
            />
          }
        />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/admissionInfo" element={<AdmissionInformation />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/examInfo" element={<ExamInformation />} />
        <Route path="/notificationInfo" element={<NotificationInfo />} />
      </Routes>
      <EnquiryComponent />
      <WhatsAppComponent />
      <Footer />
    </>
  );
}

export default App;
