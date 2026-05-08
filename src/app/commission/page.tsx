"use client";

import React, { useState } from 'react';

export default function Commission() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      budget: formData.get('budget'),
      date: formData.get('date'),
      vision: formData.get('vision'),
    };

    try {
      const res = await fetch('/api/commission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      console.log('Frontend response:', result);

      if (res.ok) {
        setSubmitted(true);
      } else {
        console.error('Error:', result);
      }
    } catch (err) {
      console.error('Request failed:', err);
    }
  };

  return (
    <div className="commission-page" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="font-serif text-center mb-4" style={{ fontSize: '3rem' }}>Commission an Original</h1>
      <p className="text-center mb-8" style={{ color: 'var(--text-secondary)' }}>
        I am so excited to work with you! Please provide some preliminary details, and I will be in touch to schedule a consultation!
      </p>

      {submitted ? (
        <div className="text-center p-8" style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '4px' }}>
          <h2 className="font-serif mb-2" style={{ fontSize: '2rem', color: 'var(--accent)' }}>Thank You</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Your request has been received. We will contact you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ background: 'var(--surface)', padding: '3rem', border: '1px solid var(--border)', borderRadius: '4px' }}>
          <div className="form-group">
            <label className="form-label" htmlFor="name">Full Name</label>
            <input className="form-input" type="text" id="name" name="name" required placeholder="Jane Doe" />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="email">Email Address</label>
            <input className="form-input" type="email" id="email" name="email" required placeholder="jane@example.com" />
          </div>

          <div className="grid mb-4" style={{ gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <label className="form-label" htmlFor="budget">Estimated Budget</label>
              <select className="form-input" id="budget" name="budget" required>
                <option value="">Select a range</option>
                <option value="100-1000">$100 - $1,000</option>
                <option value="1000-3000">$1,000 - $3,000</option>
                <option value="3000-5000">$3,000 - $5,000</option>
                <option value="5000+">$5,000+</option>
              </select>
            </div>
            <div>
              <label className="form-label" htmlFor="date">Event Date</label>
              <input className="form-input" type="date" id="date" name="date" required />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="vision">Your Vision</label>
            <textarea
              className="form-textarea"
              id="vision"
              name="vision"
              required
              placeholder="Describe the aesthetic, colors, any inspirations you pull from, etc."
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
            Submit Request
          </button>
        </form>
      )}
    </div>
  );
}
