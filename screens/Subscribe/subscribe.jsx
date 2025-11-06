"use client";
import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify"; // ✅ import toastify
import "react-toastify/dist/ReactToastify.css"; // ✅ include toast styles
import "./subscribe.css";

const stripePromise = loadStripe(import.meta.env.VITE_NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function SubscribePage() {
  const [clientSecret, setClientSecret] = useState(null);
  const [priceId, setPriceId] = useState(null);
  const [loading, setLoading] = useState(true);

  const token = typeof window !== "undefined" ? localStorage.getItem("token") || "" : "";
  const offer = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("offer") || "{}") : {};

  useEffect(() => {
    (async () => {
      try {
        if (offer?.plan?.price_id) setPriceId(offer.plan.price_id);
        else if (offer?.price_id) setPriceId(offer.price_id);

        const response = await axios.post(
          "https://tms.freelancerportfolio.me/api/billing/setup-intent",
          {},
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setClientSecret(response.data.client_secret);
      } catch (err) {
        console.error("Stripe setup error:", err);
        toast.error("Eroare la configurarea plății. Încearcă din nou.");
      } finally {
        setLoading(false);
      }
    })();
  }, [token]);

  if (loading) return <div className="loading">Setting up Stripe...</div>;
  if (!clientSecret || !priceId)
    return <div className="error">Missing Stripe setup details</div>;

  return (
    <div className="payment-container">
      <ToastContainer position="top-center" autoClose={5000} /> {/* ✅ Toast container */}

      <div className="payment-header">
        <div className="badge">Abonament activat cu perioadă de probă</div>
        <h1>Mulțumim pentru plata ta!</h1>
      </div>

      <div className="payment-card">
        <div className="icon">👑</div>
        <h2>Tenant Main Subscription</h2>
        <p>
          Felicitări! Ai acum <span className="highlight">2 zile gratuite</span> pentru a testa toate
          funcționalitățile platformei noastre.
        </p>

        <div className="trial-tag">2 zile gratuite</div>

        <p className="fine-print">
          €99.99 / month for first 3 months (then €150/month). Includes a 2-day free trial.
        </p>

        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm token={token} priceId={priceId} />
        </Elements>
      </div>
    </div>
  );
}

function CheckoutForm({ token, priceId }) {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setBusy(true);
    setError(null);

    try {
      const { setupIntent, error } = await stripe.confirmSetup({
        elements,
        redirect: "if_required",
      });

      if (error) {
        setError(error.message || "Card setup failed");
        toast.error("Plata a eșuat. Încearcă din nou."); // ❌ toast error
        setBusy(false);
        return;
      }

      const payment_method = setupIntent?.payment_method;
      console.log(payment_method, priceId);

      const res = await axios.post(
        "https://tms.freelancerportfolio.me/api/subscriptions/start",
        { payment_method, price: priceId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status === 200) {
        setSuccess(true);
        toast.success("✅ Plata efectuată cu succes!"); // ✅ success toast
        setTimeout(() => {
          navigate("/tenant-dashboard");
          console.log("payment success", res.data);
        }, 1500);
      } else {
        setError(res.data?.message || "Could not start subscription");
        toast.error("Nu s-a putut activa abonamentul.");
      }
    } catch (err) {
      console.error("Subscription start error:", err);
      setError("An unexpected error occurred");
      toast.error("Eroare neașteptată. Încearcă mai târziu.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="stripe-form">
      <PaymentElement />
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">✅ Payment successful! Redirecting...</p>}

      <button type="submit" disabled={!stripe || busy}>
        {busy ? "Processing…" : "Începe perioada de probă"}
      </button>
    </form>
  );
}
