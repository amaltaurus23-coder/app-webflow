'use client';
import { useState } from 'react';

// Aapka buttons data yahan embed kar diya gaya hai
const actionsData = {
  "Cancel and Email": {
    "template": "Dear Customer,\n\nI apologize for the inconvenience this may have caused. I am forwarding your cancellation request to our team. You will receive an update on it soon.",
    "icon": "❌"
  },
  "Again Cancellation": {
    "template": "Dear Customer,\n\nWe apologize for the inconvenience this may have caused. I am forwarding your cancellation request to my team again, and a team member will get back to you soon with an update.",
    "icon": "✖️"
  },
  "Release and ship": {
    "template": "Dear Customer,\n\nWe’re sorry for the delay with your order and truly appreciate your patience. Our team is working hard to catch up, and we expect to have your order processed and shipped within 1–2 business days. As soon as it ships, you’ll automatically receive an email with your tracking information.",
    "icon": "✈️"
  },
  "Expedite": {
    "template": "Dear Customer,\n\nApologize for the inconvenience this may have caused. I am checking with my team to expedite your order as soon as possible.",
    "icon": "🚀"
  },
  "Refund Request": {
    "template": "Dear Customer,\nWe will check with our refund team regarding the status of your refund. Normally, once the refund process has been initiated on our end, it can take 7–10 business days for your card issuer to complete the process.",
    "icon": "💸"
  },
  "Refund": {
    "template": "Dear Customer,\n\nWe will inform our internal team about the refund and they will get back to you via email from refund@chicagoknifeworks.com. We apologize for any inconvenience.",
    "icon": "💵"
  },
  "Missing Items Refund": {
    "template": "Dear Customer,\n\nWe sincerely apologize for the inconvenience regarding the missing items from your order. Our team identified a quality issue before shipment. As a result, we will be issuing a full refund.",
    "icon": "📦"
  },
  "USPS Label Created": {
    "template": "Dear Customer,\n\nYour package was dropped off at the post office along with our other bulk shipments. We will contact the USPS processing center regarding your shipment.",
    "icon": "📮"
  },
  "UPS Label Created": {
    "template": "Dear Customer,\n\nWe will check with our warehouse regarding your shipment. I was informed that the UPS driver picked up our bulk shipment.",
    "icon": "📪"
  },
  "Charge Back": {
    "template": "Dear Customer,\n\nWe really apologize for the inconvenience. I will have our company owner Mr Mobeen look into this issue and he will contact you as soon as possible.",
    "icon": "💳"
  },
  "Contact Owner": {
    "template": "Dear Customer,\n\nPlease text our owner mobeen at +17737995555 and he will call you back as soon as possible.",
    "icon": "📞"
  },
  "Return Label": {
    "template": "Dear Customer,\n\nWe apologize for the inconvenience caused. Please open return request on our website and our team will email a return label.",
    "icon": "🏷️"
  },
  "In Transit": {
    "template": "Dear Customer,\n\nApologize for the inconvenience this may have caused. But we have good news for you! Your order is on its way to you.",
    "icon": "🚚"
  },
  "Delivered": {
    "template": "Dear Customer,\n\nAs per the information I received, your package has been delivered. Please let me know if you have received it.",
    "icon": "📦"
  },
  "Order Status": {
    "template": "Dear Customer,\n\nApologize for the inconvenience this may have caused. I have already forwarded your request to my team regarding your order status.",
    "icon": "⏳"
  }
};

