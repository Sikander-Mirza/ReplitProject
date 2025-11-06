import React from "react";
import { CheckCircle, Clock, Check, Crown } from "lucide-react";

export default function PaymentSuccess() {
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
        {/* Success Header */}
        <div
          className="d-inline-flex align-items-center mb-4 px-3 py-2"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            fontSize: "14px",
            color: "#85baf7",
          }}
        >
          <CheckCircle className="me-2" size={22} color="#49d880" />
          Plata a fost efectuată cu succes
        </div>

        <h1 className="display-5 fw-bold mb-3 text-white">
          Felicitări! Abonamentul tău este activ.
        </h1>

        <p className="mb-5" style={{ opacity: 0.9 }}>
          Ai început perioada ta de probă de <strong>2 zile gratuite</strong>.
        </p>

        {/* Card */}
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
            {/* Icon */}
            <div
              className="d-inline-flex align-items-center justify-content-center mb-3"
              style={{
                width: "70px",
                height: "70px",
                background: "rgba(52, 74, 142, 0.1)",
                borderRadius: "50%",
                boxShadow: "0 8px 25px rgba(59, 130, 246, 0.4)",
              }}
            >
              <Crown size={36} color="white" />
            </div>

            <h3 className="fw-bold mb-3" style={{ color: "white" }}>
              Abonament Premium Activ
            </h3>

            <p className="mb-4 text-white" style={{ opacity: 0.9 }}>
              În următoarele 2 zile poți explora toate funcționalitățile fără costuri.
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
              <Clock size={14} className="me-1" /> 2 zile gratuite
            </div>

            {/* Pricing Details */}
            <h5 className="fw-bold mb-3" style={{ color: "#60a5fa" }}>
              După perioada de probă:
            </h5>

            <ul
              className="list-unstyled mb-4 mx-auto d-flex flex-column align-items-center justify-content-center text-center"
              style={{ maxWidth: "400px" }}
            >
              <li className="mb-2 d-flex align-items-center justify-content-center text-center">
                <Check size={16} className="me-2" style={{ color: "#49d880" }} />
                <span className="text-white">Primele 3 luni:</span>
                <strong className="text-white ms-2">99.9 €/lună</strong>
              </li>
              <li className="d-flex align-items-center justify-content-center text-center">
                <Check size={16} className="me-2" style={{ color: "#49d880" }} />
                <span className="text-white">După 3 luni:</span>
                <strong className="text-white ms-2">150 €/lună</strong>
              </li>
            </ul>

            <p style={{ fontSize: "14px", opacity: 0.8 }}>
              Începând din ziua a 3-a, abonamentul tău va trece automat la planul de
              99.9€/lună pentru primele 3 luni, apoi la prețul standard de 150€/lună.
            </p>

            <button
              className="btn btn-lg fw-bold mt-4"
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
