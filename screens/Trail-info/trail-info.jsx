import React, { useEffect, useState } from "react";
import { Clock, Check, Crown, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";



export default function TrialInfo() {
  const [offer, setOffer] = useState(null);


const navigate = useNavigate()

const handlepayment=()=>{
navigate("/subscribe")
}

  useEffect(() => {
    const stored = localStorage.getItem("offer");
    if (stored) setOffer(JSON.parse(stored));
  }, []);

  if (!offer) return null;

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
      <div className="container py-5 text-center">
        {/* Header */}
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
          Abonament activat cu perioadă de probă
        </div>

        <h1 className="display-5 fw-bold mb-4">
          Mulțumim pentru plata ta!
        </h1>

        <div
          className="card shadow-lg mx-auto"
          style={{
            maxWidth: "600px",
            background:
              "linear-gradient(135deg, rgba(59, 131, 246, 0) 0%, rgba(37, 99, 235, 0.3) 100%)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "20px",
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="card-body p-5">
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

            <h3 className="fw-bold mb-3" style={{ color: "white" }}>
              {offer.name || "Abonament Premium Activ"}
            </h3>

            <p className="mb-4 text-white" style={{ opacity: 0.9 }}>
              Felicitări! Ai acum <strong>{offer.trial_days} zile gratuite</strong> pentru
              a testa toate funcționalitățile platformei noastre.
            </p>

            <div
              className="d-inline-flex align-items-center px-3 py-1 mb-4"
              style={{
                background: "rgba(34, 197, 94, 0.2)",
                borderRadius: "15px",
                border: "1px solid rgba(34, 197, 94, 0.3)",
                color: "#49d880",
                fontSize: "14px",
              }}
            >
              <Clock size={14} className="me-1" /> {offer.trial_days} zile gratuite
            </div>

            <h5 className="fw-bold mb-3" style={{ color: "#60a5fa" }}>
              După perioada de probă:
            </h5>

           <ul
  className="list-unstyled mb-4 mx-auto d-flex flex-column align-items-center justify-content-center text-center"
  style={{ maxWidth: "400px" }}
>
  <li className="mb-2 d-flex align-items-center justify-content-center text-center">
    <Check size={16} className="me-2" style={{ color: "#49d880" }} />
    <span className="text-white">
      Primele {offer.intro_months} luni: {" "}
    </span>
    
    <strong className="text-white ml-5">
      {offer.intro_price.toFixed(2)} €/lună
    </strong>
  </li>
  <li className="d-flex align-items-center justify-content-center text-center">
    <Check size={16} className="me-2" style={{ color: "#49d880" }} />
    <span className="text-white">
      După {offer.intro_months} luni:{" "}
    </span>
    <strong className="text-white">
      {offer.regular_price.toFixed(2)} €/lună
    </strong>
  </li>
</ul>

            <p style={{ fontSize: "14px", opacity: 0.8, color:"white" }}>{offer.copy}</p>

            <button
              className="btn btn-lg fw-bold mt-4"
              onClick={handlepayment}
              style={{
                background: "linear-gradient(135deg, #3587f2 0%, #08b4d5 100%)",
                border: "none",
                borderRadius: "12px",
                padding: "14px 40px",
                color: "white",
                fontSize: "16px",
                boxShadow: "0 4px 15px rgba(6, 182, 212, 0.4)",
              }}
            >
              Începe perioada de probă
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