export default function OperationsPortal() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  
  const [orderNum, setOrderNum] = useState('');
  const [remarks, setRemarks] = useState('');
  const [selectedAction, setSelectedAction] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'Customoperation') {
      setIsAuthenticated(true);
      setErrorMsg('');
    } else {
      setErrorMsg('😕 Incorrect password! Try again.');
    }
  };

  const handleActionClick = (actionName) => {
    if (!orderNum.trim()) {
      alert('Please enter or paste an order number first!');
      return;
    }
    setSelectedAction(actionName);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Template copied to clipboard!');
  };

  return (
    <main style={{ minHeight: '100vh', background: '#0f172a', color: '#fff', padding: '40px 20px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', background: '#1e293b', padding: '30px', borderRadius: '16px', boxShadow: '0 10px 35px rgba(0,0,0,0.5)' }}>
        
        {/* HEADER TITLE */}
        <h1 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '20px', textAlign: 'center', color: '#80EF80' }}>
          📦 Custom Operations & Response Assistant
        </h1>

        {/* AUTHENTICATION SCREEN */}
        {!isAuthenticated ? (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <h2 style={{ fontSize: '22px', marginBottom: '10px' }}>🔒 Secure Operations Portal</h2>
            <p style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '20px' }}>Please enter your access password</p>
            <form onSubmit={handleLogin}>
              <input 
                type="password" 
                placeholder="Enter password..." 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ padding: '12px 20px', borderRadius: '25px', border: 'none', width: '280px', background: '#D1EAF0', color: '#000', fontWeight: 'bold', textAlign: 'center', outline: 'none' }}
              />
              <br/><br/>
              <button type="submit" style={{ padding: '10px 30px', borderRadius: '25px', border: 'none', background: 'linear-gradient(90deg, #F7BD40, #E8B030)', color: '#000', fontWeight: 'bold', cursor: 'pointer' }}>
                Login
              </button>
            </form>
            {errorMsg && <p style={{ color: '#f87171', marginTop: '15px', fontSize: '13px' }}>{errorMsg}</p>}
          </div>
        ) : (
          /* MAIN APP SCREEN */
          <div>
            {/* INPUTS SECTION */}
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginBottom: '25px' }}>
              <div style={{ flex: '1', minWidth: '250px' }}>
                <label style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 'bold' }}>Order Number:</label><br/>
                <input 
                  type="text" 
                  placeholder="Enter Order Number" 
                  value={orderNum}
                  onChange={(e) => setOrderNum(e.target.value)}
                  style={{ width: '100%', padding: '12px', borderRadius: '12px', border: 'none', background: '#D1EAF0', color: '#000', fontWeight: 'bold', boxSizing: 'border-box', marginTop: '5px', outline: 'none' }}
                />
              </div>
              <div style={{ flex: '1', minWidth: '250px' }}>
                <label style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 'bold' }}>Remarks:</label><br/>
                <input 
                  type="text" 
                  placeholder="Remarks..." 
                  value={remarks}
                  onChange={(e) => setRemarks(e.target.value)}
                  style={{ width: '100%', padding: '12px', borderRadius: '12px', border: 'none', background: '#D1EAF0', color: '#000', fontWeight: 'bold', boxSizing: 'border-box', marginTop: '5px', outline: 'none' }}
                />
              </div>
            </div>

            {/* TEMPLATE DISPLAY BOX OR BUTTONS GRID */}
            {selectedAction ? (
              <div style={{ background: '#0f172a', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <strong style={{ color: '#80EF80', fontSize: '16px' }}>📝 Template: {selectedAction}</strong>
                  <button onClick={() => setSelectedAction(null)} style={{ background: '#334155', color: '#fff', border: 'none', padding: '6px 15px', borderRadius: '20px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}>
                    🔙 Back
                  </button>
                </div>
                <textarea 
                  readOnly 
                  value={actionsData[selectedAction].template}
                  style={{ width: '100%', height: '150px', background: '#D1EAF0', color: '#000', borderRadius: '10px', padding: '12px', border: 'none', fontSize: '14px', boxSizing: 'border-box', fontFamily: 'monospace' }}
                />
                <br/>
                <button onClick={() => copyToClipboard(actionsData[selectedAction].template)} style={{ marginTop: '12px', background: '#00C853', color: '#000', border: 'none', padding: '10px 20px', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer' }}>
                  📋 Copy Template
                </button>
              </div>
            ) : (
              <div>
                <h3 style={{ fontSize: '16px', color: '#80EF80', marginBottom: '12px' }}>Action Buttons</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px' }}>
                  {Object.keys(actionsData).map((name) => {
                    const item = actionsData[name];
                    return (
                      <button 
                        key={name}
                        onClick={() => handleActionClick(name)}
                        style={{ background: 'linear-gradient(90deg, #0F1E31, #348299)', color: 'white', border: 'none', padding: '14px', borderRadius: '25px', fontWeight: 'bold', cursor: 'pointer', textAlign: 'center', fontSize: '13px', transition: '0.3s' }}
                      >
                        {item.icon} {name}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </main>
  );
}
