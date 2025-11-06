import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check, Truck, Shield, FileText, Clock,Crown,Star } from 'lucide-react';
import "./pricing.css"

export default function TransportPricingPage() {
  const features = [
    "Contract semnat",
    "Tracking complet plăți și coordonare",
    "Gestionarea comenzilor în realitate",
    "Transport asucemit și reparatie amenintari",
    "Suport chat profesional cu login",
    "Consultanță operațional premium",
    "Sistem completat transport",
    "Gestiune transport auto timp-real",
    "Raport automat și facturare",
    "Raport raportări 24/7",
    "Actualizări gratuite",
    "Configurabile GDPR"
  ];

const [price, setPrice] = useState(null);
const [currency, setCurrency] = useState("€");
const [trialDays, setTrialDays] = useState(null);
const [userdata, setUserData] = useState(null);
const [description, setDescription] = useState(null);
const [subData, setSubData] = useState(null);
const navigate = useNavigate();

useEffect(() => {
  const storedData = localStorage.getItem("offer");
  if (!storedData) return;

  const offer = JSON.parse(storedData);
  setUserData(offer);

  const storedSub = JSON.parse(localStorage.getItem("subscription"));
  setSubData(storedSub);

  // Compute display price using the freshly fetched storedSub
  let displayPrice;
  if (storedSub?.trial_ends_at || storedSub?.has_active || storedSub?.on_trial) {
    displayPrice = offer.regular_price;
  } else {
    displayPrice = offer.intro_price;
  }

  setPrice(displayPrice.toFixed(2));
  setCurrency(offer.currency);
  setDescription(offer.copy);
}, []);

const handleroute = () => {
  console.log("route trigger", subData);
  if (subData?.trial_ends_at || subData.has_active==false || subData?.on_trial == false) {
    navigate("/trail-info");
  } else {
    console.log("No active or trial subscription found");
  }
};




  const benefits = [
    {
      icon: <Truck className="mb-3" size={32} />,
      title: "Automatizare Completă",
      description: "Gestionați toate operațiunile de transport automat"
    },
    {
      icon: <Shield className="mb-3" size={32} />,
      title: "Confort Ridicată",
      description: "Protecție deplină securitate și GDPR 100%"
    },
    {
      icon: <FileText className="mb-3" size={32} />,
      title: "Date Sigure",
      description: "Stocarea datelor în infrastructura GDPR"
    },
    {
      icon: <Clock className="mb-3" size={32} />,
      title: "Suport 24/7",
      description: "Echipă disponibilă oricând ai nevoie"
    }
  ];

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #132144 0%, #1c367e 50%, #3b82f6 100%)",
        minHeight: "100vh",
        color: "white",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      }}
    >
      <div className="container py-5">
        {/* Header */}
        <div className="text-center mb-5">
          <div
            className="d-inline-flex align-items-center mb-3 px-3 py-2"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "20px",
              fontSize: "14px",
              color: "#85baf7",
            }}
          >
            <span className="me-2" style={{ color: "#85baf7" }}>
              <Star size={22} />
            </span>
            Platformă de priză gratuită
          </div>
          <h1 className="display-4 fw-bold mb-3">
            Planuri de <span style={{ color: "#60a5fa" }}>Preturi</span>
          </h1>
          <p
            className="lead"
            style={{ maxWidth: "600px", margin: "0 auto", opacity: 0.9 }}
          >
            Transformă-ți operațiunile de transport cu cel mai avansat sistem de management.
            Perioadă de probă gratuită, fără obligații.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="row justify-content-center mb-5 px-3 px-md-0">
  <div className="col-12 col-sm-10 col-md-8 col-lg-5">
    <div
      className="card shadow-lg mx-auto"
      style={{
        background:
          "linear-gradient(135deg, rgba(59, 131, 246, 0) 0%, rgba(37, 99, 235, 0.3) 100%)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "20px",
        backdropFilter: "blur(10px)",
      }}
     >
      <div className="card-body p-4 p-md-5 text-center">
        {/* Badge */}
        <div className="text-center mb-4">
          <div
            className="d-inline-flex align-items-center justify-content-center mb-3"
            style={{
              width: "70px",
              height: "70px",
              background: "rgba(52, 74, 142, 0.1)",
              borderRadius: "50%",
              boxShadow: "0 8px 25px rgba(59, 130, 246, 0.4)",
              color: "white",
            }}
          >
            <Crown size={36} />
          </div>

          <h2 className="h4 fw-bold mb-2" style={{ color: "white" }}>
            Transport Pro
          </h2>
         <p
  className="mb-3"
  style={{ fontSize: "14px", opacity: 0.8, color: "white" }}
