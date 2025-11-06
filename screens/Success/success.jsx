import React from 'react';
import { CheckCircle, Star, ArrowRight, Gift } from 'lucide-react';

export default function TransportSuccessPage() {
  return (
    <div style={{
      background: 'linear-gradient(155deg, #121e3d 0%, #1e40af 50%, #121e3d 100%)',
      minHeight: '100vh',
      color: 'white',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      padding: '60px 20px'
    }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        {/* Success Icon */}
        <div className="text-center mb-4">
          <div className="d-inline-flex align-items-center justify-content-center mb-3" style={{
            width: '80px',
            height: '80px',
            background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
            borderRadius: '50%',
            boxShadow: '0 10px 30px rgba(16, 185, 129, 0.4)'
          }}>
            <CheckCircle size={45} strokeWidth={2.5} />
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-4">
          <h1 className="display-5 fw-bold mb-3">
            Bun venit în <span style={{ color: '#60a5fa' }}>Transport Pro</span>!
          </h1>
          <p style={{ fontSize: '18px', opacity: 0.9 }}>
            Abonamentul tău a fost activat cu succes
          </p>
        </div>

        {/* Trial Period Card */}
        <div className="card mb-4" style={{
          background: 'rgba(59, 130, 246, 0.2)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '16px',
          backdropFilter: 'blur(10px)'
        }}>
          <div className="card-body p-4">
            <div className="text-center mb-4">
              <div className="d-inline-flex align-items-center px-3 py-2" style={{
                
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                color: '#6ee7b7'
              }}>
                <Gift size={32} style={{ color: '#4ade80' }} /> Perioadă de probă activă
              </div>
            </div>

            <div className="row g-3 mb-4">
              <div className="col-md-4">
                <div className="card h-100 text-center p-3" style={{
                  background: 'rgba(59, 130, 246, 0.3)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '12px'
                }}>
                  <h4 className="display-4 fw-bold mb-1" style={{ color: '#60a5fa',fontSize:"30px" }}>3</h4>
                  <p className="mb-0" style={{ fontSize: '14px', opacity: 0.9, color:"white" }}>Zile gratuite</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 text-center p-3" style={{
                  background: 'rgba(16, 185, 129, 0.3)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: '12px'
                }}>
                  <h3 className="h4 fw-bold mb-1" style={{ color: '#6ee7b7',fontSize:"30px" }}>Acces</h3>
                  <h4 className="h5 fw-bold mb-1" style={{ color: '#6ee7b7',fontSize:"30px" }}>complet</h4>
                  <p className="mb-0" style={{ fontSize: '14px', opacity: 0.9,color:"white" }}>Toate funcțiile</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 text-center p-3" style={{
                  background: 'rgba(139, 92, 246, 0.3)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  borderRadius: '12px'
                }}>
                  <h2 className="display-4 fw-bold mb-1" style={{ color: '#c4b5fd',fontSize:"30px" }}>24/7</h2>
                  <p className="mb-0" style={{ fontSize: '14px', opacity: 0.9,color:"white" }}>Suport inclus</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="mb-2" style={{ fontSize: '14px', opacity: 0.9,color:"white" }}>
                Poți anula oricând în următoarele 3 zile fără să plătești nimic.
              </p>
              <p className="mb-0" style={{ fontSize: '14px', opacity: 0.9,color:"white" }}>
                Facturarea va începe după perioada de probă.
              </p>
            </div>
          </div>
        </div>

        {/* What's Next Section */}
        <div className="text-center mb-4">
          <h2 className="h3 fw-bold">Ce urmează?</h2>
        </div>

        <div className="row g-4 mb-4">
          <div className="col-md-6">
            <div className="card h-100" style={{
              background: 'rgba(59, 130, 246, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
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
              <div className="card-body p-4 text-center" style={{ position: 'relative' }}>
  {/* 🌟 Icon on the left */}
  <div
    className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center"
    style={{
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      transform: 'translate(20px, 20px)', // adjust spacing from top-left
    }}
  >
    <Star size={32} style={{ color: '#fbbf24' }} />
  </div>

  {/* 🌟 Centered Content */}
  <div style={{ marginTop: '60px' }}>
    <h3 className="h5 fw-bold mb-3" style={{ color: 'white' }}>
      Explorează sistemul
    </h3>
    <p
      className="mb-4"
      style={{ fontSize: '14px', opacity: 0.9, color: 'white' }}
    >
      Descoperă toate funcțiile avansate și vezi cum îți poate optimiza
      operațiunile.
    </p>
    <button
      className="btn w-100 fw-semibold d-flex align-items-center justify-content-center"
      style={{
        background: 'linear-gradient(135deg, #3984f4 0%, #08b4d5 100%)',
        border: 'none',
        borderRadius: '10px',
        padding: '12px',
        color: 'white',
        fontSize: '15px',
        transition: 'transform 0.2s',
      }}
      onMouseOver={(e) => (e.currentTarget.style.transform = 'translateX(5px)')}
      onMouseOut={(e) => (e.currentTarget.style.transform = 'translateX(0)')}
    >
      Începe să folosești sistemul
      <ArrowRight size={18} className="ms-2" />
    </button>
  </div>
</div>

            </div>
          </div>

          <div className="col-md-6">
            <div className="card h-100" style={{
              background: 'rgba(59, 130, 246, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
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
            <div className="card-body p-4 text-center" style={{ position: 'relative' }}>
  {/* ✅ Icon on the left side */}
  <div
    className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center"
    style={{
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      transform: 'translate(20px, 20px)', // adjust distance from corner
    }}
  >
    <CheckCircle size={32} style={{ color: '#10b981' }} />
  </div>

  {/* ✅ Centered Content */}
  <div style={{ marginTop: '60px' }}>
    <h3 className="h5 fw-bold mb-3" style={{ color: 'white' }}>
      Configurează contul
    </h3>
    <p
      className="mb-4"
      style={{ fontSize: '14px', opacity: 0.9, color: 'white' }}
    >
      Adaugă companiile și șoferii tăi pentru a începe să procesezi comenzi.
    </p>
    <button
      className="btn w-100 fw-semibold d-flex align-items-center justify-content-center"
      style={{
        background: '#000000ff',
        border: 'none',
        borderRadius: '10px',
        padding: '12px',
        color: 'white',
        fontSize: '15px',
        transition: 'transform 0.2s',
      }}
      onMouseOver={(e) => (e.currentTarget.style.transform = 'translateX(5px)')}
      onMouseOut={(e) => (e.currentTarget.style.transform = 'translateX(0)')}
    >
      Configurează datele
      <ArrowRight size={18} className="ms-2" />
    </button>
  </div>
</div>

            </div>
          </div>
        </div>

        {/* Support Section */}
        <div
  className="card mx-auto my-4 shadow-sm"
  style={{
    background: 'linear-gradient(135deg, #0b261a 20%, #0e1c35 100%)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    backdropFilter: 'blur(10px)',
    maxWidth: '800px',
  }}
>
  <div
    className="card-body text-center p-4 p-md-5"
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <h3
      className="h5 h4-md fw-bold mb-3"
      style={{
        color: 'white',
        lineHeight: 1.4,
      }}
    >
      Ai întrebări? Suntem aici să te ajutăm!
    </h3>

    <p
      className="mb-4 px-2 px-sm-4"
      style={{
        opacity: 0.8,
        color: 'white',
        maxWidth: '500px',
      }}
    >
      Echipa noastră de suport este disponibilă 24/7 pentru a te ghida.
    </p>

    <button
      className="btn fw-semibold px-4 py-2 px-md-5 btn-outline-light"
      style={{
        borderRadius: '10px',
        borderWidth: '2px',
        borderColor: '#124d30',
        backgroundColor: 'black',
        color: '#78d59a',
        transition: 'all 0.3s ease',
        fontSize: '0.9rem',
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.background = 'white';
        e.currentTarget.style.color = '#1e40af';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.background = 'black';
        e.currentTarget.style.color = '#78d59a';
      }}
    >
      Contactează suportul
    </button>
  </div>
</div>

      </div>
    </div>
  );
}