>
  {description || "Soluție completă pentru managementul transportului"}
</p>


          <div className="mb-3">
            <span className="display-5 fw-bold" style={{ color: "white" }}>
              {price ? `${price} €` : "—"}
            </span>
            <span
              style={{ fontSize: "16px", opacity: 0.8, color: "white" }}
            >
              /lună
            </span>
          </div>

          <div
            className="d-inline-flex align-items-center px-3 py-1"
            style={{
              background: "rgba(34, 197, 94, 0.2)",
              borderRadius: "15px",
              fontSize: "13px",
              border: "1px solid rgba(34, 197, 94, 0.3)",
              color: "#49d880",
            }}
          >
            <span className="me-1" style={{ color: "#49d880" }}>
              <Clock size={14} />
            </span>{" "}
            {trialDays ? `${trialDays} zile gratuit` : "Fără perioadă de probă"}
          </div>
        </div>

        {/* Features List */}
        <div className="mb-4 text-start mx-auto" style={{ maxWidth: "300px" }}>
          {features.map((feature, index) => (
            <div key={index} className="d-flex align-items-start mb-2">
              <Check
                size={18}
                className="me-2 mt-1 flex-shrink-0"
                style={{ color: "#49d880" }}
              />
              <span
                style={{ fontSize: "14px", opacity: 0.9, color: "white" }}
              >
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          className="btn btn-lg w-100 fw-bold"
          style={{
            background: "linear-gradient(135deg, #3587f2 0%, #08b4d5 100%)",
            border: "none",
            borderRadius: "12px",
            padding: "14px",
            color: "white",
            fontSize: "16px",
            boxShadow: "0 4px 15px rgba(6, 182, 212, 0.4)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow =
              "0 6px 20px rgba(6, 182, 212, 0.5)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "0 4px 15px rgba(6, 182, 212, 0.4)";
          }}
          onClick={handleroute}
        >
          Începe perioadă de probă
        </button>
      </div>
    </div>
  </div>
 </div>


        {/* Why Choose Section */}
        <div className="text-center mb-4">
          <h2 className="h3 fw-bold mb-5">De ce să alegi Transport Pro?</h2>
         </div>

         <div className="row g-4 mb-5" >
          {benefits.map((benefit, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="card h-100 text-center p-4" style={{
                background: 'rgba(59, 130, 246, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '16px',
                backdropFilter: 'blur(10px)',
                transition: 'transform 0.3s, box-shadow 0.3s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(59, 130, 246, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div className="card-body" >
                  <div style={{ color: '#60a5fa' }}>
                    {benefit.icon}
                  </div>
                  <h5 className="fw-bold mb-2" style={{color:'white'}}>{benefit.title}</h5>
                  <p className="mb-0" style={{ fontSize: '14px', opacity: 0.8,color:'white' }}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="d-flex justify-content-center align-items-center px-3">
       <div className="promo-card card shadow-lg w-100">
        <div className="card-body text-center p-5">
          <h3 className="fw-bold mb-3">
            Gata să revoluționezi transporturile?
          </h3>
          <p className="mb-4">
            Alătură-te la sutele de companii care și-au optimizat operațiunile
            cu sistemul nostru.
          </p>
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            <button className="btn btn-primary-custom fw-bold px-5 py-3">
              Începe perioada de probă
            </button>
            <button className="btn btn-outline-custom fw-bold px-5 py-3">
              Vorbește cu un expert
            </button>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
}